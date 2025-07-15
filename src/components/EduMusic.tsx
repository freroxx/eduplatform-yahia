
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
    if (isOpen && !isLoaded) {
      // Load Elfsight script when dialog opens
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);

      return () => {
        // Cleanup script if needed
        const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
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
            {isLoaded ? (
              <div 
                className="elfsight-app-72e97088-b9d4-47cc-a936-b0b13749e99b" 
                data-elfsight-app-lazy
              />
            ) : (
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"
                />
                <p className="text-sm text-muted-foreground">Chargement du lecteur...</p>
              </div>
            )}
          </div>

          <div className="text-xs text-center text-muted-foreground">
            🎵 Musique sélectionnée pour favoriser la concentration et l'apprentissage
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EduMusic;
