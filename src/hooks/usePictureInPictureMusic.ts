
import { useState, useEffect } from 'react';

export const usePictureInPictureMusic = () => {
  const [isPipVisible, setIsPipVisible] = useState(false);

  useEffect(() => {
    // Check localStorage for PiP state
    const pipState = localStorage.getItem('pipMusicVisible');
    if (pipState === 'true') {
      setIsPipVisible(true);
    }
  }, []);

  const showPip = () => {
    setIsPipVisible(true);
    localStorage.setItem('pipMusicVisible', 'true');
  };

  const hidePip = () => {
    setIsPipVisible(false);
    localStorage.removeItem('pipMusicVisible');
  };

  const togglePip = () => {
    if (isPipVisible) {
      hidePip();
    } else {
      showPip();
    }
  };

  return {
    isPipVisible,
    showPip,
    hidePip,
    togglePip
  };
};
