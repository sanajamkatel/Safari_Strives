import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ChickenInitiative from './pages/ChickenInitiative';
import Microloans from './pages/Microloans';
import WeeklyMeals from './pages/WeeklyMeals';
import MedicalSupport from './pages/MedicalSupport';
import Teaching from './pages/Teaching';
import Sanitary from './pages/Sanitary';
import TechHub from './pages/TechHub';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import LaunchVideoModal from './components/LaunchVideoModal';

import './App.css';

function App() {
  // Get basename for GitHub Pages
  const basename = process.env.PUBLIC_URL || '/Safari_Strives';
  
  return (
    <Router basename={basename}>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/chicken-initiative" element={<ChickenInitiative />} />
            <Route path="/microloans" element={<Microloans />} />
            <Route path="/weekly-meals" element={<WeeklyMeals />} />
            <Route path="/medical-support" element={<MedicalSupport />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/sanitary" element={<Sanitary />} />
            <Route path="/tech-hub" element={<TechHub />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
        <Footer />
        <LaunchVideoModal videoId="Aqh1WMs8wb0" /> {/* Add the modal here */}
      </div>
    </Router>
  );
}

export default App;
