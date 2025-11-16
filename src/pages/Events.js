import React from 'react';
import { motion } from 'framer-motion';
import './Events.css';

const Events = () => {
  const events = [
    {
      title: 'Community Enterprise Summit',
      date: 'March 22, 2025 • Kigali, Rwanda',
      description:
        'A full-day gathering of entrepreneurs, farmers, and partners exploring how self-funding social enterprises are transforming local economies.',
      tags: ['In-Person', 'Workshops', 'Keynotes']
    },
    {
      title: 'Zero-Interest Microfinance Clinic',
      date: 'April 18, 2025 • Virtual',
      description:
        'Interactive clinic featuring real stories from borrowers and mentors, plus practical steps to launch microfinance partnerships in your community.',
      tags: ['Virtual', 'Microfinance', 'Impact Stories']
    },
    {
      title: 'Safari TechStyle Showcase',
      date: 'May 9, 2025 • Huye, Rwanda',
      description:
        'Celebrate the makers behind the TechStyle Hub with a runway show, cooperative marketplace, and meet-the-mentor sessions.',
      tags: ['Marketplace', 'Fashion', 'Career Pathways']
    }
  ];

  return (
    <div className="events-page">
      <section className="events-hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="events-hero-content"
          >
            <span className="eyebrow">Events</span>
            <h1>Gather, learn, and collaborate with Safari Strives</h1>
            <p>
              Our events bring together community members, partners, and supporters to co-create solutions around
              enterprise development, regenerative agriculture, and dignity-centered economic growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container events-grid">
          {events.map((event) => (
            <motion.article
              key={event.title}
              className="event-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="event-date">{event.date}</span>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <div className="event-tags">
                {event.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button type="button" className="btn primary-btn">
                RSVP Coming Soon
              </button>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;

