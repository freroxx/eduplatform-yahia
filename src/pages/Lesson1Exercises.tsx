
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Trophy, Target, CheckCircle, XCircle, Home } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";

const Lesson1Exercises = () => {
  const { id } = useParams();
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const exerciseSets = {
    "1": {
      title: "Généralités sur les fonctions",
      exercises: [
        {
          question: "Quel est le domaine de définition de f(x) = 1/(x-2) ?",
          options: ["ℝ", "ℝ \\ {2}", "ℝ \\ {0}", "ℝ+"],
          correct: "ℝ \\ {2}",
          explanation: "La fonction n'est pas définie quand le dénominateur s'annule, donc quand x = 2."
        },
        {
          question: "Si f(x) = 3x + 1, que vaut f(2) ?",
          options: ["5", "6", "7", "8"],
          correct: "7",
          explanation: "f(2) = 3(2) + 1 = 6 + 1 = 7"
        },
        {
          question: "Quelle est l'image de la fonction f(x) = x² ?",
          options: ["ℝ", "ℝ+", "ℝ-", "ℝ*"],
          correct: "ℝ+",
          explanation: "Le carré d'un nombre réel est toujours positif ou nul."
        }
      ]
    },
    "2": {
      title: "Fonctions de référence",
      exercises: [
        {
          question: "Quelle est la forme générale d'une fonction affine ?",
          options: ["f(x) = ax", "f(x) = ax + b", "f(x) = ax²", "f(x) = a/x"],
          correct: "f(x) = ax + b",
          explanation: "Une fonction affine a la forme f(x) = ax + b où a et b sont des constantes."
        },
        {
          question: "La fonction f(x) = x² est-elle croissante sur ℝ ?",
          options: ["Oui", "Non", "Parfois", "Cela dépend"],
          correct: "Non",
          explanation: "f(x) = x² est décroissante sur ]-∞, 0] et croissante sur [0, +∞[."
        },
        {
          question: "Quel est le coefficient directeur de la droite y = -2x + 5 ?",
          options: ["-2", "2", "5", "-5"],
          correct: "-2",
          explanation: "Dans y = ax + b, le coefficient directeur est a = -2."
        }
      ]
    },
    "3": {
      title: "Équations et inéquations",
      exercises: [
        {
          question: "Résoudre : 2x - 6 = 0",
          options: ["x = 2", "x = 3", "x = -3", "x = 6"],
          correct: "x = 3",
          explanation: "2x - 6 = 0 ⟹ 2x = 6 ⟹ x = 3"
        },
        {
          question: "Combien de solutions a l'équation x² - 4 = 0 ?",
          options: ["0", "1", "2", "3"],
          correct: "2",
          explanation: "x² - 4 = 0 ⟹ x² = 4 ⟹ x = ±2, donc 2 solutions."
        },
        {
          question: "Résoudre : 3x + 1 > 7",
          options: ["x > 2", "x < 2", "x > 3", "x < 3"],
          correct: "x > 2",
          explanation: "3x + 1 > 7 ⟹ 3x > 6 ⟹ x > 2"
        }
      ]
    },
    "4": {
      title: "Statistiques descriptives",
      exercises: [
        {
          question: "Quelle est la moyenne de {2, 4, 6, 8} ?",
          options: ["4", "5", "6", "7"],
          correct: "5",
          explanation: "Moyenne = (2 + 4 + 6 + 8) ÷ 4 = 20 ÷ 4 = 5"
        },
        {
          question: "Quelle est la médiane de {1, 3, 5, 7, 9} ?",
          options: ["3", "5", "7", "9"],
          correct: "5",
          explanation: "La médiane est la valeur centrale : 5 (3ème valeur sur 5)."
        },
        {
          question: "Qu'est-ce qui mesure la dispersion des données ?",
          options: ["Moyenne", "Médiane", "Écart-type", "Mode"],
          correct: "Écart-type",
          explanation: "L'écart-type mesure la dispersion des données autour de la moyenne."
        }
      ]
    },
    "5": {
      title: "Géométrie dans l'espace",
      exercises: [
        {
          question: "Quel est le volume d'un cube d'arête 3 cm ?",
          options: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
          correct: "27 cm³",
          explanation: "Volume = arête³ = 3³ = 27 cm³"
        },
        {
          question: "Combien de faces a un parallélépipède rectangle ?",
          options: ["4", "6", "8", "12"],
          correct: "6",
          explanation: "Un parallélépipède rectangle a 6 faces rectangulaires."
        },
        {
          question: "Quelle est l'aire d'une sphère de rayon r ?",
          options: ["2πr²", "4πr²", "πr²", "6πr²"],
          correct: "4πr²",
          explanation: "L'aire d'une sphère est 4πr²."
        }
      ]
    },
    "6": {
      title: "Trigonométrie",
      exercises: [
        {
          question: "Que vaut sin(30°) ?",
          options: ["1/2", "√2/2", "√3/2", "1"],
          correct: "1/2",
          explanation: "sin(30°) = 1/2 (valeur trigonométrique de base)."
        },
        {
          question: "Dans un triangle rectangle, cos θ = ?",
          options: ["opposé/hypoténuse", "adjacent/hypoténuse", "opposé/adjacent", "hypoténuse/adjacent"],
          correct: "adjacent/hypoténuse",
          explanation: "Le cosinus est le rapport côté adjacent sur hypoténuse."
        },
        {
          question: "Que vaut cos²θ + sin²θ ?",
          options: ["0", "1", "2", "θ"],
          correct: "1",
          explanation: "Identité trigonométrique fondamentale : cos²θ + sin²θ = 1."
        }
      ]
    }
  };

  const currentSet = exerciseSets[id as keyof typeof exerciseSets] || exerciseSets["1"];
  const totalExercises = currentSet.exercises.length;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentExercise]: answer
    }));
  };

  const nextExercise = () => {
    if (currentExercise < totalExercises - 1) {
      setCurrentExercise(prev => prev + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    currentSet.exercises.forEach((exercise, index) => {
      if (selectedAnswers[index] === exercise.correct) {
        correct++;
      }
    });
    setScore(Math.round((correct / totalExercises) * 100));
  };

  const resetExercises = () => {
    setCurrentExercise(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const progress = ((currentExercise + 1) / totalExercises) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen animated-bg">
        <GlobalHeader />
        
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-0 shadow-2xl">
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-card-foreground mb-4">
                Exercices terminés !
              </h2>
              <div className="text-6xl font-bold text-indigo-600 mb-4">
                {score}%
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Vous avez répondu correctement à {Math.round(score * totalExercises / 100)} questions sur {totalExercises}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={resetExercises} size="lg">
                  <Target className="h-5 w-5 mr-2" />
                  Recommencer
                </Button>
                <Link to="/lessons/math">
                  <Button variant="outline" size="lg">
                    <ChevronLeft className="h-5 w-5 mr-2" />
                    Retour aux leçons
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" size="lg">
                    <Home className="h-5 w-5 mr-2" />
                    Accueil
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animated-bg">
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
                <ChevronLeft className="h-4 w-4 mr-2" />
                Retour aux leçons
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Accueil
              </Button>
            </Link>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
              <Target className="h-8 w-8 text-indigo-600" />
              {currentSet.title}
            </h1>
            <p className="text-muted-foreground">
              Chapitre {id} - Exercices pratiques
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentExercise + 1} sur {totalExercises}
              </span>
              <Badge variant="secondary">
                {Math.round(progress)}% terminé
              </Badge>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          {/* Exercise */}
          <Card className="mb-8 bg-card/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground">
                {currentSet.exercises[currentExercise].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentSet.exercises[currentExercise].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      selectedAnswers[currentExercise] === option
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                        : "border-border hover:border-indigo-300 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                        selectedAnswers[currentExercise] === option
                          ? "border-indigo-500 bg-indigo-500"
                          : "border-muted-foreground"
                      }`}>
                        {selectedAnswers[currentExercise] === option && (
                          <CheckCircle className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {selectedAnswers[currentExercise] && (
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-2">
                    {selectedAnswers[currentExercise] === currentSet.exercises[currentExercise].correct ? (
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    )}
                    <div>
                      <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                        {selectedAnswers[currentExercise] === currentSet.exercises[currentExercise].correct 
                          ? "Correct !" 
                          : "Incorrect"}
                      </p>
                      <p className="text-blue-700 dark:text-blue-300">
                        {currentSet.exercises[currentExercise].explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center">
            <Button
              onClick={nextExercise}
              disabled={!selectedAnswers[currentExercise]}
              size="lg"
              className="px-8"
            >
              {currentExercise === totalExercises - 1 ? "Voir les résultats" : "Question suivante"}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Lesson1Exercises;
