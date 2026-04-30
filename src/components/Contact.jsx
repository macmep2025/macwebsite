import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        
        <div className="contact-wrapper glass">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>For any inquiries, questions or commendations, please call us or fill out the form.</p>
            
            <div className="info-item">
              <div className="icon">📍</div>
              <div>
                <h4>Head Office</h4>
                <p>Al Qusais Industrial Area 2, Damascus street<br/>Dubai, U.A.E</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+971 4 2388806</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>info@mac-mep.com</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
