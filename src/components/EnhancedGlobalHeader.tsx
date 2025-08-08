
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Bot, Search, Settings, Sun, Moon, Monitor, User, Music, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import AIAssistant from "./AIAssistant";
import SearchBar from "./SearchBar";
import EduMusic from "./EduMusic";
import EasterEggModal from "./EasterEggModal";
import { useThemeEasterEgg } from "@/hooks/useThemeEasterEgg";

const EnhancedGlobalHeader: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [showAI, setShowAI] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  
  const { handleThemeChange, showEasterEgg, closeEasterEgg } = useThemeEasterEgg();

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return <Sun className="h-4 w-4" />;
      case 'dark': return <Moon className="h-4 w-4" />;
      case 'night': return <Palette className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  const handleThemeSelect = (themeKey: 'light' | 'dark' | 'night') => {
    setTheme(themeKey);
    setShowThemeSelector(false);
    handleThemeChange(); // Trigger easter egg counter
  };

  const themes = [
    { key: 'light' as const, label: 'Clair', icon: Sun, color: 'from-yellow-400 to-orange-400' },
    { key: 'dark' as const, label: 'Sombre', icon: Moon, color: 'from-purple-500 to-indigo-600' },
    { key: 'night' as const, label: 'Nuit', icon: Palette, color: 'from-slate-600 to-gray-800' }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 w-full glass-effect border-b border-border/50 backdrop-blur-strong"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="font-bold text-xl text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              >
                📚 EduPlatform v5.5
              </motion.div>
            </Link>

            <div className="flex items-center space-x-2">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSearch(true)}
                  className="h-9 w-9 p-0 hover-glow"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowMusic(true)}
                  className="h-9 w-9 p-0 relative hover-glow"
                >
                  <Music className="h-4 w-4" />
                  <motion.div
                    className="absolute -top-1 -right-1 h-3 w-3 bg-purple-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Button>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAI(true)}
                  className="h-9 w-9 p-0 relative hover-glow"
                >
                  <Bot className="h-4 w-4" />
                  <motion.div
                    className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Button>
              </motion.div>

              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowThemeSelector(!showThemeSelector)}
                    className="h-9 w-9 p-0 hover-glow"
                  >
                    {getThemeIcon()}
                  </Button>
                </motion.div>

                <AnimatePresence>
                  {showThemeSelector && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      className="absolute top-full right-0 mt-2 p-2 glass-effect rounded-lg border border-border/50 min-w-[120px]"
                    >
                      {themes.map((themeOption) => (
                        <motion.button
                          key={themeOption.key}
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleThemeSelect(themeOption.key)}
                          className={`w-full flex items-center gap-2 p-2 rounded-md transition-all duration-200 ${
                            theme === themeOption.key 
                              ? 'bg-primary text-primary-foreground' 
                              : 'hover:bg-secondary/50'
                          }`}
                        >
                          <themeOption.icon className="h-4 w-4" />
                          <span className="text-sm">{themeOption.label}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/settings">
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover-glow">
                    <Settings className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      <AIAssistant isOpen={showAI} onClose={() => setShowAI(false)} />
      <SearchBar isOpen={showSearch} onClose={() => setShowSearch(false)} />
      <EduMusic isOpen={showMusic} onClose={() => setShowMusic(false)} />
      <EasterEggModal isOpen={showEasterEgg} onClose={closeEasterEgg} />
      
      {/* Click outside to close theme selector */}
      {showThemeSelector && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowThemeSelector(false)}
        />
      )}
    </>
  );
};

export default EnhancedGlobalHeader;
