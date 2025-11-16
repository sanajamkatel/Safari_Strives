import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Search.css';

const Search = ({ compact = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // All searchable content from your website
  const searchData = [
    // Pages
    { type: 'page', title: 'Home', link: '/', description: 'Safari Strives main page with our mission and programs' },
    { type: 'page', title: 'About Safari Strive', link: '/about', description: 'Our roots, mission, approach, network, and financial stewardship' },
    { type: 'page', title: 'Team', link: '/team', description: 'Meet our passionate team working to create lasting change' },
    { type: 'page', title: 'Contact', link: '/contact', description: 'Get in touch with Safari Strive' },
    
    // Programs
    { type: 'program', title: 'Microloans', link: '/microloans', description: 'Zero-interest loans alongside hands-on mentorship for entrepreneurs' },
    { type: 'program', title: 'Weekly Meals Initiative', link: '/weekly-meals', description: 'Nutritious meals delivered weekly with community nutrition education' },
    { type: 'program', title: 'Medical & Sanitation Support', link: '/medical-support', description: 'Clinics, supplies, and health coaching funded by social enterprises' },
    { type: 'program', title: 'Sustainable Farming', link: '/teaching', description: 'Permaculture farm training for food security and organic produce' },
    { type: 'program', title: 'Social Enterprise', link: '/sanitary', description: 'Safari Chicken and Modern Textile Initiatives for funding and employment' },
    
    // Key concepts
    { type: 'concept', title: 'Our Roots', link: '/about', description: 'Elie Imani founder story from Rwanda, displacement to Yale University' },
    { type: 'concept', title: 'Mission & Approach', link: '/about', description: 'Integrated model for long-term economic independence' },
    { type: 'concept', title: 'Our Network', link: '/about', description: 'Cross-cultural partnerships across Rwanda, Kenya, Burundi, Japan, USA' },
    { type: 'concept', title: 'Financial Stewardship', link: '/about', description: 'Transparency, accountability, and community trust' },
    { type: 'concept', title: 'Safari Chicken Initiative', link: '/about', description: 'Social enterprise funding meals and microloans' },
    { type: 'concept', title: 'Zero Interest Loans', link: '/microloans', description: 'Microloans without debt burden for entrepreneurs' },
    { type: 'concept', title: 'Women Empowerment', link: '/about', description: '70% of loan recipients are women with healthcare support' },
    { type: 'concept', title: 'Community Development', link: '/', description: 'Sustainable community development through local ownership' },
    { type: 'concept', title: 'Economic Independence', link: '/about', description: 'Building lasting livelihoods through skills and support' }
  ];

  const filteredResults = searchData.filter(item =>
    searchTerm.length > 0 && (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  ).slice(0, 8); // Limit to 8 results

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(e.target.value.length > 0);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIsOpen(false);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'page': return 'fas fa-file-alt';
      case 'program': return 'fas fa-heart';
      case 'concept': return 'fas fa-lightbulb';
      default: return 'fas fa-search';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'page': return '#526e58';
      case 'program': return '#92b24c';
      case 'concept': return '#6f8f63';
      default: return '#666';
    }
  };

  return (
    <div className={`search-container ${compact ? 'search-container--compact' : ''}`}>
      <div className="search-input-wrapper">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          className="search-input"
          placeholder="Search Safari Strive..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => searchTerm && setIsOpen(true)}
        />
        {searchTerm && (
          <button className="search-clear" onClick={clearSearch}>
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && filteredResults.length > 0 && (
          <motion.div
            className="search-results"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {filteredResults.map((result, index) => (
              <Link
                key={index}
                to={result.link}
                className="search-result-item"
                onClick={clearSearch}
              >
                <div className="result-icon" style={{ color: getTypeColor(result.type) }}>
                  <i className={getTypeIcon(result.type)}></i>
                </div>
                <div className="result-content">
                  <h4>{result.title}</h4>
                  <p>{result.description}</p>
                  <span className="result-type">{result.type}</span>
                </div>
              </Link>
            ))}
            
            {searchTerm.length > 0 && filteredResults.length === 0 && (
              <div className="no-results">
                <i className="fas fa-search"></i>
                <p>No results found for "{searchTerm}"</p>
                <span>Try searching for: programs, microloans, nutrition, farming, about</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;