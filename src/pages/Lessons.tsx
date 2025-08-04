import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, ArrowLeft, Calendar, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GlobalHeader from "@/components/GlobalHeader";

const Lessons = () => {
  // Semester 1 lessons
  const semester1Lessons = [
    {
      id: 1,
      title: "Les ensembles de nombres N, Z, Q, D et R",
      description: "Introduction aux différents ensembles de nombres",
      duration: "45 min",
      difficulty: "Facile",
      hasVideos: true
    },
    {
      id: 2,
      title: "Arithmétique dans IN",
      description: "Divisibilité, PGCD, PPCM dans les entiers naturels",
      duration: "50 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 3,
      title: "Calcul vectoriel dans le plan",
      description: "Vecteurs, opérations et applications géométriques",
      duration: "55 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 4,
      title: "La projection dans le plan",
      description: "Projection orthogonale et ses propriétés",
      duration: "40 min",
      difficulty: "Moyen",
      hasVideos: false
    },
    {
      id: 5,
      title: "L'ordre dans IR",
      description: "Inégalités et propriétés de l'ordre dans les réels",
      duration: "45 min",
      difficulty: "Facile",
      hasVideos: true
    },
    {
      id: 6,
      title: "La droite dans le plan",
      description: "Équations de droites et positions relatives",
      duration: "50 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 7,
      title: "Les polynômes",
      description: "Étude des polynômes et factorisation",
      duration: "60 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 8,
      title: "Équations, inéquations et systèmes",
      description: "Résolution d'équations et systèmes linéaires",
      duration: "65 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 9,
      title: "Trigonométrie 1",
      description: "Relations trigonométriques de base",
      duration: "50 min",
      difficulty: "Moyen",
      hasVideos: false
    }
  ];

  // Semester 2 lessons
  const semester2Lessons = [
    {
      id: 10,
      title: "Trigonométrie 2",
      description: "Fonctions trigonométriques et équations",
      duration: "55 min",
      difficulty: "Difficile",
      hasVideos: false
    },
    {
      id: 11,
      title: "Généralités sur les fonctions",
      description: "Domaines, variations et représentations graphiques",
      duration: "50 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 12,
      title: "Transformations du plan",
      description: "Isométries et similitudes",
      duration: "45 min",
      difficulty: "Moyen",
      hasVideos: true
    },
    {
      id: 13,
      title: "Le produit scalaire",
      description: "Produit scalaire et ses applications",
      duration: "55 min",
      difficulty: "Difficile",
      hasVideos: true
    },
    {
      id: 14,
      title: "Géométrie dans l'espace",
      description: "Solides, volumes et géométrie 3D",
      duration: "60 min",
      difficulty: "Difficile",
      hasVideos: false
    },
    {
      id: 15,
      title: "Statistiques",
      description: "Analyse statistique et probabilités de base",
      duration: "45 min",
      difficulty: "Facile",
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

  const renderLessonCard = (lesson: any) => (
    <Card key={lesson.id} className="backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group bg-card/80">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
            <span className="font-bold text-primary">{lesson.id}</span>
          </div>
          <div className="flex-1 ml-4">
            <div className="flex items-center space-x-2 mb-2">
              {lesson.hasVideos && (
                <Badge variant="outline" className="text-red-600 border-red-300">
                  <Video className="h-3 w-3 mr-1" />
                  Vidéos
                </Badge>
              )}
              <Badge variant="outline">
                <Clock className="h-3 w-3 mr-1" />
                {lesson.duration}
              </Badge>
              <Badge className={`${getDifficultyColor(lesson.difficulty)} font-medium border`}>
                <Target className="h-3 w-3 mr-1" />
                {lesson.difficulty}
              </Badge>
            </div>
            <CardTitle className="text-lg font-bold transition-colors mb-2 text-card-foreground group-hover:text-primary">
              {lesson.title}
            </CardTitle>
            <CardDescription>{lesson.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Link to={`/lesson/${lesson.id}/course`}>
            <Button variant="default" size="sm" className="shadow-md hover:shadow-lg transition-all duration-200">
              <BookOpen className="h-4 w-4 mr-2" />
              Cours
            </Button>
          </Link>
          <Link to={`/lesson/${lesson.id}/exercises`}>
            <Button variant="outline" size="sm" className="transition-all duration-200">
              <FileText className="h-4 w-4 mr-2" />
              Exercices
            </Button>
          </Link>
          {lesson.hasVideos && (
            <Link to={`/lesson/${lesson.id}/videos`}>
              <Button variant="outline" size="sm" className="transition-all duration-200">
                <Video className="h-4 w-4 mr-2" />
                Vidéos
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen animated-bg"
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
              <h1 className="text-2xl font-bold text-foreground">Mathématiques</h1>
              <p className="text-sm text-muted-foreground">Tronc Commun Sciences</p>
            </div>
            <div className="text-sm font-medium text-primary">15 chapitres</div>
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
            Programme de Mathématiques
          </h2>
          <p className="text-xl mb-6 text-muted-foreground">
            Cours complets, exercices et vidéos pour réussir
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>2 Semestres</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>15 Chapitres</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Contenu riche et varié</span>
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
                <span>Semestre 1</span>
                <Badge variant="secondary" className="ml-2">9 chapitres</Badge>
              </TabsTrigger>
              <TabsTrigger 
                value="semester2" 
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4" />
                <span>Semestre 2</span>
                <Badge variant="secondary" className="ml-2">6 chapitres</Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="semester1" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Premier Semestre</h3>
                <p className="text-muted-foreground">Fondements mathématiques et algèbre</p>
              </div>
              {semester1Lessons.map(renderLessonCard)}
            </TabsContent>
            
            <TabsContent value="semester2" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Deuxième Semestre</h3>
                <p className="text-muted-foreground">Fonctions, géométrie et statistiques</p>
              </div>
              {semester2Lessons.map(renderLessonCard)}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default Lessons;
