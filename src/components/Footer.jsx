import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    community: {
      title: 'Community',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'Projects', href: '#projects' },
        { name: 'Team', href: '#team' },
        { name: 'Join Us', href: '/signin' }
      ]
    },
    connect: {
      title: 'Connect',
      links: [
        { name: 'Twitter', href: '#' },
        { name: 'LinkedIn', href: '#' },
        { name: 'GitHub', href: '#' },
        { name: 'Discord', href: '#' }
      ]
    }
  };

  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/gdg-logo.png" 
                alt="GDG VTU Logo" 
                className="h-8 w-8"
                onError={(e) => {
                  e.target.src = 'https://developers.google.com/static/community/images/gdg-lockup.svg';
                }}
              />
              <span className="text-xl font-bold">GDG VTU</span>
            </div>
            <p className="text-gray-300 mb-4">
              Building the future through community-driven learning, collaboration, and innovation at Visvesvaraya Technological University.
            </p>
            <div className="flex space-x-4">
              {[
                { emoji: '🐤', href: '#', label: 'Twitter' },
                { emoji: '💼', href: '#', label: 'LinkedIn' },
                { emoji: '🐙', href: '#', label: 'GitHub' },
                { emoji: '💬', href: '#', label: 'Discord' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-2xl hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.2 }}
                >
                  {social.emoji}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} GDG VTU. Made with ❤️ by the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
