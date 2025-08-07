
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, FileText, Video, Target, ChevronLeft, ChevronRight, Play, Image, Zap, Users } from 'lucide-react';

interface WelcomeTutorialProps {
  isOpen: boolean;
  onComplete: () => void;
}

const WelcomeTutorial = ({ isOpen, onComplete }: WelcomeTutorialProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const tutorialSteps = [
    {
      title: 'Bienvenue sur EduPlatform v5.5',
      description: 'Découvrez toutes les nouveautés de cette version',
      icon: BookOpen,
      gradient: 'from-blue-500 to-indigo-600',
      content: (
        <div className="text-center space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground mb-4 text-lg"
          >
            EduPlatform v5.5 apporte une expérience d'apprentissage révolutionnaire avec de nouvelles fonctionnalités et une interface entièrement repensée.
          </motion.p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Animations fluides</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <Image className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Visionneuse avancée</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Navigation par matières',
      description: 'Accédez facilement à vos cours',
      icon: BookOpen,
      gradient: 'from-green-500 to-emerald-600',
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground mb-4">
            Cliquez sur une matière depuis la page d'accueil pour accéder à :
          </p>
          <div className="grid gap-3">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border"
            >
              <BookOpen className="h-5 w-5 text-indigo-500" />
              <div>
                <div className="font-medium">Cours interactifs</div>
                <div className="text-sm text-muted-foreground">Leçons détaillées avec animations</div>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border"
            >
              <FileText className="h-5 w-5 text-green-500" />
              <div>
                <div className="font-medium">Exercices pratiques</div>
                <div className="text-sm text-muted-foreground">Entraînement avec corrections</div>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border"
            >
              <Video className="h-5 w-5 text-red-500" />
              <div>
                <div className="font-medium">Vidéos explicatives</div>
                <div className="text-sm text-muted-foreground">Ressources YouTube intégrées</div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      title: 'Nouveaux lecteurs multimédias',
      description: 'Expérience visuelle améliorée',
      icon: Play,
      gradient: 'from-purple-500 to-pink-600',
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground mb-4">
            Profitez des nouveaux lecteurs multimédias :
          </p>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Image className="h-5 w-5 text-purple-600" />
                <span className="font-medium">Visionneuse d'images</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Zoom et navigation fluide</li>
                <li>• Mode plein écran</li>
                <li>• Support multi-images</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Play className="h-5 w-5 text-red-600" />
                <span className="font-medium">Lecteur vidéo intégré</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Lecture YouTube directe</li>
                <li>• Contrôles avancés</li>
                <li>• Interface moderne</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Cours et exercices',
      description: 'Contenu pédagogique enrichi',
      icon: FileText,
      gradient: 'from-orange-500 to-red-600',
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground mb-4">
            Chaque cours inclut désormais :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Mathématiques</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 15 modules complets</li>
                <li>• Images géométriques intégrées</li>
                <li>• Exercices corrigés</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Physique-Chimie</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 23 modules structurés</li>
                <li>• 2 semestres organisés</li>
                <li>• Vidéos et exercices</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Suivi et communauté',
      description: 'Restez motivé et connecté',
      icon: Users,
      gradient: 'from-cyan-500 to-blue-600',
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground mb-4">
            Maximisez votre apprentissage avec :
          </p>
          <div className="grid gap-4">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-5 w-5 text-cyan-600" />
                <span className="font-medium">Suivi de progression</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Statistiques détaillées, badges et objectifs personnalisés
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-5 w-5 text-green-600" />
                <span className="font-medium">Communauté active</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Échangez avec d'autres étudiants et partagez vos réussites
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Prêt à exceller !',
      description: 'Votre réussite commence maintenant',
      icon: Target,
      gradient: 'from-yellow-500 to-orange-600',
      content: (
        <div className="text-center space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground mb-4 text-lg"
          >
            Vous avez maintenant toutes les clés pour réussir avec EduPlatform v5.5.
          </motion.p>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 p-6 rounded-xl border">
            <div className="flex items-center justify-center gap-3 mb-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Target className="h-6 w-6 text-yellow-600" />
              </motion.div>
              <h4 className="font-bold text-lg">Conseil de pro</h4>
            </div>
            <p className="text-sm font-medium text-center">
              Commencez par la matière qui vous passionne le plus pour maintenir votre motivation !
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
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = tutorialSteps[currentStep];

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-3xl border-0 bg-gradient-to-br from-background to-secondary/30" hideCloseButton>
        <DialogHeader>
          <div className="text-center mb-8">
            <motion.div
              key={currentStep}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className={`bg-gradient-to-r ${currentStepData.gradient} text-white p-4 rounded-full shadow-xl`}>
                <currentStepData.icon className="h-8 w-8" />
              </div>
            </motion.div>

            <div className="flex justify-center space-x-2 mb-6">
              {tutorialSteps.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    width: index === currentStep ? 24 : 8
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index <= currentStep ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>

            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              {currentStepData.title}
            </DialogTitle>
            <p className="text-muted-foreground text-lg">{currentStepData.description}</p>
          </div>
        </DialogHeader>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mb-8 border-0 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-8">
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
            className="px-6"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Précédent
          </Button>
          
          <Button 
            onClick={handleNext}
            className={`bg-gradient-to-r ${currentStepData.gradient} text-white border-0 px-6`}
          >
            {currentStep === tutorialSteps.length - 1 ? 'Commencer' : 'Suivant'}
            {currentStep < tutorialSteps.length - 1 && <ChevronRight className="h-4 w-4 ml-2" />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeTutorial;
