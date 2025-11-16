import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import chickenFarm1 from '../assets/chicken4.JPG';
import chickenFarm2 from '../assets/cheickenfarm1.jpg';
import chickenFarm3 from '../assets/check2.JPG';
import chickenFarm4 from '../assets/chiekn3.JPG';
import chickenStoryPrimary from '../safari_chicken_farm/DSC00983.JPG';
import chickenStorySecondary from '../safari_chicken_farm/DSC01035.JPG';
import './ChickenInitiative.css';

const ChickenInitiative = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: chickenFarm1,
      title: "Safari Chicken Initiative",
      subtitle: "A sustainable social enterprise that transforms communities through egg production"
    },
    {
      id: 2,
      image: chickenFarm2,
      title: "Safari Chicken Initiative",
      subtitle: "A sustainable social enterprise that transforms communities through egg production"
    },
    {
      id: 3,
      image: chickenFarm3,
      title: "Safari Chicken Initiative",
      subtitle: "A sustainable social enterprise that transforms communities through egg production"
    },
    {
      id: 4,
      image: chickenFarm4,
      title: "Safari Chicken Initiative",
      subtitle: "A sustainable social enterprise that transforms communities through egg production"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="chicken-initiative">
      {/* Hero Slideshow */}
      <section className="chicken-hero-slideshow">
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

      {/* Story Overview */}
      <section className="story-section section">
        <div className="container story-grid">
          <motion.div
            className="story-copy"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="eyebrow">Community Enterprise</span>
            <h2>Safari Chicken Initiative</h2>
            <p>
              The Safari Chicken Initiative is more than just a farm—it is a social enterprise designed to create
              sustainable economic growth in Rwanda. Our egg farm produces high-quality eggs that are sold in local and
              regional markets, with every profit reinvested directly into the community.
            </p>
            <p>
              Last year alone, the farm earned over $10,000 in profit, funding programs that empower women, support
              children, and improve sanitation. From the planning stage to daily operations, the local community leads
              every step, building ownership, pride, and steady income.
            </p>
            <div className="story-points">
              <div className="story-point">
                <strong>Community Ownership</strong>
                <span>Residents manage planning and daily operations, keeping skills, income, and dignity close to home.</span>
              </div>
              <div className="story-point">
                <strong>Expert Volunteers</strong>
                <span>Farmers and veterinarians from the Church of the Brethren share expertise and train local teams in sustainable agriculture.</span>
              </div>
              <div className="story-point">
                <strong>Profits With Purpose</strong>
                <span>Every egg sold helps fund women’s empowerment, child nutrition, and sanitation programs across Rwanda.</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="story-media"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="media-frame primary with-image">
              <img src={chickenStoryPrimary} alt="Safari Chicken farm team collecting eggs" />
            </div>
            <div className="media-frame with-image">
              <img src={chickenStorySecondary} alt="Volunteer mentoring farmers at Safari Chicken" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision and Purpose */}
      <section className="vision-section section">
        <div className="container">
          <motion.div
            className="content-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Vision and Purpose</h2>
            <p>
              Safari Strives is committed to finding practical and sustainable ways to economically empower communities in Rwanda.
            </p>
            <div className="highlight-box">
              <p className="highlight-text">
                <strong>Core Question:</strong> If large, well-managed businesses can create wealth for individuals, 
                why can't the same principles be applied to lift entire communities out of poverty?
              </p>
            </div>
            <p>
              The initiative blends business sustainability with social impact, using a chicken farm as the backbone 
              of our community transformation model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Model */}
      <section className="business-model section">
        <div className="container">
          <motion.div
            className="content-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Core Business Model: Egg Production</h2>
            <div className="model-grid">
              <div className="model-item">
                <div className="model-icon">
                  <i className="fas fa-egg"></i>
                </div>
                <h3>Egg Production</h3>
                <p>Our chicken farm produces high-quality eggs for local markets</p>
              </div>
              <div className="model-item">
                <div className="model-icon">
                  <i className="fas fa-store"></i>
                </div>
                <h3>Market Sales</h3>
                <p>Eggs sold in local Rwandan and neighboring Congolese markets</p>
              </div>
              <div className="model-item">
                <div className="model-icon">
                  <i className="fas fa-recycle"></i>
                </div>
                <h3>Profit Reinvestment</h3>
                <p>All profits reinvested into community programs, not individual gain</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Funded Programs */}
      <section className="funded-programs section">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Programs Funded by Safari Chicken Initiative</h2>
            <p className="section-subtitle">
              Three key programs that transform profits into community impact
            </p>
          </motion.div>

          <div className="programs-grid">
            <motion.div
              className="program-card nutrition"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="program-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Nutrition Support for Children 🥚</h3>
              <ul>
                <li>Provide free or affordable boiled eggs to children</li>
                <li>Addresses hunger and malnutrition with reliable protein</li>
                <li>Supports healthier growth and better learning outcomes</li>
              </ul>
            </motion.div>

            <motion.div
              className="program-card sanitation"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="program-icon">
                <i className="fas fa-female"></i>
              </div>
              <h3>Women's Sanitation Initiative 🧼</h3>
              <p className="program-lead">Led by Carolina Alfaro from the U.S.</p>
              <p><strong>Focus:</strong> Address the overlooked issue of women's sanitation</p>
              <p><strong>6-month goal:</strong> Monthly packages containing:</p>
              <ul>
                <li>20 sanitary pads per mother/daughter</li>
                <li>Painkillers</li>
                <li>Bar soap</li>
                <li>Underwear</li>
              </ul>
              <p><strong>Impact:</strong> Reduces financial burden, supports dignity, health, and mental well-being</p>
            </motion.div>

            <motion.div
              className="program-card microloans"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="program-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Microloan Program for Women Entrepreneurs 💼</h3>
              <p className="program-lead">Managed in partnership with the Church of the Brethren in Rwanda</p>
              <p><strong>Features:</strong></p>
              <ul>
                <li>0% interest loans to women with business ideas</li>
                <li>Simple written plan application process</li>
                <li>Volunteer assistance for those with literacy challenges</li>
                <li>Sparks and grows women-led businesses without debt burden</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="partnerships section">
        <div className="container">
          <motion.div
            className="content-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Partnerships and Human Capital</h2>
            <p>
              One of the biggest challenges for social enterprises is human capital. Safari Strives tackled this by 
              partnering with the Church of the Brethren in Rwanda, which offered:
            </p>
            <div className="partnership-benefits">
              <div className="benefit-item">
                <i className="fas fa-landmark"></i>
                <span>Land to build the chicken farm</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-users"></i>
                <span>Volunteers including veterinarians and experienced poultry farmers</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-cogs"></i>
                <span>Program management for the microloans</span>
              </div>
              <div className="benefit-item">
                <i className="fas fa-handshake"></i>
                <span>Community trust and goodwill, ensuring strong participation</span>
              </div>
            </div>
            <p className="partnership-result">
              This partnership reduces costs, mobilizes skilled labor, and gives the project credibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="sustainability section">
        <div className="container">
          <motion.div
            className="content-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Sustainability Principles</h2>
            <p>
              The Safari Chicken Initiative was designed to avoid the pitfalls of earlier projects that weren't scalable. It is:
            </p>
            <div className="sustainability-grid">
              <div className="sustainability-item">
                <i className="fas fa-users"></i>
                <h4>Community-owned</h4>
                <p>Locals are involved from planning to execution</p>
              </div>
              <div className="sustainability-item">
                <i className="fas fa-recycle"></i>
                <h4>Reinvestment-driven</h4>
                <p>Profits stay in the community</p>
              </div>
              <div className="sustainability-item">
                <i className="fas fa-puzzle-piece"></i>
                <h4>Holistic</h4>
                <p>Tackles nutrition, health, and economic empowerment together</p>
              </div>
              <div className="sustainability-item">
                <i className="fas fa-hands-helping"></i>
                <h4>Volunteer-supported</h4>
                <p>Lowers costs while building buy-in</p>
              </div>
              <div className="sustainability-item">
                <i className="fas fa-church"></i>
                <h4>Church-backed</h4>
                <p>Ensures trust, reach, and oversight</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="impact section">
        <div className="container">
          <motion.div
            className="content-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Big Picture Impact</h2>
            <div className="impact-grid">
              <div className="impact-item">
                <i className="fas fa-child"></i>
                <h4>Children</h4>
                <p>Better nutrition, improved learning, and healthier futures</p>
              </div>
              <div className="impact-item">
                <i className="fas fa-female"></i>
                <h4>Women</h4>
                <p>Dignity through sanitation support and independence through business opportunities</p>
              </div>
              <div className="impact-item">
                <i className="fas fa-home"></i>
                <h4>Community</h4>
                <p>Stronger ownership, trust, and long-term resilience</p>
              </div>
              <div className="impact-item">
                <i className="fas fa-globe"></i>
                <h4>Model</h4>
                <p>Scalable and replicable for other Rwandan communities and beyond</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ChickenInitiative;