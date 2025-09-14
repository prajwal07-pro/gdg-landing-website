import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const {  i18n } = useTranslation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'technologies', 'events', 'projects', 'community'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '📖' },
    { id: 'technologies', label: 'Tech Stack', icon: '⚡' },
    { id: 'events', label: 'Events', icon: '📅' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'community', label: 'Community', icon: '👥' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const mobileItemVariants = {
    closed: { x: -50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.nav 
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-light-primary/95 backdrop-blur-lg shadow-light border-b border-light-border' 
          : 'bg-transparent'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo */}
          <motion.div 
            className="flex items-center space-x-4 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
          >
            {/* GDG Logo SVG */}
            <div className="relative">
              <motion.div 
                className="w-12 h-12 relative"
                // animate={{ rotate: 360 }}
                // transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <img 
        src="/gdg-logo.png"  // Update this path to match where you place the file
        alt="GDG Logo"
        className="w-full h-full object-contain"
      />
    </motion.div>
              <motion.span 
                className="text-sm text-text-secondary"
                initial={{ width: 0 }}
                animate={{ width: 'auto' }}
                transition={{ duration: 2, delay: 1 }}
              >
                    Google Developer Groups
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden lg:flex items-center space-x-8"
            variants={itemVariants}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-item px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-gdg-blue bg-gdg-blue/10' 
                    : 'text-text-primary hover:text-gdg-blue'
                }`}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                custom={index}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </motion.button>
            ))}
            
            {/* Enhanced Language Selector */}
            <motion.div 
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <select 
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="bg-light-secondary border border-light-border rounded-lg px-3 py-2 text-sm text-text-primary appearance-none pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gdg-blue/50"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <motion.div
                  animate={{ rotate: [0, 180, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⌄
                </motion.div>
              </div>
            </motion.div>
            
            <motion.button
              className="gdg-button-primary"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">🚀</span>
              Join Community
            </motion.button>
          </motion.div>

          {/* Enhanced Mobile Menu Button */}
          <motion.div 
            className="lg:hidden"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 text-text-primary hover:text-gdg-blue p-2 rounded-lg hover:bg-light-secondary transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-full h-0.5 bg-current mb-1.5"
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-full h-0.5 bg-current mb-1.5"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-full h-0.5 bg-current"
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="bg-light-secondary/95 backdrop-blur-lg rounded-2xl p-6 m-4 border border-light-border">
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'text-gdg-blue bg-gdg-blue/10 border border-gdg-blue/20' 
                          : 'text-text-primary hover:text-gdg-blue hover:bg-light-primary'
                      }`}
                      variants={mobileItemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                  
                  <motion.div 
                    className="pt-4 border-t border-light-border"
                    variants={mobileItemVariants}
                  >
                    <button className="w-full gdg-button-primary">
                      <span className="mr-2">🚀</span>
                      Join Community
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
