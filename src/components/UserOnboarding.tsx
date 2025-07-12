import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sun, Moon, Monitor, BookOpen, Target, Sparkles } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";

const UserOnboarding = () => {
  const { settings, completeOnboarding } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>("auto");

  useEffect(() => {
    if (!settings.hasOnboarded) {
      setIsOpen(true);
    }
  }, [settings.hasOnboarded]);

  const handleComplete = () => {
    completeOnboarding(name, theme);
    setIsOpen(false);
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

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={() => {}}>
          <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 text-white"
            >
              <DialogHeader>
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
                    Bienvenue sur votre plateforme d'apprentissage !
                  </DialogTitle>
                </div>
                <p className="text-indigo-100 text-sm">
                  Configurons votre expérience personnalisée en quelques étapes
                </p>
              </DialogHeader>
            </motion.div>

            <div className="p-6">
              <AnimatePresence mode="wait">
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
                        Votre nom nous aidera à personnaliser votre expérience d'apprentissage
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

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={() => setStep(2)}
                        disabled={!name.trim()}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-lg py-3 transition-all duration-200"
                      >
                        Continuer
                      </Button>
                    </motion.div>
                  </motion.div>
                )}

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
                        Choisissez votre thème préféré
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Vous pourrez toujours changer cela plus tard
                      </p>
                    </div>

                    <RadioGroup value={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark' | 'auto')} className="space-y-3">
                      {(['light', 'dark', 'auto'] as const).map((themeValue, index) => (
                        <motion.div
                          key={themeValue}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center space-x-3 p-3 rounded-lg border-2 hover:border-indigo-200 dark:hover:border-indigo-400 transition-all duration-200 cursor-pointer"
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
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <Button
                          variant="outline"
                          onClick={() => setStep(1)}
                          className="w-full transition-all duration-200"
                        >
                          Retour
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <Button
                          onClick={handleComplete}
                          className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-200"
                        >
                          Commencer l'apprentissage !
                        </Button>
                      </motion.div>
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