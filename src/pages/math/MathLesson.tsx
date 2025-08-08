
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Play, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import EnhancedCourseSlide from "@/components/EnhancedCourseSlide";
import EnhancedVideoViewer from "@/components/EnhancedVideoViewer";

interface MathLessonProps {
  type: "course" | "exercises" | "videos";
}

const MathLesson = ({ type }: MathLessonProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getIcon = () => {
    switch (type) {
      case "course": return <BookOpen className="w-5 h-5" />;
      case "exercises": return <PenTool className="w-5 h-5" />;
      case "videos": return <Play className="w-5 h-5" />;
    }
  };

  const getTitle = () => {
    switch (type) {
      case "course": return "Cours";
      case "exercises": return "Exercices";
      case "videos": return "Vidéos";
    }
  };

  // Sample data for course slides
  const courseSlides = [
    {
      title: "Introduction",
      content: `Contenu du cours de mathématiques - Leçon ${id}\n\nCeci est une leçon d'introduction aux concepts mathématiques.`,
      type: "intro" as const
    },
    {
      title: "Développement",
      content: `Développement des concepts principaux de la leçon ${id}.`,
      type: "content" as const
    },
    {
      title: "Conclusion",
      content: `Résumé et conclusion de la leçon ${id}.`,
      type: "conclusion" as const
    }
  ];

  // Sample video data
  const sampleVideos = [
    {
      id: "1",
      title: `Mathématiques - Leçon ${id} - Partie 1`,
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      duration: "10:30",
      description: "Introduction aux concepts de base"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            onClick={() => navigate("/math")}
            variant="ghost"
            className="mb-4 hover:bg-white/10 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux leçons
          </Button>
          
          <div className="flex items-center gap-3 mb-2">
            {getIcon()}
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              Mathématiques - Leçon {id}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {getTitle()} - Leçon {id}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {type === "course" && (
            <EnhancedCourseSlide
              lessonTitle={`Cours de Mathématiques - Leçon ${id}`}
              slides={courseSlides}
            />
          )}
          
          {type === "videos" && (
            <EnhancedVideoViewer
              videos={sampleVideos}
              title={`Vidéos - Leçon ${id}`}
            />
          )}
          
          {type === "exercises" && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Exercices - Leçon {id}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Les exercices pour cette leçon seront bientôt disponibles.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MathLesson;
