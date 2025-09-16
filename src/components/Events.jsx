import { useRef, useState, useMemo } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState('All Events');
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const filters = ['All Events', 'DevFest', 'Workshops', 'Online', 'Offline', 'Upcoming'];

  const events = [
    {
      id: 1,
      title: 'DevFest Bengaluru 2025',
      date: 'Nov 22',
      time: '9:00 AM IST',
      location: 'Bengaluru',
      type: 'DevFest',
      attendees: 500,
      image: '/events/devfest-bengaluru.png',
      status: 'upcoming',
      description: 'The biggest developer festival in Bengaluru featuring talks, workshops, and networking',
      featured: true,
      cohosted: false
    },
    {
      id: 2,
      title: 'Google I/O Extended 2025',
      date: 'Sep 20',
      time: '10:00 AM IST',
      location: 'Chennai',
      type: 'Conference',
      attendees: 300,
      image: '/events/google-io-extended.png',
      status: 'upcoming',
      description: 'Extended coverage of Google I/O with local speakers and hands-on sessions'
    },
    {
      id: 3,
      title: 'DevFest 2025 Chennai',
      date: 'Nov 8',
      time: '9:30 AM IST',
      location: 'Chennai',
      type: 'DevFest',
      attendees: 400,
      image: '/events/devfest-chennai.png',
      status: 'upcoming',
      description: 'Annual developer festival with latest Google technologies and innovations',
      cohosted: true
    },
    {
      id: 4,
      title: 'DevFest Kochi 2025',
      date: 'Nov 1',
      time: '8:30 AM IST',
      location: 'Kochi',
      type: 'DevFest',
      attendees: 350,
      image: '/events/devfest-kochi.png',
      status: 'upcoming',
      description: 'Kerala\'s premier developer conference featuring AI, Cloud, and Mobile technologies'
    },
    {
      id: 5,
      title: 'Cloud Computing Workshop',
      date: 'Oct 15',
      time: '2:00 PM IST',
      location: 'Online',
      type: 'Workshop',
      attendees: 150,
      image: '/events/cloud-computing.png',
      status: 'upcoming',
      description: 'Deep dive into Google Cloud Platform and serverless architectures'
    },
    {
      id: 6,
      title: 'AI/ML Bootcamp',
      date: 'Oct 25',
      time: '10:00 AM IST',
      location: 'VTU Campus',
      type: 'Workshop',
      attendees: 200,
      image: '/events/ai-ml-workshop.png',
      status: 'upcoming',
      description: 'Hands-on machine learning workshop with TensorFlow and real-world projects'
    }
  ];

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      if (selectedFilter === 'All Events') return true;
      if (selectedFilter === 'DevFest') return event.type === 'DevFest';
      if (selectedFilter === 'Workshops') return event.type === 'Workshop';
      if (selectedFilter === 'Online') return event.location === 'Online';
      if (selectedFilter === 'Offline') return event.location !== 'Online';
      if (selectedFilter === 'Upcoming') return event.status === 'upcoming';
      return true;
    });
  }, [selectedFilter, events]);

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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
  };

  return (
    <section id="events" className="gdg-section bg-light-secondary relative overflow-hidden">
      <div className="gdg-container">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gdg-blue/5 rounded-full blur-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Section Header */}
        <motion.div
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Join our community events and{" "}
            <span className="bg-gdg-gradient bg-clip-text text-transparent">
              workshops
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover amazing tech events, workshops, and DevFest conferences happening in your area
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-gdg-blue text-white shadow-lg'
                  : 'bg-white text-text-secondary hover:bg-gdg-blue/10 hover:text-gdg-blue shadow-md'
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

        {/* Events Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                variants={cardVariants}
                onHoverStart={() => setHoveredEvent(event.id)}
                onHoverEnd={() => setHoveredEvent(null)}
                whileHover={{ scale: 1.02, y: -4 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                layout
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x200/4285F4/white?text=${encodeURIComponent(event.title)}`;
                    }}
                  />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.type === 'DevFest' 
                        ? 'bg-gdg-red text-white' 
                        : 'bg-gdg-blue text-white'
                    }`}>
                      {event.type}
                    </span>
                    {event.cohosted && (
                      <div className="bg-gdg-blue text-white px-2 py-1 rounded-full text-xs flex items-center">
                        <span className="mr-1">👥</span>
                        cohosted
                      </div>
                    )}
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <span className="text-gdg-blue font-medium text-sm">{event.date}</span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-gdg-blue transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-text-secondary mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Event Meta */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-text-light">
                      <span className="mr-2">📅</span>
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-text-light">
                      <span className="mr-2">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-text-light">
                      <span className="mr-2">👥</span>
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>

                  {/* RSVP Button */}
                  <motion.button
                    className="w-full bg-gdg-gradient text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
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
            className="text-center py-16 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">No events found</h3>
            <p className="text-text-secondary mb-6">Try selecting a different filter</p>
            <motion.button
              onClick={() => setSelectedFilter('All Events')}
              className="bg-gdg-blue text-white px-6 py-3 rounded-full font-medium hover:bg-gdg-blue/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Events
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Events;
