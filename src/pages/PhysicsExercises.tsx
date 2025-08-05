
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Eye, Calculator, Lightbulb } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const PhysicsExercises = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: string]: string}>({});
  const [showResults, setShowResults] = useState<{[key: string]: boolean}>({});
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  const exercises = [
    {
      id: "physics1",
      title: "Vitesse de la lumière",
      difficulty: "Facile",
      type: "QCM",
      icon: <Eye className="h-5 w-5" />,
      question: "La lumière parcourt 300 000 km en une seconde dans le vide. Combien de temps met-elle pour parcourir la distance Terre-Lune (384 000 km) ?",
      options: [
        "1,28 seconde",
        "0,78 seconde", 
        "2,56 secondes",
        "1,92 seconde"
      ],
      correct: "1,28 seconde",
      explanation: "Temps = Distance / Vitesse = 384 000 km / 300 000 km/s = 1,28 s"
    },
    {
      id: "physics2", 
      title: "Indice de réfraction",
      difficulty: "Moyen",
      type: "Calcul",
      icon: <Calculator className="h-5 w-5" />,
      question: "Un rayon lumineux passe de l'air (n=1) dans l'eau (n=1,33) avec un angle d'incidence de 30°. Calculez l'angle de réfraction.",
      options: [
        "22,1°",
        "18,7°",
        "25,4°", 
        "20,9°"
      ],
      correct: "22,1°",
      explanation: "Loi de Snell: n₁ sin i = n₂ sin r\n1 × sin(30°) = 1,33 × sin(r)\nsin(r) = 0,5/1,33 = 0,376\nr = arcsin(0,376) = 22,1°"
    },
    {
      id: "physics3",
      title: "Défauts de vision",
      difficulty: "Facile", 
      type: "QCM",
      icon: <Eye className="h-5 w-5" />,
      question: "Pour corriger la myopie, on utilise :",
      options: [
        "Une lentille convergente",
        "Une lentille divergente",
        "Une lentille cylindrique",
        "Un prisme"
      ],
      correct: "Une lentille divergente",
      explanation: "La myopie se caractérise par une image qui se forme avant la rétine. Une lentille divergente (concave) permet de reculer l'image sur la rétine."
    },
    {
      id: "physics4",
      title: "Réflexion totale",
      difficulty: "Difficile",
      type: "Calcul", 
      icon: <Calculator className="h-5 w-5" />,
      question: "Calculez l'angle critique pour le passage verre-air (n_verre = 1,5, n_air = 1).",
      options: [
        "41,8°",
        "48,6°",
        "35,3°",
        "42,2°"
      ],
      correct: "41,8°",
      explanation: "Angle critique: sin(i_c) = n₂/n₁ = 1/1,5 = 0,667\ni_c = arcsin(0,667) = 41,8°"
    },
    {
      id: "physics5",
      title: "Grossissement d'une loupe",
      difficulty: "Moyen",
      type: "Calcul",
      icon: <Lightbulb className="h-5 w-5" />,
      question: "Une loupe a une distance focale de 5 cm. Quel est son grossissement ?",
      options: [
        "×3",
        "×5", 
        "×7",
        "×10"
      ],
      correct: "×5",
      explanation: "Grossissement d'une loupe: G = 25/f = 25/5 = 5\n(25 cm est la distance de vision distincte)"
    }
  ];

  const handleAnswerSelect = (exerciseId: string, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [exerciseId]: answer
    }));
  };

  const handleSubmit = (exerciseId: string) => {
    setShowResults(prev => ({
      ...prev,
      [exerciseId]: true
    }));
    
    const isCorrect = selectedAnswers[exerciseId] === exercises.find(ex => ex.id === exerciseId)?.correct;
    if (isCorrect) {
      setCompletedExercises(prev => new Set([...prev, exerciseId]));
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Moyen": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"; 
      case "Difficile": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Exercices de Physique
          </h1>
          <p className="text-lg text-muted-foreground">
            Module 1: La lumière et la vision
          </p>
        </motion.div>

        <div className="grid gap-6">
          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                        {exercise.icon}
                      </div>
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {exercise.title}
                          {completedExercises.has(exercise.id) && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                        </CardTitle>
                        <CardDescription>{exercise.type}</CardDescription>
                      </div>
                    </div>
                    <Badge className={getDifficultyColor(exercise.difficulty)}>
                      {exercise.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {exercise.question}
                  </p>
                  
                  <div className="grid gap-2">
                    {exercise.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() => handleAnswerSelect(exercise.id, option)}
                        disabled={showResults[exercise.id]}
                        className={`p-3 text-left rounded-lg border transition-colors ${
                          selectedAnswers[exercise.id] === option
                            ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-700'
                            : 'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                        } ${
                          showResults[exercise.id] && option === exercise.correct
                            ? 'bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-700'
                            : ''
                        } ${
                          showResults[exercise.id] && selectedAnswers[exercise.id] === option && option !== exercise.correct
                            ? 'bg-red-50 border-red-200 dark:bg-red-900/30 dark:border-red-700'
                            : ''
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {showResults[exercise.id] && option === exercise.correct && (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          )}
                          {showResults[exercise.id] && selectedAnswers[exercise.id] === option && option !== exercise.correct && (
                            <XCircle className="h-4 w-4 text-red-500" />
                          )}
                          {option}
                        </div>
                      </button>
                    ))}
                  </div>

                  {!showResults[exercise.id] ? (
                    <Button
                      onClick={() => handleSubmit(exercise.id)}
                      disabled={!selectedAnswers[exercise.id]}
                      className="w-full"
                    >
                      Valider la réponse
                    </Button>
                  ) : (
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                        Explication :
                      </h4>
                      <ScrollArea className="max-h-32">
                        <p className="text-blue-700 dark:text-blue-300 whitespace-pre-line">
                          {exercise.explanation}
                        </p>
                      </ScrollArea>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground">
            Exercices complétés: {completedExercises.size}/{exercises.length}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PhysicsExercises;
