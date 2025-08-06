
import { useState, useEffect, useCallback } from 'react';

interface UserSettings {
  name: string;
  theme: 'light' | 'dark' | 'auto';
  hasOnboarded: boolean;
  userType: 'student' | 'teacher';
  country: string;
  subjects: string[];
  animatedBackgrounds: boolean;
  animatedBackgroundsLight: boolean;
  animatedBackgroundsDark: boolean;
  fontSize: number;
  animationSpeed: number;
  soundEffects: boolean;
  notifications: boolean;
  autoSave: boolean;
  concentrationMode: boolean;
  studyReminders: boolean;
  motivationalQuotes: boolean;
  notificationPermission: boolean;
  reminderInterval: '1day' | '2days' | '1week';
}

const DEFAULT_SETTINGS: UserSettings = {
  name: '',
  theme: 'auto',
  hasOnboarded: false,
  userType: 'student',
  country: 'Maroc',
  subjects: [],
  animatedBackgrounds: true,
  animatedBackgroundsLight: true,
  animatedBackgroundsDark: true,
  fontSize: 16,
  animationSpeed: 100,
  soundEffects: true,
  notifications: true,
  autoSave: true,
  concentrationMode: false,
  studyReminders: true,
  motivationalQuotes: true,
  notificationPermission: false,
  reminderInterval: '1day'
};

const motivationalQuotes = [
  "L'apprentissage est un cadeau. Même quand la douleur en est le maître.",
  "L'éducation est l'arme la plus puissante que vous puissiez utiliser pour changer le monde.",
  "Chaque expert était un jour un débutant. Chaque pro était un jour un amateur.",
  "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.",
  "L'apprentissage ne s'arrête jamais. Chaque jour apporte une nouvelle leçon.",
  "Croyez en vous et tout devient possible.",
  "L'excellence n'est pas un acte mais une habitude.",
  "Le savoir que vous acquérez aujourd'hui vous servira demain."
];

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
        animatedBackgroundsLight: localStorage.getItem('animatedBackgroundsLight') !== 'false',
        animatedBackgroundsDark: localStorage.getItem('animatedBackgroundsDark') !== 'false',
        fontSize: parseInt(localStorage.getItem('fontSize') || '16'),
        animationSpeed: parseInt(localStorage.getItem('animationSpeed') || '100'),
        soundEffects: localStorage.getItem('soundEffects') !== 'false',
        notifications: localStorage.getItem('notifications') !== 'false',
        autoSave: localStorage.getItem('autoSave') !== 'false',
        concentrationMode: localStorage.getItem('concentrationMode') === 'true',
        studyReminders: localStorage.getItem('studyReminders') !== 'false',
        motivationalQuotes: localStorage.getItem('motivationalQuotes') !== 'false',
        notificationPermission: localStorage.getItem('notificationPermission') === 'true',
        reminderInterval: (localStorage.getItem('reminderInterval') as '1day' | '2days' | '1week') || DEFAULT_SETTINGS.reminderInterval
      };
    } catch (error) {
      console.error('Error loading settings:', error);
      return DEFAULT_SETTINGS;
    }
  });

  // Apply settings immediately when they change
  const applySettings = useCallback((newSettings: UserSettings) => {
    try {
      const root = document.documentElement;
      
      // Apply theme
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

      // Apply animations based on theme
      const currentTheme = root.classList.contains('dark') ? 'dark' : 'light';
      const animationsEnabled = newSettings.animatedBackgrounds && 
        (currentTheme === 'dark' ? newSettings.animatedBackgroundsDark : newSettings.animatedBackgroundsLight);
      
      root.classList.toggle('disable-animations', !animationsEnabled);
      
      // Apply animation speed
      root.style.setProperty('--animation-speed', `${newSettings.animationSpeed}ms`);

      // Apply concentration mode
      root.classList.toggle('concentration-mode', newSettings.concentrationMode);

      // Request notification permission if needed
      if (newSettings.notifications && !newSettings.notificationPermission && 'Notification' in window) {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            updateNotificationPermission(true);
          }
        });
      }

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

  // Setup reminder notifications
  useEffect(() => {
    if (settings.studyReminders && settings.notificationPermission) {
      const intervalMap = {
        '1day': 24 * 60 * 60 * 1000,
        '2days': 2 * 24 * 60 * 60 * 1000,
        '1week': 7 * 24 * 60 * 60 * 1000
      };

      const interval = setInterval(() => {
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('Rappel d\'étude - EduPlatform', {
            body: 'Il est temps de continuer votre apprentissage !',
            icon: '/favicon.ico'
          });
        }
      }, intervalMap[settings.reminderInterval]);

      return () => clearInterval(interval);
    }
  }, [settings.studyReminders, settings.notificationPermission, settings.reminderInterval]);

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

  const updateAnimatedBackgroundsLight = useCallback((animatedBackgroundsLight: boolean) => {
    setSettings(prev => ({ ...prev, animatedBackgroundsLight }));
  }, []);

  const updateAnimatedBackgroundsDark = useCallback((animatedBackgroundsDark: boolean) => {
    setSettings(prev => ({ ...prev, animatedBackgroundsDark }));
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

  const updateMotivationalQuotes = useCallback((motivationalQuotes: boolean) => {
    setSettings(prev => ({ ...prev, motivationalQuotes }));
  }, []);

  const updateNotificationPermission = useCallback((notificationPermission: boolean) => {
    setSettings(prev => ({ ...prev, notificationPermission }));
  }, []);

  const updateReminderInterval = useCallback((reminderInterval: '1day' | '2days' | '1week') => {
    setSettings(prev => ({ ...prev, reminderInterval }));
  }, []);

  const getRandomMotivationalQuote = useCallback(() => {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
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
    updateAnimatedBackgroundsLight,
    updateAnimatedBackgroundsDark,
    updateFontSize,
    updateAnimationSpeed,
    updateSoundEffects,
    updateNotifications,
    updateAutoSave,
    updateConcentrationMode,
    updateStudyReminders,
    updateMotivationalQuotes,
    updateNotificationPermission,
    updateReminderInterval,
    getRandomMotivationalQuote,
    completeOnboarding,
    resetSettings
  };
};
