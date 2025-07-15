
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, CheckCircle, Clock, Target, BookOpen, Lightbulb, Star, Trophy, Brain } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const FrenchExercises = () => {
  const { id } = useParams();
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);

  const exerciseData: { [key: string]: any } = {
    "301": {
      title: "Exercices - Typologie textuelle",
      exercises: [
        {
          id: 1,
          title: "Identification des types de textes",
          difficulty: "Facile",
          duration: "10 min",
          points: 15,
          question: "Identifiez le type de texte suivant :\n\n'Le château se dressait fièrement sur la colline, ses tours élancées perçant le ciel gris. Les murailles de pierre blonde reflétaient la lumière dorée du couchant, tandis que les fenêtres à meneaux scintillaient comme des joyaux.'",
          options: ["Narratif", "Descriptif", "Argumentatif", "Explicatif"],
          correctAnswer: "Descriptif",
          explanation: "Ce texte est descriptif car il peint un paysage avec de nombreux adjectifs qualificatifs (fièrement, élancées, gris, blonde, dorée) et des verbes d'état (se dressait, reflétaient, scintillaient)."
        },
        {
          id: 2,
          title: "Analyse du schéma narratif",
          difficulty: "Moyen",
          duration: "15 min",
          points: 20,
          question: "Dans le conte 'Cendrillon', identifiez l'élément déclencheur :",
          options: ["Cendrillon vit avec sa belle-mère", "Le prince organise un bal", "La fée marraine apparaît", "Cendrillon perd sa pantoufle"],
          correctAnswer: "Le prince organise un bal",
          explanation: "L'élément déclencheur est l'événement qui rompt l'équilibre initial. L'annonce du bal transforme la situation de Cendrillon et déclenche l'action."
        }
      ]
    },
    "302": {
      title: "Exercices - La nouvelle réaliste",
      exercises: [
        {
          id: 3,
          title: "Analyse de 'La Ficelle'",
          difficulty: "Difficile",
          duration: "20 min",
          points: 25,
          question: "Quel est le thème principal de 'La Ficelle' de Maupassant ?",
          options: ["L'avarice", "La rumeur destructrice", "L'amour", "La guerre"],
          correctAnswer: "La rumeur destructrice",
          explanation: "Le thème central est la rumeur et ses effets dévastateurs sur un innocent. Maupassant montre comment la médisance peut détruire une réputation et un homme."
        }
      ]
    }
  };

  const currentExercises = exerciseData[id || "301"];

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
          <Link to="/lessons/french" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-all duration-200">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Retour aux leçons</span>
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground">Exercices de Français</h1>
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
                      <Badge className="bg-red-100 text-red-800 border-red-200">
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
                  
                  {exercise.options && (
                    <div className="space-y-2">
                      {exercise.options.map((option: string, index: number) => (
                        <div key={index} className="p-2 border rounded hover:bg-accent/50">
                          {String.fromCharCode(65 + index)}) {option}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Button
                    onClick={() => toggleSolution(exercise.id)}
                    variant="ghost"
                    className="w-full"
                  >
                    {openSolutions.includes(exercise.id) ? 'Masquer la solution' : 'Voir la solution'}
                  </Button>
                  
                  {openSolutions.includes(exercise.id) && (
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="font-semibold text-green-800 mb-2">Réponse : {exercise.correctAnswer}</p>
                      <p className="text-gray-700">{exercise.explanation}</p>
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

export default FrenchExercises;
