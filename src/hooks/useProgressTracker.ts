
import { useState, useEffect } from 'react';

export interface SubjectProgress {
  completedLessons: string[];
  completedExercises: string[];
  totalPoints: number;
  studyTime: number; // in minutes
  lastAccessed: Date;
  streak: number;
}

export interface ProgressData {
  [subject: string]: SubjectProgress;
}

const STORAGE_KEY = 'education-progress';

const defaultProgress: SubjectProgress = {
  completedLessons: [],
  completedExercises: [],
  totalPoints: 0,
  studyTime: 0,
  lastAccessed: new Date(),
  streak: 0
};

export const useProgressTracker = () => {
  const [progress, setProgress] = useState<ProgressData>({});

  // Load progress from localStorage on init
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        // Convert date strings back to Date objects
        Object.keys(parsed).forEach(subject => {
          if (parsed[subject].lastAccessed) {
            parsed[subject].lastAccessed = new Date(parsed[subject].lastAccessed);
          }
        });
        setProgress(parsed);
      } catch (error) {
        console.error('Error loading progress:', error);
        setProgress({});
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(progress).length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress]);

  const getSubjectProgress = (subject: string): SubjectProgress => {
    return progress[subject] || defaultProgress;
  };

  const updateSubjectProgress = (subject: string, updates: Partial<SubjectProgress>) => {
    setProgress(prev => ({
      ...prev,
      [subject]: {
        ...getSubjectProgress(subject),
        ...updates,
        lastAccessed: new Date()
      }
    }));
  };

  const completeLesson = (subject: string, lessonId: string, points: number = 0) => {
    const currentProgress = getSubjectProgress(subject);
    if (!currentProgress.completedLessons.includes(lessonId)) {
      updateSubjectProgress(subject, {
        completedLessons: [...currentProgress.completedLessons, lessonId],
        totalPoints: currentProgress.totalPoints + points
      });
    }
  };

  const completeExercise = (subject: string, exerciseId: string, points: number = 0) => {
    const currentProgress = getSubjectProgress(subject);
    if (!currentProgress.completedExercises.includes(exerciseId)) {
      updateSubjectProgress(subject, {
        completedExercises: [...currentProgress.completedExercises, exerciseId],
        totalPoints: currentProgress.totalPoints + points
      });
    }
  };

  const addStudyTime = (subject: string, minutes: number) => {
    const currentProgress = getSubjectProgress(subject);
    updateSubjectProgress(subject, {
      studyTime: currentProgress.studyTime + minutes
    });
  };

  const updateStreak = (subject: string) => {
    const currentProgress = getSubjectProgress(subject);
    const today = new Date();
    const lastAccess = currentProgress.lastAccessed;
    
    // Check if last access was yesterday
    const isConsecutiveDay = lastAccess && 
      today.getDate() - lastAccess.getDate() === 1 &&
      today.getMonth() === lastAccess.getMonth() &&
      today.getFullYear() === lastAccess.getFullYear();

    const newStreak = isConsecutiveDay ? currentProgress.streak + 1 : 1;
    
    updateSubjectProgress(subject, {
      streak: newStreak
    });
  };

  const resetSubjectProgress = (subject: string) => {
    setProgress(prev => ({
      ...prev,
      [subject]: defaultProgress
    }));
  };

  const getTotalProgress = () => {
    const subjects = Object.keys(progress);
    if (subjects.length === 0) return { totalPoints: 0, totalStudyTime: 0, averageStreak: 0 };

    const totals = subjects.reduce((acc, subject) => {
      const subjectProgress = progress[subject];
      acc.totalPoints += subjectProgress.totalPoints;
      acc.totalStudyTime += subjectProgress.studyTime;
      acc.totalStreak += subjectProgress.streak;
      return acc;
    }, { totalPoints: 0, totalStudyTime: 0, totalStreak: 0 });

    return {
      totalPoints: totals.totalPoints,
      totalStudyTime: totals.totalStudyTime,
      averageStreak: Math.round(totals.totalStreak / subjects.length)
    };
  };

  const formatStudyTime = (minutes: number): string => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h${remainingMinutes > 0 ? ` ${remainingMinutes}min` : ''}`;
  };

  return {
    progress,
    getSubjectProgress,
    updateSubjectProgress,
    completeLesson,
    completeExercise,
    addStudyTime,
    updateStreak,
    resetSubjectProgress,
    getTotalProgress,
    formatStudyTime
  };
};
