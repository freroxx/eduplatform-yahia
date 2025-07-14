
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Play, ExternalLink, Clock, Users, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSettings } from "@/hooks/useSettings";

const Lesson1Videos = () => {
  const { settings } = useSettings();
  const [loadingVideo, setLoadingVideo] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string>("");

  const videos = [
    {
      id: 1,
      title: "Introduction aux ensembles de nombres",
      duration: "12:30",
      difficulty: "Débutant",
      views: "25.4K",
      description: "Une introduction claire et accessible aux différents ensembles de nombres N, Z, Q, D et R. Cette vidéo couvre les définitions fondamentales, les propriétés essentielles et les relations d'inclusion entre ces ensembles.",
      detailedContent: "Dans cette vidéo, vous découvrirez :\n• Les nombres naturels N et leur utilisation\n• Les nombres entiers Z et leur extension\n• Les nombres rationnels Q et leurs propriétés\n• Les nombres décimaux D et leur importance\n• Les nombres réels R et leur complétude\n• Les relations d'inclusion : N ⊂ Z ⊂ D ⊂ Q ⊂ R",
      url: "https://www.youtube.com/watch?v=NOV6FpGLBZ8",
      videoId: "NOV6FpGLBZ8",
      thumbnail: "https://img.youtube.com/vi/NOV6FpGLBZ8/maxresdefault.jpg"
    },
    {
      id: 2,
      title: "Propriétés et relations entre ensembles",
      duration: "18:45",
      difficulty: "Intermédiaire",
      views: "18.2K",
      description: "Comprendre les relations d'inclusion et les propriétés des différents ensembles de nombres avec des exemples concrets et des applications pratiques.",
      detailedContent: "Cette vidéo approfondit :\n• Les relations d'inclusion entre ensembles\n• Les propriétés spécifiques de chaque ensemble\n• Des exemples concrets de classification\n• Les cas particuliers et exceptions\n• Les applications pratiques en mathématiques\n• Les méthodes de démonstration",
      url: "https://www.youtube.com/watch?v=-cmV1kRllWw",
      videoId: "-cmV1kRllWw",
      thumbnail: "https://img.youtube.com/vi/-cmV1kRllWw/maxresdefault.jpg"
    },
    {
      id: 3,
      title: "Exercices corrigés sur les ensembles",
      duration: "25:15",
      difficulty: "Avancé",
      views: "12.8K",
      description: "Résolution détaillée d'exercices types sur la classification des nombres avec méthodes et astuces pour réussir vos contrôles.",
      detailedContent: "Cette session d'exercices comprend :\n• Classification de nombres complexes\n• Preuves d'appartenance aux ensembles\n• Démonstrations d'inclusions\n• Contre-exemples et cas particuliers\n• Méthodes de résolution rapide\n• Préparation aux examens",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      videoId: "dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant": return "bg-green-100 text-green-800 border-green-200";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Avancé": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleVideoClick = (videoId: number, url: string) => {
    setLoadingVideo(videoId);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setLoadingVideo(null);
    }, 500);
  };

  const handleEmbedPlay = (videoId: string) => {
    setCurrentVideoId(videoId);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/lessons" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-all duration-200 hover:scale-105">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Retour aux leçons</span>
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-800">Vidéos Explicatives</h1>
            <p className="text-sm text-gray-600">Les ensembles de nombres - Cours interactifs</p>
          </div>
          <div className="text-sm text-indigo-600 font-medium">
            {videos.length} vidéos disponibles
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Vidéos recommandées</h2>
            <p className="text-gray-600 text-lg">Apprenez avec nos vidéos explicatives sélectionnées par des experts</p>
            <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />Durée totale: 56 min</span>
              <span className="flex items-center"><Users className="h-4 w-4 mr-1" />56.4K vues</span>
            </div>
          </div>

          <div className="grid gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className={`${getDifficultyColor(video.difficulty)} font-medium border`}>
                          {video.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-gray-600 border-gray-300">
                          <Clock className="h-3 w-3 mr-1" />
                          {video.duration}
                        </Badge>
                        <Badge variant="outline" className="text-gray-600 border-gray-300">
                          <Users className="h-3 w-3 mr-1" />
                          {video.views} vues
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                        {video.title}
                      </CardTitle>
                      <p className="text-gray-600 leading-relaxed mb-4">{video.description}</p>
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-semibold text-gray-800 mb-2">Contenu détaillé :</h4>
                        <p className="text-gray-700 text-sm whitespace-pre-line">{video.detailedContent}</p>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-full group-hover:bg-red-100 transition-colors ml-6">
                      <Play className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button 
                          onClick={() => handleEmbedPlay(video.videoId)}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex-1 py-3"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Regarder ici
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                        <DialogHeader className="p-4 border-b">
                          <DialogTitle className="text-lg font-semibold">
                            {videos.find(v => v.videoId === currentVideoId)?.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="flex-1 p-4">
                          <div className="relative w-full" style={{aspectRatio: '16/9'}}>
                            <iframe
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&hd=1&quality=hd1080`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="rounded-lg absolute inset-0"
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      onClick={() => handleVideoClick(video.id, video.url)}
                      disabled={loadingVideo === video.id}
                      variant="outline"
                      className="border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700 transition-all duration-200"
                    >
                      {loadingVideo === video.id ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-red-600 border-t-transparent mr-2"></div>
                          Chargement...
                        </>
                      ) : (
                        <>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Nouvel onglet
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Continuez votre apprentissage</h3>
              <p className="text-gray-600 mb-4">Renforcez vos connaissances avec nos cours interactifs et exercices pratiques</p>
              <div className="flex justify-center space-x-4">
                <Link to="/lesson/1/course">
                  <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all duration-200">
                    <Play className="h-4 w-4 mr-2" />
                    Cours interactif
                  </Button>
                </Link>
                <Link to="/lesson/1/exercises">
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-200">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Exercices pratiques
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson1Videos;
