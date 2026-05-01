import React from 'react';
import './Projects.css';
import { useSiteContent } from '../context/SiteContext';

const Projects = () => {
  const { content } = useSiteContent();
  if (!content || !content.projects) return null;

  // Grab the first 4 commercial projects to feature on the homepage
  const featuredProjects = content.projects.commercial.slice(0, 4);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        
        <div className="projects-grid">
          {featuredProjects.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <img src={proj.src} alt={proj.alt || 'Featured project'} className="project-img" />
              <div className="project-overlay glass">
                <span className="project-tag">Commercial</span>
                <h3>{proj.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
