import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const highlights = [
    {
      icon: '👥',
      number: '500+',
      label: 'Community Members',
      color: 'text-gdg-blue'
    },
    {
      icon: '📅',
      number: '50+',
      label: 'Events Hosted',
      color: 'text-gdg-red'
    },
    {
      icon: '🚀',
      number: '25+',
      label: 'Open Source Projects',
      color: 'text-gdg-green'
    },
    {
      icon: '⭐',
      number: '100+',
      label: 'Member Satisfaction',
      color: 'text-gdg-yellow'
    }
  ];

  return (
    <section id="community" className="gdg-section bg-light-primary" ref={ref}>
      <div className="gdg-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Our community's achievements and the <span className="gdg-gradient-text">impact we make together</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="text-center p-8 gdg-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <div className={`text-4xl font-bold mb-2 ${highlight.color}`}>
                {highlight.number}
              </div>
              <div className="text-text-secondary font-medium">{highlight.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Growing Together Section */}
        <motion.div 
          className="text-center bg-light-secondary rounded-3xl p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-text-primary mb-6">Growing Together</h3>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            From code meetups to industry partnerships, we're fostering local tech talent and 
            shaping the future of technology through collaboration, learning, and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
