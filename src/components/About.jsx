import React from 'react';
import { useSiteContent } from '../context/SiteContext';
import './About.css';

const About = () => {
  const { content } = useSiteContent();
  if (!content) return null;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title" style={{textAlign: 'left'}} dangerouslySetInnerHTML={{ __html: content.about.title }}></h2>
            <p>{content.about.text1}</p>
            <p>{content.about.text2}</p>
          </div>
          
          <div className="about-features">
            <div className="feature-card glass">
              <div className="feature-icon">M</div>
              <div>
                <h3>{content.about.feature1Title}</h3>
                <p>{content.about.feature1Text}</p>
              </div>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">A</div>
              <div>
                <h3>{content.about.feature2Title}</h3>
                <p>{content.about.feature2Text}</p>
              </div>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">C</div>
              <div>
                <h3>{content.about.feature3Title}</h3>
                <p>{content.about.feature3Text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
