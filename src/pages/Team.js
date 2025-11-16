import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

// Import team member images
import elieImage from '../assets/ellie.jpeg';
import martinImage from '../assets/martin.jpeg';
import carolinaImage from '../assets/Carolina-e1752298850635-300x300.jpg';
import emmanuelImage from '../assets/emmanuel.jpg';
import asrafImage from '../assets/asraf.jpg';
import joelImage from '../assets/Hakizimana.jpg';
import josueImage from '../assets/Josue.jpg';
import ayanoImage from '../assets/ayano.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Elie Imani',
      role: 'Executive Director & Co-Founder',
      bio: 'Elie founded Safari Strive with a vision rooted in his personal journey from displacement to education. Growing up in Rwanda and shaped by the aftermath of conflict, he brings lived experience and academic depth from his studies at North Central College and Yale University.',
      image: elieImage,
      linkedin: '#',
      email: 'elie@safaristrives.org'
    },
    {
      name: 'Martin Sheehan',
      role: 'Co-Founder',
      bio: 'Martin co-founded Safari Strive with a commitment to sustainable community development. His strategic vision and operational expertise help drive the organization\'s integrated approach to poverty alleviation.',
      image: martinImage,
      linkedin: '#',
      email: 'martin@safaristrives.org'
    },
    {
      name: 'Carolina Alfaro',
      role: 'Women Program Director',
      bio: 'Carolina leads Safari Strive\'s women-focused initiatives, ensuring that over 70% of our microloan recipients receive the support and mentorship they need. Her work empowers women entrepreneurs to build sustainable livelihoods.',
      image: carolinaImage,
      linkedin: '#',
      email: 'carolina@safaristrives.org'
    },
    {
      name: 'Emmanuel',
      role: 'Innovation Director',
      bio: 'Emmanuel drives Safari Strive\'s innovation initiatives, developing creative solutions and new approaches to community development. His forward-thinking leadership helps the organization adapt and grow in an ever-changing landscape.',
      image: emmanuelImage,
      linkedin: '#',
      email: 'emmanuel@safaristrives.org'
    },
    {
      name: 'Asraf Kamwithi',
      role: 'Program Director',
      bio: 'Asraf oversees field operations and program implementation across our key initiatives. His deep understanding of local communities ensures our programs are culturally appropriate and impactful.',
      image: asrafImage,
      linkedin: '#',
      email: 'asraf@safaristrives.org'
    },
    {
      name: 'Hakizimana Joel',
      role: 'Program Director',
      bio: 'Joel manages critical program operations and community outreach. His leadership ensures our sustainable farming and social enterprise initiatives create lasting change in local communities.',
      image: joelImage,
      linkedin: '#',
      email: 'joel@safaristrives.org'
    },
    {
      name: 'Josue Manishimwe',
      role: 'Program Manager',
      bio: 'Josue coordinates day-to-day program activities and community engagement. His hands-on approach ensures our microloans, nutrition programs, and sanitation initiatives reach those who need them most.',
      image: josueImage,
      linkedin: '#',
      email: 'josue@safaristrives.org'
    },
    {
      name: 'Ayano Shimizu',
      role: 'Graphic Designer',
      bio: 'Ayano brings Safari Strive\'s mission to life through compelling visual storytelling and brand design. Her creative expertise helps communicate our impact and values to supporters and communities worldwide.',
      image: ayanoImage,
      linkedin: '#',
      email: 'ayano@safaristrives.org'
    }
  ];



  return (
    <div className="team-page">
      <motion.section 
        className="team-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>Meet Our Team</h1>
          <p className="hero-subtitle">
            Meet the passionate individuals working to create lasting change in communities worldwide
          </p>
        </div>
      </motion.section>

      <section className="team-content section">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="section-subtitle">
              We come from different backgrounds but share the same objective
            </p>
          </motion.div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} className="team-photo" />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-team section">
        <div className="container">
          <motion.div
            className="join-content"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Join Our Team</h2>
            <p>
              We're always looking for passionate individuals who want to make a difference. 
              Whether you're interested in full-time positions, consulting opportunities, 
              or volunteer roles, we'd love to hear from you.
            </p>
            <div className="opportunities">
              <div className="opportunity">
                <i className="fas fa-briefcase"></i>
                <h3>Full-time Positions</h3>
                <p>Join our core team working on program development and implementation.</p>
              </div>
              <div className="opportunity">
                <i className="fas fa-hands-helping"></i>
                <h3>Volunteer Opportunities</h3>
                <p>Contribute your skills on a volunteer basis to support our mission.</p>
              </div>
              <div className="opportunity">
                <i className="fas fa-lightbulb"></i>
                <h3>Consulting Projects</h3>
                <p>Share your expertise through project-based consulting engagements.</p>
              </div>
            </div>
            <a href="/contact" className="btn btn-primary">
              Contact Us About Opportunities
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;