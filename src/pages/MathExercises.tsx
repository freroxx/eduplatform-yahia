
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Clock, Target, Star, Trophy, Brain, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import GlobalHeader from "@/components/GlobalHeader";

const MathExercises = () => {
  const { toast } = useToast();
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);

  const exercises = [
    {
      id: 1,
      title: "Résolution d'équations du second degré",
      difficulty: "Moyen",
      duration: "15 min",
      points: 10,
      question: `Résoudre l'équation suivante :
2x² - 5x + 2 = 0

Détaillez votre démarche en calculant le discriminant et en donnant les solutions exactes.`,
      solution: `Résolution :
1) Identification des coefficients :
   a = 2, b = -5, c = 2

2) Calcul du discriminant :
   Δ = b² - 4ac = (-5)² - 4(2)(2) = 25 - 16 = 9

3) Comme Δ > 0, l'équation a deux solutions distinctes :
   x₁ = (5 + √9)/(2×2) = (5 + 3)/4 = 2
   x₂ = (5 - √9)/(2×2) = (5 - 3)/4 = 1/2

Vérification :
- Pour x = 2 : 2(2)² - 5(2) + 2 = 8 - 10 + 2 = 0 ✓
- Pour x = 1/2 : 2(1/4) - 5(1/2) + 2 = 1/2 - 5/2 + 2 = 0 ✓

Réponse : S = {1/2 ; 2}`
    },
    {
      id: 2,
      title: "Étude de fonction",
      difficulty: "Difficile",
      duration: "20 min",
      points: 15,
      question: `Soit f(x) = x² - 4x + 3

1) Déterminer le domaine de définition de f
2) Calculer f'(x) et étudier le signe de f'(x)
3) Dresser le tableau de variations de f
4) Déterminer les coordonnées du sommet de la parabole`,
      solution: `Résolution :

1) Domaine de définition :
   f est un polynôme du second degré, donc Df = ℝ

2) Calcul de la dérivée :
   f'(x) = 2x - 4
   
   Signe de f'(x) :
   f'(x) = 0 ⟺ 2x - 4 = 0 ⟺ x = 2
   f'(x) > 0 ⟺ x > 2
   f'(x) < 0 ⟺ x < 2

3) Tableau de variations :
   x    │ -∞        2        +∞
   f'(x)│    -      0      +
   f(x) │    ↘    -1      ↗

4) Coordonnées du sommet :
   Abscisse : x = 2
   Ordonnée : f(2) = 4 - 8 + 3 = -1
   
   Le sommet est S(2, -1)`
    },
    {
      id: 3,
      title: "Calculs statistiques",
      difficulty: "Facile",
      duration: "10 min",
      points: 8,
      question: `Les notes d'un contrôle de mathématiques sont :
12, 15, 8, 16, 11, 13, 9, 14, 10, 17

Calculer :
1) La moyenne
2) La médiane
3) L'étendue`,
      solution: `Résolution :

Données ordonnées : 8, 9, 10, 11, 12, 13, 14, 15, 16, 17

1) Moyenne :
   x̄ = (8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17) ÷ 10
   x̄ = 125 ÷ 10 = 12,5

2) Médiane :
   N = 10 (pair)
   Médiane = (note₅ + note₆) ÷ 2 = (12 + 13) ÷ 2 = 12,5

3) Étendue :
   E = Max - Min = 17 - 8 = 9

Réponses :
- Moyenne = 12,5
- Médiane = 12,5  
- Étendue = 9`
    },
    {
      id: 4,
      title: "Système d'équations",
      difficulty: "Moyen",
      duration: "12 min",
      points: 12,
      question: `Résoudre le système d'équations suivant :
{2x + 3y = 7
{x - y = 1

Utilisez la méthode de substitution.`,
      solution: `Résolution par substitution :

1) À partir de la deuxième équation :
   x - y = 1 ⟹ x = y + 1

2) Substitution dans la première équation :
   2(y + 1) + 3y = 7
   2y + 2 + 3y = 7
   5y + 2 = 7
   5y = 5
   y = 1

3) Calcul de x :
   x = y + 1 = 1 + 1 = 2

4) Vérification :
   • 2(2) + 3(1) = 4 + 3 = 7 ✓
   • 2 - 1 = 1 ✓

Solution : (x, y) = (2, 1)`
    }
  ];

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
      <GlobalHeader />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/lessons/math">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux leçons
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2 justify-center">
                <Calculator className="h-6 w-6 text-blue-600" />
                Exercices de Mathématiques
              </h1>
              <p className="text-sm text-muted-foreground">Entraînement et perfectionnement</p>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <Trophy className="h-4 w-4" />
              {completedExercises.length} terminés
            </Badge>
          </div>

          {/* Exercises */}
          <div className="space-y-6">
            {exercises.map((exercise, index) => (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
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
        </motion.div>
      </div>
    </div>
  );
};

export default MathExercises;
