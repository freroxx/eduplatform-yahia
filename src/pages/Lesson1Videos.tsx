
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, ChevronLeft, Home, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";

const Lesson1Videos = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoSets = {
    "1": {
      title: "Généralités sur les fonctions",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Introduction aux fonctions",
          description: "Découvrez ce qu'est une fonction mathématique et ses propriétés de base.",
          duration: "12:34",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Domaine de définition",
          description: "Apprenez à déterminer le domaine de définition d'une fonction.",
          duration: "15:22",
          level: "Intermédiaire"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Représentation graphique",
          description: "Comment tracer et interpréter le graphique d'une fonction.",
          duration: "18:45",
          level: "Intermédiaire"
        }
      ]
    },
    "2": {
      title: "Fonctions de référence",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Fonctions linéaires et affines",
          description: "Étude complète des fonctions du premier degré.",
          duration: "16:28",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Fonction carrée",
          description: "Propriétés et représentation de la fonction x².",
          duration: "14:12",
          level: "Intermédiaire"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Fonction inverse",
          description: "Comprendre et utiliser la fonction 1/x.",
          duration: "13:56",
          level: "Intermédiaire"
        }
      ]
    },
    "3": {
      title: "Équations et inéquations",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Résolution d'équations du 1er degré",
          description: "Méthodes pour résoudre les équations linéaires.",
          duration: "11:43",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Équations du second degré",
          description: "Utilisation du discriminant et des formules.",
          duration: "19:27",
          level: "Avancé"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Inéquations et tableaux de signes",
          description: "Techniques de résolution des inéquations.",
          duration: "22:15",
          level: "Avancé"
        }
      ]
    },
    "4": {
      title: "Statistiques descriptives",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Mesures de tendance centrale",
          description: "Moyenne, médiane et mode expliqués simplement.",
          duration: "13:28",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Mesures de dispersion",
          description: "Variance, écart-type et autres indicateurs.",
          duration: "17:34",
          level: "Intermédiaire"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Représentations graphiques",
          description: "Histogrammes, diagrammes et interprétation.",
          duration: "15:42",
          level: "Intermédiaire"
        }
      ]
    },
    "5": {
      title: "Géométrie dans l'espace",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Solides usuels",
          description: "Cube, cylindre, sphère : propriétés et formules.",
          duration: "16:18",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Calculs de volumes",
          description: "Applications pratiques des formules de volume.",
          duration: "20:45",
          level: "Intermédiaire"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Transformations géométriques",
          description: "Translation, rotation et symétries dans l'espace.",
          duration: "18:33",
          level: "Avancé"
        }
      ]
    },
    "6": {
      title: "Trigonométrie",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Relations trigonométriques de base",
          description: "Sinus, cosinus et tangente dans le triangle rectangle.",
          duration: "14:56",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Cercle trigonométrique",
          description: "Extension des fonctions trigonométriques.",
          duration: "21:12",
          level: "Intermédiaire"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Applications pratiques",
          description: "Résolution de problèmes avec la trigonométrie.",
          duration: "19:38",
          level: "Avancé"
        }
      ]
    }
  };

  const currentSet = videoSets[id as keyof typeof videoSets] || videoSets["1"];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant": return "bg-green-100 text-green-800 border-green-200";
      case "Intermédiaire": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Avancé": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen animated-bg">
      <GlobalHeader />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/lessons/math">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Retour aux leçons
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Accueil
              </Button>
            </Link>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
              <Play className="h-8 w-8 text-red-600" />
              {currentSet.title}
            </h1>
            <p className="text-muted-foreground">
              Chapitre {id} - Vidéos explicatives
            </p>
          </div>

          {/* Video Player */}
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedVideo}?rel=0`}
                      title="Video explicative"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Video List */}
          <div className="grid gap-6">
            {currentSet.videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className={`${getLevelColor(video.level)} font-medium border`}>
                            {video.level}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {video.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-red-600 transition-colors">
                          {video.title}
                        </CardTitle>
                        <p className="text-muted-foreground mt-2 leading-relaxed">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      <Button
                        onClick={() => setSelectedVideo(video.id)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Regarder
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                      >
                        <a
                          href={`https://www.youtube.com/watch?v=${video.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Ouvrir sur YouTube
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Play className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Conseils pour bien utiliser les vidéos
                    </h3>
                    <ul className="text-blue-700 dark:text-blue-300 space-y-1 text-sm">
                      <li>• Prenez des notes pendant le visionnage</li>
                      <li>• N'hésitez pas à mettre en pause pour réfléchir</li>
                      <li>• Regardez plusieurs fois si nécessaire</li>
                      <li>• Pratiquez avec les exercices après chaque vidéo</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Lesson1Videos;
