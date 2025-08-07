
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, X, FileText, Star, Zap } from "lucide-react";

interface WelcomeBannerProps {
  onShowChangelog?: () => void;
}

const WelcomeBanner = ({ onShowChangelog }: WelcomeBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="relative mb-8"
      >
        <Card className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white border-0 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
          <div className="absolute inset-0">
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
            <div className="absolute top-8 right-8 w-3 h-3 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute bottom-6 left-12 w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          <div className="relative p-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white hover:bg-white/20 h-8 w-8 p-0 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center justify-center space-x-6">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="bg-white/20 p-3 rounded-full"
              >
                <Sparkles className="h-8 w-8" />
              </motion.div>
              
              <div className="text-center">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent"
                >
                  Bienvenue dans EduPlatform v5.5 !
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-purple-100 mb-6 text-lg"
                >
                  Découvrez l'expérience d'apprentissage nouvelle génération
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap justify-center gap-3 mb-6"
                >
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <Star className="h-4 w-4" />
                    Onboarding amélioré
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <Zap className="h-4 w-4" />
                    Animations fluides
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm">
                    <FileText className="h-4 w-4" />
                    Physique complète
                  </div>
                </motion.div>
                
                {onShowChangelog && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <Button
                      variant="secondary"
                      onClick={onShowChangelog}
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Découvrir les nouveautés
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeBanner;
