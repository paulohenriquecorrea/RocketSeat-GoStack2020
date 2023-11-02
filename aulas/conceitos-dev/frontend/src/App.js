import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="HTML">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="CSS">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
