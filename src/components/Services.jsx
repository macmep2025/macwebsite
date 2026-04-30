import React from 'react';
import './Services.css';
import mechImg from '../assets/img/mech_img.png';
import elecImg from '../assets/img/elec_img.png';
import fireImg from '../assets/img/fire_img.png';

const Services = () => {
  const services = [
    {
      title: "Mechanical Works",
      img: mechImg,
      desc: "Complete Air Conditioning (Chillers, AHU's, FCU's), Kitchen Hood & Air Treatment, Refrigerant Piping & Control Valves, Cooling Towers, and Specialized Engineering Services like LPG, Steam, and Central Vacuum Systems."
    },
    {
      title: "Electrical Works",
      img: elecImg,
      desc: "Power Distribution Systems, Lighting & Control, Low Current & Data Structured Cabling, LV/MV/HV Power Networks, Switchgear & Control Centers, and Lightning Protection."
    },
    {
      title: "Fire Protection",
      img: fireImg,
      desc: "Automatic Sprinklers & Dry Systems, Pump Rooms, Water Deluge, Fire Alarm & Emergency Lighting, FM200, and Wet-Chemical Clean-Agent Fire Suppression Systems."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our <span>Services</span></h2>
        
        <div className="services-grid">
          {services.map((srv, index) => (
            <div className="service-card glass" key={index}>
              <div className="card-img-wrapper">
                <img src={srv.img} alt={srv.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
                <a href="#" className="read-more">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
