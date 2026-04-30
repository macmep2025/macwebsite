import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData.json';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('commercial');

  const currentProjects = projectsData[activeTab] || [];

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Our <span>Projects</span></h1>
        <p>Explore our extensive portfolio across various divisions in the UAE and beyond.</p>
      </div>

      <div className="container projects-page-container">
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'commercial' ? 'active' : ''}`}
            onClick={() => setActiveTab('commercial')}
          >
            Commercial & Residential
          </button>
          <button 
            className={`tab-btn ${activeTab === 'villas' ? 'active' : ''}`}
            onClick={() => setActiveTab('villas')}
          >
            Villas Division
          </button>
          <button 
            className={`tab-btn ${activeTab === 'fitout' ? 'active' : ''}`}
            onClick={() => setActiveTab('fitout')}
          >
            Fitout Division
          </button>
        </div>

        <div className="project-grid">
          {currentProjects.map((project, index) => (
            <Link to={`/projects/${activeTab}/${index}`} key={index} className="project-card glass">
              <div className="project-img-wrapper">
                <img src={project.src} alt={project.alt || 'Project image'} loading="lazy" />
                <div className="project-overlay">
                  <h3>View Details</h3>
                </div>
              </div>
              <div className="project-info">
                <h4>{project.text}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
