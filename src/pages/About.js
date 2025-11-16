import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.JPG';
import './About.css';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: about1,
      title: "About Safari Strive",
      subtitle: "Building sustainable communities through economic independence and social enterprise"
    },
    {
      id: 2,
      image: about2,
      title: "About Safari Strive",
      subtitle: "Building sustainable communities through economic independence and social enterprise"
    },
    {
      id: 3,
      image: about3,
      title: "About Safari Strive",
      subtitle: "Building sustainable communities through economic independence and social enterprise"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { value: '500', label: 'Team Members' },
    { value: '70', label: 'Award Winning' },
    { value: '3000', label: 'Total Projects' },
    { value: '7000', label: "Client's Review" }
  ];

  const differentiators = [
    'Ecosystem – Self-funding model',
    'Profit – Sustainable business model',
    'Microfinance – Zero percent, in kind, fast',
    'Dignity – Dignity-centered approach'
  ];

  return (
    <div className="about-page">
      {/* Hero Slideshow */}
      <section className="about-hero-slideshow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-slide"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div 
              className="hero-background"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Slide indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-intro section">
        <div className="container">
          <motion.div
            className="intro-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">About Us</span>
            <h1>Every Person, Every Opportunity</h1>
            <p>
              Safari Strives is a non-profit organization that builds economic independence through a single,
              self-funding ecosystem. We have reimagined microloans and microgrants—zero percent, in kind, fast—so
              capital turns directly into sales. We do this with dignity and we do not rely on donations.
            </p>
          </motion.div>
          <div className="intro-grid">
            <motion.div
              className="intro-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3>Our Vision</h3>
              <p>
                To create a world where economic independence empowers individuals and communities to make informed
                choices that lead to sustainable development and a better quality of life.
              </p>
            </motion.div>
            <motion.div
              className="intro-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3>Our Mission</h3>
              <p>
                To nurture the development of social enterprises that drive long-term economic revitalization, laying
                the foundation for thriving communities and fostering a sustainable improvement in social and living
                standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          {/* Our Roots Section */}
          <motion.div 
            className="content-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Roots</h2>
            <p>
              Safari Strives was founded on the belief that Africa's most lasting solutions are built from within. Founder Elie Imani grew up in Rwanda, shaped by the aftermath of the Second Congo War and systemic poverty. His journey from displacement to education in the United States ignited a lifelong commitment to transform the challenges he witnessed into sustainable opportunities for others. While earning his degree in political science and Chinese at North Central College, Elie conducted research in Kenya on China's growing influence and later analyzed U.S.-Africa policy in Washington, D.C. Now pursuing graduate studies at Yale University, he brings academic depth and lived experience to Safari Strives' ongoing growth.
            </p>
          </motion.div>

          {/* Our Mission & Approach Section */}
          <motion.div 
            className="content-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Mission & Approach</h2>
            <p>
              Safari Strives developed an integrated model focused on long-term economic independence. Our work recognizes poverty as a multi-dimensional issue requiring bold, comprehensive solutions. We combine zero-interest microloans, hands-on business mentorship, self-sustaining social enterprises, and community-driven agricultural and sanitation programs. This model not only increases access to capital but also equips individuals with the skills, tools, and support they need to build lasting livelihoods. Our Safari Chicken Initiative exemplifies this approach—its profits fund weekly meal programs for children and new microloans. Over 70% of our loan recipients are women, and we complement their efforts with free healthcare and sanitation support.
            </p>
          </motion.div>

          {/* Our Network Section */}
          <motion.div 
            className="content-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Network</h2>
            <p>
              We are continuously recruiting like-minded individuals from Rwanda, Kenya, Burundi, Japan, and the United States to work together on systemic challenges. We believe that sustainable development is best achieved through diverse, community-led, and cross-cultural partnerships grounded in shared values of equity, dignity, and economic empowerment.
            </p>
          </motion.div>

          {/* Financial Stewardship Section */}
          <motion.div 
            className="content-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Financial Stewardship</h2>
            <p>
              Transparency, accountability, and community trust are central to our work. Every dollar we receive or generate is strategically and entirely reinvested to maximize impact. Whether through our zero-interest loan programs, meal distributions, or sanitation projects, we operate with a strong commitment to ethical resource management. Our board provides fiscal oversight, ensuring all funds are used responsibly and aligned with our mission of building self-sustaining communities.
            </p>
          </motion.div>


        </div>
      </section>

      <section className="about-difference section">
        <div className="container difference-grid">
          <motion.div
            className="difference-stats"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div className="difference-tile" key={stat.label}>
                <div className="difference-value">{stat.value}</div>
                <div className="difference-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="difference-copy"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Why Safari Strives is Different</span>
            <h2>Why Safari Strives is Different</h2>
            <p>
              Safari Strives is a non-profit organization that builds economic independence through a single,
              self-funding ecosystem. The poultry business drives profit. The TechStyle shop creates stable jobs. Our
              permaculture farm trains farmers. We have reimagined microloans and microgrants—zero percent, in kind,
              fast—so capital turns directly into sales.
            </p>
            <ul className="difference-list">
              {differentiators.map((point) => (
                <li key={point}>
                  <i className="fas fa-check"></i>
                  {point}
                </li>
              ))}
            </ul>
            <div className="difference-actions">
              <Link to="/services" className="btn btn-outline-brand">
                Our Work
              </Link>
              <Link to="/contact" className="btn btn-brand">
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;