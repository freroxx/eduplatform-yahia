
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, BookOpen, Play, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HistoryGeoLessons = () => {
  const navigate = useNavigate();
  const [selectedSemester, setSelectedSemester] = useState<1 | 2>(1);

  const historyGeoLessons = {
    1: [
      {
        id: 1,
        title: "La Méditerranée médiévale",
        description: "Les échanges commerciaux et culturels en Méditerranée",
        duration: "2h30",
        difficulty: "Intermédiaire"
      },
      {
        id: 2,
        title: "L'Europe des Lumières",
        description: "La circulation des idées au XVIIIe siècle",
        duration: "3h00",
        difficulty: "Avancé"
      },
      {
        id: 3,
        title: "Les espaces de faible densité",
        description: "Géographie des espaces ruraux",
        duration: "2h00",
        difficulty: "Débutant"
      },
      {
        id: 4,
        title: "Mers et océans",
        description: "Un monde maritimisé",
        duration: "2h45",
        difficulty: "Intermédiaire"
      }
    ],
    2: [
      {
        id: 5,
        title: "La Révolution française",
        description: "Causes et conséquences de la Révolution",
        duration: "3h30",
        difficulty: "Avancé"
      },
      {
        id: 6,
        title: "L'urbanisation du monde",
        description: "Processus et enjeux de l'urbanisation",
        duration: "2h15",
        difficulty: "Intermédiaire"
      },
      {
        id: 7,
        title: "Les dynamiques territoriales",
        description: "L'organisation du territoire français",
        duration: "2h30",
        difficulty: "Intermédiaire"
      },
      {
        id: 8,
        title: "L'Europe dans le monde",
        description: "Les enjeux européens contemporains",
        duration: "3h00",
        difficulty: "Avancé"
      }
    ]
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Intermédiaire": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Avancé": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-amber-900 dark:to-orange-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="mb-4 hover:bg-white/10 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
          
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            <div>
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                Histoire-Géographie
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Explorez les civilisations et territoires à travers le temps
              </p>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <Button
              onClick={() => setSelectedSemester(1)}
              variant={selectedSemester === 1 ? "default" : "outline"}
              className="backdrop-blur-sm"
            >
              Semestre 1
            </Button>
            <Button
              onClick={() => setSelectedSemester(2)}
              variant={selectedSemester === 2 ? "default" : "outline"}
              className="backdrop-blur-sm"
            >
              Semestre 2
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {historyGeoLessons[selectedSemester].map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 hover:scale-105">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
                      {lesson.title}
                    </CardTitle>
                    <Badge className={getDifficultyColor(lesson.difficulty)}>
                      {lesson.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {lesson.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    {lesson.duration}
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 hover:bg-amber-100 dark:hover:bg-amber-900"
                    >
                      <BookOpen className="w-4 h-4" />
                      Cours
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 hover:bg-amber-100 dark:hover:bg-amber-900"
                    >
                      <PenTool className="w-4 h-4" />
                      Exercices
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 hover:bg-amber-100 dark:hover:bg-amber-900"
                    >
                      <Play className="w-4 h-4" />
                      Vidéos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HistoryGeoLessons;
