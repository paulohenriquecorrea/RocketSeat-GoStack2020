const express = require('express');
const cors = require('cors');

const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(cors());

app.use(express.json());

const projects = [];

function logRequest(req, res, next) {
  const { method, url } = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  return next(); // Chama o próximo middleware
}

function validateProjectId(req, res, next) {
  const { id } = req.params;

  if (!isUuid(id)) {
    return res.status(400).json({ error: 'Invalid Project ID' });
  }

  return next();
}

app.use(logRequest);
app.use('/projects/:id', validateProjectId);

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
  console.log('🚀 Back-end started in port 3333! ');
});
