
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface EnhancedAnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  hoverScale?: number;
  whileTap?: boolean;
}

const EnhancedAnimatedCard = ({ 
  children, 
  delay = 0, 
  className = "",
  hoverScale = 1.02,
  whileTap = false
}: EnhancedAnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: hoverScale,
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={whileTap ? { scale: 0.95 } : undefined}
      className={className}
    >
      <Card className="h-full glass-effect backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-0 h-full">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnhancedAnimatedCard;
