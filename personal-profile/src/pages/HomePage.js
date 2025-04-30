import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Hello, I'm Your Name</h1>
        <h2>Web Developer & Designer</h2>
        <p>Welcome to my personal portfolio website</p>
      </div>
      
      <div className="intro-section">
        <h3>A Brief Introduction</h3>
        <p>
          I am a passionate web developer with expertise in creating responsive 
          and user-friendly websites. I specialize in frontend technologies 
          including React, JavaScript, HTML and CSS.
        </p>
        <div className="cta-buttons">
          <a href="/projects" className="btn primary-btn">View My Work</a>
          <a href="/contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;