import React from 'react';
import { motion } from 'framer-motion';
import './InitiativePage.css';
import microloanPrimary from '../permaculture_farm/IMG_8358.jpg';
import microloanSecondary from '../permaculture_farm/000A0435.jpeg';

const Microloans = () => {
  return (
    <div className="initiative-page">
      <motion.section 
        className="initiative-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h1>Microloans at 0% Interest</h1>
            <p className="hero-subtitle">
              Empowering entrepreneurs by removing the burden of debt and enabling sustainable business growth
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
            <span className="eyebrow">Zero-Percent Microloans Initiative</span>
            <h2>Capital Without Burden</h2>
            <p>
              The Zero-Percent Microloans Initiative puts capital, mentorship, and rapid deployment into the hands of
              women entrepreneurs without the weight of interest. Applicants share their business plans, and volunteers
              assist anyone facing literacy challenges so every promising idea can be heard and funded.
            </p>
            <p>
              The Church of the Brethren manages mentorship, guidance, and ongoing support throughout each loan cycle.
              As women grow their businesses, they strengthen families, inspire others, and fuel community development.
              Microloans connect with sanitation, nutrition, and education programs to build a lasting foundation for
              dignity and opportunity across Rwanda.
            </p>
            <div className="impact-highlights">
              <div className="highlight-pill">Volunteers assist every applicant</div>
              <div className="highlight-pill">Mentorship from Church of the Brethren</div>
              <div className="highlight-pill">Integrated with sanitation, meals, and education</div>
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
              <img src={microloanPrimary} alt="Microloan recipient preparing inventory" />
            </div>
            <div className="media-slot with-image">
              <img src={microloanSecondary} alt="Mentor reviewing business plans with entrepreneurs" />
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
              <h2>Breaking the Cycle of Debt</h2>
              <p>
                Traditional microfinance often traps entrepreneurs in cycles of debt with high interest rates. 
                Our innovative approach offers microloans at 0% interest, allowing small business owners to 
                focus entirely on growing their ventures rather than servicing debt.
              </p>
              
              <h3>How It Works</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Application & Assessment</h4>
                    <p>We evaluate business plans and entrepreneurial potential through our community-based assessment process.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Loan Disbursement</h4>
                    <p>Approved entrepreneurs receive funding ranging from $50 to $500 with zero interest charges.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Mentorship & Support</h4>
                    <p>We provide ongoing business mentorship and connect entrepreneurs with local market opportunities.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Flexible Repayment</h4>
                    <p>Repayment schedules are tailored to business cash flows, ensuring sustainability and growth.</p>
                  </div>
                </div>
              </div>
              
              <h3>Success Stories</h3>
              <div className="success-stories">
                <div className="story">
                  <h4>Maria's Tailoring Business</h4>
                  <p>
                    With a $200 microloan, Maria purchased a sewing machine and fabric. Her tailoring business 
                    now employs three other women and serves over 100 families in her community.
                  </p>
                </div>
                <div className="story">
                  <h4>John's Agriculture Venture</h4>
                  <p>
                    John used his $300 loan to purchase seeds and farming tools. His organic vegetable farm 
                    now supplies fresh produce to local markets and schools.
                  </p>
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
                <p>Join our mission to empower entrepreneurs worldwide.</p>
                <ul>
                  <li><i className="fas fa-check"></i> Volunteer as a mentor</li>
                  <li><i className="fas fa-check"></i> Help with loan assessments</li>
                  <li><i className="fas fa-check"></i> Share your business expertise</li>
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

export default Microloans;