
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, X, FileText } from "lucide-react";

interface WelcomeBannerProps {
  onShowChangelog?: () => void;
}

const WelcomeBanner = ({ onShowChangelog }: WelcomeBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative mb-8"
      >
        <Card className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white border-0 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
          <div className="relative p-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center justify-center space-x-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-8 w-8" />
              </motion.div>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">
                  Bienvenue dans EduPlatform v4.0 !
                </h2>
                <p className="text-purple-100 mb-4">
                  Découvrez les nouvelles fonctionnalités et améliorations
                </p>
                
                {onShowChangelog && (
                  <Button
                    variant="secondary"
                    onClick={onShowChangelog}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Voir les nouveautés
                  </Button>
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
