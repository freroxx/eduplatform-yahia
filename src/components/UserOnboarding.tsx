
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sun, Moon, Monitor, BookOpen, Target, Sparkles, User, GraduationCap, UserCheck, Calendar, BookMarked } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";

const UserOnboarding = () => {
  const { settings, completeOnboarding } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>("auto");
  const [userType, setUserType] = useState<'student' | 'teacher'>("student");
  const [age, setAge] = useState(16);
  const [grade, setGrade] = useState("Tronc Commun Sciences");
  const [subjects, setSubjects] = useState<string[]>([]);

  const availableSubjects = [
    "Mathématiques", "Physique Chimie", "SVT", "Français", "العربية", "Anglais", "Histoire-Géographie"
  ];

  const gradeOptions = [
    "Tronc Commun Sciences",
    "Tronc Commun Lettres",
    "1ère Bac Sciences Mathématiques",
    "1ère Bac Sciences Expérimentales",
    "1ère Bac Sciences et Technologies Électriques",
    "1ère Bac Sciences Économiques",
    "1ère Bac Lettres",
    "2ème Bac Sciences Mathématiques",
    "2ème Bac Sciences Expérimentales",
    "2ème Bac Sciences et Technologies Électriques",
    "2ème Bac Sciences Économiques",
    "2ème Bac Lettres"
  ];

  useEffect(() => {
    if (!settings.hasOnboarded) {
      setIsOpen(true);
    }
  }, [settings.hasOnboarded]);

  const handleComplete = () => {
    completeOnboarding(name, theme, userType, age, grade, subjects);
    setIsOpen(false);
  };

  const handleSubjectToggle = (subject: string) => {
    setSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
  };

  const getThemeIcon = (themeValue: string) => {
    switch (themeValue) {
      case 'light': return <Sun className="h-4 w-4" />;
      case 'dark': return <Moon className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  const getThemeLabel = (themeValue: string) => {
    switch (themeValue) {
      case 'light': return 'Clair';
      case 'dark': return 'Sombre';
      default: return 'Automatique';
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={() => {}}>
          <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 p-6 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
              <DialogHeader className="relative z-10">
                <div className="flex items-center space-x-3 mb-2">
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-white/20 rounded-full p-2"
                  >
                    <BookOpen className="h-6 w-6" />
                  </motion.div>
                  <DialogTitle className="text-2xl font-bold">
                    Bienvenue sur EduPlatform !
                  </DialogTitle>
                </div>
                <p className="text-indigo-100 text-sm">
                  Étape {step} sur 5 - Personnalisons votre expérience d'apprentissage
                </p>
                <div className="w-full bg-white/20 rounded-full h-2 mt-4">
                  <motion.div 
                    className="bg-white rounded-full h-2"
                    initial={{ width: "20%" }}
                    animate={{ width: `${(step / 5) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </DialogHeader>
            </motion.div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                {/* Step 1: Name */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        <Sparkles className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Comment devons-nous vous appeler ?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Votre nom nous aidera à personnaliser votre expérience
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-base font-medium">
                        Votre prénom ou nom complet
                      </Label>
                      <Input
                        id="name"
                        placeholder="Ex: Ahmed, Fatima, Mohamed..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-lg p-3 border-2 focus:border-indigo-500"
                        autoFocus
                      />
                    </div>

                    <Button
                      onClick={nextStep}
                      disabled={!name.trim()}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-lg py-3"
                    >
                      Continuer
                    </Button>
                  </motion.div>
                )}

                {/* Step 2: User Type */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Êtes-vous étudiant(e) ou enseignant(e) ?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Cela nous aidera à adapter le contenu à vos besoins
                      </p>
                    </div>

                    <RadioGroup value={userType} onValueChange={(value) => setUserType(value as 'student' | 'teacher')} className="space-y-4">
                      {[
                        { value: 'student', label: 'Étudiant(e)', icon: User, desc: 'Je suis ici pour apprendre' },
                        { value: 'teacher', label: 'Enseignant(e)', icon: GraduationCap, desc: 'Je suis ici pour enseigner' }
                      ].map((option) => (
                        <motion.div
                          key={option.value}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center space-x-3 p-4 rounded-lg border-2 hover:border-indigo-200 transition-all cursor-pointer"
                        >
                          <RadioGroupItem value={option.value} id={option.value} />
                          <Label htmlFor={option.value} className="flex items-center space-x-3 cursor-pointer flex-1">
                            <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full">
                              <option.icon className="h-5 w-5 text-indigo-600" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-800 dark:text-gray-200">{option.label}</div>
                              <div className="text-sm text-gray-500">{option.desc}</div>
                            </div>
                          </Label>
                        </motion.div>
                      ))}
                    </RadioGroup>

                    <div className="flex space-x-3">
                      <Button variant="outline" onClick={prevStep} className="flex-1">
                        Retour
                      </Button>
                      <Button onClick={nextStep} className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                        Continuer
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Age and Grade */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        <Calendar className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Quelques informations supplémentaires
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Aidez-nous à personnaliser votre expérience
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="age" className="text-base font-medium mb-2 block">
                          Votre âge
                        </Label>
                        <Input
                          id="age"
                          type="number"
                          min="10"
                          max="100"
                          value={age}
                          onChange={(e) => setAge(parseInt(e.target.value) || 16)}
                          className="text-lg p-3"
                        />
                      </div>

                      <div>
                        <Label htmlFor="grade" className="text-base font-medium mb-2 block">
                          Votre niveau d'études
                        </Label>
                        <Select value={grade} onValueChange={setGrade}>
                          <SelectTrigger className="text-lg p-3">
                            <SelectValue placeholder="Sélectionnez votre niveau" />
                          </SelectTrigger>
                          <SelectContent>
                            {gradeOptions.map((gradeOption) => (
                              <SelectItem key={gradeOption} value={gradeOption}>
                                {gradeOption}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button variant="outline" onClick={prevStep} className="flex-1">
                        Retour
                      </Button>
                      <Button onClick={nextStep} className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                        Continuer
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Subjects */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        <BookMarked className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Quelles matières vous intéressent ?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Sélectionnez les matières que vous souhaitez étudier
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {availableSubjects.map((subject) => (
                        <motion.div
                          key={subject}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center space-x-3 p-3 rounded-lg border hover:border-indigo-200 transition-all cursor-pointer"
                        >
                          <Checkbox
                            id={subject}
                            checked={subjects.includes(subject)}
                            onCheckedChange={() => handleSubjectToggle(subject)}
                          />
                          <Label htmlFor={subject} className="cursor-pointer text-sm font-medium">
                            {subject}
                          </Label>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button variant="outline" onClick={prevStep} className="flex-1">
                        Retour
                      </Button>
                      <Button onClick={nextStep} className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                        Continuer
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Theme */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        <UserCheck className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Choisissez votre thème préféré
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Vous pourrez toujours changer cela plus tard
                      </p>
                    </div>

                    <RadioGroup value={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark' | 'auto')} className="space-y-3">
                      {(['light', 'dark', 'auto'] as const).map((themeValue) => (
                        <motion.div
                          key={themeValue}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center space-x-3 p-3 rounded-lg border-2 hover:border-indigo-200 transition-all cursor-pointer"
                        >
                          <RadioGroupItem value={themeValue} id={themeValue} />
                          <Label htmlFor={themeValue} className="flex items-center space-x-3 cursor-pointer flex-1">
                            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full">
                              {getThemeIcon(themeValue)}
                            </div>
                            <div>
                              <div className="font-medium text-gray-800 dark:text-gray-200">{getThemeLabel(themeValue)}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {themeValue === 'auto' && "S'adapte à votre système"}
                                {themeValue === 'light' && "Interface claire et lumineuse"}
                                {themeValue === 'dark' && "Interface sombre, reposante pour les yeux"}
                              </div>
                            </div>
                          </Label>
                        </motion.div>
                      ))}
                    </RadioGroup>

                    <div className="flex space-x-3">
                      <Button variant="outline" onClick={prevStep} className="flex-1">
                        Retour
                      </Button>
                      <Button
                        onClick={handleComplete}
                        className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold"
                      >
                        Commencer l'apprentissage ! 🚀
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default UserOnboarding;
