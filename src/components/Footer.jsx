
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-text-primary text-white">
      <div className="gdg-container gdg-section">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="50" cy="50" r="30" fill="#EA4335" />
                  <circle cx="150" cy="50" r="30" fill="#4285F4" />
                  <circle cx="50" cy="150" r="30" fill="#FBBC04" />
                  <circle cx="150" cy="150" r="30" fill="#34A853" />
                  <text x="100" y="110" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#FFFFFF">GDG</text>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">GDG Chapter</h3>
                <p className="text-sm text-gray-400">Google Developer Groups</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building the future through community-driven learning, collaboration, and innovation in technology.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'github', 'linkedin', 'youtube'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gdg-blue transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5">📱</div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Events', 'Projects', 'Community', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-gdg-blue transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Code of Conduct', 'Community Guidelines', 'Speaker Program', 'Organizer Kit', 'Brand Guidelines'].map((resource) => (
                <li key={resource}>
                  <a href="#" className="text-gray-300 hover:text-gdg-green transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for latest events and updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gdg-blue"
              />
              <motion.button
                className="w-full gdg-button-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 GDG Chapter. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
