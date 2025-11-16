import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    involvement: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create FormData object for Netlify
    const form = e.target;
    const formData = new FormData(form);
    
    // Submit to Netlify
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        involvement: ''
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    });
  };

  return (
    <div className="contact-page">
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>Contact Us</h1>
          <p className="hero-subtitle">
            Ready to make a difference? We'd love to hear from you.
          </p>
        </div>
      </motion.section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Get in Touch</h2>
              <p>
                Whether you want to volunteer, donate, partner with us, or simply learn more about our work, 
                we're here to help. Reach out through any of the channels below.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="method-info">
                    <h3>Email</h3>
                    <p>contact@safaristrives.org</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="method-info">
                    <h3>Phone</h3>
                    <p>US +1 (716) 682-2683</p>
                    <p>RW (+25) 0785191825</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="method-info">
                    <h3>Address</h3>
                    <p>4922 134th st Crestwood IL</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="method-info">
                    <h3>Office Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="https://www.linkedin.com/company/safari-strives/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.youtube.com/@SafariStrives" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/safaristrives/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-container"
              id="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form 
                className="contact-form" 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <h2>Send us a Message</h2>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="involvement">How would you like to get involved?</label>
                  <select
                    id="involvement"
                    name="involvement"
                    value={formData.involvement}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="donate">Make a donation</option>
                    <option value="partner">Partnership opportunity</option>
                    <option value="career">Career opportunities</option>
                    <option value="media">Media inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more about how you'd like to get involved or what questions you have..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;