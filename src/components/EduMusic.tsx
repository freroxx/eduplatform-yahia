import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Music, Maximize, Minimize, X } from "lucide-react";
import { motion } from "framer-motion";

interface EduMusicProps {
  isOpen: boolean;
  onClose: () => void;
}

const EduMusic = ({ isOpen, onClose }: EduMusicProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Load Elfsight script once globally
    const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      script.onload = () => {
        setIsLoaded(true);
        // Initialize Elfsight after script loads
        if (window.elfsight) {
          window.elfsight.init();
        }
      };
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    // Reinitialize when dialog opens
    if (isOpen && isLoaded && window.elfsight) {
      setTimeout(() => {
        window.elfsight.init();
      }, 100);
    }
  }, [isOpen, isLoaded]);

  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(true);
    localStorage.setItem('pipMusicVisible', 'true');
    onClose();
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={`${
          isFullscreen 
            ? 'max-w-full h-full w-full rounded-none' 
            : 'max-w-3xl w-full max-h-[90vh]'
        } transition-all duration-300 ease-in-out backdrop-blur-md bg-background/95 border border-border/50 shadow-2xl`}
        hideCloseButton={true}
      >
        <DialogHeader className="border-b border-border/20 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center space-x-3">
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
                <Music className="h-6 w-6 text-purple-600" />
              </motion.div>
              <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                EduMusic - Study Companion
              </span>
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleMinimize}
                className="h-8 w-8 p-0 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200 hover:scale-105"
              >
                <Minimize className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="h-8 w-8 p-0 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-200 hover:scale-105"
              >
                {isFullscreen ? (
                  <Minimize className="h-4 w-4" />
                ) : (
                  <Maximize className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0 hover:bg-red-100 dark:hover:bg-red-900 transition-all duration-200 hover:scale-105"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex flex-col space-y-6 p-6">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              🎵 Ambiance musicale pour l'étude
            </motion.h3>
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Musique sélectionnée pour favoriser la concentration et l'apprentissage
            </motion.p>
          </motion.div>

          {/* Elfsight Audio Player */}
          <motion.div 
            className={`${
              isFullscreen 
                ? 'min-h-[calc(100vh-250px)]' 
                : 'min-h-[400px]'
            } flex items-center justify-center bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200/30 dark:border-purple-700/30 backdrop-blur-sm transition-all duration-300`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div 
              className="elfsight-app-72e97088-b9d4-47cc-a936-b0b13749e99b w-full h-full rounded-lg" 
              data-elfsight-app-lazy
            />
          </motion.div>

          <motion.div 
            className="text-center py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-sm text-muted-foreground font-medium">
              Made using <span className="text-purple-600 font-semibold">Elfsight</span>
            </p>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Add global type for elfsight
declare global {
  interface Window {
    elfsight?: {
      init: () => void;
    };
  }
}

export default EduMusic;
