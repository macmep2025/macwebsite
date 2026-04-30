import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData.json';
import './ProjectDetailsPage.css';

const ProjectDetailsPage = () => {
  const { division, id } = useParams();
  const navigate = useNavigate();
  
  const projectList = projectsData[division];
  const project = projectList ? projectList[parseInt(id)] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, division]);

  if (!project) {
    return (
      <div className="page-wrapper details-error">
        <div className="container">
          <h2>Project Not Found</h2>
          <button className="btn" onClick={() => navigate('/projects')}>Back to Projects</button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      <div className="details-header" style={{ backgroundImage: `url(${project.src})` }}>
        <div className="details-overlay">
          <div className="container">
            <Link to="/projects" className="back-link">
              &larr; Back to Projects
            </Link>
            <h1 className="details-title">{project.text}</h1>
            <span className="details-badge">{division.toUpperCase()} DIVISION</span>
          </div>
        </div>
      </div>
      
      <div className="container details-content">
        <div className="details-image-large glass">
          <img src={project.src} alt={project.alt || 'Project large view'} />
        </div>
        <div className="details-description glass">
          <h2>About The Project</h2>
          <p>
            {project.text}. This project is part of our extensive {division} portfolio. 
            MAC Electromechanical Engineering LLC takes pride in delivering world-class MEP 
            solutions tailored to the specific needs of each unique development.
          </p>
          <div className="details-meta">
            <div className="meta-item">
              <span className="meta-label">Client/Location:</span>
              <span className="meta-value">UAE</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Division:</span>
              <span className="meta-value" style={{textTransform: 'capitalize'}}>{division}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
