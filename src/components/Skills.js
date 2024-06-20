import React, { useState } from 'react';

const Skills = () => {
  const [skills] = useState([
    {
      name: 'Python',
      icon: 'fab fa-python'
    },
    {
      name: 'Java',
      icon: 'fab fa-java'
    },
    {
      name: 'Android Studio',
      icon: 'fab fa-android'
    },
    {
      name: 'React',
      icon: 'fab fa-react'
    },
    {
      name: 'Svelte',
      icon: 'fab fa-svelte'
    },
    {
      name: 'HTML and JavaScript',
      icon: 'fab fa-js'
    }
  ]);

  return (
    <div className="skills-container">
      <h2 className="title">Skills</h2>
      <h3 className="title">Some of the things I'm familiar with</h3>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <i className={skill.icon} />
            <h3>{skill.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;