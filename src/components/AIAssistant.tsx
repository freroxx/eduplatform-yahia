
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
            : "max-w-4xl w-full h-[80vh]"
        } p-0 transition-all duration-300 ease-in-out overflow-hidden`}
        hideCloseButton={true}
      >
        <DialogHeader className="p-4 border-b bg-background/95 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ 
                  rotate: isLoading ? 360 : 0,
                  scale: isLoading ? [1, 1.1, 1] : 1
                }}
                transition={{ 
                  rotate: { duration: 2, repeat: isLoading ? Infinity : 0, ease: "linear" },
                  scale: { duration: 0.5, repeat: isLoading ? Infinity : 0 }
                }}
              >
                <Bot className="h-6 w-6 text-primary" />
              </motion.div>
              <DialogTitle className="text-lg font-semibold">
                Assistant IA - Aide aux études
              </DialogTitle>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="h-8 w-8 p-0"
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
                className="h-8 w-8 p-0"
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
                className="absolute inset-0 bg-background/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center"
              >
                <LoadingSpinner />
                <motion.div 
                  className="mt-6 w-64 h-2 bg-muted rounded-full overflow-hidden"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </motion.div>
                <motion.p 
                  className="mt-4 text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Chargement de l'assistant IA... {loadingProgress}%
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.95 : 1 }}
            transition={{ duration: 0.5, delay: isLoading ? 0 : 0.3 }}
            className="w-full h-full"
          >
            <iframe 
              src="https://studio.pickaxe.co/_embed/4EMPJ5JYJT?d=deployment-49947cc5-189a-4ecf-9af3-033927e297ef" 
              className="w-full h-full border-0 rounded-b-lg"
              style={{ aspectRatio: '16/9', minHeight: '500px' }}
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
