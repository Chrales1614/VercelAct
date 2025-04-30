import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      
      <div className="about-content">
        <div className="profile-image">
          {/* You can add your image here */}
          <div className="image-placeholder">Your Image</div>
        </div>
        
        <div className="bio">
          <h2>Personal Background</h2>
          <p>
            I am a web developer with a passion for creating beautiful, functional websites.
            With X years of experience in the field, I've worked on various projects ranging
            from small business websites to complex web applications.
          </p>
          
          <h2>Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>HTML5, CSS3, JavaScript</li>
                <li>React.js</li>
                <li>Responsive Design</li>
                <li>Bootstrap, Tailwind CSS</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
          </div>
          
          <h2>Hobbies & Interests</h2>
          <p>
            When I'm not coding, I enjoy hiking, reading science fiction novels, 
            and attending tech meetups. I'm also interested in photography and 
            occasionally volunteer for local community events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;