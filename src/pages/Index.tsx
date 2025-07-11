
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookOpen, GraduationCap, Users, Award, Play, FileText, Video, Calendar, Clock, Target, Sparkles, Sun, Moon, Monitor, Settings, Maximize2, Bot, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UserOnboarding from "@/components/UserOnboarding";

const Index = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [userName] = useState(() => localStorage.getItem('userName') || 'Étudiant');
  const [showThemeSettings, setShowThemeSettings] = useState(false);
  const [showAI, setShowAI] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleThemeChange = (theme: string) => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      setIsDarkMode(true);
    } else if (theme === 'light') {
      setIsDarkMode(false);
    } else {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemDark);
    }
    setShowThemeSettings(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const subjects = [
    { 
      title: "Mathématiques", 
      description: "Découvrez l'algèbre, la géométrie et l'analyse avec des cours progressifs et des exercices interactifs adaptés au niveau Tronc Commun.",
      icon: BookOpen,
      color: "indigo",
      lessons: 15,
      link: "/lessons"
    },
    { 
      title: "Physique Chimie", 
      description: "Découvrez les lois de la physique et les secrets de la chimie avec des expériences virtuelles et des animations interactives.",
      icon: BarChart3,
      color: "emerald",
      lessons: 23,
      link: "/lessons"
    },
    { 
      title: "SVT", 
      description: "Explorez les sciences de la vie et de la terre avec des études de cas réels et des observations écologiques détaillées.",
      icon: Target,
      color: "green",
      lessons: 11,
      link: "/lessons"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      <UserOnboarding />
      <header className={`backdrop-blur-md border-b sticky top-0 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className={`h-8 w-8 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              EduPlatform
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className={`${isDarkMode ? 'text-indigo-400 border-indigo-400' : 'text-indigo-600 border-indigo-300'}`}>
              <Sparkles className="h-3 w-3 mr-1" />
              Nouvelle version
            </Badge>
            <Dialog open={showThemeSettings} onOpenChange={setShowThemeSettings}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={`${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300'}`}
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Paramètres</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <h4 className="font-medium mb-3">Thème d'affichage</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleThemeChange('light')}
                        className="flex flex-col items-center gap-2 p-4 h-auto"
                      >
                        <Sun className="h-4 w-4" />
                        <span className="text-xs">Clair</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleThemeChange('dark')}
                        className="flex flex-col items-center gap-2 p-4 h-auto"
                      >
                        <Moon className="h-4 w-4" />
                        <span className="text-xs">Sombre</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleThemeChange('auto')}
                        className="flex flex-col items-center gap-2 p-4 h-auto"
                      >
                        <Monitor className="h-4 w-4" />
                        <span className="text-xs">Auto</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleFullscreen}
              className={`${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300'}`}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Dialog open={showAI} onOpenChange={setShowAI}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={`${isDarkMode ? 'border-purple-400 text-purple-400 hover:bg-purple-900/20' : 'border-purple-600 text-purple-600 hover:bg-purple-50'}`}
                >
                  <Bot className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                <DialogHeader className="p-4 border-b">
                  <DialogTitle className="text-lg font-semibold flex items-center gap-2">
                    <Bot className="h-5 w-5" />
                    Assistant IA - Aide aux devoirs
                  </DialogTitle>
                </DialogHeader>
                <div className="flex-1 p-0">
                  <iframe 
                    src="https://studio.pickaxe.co/_embed/4EMPJ5JYJT?d=deployment-49947cc5-189a-4ecf-9af3-033927e297ef" 
                    style={{width: '100%', height: '100%', maxWidth: '100%', borderRadius: '0px'}} 
                    frameBorder="0"
                    className="h-full"
                  />
                </div>
              </DialogContent>
            </Dialog>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Par <span className={`font-semibold ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Yahia Ikni</span>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in ${isDarkMode ? 'text-white' : ''}`}>
            Bonjour {userName} 👋
          </h1>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Tronc Commun Sciences
          </h2>
          <p className={`text-xl mb-8 animate-fade-in leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Découvrez une plateforme moderne d'apprentissage avec des <strong>cours interactifs</strong>, 
            des <strong>exercices pratiques</strong> et des <strong>vidéos explicatives</strong> pour maîtriser les mathématiques, physique-chimie et SVT.
          </p>
          
          <div className={`flex justify-center space-x-8 mb-8 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>2 Semestres</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>49 Chapitres</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>30h+ de contenu</span>
            </div>
          </div>
          
          <Link to="/lessons">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <BookOpen className="mr-2 h-5 w-5" />
              Commencer l'apprentissage
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Une plateforme complète</h2>
          <p className="text-gray-600 text-lg">Tout ce dont vous avez besoin pour réussir en mathématiques</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">Cours Interactifs</CardTitle>
              <CardDescription className="leading-relaxed">
                Des présentations modernes et engageantes pour chaque chapitre avec des explications claires et progressives
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Badge variant="outline" className="text-indigo-600 border-indigo-300">
                <Play className="h-3 w-3 mr-1" />
                Slides dynamiques
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">Exercices Pratiques</CardTitle>
              <CardDescription className="leading-relaxed">
                Renforcez vos connaissances avec des exercices adaptés, des solutions détaillées et un suivi de progression
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Badge variant="outline" className="text-purple-600 border-purple-300">
                <Target className="h-3 w-3 mr-1" />
                Solutions détaillées
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Video className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">Vidéos YouTube</CardTitle>
              <CardDescription className="leading-relaxed">
                Complétez votre apprentissage avec des vidéos explicatives sélectionnées et des démonstrations visuelles
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Badge variant="outline" className="text-red-600 border-red-300">
                <Users className="h-3 w-3 mr-1" />
                Contenu vérifié
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Matières Disponibles</h2>
          <p className="text-gray-600">Explorez notre programme complet pour le Tronc Commun Sciences</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {subjects.map((subject, index) => (
            <Link key={index} to={subject.link}>
              <Card className={`bg-gradient-to-br from-${subject.color}-500 to-${subject.color}-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group`}>
                <CardContent className="p-6 text-center">
                  <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                    <subject.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{subject.title}</h3>
                  <p className={`text-${subject.color}-100 mb-3`}>Programme complet en {subject.lessons} chapitres</p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      <Calendar className="h-3 w-3 mr-1" />
                      2 semestres
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Prêt à commencer ?</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Rejoignez des milliers d'étudiants qui utilisent déjà notre plateforme pour réussir leurs études
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/lessons">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                <BookOpen className="h-4 w-4 mr-2" />
                Voir tous les cours
              </Button>
            </Link>
            <Link to="/lesson/1/course">
              <Button variant="outline" size="lg" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 transition-all duration-200">
                <Play className="h-4 w-4 mr-2" />
                Commencer le 1er cours
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-bold">EduPlatform</span>
            </div>
            <div className="text-center">
              <p className="text-gray-400">
                &copy; 2024 EduPlatform - Créé avec ❤️ par <span className="font-semibold text-indigo-400">Yahia Ikni</span>
              </p>
            </div>
            <div className="text-gray-400">
              <p className="text-sm">Version 2.0</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
