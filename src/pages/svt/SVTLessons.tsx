import { motion } from "framer-motion";
import { Book, Clock, Users, Award, ChevronRight, CheckCircle2, PlayCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import GlobalHeader from "@/components/GlobalHeader";
import { Link } from "react-router-dom";

const SVTLessons = () => {
  const lessons = [
    {
      id: 1,
      title: "Introduction à la biologie",
      description: "Les bases de la biologie et l'étude du vivant",
      duration: "45 min",
      difficulty: "Facile",
      completed: true,
      progress: 100,
      topics: ["Définition", "Méthodes", "Organisation"]
    },
    {
      id: 2,
      title: "La cellule : unité de base",
      description: "Structure et fonctions de la cellule",
      duration: "60 min",
      difficulty: "Moyen",
      completed: true,
      progress: 100,
      topics: ["Membrane", "Noyau", "Organites", "Métabolisme"]
    },
    {
      id: 3,
      title: "La génétique moderne",
      description: "ADN, gènes et hérédité",
      duration: "75 min",
      difficulty: "Difficile",
      completed: false,
      progress: 60,
      topics: ["ADN", "ARN", "Chromosomes", "Mutations"]
    },
    {
      id: 4,
      title: "Écologie et environnement",
      description: "Relations entre organismes et milieu",
      duration: "50 min",
      difficulty: "Moyen",
      completed: false,
      progress: 30,
      topics: ["Écosystèmes", "Biodiversité", "Pollution"]
    },
    {
      id: 5,
      title: "Évolution et sélection",
      description: "Théories de l'évolution et adaptation",
      duration: "65 min",
      difficulty: "Difficile",
      completed: false,
      progress: 0,
      topics: ["Darwin", "Sélection naturelle", "Spéciation"]
    }
  ];

  const totalLessons = lessons.length;
  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalStudyTime = lessons.reduce((acc, lesson) => {
    const time = parseInt(lesson.duration);
    return acc + time;
  }, 0);
  const averageProgress = lessons.reduce((acc, lesson) => acc + lesson.progress, 0) / lessons.length;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Moyen": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Difficile": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <GlobalHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full mb-4">
            <Book className="h-5 w-5" />
            <span className="font-medium">Sciences de la Vie et de la Terre</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Cours de SVT
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explorez le monde fascinant du vivant à travers nos cours interactifs
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                {completedLessons}/{totalLessons}
              </div>
              <p className="text-sm text-muted-foreground">Leçons terminées</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {Math.floor(totalStudyTime / 60)}h{totalStudyTime % 60}
              </div>
              <p className="text-sm text-muted-foreground">Temps d'étude</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                {Math.round(averageProgress)}%
              </div>
              <p className="text-sm text-muted-foreground">Progression</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                15
              </div>
              <p className="text-sm text-muted-foreground">Exercices</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Lessons Grid */}
        <div className="grid gap-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Content Section */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${lesson.completed ? 'bg-green-100 dark:bg-green-900' : 'bg-gray-100 dark:bg-gray-800'}`}>
                            {lesson.completed ? (
                              <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                            ) : (
                              <PlayCircle className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                            )}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors">
                              Leçon {lesson.id}: {lesson.title}
                            </h3>
                            <p className="text-muted-foreground mt-1">
                              {lesson.description}
                            </p>
                          </div>
                        </div>
                        
                        <Badge className={getDifficultyColor(lesson.difficulty)}>
                          {lesson.difficulty}
                        </Badge>
                      </div>
                      
                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {lesson.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Progress */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Progression</span>
                          <span className="text-sm text-muted-foreground">{lesson.progress}%</span>
                        </div>
                        <Progress value={lesson.progress} className="h-2" />
                      </div>
                      
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{lesson.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          <span>4 sections</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Section */}
                    <div className="p-6 md:w-48 flex flex-col justify-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
                      <Button 
                        asChild 
                        className="w-full mb-3 bg-green-600 hover:bg-green-700"
                        size="lg"
                      >
                        <Link to={`/svt/lesson-${lesson.id}`}>
                          {lesson.completed ? 'Revoir' : lesson.progress > 0 ? 'Continuer' : 'Commencer'}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/svt/lesson-${lesson.id}/exercises`}>
                          Exercices
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardContent className="p-8">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Continuez votre apprentissage !</h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Vous progressez bien dans vos études de SVT. Continuez à explorer les mystères du vivant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Voir les exercices
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Statistiques détaillées
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SVTLessons;
