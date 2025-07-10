import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sun, Moon, Monitor, BookOpen, Target, Sparkles } from "lucide-react";

const UserOnboarding = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("auto");

  useEffect(() => {
    const hasOnboarded = localStorage.getItem('hasOnboarded');
    if (!hasOnboarded) {
      setIsOpen(true);
    }
  }, []);

  const handleComplete = () => {
    localStorage.setItem('userName', name);
    localStorage.setItem('theme', theme);
    localStorage.setItem('hasOnboarded', 'true');
    
    // Apply theme immediately
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDark);
    }
    
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
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 text-white">
          <DialogHeader>
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-white/20 rounded-full p-2">
                <BookOpen className="h-6 w-6" />
              </div>
              <DialogTitle className="text-2xl font-bold">
                Bienvenue sur votre plateforme d'apprentissage !
              </DialogTitle>
            </div>
            <p className="text-indigo-100 text-sm">
              Configurons votre expérience personnalisée en quelques étapes
            </p>
          </DialogHeader>
        </div>

        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <Sparkles className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Comment devons-nous vous appeler ?
                </h3>
                <p className="text-gray-600 text-sm">
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

              <Button
                onClick={() => setStep(2)}
                disabled={!name.trim()}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-lg py-3"
              >
                Continuer
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Choisissez votre thème préféré
                </h3>
                <p className="text-gray-600 text-sm">
                  Vous pourrez toujours changer cela plus tard
                </p>
              </div>

              <RadioGroup value={theme} onValueChange={setTheme} className="space-y-3">
                {['light', 'dark', 'auto'].map((themeValue) => (
                  <div key={themeValue} className="flex items-center space-x-3 p-3 rounded-lg border-2 hover:border-indigo-200 transition-colors">
                    <RadioGroupItem value={themeValue} id={themeValue} />
                    <Label htmlFor={themeValue} className="flex items-center space-x-3 cursor-pointer flex-1">
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                        {getThemeIcon(themeValue)}
                      </div>
                      <div>
                        <div className="font-medium">{getThemeLabel(themeValue)}</div>
                        <div className="text-sm text-gray-500">
                          {themeValue === 'auto' && "S'adapte à votre système"}
                          {themeValue === 'light' && "Interface claire et lumineuse"}
                          {themeValue === 'dark' && "Interface sombre, reposante pour les yeux"}
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Retour
                </Button>
                <Button
                  onClick={handleComplete}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                >
                  Commencer l'apprentissage !
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserOnboarding;