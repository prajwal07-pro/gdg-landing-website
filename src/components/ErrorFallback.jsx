import { motion } from "framer-motion";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 glass rounded-lg max-w-md mx-4"
      >
        <div className="text-6xl mb-4">😵</div>
        <h2 className="text-2xl font-bold mb-4 text-google-red">
          Oops! Something went wrong
        </h2>
        <p className="text-neutral-300 mb-6">
          We encountered an unexpected error. Please try refreshing the page.
        </p>
        <details className="text-left mb-6">
          <summary className="cursor-pointer text-sm text-neutral-400 hover:text-white">
            Error details
          </summary>
          <pre className="text-xs text-neutral-500 mt-2 p-2 bg-black/50 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetErrorBoundary}
          className="btn-primary"
        >
          Try Again
        </motion.button>
      </motion.div>
    </div>
  );
}
