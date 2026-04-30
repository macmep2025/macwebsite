import React from 'react';
import './Projects.css';
import projectImg from '../assets/img/project_img.png';

const Projects = () => {
  const projects = [
    { name: "CAVALLI COUTURE", desc: "2B+G+M+16 Floors + RF", tag: "High-Rise" },
    { name: "DAMAC HILLS", desc: "Luxury Villas MEP Fitout", tag: "Villas" },
    { name: "DUBAI MALL EXTENSION", desc: "Commercial MEP Services", tag: "Commercial" },
    { name: "ROYAL ATLANTIS", desc: "Specialized Mechanical Works", tag: "Hospitality" },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <img src={projectImg} alt={proj.name} className="project-img" />
              <div className="project-overlay glass">
                <span className="project-tag">{proj.tag}</span>
                <h3>{proj.name}</h3>
                <p>{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
