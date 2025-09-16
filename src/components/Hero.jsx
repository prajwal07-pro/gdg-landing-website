import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({
        x: (clientX - centerX) / 10,
        y: (clientY - centerY) / 10,
      });
      x.set(clientX - centerX);
      y.set(clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
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

  // Updated floating elements to orbit around the main content
  const floatingElements = [
    { emoji: '🚀', delay: 0, radius: 300, angle: 0 },
    { emoji: '💻', delay: 1, radius: 350, angle: 60 },
    { emoji: '🌟', delay: 2, radius: 280, angle: 120 },
    { emoji: '⚡', delay: 3, radius: 320, angle: 180 },
    { emoji: '🎯', delay: 4, radius: 290, angle: 240 },
    { emoji: '🔥', delay: 5, radius: 340, angle: 300 },
  ];

  const typingTexts = [
    "Building the future through",
    "community-driven learning,",
    "collaboration, and innovation"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light-primary via-light-secondary to-light-accent">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gdg-blue/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Dynamic gradient orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gdg-blue/10 rounded-full blur-3xl"
          style={{ left: '10%', top: '20%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gdg-red/10 rounded-full blur-3xl"
          style={{ right: '10%', bottom: '20%' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Interactive Elements - Orbiting around main content */}
        {floatingElements.map((elem, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl cursor-pointer select-none pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: Math.cos((elem.angle + index * 60) * Math.PI / 180) * elem.radius,
              y: Math.sin((elem.angle + index * 60) * Math.PI / 180) * elem.radius,
            }}
            transition={{
              delay: elem.delay,
              duration: 0.8,
            }}
          >
            <motion.div
              animate={{
                x: [0, Math.cos((elem.angle + index * 60) * Math.PI / 180) * 20, 0],
                y: [0, Math.sin((elem.angle + index * 60) * Math.PI / 180) * 20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8 + index * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {elem.emoji}
            </motion.div>
          </motion.div>
        ))}

        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8"
          variants={itemVariants}
        >
          <span className="block text-gdg-red">Google</span>
          <span className="block text-gdg-blue">Developer</span>
          <span className="block text-gdg-green">Groups</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div className="space-y-2 mb-12" variants={itemVariants}>
          {typingTexts.map((text, index) => (
            <motion.p
              key={index}
              className="text-xl sm:text-2xl lg:text-3xl text-text-secondary font-light"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{
                delay: 2 + index * 0.8,
                duration: 1,
                ease: "easeOut"
              }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button
            className="gdg-button-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🚀 Explore Events
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-gdg-blue text-gdg-blue rounded-xl font-semibold hover:bg-gdg-blue hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            📖 Learn More
          </motion.button>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16"
          variants={itemVariants}
        >
          {[
            { number: '500+', label: 'Members', icon: '👥', color: 'text-gdg-blue' },
            { number: '50+', label: 'Events', icon: '📅', color: 'text-gdg-red' },
            { number: '25+', label: 'Projects', icon: '🚀', color: 'text-gdg-green' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
              <div className="text-text-secondary font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="text-center">
          <motion.div
            className="w-6 h-10 border-2 border-gdg-blue rounded-full mb-2 flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1 h-3 bg-gdg-blue rounded-full mt-2" />
          </motion.div>
          <p className="text-sm text-text-secondary">Scroll to explore</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
