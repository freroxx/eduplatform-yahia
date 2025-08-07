
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Clock, Target, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Subject {
  id: string;
  name: string;
  nameArabic?: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  lessons: number;
  exercises: number;
  duration: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  path: string;
  featured?: boolean;
  isNew?: boolean;
}

interface EnhancedSubjectCardProps {
  subject: Subject;
  index: number;
}

const EnhancedSubjectCard = ({ subject, index }: EnhancedSubjectCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'Difficile': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        bounce: 0.3
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative group"
    >
      <Card className="h-full bg-card/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${subject.bgGradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          {subject.featured && (
            <Badge className="bg-yellow-500/90 text-white border-0 shadow-md">
              <Star className="h-3 w-3 mr-1" />
              Populaire
            </Badge>
          )}
          {subject.isNew && (
            <Badge className="bg-emerald-500/90 text-white border-0 shadow-md animate-pulse">
              <Sparkles className="h-3 w-3 mr-1" />
              Nouveau
            </Badge>
          )}
        </div>

        <CardHeader className="pb-4 relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${subject.bgGradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {React.cloneElement(subject.icon as React.ReactElement, {
                className: "h-6 w-6 text-white"
              })}
            </div>
            <Badge className={`${getDifficultyColor(subject.difficulty)} font-medium border shadow-sm`}>
              <Target className="h-3 w-3 mr-1" />
              {subject.difficulty}
            </Badge>
          </div>
          
          <CardTitle className="text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
            {subject.name}
          </CardTitle>
          
          {subject.nameArabic && (
            <p className="text-right text-lg font-semibold text-muted-foreground mb-2 opacity-80">
              {subject.nameArabic}
            </p>
          )}
          
          <CardDescription className="text-sm leading-relaxed text-muted-foreground">
            {subject.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0 relative z-10">
          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-accent/50 rounded-lg backdrop-blur-sm">
              <BookOpen className="h-5 w-5 mx-auto mb-1 text-primary" />
              <div className="text-lg font-bold text-foreground">{subject.lessons}</div>
              <p className="text-xs text-muted-foreground">Leçons</p>
            </div>
            <div className="text-center p-3 bg-accent/50 rounded-lg backdrop-blur-sm">
              <Users className="h-5 w-5 mx-auto mb-1 text-primary" />
              <div className="text-lg font-bold text-foreground">{subject.exercises}</div>
              <p className="text-xs text-muted-foreground">Exercices</p>
            </div>
            <div className="text-center p-3 bg-accent/50 rounded-lg backdrop-blur-sm">
              <Clock className="h-5 w-5 mx-auto mb-1 text-primary" />
              <div className="text-sm font-bold text-foreground">{subject.duration}</div>
              <p className="text-xs text-muted-foreground">Durée</p>
            </div>
          </div>

          {/* Action Button */}
          <Link to={`/lessons/${subject.path}`} className="block">
            <Button 
              className={`w-full bg-gradient-to-r ${subject.bgGradient} hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300 border-0 text-white font-semibold py-3`}
              size="lg"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Commencer l'apprentissage
            </Button>
          </Link>
        </CardContent>

        {/* Animated Border Effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
             style={{
               background: `conic-gradient(from 0deg, transparent, ${subject.color}20, transparent)`,
             }} 
        />
      </Card>
    </motion.div>
  );
};

export default EnhancedSubjectCard;
