
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  theme: 'light' | 'dark' | 'night';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ theme }) => {
  const getBackgroundElements = () => {
    switch (theme) {
      case 'light':
        return (
          <>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
                opacity: [0.4, 0.2, 0.4]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl"
            />
          </>
        );
      
      case 'dark':
        return (
          <>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.3, 1, 1.3],
                rotate: [-360, -180, 0],
                opacity: [0.5, 0.3, 0.5]
              }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-l from-cyan-600/30 to-teal-600/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 30, 0],
                x: [0, -15, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 18, repeat: Infinity }}
              className="absolute top-2/3 left-1/4 w-72 h-72 bg-gradient-to-tr from-violet-600/30 to-fuchsia-600/30 rounded-full blur-2xl"
            />
          </>
        );
      
      case 'night':
        return (
          <>
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                rotate: [0, 270, 540],
                opacity: [0.6, 0.9, 0.6]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/5 w-[600px] h-[600px] bg-gradient-to-r from-slate-800/40 to-gray-800/40 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.4, 1, 1.4],
                rotate: [540, 270, 0],
                opacity: [0.7, 0.4, 0.7]
              }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/5 right-1/4 w-[450px] h-[450px] bg-gradient-to-l from-blue-900/40 to-indigo-900/40 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-br from-purple-900/40 to-violet-900/40 rounded-full blur-2xl"
            />
            {/* Stars effect for night theme */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
                className="absolute w-1 h-1 bg-white/60 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {getBackgroundElements()}
    </div>
  );
};

export default AnimatedBackground;
