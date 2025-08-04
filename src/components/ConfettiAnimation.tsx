
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiAnimationProps {
  trigger: boolean;
  onComplete?: () => void;
}

const ConfettiAnimation = ({ trigger, onComplete }: ConfettiAnimationProps) => {
  useEffect(() => {
    if (trigger) {
      // First burst from left
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.2, y: 0.6 },
        colors: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444']
      });

      // Second burst from right
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { x: 0.8, y: 0.6 },
          colors: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444']
        });
      }, 300);

      // Final center burst
      setTimeout(() => {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { x: 0.5, y: 0.5 },
          colors: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444']
        });
        if (onComplete) onComplete();
      }, 600);
    }
  }, [trigger, onComplete]);

  return null;
};

export default ConfettiAnimation;
