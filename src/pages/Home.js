import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSlideshow from '../components/HeroSlideshow';
import Search from '../components/Search';
import aboutShowcase from '../assets/chicken4.JPG';
import chickenWorkImage from '../our_work/DSC01047.jpeg';
import techStyleImage from '../our_work/000A8790.JPG';
import permacultureImage from '../our_work/b02226a9-668d-4a28-b141-fe08c0a6c679.jpg';
import './Home.css';

const Home = () => {
  const focusAreas = [
    {
      icon: 'fas fa-project-diagram',
      title: 'Ecosystem',
      subtitle: 'Self-funding model'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Profit',
      subtitle: 'Sustainable business'
    },
    {
      icon: 'fas fa-hand-holding-heart',
      title: 'Dignity',
      subtitle: 'People-centered'
    },
    {
      icon: 'fas fa-hand-holding-usd',
      title: 'Microfinance',
      subtitle: 'Zero percent, fast'
    }
  ];

  const differentiators = [
    'Self-funding ecosystem',
    'Zero percent microloans and microgrants',
    'Dignity-centered approach',
    'We do not rely on donations'
  ];

  const workPrograms = [
    {
      tag: 'Training Engine',
      tagColor: '#526e58',
      title: 'Safari Chicken Initiative',
      description:
        'The training engine of our ecosystem. High-capacity poultry supplies eggs and chicken year round, generates profit, funds expansion and microloans, and supports dignity-centered initiatives.',
      link: '/chicken-initiative',
      imageIcon: 'fas fa-egg',
      image: chickenWorkImage
    },
    {
      tag: 'Jobs Engine',
      tagColor: '#92b24c',
      title: 'Safari TechStyle Hub',
      description: 'Women-owned clothing production hub creating sustainable jobs and funding for community services.',
      link: '/tech-hub',
      imageIcon: 'fas fa-sitemap',
      image: techStyleImage
    },
    {
      tag: 'Profit Engine',
      tagColor: '#6f8f63',
      title: 'Safari Permaculture Farm',
      description:
        'The profit engine anchors our ecosystem in agrarian Rwanda. Farmers learn to design and manage productive farms that translate skills into long-term income.',
      link: '/teaching',
      imageIcon: 'fas fa-leaf',
      image: permacultureImage
    }
  ];

  return (
    <div className="home">
      <HeroSlideshow />

      <section className="about-overview section" id="about">
        <div className="container about-overview-grid">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={aboutShowcase} alt="Safari Strives community members" />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">About Us</span>
            <h2>Every Person, Every Opportunity</h2>
            <p>
              Safari Strives is a non-profit organization that builds economic independence through a single,
              self-funding ecosystem. We do not rely on donations. Instead, we reinvest the profits we generate to
              power programs that offer training, jobs, and dignity to the communities we serve.
            </p>

            <div className="vision-mission-columns">
              <div>
                <h3>Our Vision</h3>
                <p>
                  To create a world where economic independence empowers individuals and communities to make informed
                  choices that lead to sustainable development and a better quality of life.
                </p>
              </div>
              <div>
                <h3>Our Mission</h3>
                <p>
                  To nurture the development of social enterprises that drive long-term economic revitalization,
                  laying the foundation for thriving communities and elevating living standards with dignity-centered
                  support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="why-different section">
        <div className="container">
          <motion.div
            className="why-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">Why Safari Strives is Different</span>
            <h2>Economic Independence Through a Single Ecosystem</h2>
            <p>
              Safari Strives is a non-profit organization that builds economic independence through a single,
              self-funding ecosystem. The poultry business drives profit. The TechStyle shop creates steady jobs. Our
              permaculture farm trains farmers. Together, they produce the resources that fund microfinance, nutrition,
              and dignity-centered initiatives.
            </p>
          </motion.div>

          <motion.div
            className="focus-areas"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {focusAreas.map((area) => (
              <div className="focus-area" key={area.title}>
                <div className="focus-icon">
                  <i className={area.icon}></i>
                </div>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.subtitle}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="differentiators"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ul>
              {differentiators.map((item) => (
                <li key={item}>
                  <i className="fas fa-check"></i>
                  {item}
                </li>
              ))}
            </ul>
            <div className="cta-buttons">
              <Link to="/about" className="btn primary-btn">
                Our Work
              </Link>
              <Link to="/contact" className="btn secondary-btn">
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="our-work section" id="services">
        <div className="container">
          <motion.div
            className="our-work-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">Our Work</span>
            <h2>Building Economic Independence Through Enterprise</h2>
            <p>
              Each enterprise within Safari Strives fuels another, creating a resilient loop that provides jobs,
              generates profit, and invests in community-led outcomes.
            </p>
          </motion.div>

          <div className="work-grid">
            {workPrograms.map((program, index) => (
              <motion.div
                className="work-card"
                key={program.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="work-card-media">
                  {program.image ? (
                    <img src={program.image} alt={program.title} />
                  ) : (
                    <div className="work-card-placeholder">
                      <i className="fas fa-image"></i>
                    </div>
                  )}
                  <span className="work-tag" style={{ backgroundColor: program.tagColor }}>
                    {program.tag}
                  </span>
                </div>
                <div className="work-icon">
                  <i className={program.imageIcon}></i>
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link to={program.link} className="learn-more">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="impact section" id="events">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Impact: A Glimpse</h2>
            <div className="impact-video">
              <div className="video-container">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/lWSPtuh2MSE?si=h-N_NXeEZM22A5aw"
                    title="Safari Strive - Our Impact"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="video-caption">Watch how Safari Strives is transforming communities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;