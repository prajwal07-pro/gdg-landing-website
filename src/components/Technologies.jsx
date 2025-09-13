import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0, 
      rotateX: -30,
      y: 50
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const technologies = [
    {
      icon: '🌐',
      title: 'Web Technologies',
      description: 'Learn and build with modern web technologies',
      color: 'from-gdg-blue to-gdg-green',
      topics: ['React', 'Angular', 'Vue.js', 'Node.js', 'TypeScript'],
      bgColor: 'bg-gdg-blue/10'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Create amazing mobile experiences',
      color: 'from-gdg-green to-gdg-yellow',
      topics: ['Android', 'Flutter', 'React Native', 'iOS', 'Kotlin'],
      bgColor: 'bg-gdg-green/10'
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Build scalable cloud solutions',
      color: 'from-gdg-red to-gdg-blue',
      topics: ['Google Cloud', 'Firebase', 'Docker', 'Kubernetes', 'CI/CD'],
      bgColor: 'bg-gdg-red/10'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Explore the future with AI',
      color: 'from-gdg-yellow to-gdg-red',
      topics: ['TensorFlow', 'PyTorch', 'ML Kit', 'AutoML', 'Computer Vision'],
      bgColor: 'bg-gdg-yellow/10'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Design beautiful user experiences',
      color: 'from-gdg-blue to-gdg-yellow',
      topics: ['Figma', 'Material Design', 'Prototyping', 'User Research', 'Accessibility'],
      bgColor: 'bg-gdg-blue/10'
    },
    {
      icon: '🔗',
      title: 'Blockchain',
      description: 'Build decentralized applications',
      color: 'from-gdg-green to-gdg-red',
      topics: ['Smart Contracts', 'Web3', 'DeFi', 'NFTs', 'Ethereum'],
      bgColor: 'bg-gdg-green/10'
    }
  ];

  return (
    <section id="technologies" className="gdg-section bg-light-primary relative overflow-hidden" ref={ref}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gdg-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="gdg-container relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="text-4xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.span>
              <h2 className="text-4xl lg:text-6xl font-bold text-text-primary">
                Technology{" "}
                <motion.span 
                  className="gdg-gradient-text"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Focus Areas
                </motion.span>
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Explore diverse technology domains and enhance your skills with hands-on workshops and projects
            </motion.p>
          </motion.div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Card Background with Gradient */}
                <motion.div 
                  className={`gdg-card p-8 h-full ${tech.bgColor} relative overflow-hidden`}
                  animate={{
                    background: hoveredCard === index 
                      ? `linear-gradient(135deg, ${tech.color.split(' ')[1]}, ${tech.color.split(' ')[3]})` 
                      : undefined
                  }}
                >
                  {/* Animated overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Floating particles */}
                  {hoveredCard === index && (
                    <AnimatePresence>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            y: [0, -50, -100]
                          }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ 
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity
                          }}
                        />
                      ))}
                    </AnimatePresence>
                  )}

                  {/* Icon and Header */}
                  <div className="flex items-center space-x-4 mb-6 relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl shadow-lg"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, -10, 10, 0],
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {tech.icon}
                    </motion.div>
                    
                    <div>
                      <motion.h3 
                        className="text-xl font-semibold text-text-primary group-hover:text-white transition-colors duration-500"
                        layoutId={`title-${index}`}
                      >
                        {tech.title}
                      </motion.h3>
                      <motion.div 
                        className="w-0 h-0.5 bg-gdg-gradient group-hover:w-full transition-all duration-500"
                      />
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-text-secondary group-hover:text-white/90 mb-6 relative z-10 transition-colors duration-500"
                    layoutId={`description-${index}`}
                  >
                    {tech.description}
                  </motion.p>

                  {/* Topics Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2 relative z-10"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0.8 }}
                  >
                    {tech.topics.map((topic, topicIndex) => (
                      <motion.span 
                        key={topicIndex}
                        className="px-3 py-1 bg-white/80 group-hover:bg-white/20 text-text-primary group-hover:text-white text-sm rounded-full border border-light-border group-hover:border-white/30 transition-all duration-500"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + topicIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Learn More Button */}
                  <motion.button
                    className="absolute bottom-4 right-4 w-10 h-10 bg-gdg-gradient rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ scale: hoveredCard === index ? 1 : 0 }}
                  >
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>

                  {/* Progress Ring */}
                  <motion.div 
                    className="absolute top-4 right-4 w-8 h-8"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: hoveredCard === index ? 360 : 0 }}
                    transition={{ duration: 1 }}
                  >
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="rgba(66, 133, 244, 0.3)"
                        strokeWidth="2"
                      />
                      <motion.path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="#4285F4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 100" }}
                        animate={{ 
                          strokeDasharray: hoveredCard === index ? "100 100" : "0 100" 
                        }}
                        transition={{ duration: 0.8 }}
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="gdg-button-primary text-lg group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="mr-3"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                🚀
              </motion.span>
              Explore All Technologies
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
