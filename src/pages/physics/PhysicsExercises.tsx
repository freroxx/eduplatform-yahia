
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Clock, Target, Star, Trophy, Brain, Zap } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { physicsExercises } from "@/data/courseData";

const PhysicsExercises = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);

  const currentExercises = physicsExercises[id || "101"];

  const toggleExercise = (exerciseId: number) => {
    const isCompleted = completedExercises.includes(exerciseId);
    if (!isCompleted) {
      setCompletedExercises(prev => [...prev, exerciseId]);
      toast({
        title: "Exercice terminé ! 🎉",
        description: "Excellent travail ! Continuez ainsi.",
      });
    } else {
      setCompletedExercises(prev => prev.filter(x => x !== exerciseId));
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/lessons/physics" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-all duration-200">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Retour aux leçons</span>
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Zap className="h-6 w-6 text-emerald-600" />
              Exercices de Physique
            </h1>
            <p className="text-sm text-muted-foreground">{currentExercises?.title}</p>
          </div>
          <Badge variant="outline" className="flex items-center gap-1">
            <Trophy className="h-4 w-4" />
            {completedExercises.length} terminés
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {currentExercises?.exercises.map((exercise: any, index: number) => (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] overflow-hidden">
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
                        <Brain className="h-5 w-5 text-emerald-600" />
                        {exercise.title}
                      </CardTitle>
                    </div>
                    <Button
                      onClick={() => toggleExercise(exercise.id)}
                      variant={completedExercises.includes(exercise.id) ? "default" : "outline"}
                      size="sm"
                      className={`transition-all duration-300 ${
                        completedExercises.includes(exercise.id) 
                          ? 'bg-green-600 hover:bg-green-700 shadow-lg' 
                          : 'hover:border-green-500'
                      }`}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      {completedExercises.includes(exercise.id) ? "Terminé ✓" : "Marquer fait"}
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
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500"
                      >
                        <p className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                          <Trophy className="h-4 w-4" />
                          Solution détaillée :
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line font-mono text-sm">{exercise.solution}</p>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhysicsExercises;
