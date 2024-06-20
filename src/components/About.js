import React, { useState } from 'react';
import profilePic from './based.jpg';

const About = () => {
  const [showDetails, setShowDetails] = useState(false);

  const details = showDetails && (
    <div className="details">
      <p>Age: 20</p>
      <p>Location: Costa Rica</p>
      <p>Occupation: Systems Engineer Student</p>
    </div>
  );

  return (
    <div className="about-container">
      <h2 className="title">About Me</h2>
      <p className="description">Hey my name is Wendell Powery. I'm a learning programmer and currently studying to be Systems Engineer. Some of my hobbies are playing video games, fishing and playing sports (occasionally)</p>
      <div className="center-container">
        <img src={profilePic} alt="Profile Picture" className="profile-pic" />
        <button className="btn" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      {details}
    </div>
  );
};

export default About;