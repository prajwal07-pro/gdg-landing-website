import { motion } from 'framer-motion';

const RSVP_URL = "https://forms.gle/your-rsvp-link";

const EventCard = ({ event, index }) => {
  const colors = ['gdg-red', 'gdg-blue', 'gdg-yellow', 'gdg-green'];
  const borderColor = colors[index % colors.length];

  return (
    <motion.div
      className={`gdg-card p-6 border-l-4 border-${borderColor} hover:border-l-8 transition-all duration-300`}
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 bg-${borderColor}/10 text-${borderColor} rounded-full text-sm font-medium`}>
          {event.type}
        </span>
        <span className="text-sm text-text-light">{event.date}</span>
      </div>
      
      <h3 className="text-xl font-bold text-text-primary mb-2">{event.title}</h3>
      <p className="text-text-secondary mb-4">{event.description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-light flex items-center">
          📍 {event.location}
        </span>
        <motion.button
          className={`px-4 py-2 bg-${borderColor} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href={RSVP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gdg-blue px-4 py-2 text-white text-sm font-semibold shadow-gdg hover:bg-gdg-blue/90 transition-colors"
          >
            RSVP Now
          </a>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EventCard;
