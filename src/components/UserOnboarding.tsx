import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSettings } from '@/hooks/useSettings';
import { useNavigate } from 'react-router-dom';
import { BookOpen, GraduationCap, Sun, Moon, Monitor, ChevronLeft, ChevronRight, Globe, Video, FileText, Play, Target, Users, Award, Sparkles } from 'lucide-react';
import ConfettiAnimation from './ConfettiAnimation';

const UserOnboarding = () => {
  const { completeOnboarding } = useSettings();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    theme: 'auto' as 'light' | 'dark' | 'auto',
    userType: 'student' as 'student' | 'teacher',
    country: 'Maroc',
    subjects: [] as string[]
  });

  const countries = [
    'Maroc', 'Algérie', 'Tunisie', 'France', 'Canada', 'Belgique', 'Suisse',
    'Sénégal', 'Côte d\'Ivoire', 'Mali', 'Burkina Faso', 'Niger', 'Mauritanie'
  ];

  const subjects = [
    'Mathématiques', 'Français', 'Arabe', 'Histoire-Géographie', 
    'Physique-Chimie', 'SVT', 'Philosophie', 'Anglais'
  ];

  const steps = [
    { title: 'Bienvenue', subtitle: 'Commençons par faire connaissance' },
    { title: 'Préférences', subtitle: 'Configurez votre expérience' },
    { title: 'Matières', subtitle: 'Sélectionnez vos matières d\'intérêt' },
    { title: 'Fonctionnalités', subtitle: 'Découvrez ce que vous pouvez faire' },
    { title: 'C\'est parti !', subtitle: 'Vous êtes prêt à commencer' }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // Trigger confetti before completing onboarding
      setShowConfetti(true);
      setTimeout(() => {
        completeOnboarding(
          formData.name,
          formData.theme,
          formData.userType,
          formData.country,
          formData.subjects
        );
        navigate('/');
      }, 1500);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const toggleSubject = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 0:
        return formData.name.trim().length > 0;
      case 1:
        return formData.theme && formData.userType && formData.country;
      case 2:
        return formData.subjects.length > 0;
      case 3:
      case 4:
        return true;
      default:
        return false;
    }
  };

  const stepVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const features = [
    {
      icon: BookOpen,
      title: 'Cours Interactifs',
      description: 'Des présentations modernes avec explications claires et progressives',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      delay: 0
    },
    {
      icon: FileText,
      title: 'Exercices Pratiques',
      description: 'Renforcez vos connaissances avec exercices adaptés et suivi de progression',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      delay: 0.1
    },
    {
      icon: Video,
      title: 'Vidéos Explicatives',
      description: 'Complétez votre apprentissage avec des vidéos YouTube sélectionnées',
      color: 'bg-gradient-to-br from-red-500 to-red-600',
      delay: 0.2
    },
    {
      icon: Target,
      title: 'Suivi Personnalisé',
      description: 'Suivez votre progression et identifiez points forts et axes d\'amélioration',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      delay: 0.3
    }
  ];

  return (
    <>
      <ConfettiAnimation trigger={showConfetti} />
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-2xl"
        >
          <Card className="glass-effect border-0 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <motion.div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-full"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <BookOpen className="h-8 w-8" />
                </motion.div>
              </div>
              <CardTitle className="text-3xl font-bold gradient-text">
                EduPlatform v4.5
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Bienvenue dans la dernière version 4.5 !
              </p>
              
              {/* Progress Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {steps.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index <= step ? 'bg-gradient-to-r from-indigo-500 to-purple-600' : 'bg-muted'
                    }`}
                    animate={index === step ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  />
                ))}
              </div>
              
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{steps[step].title}</h2>
                <p className="text-sm text-muted-foreground">{steps[step].subtitle}</p>
              </div>
            </CardHeader>

            <CardContent className="px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {step === 0 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-base font-medium">Comment vous appelez-vous ?</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Entrez votre nom"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="mt-2 text-lg h-12 focus-modern"
                          autoFocus
                        />
                      </div>
                      
                      <div>
                        <Label className="text-base font-medium mb-3 block">Vous êtes :</Label>
                        <div className="flex gap-4">
                          <Button
                            type="button"
                            variant={formData.userType === 'student' ? 'default' : 'outline'}
                            onClick={() => setFormData(prev => ({ ...prev, userType: 'student' }))}
                            className="flex-1 h-12 btn-modern"
                          >
                            <GraduationCap className="h-5 w-5 mr-2" />
                            Étudiant(e)
                          </Button>
                          <Button
                            type="button"
                            variant={formData.userType === 'teacher' ? 'default' : 'outline'}
                            onClick={() => setFormData(prev => ({ ...prev, userType: 'teacher' }))}
                            className="flex-1 h-12 btn-modern"
                          >
                            <BookOpen className="h-5 w-5 mr-2" />
                            Enseignant(e)
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <Label className="text-base font-medium mb-3 block">
                          <Globe className="h-4 w-4 inline mr-2" />
                          Votre pays
                        </Label>
                        <Select
                          value={formData.country}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
                        >
                          <SelectTrigger className="h-12 focus-modern">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-base font-medium mb-3 block">Thème préféré</Label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { value: 'light', label: 'Clair', icon: Sun },
                            { value: 'dark', label: 'Sombre', icon: Moon },
                            { value: 'auto', label: 'Auto', icon: Monitor }
                          ].map(({ value, label, icon: Icon }) => (
                            <Button
                              key={value}
                              type="button"
                              variant={formData.theme === value ? 'default' : 'outline'}
                              onClick={() => setFormData(prev => ({ ...prev, theme: value as any }))}
                              className="h-12 flex-col space-y-1 btn-modern"
                            >
                              <Icon className="h-4 w-4" />
                              <span className="text-xs">{label}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <Label className="text-base font-medium mb-4 block">
                          Sélectionnez vos matières d'intérêt
                        </Label>
                        <div className="grid grid-cols-2 gap-3">
                          {subjects.map((subject) => (
                            <Button
                              key={subject}
                              type="button"
                              variant="outline"
                              onClick={() => toggleSubject(subject)}
                              className={`h-12 justify-start btn-modern ${
                                formData.subjects.includes(subject)
                                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-500 text-indigo-700 dark:from-indigo-950/50 dark:to-purple-950/50'
                                  : ''
                              }`}
                            >
                              {subject}
                              {formData.subjects.includes(subject) && (
                                <Badge className="ml-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white">✓</Badge>
                              )}
                            </Button>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {formData.subjects.length} matière(s) sélectionnée(s)
                        </p>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <div className="text-center mb-6">
                        <h3 className="text-lg font-semibold mb-2 gradient-text">Découvrez EduPlatform v4.5</h3>
                        <p className="text-muted-foreground">Voici ce que vous pouvez faire avec la plateforme</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: feature.delay }}
                            className="p-4 rounded-lg border bg-card hover-lift"
                          >
                            <div className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center mb-3`}>
                              <feature.icon className="h-5 w-5 text-white" />
                            </div>
                            <h4 className="font-medium text-sm mb-1">{feature.title}</h4>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="text-center space-y-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center"
                      >
                        <Sparkles className="h-8 w-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold gradient-text mb-2">
                          Félicitations, {formData.name} !
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Votre profil est maintenant configuré. Vous êtes prêt(e) à commencer votre apprentissage sur EduPlatform v4.5.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                          <Badge variant="secondary" className="hover-scale">
                            <Users className="h-3 w-3 mr-1" />
                            {formData.userType === 'student' ? 'Étudiant(e)' : 'Enseignant(e)'}
                          </Badge>
                          <Badge variant="secondary" className="hover-scale">
                            <Globe className="h-3 w-3 mr-1" />
                            {formData.country}
                          </Badge>
                          <Badge variant="secondary" className="hover-scale">
                            <Award className="h-3 w-3 mr-1" />
                            {formData.subjects.length} matières
                          </Badge>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={step === 0}
                  className="px-6 btn-modern"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Retour
                </Button>
                
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="px-6 btn-modern hover-glow"
                >
                  {step === steps.length - 1 ? (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Commencer
                    </>
                  ) : (
                    <>
                      Suivant
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default UserOnboarding;
