import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './InitiativePage.css';
import sanitationPrimary from '../medication_and_sanitation_support/396d9d7c-82a2-40c9-b586-f390c8fc6125.jpg';
import sanitationSecondary from '../medication_and_sanitation_support/750a2ab1-583d-4d60-9da3-021b3ce37a3e.jpg';

const Sanitary = () => {
  const slides = [
    { id: 1, image: sanitationPrimary, alt: 'Women receiving monthly dignity kits' },
    { id: 2, image: sanitationSecondary, alt: 'Upgraded hygiene facilities supporting women' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="initiative-page">
      <motion.section 
        className="initiative-hero sanitary-hero has-slides"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-slides" aria-hidden="true">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              className="hero-slide"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <img src={slides[currentSlide].image} alt={slides[currentSlide].alt} />
              <div className="hero-overlay" />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h1>Complimentary Sanitary Products</h1>
            <p className="hero-subtitle">
              Promoting health, dignity, and confidence among women through access to essential hygiene resources
            </p>
          </div>
        </div>
        <div className="hero-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.section>

      <section className="impact-story section">
        <div className="container impact-story-grid">
          <motion.div
            className="impact-copy"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="eyebrow">Women’s Sanitation Initiative</span>
            <h2>Dignity, Health, and Time Restored</h2>
            <p>
              The Women’s Sanitation Initiative addresses an essential yet often overlooked aspect of women’s health and
              dignity. Using profits from the Safari Chicken Initiative, we provide sanitary pads, painkillers, and soap
              to women and girls every month. Each mother and daughter receives twenty pads to support her full cycle.
            </p>
            <p>
              Beyond physical products, we host workshops and training sessions on hygiene, personal care, and health
              awareness. Women gain confidence, safeguard their wellbeing, and reinvest savings into their businesses.
              Clean, functional bathrooms at the Safari TechStyle Hub and other workspaces provide a safe environment—
              many experiencing dignified sanitation for the first time.
            </p>
            <div className="impact-highlights">
              <div className="highlight-pill">20 pads for every mother & daughter each month</div>
              <div className="highlight-pill">Workshops covering hygiene, personal care, and health</div>
              <div className="highlight-pill">Safe, dignified bathrooms at Safari TechStyle Hub sites</div>
            </div>
          </motion.div>

          <motion.div
            className="impact-media"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="media-slot primary with-image">
              <img src={sanitationPrimary} alt="Women receiving monthly dignity kits" />
            </div>
            <div className="media-slot with-image">
              <img src={sanitationSecondary} alt="New bathroom and hygiene facilities" />
            </div>
          </motion.div>
        </div>
      </section>

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
              <h2>Breaking Barriers to Education and Opportunity</h2>
              <p>
                We provide free sanitary products to promote health, dignity, and confidence among women and girls. 
                No woman should be held back due to lack of access to basic hygiene resources. Our program ensures 
                that menstruation never becomes a barrier to education, work, or participation in community life.
              </p>
              
              <h3>Our Comprehensive Approach</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Product Distribution</h4>
                    <p>Regular distribution of high-quality, culturally appropriate sanitary products to women and girls in need.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Health Education</h4>
                    <p>Comprehensive menstrual health education covering hygiene practices, health awareness, and myth debunking.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Community Workshops</h4>
                    <p>Engaging entire communities, including men and boys, to reduce stigma and build understanding around menstrual health.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Sustainable Solutions</h4>
                    <p>Training local women to manufacture reusable sanitary products, creating income opportunities while ensuring sustainability.</p>
                  </div>
                </div>
              </div>
              
              <h3>Making a Difference</h3>
              <div className="success-stories">
                <div className="story">
                  <h4>School Attendance Program</h4>
                  <p>
                    Our sanitary product distribution in 10 schools increased girls' attendance by 95%. 
                    Previously, many girls missed 5-7 days of school monthly due to lack of proper menstrual hygiene products.
                  </p>
                </div>
                <div className="story">
                  <h4>Women's Workplace Initiative</h4>
                  <p>
                    We partnered with local businesses to provide workplace sanitary facilities and products, 
                    enabling 150+ women to maintain consistent employment without menstrual-related absences.
                  </p>
                </div>
                <div className="story">
                  <h4>Community Manufacturing Cooperative</h4>
                  <p>
                    Twenty women now run a cooperative manufacturing reusable sanitary pads, providing 
                    sustainable income while meeting local demand for affordable menstrual products.
                  </p>
                </div>
              </div>
              
              <h3>Health & Education Impact</h3>
              <p>Our program addresses multiple challenges:</p>
              <div className="impact-areas">
                <div className="impact-area">
                  <i className="fas fa-graduation-cap"></i>
                  <h4>Educational Access</h4>
                  <p>Ensuring girls can attend school consistently throughout their menstrual cycle.</p>
                </div>
                <div className="impact-area">
                  <i className="fas fa-briefcase"></i>
                  <h4>Economic Participation</h4>
                  <p>Enabling women to maintain employment and participate fully in economic activities.</p>
                </div>
                <div className="impact-area">
                  <i className="fas fa-heart"></i>
                  <h4>Health & Wellbeing</h4>
                  <p>Preventing infections and promoting overall reproductive health and hygiene.</p>
                </div>
                <div className="impact-area">
                  <i className="fas fa-users"></i>
                  <h4>Social Inclusion</h4>
                  <p>Reducing stigma and ensuring women can participate in all aspects of community life.</p>
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
              <div className="get-involved-card">
                <h3>Get Involved</h3>
                <p>Join our mission to ensure every woman has access to basic hygiene resources.</p>
                <ul>
                  <li><i className="fas fa-check"></i> Volunteer for distribution events</li>
                  <li><i className="fas fa-check"></i> Help with health education</li>
                  <li><i className="fas fa-check"></i> Support manufacturing training</li>
                  <li><i className="fas fa-check"></i> Advocate for menstrual equity</li>
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

export default Sanitary;