import React from 'react';
import { motion } from 'framer-motion';
import './TechHub.css';

const TechHub = () => {
  return (
    <div className="tech-hub">
      <section className="tech-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-icon">
              <i className="fas fa-tshirt"></i>
            </div>
            <h1>Safari Textile Hub</h1>
            <p className="hero-subtitle">
              A rent-free tailoring space equipped with modern technology, built on dignity and empowerment
            </p>
          </motion.div>
        </div>
      </section>

      <section className="tech-content section">
        <div className="container">
          {/* Our Mission */}
          <motion.div
            className="content-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p>
              The Safari Textile Hub represents our commitment to creating systems of trust, 
              dignity, and enterprise. We believe you cannot donate people out of poverty, 
              but you can create systems with them, invest in their ideas, and most importantly, 
              trust them.
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.div
            className="content-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2>What We Do</h2>
            <div className="solution-features">
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-home"></i>
                </div>
                <div className="feature-content">
                  <h3>Rent-Free Workspace</h3>
                  <p>Providing a clean, safe, and dignified workspace for women tailors in the Gisenyi region.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-sewing-machine"></i>
                </div>
                <div className="feature-content">
                  <h3>Modern Equipment</h3>
                  <p>Electrical sewing machines, digital design tools, and computer skills training for enhanced productivity.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="feature-content">
                  <h3>Skills Development</h3>
                  <p>Communication workshops and business training to help women grow their enterprises.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Impact */}
          <motion.div
            className="content-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2>Our Impact</h2>
            <div className="impact-stats">
              <div className="impact-stat">
                <div className="stat-number">50</div>
                <div className="stat-label">Women Trained</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Orders Completed</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Rent-Free</div>
              </div>
            </div>
            <p>
              We've already secured our first major contract to print over 50 shirts for a 
              local nursery school. Our approach is about removing limits and creating 
              opportunities for sustainable growth.
            </p>
          </motion.div>

          {/* How It Works */}
          <motion.div
            className="content-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>How It Works</h2>
            <div className="approach-flow">
              <div className="flow-step">
                <div className="step-number">1</div>
                <h3>Business Profits</h3>
                <p>Safari Chicken Initiative generates sustainable revenue</p>
              </div>
              
              <div className="flow-arrow">→</div>
              
              <div className="flow-step">
                <div className="step-number">2</div>
                <h3>Investment</h3>
                <p>Profits fund the Textile Hub and community programs</p>
              </div>
              
              <div className="flow-arrow">→</div>
              
              <div className="flow-step">
                <div className="step-number">3</div>
                <h3>Empowerment</h3>
                <p>Women gain skills, income, and independence</p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="content-card cta-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Join Our Mission</h2>
            <p>
              The machines are running, orders are coming in, and women are building 
              their futures. Help us expand this model to reach more communities.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Involved</a>
              <a href="/about" className="btn btn-secondary">Learn More</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechHub;