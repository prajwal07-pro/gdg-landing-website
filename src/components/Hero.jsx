import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

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

  const floatingElements = [
    { emoji: '🚀', delay: 0, x: '10%', y: '20%', scale: 1.2 },
    { emoji: '💻', delay: 0.5, x: '80%', y: '15%', scale: 1 },
    { emoji: '🌟', delay: 1, x: '15%', y: '70%', scale: 0.8 },
    { emoji: '⚡', delay: 1.5, x: '85%', y: '75%', scale: 1.1 },
    { emoji: '🎯', delay: 2, x: '50%', y: '10%', scale: 0.9 },
    { emoji: '🔥', delay: 2.5, x: '30%', y: '80%', scale: 1.3 },
  ];

  const typingTexts = [
    "Building the future through",
    "community-driven learning,",
    "collaboration, and innovation"
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-light-primary via-light-secondary to-light-accent">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gdg-blue/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
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
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-gdg-red/20 to-gdg-blue/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-gdg-yellow/20 to-gdg-green/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating Interactive Elements */}
      {floatingElements.map((elem, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl cursor-pointer z-10"
          style={{ left: elem.x, top: elem.y }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: elem.scale, 
            rotate: 0,
            y: [0, -20, 0],
            x: mousePosition.x * (index % 2 === 0 ? 0.02 : -0.02),
          }}
          transition={{ 
            scale: { delay: elem.delay, duration: 0.8, type: "spring" },
            rotate: { delay: elem.delay, duration: 0.8 },
            y: { duration: 3 + index, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 0.5 }
          }}
          whileHover={{ 
            scale: elem.scale * 1.3, 
            rotate: 360,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: elem.scale * 0.9 }}
        >
          {elem.emoji}
        </motion.div>
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Enhanced Hero Content */}
            <motion.div 
              className="space-y-8"
              style={{ rotateX, rotateY, transformPerspective: 1000 }}
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-5xl lg:text-8xl font-bold leading-tight">
                  <motion.div 
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <motion.span 
                      className="inline-block text-gdg-red"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }}
                    >
                      Google
                    </motion.span>
                  </motion.div>
                  
                  <motion.div 
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <motion.span 
                      className="inline-block text-gdg-blue"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
                    >
                      Developer
                    </motion.span>
                  </motion.div>
                  
                  <motion.div 
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                  >
                    <motion.span 
                      className="inline-block gdg-gradient-text"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 1.3, type: "spring", stiffness: 100 }}
                    >
                      Groups
                    </motion.span>
                  </motion.div>
                </h1>

                <motion.div 
                  className="w-32 h-2 bg-gdg-gradient rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "8rem" }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="space-y-4"
              >
                {typingTexts.map((text, index) => (
                  <motion.p 
                    key={index}
                    className="text-xl lg:text-2xl text-text-secondary leading-relaxed"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 2 + index * 0.3 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.button
                  className="gdg-button-primary text-lg group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    boxShadow: [
                      "0 4px 20px rgba(66, 133, 244, 0.3)",
                      "0 8px 30px rgba(66, 133, 244, 0.4)",
                      "0 4px 20px rgba(66, 133, 244, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.span 
                    className="mr-3 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                  Explore Events
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 rounded-xl font-semibold border-2 border-gdg-blue text-gdg-blue bg-transparent hover:bg-gdg-blue hover:text-white transition-all duration-300 text-lg group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="mr-3 inline-block"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ⚡
                  </motion.span>
                  Learn More
                </motion.button>
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-8 pt-8"
              >
                {[
                  { number: '500+', label: 'Members', icon: '👥', color: 'text-gdg-blue' },
                  { number: '50+', label: 'Events', icon: '📅', color: 'text-gdg-red' },
                  { number: '25+', label: 'Projects', icon: '🚀', color: 'text-gdg-green' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center group"
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 3 + index * 0.1 }}
                  >
                    <motion.div 
                      className="text-2xl mb-2"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div 
                      className={`text-3xl lg:text-4xl font-bold ${stat.color}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 3.5 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-text-secondary font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Hero Visual */}
            <motion.div 
              className="relative lg:h-[700px] flex items-center justify-center"
              variants={itemVariants}
            >
              {/* Central rotating element */}
              <motion.div
                className="relative w-96 h-96"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gdg-red via-gdg-blue via-gdg-yellow to-gdg-green p-1"
                  animate={{ 
                    background: [
                      "linear-gradient(0deg, #EA4335, #4285F4, #FBBC04, #34A853)",
                      "linear-gradient(90deg, #EA4335, #4285F4, #FBBC04, #34A853)",
                      "linear-gradient(180deg, #EA4335, #4285F4, #FBBC04, #34A853)",
                      "linear-gradient(270deg, #EA4335, #4285F4, #FBBC04, #34A853)",
                      "linear-gradient(360deg, #EA4335, #4285F4, #FBBC04, #34A853)"
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <div className="w-full h-full bg-light-primary rounded-full shadow-2xl flex items-center justify-center">
                    <motion.div 
                      className="text-8xl font-bold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.span 
                        className="inline-block text-gdg-red"
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                      >
                        G
                      </motion.span>
                      <motion.span 
                        className="inline-block text-gdg-blue"
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      >
                        D
                      </motion.span>
                      <motion.span 
                        className="inline-block text-gdg-green"
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                      >
                        G
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Orbiting satellites */}
                {[
                  { angle: 0, distance: 200, color: 'bg-gdg-red', size: 'w-16 h-16', icon: '🌐' },
                  { angle: 90, distance: 220, color: 'bg-gdg-blue', size: 'w-12 h-12', icon: '📱' },
                  { angle: 180, distance: 200, color: 'bg-gdg-yellow', size: 'w-14 h-14', icon: '☁️' },
                  { angle: 270, distance: 210, color: 'bg-gdg-green', size: 'w-10 h-10', icon: '🤖' },
                ].map((satellite, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${satellite.size} ${satellite.color} rounded-full shadow-lg flex items-center justify-center text-white text-xl`}
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: -8,
                      marginTop: -8,
                    }}
                    animate={{
                      rotate: [-satellite.angle, -satellite.angle + 360],
                      x: [
                        Math.cos((satellite.angle * Math.PI) / 180) * satellite.distance,
                        Math.cos(((satellite.angle + 360) * Math.PI) / 180) * satellite.distance,
                      ],
                      y: [
                        Math.sin((satellite.angle * Math.PI) / 180) * satellite.distance,
                        Math.sin(((satellite.angle + 360) * Math.PI) / 180) * satellite.distance,
                      ],
                    }}
                    transition={{
                      duration: 15 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    whileHover={{ scale: 1.3, zIndex: 10 }}
                  >
                    <motion.span
                      animate={{ rotate: [satellite.angle, satellite.angle - 360] }}
                      transition={{
                        duration: 15 + index * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {satellite.icon}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pulsing rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute border-2 border-gdg-blue/20 rounded-full"
                  style={{
                    width: 200 + ring * 100,
                    height: 200 + ring * 100,
                    left: '50%',
                    top: '50%',
                    marginLeft: -(100 + ring * 50),
                    marginTop: -(100 + ring * 50),
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: ring * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4 }}
      >
        <motion.div 
          className="flex flex-col items-center space-y-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-text-secondary text-sm">Scroll to explore</span>
          <motion.div 
            className="w-6 h-10 border-2 border-gdg-blue rounded-full flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="w-1 h-3 bg-gdg-blue rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
