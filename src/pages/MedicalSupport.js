import React from 'react';
import { motion } from 'framer-motion';
import './InitiativePage.css';
import medicalSupportPrimary from '../slidshows/000A8788.JPG';
import medicalSupportSecondary from '../slidshows/b1cff818-d81a-4635-80f1-90dce04e1feb.jpg';

const MedicalSupport = () => {
  return (
    <div className="initiative-page">
      <motion.section
        className="initiative-hero sanitary"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <i className="fas fa-briefcase-medical"></i>
            </div>
            <h1>Medical & Sanitation Support</h1>
            <p className="hero-subtitle">
              Reinvesting enterprise profits into clinics, supplies, and consultations so families stay healthy as they grow
            </p>
          </div>
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
            <span className="eyebrow">Medical Support</span>
            <h2>Health That Fuels Opportunity</h2>
            <p>
              Medical support reinvests enterprise profits into clinics, supplies, and consultations so families can stay healthy while pursuing opportunity. Preventive and emergency care remove barriers that keep people from education, work, and entrepreneurship.
            </p>
            <p>
              Each medical intervention is paired with community education, empowering residents to take charge of their wellbeing. When health is secure, entrepreneurs can focus on growth and families can plan for the future with confidence.
            </p>
            <div className="impact-highlights">
              <div className="highlight-pill">Clinics stocked with essential medicines</div>
              <div className="highlight-pill">Preventive & emergency care within reach</div>
              <div className="highlight-pill">Health coaching accompanies every visit</div>
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
              <img src={medicalSupportPrimary} alt="Community members receiving medical consultations" />
            </div>
            <div className="media-slot with-image">
              <img src={medicalSupportSecondary} alt="Healthcare partner supporting women and families" />
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
              <h2>Our Care Model</h2>
              <p>
                We combine clinic partnerships, mobile outreach, and education to keep families healthy. By reinvesting profits into medical resources, we ensure health never becomes the barrier to opportunity.
              </p>

              <h3>How Support Reaches Families</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Community Assessment</h4>
                    <p>Health workers map needs, identify urgent cases, and prioritize supplies for every community we serve.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Clinic Support</h4>
                    <p>We restock medicines, fund lab tests, and cover critical referrals so care stays affordable.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Mobile Outreach</h4>
                    <p>Pop-up clinics and home visits bring screenings, checkups, and treatments to families where they are.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Education & Follow-up</h4>
                    <p>Every visit includes practical health coaching and follow-up calls to keep recovery on track.</p>
                  </div>
                </div>
              </div>

              <h3>Support in Action</h3>
              <div className="success-stories">
                <div className="story">
                  <h4>Clinic Care Packages</h4>
                  <p>Enterprise profits stocked rural clinics with 500 care packages filled with antibiotics, prenatal supplements, and hygiene supplies.</p>
                </div>
                <div className="story">
                  <h4>Healthy Home Visits</h4>
                  <p>Mobile nurses now provide quarterly wellness visits for borrowers, reducing preventable hospital stays and keeping businesses running.</p>
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
                <p>Partner with us to keep lifesaving care within reach.</p>
                <ul>
                  <li><i className="fas fa-check"></i> Sponsor medical supply restocks</li>
                  <li><i className="fas fa-check"></i> Provide specialist consultations or telehealth visits</li>
                  <li><i className="fas fa-check"></i> Host health workshops or screenings</li>
                  <li><i className="fas fa-check"></i> Support transport funds for urgent cases</li>
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

export default MedicalSupport;

