
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Clock, Target, BookOpen, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Lesson1Exercises = () => {
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);

  const toggleExercise = (id: number) => {
    setCompletedExercises(prev => 
      prev.includes(id) 
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };

  const toggleSolution = (id: number) => {
    setOpenSolutions(prev => 
      prev.includes(id) 
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };

  const exercises = [
    {
      id: 1,
      title: "Classification des nombres",
      difficulty: "Facile",
      duration: "10 min",
      question: "Classez les nombres suivants dans les bons ensembles : 5, -3, 2/3, √2, 0.75, -1/4, π, 0",
      hint: "Rappelez-vous des définitions : N (naturels), Z (entiers), D (décimaux), Q (rationnels), R (réels)",
      solution: "• 5 ∈ N ⊂ Z ⊂ D ⊂ Q ⊂ R\n• -3 ∈ Z ⊂ Q ⊂ R (mais pas N car négatif)\n• 2/3 ∈ Q ⊂ R (rationnel, décimal infini périodique)\n• √2 ∈ R seulement (irrationnel)\n• 0.75 = 3/4 ∈ D ⊂ Q ⊂ R\n• -1/4 = -0.25 ∈ D ⊂ Q ⊂ R\n• π ∈ R seulement (irrationnel)\n• 0 ∈ N ⊂ Z ⊂ D ⊂ Q ⊂ R"
    },
    {
      id: 2,
      title: "Inclusions d'ensembles",
      difficulty: "Moyen",
      duration: "15 min",
      question: "Vrai ou faux ? Justifiez vos réponses :\na) Tout nombre naturel est entier\nb) Tout nombre décimal est rationnel\nc) Tout nombre rationnel est réel\nd) Tout nombre entier est naturel",
      hint: "Pensez aux définitions et aux relations d'inclusion : N ⊂ Z ⊂ D ⊂ Q ⊂ R",
      solution: "a) VRAI : N ⊂ Z par définition\nb) VRAI : D ⊂ Q car tout décimal peut s'écrire comme fraction\nc) VRAI : Q ⊂ R par définition\nd) FAUX : Z contient les entiers négatifs qui ne sont pas dans N\nExemple : -5 ∈ Z mais -5 ∉ N"
    },
    {
      id: 3,
      title: "Nombres irrationnels",
      difficulty: "Difficile",
      duration: "20 min",
      question: "Démontrez que √3 n'est pas un nombre rationnel en utilisant un raisonnement par l'absurde.",
      hint: "Supposez que √3 = p/q avec p et q premiers entre eux, puis montrez que cela mène à une contradiction",
      solution: "Démonstration par l'absurde :\n\n1) Supposons que √3 ∈ Q\n2) Alors √3 = p/q avec p,q ∈ Z*, pgcd(p,q) = 1\n3) En élevant au carré : 3 = p²/q²\n4) Donc 3q² = p²\n5) p² est divisible par 3, donc p est divisible par 3\n6) Posons p = 3k, alors p² = 9k²\n7) Donc 3q² = 9k², soit q² = 3k²\n8) q² est divisible par 3, donc q est divisible par 3\n9) Contradiction : p et q sont tous deux divisibles par 3\n10) Donc √3 ∉ Q"
    },
    {
      id: 4,
      title: "Représentation décimale",
      difficulty: "Moyen",
      duration: "12 min",
      question: "Déterminez si les nombres suivants sont décimaux ou non :\na) 3/8\nb) 5/6\nc) 7/25\nd) 11/12",
      hint: "Un nombre rationnel est décimal si et seulement si dans sa fraction irréductible, le dénominateur ne contient que les facteurs 2 et 5",
      solution: "a) 3/8 = 3/(2³) : DÉCIMAL car 8 = 2³\n   3/8 = 0.375\n\nb) 5/6 = 5/(2×3) : NON DÉCIMAL car 6 contient le facteur 3\n   5/6 = 0.833...\n\nc) 7/25 = 7/(5²) : DÉCIMAL car 25 = 5²\n   7/25 = 0.28\n\nd) 11/12 = 11/(2²×3) : NON DÉCIMAL car 12 contient le facteur 3\n   11/12 = 0.9166..."
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800 border-green-200";
      case "Moyen": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Difficile": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const completionRate = Math.round((completedExercises.length / exercises.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/lessons" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-all duration-200 hover:scale-105">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Retour aux leçons</span>
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-800">Exercices Pratiques</h1>
            <p className="text-sm text-gray-600">Les ensembles de nombres</p>
          </div>
          <div className="text-sm text-indigo-600 font-medium">
            Progression: {completionRate}%
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Entraînez-vous avec nos exercices</h2>
            <p className="text-gray-600 text-lg mb-6">Testez vos connaissances et renforcez votre compréhension</p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-700">Progression globale</span>
                <span className="text-sm font-bold text-indigo-600">{completedExercises.length}/{exercises.length} exercices</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${completionRate}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {exercises.map((exercise) => (
              <Card key={exercise.id} className={`bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${completedExercises.includes(exercise.id) ? 'ring-2 ring-green-500' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                          {exercise.id}
                        </span>
                        <Badge className={`${getDifficultyColor(exercise.difficulty)} font-medium border`}>
                          <Target className="h-3 w-3 mr-1" />
                          {exercise.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-gray-600 border-gray-300">
                          <Clock className="h-3 w-3 mr-1" />
                          {exercise.duration}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                        {exercise.title}
                      </CardTitle>
                    </div>
                    <Button
                      onClick={() => toggleExercise(exercise.id)}
                      variant={completedExercises.includes(exercise.id) ? "default" : "outline"}
                      size="sm"
                      className={`transition-all duration-200 ${completedExercises.includes(exercise.id) ? 'bg-green-600 hover:bg-green-700' : ''}`}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      {completedExercises.includes(exercise.id) ? "Terminé ✓" : "Marquer comme fait"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Question :
                      </h4>
                      <p className="text-gray-700 whitespace-pre-line leading-relaxed">{exercise.question}</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Indice :
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{exercise.hint}</p>
                    </div>
                    
                    <div className="border-t pt-4">
                      <Button
                        onClick={() => toggleSolution(exercise.id)}
                        variant="ghost"
                        className="w-full justify-center font-semibold text-gray-800 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
                      >
                        {openSolutions.includes(exercise.id) ? 'Masquer la solution' : 'Voir la solution'}
                      </Button>
                      
                      {openSolutions.includes(exercise.id) && (
                        <div className="mt-4 bg-green-50 p-4 rounded-lg border-l-4 border-green-500 animate-fade-in">
                          <h4 className="font-semibold text-gray-800 mb-3">Solution détaillée :</h4>
                          <div className="text-gray-700 whitespace-pre-line leading-relaxed font-mono text-sm">
                            {exercise.solution}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Continuez votre apprentissage</h3>
              <p className="text-gray-600 mb-4">Consultez le cours ou regardez nos vidéos explicatives</p>
              <div className="flex justify-center space-x-4">
                <Link to="/lesson/1/course">
                  <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                    Revoir le cours
                  </Button>
                </Link>
                <Link to="/lesson/1/videos">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Voir les vidéos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson1Exercises;
