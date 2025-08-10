
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Clock, Target, Star, Trophy, Brain, Calculator, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { mathExercisesData } from "@/data/mathCourseData";
import ConfettiAnimation from "@/components/ConfettiAnimation";
import { useProgressTracker } from "@/hooks/useProgressTracker";

const MathExercises = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { completeExercise, getSubjectProgress } = useProgressTracker();
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [allCompleted, setAllCompleted] = useState(false);

  const currentExercises = mathExercisesData[id || "1"];
  const progress = getSubjectProgress("Mathématiques");

  const toggleExercise = (exerciseId: number) => {
    const isCompleted = completedExercises.includes(exerciseId);
    if (!isCompleted) {
      const newCompleted = [...completedExercises, exerciseId];
      setCompletedExercises(newCompleted);
      
      // Track progress
      completeExercise("Mathématiques", `${id}-ex-${exerciseId}`, 10);
      
      // Check if all exercises are completed
      if (newCompleted.length === currentExercises?.exercises.length) {
        setAllCompleted(true);
        setShowConfetti(true);
        toast({
          title: "🎉 Tous les exercices terminés !",
          description: "Excellent travail ! Vous maîtrisez cette leçon.",
        });
      } else {
        toast({
          title: "✅ Exercice terminé !",
          description: "Excellent travail ! Continuez ainsi.",
        });
      }
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
      case "Facile": return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400";
      case "Moyen": return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Difficile": return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatContent = (content: string) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-bold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-blue-600">$1</em>')
      .replace(/✅/g, '<span class="text-green-600 font-bold">✅</span>')
      .replace(/❌/g, '<span class="text-red-600 font-bold">❌</span>');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ConfettiAnimation 
        trigger={showConfetti} 
        type="exercises"
        onComplete={() => setShowConfetti(false)} 
      />

      <header className="bg-background/90 backdrop-blur-lg border-b border-border/50 p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/lessons/math" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Retour aux leçons</span>
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Calculator className="h-6 w-6 text-blue-600" />
              Exercices de Mathématiques
              {allCompleted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Sparkles className="h-6 w-6 text-yellow-500" />
                </motion.div>
              )}
            </h1>
            <p className="text-sm text-muted-foreground">{currentExercises?.title}</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="flex items-center gap-1 border-blue-300 text-blue-700">
              <Trophy className="h-4 w-4" />
              {completedExercises.length} / {currentExercises?.exercises.length || 0}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 border-purple-300 text-purple-700">
              <Star className="h-4 w-4" />
              {progress.totalPoints} pts
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Exercices pratiques - Module {id}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mettez en pratique vos connaissances avec ces exercices corrigés
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          <AnimatePresence>
            {currentExercises?.exercises.map((exercise: any, index: number) => (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15 
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <motion.div
                            className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            {exercise.id}
                          </motion.div>
                          <Badge className={`${getDifficultyColor(exercise.difficulty)} font-medium border-2`}>
                            <Target className="h-3 w-3 mr-1" />
                            {exercise.difficulty}
                          </Badge>
                          <Badge variant="outline" className="border-2 border-slate-300 text-slate-600">
                            <Clock className="h-3 w-3 mr-1" />
                            {exercise.duration}
                          </Badge>
                          <Badge variant="outline" className="text-orange-600 border-orange-300 border-2">
                            <Star className="h-3 w-3 mr-1" />
                            {exercise.points} pts
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                          <Brain className="h-6 w-6 text-blue-600" />
                          {exercise.title}
                        </CardTitle>
                      </div>
                      <Button
                        onClick={() => toggleExercise(exercise.id)}
                        variant={completedExercises.includes(exercise.id) ? "default" : "outline"}
                        size="lg"
                        className={`transition-all duration-300 ${
                          completedExercises.includes(exercise.id) 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg scale-105' 
                            : 'hover:border-green-500 hover:text-green-600 hover:scale-105'
                        }`}
                      >
                        <CheckCircle className="h-5 w-5 mr-2" />
                        {completedExercises.includes(exercise.id) ? "✓ Terminé" : "Marquer fait"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 shadow-inner">
                        <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                          <Brain className="h-5 w-5" />
                          Énoncé :
                        </h4>
                        <div 
                          className="text-gray-700 dark:text-gray-300 whitespace-pre-line font-medium leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: formatContent(exercise.question) }}
                        />
                      </div>
                      
                      <Button
                        onClick={() => toggleSolution(exercise.id)}
                        variant="ghost"
                        size="lg"
                        className="w-full hover:bg-accent/60 transition-all duration-300 border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 group"
                      >
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          {openSolutions.includes(exercise.id) ? (
                            <>
                              <Trophy className="h-5 w-5 text-amber-600" />
                              Masquer la solution
                            </>
                          ) : (
                            <>
                              <Sparkles className="h-5 w-5 text-blue-600 group-hover:text-primary" />
                              Voir la solution détaillée
                            </>
                          )}
                        </motion.div>
                      </Button>
                      
                      <AnimatePresence>
                        {openSolutions.includes(exercise.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, scale: 0.95 }}
                            animate={{ opacity: 1, height: "auto", scale: 1 }}
                            exit={{ opacity: 0, height: 0, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-500 shadow-lg"
                          >
                            <h4 className="font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
                              <Trophy className="h-5 w-5" />
                              Solution détaillée :
                            </h4>
                            <div 
                              className="text-gray-700 dark:text-gray-300 whitespace-pre-line font-mono text-sm leading-relaxed bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg"
                              dangerouslySetInnerHTML={{ __html: formatContent(exercise.solution) }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MathExercises;
