
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, ChevronLeft, Home, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";

const SVTVideos = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoSets = {
    "201": {
      title: "La cellule unité structurale du vivant",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Découverte de la cellule",
          description: "Histoire de la découverte de la cellule et premiers microscopes.",
          duration: "14:25",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ", 
          title: "Structure des cellules eucaryotes",
          description: "Tour d'horizon des organites et de leurs fonctions.",
          duration: "18:32",
          level: "Intermédiaire"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Division cellulaire : la mitose",
          description: "Mécanisme de la division cellulaire étape par étape.",
          duration: "16:45",
          level: "Avancé"
        }
      ]
    },
    "202": {
      title: "L'unité chimique du vivant",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Les biomolécules essentielles",
          description: "Présentation des 4 grandes familles de biomolécules.",
          duration: "15:18",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Structure et fonction des protéines",
          description: "De la séquence d'acides aminés à la fonction biologique.",
          duration: "20:12",
          level: "Intermédiaire"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "L'ADN, molécule de l'hérédité",
          description: "Structure de l'ADN et stockage de l'information génétique.",
          duration: "17:56",
          level: "Intermédiaire"
        }
      ]
    },
    "203": {
      title: "La biodiversité",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "La diversité du vivant",
          description: "Exploration de la richesse des espèces sur Terre.",
          duration: "22:30",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Classification phylogénétique",
          description: "Principes modernes de classification du vivant.",
          duration: "19:15",
          level: "Intermédiaire"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Écosystèmes remarquables",
          description: "Découverte des grands écosystèmes mondiaux.",
          duration: "25:40",
          level: "Débutant"
        }
      ]
    },
    "204": {
      title: "Géologie : structure de la Terre",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Voyage au centre de la Terre",
          description: "Exploration des couches internes de notre planète.",
          duration: "16:28",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Formation des roches",
          description: "Processus de formation des trois types de roches.",
          duration: "18:45",
          level: "Intermédiaire"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Tectonique des plaques",
          description: "Mouvement des plaques et conséquences géologiques.",
          duration: "21:33",
          level: "Avancé"
        }
      ]
    },
    "205": {
      title: "Écosystèmes et environnement",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Chaînes et réseaux alimentaires",
          description: "Relations trophiques dans les écosystèmes.",
          duration: "14:22",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Cycles biogéochimiques",
          description: "Circulation des éléments dans la biosphère.",
          duration: "19:47",
          level: "Intermédiaire"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Équilibres écologiques",
          description: "Mécanismes de régulation dans la nature.",
          duration: "17:18",
          level: "Intermédiaire"
        }
      ]
    },
    "206": {
      title: "L'Homme et l'environnement",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Impact humain sur l'environnement",
          description: "Conséquences des activités humaines sur la planète.",
          duration: "20:35",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Changement climatique expliqué",
          description: "Causes et conséquences du réchauffement global.",
          duration: "18:42",
          level: "Intermédiaire"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Solutions pour l'avenir",
          description: "Développement durable et énergies renouvelables.",
          duration: "16:55",
          level: "Débutant"
        }
      ]
    },
    "207": {
      title: "Génétique et hérédité",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "L'information génétique",
          description: "De l'ADN aux caractères héréditaires.",
          duration: "15:30",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Expression des gènes",
          description: "Transcription et traduction du code génétique.",
          duration: "22:15",
          level: "Avancé"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Lois de Mendel",
          description: "Transmission héréditaire des caractères.",
          duration: "17:48",
          level: "Intermédiaire"
        }
      ]
    },
    "208": {
      title: "Immunologie et santé",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "Nos défenses immunitaires",
          description: "Fonctionnement du système immunitaire humain.",
          duration: "19:12",
          level: "Débutant"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Vaccins et immunité",
          description: "Principe de la vaccination et immunité acquise.",
          duration: "16:38",
          level: "Intermédiaire"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "Maladies et prévention",
          description: "Stratégies de prévention des maladies.",
          duration: "18:25",
          level: "Débutant"
        }
      ]
    }
  };

  const currentSet = videoSets[id as keyof typeof videoSets] || videoSets["201"];

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
            <Link to="/lessons/svt">
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
              Leçon {id} - Vidéos explicatives SVT
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
                      title="Video explicative SVT"
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
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Play className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      Conseils pour bien apprendre les SVT
                    </h3>
                    <ul className="text-green-700 dark:text-green-300 space-y-1 text-sm">
                      <li>• Observez attentivement les schémas et diagrammes</li>
                      <li>• Reliez les concepts à des exemples concrets</li>
                      <li>• Pratiquez avec les exercices après chaque vidéo</li>
                      <li>• Tenez un carnet d'observations personnelles</li>
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

export default SVTVideos;
