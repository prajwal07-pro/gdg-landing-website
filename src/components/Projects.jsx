import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'Community Portal',
      description: 'A comprehensive platform for community members to connect and collaborate',
      tech: ['React', 'Firebase', 'Tailwind'],
      github: '#',
      live: '#',
      image: '🌐'
    },
    {
      title: 'Event Management System',
      description: 'Streamlined event planning and RSVP management system',
      tech: ['Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#',
      image: '📅'
    },
    {
      title: 'Learning Hub',
      description: 'Educational resources and tutorial management platform',
      tech: ['Vue.js', 'Django', 'PostgreSQL'],
      github: '#',
      live: '#',
      image: '📚'
    }
  ];

  return (
    <section id="projects" className="gdg-section bg-light-secondary" ref={ref}>
      <div className="gdg-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Explore our community-driven <span className="gdg-gradient-text">open source projects</span>
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            {['All', 'Web', 'Mobile', 'AI/ML', 'Cloud'].map((filter, index) => (
              <motion.button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gdg-green text-white' 
                    : 'bg-light-accent text-text-secondary hover:bg-gdg-green hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="gdg-card p-6 group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative mb-6">
                <div className="w-full h-48 bg-light-accent rounded-xl flex items-center justify-center text-6xl">
                  {project.image}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-gdg-green transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gdg-green/10 text-gdg-green text-sm rounded-full border border-gdg-green/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    className="flex-1 text-center py-2 px-4 border border-text-secondary text-text-secondary rounded-lg hover:border-gdg-green hover:text-gdg-green transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="flex-1 text-center py-2 px-4 bg-gdg-green text-white rounded-lg hover:bg-gdg-green/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No projects message */}
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-24 h-24 bg-light-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="text-3xl">📁</div>
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-4">No projects found matching the moment.</h3>
          <p className="text-text-secondary mb-6">Explore our community projects and contribute to open source!</p>
          <motion.button
            className="gdg-button-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
