import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Bot, Search, Settings, Sun, Moon, Monitor, User } from "lucide-react";
import { motion } from "framer-motion";
import { useSettings } from "@/hooks/useSettings";
import { Link } from "react-router-dom";
import AIAssistant from "./AIAssistant";
import SearchBar from "./SearchBar";

const GlobalHeader: React.FC = () => {
  const { settings, updateTheme } = useSettings();
  const [showAI, setShowAI] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const getThemeIcon = () => {
    switch (settings.theme) {
      case 'light': return <Sun className="h-4 w-4" />;
      case 'dark': return <Moon className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  const cycleTheme = () => {
    const themes = ['light', 'dark', 'auto'] as const;
    const currentIndex = themes.indexOf(settings.theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    updateTheme(themes[nextIndex]);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-bold text-xl text-primary"
              >
                📚 StudyPlatform
              </motion.div>
            </Link>

            <div className="flex items-center space-x-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSearch(true)}
                  className="h-9 w-9 p-0"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAI(true)}
                  className="h-9 w-9 p-0 relative"
                >
                  <Bot className="h-4 w-4" />
                  <motion.div
                    className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={cycleTheme}
                  className="h-9 w-9 p-0"
                >
                  {getThemeIcon()}
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/settings">
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                    <Settings className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>

              {settings.name && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-2 text-sm text-muted-foreground"
                >
                  <User className="h-4 w-4" />
                  <span>{settings.name}</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      <AIAssistant isOpen={showAI} onClose={() => setShowAI(false)} />
      <SearchBar isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </>
  );
};

export default GlobalHeader;