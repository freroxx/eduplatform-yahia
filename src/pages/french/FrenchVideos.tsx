
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Play, ExternalLink, Clock, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const FrenchVideos = () => {
  const { id } = useParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string>("");

  const videoData: { [key: string]: any } = {
    "301": {
      title: "Vidéos - Typologie textuelle",
      videos: [
        {
          id: 1,
          title: "Les types de textes expliqués",
          duration: "15:30",
          difficulty: "Débutant",
          views: "12.3K",
          description: "Comprendre les différents types de textes : narratif, descriptif, argumentatif et explicatif.",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          videoId: "dQw4w9WgXcQ"
        },
        {
          id: 2,
          title: "Le schéma narratif en 5 étapes",
          duration: "18:45",
          difficulty: "Intermédiaire",
          views: "8.7K",
          description: "Analyser la structure d'un récit selon le schéma narratif classique.",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          videoId: "dQw4w9WgXcQ"
        }
      ]
    },
    "302": {
      title: "Vidéos - Guy de Maupassant",
      videos: [
        {
          id: 3,
          title: "Maupassant et le réalisme",
          duration: "22:15",
          difficulty: "Intermédiaire",
          views: "15.2K",
          description: "Découvrir l'univers de Maupassant et les caractéristiques du mouvement réaliste.",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          videoId: "dQw4w9WgXcQ"
        },
        {
          id: 4,
          title: "Analyse de 'La Ficelle'",
          duration: "25:30",
          difficulty: "Avancé",
          views: "9.8K",
          description: "Analyse complète de la nouvelle 'La Ficelle' : thèmes, personnages et techniques narratives.",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          videoId: "dQw4w9WgXcQ"
        }
      ]
    }
  };

  const currentVideos = videoData[id || "301"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/lessons/french" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-all duration-200">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Retour aux leçons</span>
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground">Vidéos de Français</h1>
            <p className="text-sm text-muted-foreground">{currentVideos?.title}</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {currentVideos?.videos.map((video: any) => (
            <Card key={video.id} className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge className="bg-red-100 text-red-800 border-red-200">
                        {video.difficulty}
                      </Badge>
                      <Badge variant="outline">
                        <Clock className="h-3 w-3 mr-1" />
                        {video.duration}
                      </Badge>
                      <Badge variant="outline">
                        <Users className="h-3 w-3 mr-1" />
                        {video.views} vues
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {video.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{video.description}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-full">
                    <Play className="h-8 w-8 text-red-600" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={() => {
                          setCurrentVideoId(video.videoId);
                          setIsDialogOpen(true);
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white flex-1"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Regarder ici
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                      <DialogHeader className="p-4 border-b">
                        <DialogTitle>
                          {currentVideos.videos.find((v: any) => v.videoId === currentVideoId)?.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex-1 p-4">
                        <div className="relative w-full" style={{aspectRatio: '16/9'}}>
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    onClick={() => window.open(video.url, '_blank')}
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Nouvel onglet
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrenchVideos;
