
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface EnhancedLoadingBarProps {
  isLoading: boolean;
  progress?: number;
  message?: string;
  showPercentage?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

const EnhancedLoadingBar = ({ 
  isLoading, 
  progress = 0, 
  message = "Chargement...", 
  showPercentage = true,
  color = 'blue'
}: EnhancedLoadingBarProps) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDisplayProgress(prev => {
          if (progress > 0) {
            return Math.min(prev + 2, progress);
          }
          return prev >= 100 ? 0 : prev + Math.random() * 3;
        });
      }, 50);

      return () => clearInterval(interval);
    } else {
      setDisplayProgress(100);
      setTimeout(() => setDisplayProgress(0), 500);
    }
  }, [isLoading, progress]);

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600'
  };

  const glowClasses = {
    blue: 'shadow-blue-500/50',
    green: 'shadow-green-500/50',
    purple: 'shadow-purple-500/50',
    orange: 'shadow-orange-500/50',
    red: 'shadow-red-500/50'
  };

  if (!isLoading && displayProgress === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isLoading ? 1 : 0, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="relative h-1 w-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <motion.div
          className={`absolute left-0 top-0 h-full bg-gradient-to-r ${colorClasses[color]} shadow-lg ${glowClasses[color]}`}
          style={{
            width: `${displayProgress}%`,
          }}
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        </motion.div>
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{
            x: ['-64px', '100vw']
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Progress info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-4 py-2 flex items-center justify-between text-sm"
      >
        <span className="text-muted-foreground animate-pulse">
          {message}
        </span>
        {showPercentage && (
          <span className="font-medium text-primary">
            {Math.round(displayProgress)}%
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default EnhancedLoadingBar;
