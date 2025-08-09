
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, Target, Trophy, TrendingUp, Flame, Calendar, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useProgressTracker } from '@/hooks/useProgressTracker';

interface EnhancedProgressTrackerProps {
  subject: string;
  totalLessons?: number;
  totalExercises?: number;
  className?: string;
}

const EnhancedProgressTracker = ({ 
  subject, 
  totalLessons = 15, 
  totalExercises = 45,
  className = "" 
}: EnhancedProgressTrackerProps) => {
  const { getSubjectProgress, formatStudyTime } = useProgressTracker();
  const subjectProgress = getSubjectProgress(subject);

  const completedLessonsCount = subjectProgress.completedLessons.length;
  const completedExercisesCount = subjectProgress.completedExercises.length;
  const lessonProgress = Math.round((completedLessonsCount / totalLessons) * 100);
  const exerciseProgress = Math.round((completedExercisesCount / totalExercises) * 100);
  const overallProgress = Math.round(((completedLessonsCount + completedExercisesCount) / (totalLessons + totalExercises)) * 100);

  const getSubjectColor = (subjectName: string) => {
    const normalizedSubject = subjectName.toLowerCase();
    
    if (normalizedSubject.includes('mathématiques') || normalizedSubject.includes('math')) {
      return {
        text: 'text-blue-600',
        border: 'border-blue-200',
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        gradient: 'from-blue-500 to-blue-600'
      };
    }
    if (normalizedSubject.includes('français') || normalizedSubject.includes('french')) {
      return {
        text: 'text-red-600',
        border: 'border-red-200',
        bg: 'bg-red-50 dark:bg-red-900/20',
        gradient: 'from-red-500 to-red-600'
      };
    }
    if (normalizedSubject.includes('physique') || normalizedSubject.includes('physics')) {
      return {
        text: 'text-emerald-600',
        border: 'border-emerald-200',
        bg: 'bg-emerald-50 dark:bg-emerald-900/20',
        gradient: 'from-emerald-500 to-emerald-600'
      };
    }
    
    return {
      text: 'text-gray-600',
      border: 'border-gray-200',
      bg: 'bg-gray-50 dark:bg-gray-900/20',
      gradient: 'from-gray-500 to-gray-600'
    };
  };

  const colors = getSubjectColor(subject);

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

  const motivation = getMotivationMessage(overallProgress);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Card className={`glass-effect hover-lift border ${colors.border} ${colors.bg}`}>
        <CardHeader className="pb-3">
          <CardTitle className={`text-lg font-bold flex items-center gap-2 ${colors.text}`}>
            <TrendingUp className="h-5 w-5" />
            Progression - {subject}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center p-3 bg-accent/50 rounded-lg"
            >
              <div className={`text-xl font-bold ${colors.text}`}>{overallProgress}%</div>
              <p className="text-xs text-muted-foreground">Global</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center p-3 bg-accent/50 rounded-lg"
            >
              <div className={`text-xl font-bold ${colors.text}`}>{subjectProgress.totalPoints}</div>
              <p className="text-xs text-muted-foreground">Points</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center p-3 bg-accent/50 rounded-lg"
            >
              <div className={`text-xl font-bold ${colors.text}`}>{subjectProgress.streak}</div>
              <p className="text-xs text-muted-foreground">Jours</p>
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
                <BookOpen className="h-4 w-4" />
                Cours
              </span>
              <span className="text-muted-foreground">{completedLessonsCount}/{totalLessons}</span>
            </div>
            <div className="relative">
              <Progress 
                value={lessonProgress} 
                className="h-3 bg-gray-200 dark:bg-gray-700 overflow-hidden"
              />
              <div 
                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getProgressColor(lessonProgress)} rounded-full transition-all duration-1000 shadow-sm`}
                style={{ width: `${lessonProgress}%` }}
              />
            </div>
            <Badge variant="outline" className="text-xs">
              {lessonProgress}% complété
            </Badge>
          </motion.div>

          {/* Exercises Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium flex items-center gap-1">
                <Target className="h-4 w-4" />
                Exercices
              </span>
              <span className="text-muted-foreground">{completedExercisesCount}/{totalExercises}</span>
            </div>
            <Progress 
              value={exerciseProgress} 
              className="h-3 bg-gray-200 dark:bg-gray-700"
            />
            <Badge variant="outline" className="text-xs">
              {exerciseProgress}% des exercices
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
              <Badge variant="secondary">{formatStudyTime(subjectProgress.studyTime)}</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Points</span>
              </div>
              <Badge variant="secondary">{subjectProgress.totalPoints}</Badge>
            </div>
          </motion.div>

          {/* Motivation Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }}
            className="text-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
          >
            <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
              {motivation.message}
            </p>
          </motion.div>

          {/* Achievement Badge */}
          {overallProgress === 100 && (
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

export default EnhancedProgressTracker;
