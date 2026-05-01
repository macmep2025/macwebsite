import React from 'react';
import About from '../components/About';
import BackButton from '../components/BackButton';
import { useSiteContent } from '../context/SiteContext';
import './AboutPage.css';

const AboutPage = () => {
  const { content } = useSiteContent();
  if (!content) return null;

  return (
    <div className="page-wrapper">
      <BackButton to="/" label="Back to Home" />
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
              <p>{content.aboutPage.vision}</p>
            </div>
            <div className="vm-card glass">
              <h2>Our <span>Mission</span></h2>
              <p>{content.aboutPage.mission1}</p>
              <p>{content.aboutPage.mission2}</p>
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
              <a href={`${import.meta.env.BASE_URL}certifications/iso_9001.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{marginTop: '1rem', padding: '8px 16px', fontSize: '0.9rem'}}>View Certificate</a>
            </div>
            <div className="iso-card glass">
              <h3>Occupational Health & Safety (OHSAS)</h3>
              <p>ISO 45001 Certified</p>
              <a href={`${import.meta.env.BASE_URL}certifications/iso_45001.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{marginTop: '1rem', padding: '8px 16px', fontSize: '0.9rem'}}>View Certificate</a>
            </div>
            <div className="iso-card glass">
              <h3>Environmental Management System (EMS)</h3>
              <p>ISO 14001 Certified</p>
              <a href={`${import.meta.env.BASE_URL}certifications/iso_14001.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{marginTop: '1rem', padding: '8px 16px', fontSize: '0.9rem'}}>View Certificate</a>
            </div>
          </div>
        </div>
      </section>

      <section className="management-section">
        <div className="container">
          <h2 className="section-title">Our <span>Leadership</span></h2>
          <div className="ceo-profile glass">
            <div className="ceo-image">
              <img src={`${import.meta.env.BASE_URL}${content.aboutPage.ceoImage}`} alt={`${content.aboutPage.ceoName} - CEO`} />
            </div>
            <div className="ceo-info">
              <h2>{content.aboutPage.ceoName}</h2>
              <h4>{content.aboutPage.ceoTitle}</h4>
              <p>{content.aboutPage.ceoBio1}</p>
              <p>{content.aboutPage.ceoBio2}</p>
              <p>{content.aboutPage.ceoBio3}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
