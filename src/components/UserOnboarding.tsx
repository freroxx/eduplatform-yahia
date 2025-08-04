
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSettings } from '@/hooks/useSettings';
import { BookOpen, GraduationCap, Sun, Moon, Monitor, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

const UserOnboarding = () => {
  const { completeOnboarding } = useSettings();
  const [step, setStep] = useState(0);
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
    { title: 'Matières', subtitle: 'Sélectionnez vos matières d\'intérêt' }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      completeOnboarding(
        formData.name,
        formData.theme,
        formData.userType,
        formData.country,
        formData.subjects
      );
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
      default:
        return false;
    }
  };

  const stepVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-full">
                <BookOpen className="h-8 w-8" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              EduPlatform v4.5
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Bienvenue dans la dernière version 4.5 !
            </p>
            
            {/* Progress Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index <= step ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}
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
                        className="mt-2 text-lg h-12"
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
                          className="flex-1 h-12"
                        >
                          <GraduationCap className="h-5 w-5 mr-2" />
                          Étudiant(e)
                        </Button>
                        <Button
                          type="button"
                          variant={formData.userType === 'teacher' ? 'default' : 'outline'}
                          onClick={() => setFormData(prev => ({ ...prev, userType: 'teacher' }))}
                          className="flex-1 h-12"
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
                        <SelectTrigger className="h-12">
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
                            className="h-12 flex-col space-y-1"
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
                            className={`h-12 justify-start ${
                              formData.subjects.includes(subject)
                                ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                : ''
                            }`}
                          >
                            {subject}
                            {formData.subjects.includes(subject) && (
                              <Badge className="ml-auto bg-indigo-500">✓</Badge>
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
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={step === 0}
                className="px-6"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Retour
              </Button>
              
              <Button
                type="button"
                onClick={handleNext}
                disabled={!canProceed()}
                className="px-6"
              >
                {step === steps.length - 1 ? 'Terminer' : 'Suivant'}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default UserOnboarding;
