import React from 'react';
import { motion } from 'framer-motion';
import galleryOne from '../assets/chicken4.JPG';
import galleryTwo from '../assets/chekcen4.JPG';
import galleryThree from '../our_work/DSC01047.jpeg';
import galleryFour from '../our_work/000A8790.JPG';
import galleryFive from '../assets/about2.jpg';
import gallerySix from '../assets/about3.JPG';
import './Gallery.css';

const Gallery = () => {
  const images = [
    {
      src: galleryOne,
      title: 'Chicken Initiative',
      caption: 'High-capacity poultry production that funds zero-interest microloans.'
    },
    {
      src: galleryTwo,
      title: 'Cooperative Training',
      caption: 'Hands-on mentorship equips farmers with regenerative agriculture skills.'
    },
    {
      src: galleryThree,
      title: 'Women at Work',
      caption: 'Women entrepreneurs lead the value chain from farm to market.'
    },
    {
      src: galleryFour,
      title: 'TechStyle Hub',
      caption: 'Tailoring and printing apprenticeships provide steady wages and contracts.'
    },
    {
      src: galleryFive,
      title: 'Community Dialogue',
      caption: 'Listening sessions keep initiatives rooted in community priorities.'
    },
    {
      src: gallerySix,
      title: 'Harvest Day',
      caption: 'Permaculture farm harvests feed local meal programs and partner schools.'
    }
  ];

  return (
    <div className="gallery-page">
      <section className="gallery-hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gallery-hero-content"
          >
            <span className="eyebrow">Gallery</span>
            <h1>Stories of enterprise, dignity, and community</h1>
            <p>
              Take a look inside the Safari Strives ecosystem—where poultry farms, microfinance sessions, and
              creative hubs work together to build long-term economic independence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container gallery-grid">
          {images.map((image, index) => (
            <motion.figure
              key={image.title}
              className="gallery-card"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="gallery-image">
                <img src={image.src} alt={image.title} />
              </div>
              <figcaption>
                <h3>{image.title}</h3>
                <p>{image.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;

