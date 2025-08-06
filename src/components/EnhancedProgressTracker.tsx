
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Target, Trophy, TrendingUp, BookOpen, Award, Flame, Calendar, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useExerciseProgress } from '@/hooks/useExerciseProgress';

interface Subject {
  id: string;
  name: string;
  totalLessons: number;
  totalExercises: number;
  color: string;
  icon: React.ReactNode;
}

interface ProgressData {
  completedLessons: number;
  completedExercises: number;
  totalStudyTime: number; // in minutes
  streak: number;
  lastStudyDate: string;
  earnedPoints: number;
}

const subjects: Subject[] = [
  { id: 'math', name: 'Mathématiques', totalLessons: 15, totalExercises: 25, color: 'blue', icon: <BookOpen className="h-4 w-4" /> },
  { id: 'physics', name: 'Physique', totalLessons: 23, totalExercises: 30, color: 'emerald', icon: <Target className="h-4 w-4" /> },
  { id: 'svt', name: 'SVT', totalLessons: 12, totalExercises: 20, color: 'green', icon: <BookOpen className="h-4 w-4" /> },
  { id: 'french', name: 'Français', totalLessons: 18, totalExercises: 22, color: 'red', icon: <BookOpen className="h-4 w-4" /> },
  { id: 'english', name: 'English', totalLessons: 16, totalExercises: 24, color: 'purple', icon: <BookOpen className="h-4 w-4" /> },
  { id: 'arabic', name: 'العربية', totalLessons: 14, totalExercises: 18, color: 'amber', icon: <BookOpen className="h-4 w-4" /> },
  { id: 'histoire-geo', name: 'Histoire-Géo', totalLessons: 26, totalExercises: 20, color: 'orange', icon: <BookOpen className="h-4 w-4" /> }
];

const EnhancedProgressTracker = () => {
  const { totalPoints } = useExerciseProgress();
  const [progressData, setProgressData] = useState<Record<string, ProgressData>>({});
  const [selectedSubject, setSelectedSubject] = useState<string>('math');

  // Load progress data from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('enhanced-progress-tracker');
    if (savedProgress) {
      try {
        setProgressData(JSON.parse(savedProgress));
      } catch (error) {
        console.error('Error loading progress data:', error);
      }
    }
  }, []);

  // Save progress data to localStorage
  const saveProgress = (newData: Record<string, ProgressData>) => {
    setProgressData(newData);
    localStorage.setItem('enhanced-progress-tracker', JSON.stringify(newData));
  };

  // Update progress for a subject
  const updateProgress = (subjectId: string, updates: Partial<ProgressData>) => {
    const currentData = progressData[subjectId] || {
      completedLessons: 0,
      completedExercises: 0,
      totalStudyTime: 0,
      streak: 0,
      lastStudyDate: '',
      earnedPoints: 0
    };

    const newData = {
      ...progressData,
      [subjectId]: { ...currentData, ...updates }
    };

    saveProgress(newData);
  };

  // Calculate overall progress
  const calculateOverallProgress = () => {
    const totalSubjects = subjects.length;
    let totalCompletedLessons = 0;
    let totalLessons = 0;
    let totalCompletedExercises = 0;
    let totalExercises = 0;
    let totalStudyTime = 0;

    subjects.forEach(subject => {
      const data = progressData[subject.id];
      totalLessons += subject.totalLessons;
      totalExercises += subject.totalExercises;
      
      if (data) {
        totalCompletedLessons += data.completedLessons;
        totalCompletedExercises += data.completedExercises;
        totalStudyTime += data.totalStudyTime;
      }
    });

    return {
      lessonsProgress: totalLessons > 0 ? Math.round((totalCompletedLessons / totalLessons) * 100) : 0,
      exercisesProgress: totalExercises > 0 ? Math.round((totalCompletedExercises / totalExercises) * 100) : 0,
      totalStudyTime: Math.round(totalStudyTime / 60), // Convert to hours
      totalCompletedLessons,
      totalLessons,
      totalCompletedExercises,
      totalExercises
    };
  };

  const overallProgress = calculateOverallProgress();
  const selectedSubjectData = progressData[selectedSubject] || {
    completedLessons: 0,
    completedExercises: 0,
    totalStudyTime: 0,
    streak: 0,
    lastStudyDate: '',
    earnedPoints: 0
  };

  const selectedSubjectInfo = subjects.find(s => s.id === selectedSubject);

  return (
    <div className="space-y-6">
      {/* Overall Progress Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 text-center">
            <Trophy className="h-8 w-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
              {overallProgress.lessonsProgress}%
            </div>
            <p className="text-xs text-blue-600 dark:text-blue-400">Leçons terminées</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border-green-200 dark:border-green-800">
          <CardContent className="p-4 text-center">
            <Target className="h-8 w-8 mx-auto mb-2 text-green-600 dark:text-green-400" />
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">
              {overallProgress.exercisesProgress}%
            </div>
            <p className="text-xs text-green-600 dark:text-green-400">Exercices réalisés</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 border-purple-200 dark:border-purple-800">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
            <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
              {overallProgress.totalStudyTime}h
            </div>
            <p className="text-xs text-purple-600 dark:text-purple-400">Temps d'étude</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50 border-orange-200 dark:border-orange-800">
          <CardContent className="p-4 text-center">
            <Award className="h-8 w-8 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
            <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">
              {totalPoints}
            </div>
            <p className="text-xs text-orange-600 dark:text-orange-400">Points gagnés</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Subject Selector */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Progression par matière
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-6">
            {subjects.map((subject) => (
              <Button
                key={subject.id}
                variant={selectedSubject === subject.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSubject(subject.id)}
                className="transition-all duration-200"
              >
                {subject.icon}
                <span className="ml-2">{subject.name}</span>
              </Button>
            ))}
          </div>

          {/* Selected Subject Details */}
          {selectedSubjectInfo && (
            <motion.div
              key={selectedSubject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Lessons Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Leçons
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {selectedSubjectData.completedLessons}/{selectedSubjectInfo.totalLessons}
                    </span>
                  </div>
                  <Progress 
                    value={(selectedSubjectData.completedLessons / selectedSubjectInfo.totalLessons) * 100} 
                    className="h-3"
                  />
                </div>

                {/* Exercises Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Exercices
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {selectedSubjectData.completedExercises}/{selectedSubjectInfo.totalExercises}
                    </span>
                  </div>
                  <Progress 
                    value={(selectedSubjectData.completedExercises / selectedSubjectInfo.totalExercises) * 100} 
                    className="h-3"
                  />
                </div>
              </div>

              {/* Additional Stats */}
              <div className="flex flex-wrap gap-4 pt-4 border-t">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Flame className="h-3 w-3" />
                  {selectedSubjectData.streak} jours de suite
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {Math.round(selectedSubjectData.totalStudyTime / 60)}h d'étude
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Award className="h-3 w-3" />
                  {selectedSubjectData.earnedPoints} points
                </Badge>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 pt-4">
                <Button
                  size="sm"
                  onClick={() => updateProgress(selectedSubject, {
                    completedLessons: selectedSubjectData.completedLessons + 1,
                    totalStudyTime: selectedSubjectData.totalStudyTime + 30,
                    lastStudyDate: new Date().toISOString().split('T')[0]
                  })}
                >
                  + Leçon terminée
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateProgress(selectedSubject, {
                    completedExercises: selectedSubjectData.completedExercises + 1,
                    earnedPoints: selectedSubjectData.earnedPoints + 10,
                    totalStudyTime: selectedSubjectData.totalStudyTime + 15
                  })}
                >
                  + Exercice réalisé
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => updateProgress(selectedSubject, {
                    completedLessons: 0,
                    completedExercises: 0,
                    totalStudyTime: 0,
                    streak: 0,
                    earnedPoints: 0
                  })}
                >
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Reset
                </Button>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedProgressTracker;
