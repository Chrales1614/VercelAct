import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Your Name</h1>
        <p>Web Developer</p>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;