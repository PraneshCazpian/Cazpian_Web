import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

// Full page loading spinner
export const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <div className="text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="inline-block"
      >
        <div className="w-16 h-16 border-4 border-indigo-200 dark:border-indigo-900 border-t-indigo-600 dark:border-t-indigo-400 rounded-full" />
      </motion.div>
      <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium">Loading...</p>
    </div>
  </div>
);

// Skeleton loader for cards
export const SkeletonCard = () => (
  <div className="animate-pulse bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4" />
    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-3/4" />
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-full" />
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
  </div>
);

// Skeleton loader for text content
export const SkeletonText = ({ lines = 3 }: { lines?: number }) => (
  <div className="animate-pulse space-y-3">
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className="h-4 bg-gray-200 dark:bg-gray-700 rounded"
        style={{ width: i === lines - 1 ? '75%' : '100%' }}
      />
    ))}
  </div>
);

// Skeleton loader for images
export const SkeletonImage = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`} />
);

// Button loading state
export const ButtonLoader = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    className="inline-block"
  >
    <Loader2 className="w-5 h-5" />
  </motion.div>
);

// Inline loader
export const InlineLoader = ({ text = 'Loading...' }: { text?: string }) => (
  <div className="flex items-center space-x-2">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <Loader2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
    </motion.div>
    <span className="text-sm text-gray-600 dark:text-gray-300">{text}</span>
  </div>
);

// Progress bar
interface ProgressBarProps {
  progress: number;
  className?: string;
}

export const ProgressBar = ({ progress, className = '' }: ProgressBarProps) => (
  <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden ${className}`}>
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
    />
  </div>
);

// Shimmer effect for loading states
export const Shimmer = ({ className = '' }: { className?: string }) => (
  <div className={`relative overflow-hidden bg-gray-200 dark:bg-gray-700 ${className}`}>
    <motion.div
      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
      animate={{ translateX: ['0%', '200%'] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

// Spinner variants
export const Spinner = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className={`inline-block ${className}`}
    >
      <div
        className={`${sizeClasses[size]} border-3 border-indigo-200 dark:border-indigo-900 border-t-indigo-600 dark:border-t-indigo-400 rounded-full`}
      />
    </motion.div>
  );
};

// Dots loader
export const DotsLoader = () => (
  <div className="flex space-x-2">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"
        animate={{ y: ['0%', '-50%', '0%'] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: i * 0.1,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

// Pulse loader
export const PulseLoader = ({ className = '' }: { className?: string }) => (
  <motion.div
    className={`w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full ${className}`}
    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
  />
);

