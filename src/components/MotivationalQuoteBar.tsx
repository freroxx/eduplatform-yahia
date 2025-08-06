
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, X, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/hooks/useSettings";

const MotivationalQuoteBar = () => {
  const { settings, getRandomMotivationalQuote, updateMotivationalQuotes } = useSettings();
  const [currentQuote, setCurrentQuote] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (settings.motivationalQuotes) {
      setCurrentQuote(getRandomMotivationalQuote());
    }
  }, [settings.motivationalQuotes, getRandomMotivationalQuote]);

  const handleNewQuote = () => {
    setCurrentQuote(getRandomMotivationalQuote());
  };

  const handleClose = () => {
    setIsVisible(false);
    updateMotivationalQuotes(false);
  };

  if (!settings.motivationalQuotes || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg border-b border-blue-400/30 overflow-hidden"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex-shrink-0"
              >
                <Quote className="h-5 w-5 text-yellow-300" />
              </motion.div>
              
              <motion.p
                key={currentQuote}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm md:text-base font-medium text-center flex-1 leading-relaxed truncate"
              >
                {currentQuote}
              </motion.p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleNewQuote}
                className="h-8 w-8 p-0 text-white hover:bg-white/20 transition-all duration-200 hover:scale-105"
                title="Nouvelle citation"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="h-8 w-8 p-0 text-white hover:bg-red-500/50 transition-all duration-200 hover:scale-105"
                title="Fermer"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MotivationalQuoteBar;
