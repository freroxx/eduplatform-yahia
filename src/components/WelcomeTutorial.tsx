import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, FileText, Video, Target, ChevronLeft, ChevronRight } from 'lucide-react';

interface WelcomeTutorialProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeTutorial = ({ isOpen, onClose }: WelcomeTutorialProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const tutorialSteps = [
    {
      title: 'Bienvenue sur EduPlatform v4.5',
      description: 'Découvrez comment utiliser la plateforme pour maximiser votre apprentissage',
      icon: BookOpen,
      content: (
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            EduPlatform v4.5 est conçu spécialement pour le Tronc Commun Sciences.
            Suivez ce guide rapide pour découvrir toutes les fonctionnalités.
          </p>
        </div>
      )
    },
    {
      title: 'Navigation par matières',
      description: 'Accédez facilement à vos cours',
      icon: BookOpen,
      content: (
        <div>
          <p className="text-muted-foreground mb-4">
            Cliquez sur une matière depuis la page d'accueil pour accéder à :
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><BookOpen className="h-4 w-4 mr-2 text-indigo-500" /> Cours interactifs</li>
            <li className="flex items-center"><FileText className="h-4 w-4 mr-2 text-green-500" /> Exercices pratiques</li>
            <li className="flex items-center"><Video className="h-4 w-4 mr-2 text-red-500" /> Vidéos explicatives</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Cours interactifs',
      description: 'Apprenez avec des présentations modernes',
      icon: FileText,
      content: (
        <div>
          <p className="text-muted-foreground mb-4">
            Chaque cours inclut :
          </p>
          <ul className="space-y-2 text-sm">
            <li>• Explications détaillées et progressives</li>
            <li>• Exemples concrets et illustrations</li>
            <li>• Navigation facile entre les sections</li>
            <li>• Contenu adapté au programme officiel</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Exercices et suivi',
      description: 'Testez vos connaissances',
      icon: Target,
      content: (
        <div>
          <p className="text-muted-foreground mb-4">
            Renforcez votre apprentissage avec :
          </p>
          <ul className="space-y-2 text-sm">
            <li>• Exercices variés et progressifs</li>
            <li>• Corrections détaillées</li>
            <li>• Suivi de votre progression</li>
            <li>• Conseils personnalisés</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Prêt à commencer !',
      description: 'Votre aventure d\'apprentissage commence maintenant',
      icon: BookOpen,
      content: (
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Vous avez maintenant toutes les clés pour réussir avec EduPlatform v4.5.
          </p>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-4 rounded-lg">
            <p className="text-sm font-medium">
              💡 Conseil : Commencez par explorer une matière qui vous intéresse le plus !
            </p>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = tutorialSteps[currentStep];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg" hideCloseButton>
        <DialogHeader>
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-full">
                <currentStepData.icon className="h-6 w-6" />
              </div>
            </div>

            <div className="flex justify-center space-x-2 mb-4">
              {tutorialSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index <= currentStep ? 'bg-indigo-600' : 'bg-gray-200'
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
              <CardContent className="p-6">
                {currentStepData.content}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Précédent
          </Button>
          
          <Button onClick={handleNext}>
            {currentStep === tutorialSteps.length - 1 ? 'Terminer' : 'Suivant'}
            {currentStep < tutorialSteps.length - 1 && <ChevronRight className="h-4 w-4 ml-2" />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeTutorial;
