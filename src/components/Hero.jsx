import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <video 
          ref={videoRef}
          src="/hero_video.mp4" 
          autoPlay 
          muted={isMuted} 
          loop 
          playsInline
        ></video>
        <div className="overlay"></div>
      </div>
      
      <button className="mute-toggle-btn glass" onClick={toggleMute}>
        {isMuted ? '🔇 Unmute Sound' : '🔊 Mute Sound'}
      </button>
      
      <div className="container hero-content">
        <h1 className="hero-title">
          Delivering <span>High Quality</span> Services With Best Practices
        </h1>
        <p className="hero-subtitle">
          MAC is a recognized leader in the MEP Field in the UAE, committed to delivering professional Electromechanical Engineering Contracting.
        </p>
        <div className="hero-actions">
          <Link to="/about" className="btn">About Us</Link>
          <Link to="/projects" className="btn btn-outline">View Our Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
