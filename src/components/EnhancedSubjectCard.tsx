
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, FileText, Video, Clock, Target, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useExerciseProgress } from "@/hooks/useExerciseProgress";

interface Subject {
  id: string;
  name: string;
  nameArabic?: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  lessons: number;
  exercises: number;
  duration: string;
  difficulty: "Facile" | "Moyen" | "Difficile";
  path: string;
  isNew?: boolean;
  featured?: boolean;
}

interface EnhancedSubjectCardProps {
  subject: Subject;
  index: number;
}

const EnhancedSubjectCard = ({ subject, index }: EnhancedSubjectCardProps) => {
  const { totalPoints, completedExercises } = useExerciseProgress();
  
  // Calculate progress (mock calculation based on completed exercises)
  const totalExercises = subject.exercises;
  const completedCount = Math.min(completedExercises.length, totalExercises);
  const progress = totalExercises > 0 ? (completedCount / totalExercises) * 100 : 0;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "text-green-600 bg-green-100 border-green-200";
      case "Moyen": return "text-yellow-600 bg-yellow-100 border-yellow-200";
      case "Difficile": return "text-red-600 bg-red-100 border-red-200";
      default: return "text-gray-600 bg-gray-100 border-gray-200";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className={`h-full bg-gradient-to-br ${subject.bgGradient} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}>
        {subject.isNew && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-red-500 text-white border-0 shadow-lg animate-pulse">
              Nouveau !
            </Badge>
          </div>
        )}
        
        {subject.featured && (
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-yellow-500 text-white border-0 shadow-lg">
              <Star className="h-3 w-3 mr-1" />
              Populaire
            </Badge>
          </div>
        )}

        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {subject.icon}
            </div>
            {progress > 0 && (
              <div className="text-right">
                <div className="text-sm font-medium text-white/80 mb-1">Progression</div>
                <div className="text-lg font-bold text-white">{Math.round(progress)}%</div>
              </div>
            )}
          </div>
          
          <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
            {subject.name}
          </CardTitle>
          {subject.nameArabic && (
            <div className="text-lg font-semibold text-white/90 mb-2" dir="rtl">
              {subject.nameArabic}
            </div>
          )}
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            {subject.description}
          </p>
          
          {progress > 0 && (
            <div className="mb-4">
              <Progress value={progress} className="h-2 bg-white/20">
                <div 
                  className="h-full bg-white/80 transition-all duration-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </Progress>
            </div>
          )}
        </CardHeader>

        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <BookOpen className="h-5 w-5 text-white/80 mx-auto mb-1" />
              <div className="text-sm font-medium text-white">{subject.lessons}</div>
              <div className="text-xs text-white/70">Leçons</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <FileText className="h-5 w-5 text-white/80 mx-auto mb-1" />
              <div className="text-sm font-medium text-white">{subject.exercises}</div>
              <div className="text-xs text-white/70">Exercices</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className={`${getDifficultyColor(subject.difficulty)} font-medium border text-xs`}>
              <Target className="h-3 w-3 mr-1" />
              {subject.difficulty}
            </Badge>
            <Badge variant="outline" className="text-white border-white/30 bg-white/10 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              {subject.duration}
            </Badge>
            {progress > 0 && (
              <Badge variant="outline" className="text-white border-white/30 bg-white/10 text-xs">
                <TrendingUp className="h-3 w-3 mr-1" />
                {completedCount}/{totalExercises}
              </Badge>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Link to={`/lessons/${subject.path}`} className="w-full">
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-200 hover:scale-105">
                <BookOpen className="h-4 w-4 mr-2" />
                Explorer les leçons
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnhancedSubjectCard;
