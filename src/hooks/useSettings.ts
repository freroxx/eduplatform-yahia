
import { useState, useEffect } from 'react';

interface UserSettings {
  name: string;
  theme: 'light' | 'dark' | 'auto';
  hasOnboarded: boolean;
  userType: 'student' | 'teacher';
  age: number;
  grade: string;
  subjects: string[];
}

export const useSettings = () => {
  const [settings, setSettings] = useState<UserSettings>(() => {
    return {
      name: localStorage.getItem('userName') || '',
      theme: (localStorage.getItem('theme') as 'light' | 'dark' | 'auto') || 'auto',
      hasOnboarded: localStorage.getItem('hasOnboarded') === 'true',
      userType: (localStorage.getItem('userType') as 'student' | 'teacher') || 'student',
      age: parseInt(localStorage.getItem('userAge') || '16'),
      grade: localStorage.getItem('userGrade') || 'Tronc Commun Sciences',
      subjects: JSON.parse(localStorage.getItem('userSubjects') || '[]')
    };
  });

  useEffect(() => {
    localStorage.setItem('userName', settings.name);
    localStorage.setItem('theme', settings.theme);
    localStorage.setItem('hasOnboarded', settings.hasOnboarded.toString());
    localStorage.setItem('userType', settings.userType);
    localStorage.setItem('userAge', settings.age.toString());
    localStorage.setItem('userGrade', settings.grade);
    localStorage.setItem('userSubjects', JSON.stringify(settings.subjects));
    
    // Apply theme
    if (settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (settings.theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, [settings]);

  const updateName = (name: string) => {
    setSettings(prev => ({ ...prev, name }));
  };

  const updateTheme = (theme: 'light' | 'dark' | 'auto') => {
    setSettings(prev => ({ ...prev, theme }));
  };

  const updateUserType = (userType: 'student' | 'teacher') => {
    setSettings(prev => ({ ...prev, userType }));
  };

  const updateAge = (age: number) => {
    setSettings(prev => ({ ...prev, age }));
  };

  const updateGrade = (grade: string) => {
    setSettings(prev => ({ ...prev, grade }));
  };

  const updateSubjects = (subjects: string[]) => {
    setSettings(prev => ({ ...prev, subjects }));
  };

  const completeOnboarding = (
    name: string, 
    theme: 'light' | 'dark' | 'auto',
    userType: 'student' | 'teacher',
    age: number,
    grade: string,
    subjects: string[]
  ) => {
    setSettings({
      name,
      theme,
      hasOnboarded: true,
      userType,
      age,
      grade,
      subjects
    });
  };

  return {
    settings,
    updateName,
    updateTheme,
    updateUserType,
    updateAge,
    updateGrade,
    updateSubjects,
    completeOnboarding
  };
};
