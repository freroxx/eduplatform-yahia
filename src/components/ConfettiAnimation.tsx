
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiAnimationProps {
  trigger: boolean;
  onComplete?: () => void;
  type?: 'lesson' | 'exercises' | 'celebration';
}

const ConfettiAnimation = ({ trigger, onComplete, type = 'celebration' }: ConfettiAnimationProps) => {
  useEffect(() => {
    if (trigger) {
      const runConfetti = async () => {
        if (type === 'lesson') {
          // Special animation for completing a lesson
          await Promise.all([
            confetti({
              particleCount: 150,
              spread: 70,
              origin: { x: 0.3, y: 0.6 },
              colors: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'],
              startVelocity: 30,
              gravity: 0.8
            }),
            new Promise(resolve => setTimeout(resolve, 200)),
            confetti({
              particleCount: 150,
              spread: 70,
              origin: { x: 0.7, y: 0.6 },
              colors: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'],
              startVelocity: 30,
              gravity: 0.8
            })
          ]);
          
          // Final burst
          setTimeout(() => {
            confetti({
              particleCount: 200,
              spread: 100,
              origin: { x: 0.5, y: 0.4 },
              colors: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'],
              startVelocity: 40,
              gravity: 0.7
            });
            if (onComplete) onComplete();
          }, 400);
          
        } else if (type === 'exercises') {
          // Animation for completing all exercises
          const colors = ['#10B981', '#059669', '#047857', '#065F46'];
          
          // Multiple bursts for exercises completion
          for (let i = 0; i < 5; i++) {
            setTimeout(() => {
              confetti({
                particleCount: 100,
                spread: 60,
                origin: { 
                  x: 0.2 + (i * 0.15), 
                  y: 0.7 - (i * 0.1) 
                },
                colors,
                startVelocity: 25,
                gravity: 0.9
              });
            }, i * 150);
          }
          
          // Grand finale
          setTimeout(() => {
            confetti({
              particleCount: 300,
              spread: 120,
              origin: { x: 0.5, y: 0.3 },
              colors,
              startVelocity: 50,
              gravity: 0.6
            });
            if (onComplete) onComplete();
          }, 800);
          
        } else {
          // Default celebration animation
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0.2, y: 0.6 },
            colors: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444']
          });

          setTimeout(() => {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { x: 0.8, y: 0.6 },
              colors: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444']
            });
          }, 300);

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
      };

      runConfetti();
    }
  }, [trigger, onComplete, type]);

  return null;
};

export default ConfettiAnimation;
