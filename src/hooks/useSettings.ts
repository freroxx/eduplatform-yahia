
import { useState, useEffect, useCallback } from 'react';

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

const DEFAULT_SETTINGS: UserSettings = {
  name: '',
  theme: 'auto',
  hasOnboarded: false,
  userType: 'student',
  country: 'Maroc',
  subjects: [],
  animatedBackgrounds: true,
  fontSize: 16,
  animationSpeed: 100,
  soundEffects: true,
  notifications: true,
  autoSave: true,
  concentrationMode: false,
  studyReminders: true
};

export const useSettings = () => {
  const [settings, setSettings] = useState<UserSettings>(() => {
    try {
      return {
        name: localStorage.getItem('userName') || DEFAULT_SETTINGS.name,
        theme: (localStorage.getItem('theme') as 'light' | 'dark' | 'auto') || DEFAULT_SETTINGS.theme,
        hasOnboarded: localStorage.getItem('hasOnboarded') === 'true',
        userType: (localStorage.getItem('userType') as 'student' | 'teacher') || DEFAULT_SETTINGS.userType,
        country: localStorage.getItem('userCountry') || DEFAULT_SETTINGS.country,
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
    } catch (error) {
      console.error('Error loading settings:', error);
      return DEFAULT_SETTINGS;
    }
  });

  // Apply settings immediately when they change
  const applySettings = useCallback((newSettings: UserSettings) => {
    try {
      // Apply theme
      const root = document.documentElement;
      if (newSettings.theme === 'dark') {
        root.classList.add('dark');
      } else if (newSettings.theme === 'light') {
        root.classList.remove('dark');
      } else {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.toggle('dark', isDark);
      }

      // Apply font size
      root.style.fontSize = `${Math.max(12, Math.min(24, newSettings.fontSize))}px`;

      // Apply animations
      root.classList.toggle('disable-animations', !newSettings.animatedBackgrounds);
      
      // Apply animation speed
      root.style.setProperty('--animation-speed', `${newSettings.animationSpeed}ms`);

      // Apply concentration mode
      root.classList.toggle('concentration-mode', newSettings.concentrationMode);

    } catch (error) {
      console.error('Error applying settings:', error);
    }
  }, []);

  // Save settings to localStorage and apply them
  useEffect(() => {
    try {
      Object.entries(settings).forEach(([key, value]) => {
        const storageKey = key === 'name' ? 'userName' : 
                          key === 'country' ? 'userCountry' :
                          key === 'subjects' ? 'userSubjects' :
                          key === 'userType' ? 'userType' :
                          key;
        
        if (key === 'subjects') {
          localStorage.setItem(storageKey, JSON.stringify(value));
        } else {
          localStorage.setItem(storageKey, String(value));
        }
      });

      applySettings(settings);
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  }, [settings, applySettings]);

  // Individual update functions with immediate persistence
  const updateName = useCallback((name: string) => {
    setSettings(prev => ({ ...prev, name: name.trim() }));
  }, []);

  const updateTheme = useCallback((theme: 'light' | 'dark' | 'auto') => {
    setSettings(prev => ({ ...prev, theme }));
  }, []);

  const updateUserType = useCallback((userType: 'student' | 'teacher') => {
    setSettings(prev => ({ ...prev, userType }));
  }, []);

  const updateCountry = useCallback((country: string) => {
    setSettings(prev => ({ ...prev, country }));
  }, []);

  const updateSubjects = useCallback((subjects: string[]) => {
    setSettings(prev => ({ ...prev, subjects: [...subjects] }));
  }, []);

  const updateAnimatedBackgrounds = useCallback((animatedBackgrounds: boolean) => {
    setSettings(prev => ({ ...prev, animatedBackgrounds }));
  }, []);

  const updateFontSize = useCallback((fontSize: number) => {
    const validSize = Math.max(12, Math.min(24, fontSize));
    setSettings(prev => ({ ...prev, fontSize: validSize }));
  }, []);

  const updateAnimationSpeed = useCallback((animationSpeed: number) => {
    const validSpeed = Math.max(50, Math.min(500, animationSpeed));
    setSettings(prev => ({ ...prev, animationSpeed: validSpeed }));
  }, []);

  const updateSoundEffects = useCallback((soundEffects: boolean) => {
    setSettings(prev => ({ ...prev, soundEffects }));
  }, []);

  const updateNotifications = useCallback((notifications: boolean) => {
    setSettings(prev => ({ ...prev, notifications }));
  }, []);

  const updateAutoSave = useCallback((autoSave: boolean) => {
    setSettings(prev => ({ ...prev, autoSave }));
  }, []);

  const updateConcentrationMode = useCallback((concentrationMode: boolean) => {
    setSettings(prev => ({ ...prev, concentrationMode }));
  }, []);

  const updateStudyReminders = useCallback((studyReminders: boolean) => {
    setSettings(prev => ({ ...prev, studyReminders }));
  }, []);

  const completeOnboarding = useCallback((
    name: string, 
    theme: 'light' | 'dark' | 'auto',
    userType: 'student' | 'teacher',
    country: string,
    subjects: string[]
  ) => {
    setSettings(prev => ({
      ...prev,
      name: name.trim(),
      theme,
      hasOnboarded: true,
      userType,
      country,
      subjects: [...subjects]
    }));
  }, []);

  const resetSettings = useCallback(() => {
    // Clear localStorage
    Object.keys(DEFAULT_SETTINGS).forEach(key => {
      const storageKey = key === 'name' ? 'userName' : 
                        key === 'country' ? 'userCountry' :
                        key === 'subjects' ? 'userSubjects' :
                        key === 'userType' ? 'userType' :
                        key;
      localStorage.removeItem(storageKey);
    });
    
    setSettings(DEFAULT_SETTINGS);
  }, []);

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
    completeOnboarding,
    resetSettings
  };
};
