import React, { useState } from 'react';

const Projects = () => {
  const [projects] = useState([
    {
      name: 'Project 1',
      description: 'pending',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      name: 'Project 2',
      description: 'still pending',
      link: 'https://www.example.com'
    },
    {
      name: 'Exchange App',
      description: 'pending',
      link: 'https://github.com/110220004/exchange-app'
    },
    {
      name: 'Todo App',
      description: 'pending',
      link: 'https://github.com/110220004/EC5-Todo-App'
    },
    {
      name: 'Mini Proyecto 1',
      description: 'pending',
      link: 'https://github.com/110220004/MP1-Mini-Proyecto-1'
    },
    // ... other projects
  ]);

  return (
    <div className="projects-container">
      <h2 className="title">Projects</h2>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;