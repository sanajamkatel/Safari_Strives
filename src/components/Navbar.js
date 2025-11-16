import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';
import './Navbar.css';
import Search from './Search';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [devDropdownOpen, setDevDropdownOpen] = useState(false);
  const [socialDropdownOpen, setSocialDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setDevDropdownOpen(false);
    setSocialDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setDevDropdownOpen(false);
    setSocialDropdownOpen(false);
  };

  const toggleDevDropdown = () => {
    setDevDropdownOpen((prev) => !prev);
    setSocialDropdownOpen(false);
  };

  const toggleSocialDropdown = () => {
    setSocialDropdownOpen((prev) => !prev);
    setDevDropdownOpen(false);
  };

  const closeAllDropdowns = () => {
    setDropdownOpen(false);
    setDevDropdownOpen(false);
    setSocialDropdownOpen(false);
  };


  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          <Logo size="small" scrolled={isScrolled} />
        </Link>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <div 
              className="nav-link dropdown-toggle"
              onClick={toggleDropdown}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              About <i className="fas fa-chevron-down"></i>
              <motion.div 
                className={`dropdown-content ${dropdownOpen ? 'active' : ''}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: dropdownOpen ? 1 : 0, y: dropdownOpen ? 0 : -10 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/about" onClick={closeMobileMenu}>
                  <i className="fas fa-info-circle"></i>
                  About Safari Strive
                </Link>
                <div className="dropdown-divider"></div>
                
                {/* Chicken Initiative Sub-dropdown */}
                <div className="sub-dropdown">
                  <div 
                    className="sub-dropdown-toggle"
                    onClick={toggleDevDropdown}
                    onMouseEnter={() => setDevDropdownOpen(true)}
                    onMouseLeave={() => setDevDropdownOpen(false)}
                  >
                    <i className="fas fa-hands-helping"></i> {/* Changed icon */}
                    Development & Humanitarian Work
                    <i className={`fas fa-chevron-right ${devDropdownOpen ? 'rotated' : ''}`}></i>
                  </div>
                  <div className={`sub-dropdown-content ${devDropdownOpen ? 'active' : ''}`}>
                    <Link to="/sanitary" onClick={closeAllDropdowns}>
                      <i className="fas fa-bath"></i>
                      Bathrooms & Hygiene Access
                    </Link>
                    <Link to="/medical-support" onClick={closeAllDropdowns}>
                      <i className="fas fa-briefcase-medical"></i>
                      Medical & Sanitation Support
                    </Link>
                    <Link to="/weekly-meals" onClick={closeAllDropdowns}>
                      <i className="fas fa-utensils"></i>
                      Weekly Meals Initiative
                    </Link>
                    <Link to="/microloans" onClick={closeAllDropdowns}>
                      <i className="fas fa-hand-holding-usd"></i>
                      Zero Percent Microloans
                    </Link>
                  </div>
                </div>
                
                <div className="dropdown-divider"></div>
                
                {/* Social Enterprise */}
                <div className="sub-dropdown">
                  <div 
                    className="sub-dropdown-toggle"
                    onClick={toggleSocialDropdown}
                    onMouseEnter={() => { setSocialDropdownOpen(true); setDevDropdownOpen(false); }}
                    onMouseLeave={() => setSocialDropdownOpen(false)}
                  >
                    <i className="fas fa-people-carry"></i>
                    Social Enterprise
                    <i className={`fas fa-chevron-right ${socialDropdownOpen ? 'rotated' : ''}`}></i>
                  </div>
                  <div className={`sub-dropdown-content ${socialDropdownOpen ? 'active' : ''}`}>
                    <Link to="/chicken-initiative" onClick={closeMobileMenu}>
                      <i className="fas fa-egg"></i>
                      Safari Chicken Farm
                    </Link>
                    <Link to="/teaching" onClick={closeMobileMenu}>
                      <i className="fas fa-leaf"></i>
                      Safari Permaculture Farm
                    </Link>
                    <Link to="/tech-hub" onClick={closeMobileMenu}>
                      <i className="fas fa-tshirt"></i>
                      Safari TechStyle Hub
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </li>

          <li className="nav-item">
            <Link 
              to="/services" 
              className={`nav-link ${isActiveLink('/services') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>

          <li className="nav-item">
            <Link 
              to="/events" 
              className={`nav-link ${isActiveLink('/events') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Events
            </Link>
          </li>

          <li className="nav-item">
            <Link 
              to="/gallery" 
              className={`nav-link ${isActiveLink('/gallery') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
          </li>

          <li className="nav-item">
            <Link 
              to="/team" 
              className={`nav-link ${isActiveLink('/team') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Team
            </Link>
          </li>

          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          
        </ul>

        <div className="nav-actions">
          <button
            className="watch-video-btn"
            type="button"
            onClick={() => {
              const event = new CustomEvent('openLaunchModal');
              window.dispatchEvent(event);
              closeMobileMenu();
            }}
          >
            <i className="fas fa-play"></i>
            Watch Our Story
          </button>

          <div className="nav-search">
            <Search compact />
          </div>
        </div>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;