
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, User, Palette, Bell, Book, Shield, Download, Trash2, Moon, Sun, Monitor, Volume2, Quote, Sparkles, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useSettings } from "@/hooks/useSettings";
import { useToast } from "@/hooks/use-toast";
import GlobalHeader from "@/components/GlobalHeader";

const Settings = () => {
  const { 
    settings, 
    updateName, 
    updateTheme, 
    updateCountry, 
    updateSubjects,
    updateAnimatedBackgrounds,
    updateAnimatedBackgroundsLight,
    updateAnimatedBackgroundsDark,
    updateFontSize,
    updateAnimationSpeed,
    updateSoundEffects,
    updateNotifications,
    updateAutoSave,
    updateConcentrationMode,
    updateStudyReminders,
    updateMotivationalQuotes,
    updateReminderInterval,
    resetSettings
  } = useSettings();
  
  const { toast } = useToast();
  const [name, setName] = useState(settings.name);
  const [fontSize, setFontSize] = useState([settings.fontSize]);
  const [animationSpeed, setAnimationSpeed] = useState([settings.animationSpeed]);

  const countries = [
    "Maroc", "Algérie", "Tunisie", "France", "Canada", "Sénégal", "Côte d'Ivoire", "Mali"
  ];

  const allSubjects = [
    "Mathématiques", "Physique", "Français", "Arabe", "Histoire-Géo", "SVT", 
    "Anglais", "Espagnol", "Informatique", "Philosophie"
  ];

  const handleSave = () => {
    updateName(name);
    updateFontSize(fontSize[0]);
    updateAnimationSpeed(animationSpeed[0]);
    toast({
      title: "Paramètres sauvegardés",
      description: "Vos préférences ont été mises à jour avec succès.",
    });
  };

  const handleExportData = () => {
    const data = {
      settings,
      exportDate: new Date().toISOString(),
      version: "4.8.0"
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'eduplatform-data.json';
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Données exportées",
      description: "Vos données ont été téléchargées avec succès.",
    });
  };

  const handleResetSettings = () => {
    if (confirm("Êtes-vous sûr de vouloir réinitialiser tous vos paramètres ?")) {
      resetSettings();
      window.location.reload();
    }
  };

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        toast({
          title: "Notifications activées",
          description: "Vous recevrez maintenant des rappels d'étude.",
        });
      }
    }
  };

  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case 'light': return Sun;
      case 'dark': return Moon;
      case 'auto': return Monitor;
      default: return Monitor;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <GlobalHeader />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Paramètres</h1>
            <Badge variant="secondary">v4.8.0</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Profile Settings */}
            <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-600" />
                  Profil utilisateur
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Pays</Label>
                  <Select value={settings.country} onValueChange={updateCountry}>
                    <SelectTrigger>
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

                <div className="space-y-2">
                  <Label>Matières d'intérêt</Label>
                  <div className="flex flex-wrap gap-2">
                    {allSubjects.map((subject) => (
                      <Badge
                        key={subject}
                        variant={settings.subjects.includes(subject) ? "default" : "outline"}
                        className="cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => {
                          const newSubjects = settings.subjects.includes(subject)
                            ? settings.subjects.filter(s => s !== subject)
                            : [...settings.subjects, subject];
                          updateSubjects(newSubjects);
                        }}
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appearance Settings */}
            <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-purple-600" />
                  Apparence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Thème</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: 'light', label: 'Clair' },
                      { value: 'dark', label: 'Sombre' },
                      { value: 'auto', label: 'Auto' }
                    ].map((theme) => {
                      const IconComponent = getThemeIcon(theme.value);
                      return (
                        <Button
                          key={theme.value}
                          variant={settings.theme === theme.value ? "default" : "outline"}
                          className="flex flex-col gap-2 h-16 hover:scale-105 transition-all duration-200"
                          onClick={() => updateTheme(theme.value as any)}
                        >
                          <IconComponent className="h-4 w-4" />
                          <span className="text-xs">{theme.label}</span>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Taille de police: {fontSize[0]}px</Label>
                  <Slider
                    value={fontSize}
                    onValueChange={setFontSize}
                    max={24}
                    min={12}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Vitesse d'animation: {animationSpeed[0]}ms</Label>
                  <Slider
                    value={animationSpeed}
                    onValueChange={setAnimationSpeed}
                    max={500}
                    min={50}
                    step={10}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Animation Settings */}
            <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-600" />
                  Animations & Effets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Arrière-plans animés</Label>
                    <p className="text-sm text-muted-foreground">Contrôle global des animations</p>
                  </div>
                  <Switch
                    checked={settings.animatedBackgrounds}
                    onCheckedChange={updateAnimatedBackgrounds}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Animations (thème clair)</Label>
                    <p className="text-sm text-muted-foreground">Animations en mode clair</p>
                  </div>
                  <Switch
                    checked={settings.animatedBackgroundsLight}
                    onCheckedChange={updateAnimatedBackgroundsLight}
                    disabled={!settings.animatedBackgrounds}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Animations (thème sombre)</Label>
                    <p className="text-sm text-muted-foreground">Animations en mode sombre</p>
                  </div>
                  <Switch
                    checked={settings.animatedBackgroundsDark}
                    onCheckedChange={updateAnimatedBackgroundsDark}
                    disabled={!settings.animatedBackgrounds}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Volume2 className="h-4 w-4" />
                    <Label>Effets sonores</Label>
                  </div>
                  <Switch
                    checked={settings.soundEffects}
                    onCheckedChange={updateSoundEffects}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Motivational Features */}
            <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Quote className="h-5 w-5 text-pink-600" />
                  Citations & Motivation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Citations motivationnelles</Label>
                    <p className="text-sm text-muted-foreground">Barre de citation en haut de page</p>
                  </div>
                  <Switch
                    checked={settings.motivationalQuotes}
                    onCheckedChange={updateMotivationalQuotes}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Learning Preferences */}
            <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-green-600" />
                  Préférences d'apprentissage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Mode concentration</Label>
                    <p className="text-sm text-muted-foreground">Masque les distractions</p>
                  </div>
                  <Switch
                    checked={settings.concentrationMode}
                    onCheckedChange={updateConcentrationMode}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Sauvegarde automatique</Label>
                    <p className="text-sm text-muted-foreground">Sauvegarde votre progression</p>
                  </div>
                  <Switch
                    checked={settings.autoSave}
                    onCheckedChange={updateAutoSave}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Notifications & Reminders */}
            <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-orange-600" />
                  Notifications & Rappels
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notifications push</Label>
                    <p className="text-sm text-muted-foreground">Nouveaux cours et exercices</p>
                  </div>
                  <Switch
                    checked={settings.notifications}
                    onCheckedChange={updateNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Rappels d'étude</Label>
                    <p className="text-sm text-muted-foreground">Notifications de rappel</p>
                  </div>
                  <Switch
                    checked={settings.studyReminders}
                    onCheckedChange={updateStudyReminders}
                  />
                </div>

                {settings.studyReminders && (
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Fréquence des rappels
                    </Label>
                    <Select value={settings.reminderInterval} onValueChange={updateReminderInterval}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1day">Quotidien</SelectItem>
                        <SelectItem value="2days">Tous les 2 jours</SelectItem>
                        <SelectItem value="1week">Hebdomadaire</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {'Notification' in window && (
                  <Button
                    onClick={requestNotificationPermission}
                    variant="outline"
                    className="w-full hover:scale-105 transition-all duration-200"
                    disabled={Notification.permission === 'granted'}
                  >
                    {Notification.permission === 'granted' ? 'Notifications autorisées' : 'Autoriser les notifications'}
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-lg lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  Gestion des données
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button
                    onClick={handleSave}
                    className="flex items-center gap-2 hover:scale-105 transition-all duration-200"
                  >
                    <User className="h-4 w-4" />
                    Sauvegarder
                  </Button>
                  
                  <Button
                    onClick={handleExportData}
                    variant="outline"
                    className="flex items-center gap-2 hover:scale-105 transition-all duration-200"
                  >
                    <Download className="h-4 w-4" />
                    Exporter mes données
                  </Button>
                  
                  <Button
                    onClick={handleResetSettings}
                    variant="destructive"
                    className="flex items-center gap-2 hover:scale-105 transition-all duration-200"
                  >
                    <Trash2 className="h-4 w-4" />
                    Réinitialiser
                  </Button>
                </div>

                <Separator />
                
                <div className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Stockage local:</strong> Vos données sont stockées localement sur cet appareil.</p>
                  <p><strong>Confidentialité:</strong> Aucune donnée personnelle n'est transmise à des tiers.</p>
                  <p><strong>Sauvegarde:</strong> Exportez régulièrement vos données pour éviter leur perte.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
