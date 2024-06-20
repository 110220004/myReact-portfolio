import React, { useState } from 'react';

const Socials = () => (
  <div className="socials-container">
    <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
      Facebook
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
    </a>
    <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
      Instagram
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
    </a>
    <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
      WhatsApp
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
    </a>
    <a href="mailto:youremail@example.com">
      Email
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Email" />
    </a>
  </div>
);

const Home = () => {
  const [showSocials, setShowSocials] = useState(false);

  const handleButtonClick = () => {
    setShowSocials(!showSocials);
  };

  return (
    <div className="home-container">
      <h1 className="title">Wendell Powery</h1>
      <p className="subtitle">Fullstack Developer</p>
      <button className="btn" onClick={handleButtonClick}>Get in Touch</button>
      {showSocials && <Socials />}
    </div>
  );
};

export default Home;