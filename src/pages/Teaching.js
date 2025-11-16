import React from 'react';
import { motion } from 'framer-motion';
import './InitiativePage.css';

const Teaching = () => {
  return (
    <div className="initiative-page">
      <motion.section 
        className="initiative-hero teaching"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h1>Sustainable Teaching</h1>
            <p className="hero-subtitle">
              Empowering families with skills in permaculture, animal care, and self-reliant farming practices
            </p>
          </div>
        </div>
      </motion.section>

      <section className="initiative-content section">
        <div className="container">
          <div className="content-grid">
            <motion.div 
              className="content-main"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Building Self-Sufficient Communities</h2>
              <p>
                We equip families with practical skills in permaculture, animal care, and self-reliant farming practices. 
                This hands-on education promotes long-term food security and environmental stewardship, creating 
                communities that can thrive independently.
              </p>
              
              <h3>Our Teaching Programs</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Permaculture Training</h4>
                    <p>Comprehensive training in sustainable farming techniques including soil conservation, water management, and companion planting.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Animal Husbandry</h4>
                    <p>Teaching proper care, breeding, and management of livestock including chickens, goats, and cattle for sustainable protein sources.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Seed Banking & Preservation</h4>
                    <p>Education on seed saving, storage techniques, and maintaining genetic diversity for long-term agricultural sustainability.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Natural Resource Management</h4>
                    <p>Training in sustainable harvesting of forest products, water conservation, and environmental protection practices.</p>
                  </div>
                </div>
              </div>
              
              <h3>Impact Stories</h3>
              <div className="success-stories">
                <div className="story">
                  <h4>The Permaculture Model Farm</h4>
                  <p>
                    Our demonstration farm now trains 50+ families annually in permaculture techniques. 
                    Graduates have increased their crop yields by 40% while improving soil health.
                  </p>
                </div>
                <div className="story">
                  <h4>Women's Livestock Cooperative</h4>
                  <p>
                    Twenty women formed a cooperative after our animal husbandry training. They now manage 
                    a shared herd of 100 goats, providing sustainable income for their families.
                  </p>
                </div>
                <div className="story">
                  <h4>Community Seed Library</h4>
                  <p>
                    Our seed preservation program helped establish a community seed library that now maintains 
                    over 30 varieties of traditional crops, ensuring food security for future generations.
                  </p>
                </div>
              </div>
              
              <h3>Training Curriculum</h3>
              <p>Our comprehensive curriculum covers:</p>
              <div className="curriculum-grid">
                <div className="curriculum-item">
                  <i className="fas fa-leaf"></i>
                  <h4>Organic Farming</h4>
                  <p>Natural pest control, composting, and soil health improvement techniques.</p>
                </div>
                <div className="curriculum-item">
                  <i className="fas fa-tint"></i>
                  <h4>Water Management</h4>
                  <p>Rainwater harvesting, irrigation systems, and drought-resistant farming.</p>
                </div>
                <div className="curriculum-item">
                  <i className="fas fa-tree"></i>
                  <h4>Agroforestry</h4>
                  <p>Integrating trees and crops for improved biodiversity and soil protection.</p>
                </div>
                <div className="curriculum-item">
                  <i className="fas fa-recycle"></i>
                  <h4>Waste Management</h4>
                  <p>Converting organic waste into valuable resources like compost and biogas.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="content-sidebar"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="impact-card">
                <h3>Our Impact</h3>
                <div className="impact-stats">
                  <div className="stat">
                    <span className="stat-number">200+</span>
                    <span className="stat-label">Families Trained</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">40%</span>
                    <span className="stat-label">Crop Yield Increase</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">5</span>
                    <span className="stat-label">Training Centers</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">30+</span>
                    <span className="stat-label">Crop Varieties Preserved</span>
                  </div>
                </div>
              </div>

              <div className="get-involved-card">
                <h3>Get Involved</h3>
                <p>Share your knowledge and help build sustainable communities.</p>
                <ul>
                  <li><i className="fas fa-check"></i> Volunteer as an instructor</li>
                  <li><i className="fas fa-check"></i> Donate farming equipment</li>
                  <li><i className="fas fa-check"></i> Help with curriculum development</li>
                  <li><i className="fas fa-check"></i> Support research initiatives</li>
                </ul>
                <a href="/contact" className="btn btn-secondary">
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teaching;