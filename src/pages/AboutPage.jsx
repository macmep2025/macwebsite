import React from 'react';
import About from '../components/About';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>About <span>MAC MEP</span></h1>
        <p>Discover our history, mission, and the people behind our success.</p>
      </div>
      
      <About />
      
      <section className="vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card glass">
              <h2>Our <span>Vision</span></h2>
              <p>MAC's vision is to be the leading Electromechanical company in the UAE region, through excelling in all of our provided services, driven by passion for what we do and dedication.</p>
            </div>
            <div className="vm-card glass">
              <h2>Our <span>Mission</span></h2>
              <p>It’s our mission to distinguish ourselves by the quality of work we provide. We will accomplish this through delivering high quality, on schedule, and cost effective projects to the public and private sectors.</p>
              <p>We are a team of talented individuals dedicated to building strong relationships with our clients, vendors, and employees. We maintain an ethical approach to business with honesty, friendliness, and gratitude.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="iso-section bg-dark">
        <div className="container">
          <h2 className="section-title">ISO <span>Certifications</span></h2>
          <div className="iso-grid">
            <div className="iso-card glass">
              <h3>Quality Management System (QMS)</h3>
              <p>ISO 9001 Certified</p>
            </div>
            <div className="iso-card glass">
              <h3>Occupational Health & Safety (OHSAS)</h3>
              <p>ISO 45001 Certified</p>
            </div>
            <div className="iso-card glass">
              <h3>Environmental Management System (EMS)</h3>
              <p>ISO 14001 Certified</p>
            </div>
          </div>
        </div>
      </section>

      <section className="management-section">
        <div className="container">
          <h2 className="section-title">Our <span>Leadership</span></h2>
          <div className="ceo-profile glass">
            <div className="ceo-info">
              <h2>Taher Sartawi</h2>
              <h4>Chief Executive Officer</h4>
              <p>Eng. Sartawi has more than 20 years in the field of electromechanical construction within the UAE area. He has led multi-disciplinary and multi-cultural teams in highly technical and complex environments on several projects.</p>
              <p>Taher has developed and implemented business strategies that have led to significant growth in the MEP field. His areas of expertise include executive management, technical leadership, project management of complex projects, managing diversity, managing change, and EPC/EPCM projects.</p>
              <p>He holds a bachelor’s degree in Engineering (Thermal and Hydraulic Machine Engineering).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
