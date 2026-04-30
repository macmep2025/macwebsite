import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title" style={{textAlign: 'left'}}>20 Years of <span>Combined Experience</span></h2>
            <p>
              MAC is one of the leading Electromechanical companies in the UAE, with a portfolio that includes some of biggest Clients and Projects here. Over the last 20 years, MAC has transformed from a small company into a recognized leader in the MEP Field, committed to deliver only the highest quality work.
            </p>
            <p>
              We strive to stay at the forefront as our company grows, embracing any market changes and the needs of our clients. We continuously improve our skill set to separate us from our competition and enhance our loyal clients relationships.
            </p>
          </div>
          
          <div className="about-features">
            <div className="feature-card glass">
              <div className="feature-icon">M</div>
              <div>
                <h3>Motivation</h3>
                <p>To excel in what we do is what drives us</p>
              </div>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">A</div>
              <div>
                <h3>Accountability</h3>
                <p>and Transparency is what distinguish us</p>
              </div>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon">C</div>
              <div>
                <h3>Commitment</h3>
                <p>To client satisfaction is our prime rule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
