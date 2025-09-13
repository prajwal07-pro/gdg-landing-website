import React, { useRef, useState, useMemo } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState('All Events');
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const filters = ['All Events', 'Workshops', 'Online', 'Offline', 'Upcoming'];

  const events = [
    {
      id: 1,
      title: 'Web Development Workshop',
      date: 'Dec 15, 2024',
      time: '2:00 PM IST',
      location: 'Online',
      type: 'Workshop',
      attendees: 120,
      image: '🌐',
      status: 'upcoming',
      description: 'Learn modern web development with React, Node.js and best practices'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      date: 'Dec 20, 2024',
      time: '10:00 AM IST',
      location: 'Tech Hub',
      type: 'Workshop',
      attendees: 85,
      image: '📱',
      status: 'upcoming',
      description: 'Build amazing mobile apps using Flutter and modern development tools'
    },
    {
      id: 3,
      title: 'Cloud Computing Meetup',
      date: 'Dec 25, 2024',
      time: '4:00 PM IST',
      location: 'Online',
      type: 'Meetup',
      attendees: 200,
      image: '☁️',
      status: 'upcoming',
      description: 'Explore Google Cloud Platform and learn about scalable cloud solutions'
    },
    {
      id: 4,
      title: 'AI/ML Workshop',
      date: 'Jan 5, 2025',
      time: '11:00 AM IST',
      location: 'Campus',
      type: 'Workshop',
      attendees: 150,
      image: '🤖',
      status: 'upcoming',
      description: 'Introduction to Machine Learning with TensorFlow and practical examples'
    },
    {
      id: 5,
      title: 'UI/UX Design Workshop',
      date: 'Jan 10, 2025',
      time: '3:00 PM IST',
      location: 'Design Studio',
      type: 'Workshop',
      attendees: 75,
      image: '🎨',
      status: 'upcoming',
      description: 'Learn design principles and create beautiful user interfaces'
    },
    {
      id: 6,
      title: 'Blockchain Development',
      date: 'Jan 15, 2025',
      time: '1:00 PM IST',
      location: 'Online',
      type: 'Workshop',
      attendees: 95,
      image: '🔗',
      status: 'upcoming',
      description: 'Build decentralized applications using modern blockchain technologies'
    }
  ];

  // Optimized filtering with useMemo to prevent unnecessary recalculations
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      if (selectedFilter === 'All Events') return true;
      if (selectedFilter === 'Workshops') return event.type === 'Workshop';
      if (selectedFilter === 'Online') return event.location === 'Online';
      if (selectedFilter === 'Offline') return event.location !== 'Online';
      if (selectedFilter === 'Upcoming') return event.status === 'upcoming';
      return true;
    });
  }, [selectedFilter, events]);

  // Simplified animations for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="events" className="gdg-section bg-light-primary relative overflow-hidden" ref={ref}>
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gdg-blue/3 via-transparent to-gdg-green/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
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
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span 
                className="text-5xl"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎉
              </motion.span>
              <h2 className="text-4xl lg:text-6xl font-bold text-text-primary">
                Join our community events and{" "}
                <motion.span 
                  className="gdg-gradient-text"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  workshops
                </motion.span>
              </h2>
            </motion.div>
            
            {/* Optimized Filter Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedFilter === filter 
                      ? 'bg-gdg-blue text-white shadow-md' 
                      : 'bg-light-accent text-text-secondary hover:bg-gdg-blue/10 hover:text-gdg-blue'
                  }`}
                  variants={filterVariants}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  {filter}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Optimized Events Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            key={selectedFilter} // Force re-render on filter change
          >
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="gdg-card p-6 group cursor-pointer"
                  variants={cardVariants}
                  layout
                  onHoverStart={() => setHoveredEvent(event.id)}
                  onHoverEnd={() => setHoveredEvent(null)}
                  whileHover={{ 
                    scale: 1.02,
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                >
                  {/* Event Image/Icon */}
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <motion.div 
                      className="w-full h-40 bg-light-accent flex items-center justify-center relative"
                    >
                      <motion.div 
                        className="text-6xl"
                        animate={hoveredEvent === event.id ? {
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{ duration: 0.4 }}
                      >
                        {event.image}
                      </motion.div>
                    </motion.div>
                    
                    {/* Event Type Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-gdg-blue text-white text-xs font-medium rounded-full shadow-md">
                        {event.type}
                      </span>
                    </div>

                    {/* Status Indicator */}
                    <motion.div 
                      className="absolute top-3 left-3 w-3 h-3 bg-gdg-green rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Event Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-gdg-blue transition-colors duration-200">
                      {event.title}
                    </h3>
                    
                    <p className="text-text-secondary text-sm line-clamp-2">
                      {event.description}
                    </p>
                    
                    {/* Event Meta Information */}
                    <div className="space-y-2 text-text-secondary text-sm">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>{event.date} at {event.time}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>

                    {/* RSVP Button */}
                    <motion.button
                      className="w-full gdg-button-primary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-2">🚀</span>
                      RSVP Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-20 h-20 bg-light-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl">📅</div>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">No events found</h3>
              <p className="text-text-secondary mb-6">Try selecting a different filter</p>
              <motion.button
                className="gdg-button-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter('All Events')}
              >
                View All Events
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
