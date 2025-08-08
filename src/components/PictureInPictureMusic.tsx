
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Music, X, Maximize, Minimize } from 'lucide-react';

interface PictureInPictureMusicProps {
  isVisible: boolean;
  onToggle: () => void;
}

const PictureInPictureMusic = ({ isVisible, onToggle }: PictureInPictureMusicProps) => {
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: Math.max(0, Math.min(window.innerWidth - 300, e.clientX - dragOffset.x)),
          y: Math.max(0, Math.min(window.innerHeight - 200, e.clientY - dragOffset.y))
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed z-50 glass-effect backdrop-blur-md bg-background/95 border border-border/50 rounded-lg shadow-2xl cursor-move"
        style={{
          left: position.x,
          top: position.y,
          width: '300px',
          height: '200px'
        }}
        onMouseDown={handleMouseDown}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center justify-between p-3 border-b border-border/20">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Music className="h-4 w-4 text-purple-600" />
            </motion.div>
            <span className="text-sm font-semibold">EduMusic</span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="h-6 w-6 p-0 hover:bg-green-100 dark:hover:bg-green-900"
            >
              <Maximize className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="h-6 w-6 p-0 hover:bg-red-100 dark:hover:bg-red-900"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        <div className="p-2 h-full">
          <div className="w-full h-full bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-900/20 dark:to-blue-900/20 rounded border border-purple-200/30 dark:border-purple-700/30 flex items-center justify-center">
            <div 
              className="elfsight-app-72e97088-b9d4-47cc-a936-b0b13749e99b w-full h-full" 
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PictureInPictureMusic;
