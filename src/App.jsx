import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './i18n/i18n';
import './styles/global.css';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import CommunityValues from './components/CommunityValues';
import Events from './components/Events';
import Projects from './components/Projects';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize Firebase and other services
    console.log('GDG Chapter Website Loaded');
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-light-primary">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Technologies />
          <CommunityValues />
          <Events />
          <Projects />
          <Highlights />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
