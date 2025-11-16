import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const serviceTracks = [
    {
      title: 'Microloans',
      description: 'Zero percent interest female microloans for female entrepreneurs',
      icon: 'fas fa-hand-holding-usd',
      link: '/microloans'
    },
    {
      title: 'Bathroom at the TechStyle Hub',
      description: 'Modern facilities built to serve for regional use',
      icon: 'fas fa-restroom',
      link: '/sanitary'
    },
    {
      title: 'Weekly Meals',
      description: "Provide eggs and bread to children, prioritizing the borrower's families",
      icon: 'fas fa-bread-slice',
      link: '/weekly-meals'
    },
    {
      title: 'Monthly Pads',
      description: 'Every woman supported receives basic hygiene',
      icon: 'fas fa-heart',
      link: '/sanitary'
    }
  ];

  const microloanSteps = [
    {
      title: 'Apply',
      description: 'Fill out a simple form at church. Provide ID and phone information.'
    },
    {
      title: 'Verify',
      description: 'Church and local leader confirm your address and business details.'
    },
    {
      title: 'Review',
      description: 'Our team checks your application and schedules a short meeting for clarity.'
    },
    {
      title: 'Sign',
      description: 'Three signatures are collected, and your receipt folder is opened.'
    },
    {
      title: 'We Purchase',
      description: 'Inventory or a market spot is arranged—no cash handouts.'
    },
    {
      title: 'Deliver',
      description: 'Goods or materials are delivered within 24 hours of approval.'
    },
    {
      title: 'Start Trading',
      description: 'Set up shop and begin logging simple weekly numbers.'
    },
    {
      title: 'Check-in',
      description: 'Receive follow-up visits or phone calls for guidance and support.'
    },
    {
      title: 'Repay',
      description: 'Begin at the end of month two, in small weekly installments.'
    }
  ];

  const microloanMetrics = [
    {
      title: 'Zero Interest',
      description: 'No interest charges on microloans',
      icon: 'fas fa-percentage'
    },
    {
      title: 'Repay 50 Percent',
      description: 'Only pay back half of the loan amount',
      icon: 'fas fa-hand-holding-heart'
    },
    {
      title: 'Amount',
      description: 'RWF 350,000 to 500,000',
      icon: 'fas fa-coins'
    },
    {
      title: 'Who Qualifies',
      description: 'Women already running a small business',
      icon: 'fas fa-user-friends'
    },
    {
      title: 'Support',
      description: 'Financial literacy and 1:1 consultation',
      icon: 'fas fa-chalkboard-teacher'
    },
    {
      title: 'Extras',
      description: 'Bathroom access, monthly pads, priority family aid',
      icon: 'fas fa-gift'
    }
  ];

  const faqs = [
    {
      question: 'How do I apply?',
      answer: 'By referral through church leaders and local leaders. We interview and check your stall or tools.'
    },
    {
      question: 'Who is eligible?',
      answer: 'Women with an active microbusiness, at least six months in the same trade, simple weekly records, and local references.'
    },
    {
      question: 'How much and on what terms?',
      answer: '350,000 to 500,000 RWF. Zero percent interest. Two month grace, then small weekly repayments. Repayment is only 50 percent.'
    },
    {
      question: 'How are funds used and protected?',
      answer: 'We purchase revenue drivers directly and file receipts. No cash disbursement. Co signatures from the borrower, a church representative, and a local official. No collateral.'
    },
    {
      question: 'What if sales dip, and what support comes with the loan?',
      answer: 'We pause or resize payments to protect the business. Borrowers get the dignity bundle, bathrooms at the TechStyle hub, monthly pads, simple financial consulting, and priority family aid.'
    }
  ];

  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container services-hero-wrap">
          <div className="services-hero-copy">
            <span className="services-hero-badge">Enterprise Services</span>
            <h1>Enterprise profit funds two service tracks</h1>
            <p>
              Development comes first with zero-percent microloans for working women. Care services, bathrooms, pads,
              meals, and workshops prioritize our participants and extend as capacity allows.
            </p>
          </div>
        </div>
      </section>

      <section className="services-overview section">
        <div className="container">
          <div className="tracks-grid">
            {serviceTracks.map((track) => (
              <Link to={track.link} className="track-card" key={track.title}>
                <div className="track-icon">
                  <i className={track.icon}></i>
                </div>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="services-steps section" id="microloans">
        <div className="container">
          <div className="steps-header">
            <span className="eyebrow">Microloans</span>
            <h2>One clear process. Fair terms. Real support.</h2>
          </div>
          <div className="steps-grid-wrapper">
            <motion.div
              className="steps-column"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="steps-timeline">
                {microloanSteps.map((step, index) => (
                  <div className="timeline-step" key={step.title}>
                    <div className="timeline-index">{index + 1}</div>
                    <div className="timeline-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="steps-column metrics-column"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {microloanMetrics.map((metric, index) => (
                <div className="metric-card" key={metric.title}>
                  <div className="metric-icon">
                    <i className={metric.icon}></i>
                  </div>
                  <h4>{metric.title}</h4>
                  <p>{metric.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="services-faq section">
        <div className="container">
          <div className="faq-header">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-accordion">
            {faqs.map((faq, index) => {
              const isActive = activeFaq === index;
              return (
                <motion.div
                  key={faq.question}
                  className={`faq-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveFaq(isActive ? -1 : index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="faq-question">
                    <span>{faq.question}</span>
                    <i className={`fas fa-chevron-${isActive ? 'up' : 'down'}`}></i>
                  </div>
                  <motion.div
                    className="faq-answer"
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

