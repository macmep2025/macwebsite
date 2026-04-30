import React from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';

const BackButton = ({ to = "/", label = "Back to Home" }) => {
  return (
    <div className="back-btn-container">
      <Link to={to} className="global-back-btn glass">
        <span className="arrow">&larr;</span> {label}
      </Link>
    </div>
  );
};

export default BackButton;
