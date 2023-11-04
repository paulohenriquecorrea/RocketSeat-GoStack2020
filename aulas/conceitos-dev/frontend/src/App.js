import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
// import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   api.get('projects').then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  useEffect(async () => {
    const response = await api.get('projects');
    setProjects(response.data);
  }, []);

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`);
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    console.log(projects);
  }
  return (
    <>
      <Header title="Projects" />

      {/* <img width={300} src={backgroundImage} /> */}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
