
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Clock, Target, Star, Trophy, Brain, Zap } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const PhysicsExercises = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);

  const exerciseData: { [key: string]: any } = {
    "101": {
      title: "Exercices - Gravitation universelle",
      exercises: [
        {
          id: 1,
          title: "Calcul de force gravitationnelle",
          difficulty: "Moyen",
          duration: "15 min",
          points: 20,
          question: "Calculez la force gravitationnelle entre la Terre (M = 5,97 × 10²⁴ kg) et la Lune (m = 7,35 × 10²² kg), sachant que la distance Terre-Lune est de 384 400 km.\n\nDonnée : G = 6,67 × 10⁻¹¹ N⋅m²/kg²",
          solution: "Solution détaillée :\n\n1) Conversion de la distance :\nd = 384 400 km = 3,844 × 10⁸ m\n\n2) Application de la formule :\nF = G × (M × m) / d²\nF = 6,67 × 10⁻¹¹ × (5,97 × 10²⁴ × 7,35 × 10²²) / (3,844 × 10⁸)²\n\n3) Calcul :\nF = 6,67 × 10⁻¹¹ × 4,39 × 10⁴⁷ / 1,48 × 10¹⁷\nF = 1,98 × 10²⁰ N\n\nLa force gravitationnelle Terre-Lune est de 1,98 × 10²⁰ N"
        },
        {
          id: 2,
          title: "Pesanteur sur la Lune",
          difficulty: "Facile",
          duration: "10 min",
          points: 15,
          question: "La pesanteur sur la Lune est 6 fois plus faible que sur Terre. Si votre poids sur Terre est de 600 N, quel sera votre poids sur la Lune ?",
          solution: "Solution :\n\nDonnées :\n• Poids sur Terre : P_Terre = 600 N\n• Pesanteur lunaire = Pesanteur terrestre / 6\n\nCalcul :\nP_Lune = P_Terre / 6\nP_Lune = 600 / 6 = 100 N\n\nVotre poids sur la Lune sera de 100 N"
        },
        {
          id: 3,
          title: "Satellite géostationnaire",
          difficulty: "Difficile",
          duration: "25 min",
          points: 30,
          question: "Un satellite géostationnaire orbite à 35 786 km d'altitude au-dessus de l'équateur. Calculez sa vitesse orbitale.\n\nDonnées : R_Terre = 6 371 km, M_Terre = 5,97 × 10²⁴ kg",
          solution: "Solution complète :\n\n1) Rayon orbital :\nr = R_Terre + altitude = 6 371 + 35 786 = 42 157 km = 4,22 × 10⁷ m\n\n2) Pour un mouvement circulaire uniforme :\nF_gravitationnelle = F_centripète\nGMm/r² = mv²/r\n\n3) Simplification :\nGM/r = v²\nv = √(GM/r)\n\n4) Application numérique :\nv = √(6,67 × 10⁻¹¹ × 5,97 × 10²⁴ / 4,22 × 10⁷)\nv = √(9,43 × 10⁶)\nv = 3 070 m/s ≈ 3,07 km/s\n\nLa vitesse orbitale est de 3,07 km/s"
        }
      ]
    },
    "114": {
      title: "Exercices - Courant électrique",
      exercises: [
        {
          id: 4,
          title: "Calcul d'intensité",
          difficulty: "Facile",
          duration: "8 min",
          points: 10,
          question: "Quelle est l'intensité du courant si une charge de 120 C traverse une section de conducteur en 2 minutes ?",
          solution: "Solution :\n\nDonnées :\n• Charge Q = 120 C\n• Temps t = 2 min = 120 s\n\nFormule : I = Q / t\n\nApplication :\nI = 120 / 120 = 1 A\n\nL'intensité du courant est de 1 A"
        },
        {
          id: 5,
          title: "Application de la loi d'Ohm",
          difficulty: "Moyen",
          duration: "12 min",
          points: 18,
          question: "Une résistance de 50 Ω est parcourue par un courant de 0,2 A. Quelle est la tension à ses bornes ?",
          solution: "Solution :\n\nDonnées :\n• Résistance R = 50 Ω\n• Intensité I = 0,2 A\n\nLoi d'Ohm : U = R × I\n\nApplication :\nU = 50 × 0,2 = 10 V\n\nLa tension aux bornes de la résistance est de 10 V"
        }
      ]
    },
    "115": {
      title: "Exercices - Mécanique",
      exercises: [
        {
          id: 6,
          title: "Application de F = ma",
          difficulty: "Moyen",
          duration: "15 min",
          points: 20,
          question: "Une voiture de masse 1200 kg accélère de 0 à 100 km/h en 10 s. Quelle est la force motrice supposée constante ?",
          solution: "Solution :\n\n1) Conversion de vitesse :\nv = 100 km/h = 100/3,6 = 27,8 m/s\n\n2) Calcul de l'accélération :\na = Δv/Δt = (27,8 - 0)/10 = 2,78 m/s²\n\n3) Application de F = ma :\nF = 1200 × 2,78 = 3 336 N\n\nLa force motrice est de 3 336 N ≈ 3,34 kN"
        }
      ]
    }
  };

  const currentExercises = exerciseData[id || "101"];

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
    <div className="min-h-screen animated-bg">
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
              <Card className="glass-effect hover-lift border-0 shadow-lg overflow-hidden">
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
