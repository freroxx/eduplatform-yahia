import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Settings as SettingsIcon, User, Palette, Bell, Volume2, Save, Smartphone, Moon, Sun, Monitor, Zap, Focus, Quote, Calendar, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSettings } from '@/hooks/useSettings';
import { useToast } from '@/hooks/use-toast';
import GlobalHeader from '@/components/GlobalHeader';
import EnhancedLoadingBar from '@/components/EnhancedLoadingBar';

const Settings = () => {
  const { 
    settings, 
    updateName, 
    updateTheme, 
    updateUserType, 
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
    updateNotificationPermission,
    updateReminderInterval,
    resetSettings 
  } = useSettings();
  
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const availableSubjects = [
    "Mathématiques", "Physique-Chimie", "SVT", "Français", 
    "English", "العربية", "التاريخ والجغرافيا"
  ];

  const countries = [
    "Maroc", "Algérie", "Tunisie", "Égypte", "France", "Canada"
  ];

  const handleSave = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate save
    setUnsavedChanges(false);
    setIsLoading(false);
    
    toast({
      title: "Paramètres sauvegardés ✅",
      description: "Vos préférences ont été mises à jour avec succès."
    });
  };

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        updateNotificationPermission(permission === 'granted');
        
        if (permission === 'granted') {
          toast({
            title: "Notifications activées ✅",
            description: "Vous recevrez désormais des rappels d'étude."
          });
          
          // Send test notification
          new Notification('EduPlatform - Test', {
            body: 'Les notifications sont maintenant activées !',
            icon: '/favicon.ico'
          });
        } else {
          toast({
            title: "Notifications refusées ❌",
            description: "Vous pouvez activer les notifications dans les paramètres de votre navigateur.",
            variant: "destructive"
          });
        }
      } catch (error) {
        console.error('Error requesting notification permission:', error);
        toast({
          title: "Erreur",
          description: "Impossible d'activer les notifications.",
          variant: "destructive"
        });
      }
    } else {
      toast({
        title: "Non supporté",
        description: "Votre navigateur ne supporte pas les notifications.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen animated-bg">
      <EnhancedLoadingBar 
        isLoading={isLoading}
        message="Sauvegarde des paramètres..."
        color="green"
      />
      
      <GlobalHeader />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                Retour
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2">
                <SettingsIcon className="h-6 w-6 text-primary" />
                <h1 className="text-3xl font-bold">Paramètres</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {unsavedChanges && (
                <Badge variant="outline" className="text-orange-600 border-orange-300">
                  Modifications non sauvegardées
                </Badge>
              )}
              <Button 
                onClick={handleSave} 
                disabled={isLoading}
                className="bg-green-600 hover:bg-green-700"
              >
                <Save className="h-4 w-4 mr-2" />
                {isLoading ? 'Sauvegarde...' : 'Sauvegarder'}
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6">
          {/* Profile Settings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-effect hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-600" />
                  Profil Utilisateur
                </CardTitle>
                <CardDescription>
                  Informations personnelles et préférences d'apprentissage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom d'utilisateur</Label>
                    <input
                      id="name"
                      type="text"
                      value={settings.name}
                      onChange={(e) => {
                        updateName(e.target.value);
                        setUnsavedChanges(true);
                      }}
                      className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Entrez votre nom"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country">Pays</Label>
                    <Select value={settings.country} onValueChange={updateCountry}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map(country => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Type d'utilisateur</Label>
                  <div className="flex gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value="student"
                        checked={settings.userType === 'student'}
                        onChange={(e) => updateUserType(e.target.value as 'student' | 'teacher')}
                        className="text-blue-600"
                      />
                      <span>Étudiant</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value="teacher"
                        checked={settings.userType === 'teacher'}
                        onChange={(e) => updateUserType(e.target.value as 'student' | 'teacher')}
                        className="text-blue-600"
                      />
                      <span>Enseignant</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Theme & Display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-effect hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-purple-600" />
                  Thème et Affichage
                </CardTitle>
                <CardDescription>
                  Personnalisez l'apparence de l'interface
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Thème de l'interface</Label>
                  <div className="flex gap-3">
                    {[
                      { value: 'light', icon: Sun, label: 'Clair' },
                      { value: 'dark', icon: Moon, label: 'Sombre' },
                      { value: 'auto', icon: Monitor, label: 'Auto' }
                    ].map(({ value, icon: Icon, label }) => (
                      <button
                        key={value}
                        onClick={() => updateTheme(value as any)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                          settings.theme === value 
                            ? 'border-primary bg-primary/10 text-primary' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Arrière-plans animés</Label>
                      <p className="text-sm text-muted-foreground">Active les animations d'arrière-plan</p>
                    </div>
                    <Switch
                      checked={settings.animatedBackgrounds}
                      onCheckedChange={updateAnimatedBackgrounds}
                    />
                  </div>

                  {settings.animatedBackgrounds && (
                    <div className="ml-4 space-y-4 border-l-2 border-muted pl-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">Thème clair</Label>
                        <Switch
                          checked={settings.animatedBackgroundsLight}
                          onCheckedChange={updateAnimatedBackgroundsLight}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">Thème sombre</Label>
                        <Switch
                          checked={settings.animatedBackgroundsDark}
                          onCheckedChange={updateAnimatedBackgroundsDark}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Label>Taille de police: {settings.fontSize}px</Label>
                  <Slider
                    value={[settings.fontSize]}
                    onValueChange={(value) => updateFontSize(value[0])}
                    min={12}
                    max={24}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Vitesse d'animation: {settings.animationSpeed}ms</Label>
                  <Slider
                    value={[settings.animationSpeed]}
                    onValueChange={(value) => updateAnimationSpeed(value[0])}
                    min={50}
                    max={500}
                    step={50}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notifications & Reminders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-effect hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-orange-600" />
                  Notifications et Rappels
                </CardTitle>
                <CardDescription>
                  Configurez vos préférences de notification
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-5 w-5 text-blue-600" />
                      <div>
                        <Label>Autorisation du navigateur</Label>
                        <p className="text-sm text-muted-foreground">
                          Autorisez les notifications dans votre navigateur
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {settings.notificationPermission ? (
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          <Check className="h-3 w-3 mr-1" />
                          Autorisées
                        </Badge>
                      ) : (
                        <Badge variant="destructive">
                          <X className="h-3 w-3 mr-1" />
                          Non autorisées
                        </Badge>
                      )}
                      <Button
                        onClick={requestNotificationPermission}
                        size="sm"
                        variant={settings.notificationPermission ? "outline" : "default"}
                      >
                        {settings.notificationPermission ? "Tester" : "Autoriser"}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Rappels d'étude</Label>
                      <p className="text-sm text-muted-foreground">Recevez des rappels pour étudier</p>
                    </div>
                    <Switch
                      checked={settings.studyReminders}
                      onCheckedChange={updateStudyReminders}
                      disabled={!settings.notificationPermission}
                    />
                  </div>

                  {settings.studyReminders && settings.notificationPermission && (
                    <div className="ml-4 space-y-4 border-l-2 border-muted pl-4">
                      <div className="space-y-2">
                        <Label>Fréquence des rappels</Label>
                        <Select 
                          value={settings.reminderInterval} 
                          onValueChange={updateReminderInterval}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1day">Tous les jours</SelectItem>
                            <SelectItem value="2days">Tous les 2 jours</SelectItem>
                            <SelectItem value="1week">Toutes les semaines</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="flex items-center gap-2">
                      <Quote className="h-4 w-4" />
                      Citations motivationnelles
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Affiche une citation motivationnelle en haut de la page
                    </p>
                  </div>
                  <Switch
                    checked={settings.motivationalQuotes}
                    onCheckedChange={updateMotivationalQuotes}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Study Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-effect hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  Fonctionnalités d'Étude
                </CardTitle>
                <CardDescription>
                  Optimisez votre expérience d'apprentissage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="flex items-center gap-2">
                        <Volume2 className="h-4 w-4" />
                        Effets sonores
                      </Label>
                      <p className="text-sm text-muted-foreground">Sons de feedback</p>
                    </div>
                    <Switch
                      checked={settings.soundEffects}
                      onCheckedChange={updateSoundEffects}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Sauvegarde automatique</Label>
                      <p className="text-sm text-muted-foreground">Sauvegarde des progrès</p>
                    </div>
                    <Switch
                      checked={settings.autoSave}
                      onCheckedChange={updateAutoSave}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="flex items-center gap-2">
                        <Focus className="h-4 w-4" />
                        Mode concentration
                      </Label>
                      <p className="text-sm text-muted-foreground">Interface simplifiée</p>
                    </div>
                    <Switch
                      checked={settings.concentrationMode}
                      onCheckedChange={updateConcentrationMode}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Notifications générales</Label>
                      <p className="text-sm text-muted-foreground">Alertes de l'app</p>
                    </div>
                    <Switch
                      checked={settings.notifications}
                      onCheckedChange={updateNotifications}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Danger Zone */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-red-600 dark:text-red-400">
                  Zone de danger
                </CardTitle>
                <CardDescription>
                  Actions irréversibles - procédez avec prudence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="destructive" 
                  onClick={() => {
                    if (confirm('Êtes-vous sûr de vouloir réinitialiser tous les paramètres ?')) {
                      resetSettings();
                      toast({
                        title: "Paramètres réinitialisés",
                        description: "Tous vos paramètres ont été remis aux valeurs par défaut."
                      });
                    }
                  }}
                >
                  Réinitialiser tous les paramètres
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
