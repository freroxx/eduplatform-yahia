import { useState, useEffect } from 'react';

interface UserSettings {
  name: string;
  theme: 'light' | 'dark' | 'auto';
  hasOnboarded: boolean;
}

export const useSettings = () => {
  const [settings, setSettings] = useState<UserSettings>(() => {
    return {
      name: localStorage.getItem('userName') || '',
      theme: (localStorage.getItem('theme') as 'light' | 'dark' | 'auto') || 'auto',
      hasOnboarded: localStorage.getItem('hasOnboarded') === 'true'
    };
  });

  useEffect(() => {
    localStorage.setItem('userName', settings.name);
    localStorage.setItem('theme', settings.theme);
    localStorage.setItem('hasOnboarded', settings.hasOnboarded.toString());
    
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

  const completeOnboarding = (name: string, theme: 'light' | 'dark' | 'auto') => {
    setSettings({
      name,
      theme,
      hasOnboarded: true
    });
  };

  return {
    settings,
    updateName,
    updateTheme,
    completeOnboarding
  };
};