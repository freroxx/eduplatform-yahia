
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Clock, Target, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const PhysicsExercises = () => {
  const { id } = useParams();
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
          solution: "F = G × (M × m) / d²\nF = 6,67 × 10⁻¹¹ × (5,97 × 10²⁴ × 7,35 × 10²²) / (3,844 × 10⁸)²\nF = 1,98 × 10²⁰ N"
        },
        {
          id: 2,
          title: "Pesanteur sur la Lune",
          difficulty: "Facile",
          duration: "10 min",
          points: 15,
          question: "La pesanteur sur la Lune est 6 fois plus faible que sur Terre. Si votre poids sur Terre est de 600 N, quel sera votre poids sur la Lune ?",
          solution: "P_Lune = P_Terre / 6 = 600 / 6 = 100 N"
        }
      ]
    },
    "114": {
      title: "Exercices - Courant électrique",
      exercises: [
        {
          id: 3,
          title: "Calcul d'intensité",
          difficulty: "Facile",
          duration: "8 min",
          points: 10,
          question: "Quelle est l'intensité du courant si une charge de 120 C traverse une section de conducteur en 2 minutes ?",
          solution: "I = Q / t = 120 / 120 = 1 A"
        }
      ]
    }
  };

  const currentExercises = exerciseData[id || "101"];

  const toggleExercise = (exerciseId: number) => {
    setCompletedExercises(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(x => x !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const toggleSolution = (exerciseId: number) => {
    setOpenSolutions(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(x => x !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/lessons/physics" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-all duration-200">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Retour aux leçons</span>
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground">Exercices de Physique</h1>
            <p className="text-sm text-muted-foreground">{currentExercises?.title}</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {currentExercises?.exercises.map((exercise: any) => (
            <Card key={exercise.id} className="bg-card/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
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
                    <CardTitle className="text-xl font-bold text-foreground">
                      {exercise.title}
                    </CardTitle>
                  </div>
                  <Button
                    onClick={() => toggleExercise(exercise.id)}
                    variant={completedExercises.includes(exercise.id) ? "default" : "outline"}
                    size="sm"
                    className={completedExercises.includes(exercise.id) ? 'bg-green-600 hover:bg-green-700' : ''}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {completedExercises.includes(exercise.id) ? "Terminé ✓" : "Marquer fait"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 whitespace-pre-line">{exercise.question}</p>
                  </div>
                  
                  <Button
                    onClick={() => toggleSolution(exercise.id)}
                    variant="ghost"
                    className="w-full"
                  >
                    {openSolutions.includes(exercise.id) ? 'Masquer la solution' : 'Voir la solution'}
                  </Button>
                  
                  {openSolutions.includes(exercise.id) && (
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="font-semibold text-green-800 mb-2">Solution :</p>
                      <p className="text-gray-700 whitespace-pre-line font-mono text-sm">{exercise.solution}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhysicsExercises;
