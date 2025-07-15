
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, Target, Clock, Users, Star, Play, FileText, Video, ArrowLeft, Search, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import AIAssistant from "@/components/AIAssistant";
import SearchBar from "@/components/SearchBar";
import ProgressTracker from "@/components/ProgressTracker";
import QuickStats from "@/components/QuickStats";

const Lessons = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const mathChapters = [
    {
      id: 1,
      title: "Généralités sur les fonctions",
      description: "Découvrez les concepts fondamentaux des fonctions : définition, domaine, image, et représentation graphique.",
      difficulty: "Débutant",
      duration: "45 min",
      exercises: 15,
      completed: false
    },
    {
      id: 2,
      title: "Fonctions de référence",
      description: "Étudiez les fonctions linéaires, affines, carrées, et leurs propriétés essentielles.",
      difficulty: "Intermédiaire",
      duration: "60 min",
      exercises: 20,
      completed: false
    },
    {
      id: 3,
      title: "Équations et inéquations",
      description: "Maîtrisez la résolution d'équations du premier et second degré, et les inéquations.",
      difficulty: "Intermédiaire",
      duration: "50 min",
      exercises: 25,
      completed: false
    },
    {
      id: 4,
      title: "Statistiques descriptives",
      description: "Analysez des données avec les indicateurs de tendance centrale et de dispersion.",
      difficulty: "Débutant",
      duration: "40 min",
      exercises: 18,
      completed: false
    },
    {
      id: 5,
      title: "Géométrie dans l'espace",
      description: "Explorez les solides, leurs volumes, et les transformations géométriques.",
      difficulty: "Avancé",
      duration: "70 min",
      exercises: 22,
      completed: false
    },
    {
      id: 6,
      title: "Trigonométrie",
      description: "Apprenez les fonctions trigonométriques et leurs applications.",
      difficulty: "Avancé",
      duration: "65 min",
      exercises: 28,
      completed: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Avancé": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen animated-bg">
      <GlobalHeader />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="mb-6"
          >
            <Calculator className="h-16 w-16 text-indigo-600 mx-auto" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Mathématiques - Tronc Commun
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto"
          >
            Explorez les concepts mathématiques fondamentaux avec des cours interactifs, 
            des exercices pratiques et des vidéos explicatives adaptés au niveau Tronc Commun Sciences.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-4 w-4 mr-2" />
              Rechercher
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setAiOpen(true)}
            >
              <Bot className="h-4 w-4 mr-2" />
              Assistant IA
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Quick Stats */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="container mx-auto px-4 mb-8"
      >
        <QuickStats subject="math" />
      </motion.section>

      {/* Progress Tracker */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="container mx-auto px-4 mb-8"
      >
        <ProgressTracker subject="math" />
      </motion.section>

      {/* Chapters Grid */}
      <main className="container mx-auto px-4 py-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-3xl font-bold text-center text-foreground mb-10"
        >
          Chapitres de Mathématiques
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mathChapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <Card className="h-full bg-card/90 backdrop-blur-sm border hover:border-indigo-500/30 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={getDifficultyColor(chapter.difficulty)}>
                      {chapter.difficulty}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {chapter.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-indigo-600 transition-colors">
                    Chapitre {chapter.id}: {chapter.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {chapter.description}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <span className="flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      {chapter.exercises} exercices
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      Tronc Commun
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <Link to={`/math/lesson/${chapter.id}/course`}>
                      <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700">
                        <BookOpen className="h-4 w-4 mr-1" />
                        Cours
                      </Button>
                    </Link>
                    <Link to={`/math/lesson/${chapter.id}/exercises`}>
                      <Button size="sm" variant="outline" className="w-full">
                        <FileText className="h-4 w-4 mr-1" />
                        Exercices
                      </Button>
                    </Link>
                    <Link to={`/math/lesson/${chapter.id}/videos`}>
                      <Button size="sm" variant="outline" className="w-full">
                        <Video className="h-4 w-4 mr-1" />
                        Vidéos
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Components */}
      <SearchBar 
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
      <AIAssistant 
        isOpen={aiOpen}
        onClose={() => setAiOpen(false)}
      />
    </div>
  );
};

export default Lessons;
