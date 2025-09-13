import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -30 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const features = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We foster creativity and encourage innovative solutions to real-world problems through cutting-edge technology.',
      color: 'from-gdg-red to-gdg-blue',
      delay: 0
    },
    {
      icon: '🤝',
      title: 'Community Driven',
      description: 'Building meaningful connections and collaborative relationships within the tech ecosystem.',
      color: 'from-gdg-blue to-gdg-green',
      delay: 0.1
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description: 'Providing resources and opportunities for skill development and knowledge sharing.',
      color: 'from-gdg-green to-gdg-yellow',
      delay: 0.2
    }
  ];

  return (
    <section id="about" className="gdg-section bg-light-secondary relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-gdg-blue/10 to-gdg-green/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-gdg-red/10 to-gdg-yellow/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />

      <div className="gdg-container relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-24 h-1 bg-gdg-gradient mx-auto mb-6 rounded-full"
            />
            
            <motion.h2 
              className="text-4xl lg:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              We are a{" "}
              <motion.span 
                className="gdg-gradient-text inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                vibrant community
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              We are a vibrant community of developers, designers, and tech enthusiasts who 
              believe in the power of collaboration and continuous learning. Our chapter organizes 
              hands-on workshops, networking events, and project showcases across various 
              technology domains.
            </motion.p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="gdg-card p-8 text-center group relative overflow-hidden"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background gradient overlay */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* Icon container */}
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="text-6xl mb-4 inline-block"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  {/* Floating particles around icon */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gdg-blue rounded-full opacity-60"
                      style={{
                        left: `${30 + i * 20}%`,
                        top: `${20 + i * 15}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.6, 0.2, 0.6],
                        scale: [1, 1.5, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5 + index * 0.2
                      }}
                    />
                  ))}
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-semibold text-text-primary mb-4 group-hover:gdg-gradient-text transition-all duration-300"
                  variants={itemVariants}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-text-secondary leading-relaxed"
                  variants={itemVariants}
                >
                  {feature.description}
                </motion.p>
                
                {/* Animated border */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gdg-gradient"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.div 
              className="inline-flex items-center space-x-4 bg-gradient-to-r from-gdg-blue/10 to-gdg-green/10 px-8 py-4 rounded-2xl border border-gdg-blue/20"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(66, 133, 244, 0.1)",
                  "0 0 40px rgba(66, 133, 244, 0.2)",
                  "0 0 20px rgba(66, 133, 244, 0.1)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span 
                className="text-3xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💡
              </motion.span>
              <div>
                <h4 className="text-lg font-semibold text-gdg-blue">Ready to innovate together?</h4>
                <p className="text-sm text-text-secondary">Join our community and be part of something amazing</p>
              </div>
              <motion.button
                className="gdg-button-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
