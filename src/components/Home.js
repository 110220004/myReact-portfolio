import React, { useState } from 'react';

const Socials = () => (
  <div className="socials-container">
    <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">Facebook</a>
    <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a>
    <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    <a href="mailto:youremail@example.com">Email</a>
    <a href="tel:yourphonenumber">Phone Number</a>
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