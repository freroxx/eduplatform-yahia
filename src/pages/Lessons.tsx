
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, ArrowLeft, Calendar, Clock, Target, Maximize2, Sun, Moon, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Lessons = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (saved === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [userName] = useState(() => localStorage.getItem('userName') || 'Étudiant');
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

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
      id: 'math', 
      name: 'Mathématiques', 
      description: 'Algèbre, géométrie et analyse',
      color: 'indigo',
      chapters: 15 
    },
    { 
      id: 'physics', 
      name: 'Physique Chimie', 
      description: 'Mécanique, électricité et chimie',
      color: 'emerald',
      chapters: 23 
    }
  ];
  
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const semester1Lessons = [
    {
      id: 1,
      title: "Les ensembles de nombres N, Z, Q, D et R",
      description: "Introduction aux différents ensembles de nombres et leurs propriétés",
      duration: "45 min",
      difficulty: "Facile",
      hasVideos: true
    },
    {
      id: 2,
      title: "Arithmétique dans IN",
      description: "Division euclidienne, PGCD, PPCM et nombres premiers",
      duration: "50 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 3,
      title: "Calcul vectoriel dans le plan",
      description: "Vecteurs, opérations vectorielles et applications géométriques",
      duration: "60 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 4,
      title: "La projection dans le plan",
      description: "Projections orthogonales et leurs applications",
      duration: "40 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 5,
      title: "L'ordre dans IR",
      description: "Inégalités, intervalles et valeur absolue",
      duration: "35 min",
      difficulty: "Facile",
      hasVideos: true
    },
    {
      id: 6,
      title: "La droite dans le plan",
      description: "Équations de droites et positions relatives",
      duration: "45 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 7,
      title: "Les polynômes",
      description: "Définition, opérations et factorisation des polynômes",
      duration: "55 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 8,
      title: "Équations, inéquations et systèmes",
      description: "Résolution d'équations et systèmes d'équations",
      duration: "50 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 9,
      title: "Trigonométrie 1 (Règles du calcul trigonométrique)",
      description: "Fonctions trigonométriques et identités remarquables",
      duration: "65 min",
      difficulty: "Difficile",
      hasVideos: true
    }
  ];

  const semester2Lessons = [
    {
      id: 10,
      title: "Trigonométrie 2 (Équations et inéquations trigonométriques)",
      description: "Résolution d'équations et inéquations trigonométriques",
      duration: "55 min",
      difficulty: "Difficile",
      hasVideos: false
    },
    {
      id: 11,
      title: "Généralités sur les fonctions",
      description: "Définition, domaine, image et représentation graphique des fonctions",
      duration: "50 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 12,
      title: "Transformations du plan",
      description: "Symétries, rotations, translations et homothéties",
      duration: "60 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 13,
      title: "Le produit scalaire",
      description: "Définition, propriétés et applications du produit scalaire",
      duration: "45 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 14,
      title: "Géométrie dans l'espace",
      description: "Droites, plans et positions relatives dans l'espace",
      duration: "55 min",
      difficulty: "Difficile",
      hasVideos: false
    },
    {
      id: 15,
      title: "Statistiques",
      description: "Paramètres de position et de dispersion",
      duration: "40 min",
      difficulty: "Moyen",
      hasVideos: true
    }
  ];

  const physicsLessons = [
    {
      id: 101,
      title: "La gravitation universelle",
      description: "Loi de Newton, force gravitationnelle et applications",
      duration: "50 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 102,
      title: "Exemples d'actions mécaniques",
      description: "Forces de contact, forces à distance et leurs effets",
      duration: "45 min",
      difficulty: "Facile",
      hasVideos: true
    },
    {
      id: 103,
      title: "Le mouvement",
      description: "Cinématique, trajectoire et référentiels",
      duration: "55 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 104,
      title: "Le principe d'inertie",
      description: "Première loi de Newton et ses applications",
      duration: "40 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 105,
      title: "Équilibre d'un corps sous l'action de 2 forces",
      description: "Tension d'un ressort et poussée d'Archimède",
      duration: "60 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 106,
      title: "Équilibre d'un corps sous l'action de 3 forces",
      description: "Conditions d'équilibre et résolution graphique",
      duration: "55 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 107,
      title: "Équilibre d'un solide en rotation autour d'un axe fixe",
      description: "Moment d'une force et équilibre rotationnel",
      duration: "50 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 108,
      title: "Les espèces chimiques",
      description: "Atomes, molécules et ions",
      duration: "45 min",
      difficulty: "Facile",
      hasVideos: true
    },
    {
      id: 109,
      title: "Extraction, séparation et identification des espèces chimiques",
      description: "Techniques expérimentales en chimie",
      duration: "65 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 110,
      title: "Synthèse des espèces chimiques",
      description: "Réactions de synthèse et rendement",
      duration: "50 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 111,
      title: "Le modèle de l'atome",
      description: "Structure atomique et configuration électronique",
      duration: "55 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 112,
      title: "La géométrie de quelques molécules",
      description: "VSEPR et formes moléculaires",
      duration: "40 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 113,
      title: "Classification périodique des éléments chimiques",
      description: "Tableau périodique et propriétés des éléments",
      duration: "45 min",
      difficulty: "Facile",
      hasVideos: true
    }
  ];

  const physicsSecondSemester = [
    {
      id: 114,
      title: "Le courant électrique continu",
      description: "Intensité, débit d'électrons et circuits électriques",
      duration: "50 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 115,
      title: "La tension électrique",
      description: "Différence de potentiel et mesure de tension",
      duration: "45 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 116,
      title: "Association des conducteurs ohmiques",
      description: "Résistances en série et en parallèle",
      duration: "55 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 117,
      title: "Caractéristiques de quelques dipôles passifs",
      description: "Caractéristiques courant-tension",
      duration: "50 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 118,
      title: "Caractéristiques d'un dipôle actif",
      description: "Générateurs et leurs caractéristiques",
      duration: "45 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 119,
      title: "Le transistor",
      description: "Principe de fonctionnement et applications",
      duration: "40 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 120,
      title: "L'amplificateur opérationnel",
      description: "Fonctionnement et circuits d'amplification",
      duration: "50 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 121,
      title: "La mole, unité de quantité de matière",
      description: "Concept de mole et calculs stœchiométriques",
      duration: "45 min",
      difficulty: "Moyen",
      hasVideos: false
    },
    {
      id: 122,
      title: "La concentration molaire",
      description: "Calculs de concentration et préparation de solutions",
      duration: "40 min",
      difficulty: "Moyen",
      hasVideos: false
    },
    {
      id: 123,
      title: "Modélisation des transformations chimiques - Bilan de la matière",
      description: "Équations chimiques et conservation de la matière",
      duration: "60 min",
      difficulty: "Difficile",
      hasVideos: false
    }
  ];

  const getCurrentLessons = () => {
    if (selectedSubject.id === 'math') {
      return { semester1: semester1Lessons, semester2: semester2Lessons };
    } else {
      return { semester1: physicsLessons, semester2: physicsSecondSemester };
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800 border-green-200";
      case "Moyen": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Difficile": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const renderLessonCard = (lesson: any, index: number) => (
    <Card key={lesson.id} className={`backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group ${isDarkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80'}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <span className={`rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white ${selectedSubject.id === 'math' ? 'bg-indigo-600' : 'bg-emerald-600'}`}>
                {lesson.id > 100 ? lesson.id - 100 : index + 1}
              </span>
              <Badge className={`${getDifficultyColor(lesson.difficulty)} font-medium border`}>
                <Target className="h-3 w-3 mr-1" />
                {lesson.difficulty}
              </Badge>
              <Badge variant="outline" className={`border-gray-300 ${isDarkMode ? 'text-gray-300 border-gray-600' : 'text-gray-600'}`}>
                <Clock className="h-3 w-3 mr-1" />
                {lesson.duration}
              </Badge>
              {lesson.hasVideos && (
                <Badge variant="outline" className={`text-red-600 border-red-300 ${isDarkMode ? 'border-red-400' : ''}`}>
                  <Video className="h-3 w-3 mr-1" />
                  Vidéos
                </Badge>
              )}
            </div>
            <CardTitle className={`text-xl font-bold transition-colors mb-2 ${isDarkMode ? 'text-white group-hover:text-indigo-400' : 'text-gray-800 group-hover:text-indigo-600'}`}>
              {lesson.title}
            </CardTitle>
            <CardDescription className={`leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {lesson.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          <Link to={`/lesson/${lesson.id}/course`}>
            <Button variant="default" size="sm" className={`shadow-md hover:shadow-lg transition-all duration-200 ${selectedSubject.id === 'math' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}>
              <BookOpen className="h-4 w-4 mr-2" />
              Cours
            </Button>
          </Link>
          <Link to={`/lesson/${lesson.id}/exercises`}>
            <Button variant="outline" size="sm" className={`transition-all duration-200 ${isDarkMode ? 'border-purple-400 text-purple-400 hover:bg-purple-900/20' : 'border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700'}`}>
              <FileText className="h-4 w-4 mr-2" />
              Exercices
            </Button>
          </Link>
          {lesson.hasVideos && (
            <Link to={`/lesson/${lesson.id}/videos`}>
              <Button variant="outline" size="sm" className={`transition-all duration-200 ${isDarkMode ? 'border-red-400 text-red-400 hover:bg-red-900/20' : 'border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700'}`}>
                <Video className="h-4 w-4 mr-2" />
                Vidéos YouTube
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const currentLessons = getCurrentLessons();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      <header className={`backdrop-blur-md border-b sticky top-0 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className={`flex items-center space-x-2 transition-all duration-200 hover:scale-105 ${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'}`}>
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>
            <div className="text-center">
              <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Bonjour {userName} 👋
              </h1>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {selectedSubject.name} - Tronc Commun Sciences
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300'}`}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleFullscreen}
                className={`${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300'}`}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
              <div className={`text-sm font-medium ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                {selectedSubject.chapters} chapitres
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Subject Selection */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center space-x-4 mb-8">
          {subjects.map((subject) => (
            <Button
              key={subject.id}
              variant={selectedSubject.id === subject.id ? "default" : "outline"}
              onClick={() => setSelectedSubject(subject)}
              className={`px-6 py-3 ${
                selectedSubject.id === subject.id 
                  ? `bg-${subject.color}-600 hover:bg-${subject.color}-700 text-white` 
                  : isDarkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                    : `border-${subject.color}-300 text-${subject.color}-600 hover:bg-${subject.color}-50`
              }`}
            >
              {subject.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Programme Complet
          </h2>
          <p className={`text-xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {selectedSubject.description}
          </p>
          
          <div className={`flex justify-center space-x-8 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>2 Semestres</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>{selectedSubject.chapters} Chapitres</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{selectedSubject.id === 'math' ? '12h30' : '18h45'} de contenu</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="semester1" className="w-full">
            <TabsList className={`grid w-full grid-cols-2 mb-8 backdrop-blur-sm shadow-md ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'}`}>
              <TabsTrigger 
                value="semester1" 
                className={`flex items-center space-x-2 ${isDarkMode ? 'data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-gray-300' : 'data-[state=active]:bg-indigo-600 data-[state=active]:text-white'}`}
              >
                <Calendar className="h-4 w-4" />
                <span>1er Semestre</span>
                <Badge variant="secondary" className="ml-2">
                  {selectedSubject.id === 'math' ? '9' : '13'} chapitres
                </Badge>
              </TabsTrigger>
              <TabsTrigger 
                value="semester2" 
                className={`flex items-center space-x-2 ${isDarkMode ? 'data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-gray-300' : 'data-[state=active]:bg-indigo-600 data-[state=active]:text-white'}`}
              >
                <Calendar className="h-4 w-4" />
                <span>2ème Semestre</span>
                <Badge variant="secondary" className="ml-2">
                  {selectedSubject.id === 'math' ? '6' : '10'} chapitres
                </Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="semester1" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Premier Semestre
                </h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Fondements et concepts de base
                </p>
              </div>
              {currentLessons.semester1.map((lesson, index) => renderLessonCard(lesson, index))}
            </TabsContent>
            
            <TabsContent value="semester2" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Deuxième Semestre
                </h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Approfondissement et applications
                </p>
              </div>
              {currentLessons.semester2.map((lesson, index) => renderLessonCard(lesson, index))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
