import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, ArrowLeft, Calendar, Clock, Target, Maximize2, Search, Bot } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSettings } from "@/hooks/useSettings";
import AIAssistant from "@/components/AIAssistant";
import SearchBar from "@/components/SearchBar";

const Lessons = () => {
  const { settings } = useSettings();
  const location = useLocation();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);
  
  // Determine current subject from URL
  const currentSubject = location.pathname.includes('/math') ? 'math' : 'svt';

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Math lessons data
  const mathSemester1Lessons = [
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

  const mathSemester2Lessons = [
    {
      id: 10,
      title: "Trigonométrie 2 (Équations et inéquations trigonométriques)",
      description: "Résolution d'équations et inéquations trigonométriques",
      duration: "55 min",
      difficulty: "Difficile",
      hasVideos: true
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
      hasVideos: true
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

  // SVT lessons data
  const svtSemester1Lessons = [
    {
      id: 201,
      title: "Les techniques adaptatives à l'étude écologique sur le terrain",
      description: "Méthodes d'observation et d'étude des écosystèmes naturels",
      duration: "55 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 202,
      title: "Les facteurs édaphiques et leurs relations avec les êtres vivants",
      description: "Influence du sol sur la distribution des organismes",
      duration: "50 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 203,
      title: "Les facteurs climatiques et leurs relations avec les êtres vivants",
      description: "Impact du climat sur les écosystèmes",
      duration: "60 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 204,
      title: "Flux de la matière et de l'énergie dans l'écosystème",
      description: "Chaînes alimentaires et cycles biogéochimiques",
      duration: "65 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 205,
      title: "Les équilibres naturels",
      description: "Mécanismes de régulation des populations",
      duration: "45 min",
      difficulty: "Moyen",
      hasVideos: true
    }
  ];

  const svtSemester2Lessons = [
    {
      id: 206,
      title: "La reproduction sexuée chez les plantes à fleurs",
      description: "Mécanismes de reproduction et fécondation",
      duration: "50 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 207,
      title: "La reproduction sexuée chez les plantes sans fleurs",
      description: "Cycle de reproduction des fougères et mousses",
      duration: "45 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 208,
      title: "Les cycles de développement des plantes",
      description: "Alternance des générations et métagenèse",
      duration: "55 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 209,
      title: "La reproduction asexuée chez les plantes",
      description: "Multiplication végétative et clonage naturel",
      duration: "40 min",
      difficulty: "Facile",
      hasVideos: true
    },
    {
      id: 210,
      title: "La modification génétique des plantes",
      description: "Biotechnologies et amélioration des espèces",
      duration: "60 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 211,
      title: "La classification des plantes",
      description: "Systématique et phylogénie végétale",
      duration: "50 min",
      difficulty: "Moyen",
      hasVideos: true
    }
  ];

  const getCurrentLessons = () => {
    if (currentSubject === 'math') {
      return { 
        semester1: mathSemester1Lessons, 
        semester2: mathSemester2Lessons,
        subject: 'Mathématiques',
        description: 'Algèbre, géométrie et analyse',
        color: 'indigo',
        chapters: 15,
        duration: '12h30'
      };
    } else {
      return { 
        semester1: svtSemester1Lessons, 
        semester2: svtSemester2Lessons,
        subject: 'SVT',
        description: 'Sciences de la Vie et de la Terre',
        color: 'green',
        chapters: 11,
        duration: '10h15'
      };
    }
  };

  const currentData = getCurrentLessons();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800";
      case "Moyen": return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800";
      case "Difficile": return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800";
      default: return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800";
    }
  };

  const renderLessonCard = (lesson: any, index: number) => (
    <motion.div
      key={lesson.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group bg-card/80">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <span className={`rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white ${
                  currentSubject === 'math' ? 'bg-indigo-600' : 'bg-green-600'
                }`}>
                  {currentSubject === 'math' ? lesson.id : lesson.id - 200}
                </span>
                <Badge className={`${getDifficultyColor(lesson.difficulty)} font-medium border`}>
                  <Target className="h-3 w-3 mr-1" />
                  {lesson.difficulty}
                </Badge>
                <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {lesson.duration}
                </Badge>
                {lesson.hasVideos && (
                  <Badge variant="outline" className="text-red-600 border-red-300 dark:border-red-400">
                    <Video className="h-3 w-3 mr-1" />
                    Vidéos
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl font-bold transition-colors mb-2 text-card-foreground group-hover:text-primary">
                {lesson.title}
              </CardTitle>
              <CardDescription className="leading-relaxed">
                {lesson.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Link to={`/${currentSubject}/lesson/${lesson.id}/course`}>
              <Button variant="default" size="sm" className={`shadow-md hover:shadow-lg transition-all duration-200 ${
                currentSubject === 'math' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-green-600 hover:bg-green-700'
              }`}>
                <BookOpen className="h-4 w-4 mr-2" />
                Cours
              </Button>
            </Link>
            <Link to={`/${currentSubject}/lesson/${lesson.id}/exercises`}>
              <Button variant="outline" size="sm" className="transition-all duration-200 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20">
                <FileText className="h-4 w-4 mr-2" />
                Exercices
              </Button>
            </Link>
            {lesson.hasVideos && (
              <Link to={`/${currentSubject}/lesson/${lesson.id}/videos`}>
                <Button variant="outline" size="sm" className="transition-all duration-200 border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-900/20">
                  <Video className="h-4 w-4 mr-2" />
                  Vidéos YouTube
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20"
    >
      <header className="backdrop-blur-md border-b sticky top-0 z-50 bg-background/80 border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 transition-all duration-200 hover:scale-105 text-primary hover:text-primary/80">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground">
                Bonjour {settings.name || 'Étudiant'} 👋
              </h1>
              <p className="text-sm text-muted-foreground">
                {currentData.subject} - Tronc Commun Sciences
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={() => setIsSearchOpen(true)} className="hover:bg-accent/50">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => setIsAIAssistantOpen(true)} className="hover:bg-accent/50">
                <Bot className="h-4 w-4" />
              </Button>
              <Link to="/settings">
                <Button variant="outline" size="sm" className="hover:bg-accent/50">
                  Paramètres
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={toggleFullscreen} className="hover:bg-accent/50">
                <Maximize2 className="h-4 w-4" />
              </Button>
              <div className="text-sm font-medium text-primary">
                {currentData.chapters} chapitres
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Programme Complet
          </h2>
          <p className="text-xl mb-6 text-muted-foreground">
            {currentData.description}
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>2 Semestres</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>{currentData.chapters} Chapitres</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{currentData.duration} de contenu</span>
            </div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="semester1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 backdrop-blur-sm shadow-md bg-card/80">
              <TabsTrigger 
                value="semester1" 
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4" />
                <span>1er Semestre</span>
                <Badge variant="secondary" className="ml-2">
                  {currentData.semester1.length} chapitres
                </Badge>
              </TabsTrigger>
              <TabsTrigger 
                value="semester2" 
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4" />
                <span>2ème Semestre</span>
                <Badge variant="secondary" className="ml-2">
                  {currentData.semester2.length} chapitres
                </Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="semester1" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Premier Semestre
                </h3>
                <p className="text-muted-foreground">
                  Fondements et concepts de base
                </p>
              </div>
              {currentData.semester1.map((lesson, index) => renderLessonCard(lesson, index))}
            </TabsContent>
            
            <TabsContent value="semester2" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Deuxième Semestre
                </h3>
                <p className="text-muted-foreground">
                  Approfondissement et applications
                </p>
              </div>
              {currentData.semester2.map((lesson, index) => renderLessonCard(lesson, index))}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AIAssistant isOpen={isAIAssistantOpen} onClose={() => setIsAIAssistantOpen(false)} />
    </motion.div>
  );
};

export default Lessons;
