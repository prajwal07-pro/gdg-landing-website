
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const EventCard = ({ event, index }) => {
  const { t } = useTranslation('common');
  
  const colors = ['gdg-red', 'gdg-blue', 'gdg-yellow', 'gdg-green'];
  const borderColor = colors[index % colors.length];

  return (
    <motion.div
      className={`card-light p-6 group cursor-pointer border-l-4 border-${borderColor}`}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <span className={`inline-block px-3 py-1 text-xs font-medium text-white bg-${borderColor} rounded-full`}>
            {event.type}
          </span>
          <span className="text-sm text-text-light">
            {event.date}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-text-primary group-hover:text-gdg-blue transition-colors">
          {event.title}
        </h3>
        
        <p className="text-text-secondary line-clamp-2">
          {event.description}
        </p>

        <div className="flex justify-between items-center pt-4">
          <div className="flex items-center space-x-2 text-text-light">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{event.location}</span>
          </div>
          
          <motion.button
            className={`btn-gdg-primary text-sm py-2 px-4`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('cta_rsvp')}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
