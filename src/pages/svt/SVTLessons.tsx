import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, ArrowLeft, Calendar, Clock, Target, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import EnhancedLoadingBar from "@/components/EnhancedLoadingBar";

const SVTLessons = () => {
  const [isLoading, setIsLoading] = useState(false);

  const semester1Lessons = [
    {
      id: 501,
      title: "Module 1: Les techniques adaptatives à l'étude écologique sur le terrain",
      description: "Méthodes et techniques d'observation et d'analyse des écosystèmes naturels",
      duration: "90 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 502,
      title: "Module 2: Les facteurs édaphiques et leurs relations avec les êtres vivants",
      description: "Sol, composition chimique et influence sur la biodiversité",
      duration: "105 min", 
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 503,
      title: "Module 3: Les facteurs climatiques et leurs relations avec les êtres vivants",
      description: "Température, humidité, précipitations et adaptations biologiques",
      duration: "85 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 504,
      title: "Module 4: Flux de la matière et de l'énergie dans l'écosystème",
      description: "Chaînes alimentaires, cycles biogéochimiques et transferts énergétiques",
      duration: "95 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 505,
      title: "Module 5: Les équilibres naturels",
      description: "Dynamique des populations et équilibres écologiques",
      duration: "80 min",
      difficulty: "Moyen",
      hasVideos: false
    }
  ];

  const semester2Lessons = [
    {
      id: 506,
      title: "Module 6: La reproduction sexuée chez les plantes à fleurs",
      description: "Pollinisation, fécondation et formation des graines",
      duration: "75 min",
      difficulty: "Facile",
      hasVideos: false
    },
    {
      id: 507,
      title: "Module 7: La reproduction sexuée chez les plantes sans fleurs",
      description: "Reproduction chez les mousses, fougères et gymnospermes",
      duration: "70 min",
      difficulty: "Moyen",
      hasVideos: false
    },
    {
      id: 508,
      title: "Module 8: Les cycles de développement des plantes",
      description: "Alternance de générations et cycles biologiques végétaux",
      duration: "85 min",
      difficulty: "Difficile",
      hasVideos: false
    },
    {
      id: 509,
      title: "Module 9: La reproduction asexuée chez les plantes",
      description: "Multiplication végétative et propagation clonale",
      duration: "65 min",
      difficulty: "Facile",
      hasVideos: false
    },
    {
      id: 510,
      title: "Module 10: La modification génétique des plantes",
      description: "Biotechnologies végétales et amélioration génétique",
      duration: "90 min",
      difficulty: "Difficile",
      hasVideos: false
    },
    {
      id: 511,
      title: "Module 11: La classification des plantes",
      description: "Systématique végétale et phylogénie",
      duration: "80 min",
      difficulty: "Moyen",
      hasVideos: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800 border-green-200";
      case "Moyen": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Difficile": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const renderLessonCard = (lesson: any, index: number) => (
    <Card key={lesson.id} className="backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group bg-card/80">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <span className="bg-green-600 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white">
                {lesson.id > 503 ? lesson.id - 503 : lesson.id - 500}
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
                <Badge variant="outline" className="text-green-600 border-green-300 dark:border-green-400">
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
              <Button variant="outline" size="sm" className="transition-all duration-200 border-green-600 text-green-600 hover:bg-green-50 hover:border-green-700 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20">
                <Video className="h-4 w-4 mr-2" />
                Vidéos
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 flex items-center justify-center">
        <EnhancedLoadingBar 
          isLoading={isLoading} 
          progress={75}
          message="Chargement des leçons SVT..."
          color="green"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      <GlobalHeader />
      
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" as const }}
        className="glass-effect border-b sticky top-16 z-40 border-border/50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 transition-all duration-200 hover:scale-105 text-primary hover:text-primary/80 group">
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ type: "spring" as const, stiffness: 400 }}
              >
                <ArrowLeft className="h-5 w-5 group-hover:text-green-600 transition-colors" />
              </motion.div>
              <span className="font-medium">Retour à l'accueil</span>
            </Link>
            <motion.div 
              className="text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" as const }}
            >
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Leaf className="h-6 w-6 text-green-600" />
                </motion.div>
                Sciences de la Vie et de la Terre
              </h1>
              <p className="text-sm text-muted-foreground">
                Tronc Commun Sciences
              </p>
            </motion.div>
            <motion.div 
              className="text-sm font-medium text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              11 modules
            </motion.div>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 text-foreground bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" as const, stiffness: 200 }}
          >
            Programme de SVT
          </motion.h2>
          <p className="text-xl mb-6 text-muted-foreground">
            Écologie et biologie végétale
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="h-4 w-4 mr-2" />
              <span>2 Semestres</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              <span>11 Modules</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="h-4 w-4 mr-2" />
              <span>8h45 de contenu</span>
            </motion.div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="semester1" className="w-full">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <TabsList className="grid w-full grid-cols-2 mb-8 glass-effect shadow-md">
                <TabsTrigger 
                  value="semester1" 
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  <Calendar className="h-4 w-4" />
                  <span>1er Semestre</span>
                  <Badge variant="secondary" className="ml-2">
                    5 modules
                  </Badge>
                </TabsTrigger>
                <TabsTrigger 
                  value="semester2" 
                  className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  <Calendar className="h-4 w-4" />
                  <span>2ème Semestre</span>
                  <Badge variant="secondary" className="ml-2">
                    6 modules
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </motion.div>
            
            <TabsContent value="semester1" className="space-y-6">
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Premier Semestre
                </h3>
                <p className="text-muted-foreground">
                  Écologie et étude des écosystèmes
                </p>
              </motion.div>
              {semester1Lessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" as const }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="transform transition-all duration-300"
                >
                  
                  <Card className="glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group bg-gradient-to-r from-card/80 to-card/60">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="bg-green-600 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white">
                              {lesson.id > 503 ? lesson.id - 503 : lesson.id - 500}
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
                              <Badge variant="outline" className="text-green-600 border-green-300 dark:border-green-400">
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
                            <Button variant="outline" size="sm" className="transition-all duration-200 border-green-600 text-green-600 hover:bg-green-50 hover:border-green-700 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20">
                              <Video className="h-4 w-4 mr-2" />
                              Vidéos
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
            
            <TabsContent value="semester2" className="space-y-6">
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Deuxième Semestre
                </h3>
                <p className="text-muted-foreground">
                  Reproduction et classification végétales
                </p>
              </motion.div>
              {semester2Lessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" as const }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="transform transition-all duration-300"
                >
                  
                  <Card className="glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group bg-gradient-to-r from-card/80 to-card/60">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="bg-green-600 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white">
                              {lesson.id > 503 ? lesson.id - 503 : lesson.id - 500}
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
                              <Badge variant="outline" className="text-green-600 border-green-300 dark:border-green-400">
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
                            <Button variant="outline" size="sm" className="transition-all duration-200 border-green-600 text-green-600 hover:bg-green-50 hover:border-green-700 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20">
                              <Video className="h-4 w-4 mr-2" />
                              Vidéos
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default SVTLessons;
