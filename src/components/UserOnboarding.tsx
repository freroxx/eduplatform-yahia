
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Target, Trophy, ChevronRight, Sparkles, Zap, Star } from 'lucide-react';

interface UserOnboardingProps {
  isOpen: boolean;
  onComplete: () => void;
}

const UserOnboarding = ({ isOpen, onComplete }: UserOnboardingProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Bienvenue sur EduPlatform v5.5 !',
      description: 'Votre plateforme d\'apprentissage nouvelle génération',
      icon: BookOpen,
      content: 'Découvrez une expérience d\'apprentissage révolutionnaire avec des cours interactifs, des animations fluides et une interface repensée pour maximiser votre réussite.',
      gradient: 'from-blue-500 to-indigo-600',
      features: [
        { icon: Sparkles, text: 'Interface moderne et intuitive' },
        { icon: Zap, text: 'Animations fluides et réactives' },
        { icon: Star, text: 'Contenu pédagogique enrichi' }
      ]
    },
    {
      title: 'Définissez vos objectifs',
      description: 'Personnalisez votre parcours d\'apprentissage',
      icon: Target,
      content: 'Choisissez les matières qui vous passionnent, fixez-vous des objectifs ambitieux mais réalisables, et laissez notre IA vous guider vers la réussite.',
      gradient: 'from-green-500 to-emerald-600',
      features: [
        { icon: Target, text: 'Objectifs personnalisables' },
        { icon: BookOpen, text: '7 matières complètes' },
        { icon: Trophy, text: 'Suivi de progression avancé' }
      ]
    },
    {
      title: 'Suivez vos progrès',
      description: 'Visualisez votre évolution en temps réel',
      icon: Trophy,
      content: 'Consultez vos statistiques détaillées, célébrez vos réussites avec notre système de récompenses et restez motivé grâce à notre communauté active.',
      gradient: 'from-purple-500 to-pink-600',
      features: [
        { icon: Trophy, text: 'Système de badges et récompenses' },
        { icon: Target, text: 'Statistiques détaillées' },
        { icon: Sparkles, text: 'Motivation quotidienne' }
      ]
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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-2xl border-0 bg-gradient-to-br from-background to-secondary/30" hideCloseButton>
        <DialogHeader>
          <div className="text-center mb-8">
            <motion.div
              key={currentStep}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex justify-center mb-6"
            >
              <div className={`bg-gradient-to-r ${currentStepData.gradient} text-white p-4 rounded-full shadow-lg`}>
                <currentStepData.icon className="h-8 w-8" />
              </div>
            </motion.div>

            <div className="flex justify-center space-x-3 mb-6">
              {steps.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    backgroundColor: index <= currentStep ? '#3B82F6' : '#E5E7EB'
                  }}
                  transition={{ delay: index * 0.1 }}
                  className="w-3 h-3 rounded-full transition-colors duration-300"
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {currentStepData.title}
              </DialogTitle>
              <p className="text-muted-foreground text-lg">{currentStepData.description}</p>
            </motion.div>
          </div>
        </DialogHeader>

        <AnimatePresence mode="wait" custom={currentStep}>
          <motion.div
            key={currentStep}
            custom={currentStep}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <Card className="mb-8 border-0 bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-muted-foreground text-center text-lg mb-6 leading-relaxed"
                >
                  {currentStepData.content}
                </motion.p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentStepData.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/50"
                    >
                      <div className={`bg-gradient-to-r ${currentStepData.gradient} text-white p-2 rounded-lg`}>
                        <feature.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button 
            onClick={handleNext}
            size="lg"
            className={`bg-gradient-to-r ${currentStepData.gradient} text-white border-0 hover:shadow-lg transition-all duration-300 px-8`}
          >
            {currentStep === steps.length - 1 ? 'Commencer l\'aventure' : 'Continuer'}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronRight className="h-5 w-5 ml-2" />
            </motion.div>
          </Button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default UserOnboarding;
