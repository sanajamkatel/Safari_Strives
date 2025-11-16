import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Logo size="medium" />
            </div>
            <p className="footer-description">
              Creating lasting change through sustainable community development, 
              education, and empowerment programs worldwide.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/safari-strives/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/@SafariStrives" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com/safaristrives/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Initiatives</h4>
            <ul>
              <li><Link to="/microloans">Microloans at 0% Interest</Link></li>
              <li><Link to="/weekly-meals">Weekly Meals Initiative</Link></li>
              <li><Link to="/medical-support">Medical & Sanitation Support</Link></li>
              <li><Link to="/teaching">Sustainable Teaching</Link></li>
              <li><Link to="/sanitary">Bathrooms & Hygiene Access</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul>
              <li><a href="#donate">Make a Donation</a></li>
              <li><a href="#volunteer">Volunteer</a></li>
              <li><a href="#partner">Partnership</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>
                <i className="fas fa-envelope"></i>
                contact@safaristrives.org
              </p>
              <p>
                <i className="fas fa-phone"></i>
                US +1 (716) 682-2683
              </p>
              <p>
                <i className="fas fa-phone"></i>
                RW (+25) 0785191825
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                4922 134th st Crestwood IL
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Safari Strives. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#transparency">Financial Transparency</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;