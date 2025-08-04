
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, Target, Trophy, TrendingUp } from 'lucide-react';

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

  const progress = Math.round((completedLessons / totalLessons) * 100);
  const pointsProgress = Math.round((earnedPoints / totalPoints) * 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
      setAnimatedPoints(pointsProgress);
    }, 500);
    return () => clearTimeout(timer);
  }, [progress, pointsProgress]);

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
    
    return 'text-gray-600 border-gray-200 bg-gray-50 dark:bg-gray-900/20';
  };

  const getProgressColor = (progressValue: number) => {
    if (progressValue >= 80) return 'bg-green-500';
    if (progressValue >= 60) return 'bg-yellow-500';
    if (progressValue >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <Card className={`glass-effect hover-lift border ${getSubjectColor(subject)}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Progression - {subject}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Lessons Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium flex items-center gap-1">
              <Target className="h-4 w-4" />
              Leçons
            </span>
            <span className="text-muted-foreground">{completedLessons}/{totalLessons}</span>
          </div>
          <Progress 
            value={animatedProgress} 
            className="h-3 bg-gray-200 dark:bg-gray-700"
          />
          <div className="flex justify-between items-center">
            <Badge variant="outline" className="text-xs">
              {animatedProgress}% complété
            </Badge>
            <span className="text-xs text-muted-foreground">
              {totalLessons - completedLessons} restantes
            </span>
          </div>
        </div>

        {/* Points Progress */}
        <div className="space-y-3">
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
        </div>

        {/* Study Time */}
        <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Temps d'étude</span>
          </div>
          <Badge variant="secondary">{studyTime}</Badge>
        </div>

        {/* Motivation Message */}
        {progress < 25 && (
          <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
              🚀 Excellent début ! Continuez ainsi !
            </p>
          </div>
        )}
        {progress >= 25 && progress < 50 && (
          <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-sm text-yellow-700 dark:text-yellow-300 font-medium">
              ⭐ Bon rythme ! Vous êtes sur la bonne voie !
            </p>
          </div>
        )}
        {progress >= 50 && progress < 75 && (
          <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
            <p className="text-sm text-orange-700 dark:text-orange-300 font-medium">
              🔥 Plus que la moitié ! Vous y êtes presque !
            </p>
          </div>
        )}
        {progress >= 75 && (
          <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-sm text-green-700 dark:text-green-300 font-medium">
              🎉 Fantastique ! Vous maîtrisez le sujet !
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;
