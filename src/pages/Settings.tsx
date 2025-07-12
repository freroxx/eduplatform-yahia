import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useSettings } from "@/hooks/useSettings";
import { ArrowLeft, User, Palette, Save, Sun, Moon, Monitor, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  const { settings, updateName, updateTheme } = useSettings();
  const { toast } = useToast();
  const [tempName, setTempName] = useState(settings.name);

  const handleSaveName = () => {
    if (!tempName.trim()) {
      toast({
        title: "Erreur",
        description: "Le nom ne peut pas être vide",
        variant: "destructive"
      });
      return;
    }
    
    updateName(tempName.trim());
    toast({
      title: "Nom mis à jour",
      description: "Votre nom a été modifié avec succès",
    });
  };

  const handleThemeChange = (theme: 'light' | 'dark' | 'auto') => {
    updateTheme(theme);
    toast({
      title: "Thème mis à jour",
      description: `Thème changé vers ${theme === 'light' ? 'clair' : theme === 'dark' ? 'sombre' : 'automatique'}`,
    });
  };

  const clearAllData = () => {
    if (confirm("Êtes-vous sûr de vouloir effacer toutes vos données ? Cette action est irréversible.")) {
      localStorage.clear();
      toast({
        title: "Données effacées",
        description: "Toutes vos données ont été supprimées",
      });
      window.location.reload();
    }
  };

  const themeOptions = [
    { value: 'light', label: 'Clair', icon: Sun, description: 'Interface claire et lumineuse' },
    { value: 'dark', label: 'Sombre', icon: Moon, description: 'Interface sombre, reposante pour les yeux' },
    { value: 'auto', label: 'Automatique', icon: Monitor, description: "S'adapte à votre système" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Paramètres</h1>
          </div>

          <div className="grid gap-6">
            {/* Profile Settings */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Profil utilisateur
                  </CardTitle>
                  <CardDescription>
                    Modifiez vos informations personnelles
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <div className="flex gap-2">
                      <Input
                        id="name"
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        placeholder="Votre nom complet"
                        className="flex-1"
                      />
                      <Button 
                        onClick={handleSaveName}
                        disabled={tempName === settings.name}
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Sauvegarder
                      </Button>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Badge variant="outline">
                      Nom actuel: {settings.name || 'Non défini'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Theme Settings */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Apparence
                  </CardTitle>
                  <CardDescription>
                    Personnalisez l'apparence de l'application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {themeOptions.map((option) => {
                      const Icon = option.icon;
                      const isActive = settings.theme === option.value;
                      
                      return (
                        <motion.div
                          key={option.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant={isActive ? "default" : "outline"}
                            onClick={() => handleThemeChange(option.value as 'light' | 'dark' | 'auto')}
                            className="w-full justify-start h-auto p-4"
                          >
                            <div className="flex items-center gap-4 w-full">
                              <div className={`p-2 rounded-full ${isActive ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="text-left flex-1">
                                <div className="font-medium">{option.label}</div>
                                <div className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                                  {option.description}
                                </div>
                              </div>
                              {isActive && (
                                <Badge variant="secondary" className="bg-white/20 text-white">
                                  Actif
                                </Badge>
                              )}
                            </div>
                          </Button>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Data Management */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <Trash2 className="h-5 w-5" />
                    Zone de danger
                  </CardTitle>
                  <CardDescription>
                    Actions irréversibles sur vos données
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-900/20">
                      <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">
                        Effacer toutes les données
                      </h4>
                      <p className="text-sm text-red-600 dark:text-red-300 mb-4">
                        Cela supprimera définitivement votre nom, vos préférences, et votre progression dans les exercices.
                      </p>
                      <Button 
                        variant="destructive" 
                        onClick={clearAllData}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Effacer toutes les données
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;