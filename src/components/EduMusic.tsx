
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Music, Volume2, Maximize, Minimize } from "lucide-react";
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

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={`${isFullscreen ? 'max-w-full h-full w-full' : 'max-w-2xl'} transition-all duration-300`}
        hideCloseButton={isFullscreen}
      >
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center space-x-2">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Music className="h-6 w-6 text-purple-600" />
              </motion.div>
              <span className="text-lg">EduMusic - Study Companion</span>
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleFullscreen}
                className="hover:bg-accent"
              >
                {isFullscreen ? (
                  <Minimize className="h-4 w-4" />
                ) : (
                  <Maximize className="h-4 w-4" />
                )}
              </Button>
              {isFullscreen && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onClose}
                  className="hover:bg-destructive hover:text-destructive-foreground"
                >
                  ✕
                </Button>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-4">
              <Volume2 className="h-16 w-16 mx-auto text-purple-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Ambiance musicale pour l'étude</h3>
              <p className="text-sm text-muted-foreground">
                Musique sélectionnée pour favoriser la concentration et l'apprentissage
              </p>
            </div>
          </div>

          {/* Elfsight Audio Player */}
          <div className={`${isFullscreen ? 'min-h-[calc(100vh-200px)]' : 'min-h-[400px]'} flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-lg border-2 border-dashed border-purple-200 dark:border-purple-700`}>
            <div 
              className="elfsight-app-72e97088-b9d4-47cc-a936-b0b13749e99b w-full h-full" 
              data-elfsight-app-lazy
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-accent/20 rounded-lg">
              <Music className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="text-sm font-medium">Focus Music</p>
              <p className="text-xs text-muted-foreground">Instrumental tracks</p>
            </div>
            <div className="p-4 bg-accent/20 rounded-lg">
              <Volume2 className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="text-sm font-medium">Study Ambiance</p>
              <p className="text-xs text-muted-foreground">Background sounds</p>
            </div>
            <div className="p-4 bg-accent/20 rounded-lg">
              <Music className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <p className="text-sm font-medium">Relaxation</p>
              <p className="text-xs text-muted-foreground">Calming melodies</p>
            </div>
          </div>

          <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg">
            <p className="text-sm text-muted-foreground">
              🎵 Des études montrent que la musique instrumentale peut améliorer la concentration et les performances d'apprentissage de 13% en moyenne.
            </p>
          </div>
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
