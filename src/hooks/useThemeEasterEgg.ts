
import { useState, useCallback } from 'react';

export const useThemeEasterEgg = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleThemeChange = useCallback(() => {
    const currentTime = Date.now();
    const timeDiff = currentTime - lastClickTime;
    
    // Reset counter if more than 10 seconds between clicks
    if (timeDiff > 10000) {
      setClickCount(1);
    } else {
      const newCount = clickCount + 1;
      setClickCount(newCount);

      if (newCount >= 5) {
        setShowEasterEgg(true);
        setClickCount(0); // Reset counter
      }
    }
    
    setLastClickTime(currentTime);
  }, [clickCount, lastClickTime]);

  const closeEasterEgg = useCallback(() => {
    setShowEasterEgg(false);
  }, []);

  return {
    handleThemeChange,
    showEasterEgg,
    closeEasterEgg
  };
};
