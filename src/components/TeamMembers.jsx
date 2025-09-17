import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const TeamMembers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredMember, setHoveredMember] = useState(null);

  // Team structure as requested
  const teams = [
    {
      name: 'Leadership',
      members: [
        {
          name: 'Piyush Annigeri',
          role: 'GDGoC Organizer',
          organization: 'VISVESVARAYA TECHNOLOGICAL UNIVERSITY',
          image: '/team/organizer.jpg',
          profileLink: '#',
          isOrganizer: true
        }
      ]
    },
    {
      name: 'Tech Team',
      members: [
        {
          name: 'Prajwal Rawoot',
          role: 'Tech Lead',
          organization: 'VTU',
          image: '/team/tech-1.jpg',
          profileLink: '#'
        },
        {
          name: 'Yash Koparde',
          role: 'Tech Lead',
          organization: 'VTU',
          image: '/team/tech-2.jpg',
          profileLink: 'www.github.com/yashkoaprde'
        },
    {
      name: 'PR & Outreach Team',
      members: [
        {
          name: 'Sneha Reddy',
          role: 'PR Lead',
          organization: 'VTU',
          image: '/team/pr-1.jpg',
          profileLink: '#'
        },
        {
          name: 'Kiran Joshi',
          role: 'Outreach Coordinator',
          organization: 'VTU',
          image: '/team/pr-2.jpg',
          profileLink: '#'
        }
      ]
    },
    {
      name: 'Event Coordinator Team',
      members: [
        {
          name: 'Anita Desai',
          role: 'Event Manager',
          organization: 'VTU',
          image: '/team/event-1.jpg',
          profileLink: '#'
        },
        {
          name: 'Vikram Singh',
          role: 'Logistics Coordinator',
          organization: 'VTU',
          image: '/team/event-2.jpg',
          profileLink: '#'
        },
        {
          name: 'Meera Nair',
          role: 'Event Planning Lead',
          organization: 'VTU',
          image: '/team/event-3.jpg',
          profileLink: '#'
        }
      ]
    },
    {
      name: 'Content Creator Team',
      members: [
        {
          name: 'Rohit Gupta',
          role: 'Content Lead',
          organization: 'VTU',
          image: '/team/content-1.jpg',
          profileLink: '#'
        },
        {
          name: 'Kavya Iyer',
          role: 'Social Media Manager',
          organization: 'VTU',
          image: '/team/content-2.jpg',
          profileLink: '#'
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const teamVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const memberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="team" className="gdg-section bg-light-primary relative overflow-hidden">
      <div className="gdg-container">
        {/* Animated Background */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gdg-blue/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Meet Our{" "}
            <span className="bg-gdg-gradient bg-clip-text text-transparent">
              Amazing Team
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get to know the passionate individuals who make GDG VTU thrive and create amazing experiences for our community
          </p>
        </motion.div>

        {/* Teams Section */}
        <motion.div
          ref={ref}
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teams.map((team, teamIndex) => (
            <motion.div
              key={teamIndex}
              className="relative"
              variants={teamVariants}
            >
              {/* Team Title */}
              <h3 className="text-3xl font-bold text-center mb-8">
                {team.name}
                {team.name === 'Leadership' && (
                  <span className="ml-2 text-gdg-red">⭐</span>
                )}
              </h3>

              {/* Team Members */}
              <div className={`flex flex-wrap justify-center gap-8 ${
                team.members.length === 1 
                  ? 'max-w-sm mx-auto' 
                  : team.members.length === 2 
                    ? 'max-w-lg mx-auto' 
                    : 'max-w-4xl mx-auto'
              }`}>
                {team.members.map((member, memberIndex) => (
                  <motion.div
                    key={memberIndex}
                    className={`text-center group cursor-pointer ${
                      member.isOrganizer ? 'transform scale-110' : ''
                    }`}
                    variants={memberVariants}
                    onHoverStart={() => setHoveredMember(`${teamIndex}-${memberIndex}`)}
                    onHoverEnd={() => setHoveredMember(null)}
                    whileHover={{ scale: member.isOrganizer ? 1.15 : 1.05 }}
                  >
                    {/* Member Photo */}
                    <div className="relative mb-4">
                      <div className={`relative ${
                        member.isOrganizer ? 'w-32 h-32' : 'w-24 h-24'
                      } mx-auto`}>
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                            member.isOrganizer 
                              ? 'ring-4 ring-gdg-red ring-offset-4' 
                              : 'ring-2 ring-gdg-blue/20 group-hover:ring-gdg-blue/40'
                          }`}
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=4285F4&color=ffffff&size=150`;
                          }}
                        />
                        
                        {/* Organizer Badge */}
                        {member.isOrganizer && (
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gdg-red rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-sm font-bold">★</span>
                          </div>
                        )}

                        {/* Hover Overlay */}
                        {hoveredMember === `${teamIndex}-${memberIndex}` && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 bg-gdg-blue/20 rounded-full flex items-center justify-center"
                          >
                            <span className="text-white text-sm font-bold">View Profile</span>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="space-y-1">
                      <h4 className={`font-bold group-hover:text-gdg-blue transition-colors ${
                        member.isOrganizer 
                          ? 'text-lg text-gdg-red' 
                          : 'text-base text-text-primary'
                      }`}>
                        {member.name}
                      </h4>
                      <p className={`text-sm ${
                        member.isOrganizer 
                          ? 'text-gdg-red font-medium' 
                          : 'text-gdg-blue'
                      }`}>
                        {member.role}
                      </p>
                      {member.organization && (
                        <p className="text-xs text-text-light">
                          {member.organization}
                        </p>
                      )}
                    </div>

                    {/* View Profile Button */}
                    {member.profileLink && (
                      <motion.a
                        href={member.profileLink}
                        className={`inline-block mt-2 px-4 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                          member.isOrganizer
                            ? 'bg-gdg-red text-white hover:bg-gdg-red/90'
                            : 'bg-gdg-blue/10 text-gdg-blue hover:bg-gdg-blue hover:text-white'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View profile
                      </motion.a>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Team Separator */}
              {teamIndex < teams.length - 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="w-24 h-1 bg-gdg-gradient rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals to help grow our community. 
            Join us and make a difference in the developer ecosystem!
          </p>
          <motion.button
            className="bg-gdg-gradient text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamMembers;
