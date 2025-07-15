
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useSettings } from "@/hooks/useSettings";
import { ArrowLeft, User, Palette, Save, Sun, Moon, Monitor, Trash2, GraduationCap, UserCheck, Calendar, BookMarked } from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  const { settings, updateName, updateTheme, updateUserType, updateAge, updateGrade, updateSubjects } = useSettings();
  const { toast } = useToast();
  const [tempName, setTempName] = useState(settings.name);
  const [tempAge, setTempAge] = useState(settings.age);
  const [tempGrade, setTempGrade] = useState(settings.grade);
  const [tempSubjects, setTempSubjects] = useState(settings.subjects);

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

  const handleSaveAge = () => {
    if (tempAge < 10 || tempAge > 100) {
      toast({
        title: "Erreur",
        description: "L'âge doit être entre 10 et 100 ans",
        variant: "destructive"
      });
      return;
    }
    
    updateAge(tempAge);
    toast({
      title: "Âge mis à jour",
      description: "Votre âge a été modifié avec succès",
    });
  };

  const handleSaveGrade = () => {
    updateGrade(tempGrade);
    toast({
      title: "Niveau mis à jour",
      description: "Votre niveau d'études a été modifié avec succès",
    });
  };

  const handleSaveSubjects = () => {
    updateSubjects(tempSubjects);
    toast({
      title: "Matières mises à jour",
      description: "Vos matières préférées ont été modifiées avec succès",
    });
  };

  const handleThemeChange = (theme: 'light' | 'dark' | 'auto') => {
    updateTheme(theme);
    toast({
      title: "Thème mis à jour",
      description: `Thème changé vers ${theme === 'light' ? 'clair' : theme === 'dark' ? 'sombre' : 'automatique'}`,
    });
  };

  const handleUserTypeChange = (userType: 'student' | 'teacher') => {
    updateUserType(userType);
    toast({
      title: "Type d'utilisateur mis à jour",
      description: `Vous êtes maintenant ${userType === 'student' ? 'étudiant(e)' : 'enseignant(e)'}`,
    });
  };

  const handleSubjectToggle = (subject: string) => {
    setTempSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
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

  const userTypeOptions = [
    { value: 'student', label: 'Étudiant(e)', icon: User, description: 'Je suis ici pour apprendre' },
    { value: 'teacher', label: 'Enseignant(e)', icon: GraduationCap, description: 'Je suis ici pour enseigner' }
  ];

  return (
    <div className="min-h-screen animated-bg">
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
              <Card className="glass-morphism">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Profil utilisateur
                  </CardTitle>
                  <CardDescription>
                    Modifiez vos informations personnelles
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Name */}
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
                        className="btn-hover-effect"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Sauvegarder
                      </Button>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="space-y-2">
                    <Label htmlFor="age">Âge</Label>
                    <div className="flex gap-2">
                      <Input
                        id="age"
                        type="number"
                        min="10"
                        max="100"
                        value={tempAge}
                        onChange={(e) => setTempAge(parseInt(e.target.value) || 16)}
                        className="flex-1"
                      />
                      <Button 
                        onClick={handleSaveAge}
                        disabled={tempAge === settings.age}
                        className="btn-hover-effect"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Sauvegarder
                      </Button>
                    </div>
                  </div>

                  {/* Grade */}
                  <div className="space-y-2">
                    <Label htmlFor="grade">Niveau d'études</Label>
                    <div className="flex gap-2">
                      <Select value={tempGrade} onValueChange={setTempGrade}>
                        <SelectTrigger className="flex-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {gradeOptions.map((grade) => (
                            <SelectItem key={grade} value={grade}>
                              {grade}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button 
                        onClick={handleSaveGrade}
                        disabled={tempGrade === settings.grade}
                        className="btn-hover-effect"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Sauvegarder
                      </Button>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <Badge variant="outline">
                      {settings.name || 'Non défini'}
                    </Badge>
                    <Badge variant="outline">
                      {settings.age} ans
                    </Badge>
                    <Badge variant="outline">
                      {settings.grade}
                    </Badge>
                    <Badge variant="outline">
                      {settings.userType === 'student' ? 'Étudiant(e)' : 'Enseignant(e)'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* User Type */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Card className="glass-morphism">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserCheck className="h-5 w-5" />
                    Type d'utilisateur
                  </CardTitle>
                  <CardDescription>
                    Changez votre rôle sur la plateforme
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {userTypeOptions.map((option) => {
                      const Icon = option.icon;
                      const isActive = settings.userType === option.value;
                      
                      return (
                        <motion.div
                          key={option.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant={isActive ? "default" : "outline"}
                            onClick={() => handleUserTypeChange(option.value as 'student' | 'teacher')}
                            className="w-full justify-start h-auto p-4 btn-hover-effect"
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

            {/* Subjects */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-morphism">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookMarked className="h-5 w-5" />
                    Matières préférées
                  </CardTitle>
                  <CardDescription>
                    Sélectionnez les matières qui vous intéressent
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {availableSubjects.map((subject) => (
                      <div
                        key={subject}
                        className="flex items-center space-x-3 p-3 rounded-lg border hover:border-indigo-200 transition-all cursor-pointer"
                      >
                        <Checkbox
                          id={subject}
                          checked={tempSubjects.includes(subject)}
                          onCheckedChange={() => handleSubjectToggle(subject)}
                        />
                        <Label htmlFor={subject} className="cursor-pointer text-sm font-medium">
                          {subject}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={handleSaveSubjects}
                    disabled={JSON.stringify(tempSubjects) === JSON.stringify(settings.subjects)}
                    className="w-full btn-hover-effect"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Sauvegarder les matières
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Theme Settings */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
            >
              <Card className="glass-morphism">
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
                            className="w-full justify-start h-auto p-4 btn-hover-effect"
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
              <Card className="glass-morphism border-red-200 dark:border-red-800">
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
                        Cela supprimera définitivement votre profil, vos préférences, et votre progression.
                      </p>
                      <Button 
                        variant="destructive" 
                        onClick={clearAllData}
                        className="bg-red-600 hover:bg-red-700 btn-hover-effect"
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
