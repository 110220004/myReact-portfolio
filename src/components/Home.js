import React, { useState } from 'react';

const Socials = () => (
  <div className="socials-container">
    <a href="https://www.facebook.com/levy.powery/" target="_blank" rel="noopener noreferrer">
      Facebook
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
    </a>
    <a href="https://www.instagram.com/powerylevy/" target="_blank" rel="noopener noreferrer">
      Instagram
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
    </a>
    <a href="https://steamcommunity.com/profiles/76561199378818934/" target="_blank" rel="noopener noreferrer">
      Steam
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" alt="Steam" />
    </a>
    <a href="https://github.com/110220004" target="_blank" rel="noopener noreferrer">
      GitHub
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
    </a>
    <a href="https://account.xbox.com/en-us/Profile?xr=mebarnav&rtc=1&csrf=qaouJRCcKaSHsxXLf3EpVBhiMT-WfO7lzu-6DOJs7AS1BO6JQ-aD2Qxs6TRNnhyWmPbqCAMkbRckgiNJfE_GzrCMqK81&wa=wsignin1.0" target="_blank" rel="noopener noreferrer">
      Xbox
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Xbox_one_logo.svg" alt="Xbox" />
    </a>
    <a href="https://forum.psnprofiles.com/profile/579021-invisibleorange4/" target="_blank" rel="noopener noreferrer">
      PlayStation
      <img src="https://icon-library.com/images/playstation-icon-png/playstation-icon-png-16.jpg" alt="PlayStation" />
    </a>
    <a href="mailto:levypowery@gmail.com">
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