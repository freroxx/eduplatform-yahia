
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Clock, Target, Calculator, Star, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const MathExercises = () => {
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);

  const exercises = [
    {
      id: 1,
      title: "Forme canonique d'une fonction du second degré",
      difficulty: "Moyen",
      duration: "15 min",
      points: 20,
      question: `Soit f(x) = x² - 6x + 7
      
1. Déterminer la forme canonique de f
2. En déduire les coordonnées du sommet de la parabole
3. Donner le sens de variation de f`,
      solution: `Solution détaillée:

1. Forme canonique:
   f(x) = x² - 6x + 7
   α = -(-6)/(2×1) = 3
   β = f(3) = 9 - 18 + 7 = -2
   Donc f(x) = (x - 3)² - 2

2. Coordonnées du sommet:
   S(3, -2)

3. Sens de variation:
   Puisque a = 1 > 0:
   - f est décroissante sur ]-∞; 3]
   - f est croissante sur [3; +∞[
   - f admet un minimum global de -2 en x = 3`
    },
    {
      id: 2,
      title: "Résolution d'équations du second degré",
      difficulty: "Facile",
      duration: "10 min", 
      points: 15,
      question: `Résoudre les équations suivantes:

a) x² - 5x + 6 = 0
b) 2x² - 8x + 8 = 0
c) x² - 4x + 5 = 0

Pour chaque équation, calculer le discriminant et donner le nombre de solutions.`,
      solution: `Solutions:

a) x² - 5x + 6 = 0
   Δ = 25 - 24 = 1 > 0
   x₁ = (5 - 1)/2 = 2 et x₂ = (5 + 1)/2 = 3
   S = {2; 3}

b) 2x² - 8x + 8 = 0
   Δ = 64 - 64 = 0
   x = 8/4 = 2 (solution double)
   S = {2}

c) x² - 4x + 5 = 0
   Δ = 16 - 20 = -4 < 0
   Pas de solution réelle
   S = ∅`
    },
    {
      id: 3,
      title: "Optimisation avec fonctions du second degré",
      difficulty: "Difficile",
      duration: "25 min",
      points: 25,
      question: `Un fermier dispose de 240 mètres de clôture pour entourer un terrain rectangulaire.

1. Exprimer l'aire A(x) du terrain en fonction de la largeur x
2. Déterminer les dimensions du terrain pour que l'aire soit maximale
3. Calculer cette aire maximale`,
      solution: `Solution:

1. Périmètre = 2x + 2y = 240
   Donc y = 120 - x
   Aire A(x) = x × y = x(120 - x) = 120x - x²

2. A(x) = -x² + 120x
   a = -1 < 0, donc A admet un maximum
   α = -120/(2×(-1)) = 60
   
   Dimensions optimales: x = 60 m et y = 60 m
   Le terrain est un carré de côté 60 m

3. Aire maximale: A(60) = 60 × 60 = 3600 m²`
    },
    {
      id: 4,
      title: "Étude complète d'une fonction",
      difficulty: "Difficile", 
      duration: "30 min",
      points: 30,
      question: `Soit f(x) = -2x² + 8x - 5

1. Déterminer la forme canonique de f
2. Étudier les variations de f
3. Résoudre f(x) = 0
4. Étudier le signe de f(x)
5. Tracer l'allure de la courbe représentative`,
      solution: `Solution complète:

1. Forme canonique:
   a = -2, b = 8, c = -5
   α = -8/(2×(-2)) = 2
   β = f(2) = -8 + 16 - 5 = 3
   f(x) = -2(x - 2)² + 3

2. Variations:
   a = -2 < 0, sommet S(2, 3)
   f croissante sur ]-∞; 2]
   f décroissante sur [2; +∞[
   Maximum global: 3 en x = 2

3. Résolution f(x) = 0:
   -2x² + 8x - 5 = 0
   Δ = 64 - 40 = 24 > 0
   x₁ = (8 - 2√6)/4 = (4 - √6)/2 ≈ 0,78
   x₂ = (8 + 2√6)/4 = (4 + √6)/2 ≈ 3,22

4. Signe de f(x):
   f(x) > 0 sur ]x₁; x₂[
   f(x) < 0 sur ]-∞; x₁[ ∪ ]x₂; +∞[

5. Courbe: parabole tournée vers le bas, sommet S(2,3)`
    }
  ];

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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800 border-green-200";
      case "Moyen": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Difficile": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/lessons" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-all duration-200">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Retour aux leçons</span>
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Calculator className="h-6 w-6 text-green-600" />
              Exercices de Mathématiques
            </h1>
            <p className="text-sm text-muted-foreground">Fonctions du second degré</p>
          </div>
          <Badge variant="outline" className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            {completedExercises.length} terminés
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
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
                        <Brain className="h-5 w-5 text-green-600" />
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
                          <Calculator className="h-4 w-4" />
                          Solution détaillée :
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line text-sm">{exercise.solution}</p>
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

export default MathExercises;
