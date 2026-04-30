import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import BackButton from '../components/BackButton';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      <BackButton to="/" label="Back to Home" />
      <div className="page-header" style={{ marginBottom: 0 }}>
        <h1>Get in <span>Touch</span></h1>
        <p>We would love to hear from you. Reach out to our team today.</p>
      </div>
      
      <div style={{ paddingBottom: '4rem' }}>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
