
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Lesson1Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Introduction aux ensembles de nombres",
      duration: "12:30",
      difficulty: "Débutant",
      description: "Une introduction claire et accessible aux différents ensembles de nombres",
      url: "https://youtube.com/watch?v=example1"
    },
    {
      id: 2,
      title: "Les nombres rationnels et irrationnels",
      duration: "18:45",
      difficulty: "Intermédiaire",
      description: "Comprendre la différence entre nombres rationnels et irrationnels avec des exemples",
      url: "https://youtube.com/watch?v=example2"
    },
    {
      id: 3,
      title: "Exercices corrigés sur les ensembles",
      duration: "25:15",
      difficulty: "Avancé",
      description: "Résolution d'exercices types sur la classification des nombres",
      url: "https://youtube.com/watch?v=example3"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant": return "bg-green-100 text-green-800";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800";
      case "Avancé": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/lessons" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Retour aux leçons</span>
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Vidéos YouTube - Les ensembles de nombres</h1>
          <div></div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Vidéos recommandées</h2>
            <p className="text-gray-600">Complétez votre apprentissage avec ces vidéos explicatives</p>
          </div>

          <div className="grid gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge className={getDifficultyColor(video.difficulty)}>
                          {video.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-gray-600">
                          {video.duration}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                        {video.title}
                      </CardTitle>
                      <p className="text-gray-600">{video.description}</p>
                    </div>
                    <div className="bg-red-100 p-3 rounded-full">
                      <Play className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-3">
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <a href={video.url} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4 mr-2" />
                        Regarder sur YouTube
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={video.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ouvrir dans un nouvel onglet
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson1Videos;
