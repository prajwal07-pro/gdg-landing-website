import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Navbar({ user, onSignIn, onSignOut }) {
  const { t, i18n } = useTranslation("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'events', 'projects', 'highlights'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { key: 'about', label: t("nav.about", "About"), href: 'about' },
    { key: 'events', label: t("nav.events", "Events"), href: 'events' },
    { key: 'projects', label: t("nav.projects", "Projects"), href: 'projects' },
    { key: 'highlights', label: t("nav.highlights", "Highlights"), href: 'highlights' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-google-blue to-google-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GDG</span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:block">
              {t("nav.title", "GDG Chapter")}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                className={`text-sm font-medium transition-colors duration-200 focus-ring rounded px-3 py-2 ${
                  activeSection === item.href
                    ? 'text-google-blue'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors focus-ring rounded px-3 py-2">
                <span className="text-sm">
                  {languages.find(lang => lang.code === i18n.language)?.flag || '🌐'}
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full right-0 mt-2 py-2 w-48 glass rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLang(lang.code)}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors flex items-center space-x-3 ${
                      i18n.language === lang.code ? 'text-google-blue' : 'text-neutral-300'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Auth Button */}
            {user ? (
              <div className="flex items-center space-x-3">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={onSignOut}
                  className="text-sm text-neutral-300 hover:text-white transition-colors focus-ring rounded px-3 py-2"
                >
                  {t("nav.sign_out", "Sign Out")}
                </button>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onSignIn}
                className="bg-gradient-to-r from-google-blue to-google-green text-white px-4 py-2 rounded-lg text-sm font-medium focus-ring"
              >
                {t("nav.sign_in", "Sign In")}
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus-ring p-2 rounded"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 py-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left py-2 transition-colors ${
                      activeSection === item.href
                        ? 'text-google-blue'
                        : 'text-neutral-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Language Selector */}
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs text-neutral-400 mb-2">{t("nav.language", "Language")}</p>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLang(lang.code)}
                        className={`px-3 py-1 rounded text-xs ${
                          i18n.language === lang.code
                            ? 'bg-google-blue text-white'
                            : 'bg-white/10 text-neutral-300'
                        }`}
                      >
                        {lang.flag} {lang.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Auth */}
                <div className="pt-2 border-t border-white/10">
                  {user ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user.photoURL}
                          alt={user.displayName}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-neutral-300 text-sm">{user.displayName}</span>
                      </div>
                      <button
                        onClick={onSignOut}
                        className="text-sm text-neutral-400 hover:text-white"
                      >
                        {t("nav.sign_out", "Sign Out")}
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={onSignIn}
                      className="w-full bg-gradient-to-r from-google-blue to-google-green text-white py-2 rounded-lg text-sm font-medium"
                    >
                      {t("nav.sign_in", "Sign In")}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
