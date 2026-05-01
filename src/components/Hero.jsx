import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSiteContent } from '../context/SiteContext';
import './Hero.css';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const { content } = useSiteContent();

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!content) return null;

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <video 
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}${content.hero.videoUrl}`} 
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
        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: content.hero.title }}></h1>
        <p className="hero-subtitle">
          {content.hero.subtitle}
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
