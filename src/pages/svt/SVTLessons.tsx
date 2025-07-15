import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, ArrowLeft, Calendar, Clock, Target, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSettings } from "@/hooks/useSettings";
import AIAssistant from "@/components/AIAssistant";
import SearchBar from "@/components/SearchBar";

const SVTLessons = () => {
  const { settings } = useSettings();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const semester1Lessons = [
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

  const semester2Lessons = [
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
                <span className="rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white bg-green-600">
                  {lesson.id - 200}
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
            <Link to={`/svt/lesson/${lesson.id}/course`}>
              <Button variant="default" size="sm" className="shadow-md hover:shadow-lg transition-all duration-200 bg-green-600 hover:bg-green-700">
                <BookOpen className="h-4 w-4 mr-2" />
                Cours
              </Button>
            </Link>
            <Link to={`/svt/lesson/${lesson.id}/exercises`}>
              <Button variant="outline" size="sm" className="transition-all duration-200 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20">
                <FileText className="h-4 w-4 mr-2" />
                Exercices
              </Button>
            </Link>
            {lesson.hasVideos && (
              <Link to={`/svt/lesson/${lesson.id}/videos`}>
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
                SVT - Sciences de la Vie et de la Terre
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <SearchBar />
              <Link to="/settings">
                <Button variant="outline" size="sm" className="hover:bg-accent/50">
                  Paramètres
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={toggleFullscreen} className="hover:bg-accent/50">
                <Maximize2 className="h-4 w-4" />
              </Button>
              <div className="text-sm font-medium text-primary">
                11 chapitres
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
            Programme Complet SVT
          </h2>
          <p className="text-xl mb-6 text-muted-foreground">
            Sciences de la Vie et de la Terre - Tronc Commun Sciences
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>2 Semestres</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>11 Chapitres</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>10h15 de contenu</span>
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
                  5 chapitres
                </Badge>
              </TabsTrigger>
              <TabsTrigger 
                value="semester2" 
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4" />
                <span>2ème Semestre</span>
                <Badge variant="secondary" className="ml-2">
                  6 chapitres
                </Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="semester1" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Premier Semestre
                </h3>
                <p className="text-muted-foreground">
                  Écologie et environnement
                </p>
              </div>
              {semester1Lessons.map((lesson, index) => renderLessonCard(lesson, index))}
            </TabsContent>
            
            <TabsContent value="semester2" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Deuxième Semestre
                </h3>
                <p className="text-muted-foreground">
                  Reproduction et classification des plantes
                </p>
              </div>
              {semester2Lessons.map((lesson, index) => renderLessonCard(lesson, index))}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <AIAssistant />
    </motion.div>
  );
};

export default SVTLessons;
