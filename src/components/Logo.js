import React from 'react';
import logoImage from '../assets/Favicon.png';
import './Logo.css';

const Logo = ({ size = 'medium', scrolled = false }) => {
  return (
    <div className={`safari-logo-container ${size} ${scrolled ? 'scrolled' : ''}`}>
      <img 
        src={logoImage} 
        alt="Safari Strives - Every Person, Every Opportunity" 
        className="safari-logo-image"
      />
    </div>
  );
};

export default Logo;