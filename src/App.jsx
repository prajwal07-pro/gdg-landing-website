import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/global.css';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import CommunityValues from './components/CommunityValues';
import Events from './components/Events';
import Projects from './components/Projects';
import TeamMembers from './components/TeamMembers'; // Changed from Technologies
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import ErrorFallback from './components/ErrorFallback';

// Pages
import SignIn from './pages/SignIn';

// Home Page Component
const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="min-h-screen"
  >
    <Navigation />
    <main className="pt-16">
      <Hero />
      <About />
      <CommunityValues />
      <Events />
      <Projects />
      <TeamMembers />
      <Highlights />
    </main>
    <Footer />
  </motion.div>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Firebase and other services
    console.log('GDG VTU Website Loaded');
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <ErrorFallback>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            {/* Add catch-all route for 404s */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </ErrorFallback>
    </div>
  );
}

export default App;
