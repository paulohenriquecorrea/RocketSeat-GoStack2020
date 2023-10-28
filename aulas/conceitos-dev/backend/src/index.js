const express = require('express');

const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

app.get('/', (req, res) => {
  // const query = req.query;

  // const { title, owner, pages } = req.query;

  // console.log(title);
  // console.log(owner);
  // console.log(pages);

  res.json(projects);
});

app.get('/projects', (req, res) => {
  const { title } = req.query;

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  res.send(results);
});

app.post('/projects', (req, res) => {
  const { title, author, pages } = req.body;

  const project = { id: uuid(), title, author, pages };

  projects.push(project);

  res.json(project);
});

app.put('/projects/:id', (req, res) => {
  // const params = req.params;

  const { id } = req.params;

  const { title, author, pages } = req.body;

  const projectIndex = projects.findIndex((project) => project.id == id);

  if (projectIndex < 0) {
    return res.status(400).send({ error: 'Project not found.' });
  }

  const project = {
    id,
    title,
    author,
    pages,
  };

  projects[projectIndex] = project;

  res.json(project);
});

app.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex((project) => project.id == id);

  if (projectIndex < 0) {
    return res.status(400).send({ error: 'Project not found!' });
  }

  projects.splice(projectIndex, 1);

  res.status(204).send();
});

app.listen(3333, () => {
  console.log('🚀 Back-end started! ');
});
