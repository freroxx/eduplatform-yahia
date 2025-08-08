
import { useState, useCallback } from 'react';

export const useThemeEasterEgg = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleThemeChange = useCallback(() => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 5) {
      setShowEasterEgg(true);
      setClickCount(0); // Reset counter
    }

    // Reset counter after 10 seconds of inactivity
    setTimeout(() => {
      setClickCount(0);
    }, 10000);
  }, [clickCount]);

  const closeEasterEgg = useCallback(() => {
    setShowEasterEgg(false);
  }, []);

  return {
    handleThemeChange,
    showEasterEgg,
    closeEasterEgg
  };
};
