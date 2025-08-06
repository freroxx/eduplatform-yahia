
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, Target, Trophy, TrendingUp, Flame, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgressTrackerProps {
  subject?: string;
  totalLessons: number;
  completedLessons: number;
  totalPoints: number;
  earnedPoints: number;
  studyTime: string;
}

const ProgressTracker = ({ 
  subject = "Mathématiques", 
  totalLessons, 
  completedLessons, 
  totalPoints, 
  earnedPoints, 
  studyTime 
}: ProgressTrackerProps) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [animatedPoints, setAnimatedPoints] = useState(0);
  const [streak, setStreak] = useState(0);

  const progress = Math.round((completedLessons / totalLessons) * 100);
  const pointsProgress = Math.round((earnedPoints / totalPoints) * 100);

  useEffect(() => {
    // Load streak from localStorage
    const savedStreak = localStorage.getItem(`streak-${subject.toLowerCase()}`);
    if (savedStreak) {
      setStreak(parseInt(savedStreak, 10));
    }

    // Animate progress bars
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
      setAnimatedPoints(pointsProgress);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [progress, pointsProgress, subject]);

  const getSubjectColor = (subjectName: string) => {
    if (!subjectName || typeof subjectName !== 'string') {
      return 'text-gray-600 border-gray-200 bg-gray-50 dark:bg-gray-900';
    }
    
    const normalizedSubject = subjectName.toLowerCase();
    
    if (normalizedSubject.includes('mathématiques') || normalizedSubject.includes('math')) {
      return 'text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-900/20';
    }
    if (normalizedSubject.includes('français') || normalizedSubject.includes('french')) {
      return 'text-red-600 border-red-200 bg-red-50 dark:bg-red-900/20';
    }
    if (normalizedSubject.includes('physique') || normalizedSubject.includes('physics')) {
      return 'text-emerald-600 border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20';
    }
    if (normalizedSubject.includes('arabe') || normalizedSubject.includes('arabic')) {
      return 'text-amber-600 border-amber-200 bg-amber-50 dark:bg-amber-900/20';
    }
    if (normalizedSubject.includes('svt') || normalizedSubject.includes('sciences')) {
      return 'text-green-600 border-green-200 bg-green-50 dark:bg-green-900/20';
    }
    if (normalizedSubject.includes('histoire') || normalizedSubject.includes('géographie')) {
      return 'text-purple-600 border-purple-200 bg-purple-50 dark:bg-purple-900/20';
    }
    if (normalizedSubject.includes('english')) {
      return 'text-purple-600 border-purple-200 bg-purple-50 dark:bg-purple-900/20';
    }
    
    return 'text-gray-600 border-gray-200 bg-gray-50 dark:bg-gray-900/20';
  };

  const getProgressColor = (progressValue: number) => {
    if (progressValue >= 80) return 'from-green-500 to-green-600';
    if (progressValue >= 60) return 'from-yellow-500 to-yellow-600';
    if (progressValue >= 40) return 'from-orange-500 to-orange-600';
    return 'from-red-500 to-red-600';
  };

  const getMotivationMessage = (progressValue: number) => {
    if (progressValue < 25) {
      return { message: "🚀 Excellent début ! Continuez ainsi !", color: "blue" };
    }
    if (progressValue >= 25 && progressValue < 50) {
      return { message: "⭐ Bon rythme ! Vous êtes sur la bonne voie !", color: "yellow" };
    }
    if (progressValue >= 50 && progressValue < 75) {
      return { message: "🔥 Plus que la moitié ! Vous y êtes presque !", color: "orange" };
    }
    return { message: "🎉 Fantastique ! Vous maîtrisez le sujet !", color: "green" };
  };

  const motivation = getMotivationMessage(progress);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`glass-effect hover-lift border ${getSubjectColor(subject)}`}>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Progression - {subject}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center p-3 bg-accent/50 rounded-lg"
            >
              <div className="text-2xl font-bold text-primary">{animatedProgress}%</div>
              <p className="text-xs text-muted-foreground">Leçons</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center p-3 bg-accent/50 rounded-lg"
            >
              <div className="text-2xl font-bold text-primary">{earnedPoints}</div>
              <p className="text-xs text-muted-foreground">Points</p>
            </motion.div>
          </div>

          {/* Lessons Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium flex items-center gap-1">
                <Target className="h-4 w-4" />
                Leçons
              </span>
              <span className="text-muted-foreground">{completedLessons}/{totalLessons}</span>
            </div>
            <div className="relative">
              <Progress 
                value={animatedProgress} 
                className="h-3 bg-gray-200 dark:bg-gray-700 overflow-hidden"
              />
              <div 
                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getProgressColor(animatedProgress)} rounded-full transition-all duration-1000 shadow-sm`}
                style={{ width: `${animatedProgress}%` }}
              />
            </div>
            <div className="flex justify-between items-center">
              <Badge variant="outline" className="text-xs">
                {animatedProgress}% complété
              </Badge>
              <span className="text-xs text-muted-foreground">
                {totalLessons - completedLessons} restantes
              </span>
            </div>
          </motion.div>

          {/* Points Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium flex items-center gap-1">
                <Trophy className="h-4 w-4" />
                Points
              </span>
              <span className="text-muted-foreground">{earnedPoints}/{totalPoints}</span>
            </div>
            <Progress 
              value={animatedPoints} 
              className="h-3 bg-gray-200 dark:bg-gray-700"
            />
            <Badge variant="outline" className="text-xs">
              {animatedPoints}% des points
            </Badge>
          </motion.div>

          {/* Additional Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Temps</span>
              </div>
              <Badge variant="secondary">{studyTime}</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium">Série</span>
              </div>
              <Badge variant="secondary">{streak} jours</Badge>
            </div>
          </motion.div>

          {/* Motivation Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }}
            className={`text-center p-3 bg-${motivation.color}-50 dark:bg-${motivation.color}-900/20 rounded-lg border border-${motivation.color}-200 dark:border-${motivation.color}-800`}
          >
            <p className={`text-sm text-${motivation.color}-700 dark:text-${motivation.color}-300 font-medium`}>
              {motivation.message}
            </p>
          </motion.div>

          {/* Achievement Badge */}
          {progress === 100 && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="text-center p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-white"
            >
              <Award className="h-6 w-6 mx-auto mb-2" />
              <p className="font-bold">Matière Maîtrisée !</p>
              <p className="text-xs opacity-90">Félicitations pour vos efforts !</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProgressTracker;
