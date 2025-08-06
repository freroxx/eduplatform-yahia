
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bot, X, Maximize2, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setLoadingProgress(0);
      
      // Simulate loading progress
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsLoading(false), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 60);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={`${
          isFullscreen 
            ? "max-w-[100vw] h-[100vh] w-full m-0 rounded-none" 
            : "max-w-5xl w-full h-[85vh]"
        } p-0 transition-all duration-300 ease-in-out overflow-hidden bg-background/95 backdrop-blur-md border border-border/50 shadow-2xl`}
        hideCloseButton={true}
      >
        <DialogHeader className="p-4 border-b bg-gradient-to-r from-primary/10 to-blue-500/10 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{ 
                  rotate: isLoading ? [0, 360] : 0,
                  scale: isLoading ? [1, 1.1, 1] : 1
                }}
                transition={{ 
                  rotate: { duration: 2, repeat: isLoading ? Infinity : 0, ease: "linear" },
                  scale: { duration: 0.8, repeat: isLoading ? Infinity : 0 }
                }}
              >
                <Bot className="h-7 w-7 text-primary" />
              </motion.div>
              <DialogTitle className="text-xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Assistant IA - Aide aux études
              </DialogTitle>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="h-9 w-9 p-0 hover:bg-primary/10 transition-all duration-200 hover:scale-110"
              >
                {isFullscreen ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-9 w-9 p-0 hover:bg-red-100 dark:hover:bg-red-900 transition-all duration-200 hover:scale-110"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-br from-background/95 to-muted/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <LoadingSpinner />
                </motion.div>
                
                <motion.div 
                  className="mt-8 w-80 h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  />
                </motion.div>
                
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-lg font-medium text-foreground mb-2">
                    Chargement de l'assistant IA...
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {loadingProgress}% - Initialisation des modules d'apprentissage
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ 
              opacity: isLoading ? 0.3 : 1, 
              scale: isLoading ? 0.98 : 1 
            }}
            transition={{ duration: 0.5, delay: isLoading ? 0 : 0.3 }}
            className="w-full h-full"
          >
            <iframe 
              src="https://studio.pickaxe.co/_embed/4EMPJ5JYJT?d=deployment-49947cc5-189a-4ecf-9af3-033927e297ef" 
              className="w-full h-full border-0"
              style={{ minHeight: '600px' }}
              frameBorder="0"
              title="Assistant IA"
              allow="microphone; camera; fullscreen"
            />
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIAssistant;
