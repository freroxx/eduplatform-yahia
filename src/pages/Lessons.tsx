
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, ArrowLeft, Calendar, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Lessons = () => {
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800 border-green-200";
      case "Moyen": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Difficile": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const renderLessonCard = (lesson: any, index: number) => (
    <Card key={lesson.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <span className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">
                {index + 1}
              </span>
              <Badge className={`${getDifficultyColor(lesson.difficulty)} font-medium border`}>
                <Target className="h-3 w-3 mr-1" />
                {lesson.difficulty}
              </Badge>
              <Badge variant="outline" className="text-gray-600 border-gray-300">
                <Clock className="h-3 w-3 mr-1" />
                {lesson.duration}
              </Badge>
              {lesson.hasVideos && (
                <Badge variant="outline" className="text-red-600 border-red-300">
                  <Video className="h-3 w-3 mr-1" />
                  Vidéos
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors mb-2">
              {lesson.title}
            </CardTitle>
            <CardDescription className="text-gray-600 leading-relaxed">
              {lesson.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          <Link to={`/lesson/${lesson.id}/course`}>
            <Button variant="default" size="sm" className="bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200">
              <BookOpen className="h-4 w-4 mr-2" />
              Cours
            </Button>
          </Link>
          <Link to={`/lesson/${lesson.id}/exercises`}>
            <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 transition-all duration-200">
              <FileText className="h-4 w-4 mr-2" />
              Exercices
            </Button>
          </Link>
          {lesson.hasVideos && (
            <Link to={`/lesson/${lesson.id}/videos`}>
              <Button variant="outline" size="sm" className="border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700 transition-all duration-200">
                <Video className="h-4 w-4 mr-2" />
                Vidéos YouTube
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-all duration-200 hover:scale-105">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800">Mathématiques</h1>
              <p className="text-sm text-gray-600">Tronc Commun Sciences</p>
            </div>
            <div className="text-sm text-indigo-600 font-medium">
              15 chapitres
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Programme Complet</h2>
          <p className="text-xl text-gray-600 mb-6">Maîtrisez les mathématiques étape par étape</p>
          
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
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
              <span>12h30 de contenu</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="semester1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/80 backdrop-blur-sm shadow-md">
              <TabsTrigger value="semester1" className="flex items-center space-x-2 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                <Calendar className="h-4 w-4" />
                <span>1er Semestre</span>
                <Badge variant="secondary" className="ml-2">9 chapitres</Badge>
              </TabsTrigger>
              <TabsTrigger value="semester2" className="flex items-center space-x-2 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                <Calendar className="h-4 w-4" />
                <span>2ème Semestre</span>
                <Badge variant="secondary" className="ml-2">6 chapitres</Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="semester1" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Premier Semestre</h3>
                <p className="text-gray-600">Fondements et concepts de base</p>
              </div>
              {semester1Lessons.map((lesson, index) => renderLessonCard(lesson, index))}
            </TabsContent>
            
            <TabsContent value="semester2" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Deuxième Semestre</h3>
                <p className="text-gray-600">Approfondissement et applications</p>
              </div>
              {semester2Lessons.map((lesson, index) => renderLessonCard(lesson, index))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
