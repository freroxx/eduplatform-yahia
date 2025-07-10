
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Video, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Lessons = () => {
  const lessons = [
    {
      id: 1,
      title: "Les ensembles de nombres N, Z, Q, D et R",
      description: "Introduction aux différents ensembles de nombres et leurs propriétés",
      duration: "45 min",
      difficulty: "Facile"
    },
    {
      id: 2,
      title: "Arithmétique dans IN",
      description: "Division euclidienne, PGCD, PPCM et nombres premiers",
      duration: "50 min",
      difficulty: "Moyen"
    },
    {
      id: 3,
      title: "Calcul vectoriel dans le plan",
      description: "Vecteurs, opérations vectorielles et applications géométriques",
      duration: "60 min",
      difficulty: "Moyen"
    },
    {
      id: 4,
      title: "La projection dans le plan",
      description: "Projections orthogonales et leurs applications",
      duration: "40 min",
      difficulty: "Moyen"
    },
    {
      id: 5,
      title: "L'ordre dans IR",
      description: "Inégalités, intervalles et valeur absolue",
      duration: "35 min",
      difficulty: "Facile"
    },
    {
      id: 6,
      title: "La droite dans le plan",
      description: "Équations de droites et positions relatives",
      duration: "45 min",
      difficulty: "Moyen"
    },
    {
      id: 7,
      title: "Les polynômes",
      description: "Définition, opérations et factorisation des polynômes",
      duration: "55 min",
      difficulty: "Difficile"
    },
    {
      id: 8,
      title: "Équations, inéquations et systèmes",
      description: "Résolution d'équations et systèmes d'équations",
      duration: "50 min",
      difficulty: "Moyen"
    },
    {
      id: 9,
      title: "Trigonométrie 1 (Règles du calcul trigonométrique)",
      description: "Fonctions trigonométriques et identités remarquables",
      duration: "65 min",
      difficulty: "Difficile"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800";
      case "Moyen": return "bg-yellow-100 text-yellow-800";
      case "Difficile": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Retour à l'accueil</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Mathématiques - Tronc Commun Sciences</h1>
            <div></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Programme de Mathématiques</h2>
          <p className="text-xl text-gray-600">9 chapitres pour maîtriser les fondamentaux</p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {lessons.map((lesson, index) => (
            <Card key={lesson.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <Badge className={getDifficultyColor(lesson.difficulty)}>
                        {lesson.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-gray-600">
                        {lesson.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                      {lesson.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      {lesson.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Link to={`/lesson/${lesson.id}/course`}>
                    <Button variant="default" size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Cours
                    </Button>
                  </Link>
                  <Link to={`/lesson/${lesson.id}/exercises`}>
                    <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                      <FileText className="h-4 w-4 mr-2" />
                      Exercices
                    </Button>
                  </Link>
                  <Link to={`/lesson/${lesson.id}/videos`}>
                    <Button variant="outline" size="sm" className="border-red-600 text-red-600 hover:bg-red-50">
                      <Video className="h-4 w-4 mr-2" />
                      Vidéos YouTube
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lessons;
