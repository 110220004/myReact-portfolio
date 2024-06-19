import React, { useState } from 'react';

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
      <p className="description">gonna need to think hard about this one</p>
      <img src="https://via.placeholder.com/150" alt="Profile Picture" className="profile-pic" />
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {details}
    </div>
  );
};

export default About;