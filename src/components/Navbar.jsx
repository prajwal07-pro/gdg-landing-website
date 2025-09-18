import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ["hero", "about", "events", "projects", "highlights"];
      const currentSection = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ❌ REMOVED: unused changeLang function

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { key: "about", label: "About", href: "about" },
    { key: "events", label: "Events", href: "events" },
    { key: "projects", label: "Projects", href: "projects" },
    { key: "highlights", label: "Highlights", href: "highlights" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/home/prajwal/Public/GDG/gdg-landing/public/gdg-logo.png" 
              alt="GDG VTU Logo" 
              className="h-8 w-8"
              onError={(e) => {
                e.target.src = 'https://developers.google.com/static/community/images/gdg-lockup.svg';
              }
            }
            />
            <span className="text-xl font-bold bg-gdg-gradient bg-clip-text text-transparent">
              GDG VTU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`text-gray-700 hover:text-gdg-blue transition-colors duration-200 font-medium ${
                  activeSection === item.key ? 'text-gdg-blue' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Join Community Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gdg-blue text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              🚀 Join Community
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gdg-blue hover:bg-gray-100 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 py-4 space-y-4"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-700 hover:text-gdg-blue transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <motion.button
                  className="w-full bg-gdg-blue text-white px-6 py-3 rounded-full font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🚀 Join Community
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
