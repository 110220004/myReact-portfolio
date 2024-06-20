import React, { useState } from 'react';

const Projects = () => {
  const [projects] = useState([
    {
      name: 'Laboratorio de HTML',
      description: 'A very basic portafolio about myself',
      link: 'https://github.com/110220004/EC2-Laboratorio-de-HTML'
    },
    {
      name: 'Java Projects',
      description: 'A couple of Java projects that I made',
      link: 'https://github.com/110220004/java_projects'
    },
    {
      name: 'Exchange App',
      description: 'As the tittle says an exchange app to convert any currency',
      link: 'https://github.com/110220004/exchange-app'
    },
    {
      name: 'Todo App',
      description: 'A todo app to keep a list of things that are in your schedule',
      link: 'https://github.com/110220004/EC5-Todo-App'
    },
    {
      name: 'Mini Proyecto 1',
      description: 'A calculator for when you need to do some basic equations',
      link: 'https://github.com/110220004/MP1-Mini-Proyecto-1'
    },
    {
      name: 'Surprise',
      description: 'click and find out',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
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