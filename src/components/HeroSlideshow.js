import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import frontCover from '../assets/forfront-cover.JPG';
import aboutImage from '../slidshows/000A8788.JPG';
import chickenImage from '../slidshows/5797c462-69d8-41e8-ab31-fae015facd55.jpg';
import techHubImage from '../slidshows/b1cff818-d81a-4635-80f1-90dce04e1feb.jpg';
import mainImage from '../slidshows/000A8375.JPG';
import './HeroSlideshow.css';

const HeroSlideshow = () => {
  const slides = useMemo(
    () => [
      {
        id: 1,
        image: mainImage,
        title: 'Safari Strives',
        subtitle: 'Every Person, Every Opportunity',
        description:
          'A self-funding ecosystem that invests its own profits into jobs, training, and dignity-centered support for every family we serve.',
        ctas: [
          { label: 'Get Involved', to: '/contact', variant: 'primary' },
          { label: 'Learn More', to: '/about', variant: 'secondary' }
        ]
      },
      {
        id: 2,
        image: aboutImage,
        title: 'Economic Independence\nThrough Enterprise',
        subtitle: 'Local ownership fuels long-term change',
        description:
          'We build social businesses that keep resources circulating in the community — from poultry production and tailoring to regenerative farming.',
        ctas: [
          { label: 'Our Work', to: '/about', variant: 'primary' },
          { label: 'Contact Us', to: '/contact', variant: 'secondary' }
        ]
      },
      {
        id: 3,
        image: chickenImage,
        title: 'Zero Percent Microloans',
        subtitle: 'Capital, mentorship, and rapid deployment',
        description:
          'Microloans and microgrants reach entrepreneurs in days, not months. We walk beside each borrower with mentorship that turns capital into sales.',
        ctas: [
          { label: 'Learn More', to: '/microloans', variant: 'primary' },
          { label: 'Get Started', to: '/contact', variant: 'secondary' }
        ]
      },
      {
        id: 4,
        image: techHubImage,
        title: 'Self-Funding Ecosystem',
        subtitle: 'Profits reinvested. Communities thriving.',
        description:
          'Safari Chicken fuels nutrition programs. TechStyle Hub creates stable jobs. Our permaculture farm trains farmers. Together, we do not rely on donations.',
        ctas: [
          { label: 'Our Services', to: '/services', variant: 'primary' },
          { label: 'About Us', to: '/about', variant: 'secondary' }
        ]
      }
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback(
    (nextIndex) => {
      const normalized = (nextIndex + slides.length) % slides.length;
      setCurrentSlide(normalized);
    },
    [slides.length]
  );

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }
    const timer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, goToSlide, isPaused]);

  const handlePrev = () => {
    goToSlide(currentSlide - 1);
  };

  const handleNext = () => {
    goToSlide(currentSlide + 1);
  };

  const activeSlide = slides[currentSlide];

  const wordVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay: 0.25 + i * 0.08,
        ease: 'easeOut'
      }
    })
  };

  const mottoWords = ['Every', 'Person,', 'Every', 'Opportunity'];

  return (
    <div
      className="hero-slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-background" />
      <button className="nav-button prev" onClick={handlePrev} aria-label="Previous slide">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="nav-button next" onClick={handleNext} aria-label="Next slide">
        <i className="fas fa-chevron-right"></i>
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          className="hero-slide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="hero-text-block">
            <motion.span
              className="hero-eyebrow"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
            >
              Safari Strives
            </motion.span>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
            >
              {mottoWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  custom={index}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="hero-kicker"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32, ease: 'easeOut' }}
            >
              {activeSlide.subtitle}
            </motion.p>
            <motion.div
              className="hero-ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4, ease: 'easeOut' }}
            >
              <Link to="/about" className="btn primary-btn hero-primary-btn">
                Learn More
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="hero-media"
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
          >
            {activeSlide.image ? (
              <motion.img
                key={`image-${activeSlide.id}`}
                src={activeSlide.image}
                alt={activeSlide.title}
                className="hero-media-image"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 7, ease: 'easeOut' }}
              />
            ) : (
              <div className="hero-media-placeholder">
                <i className="fas fa-image"></i>
              </div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="slide-indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;