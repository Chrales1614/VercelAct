import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-featured online shop with product listings, shopping cart, and secure checkout system.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      imageUrl: "/images/project1.jpg",
      githubLink: "https://github.com/yourusername/ecommerce-project",
      liveLink: "https://ecommerce-project.vercel.app/"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "A real-time weather application that displays current conditions and forecasts for any location.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      imageUrl: "/images/project2.jpg",
      githubLink: "https://github.com/yourusername/weather-dashboard",
      liveLink: "https://weather-dashboard.vercel.app/"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity tool that helps users organize tasks with features like drag-and-drop, filters, and reminders.",
      technologies: ["React", "Redux", "Firebase", "Material UI"],
      imageUrl: "/images/project3.jpg",
      githubLink: "https://github.com/yourusername/task-manager",
      liveLink: "https://task-manager.vercel.app/"
    }
  ];

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <p className="page-intro">Here are some of the projects I've worked on. Click on each for more details.</p>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              {/* Replace with actual images when available */}
              <div className="image-placeholder">{project.title} Image</div>
            </div>
            
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              
              <div className="technologies">
                <h3>Technologies Used:</h3>
                <ul>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-links">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn github-btn"
                >
                  GitHub Repository
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn live-btn"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;