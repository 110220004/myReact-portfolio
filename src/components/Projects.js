import React, { useState } from 'react';

const Projects = () => {
  const [projects] = useState([
    {
      name: 'Project 1',
      description: 'pending',
      imageUrl: 'https://via.placeholder.com/150',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      name: 'Project 2',
      description: 'still pending',
      imageUrl: 'https://via.placeholder.com/150',
      link: 'https://www.example.com'
    },
    
  ]);

  return (
    <div className="projects-container">
      <h2 className="title">Projects</h2>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={project.name} />
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