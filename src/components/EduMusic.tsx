
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Music, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

interface EduMusicProps {
  isOpen: boolean;
  onClose: () => void;
}

const EduMusic = ({ isOpen, onClose }: EduMusicProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Music className="h-5 w-5 text-purple-600" />
            </motion.div>
            <span>EduMusic</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="text-center">
            <Volume2 className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">
              Musique d'ambiance pour vos sessions d'étude
            </p>
          </div>

          {/* Elfsight Audio Player */}
          <div className="min-h-[200px] flex items-center justify-center bg-muted/30 rounded-lg">
            <div 
              className="elfsight-app-72e97088-b9d4-47cc-a936-b0b13749e99b w-full" 
              data-elfsight-app-lazy
            />
          </div>

          <div className="text-xs text-center text-muted-foreground">
            🎵 Musique sélectionnée pour favoriser la concentration et l'apprentissage
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
