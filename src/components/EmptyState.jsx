import { motion } from "framer-motion";

export default function EmptyState({ 
  message = "No items found", 
  type = "default", 
  action = null 
}) {
  const icons = {
    default: "📄",
    error: "❌",
    search: "🔍",
    events: "📅",
    projects: "🚀"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-16"
    >
      <div className="text-6xl mb-4">{icons[type]}</div>
      <p className="text-xl text-neutral-400 mb-6">{message}</p>
      {action && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={action.onClick}
          className="btn-primary"
        >
          {action.label}
        </motion.button>
      )}
    </motion.div>
  );
}
