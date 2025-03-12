import React from 'react';

const Resume = () => {
  return (
    <section className="resume-container">
      <h1>Resume</h1>
      <div className="download-link">
        <a href="/path/to/your/resume.pdf" download="Nicholas_Resume.pdf" className="download-button">
          Download My Resume
        </a>
      </div>
      <div className="section">
        <h2>Frontend Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Vite</li>
        </ul>
      </div>

      <div className="section">
        <h2>Backend Skills</h2>
        <ul>
          <li>Node.js</li>
          <li>SQL</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;