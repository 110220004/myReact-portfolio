import React, { useState } from 'react';

const Skills = () => {
  const [skills] = useState([
    {
      name: 'python',
      icon: 'fas fa-html5'
    },
    {
      name: 'Java',
      icon: 'fas fa-css3-alt'
    },
    {
      name: 'Android Studio',
      icon: 'fas fa-js'
    },
  ]);

  return (
    <div className="skills-container">
      <h2 className="title">Skills</h2>
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