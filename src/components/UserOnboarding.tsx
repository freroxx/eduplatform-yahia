
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Target, Trophy, ChevronRight } from 'lucide-react';

interface UserOnboardingProps {
  onComplete: () => void;
}

const UserOnboarding = ({ onComplete }: UserOnboardingProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Bienvenue sur EduPlatform !',
      description: 'Votre plateforme d\'apprentissage personnalisée',
      icon: BookOpen,
      content: 'Découvrez une nouvelle façon d\'apprendre avec des cours interactifs et des exercices adaptés à votre niveau.'
    },
    {
      title: 'Définissez vos objectifs',
      description: 'Personnalisez votre expérience d\'apprentissage',
      icon: Target,
      content: 'Choisissez les matières qui vous intéressent et fixez-vous des objectifs réalisables.'
    },
    {
      title: 'Suivez vos progrès',
      description: 'Visualisez votre évolution',
      icon: Trophy,
      content: 'Consultez vos statistiques et célébrez vos réussites avec notre système de récompenses.'
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      localStorage.setItem('hasSeenOnboarding', 'true');
      onComplete();
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <Dialog open={true} onOpenChange={() => {}}>
      <DialogContent className="max-w-md" hideCloseButton>
        <DialogHeader>
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full">
                <currentStepData.icon className="h-6 w-6" />
              </div>
            </div>

            <div className="flex justify-center space-x-2 mb-4">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            <DialogTitle className="text-xl font-bold">{currentStepData.title}</DialogTitle>
            <p className="text-muted-foreground text-sm">{currentStepData.description}</p>
          </div>
        </DialogHeader>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mb-6">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">{currentStepData.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-end">
          <Button onClick={handleNext}>
            {currentStep === steps.length - 1 ? 'Commencer' : 'Suivant'}
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserOnboarding;
