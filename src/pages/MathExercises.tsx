
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Clock, Target, Star, Trophy, Brain, Calculator } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import GlobalHeader from "@/components/GlobalHeader";
import { mathLessonsData } from "@/data/mathCourseData";
import { useProgressTracker } from "@/hooks/useProgressTracker";
import EnhancedProgressTracker from "@/components/EnhancedProgressTracker";

const MathExercises = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { getSubjectProgress, completeExercise, addStudyTime } = useProgressTracker();
  
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);
  const [startTime] = useState(Date.now());

  const currentLesson = mathLessonsData[id || "1"];
  const subjectProgress = getSubjectProgress("Mathématiques");
  
  // Track study time when component unmounts
  useEffect(() => {
    return () => {
      const studyDuration = Math.floor((Date.now() - startTime) / 1000 / 60); // minutes
      if (studyDuration > 0) {
        addStudyTime("Mathématiques", studyDuration);
      }
    };
  }, [startTime, addStudyTime]);

  const toggleExercise = (exerciseId: number, points: number) => {
    const exerciseKey = `${id}-${exerciseId}`;
    const isCompleted = subjectProgress.completedExercises.includes(exerciseKey);
    
    if (!isCompleted) {
      completeExercise("Mathématiques", exerciseKey, points);
      toast({
        title: "Exercice terminé ! 🎉",
        description: `+${points} points ! Excellent travail !`,
      });
    }
  };

  const toggleSolution = (exerciseId: number) => {
    setOpenSolutions(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(x => x !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800 border-green-200";
      case "Moyen": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Difficile": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const isExerciseCompleted = (exerciseId: number) => {
    const exerciseKey = `${id}-${exerciseId}`;
    return subjectProgress.completedExercises.includes(exerciseKey);
  };

  if (!currentLesson || !currentLesson.exercices) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <GlobalHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Exercices non disponibles</h1>
            <p className="text-muted-foreground mb-4">Les exercices pour cette leçon seront bientôt disponibles.</p>
            <Link to="/math">
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

  const completedCount = currentLesson.exercices.filter(ex => isExerciseCompleted(ex.id)).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <GlobalHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          >
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link to="/math">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Retour aux leçons
                  </Button>
                </Link>
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-foreground flex items-center gap-2 justify-center">
                    <Calculator className="h-6 w-6 text-blue-600" />
                    {currentLesson.title}
                  </h1>
                  <p className="text-sm text-muted-foreground">Exercices d'application</p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Trophy className="h-4 w-4" />
                  {completedCount} terminés
                </Badge>
              </div>

              {/* Exercises */}
              <div className="space-y-6">
                {currentLesson.exercices.map((exercise, index) => (
                  <motion.div
                    key={exercise.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] hover-lift">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <Badge className={`${getDifficultyColor(exercise.difficulty)} font-medium border`}>
                                <Target className="h-3 w-3 mr-1" />
                                {exercise.difficulty}
                              </Badge>
                              <Badge variant="outline">
                                <Clock className="h-3 w-3 mr-1" />
                                {exercise.duration}
                              </Badge>
                              <Badge variant="outline" className="text-orange-600 border-orange-300">
                                <Star className="h-3 w-3 mr-1" />
                                {exercise.points} pts
                              </Badge>
                            </div>
                            <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                              <Brain className="h-5 w-5 text-blue-600" />
                              {exercise.title}
                            </CardTitle>
                          </div>
                          <Button
                            onClick={() => toggleExercise(exercise.id, exercise.points)}
                            variant={isExerciseCompleted(exercise.id) ? "default" : "outline"}
                            size="sm"
                            className={`transition-all duration-200 ${
                              isExerciseCompleted(exercise.id) 
                                ? 'bg-green-600 hover:bg-green-700 shadow-lg' 
                                : 'hover:border-green-500'
                            }`}
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            {isExerciseCompleted(exercise.id) ? "Terminé ✓" : "Marquer fait"}
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line font-medium">{exercise.question}</p>
                          </div>
                          
                          <Button
                            onClick={() => toggleSolution(exercise.id)}
                            variant="ghost"
                            className="w-full hover:bg-accent/50 transition-colors"
                          >
                            {openSolutions.includes(exercise.id) ? 'Masquer la solution' : '🔍 Voir la solution'}
                          </Button>
                          
                          {openSolutions.includes(exercise.id) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500"
                            >
                              <p className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                                <Trophy className="h-4 w-4" />
                                Solution détaillée :
                              </p>
                              <pre className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono text-sm">{exercise.solution}</pre>
                            </motion.div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar - Progress Tracker */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <EnhancedProgressTracker 
                  subject="Mathématiques"
                  totalLessons={15}
                  totalExercises={45}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MathExercises;
