import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './InitiativePage.css';
import weeklyMealsPrimary from '../weekly_meals_initative/DSC01098.JPG';
import weeklyMealsSecondary from '../weekly_meals_initative/DSC01147.JPG';

const WeeklyMeals = () => {
  const slides = [
    { id: 1, image: weeklyMealsPrimary, alt: 'Volunteers preparing weekly meals' },
    { id: 2, image: weeklyMealsSecondary, alt: 'Community members sharing weekly meals' }
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
        className="initiative-hero meals-hero has-slides"
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
              <i className="fas fa-utensils"></i>
            </div>
            <h1>Weekly Meals Initiative</h1>
            <p className="hero-subtitle">
              Providing nutritious meals every week so children and vulnerable neighbors have the strength to thrive
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
            <span className="eyebrow">Weekly Meals Initiative</span>
            <h2>Feeding Hope Every Week</h2>
            <p>
              Our Weekly Meals Initiative delivers nutritious meals to children and vulnerable neighbors so no one is left hungry while other programs take root. Profits from our social enterprises fund ingredients, logistics, and volunteer coordination for reliable delivery.
            </p>
            <p>
              Volunteers visit families, share meals, and teach basic nutrition awareness, building a culture of care and empowerment. Every plate served keeps energy high for school, work, and new business opportunities.
            </p>
            <div className="impact-highlights">
              <div className="highlight-pill">Hundreds of meals prepared each week</div>
              <div className="highlight-pill">Nutrition lessons alongside every delivery</div>
              <div className="highlight-pill">Funded entirely by social enterprise profits</div>
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
              <img src={weeklyMealsPrimary} alt="Volunteers serving weekly meals to children" />
            </div>
            <div className="media-slot with-image">
              <img src={weeklyMealsSecondary} alt="Community members sharing warm meals" />
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
              <h2>How Weekly Meals Work</h2>
              <p>
                The initiative blends community volunteers, enterprise profits, and practical nutrition education. By meeting short-term hunger needs, we give families space to focus on long-term goals like education, entrepreneurship, and savings.
              </p>

              <h3>Our Weekly Rhythm</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Source & Plan</h4>
                    <p>We purchase ingredients directly from local producers and design balanced menus that match community preferences.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Prep & Pack</h4>
                    <p>Kitchen teams cook, portion, and package nutritious meals within 24 hours of delivery to keep food fresh.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Deliver & Listen</h4>
                    <p>Volunteers visit families, share meals together, and gather feedback to understand changing needs.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Teach & Connect</h4>
                    <p>Every delivery includes simple nutrition lessons and referrals to bathrooms, pads, and microloan support.</p>
                  </div>
                </div>
              </div>

              <h3>Stories Around the Table</h3>
              <div className="success-stories">
                <div className="story">
                  <h4>Breakfast Club</h4>
                  <p>Children participating in our breakfast program showed improved school attendance and stronger test scores after just one term.</p>
                </div>
                <div className="story">
                  <h4>Volunteer Kitchen</h4>
                  <p>Local parents rotate through our volunteer kitchen, gaining meal-planning skills they replicate at home with donated staples.</p>
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
                <p>Help us keep the weekly meal pipeline running strong.</p>
                <ul>
                  <li><i className="fas fa-check"></i> Volunteer for kitchen prep or delivery</li>
                  <li><i className="fas fa-check"></i> Sponsor a week of ingredients for a neighborhood</li>
                  <li><i className="fas fa-check"></i> Share nutrition expertise at community workshops</li>
                  <li><i className="fas fa-check"></i> Donate transport or cold-storage supplies</li>
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

export default WeeklyMeals;
