
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Microscope, Target, Clock, Users, ArrowLeft, Search, Bot, BookOpen, FileText, Video, Leaf, Dna } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import AIAssistant from "@/components/AIAssistant";
import SearchBar from "@/components/SearchBar";
import ProgressTracker from "@/components/ProgressTracker";
import QuickStats from "@/components/QuickStats";

const SVTLessons = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const svtChapters = [
    {
      id: 1,
      title: "La cellule unité structurale du vivant",
      description: "Découvrez l'organisation cellulaire, les organites et leurs fonctions dans les cellules eucaryotes et procaryotes.",
      difficulty: "Débutant",
      duration: "50 min",
      exercises: 18,
      completed: false
    },
    {
      id: 2,
      title: "Les échanges cellulaires",
      description: "Étudiez les mécanismes de transport à travers la membrane cellulaire : diffusion, osmose, transport actif.",
      difficulty: "Intermédiaire",
      duration: "45 min",
      exercises: 22,
      completed: false
    },
    {
      id: 3,
      title: "La photosynthèse",
      description: "Comprenez le processus de la photosynthèse, ses phases et son importance écologique.",
      difficulty: "Intermédiaire",
      duration: "60 min",
      exercises: 25,
      completed: false
    },
    {
      id: 4,
      title: "La respiration cellulaire",
      description: "Analysez les étapes de la respiration cellulaire et la production d'ATP.",
      difficulty: "Avancé",
      duration: "55 min",
      exercises: 20,
      completed: false
    },
    {
      id: 5,
      title: "Les écosystèmes",
      description: "Explorez les relations entre les êtres vivants et leur environnement.",
      difficulty: "Débutant",
      duration: "40 min",
      exercises: 16,
      completed: false
    },
    {
      id: 6,
      title: "La génétique mendélienne",
      description: "Découvrez les lois de Mendel et les mécanismes de l'hérédité.",
      difficulty: "Avancé",
      duration: "65 min",
      exercises: 28,
      completed: false
    },
    {
      id: 7,
      title: "La géologie : structure de la Terre",
      description: "Étudiez la structure interne de la Terre et la tectonique des plaques.",
      difficulty: "Intermédiaire",
      duration: "50 min",
      exercises: 24,
      completed: false
    },
    {
      id: 8,
      title: "Les roches et minéraux",
      description: "Identifiez les différents types de roches et leurs processus de formation.",
      difficulty: "Débutant",
      duration: "35 min",
      exercises: 15,
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
            <div className="flex items-center justify-center space-x-4">
              <Microscope className="h-16 w-16 text-green-600" />
              <Leaf className="h-12 w-12 text-green-500" />
              <Dna className="h-14 w-14 text-green-700" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Sciences de la Vie et de la Terre
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto"
          >
            Explorez le vivant et la Terre à travers des cours interactifs couvrant la biologie cellulaire, 
            l'écologie, la génétique et la géologie. Niveau Tronc Commun Sciences.
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
        <QuickStats 
          totalLessons={8}
          completedLessons={3}
          totalStudyTime="6h 15min"
          currentStreak={7}
          averageScore={85}
          weeklyGoal={6}
        />
      </motion.section>

      {/* Progress Tracker */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="container mx-auto px-4 mb-8"
      >
        <ProgressTracker 
          subject="Sciences de la Vie et de la Terre"
          totalLessons={8}
          completedLessons={3}
          totalPoints={1200}
          earnedPoints={450}
          studyTime="6h 15min"
        />
      </motion.section>

      {/* Chapters Grid */}
      <main className="container mx-auto px-4 py-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-3xl font-bold text-center text-foreground mb-10"
        >
          Chapitres de SVT
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {svtChapters.map((chapter, index) => (
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
              <Card className="h-full bg-card/90 backdrop-blur-sm border hover:border-green-500/30 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
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
                  <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-green-600 transition-colors">
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
                    <Link to={`/svt/lesson/${chapter.id}/course`}>
                      <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                        <BookOpen className="h-4 w-4 mr-1" />
                        Cours
                      </Button>
                    </Link>
                    <Link to={`/svt/lesson/${chapter.id}/exercises`}>
                      <Button size="sm" variant="outline" className="w-full">
                        <FileText className="h-4 w-4 mr-1" />
                        Exercices
                      </Button>
                    </Link>
                    <Link to={`/svt/lesson/${chapter.id}/videos`}>
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

export default SVTLessons;
