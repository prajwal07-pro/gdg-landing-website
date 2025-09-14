import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const CommunityValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const values = [
    {
      icon: '💡',
      title: 'Inclusive',
      description: 'Building diverse, welcoming communities where everyone can thrive and contribute',
      color: 'bg-gdg-yellow',
      textColor: 'text-text-primary',
      particles: ['✨', '🌟', '💫'],
      delay: 0
    },
    {
      icon: '📖',
      title: 'Learning-Focused',
      description: 'Committed to lifelong learning and knowledge sharing across all skill levels',
      color: 'bg-gdg-blue',
      textColor: 'text-white',
      particles: ['📚', '🎓', '🧠'],
      delay: 0.2
    },
    {
      icon: '🎯',
      title: 'Innovation-Driven',
      description: 'Building innovative solutions for local communities through collaborative efforts',
      color: 'bg-gdg-red',
      textColor: 'text-white',
      particles: ['🚀', '⚡', '🔥'],
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const valueVariants = {
    hidden: { 
      scale: 0.5, 
      opacity: 0, 
      rotateY: -90,
      y: 100
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1
      }
    }
  };

  return (
    <section className="gdg-section bg-light-secondary relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-4 h-4 rounded-full ${
              i % 3 === 0 ? 'bg-gdg-red/20' : 
              i % 3 === 1 ? 'bg-gdg-blue/20' : 'bg-gdg-yellow/20'
            }`}
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${10 + (i * 11) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gdg-blue/10 to-gdg-green/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-gdg-red/10 to-gdg-yellow/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </motion.div>

      <div className="gdg-container relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center space-x-3 mb-6"
            >
              <motion.div 
                className="w-12 h-1 bg-gdg-gradient rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "3rem" } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.span 
                className="text-4xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🏆
              </motion.span>
              <motion.div 
                className="w-12 h-1 bg-gdg-gradient rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "3rem" } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
              Our Community{" "}
              <motion.span 
                className="gdg-gradient-text"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Values
              </motion.span>
            </h2>
            
            <motion.p 
              className="text-xl text-text-secondary max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              The principles that guide our community and drive our mission forward
            </motion.p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={valueVariants}
              >
                {/* Icon Container with Particles */}
                <motion.div 
                  className="relative mb-8 flex justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Floating particles around icon */}
                  {value.particles.map((particle, particleIndex) => (
                    <motion.div
                      key={particleIndex}
                      className="absolute text-2xl pointer-events-none"
                      style={{
                        left: `${30 + particleIndex * 20}%`,
                        top: `${20 + particleIndex * 15}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        rotate: [0, 360, 0],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 3 + particleIndex,
                        repeat: Infinity,
                        delay: particleIndex * 0.5 + index * 0.3,
                      }}
                    >
                      {particle}
                    </motion.div>
                  ))}

                  {/* Main Icon */}
                  <motion.div 
                    className={`w-32 h-32 ${value.color} rounded-full flex items-center justify-center text-6xl ${value.textColor} shadow-2xl relative overflow-hidden group-hover:shadow-3xl transition-all duration-500`}
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Animated background overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-white/20 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Ripple effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-white/30"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.2, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                    
                    <motion.span
                      className="relative z-10"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        delay: index * 0.8
                      }}
                    >
                      {value.icon}
                    </motion.span>
                  </motion.div>

                  {/* Orbiting mini elements */}
                  <motion.div
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-gdg-gradient rounded-full"
                        style={{
                          left: `${50 + 40 * Math.cos((i * 120 * Math.PI) / 180)}%`,
                          top: `${50 + 40 * Math.sin((i * 120 * Math.PI) / 180)}%`,
                        }}
                        animate={{ scale: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
                
                {/* Content */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-text-primary group-hover:gdg-gradient-text transition-all duration-500">
                    {value.title}
                  </h3>
                  
                  <motion.div 
                    className="w-16 h-1 bg-gdg-gradient mx-auto rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "4rem" } : {}}
                    transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  />
                  
                  <p className="text-lg text-text-secondary leading-relaxed max-w-sm mx-auto">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decoration */}
          <motion.div 
            className="flex justify-center mt-20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gdg-gradient rounded-full"
                  animate={{ scale: [0.8, 1.2, 0.8] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityValues;
