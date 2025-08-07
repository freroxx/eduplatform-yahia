
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Video, ExternalLink, Play } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import { mathLessonsData } from "@/data/mathCourseData";

const MathVideos = () => {
  const { id } = useParams();
  const currentLesson = mathLessonsData[id || "101"];

  if (!currentLesson || !currentLesson.videos) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <GlobalHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Vidéos non disponibles</h1>
            <p className="text-muted-foreground mb-4">Les vidéos pour cette leçon seront bientôt disponibles.</p>
            <Link to="/lessons/math">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux leçons
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <GlobalHeader />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <Link to="/lessons/math">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux leçons
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2 justify-center">
                <Video className="h-6 w-6 text-red-600" />
                Vidéos - {currentLesson.title}
              </h1>
              <p className="text-sm text-muted-foreground">Ressources vidéo YouTube</p>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <Play className="h-4 w-4" />
              {currentLesson.videos.length} vidéos
            </Badge>
          </div>

          <div className="grid gap-6">
            {currentLesson.videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] hover-lift">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center gap-3">
                      <div className="bg-red-600 rounded-full p-2">
                        <Video className="h-5 w-5 text-white" />
                      </div>
                      {video.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-4 rounded-lg border-l-4 border-red-500">
                        <p className="text-muted-foreground mb-3">
                          Cliquez sur le bouton ci-dessous pour accéder à la vidéo YouTube explicative de ce chapitre.
                        </p>
                        <a 
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Regarder sur YouTube
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MathVideos;
