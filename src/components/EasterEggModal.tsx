
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Maximize, Github, Mail, MapPin, Heart } from 'lucide-react';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EasterEggModal = ({ isOpen, onClose }: EasterEggModalProps) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={`${
          isFullscreen 
            ? 'max-w-full h-full w-full rounded-none' 
            : 'max-w-2xl w-full'
        } transition-all duration-300 ease-in-out backdrop-blur-md bg-background/95 border border-border/50 shadow-2xl`}
        hideCloseButton={true}
      >
        <DialogHeader className="border-b border-border/20 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center space-x-3">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  E
                </div>
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                EduPlatform 2025
              </span>
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="h-8 w-8 p-0 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-200 hover:scale-105"
              >
                <Maximize className="h-4 w-4" />
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

        <div className="p-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="inline-block text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4"
            >
              🎉 Félicitations ! 🎉
            </motion.div>
            <p className="text-lg text-muted-foreground mb-6">
              Vous avez découvert notre Easter Egg secret !
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="glass-effect border-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <Github className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-semibold">Open Source sur GitHub</p>
                    <a 
                      href="https://github.com/freroxx/eduplatform-yahia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors underline"
                    >
                      github.com/freroxx/eduplatform-yahia
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-semibold">Contact</p>
                    <a 
                      href="mailto:yikni2829@gmail.com"
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors underline"
                    >
                      yikni2829@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-semibold">Développé avec</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Heart className="h-3 w-3 text-red-500" />
                      à Agadir, Maroc
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground italic">
              "L'éducation est l'arme la plus puissante pour changer le monde."
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              - Nelson Mandela
            </p>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EasterEggModal;
