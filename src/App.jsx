import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/global.css';

// Core components (loaded immediately)
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ErrorFallback from './components/ErrorFallback';

// Lazy load heavy components (loaded when needed)
const About = lazy(() => import('./components/About'));
const CommunityValues = lazy(() => import('./components/CommunityValues'));
const Events = lazy(() => import('./components/Events'));
const Projects = lazy(() => import('./components/Projects'));
const TeamMembers = lazy(() => import('./components/TeamMembers'));
const Highlights = lazy(() => import('./components/Highlights'));
const Footer = lazy(() => import('./components/Footer'));
const SignIn = lazy(() => import('./pages/SignIn'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gdg-blue"></div>
  </div>
);

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
      <Suspense fallback={<LoadingSpinner />}>
        <About />
        <CommunityValues />
        <Events />
        <Projects />
        <TeamMembers />
        <Highlights />
        <Footer />
      </Suspense>
    </main>
  </motion.div>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log('GDG VTU Website Loaded');
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <ErrorFallback>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/signin" 
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <SignIn />
                </Suspense>
              } 
            />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </ErrorFallback>
    </div>
  );
}

export default App;
