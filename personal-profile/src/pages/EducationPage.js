import React from 'react';

const EducationPage = () => {
  const education = [
    {
      id: 1,
      institution: "University Name",
      degree: "Bachelor of Science in Computer Science",
      duration: "2018 - 2022",
      description: "Focused on web development, software engineering, and database management systems. Graduated with honors.",
    },
    {
      id: 2,
      institution: "Community College Name",
      degree: "Associate Degree in Web Development",
      duration: "2016 - 2018",
      description: "Studied fundamentals of web design, HTML, CSS, and JavaScript."
    }
  ];

  const courses = [
    "Advanced JavaScript Programming",
    "Modern Frontend Frameworks (React, Vue, Angular)",
    "Backend Development with Node.js",
    "Database Design and Implementation",
    "UI/UX Design Principles",
    "Responsive Web Design"
  ];

  return (
    <div className="education-page">
      <h1>Education</h1>
      
      <div className="education-history">
        <h2>Academic Background</h2>
        {education.map(item => (
          <div className="education-item" key={item.id}>
            <h3>{item.institution}</h3>
            <p className="degree">{item.degree}</p>
            <p className="duration">{item.duration}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="courses">
        <h2>Relevant Courses</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
      
      <div className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>
            <h3>Full Stack Web Development</h3>
            <p>Udemy, 2023</p>
          </li>
          <li>
            <h3>React Developer Certification</h3>
            <p>Meta (formerly Facebook), 2022</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EducationPage;