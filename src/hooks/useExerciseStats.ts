
import { useState, useEffect } from 'react';

interface ExerciseStats {
  totalExercises: number;
  completedExercises: number;
  totalPoints: number;
  earnedPoints: number;
  averageScore: number;
  streakDays: number;
  subjectStats: {
    [subject: string]: {
      completed: number;
      total: number;
      points: number;
      lastActivity: string;
    };
  };
}

export const useExerciseStats = () => {
  const [stats, setStats] = useState<ExerciseStats>(() => {
    const saved = localStorage.getItem('exerciseStats');
    return saved ? JSON.parse(saved) : {
      totalExercises: 0,
      completedExercises: 0,
      totalPoints: 0,
      earnedPoints: 0,
      averageScore: 0,
      streakDays: 0,
      subjectStats: {}
    };
  });

  useEffect(() => {
    localStorage.setItem('exerciseStats', JSON.stringify(stats));
  }, [stats]);

  const updateExerciseCompletion = (subject: string, exercisePoints: number) => {
    const today = new Date().toISOString().split('T')[0];
    
    setStats(prev => {
      const newStats = { ...prev };
      
      // Update subject stats
      if (!newStats.subjectStats[subject]) {
        newStats.subjectStats[subject] = {
          completed: 0,
          total: 0,
          points: 0,
          lastActivity: today
        };
      }
      
      newStats.subjectStats[subject].completed += 1;
      newStats.subjectStats[subject].points += exercisePoints;
      newStats.subjectStats[subject].lastActivity = today;
      
      // Update global stats
      newStats.completedExercises += 1;
      newStats.earnedPoints += exercisePoints;
      newStats.averageScore = Math.round((newStats.earnedPoints / Math.max(newStats.completedExercises, 1)) * 100) / 100;
      
      // Update streak (simplified logic)
      const lastActivity = localStorage.getItem('lastExerciseDate');
      if (lastActivity === today) {
        // Same day, no change to streak
      } else if (!lastActivity) {
        newStats.streakDays = 1;
      } else {
        const lastDate = new Date(lastActivity);
        const todayDate = new Date(today);
        const diffTime = todayDate.getTime() - lastDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
          newStats.streakDays += 1;
        } else {
          newStats.streakDays = 1;
        }
      }
      
      localStorage.setItem('lastExerciseDate', today);
      return newStats;
    });
  };

  const getSubjectProgress = (subject: string) => {
    const subjectData = stats.subjectStats[subject];
    if (!subjectData) return { completed: 0, total: 0, percentage: 0 };
    
    return {
      completed: subjectData.completed,
      total: subjectData.total,
      percentage: subjectData.total > 0 ? Math.round((subjectData.completed / subjectData.total) * 100) : 0
    };
  };

  const getSubjectStats = (subject: string) => {
    const subjectData = stats.subjectStats[subject];
    if (!subjectData) return { 
      completed: 0, 
      total: 0, 
      points: 0, 
      progress: 0,
      lastActivity: new Date().toISOString().split('T')[0]
    };
    
    return {
      completed: subjectData.completed,
      total: Math.max(subjectData.total, 10), // Default minimum total
      points: subjectData.points,
      progress: subjectData.total > 0 ? Math.round((subjectData.completed / subjectData.total) * 100) : 0,
      lastActivity: subjectData.lastActivity
    };
  };

  const getTotalStats = () => {
    return {
      totalExercises: stats.totalExercises,
      exercisesCompleted: stats.completedExercises,
      coursesCompleted: Object.values(stats.subjectStats).reduce((acc, subject) => acc + Math.min(subject.completed, 1), 0),
      totalPoints: stats.earnedPoints,
      averageScore: stats.averageScore,
      streak: stats.streakDays
    };
  };

  const resetStats = () => {
    setStats({
      totalExercises: 0,
      completedExercises: 0,
      totalPoints: 0,
      earnedPoints: 0,
      averageScore: 0,
      streakDays: 0,
      subjectStats: {}
    });
    localStorage.removeItem('lastExerciseDate');
  };

  return {
    stats,
    updateExerciseCompletion,
    getSubjectProgress,
    getSubjectStats,
    getTotalStats,
    resetStats
  };
};
