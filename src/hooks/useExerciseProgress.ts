import { useState, useEffect } from 'react';

interface ExerciseProgress {
  completed: number[];
  points: number;
  answers: { [key: number]: string };
}

export const useExerciseProgress = (lessonId?: string) => {
  const storageKey = lessonId ? `exercise-progress-${lessonId}` : 'exercise-progress-global';
  
  const [progress, setProgress] = useState<ExerciseProgress>(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return { completed: [], points: 0, answers: {} };
      }
    }
    return { completed: [], points: 0, answers: {} };
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }, [progress, storageKey]);

  const completeExercise = (exerciseId: number, points: number) => {
    setProgress(prev => {
      const wasCompleted = prev.completed.includes(exerciseId);
      const newCompleted = wasCompleted 
        ? prev.completed 
        : [...prev.completed, exerciseId];
      
      const newPoints = wasCompleted 
        ? prev.points 
        : prev.points + points;

      return {
        ...prev,
        completed: newCompleted,
        points: newPoints
      };
    });
  };

  const saveAnswer = (exerciseId: number, answer: string) => {
    setProgress(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [exerciseId]: answer
      }
    }));
  };

  const resetProgress = () => {
    setProgress({ completed: [], points: 0, answers: {} });
  };

  const isCompleted = (exerciseId: number) => progress.completed.includes(exerciseId);

  return {
    completedExercises: progress.completed,
    totalPoints: progress.points,
    answers: progress.answers,
    completeExercise,
    saveAnswer,
    resetProgress,
    isCompleted
  };
};