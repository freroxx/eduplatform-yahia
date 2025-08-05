import { useState, useEffect } from 'react';

interface UserSettings {
  name: string;
  theme: 'light' | 'dark' | 'auto';
  hasOnboarded: boolean;
  userType: 'student' | 'teacher';
  country: string;
  subjects: string[];
  animatedBackgrounds: boolean;
  fontSize: number;
  animationSpeed: number;
  soundEffects: boolean;
  notifications: boolean;
  autoSave: boolean;
  concentrationMode: boolean;
  studyReminders: boolean;
}

export const useSettings = () => {
  const [settings, setSettings] = useState<UserSettings>(() => {
    return {
      name: localStorage.getItem('userName') || '',
      theme: (localStorage.getItem('theme') as 'light' | 'dark' | 'auto') || 'auto',
      hasOnboarded: localStorage.getItem('hasOnboarded') === 'true',
      userType: (localStorage.getItem('userType') as 'student' | 'teacher') || 'student',
      country: localStorage.getItem('userCountry') || 'Maroc',
      subjects: JSON.parse(localStorage.getItem('userSubjects') || '[]'),
      animatedBackgrounds: localStorage.getItem('animatedBackgrounds') !== 'false',
      fontSize: parseInt(localStorage.getItem('fontSize') || '16'),
      animationSpeed: parseInt(localStorage.getItem('animationSpeed') || '100'),
      soundEffects: localStorage.getItem('soundEffects') !== 'false',
      notifications: localStorage.getItem('notifications') !== 'false',
      autoSave: localStorage.getItem('autoSave') !== 'false',
      concentrationMode: localStorage.getItem('concentrationMode') === 'true',
      studyReminders: localStorage.getItem('studyReminders') !== 'false'
    };
  });

  useEffect(() => {
    localStorage.setItem('userName', settings.name);
    localStorage.setItem('theme', settings.theme);
    localStorage.setItem('hasOnboarded', settings.hasOnboarded.toString());
    localStorage.setItem('userType', settings.userType);
    localStorage.setItem('userCountry', settings.country);
    localStorage.setItem('userSubjects', JSON.stringify(settings.subjects));
    localStorage.setItem('animatedBackgrounds', settings.animatedBackgrounds.toString());
    localStorage.setItem('fontSize', settings.fontSize.toString());
    localStorage.setItem('animationSpeed', settings.animationSpeed.toString());
    localStorage.setItem('soundEffects', settings.soundEffects.toString());
    localStorage.setItem('notifications', settings.notifications.toString());
    localStorage.setItem('autoSave', settings.autoSave.toString());
    localStorage.setItem('concentrationMode', settings.concentrationMode.toString());
    localStorage.setItem('studyReminders', settings.studyReminders.toString());
    
    // Apply theme
    if (settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (settings.theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDark);
    }

    // Apply font size
    document.documentElement.style.fontSize = `${settings.fontSize}px`;

    // Apply animated backgrounds
    document.documentElement.classList.toggle('disable-animations', !settings.animatedBackgrounds);
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

  const updateCountry = (country: string) => {
    setSettings(prev => ({ ...prev, country }));
  };

  const updateSubjects = (subjects: string[]) => {
    setSettings(prev => ({ ...prev, subjects }));
  };

  const updateAnimatedBackgrounds = (animatedBackgrounds: boolean) => {
    setSettings(prev => ({ ...prev, animatedBackgrounds }));
  };

  const updateFontSize = (fontSize: number) => {
    setSettings(prev => ({ ...prev, fontSize }));
  };

  const updateAnimationSpeed = (animationSpeed: number) => {
    setSettings(prev => ({ ...prev, animationSpeed }));
  };

  const updateSoundEffects = (soundEffects: boolean) => {
    setSettings(prev => ({ ...prev, soundEffects }));
  };

  const updateNotifications = (notifications: boolean) => {
    setSettings(prev => ({ ...prev, notifications }));
  };

  const updateAutoSave = (autoSave: boolean) => {
    setSettings(prev => ({ ...prev, autoSave }));
  };

  const updateConcentrationMode = (concentrationMode: boolean) => {
    setSettings(prev => ({ ...prev, concentrationMode }));
  };

  const updateStudyReminders = (studyReminders: boolean) => {
    setSettings(prev => ({ ...prev, studyReminders }));
  };

  const completeOnboarding = (
    name: string, 
    theme: 'light' | 'dark' | 'auto',
    userType: 'student' | 'teacher',
    country: string,
    subjects: string[]
  ) => {
    setSettings(prev => ({
      ...prev,
      name,
      theme,
      hasOnboarded: true,
      userType,
      country,
      subjects
    }));
  };

  return {
    settings,
    updateName,
    updateTheme,
    updateUserType,
    updateCountry,
    updateSubjects,
    updateAnimatedBackgrounds,
    updateFontSize,
    updateAnimationSpeed,
    updateSoundEffects,
    updateNotifications,
    updateAutoSave,
    updateConcentrationMode,
    updateStudyReminders,
    completeOnboarding
  };
};
