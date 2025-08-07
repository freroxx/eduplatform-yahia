
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, ArrowLeft, Calendar, Clock, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import EnhancedLoadingBar from "@/components/EnhancedLoadingBar";

const PhysicsLessons = () => {
  const [isLoading, setIsLoading] = useState(false);

  const semester1Lessons = [
    {
      id: 101,
      title: "Module 1: Gravitation universelle",
      description: "Loi de Newton, champ gravitationnel, pesanteur et mouvement des planètes",
      duration: "120 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 102,
      title: "Module 2: Mouvement et forces",
      description: "Cinématique, dynamique, lois de Newton et applications",
      duration: "110 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 103,
      title: "Module 3: Travail et énergie",
      description: "Travail d'une force, énergie cinétique, potentielle et conservation",
      duration: "95 min",
      difficulty: "Moyen",
      hasVideos: true
    }
  ];

  const semester2Lessons = [
    {
      id: 114,
      title: "Module 4: Le courant électrique continu",
      description: "Intensité, tension, résistance, loi d'Ohm et circuits électriques",
      duration: "85 min",
      difficulty: "Facile",
      hasVideos: true
    },
    {
      id: 115,
      title: "Module 5: Optique géométrique",
      description: "Réflexion, réfraction, lentilles minces et formation d'images",
      duration: "100 min",
      difficulty: "Moyen",
      hasVideos: true
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
              <span className="bg-emerald-600 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white">
                {lesson.id > 113 ? lesson.id - 113 : lesson.id - 100}
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
                <Badge variant="outline" className="text-emerald-600 border-emerald-300 dark:border-emerald-400">
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
          <Link to={`/physics/lesson/${lesson.id}/course`}>
            <Button variant="default" size="sm" className="shadow-md hover:shadow-lg transition-all duration-200 bg-emerald-600 hover:bg-emerald-700">
              <BookOpen className="h-4 w-4 mr-2" />
              Cours
            </Button>
          </Link>
          <Link to={`/physics/lesson/${lesson.id}/exercises`}>
            <Button variant="outline" size="sm" className="transition-all duration-200 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20">
              <FileText className="h-4 w-4 mr-2" />
              Exercices
            </Button>
          </Link>
          {lesson.hasVideos && (
            <Link to={`/physics/lesson/${lesson.id}/videos`}>
              <Button variant="outline" size="sm" className="transition-all duration-200 border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-700 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20">
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
          message="Chargement des leçons de physique..."
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
      className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20"
    >
      <GlobalHeader />
      
      <header className="backdrop-blur-md border-b sticky top-16 z-40 bg-background/80 border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 transition-all duration-200 hover:scale-105 text-primary hover:text-primary/80">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Zap className="h-6 w-6 text-emerald-600" />
                Physique
              </h1>
              <p className="text-sm text-muted-foreground">
                Tronc Commun Sciences
              </p>
            </div>
            <div className="text-sm font-medium text-primary">
              5 modules
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
            Programme de Physique
          </h2>
          <p className="text-xl mb-6 text-muted-foreground">
            Mécanique, électricité et optique
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>2 Semestres</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>5 Modules</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>8h30 de contenu</span>
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
                  3 modules
                </Badge>
              </TabsTrigger>
              <TabsTrigger 
                value="semester2" 
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4" />
                <span>2ème Semestre</span>
                <Badge variant="secondary" className="ml-2">
                  2 modules
                </Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="semester1" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Premier Semestre
                </h3>
                <p className="text-muted-foreground">
                  Mécanique classique
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
                  Électricité et optique
                </p>
              </div>
              {semester2Lessons.map((lesson, index) => renderLessonCard(lesson, index))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default PhysicsLessons;
