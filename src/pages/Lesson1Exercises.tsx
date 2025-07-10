
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Lesson1Exercises = () => {
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const toggleExercise = (id: number) => {
    setCompletedExercises(prev => 
      prev.includes(id) 
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };

  const exercises = [
    {
      id: 1,
      title: "Classification des nombres",
      question: "Classez les nombres suivants dans les bons ensembles : 5, -3, 2/3, √2, 0.75",
      solution: "5 ∈ N, Z, D, Q, R\n-3 ∈ Z, Q, R\n2/3 ∈ Q, R\n√2 ∈ R seulement\n0.75 ∈ D, Q, R"
    },
    {
      id: 2,
      title: "Inclusions d'ensembles",
      question: "Vrai ou faux ?\na) Tout nombre naturel est entier\nb) Tout nombre décimal est rationnel\nc) Tout nombre rationnel est réel",
      solution: "a) Vrai : N ⊂ Z\nb) Vrai : D ⊂ Q\nc) Vrai : Q ⊂ R"
    },
    {
      id: 3,
      title: "Nombres irrationnels",
      question: "Expliquez pourquoi √3 n'est pas un nombre rationnel.",
      solution: "Démonstration par l'absurde : si √3 = p/q avec p,q premiers entre eux, alors 3q² = p², ce qui implique que p est divisible par 3, puis q aussi, contradiction."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/lessons" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Retour aux leçons</span>
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Exercices - Les ensembles de nombres</h1>
          <div></div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-3">
                    <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {exercise.id}
                    </span>
                    <span>{exercise.title}</span>
                  </CardTitle>
                  <Button
                    onClick={() => toggleExercise(exercise.id)}
                    variant={completedExercises.includes(exercise.id) ? "default" : "outline"}
                    size="sm"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {completedExercises.includes(exercise.id) ? "Terminé" : "Marquer comme fait"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Question :</h4>
                    <p className="text-gray-700 whitespace-pre-line">{exercise.question}</p>
                  </div>
                  <details className="bg-gray-50 p-4 rounded-lg">
                    <summary className="cursor-pointer font-semibold text-gray-800 hover:text-indigo-600">
                      Voir la solution
                    </summary>
                    <div className="mt-3 text-gray-700 whitespace-pre-line">
                      {exercise.solution}
                    </div>
                  </details>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson1Exercises;
