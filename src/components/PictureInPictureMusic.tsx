
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Music, X, Maximize, Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface PictureInPictureMusicProps {
  isVisible: boolean;
  onToggle: () => void;
}

const PictureInPictureMusic = ({ isVisible, onToggle }: PictureInPictureMusicProps) => {
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!dragRef.current) return;
    setIsDragging(true);
    const rect = dragRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = Math.max(0, Math.min(window.innerWidth - 300, e.clientX - dragOffset.x));
        const newY = Math.max(0, Math.min(window.innerHeight - (isMinimized ? 60 : 200), e.clientY - dragOffset.y));
        setPosition({ x: newX, y: newY });
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
  }, [isDragging, dragOffset, isMinimized]);

  const handleClose = () => {
    onToggle();
  };

  const handleMaximize = () => {
    // This should open the full EduMusic modal
    onToggle();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={dragRef}
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          height: isMinimized ? '60px' : '200px'
        }}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        className="fixed z-50 glass-effect backdrop-blur-md bg-background/95 border border-border/50 rounded-lg shadow-2xl cursor-move select-none"
        style={{
          left: position.x,
          top: position.y,
          width: isMinimized ? '250px' : '300px',
        }}
        onMouseDown={handleMouseDown}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between p-3 border-b border-border/20"
          animate={{ opacity: isMinimized ? 0.8 : 1 }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: isPlaying ? [0, 5, -5, 0] : 0
              }}
              transition={{ 
                duration: 2, 
                repeat: isPlaying ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              <Music className="h-4 w-4 text-purple-600" />
            </motion.div>
            <span className="text-sm font-semibold">EduMusic</span>
            {isMinimized && (
              <motion.div className="flex items-center gap-1 ml-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="h-6 w-6 p-0"
                >
                  {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                </Button>
              </motion.div>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-6 w-6 p-0 hover:bg-blue-100 dark:hover:bg-blue-900"
            >
              {isMinimized ? <Maximize className="h-3 w-3" /> : <Music className="h-3 w-3" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleMaximize}
              className="h-6 w-6 p-0 hover:bg-green-100 dark:hover:bg-green-900"
            >
              <Maximize className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="h-6 w-6 p-0 hover:bg-red-100 dark:hover:bg-red-900"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </motion.div>
        
        {/* Content */}
        <AnimatePresence>
          {!isMinimized && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-2"
            >
              <div className="w-full h-32 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-900/20 dark:to-blue-900/20 rounded border border-purple-200/30 dark:border-purple-700/30 flex items-center justify-center relative overflow-hidden">
                {/* Music Visualizer Effect */}
                <motion.div className="absolute inset-0 flex items-end justify-center gap-1 p-4">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-to-t from-purple-500 to-blue-500 w-1 rounded-full"
                      animate={isPlaying ? {
                        height: [8, 24, 12, 32, 16, 28, 8],
                        opacity: [0.5, 1, 0.7, 1, 0.6, 1, 0.5]
                      } : { height: 8, opacity: 0.3 }}
                      transition={{
                        duration: 1.5,
                        repeat: isPlaying ? Infinity : 0,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>

                {/* Elfsight Player */}
                <div 
                  className="elfsight-app-72e97088-b9d4-47cc-a936-b0b13749e99b w-full h-full rounded opacity-80" 
                  data-elfsight-app-lazy
                />

                {/* Control Overlay */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="h-6 w-6 p-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    >
                      {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMuted(!isMuted)}
                      className="h-6 w-6 p-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    >
                      {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                    </Button>
                  </div>
                  
                  {/* Now Playing Text */}
                  <motion.div 
                    className="text-xs text-white/80 bg-black/20 px-2 py-1 rounded backdrop-blur-sm"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎵 Study Ambiance
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Drag Indicator */}
        <motion.div
          className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"
          animate={{ opacity: isDragging ? 1 : 0.3 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PictureInPictureMusic;
