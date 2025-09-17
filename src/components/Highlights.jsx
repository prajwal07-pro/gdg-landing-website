import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const highlights = [
    // {
    //   icon: '👥',
    //   number: '500+',
    //   label: 'Community Members',
    //   color: 'text-gdg-blue'
    // },
    // {
    //   icon: '📅',
    //   number: '50+',
    //   label: 'Events Hosted',
    //   color: 'text-gdg-red'
    // },
    // {
    //   icon: '🚀',
    //   number: '25+',
    //   label: 'Open Source Projects',
    //   color: 'text-gdg-green'
    // },
    // {
    //   icon: '⭐',
    //   number: '100+',
    //   label: 'Member Satisfaction',
    //   color: 'text-gdg-yellow'
    // }
  ];

  return (
    <section id="highlights" className="gdg-section bg-light-primary relative overflow-hidden">
      <div className="gdg-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our community&apos;s achievements and the impact we make together
          </h2> */}
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl mb-4">{highlight.icon}</div>
              <div className={`text-4xl font-bold ${highlight.color} mb-2`}>
                {highlight.number}
              </div>
              <div className="text-text-secondary font-medium">{highlight.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Growing Together Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-4">Growing Together</h3>
          <p className="text-text-secondary max-w-4xl mx-auto">
            From code meetups to industry partnerships, we&apos;re fostering local tech talent and
            shaping the future of technology through collaboration, learning, and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
