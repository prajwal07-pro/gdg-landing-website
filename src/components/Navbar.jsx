import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Navbar({ user, onSignOut }) {
  const { t, i18n } = useTranslation("common");

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

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { key: "about", label: t("nav.about", "About"), href: "about" },
    { key: "events", label: t("nav.events", "Events"), href: "events" },
    { key: "projects", label: t("nav.projects", "Projects"), href: "projects" },
    { key: "highlights", label: t("nav.highlights", "Highlights"), href: "highlights" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 backdrop-blur ${
        isScrolled ? "bg-black/60" : "bg-black/40"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between"
        aria-label="Primary"
      >
        {/* Logo and title with scroll to top */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 focus-ring rounded"
          aria-label="Go to top"
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-google.blue via-google.green to-google.yellow shadow-glow" />
          <div className="flex flex-col items-start">
            <span className="text-xs tracking-wide text-white/70">GDG</span>
            <span className="font-semibold">{t("nav.title", "GDG Chapter")}</span>
          </div>
        </button>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.button
              key={item.key}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ y: -2 }}
              className={`text-sm font-medium transition-colors duration-200 focus-ring rounded px-3 py-2 ${
                activeSection === item.href ? "text-google-blue" : "text-neutral-300 hover:text-white"
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          

          {/* Auth buttons / profile */}
          {!user ? (
            <Link
              to="/auth"
              className="px-3 py-1 rounded bg-google.green text-black font-semibold hover:bg-google.green/90 focus-ring"
            >
              🚀 {t("cta_join", "Join the Chapter")}
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 glass rounded-full px-2 py-1">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "Profile"}
                    className="h-7 w-7 rounded-full"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="h-7 w-7 rounded-full bg-white/20" />
                )}
                <span className="text-sm">{user.displayName || user.email}</span>
              </div>
              <button
                onClick={onSignOut}
                className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 focus-ring"
              >
                {t("sign_out", "Sign out")}
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((s) => !s)}
          className="md:hidden text-white focus-ring p-2 rounded"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          type="button"
        >
          <span className="sr-only">Menu</span>
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur"
          >
            <div className="mx-auto max-w-7xl px-4 py-3 space-y-3">
              {/* Mobile nav items */}
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-2 transition-colors ${
                    activeSection === item.href ? "text-google-blue" : "text-neutral-300"
                  }`}
                  type="button"
                >
                  {item.label}
                </button>
              ))}

              {/* Auth buttons for mobile */}
              <div className="pt-3">
                {!user ? (
                  <Link
                    to="/auth"
                    className="inline-block px-3 py-1 rounded bg-google.green text-black font-semibold hover:bg-google.green/90 focus-ring"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🚀 {t("cta_join", "Join the Chapter")}
                  </Link>
                ) : (
                  <div className="flex items-center justify-between glass rounded-xl p-2">
                    <span className="text-sm">{user.displayName || user.email}</span>
                    <button
                      onClick={() => {
                        onSignOut();
                        setIsMenuOpen(false);
                      }}
                      className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 focus-ring"
                      type="button"
                    >
                      {t("sign_out", "Sign out")}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
