
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, CheckCircle, Clock, Target, BookOpen, Lightbulb, Star, Trophy, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Lesson1Exercises = () => {
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});

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

  const basicExercises = [
    {
      id: 1,
      title: "Classification simple des nombres",
      difficulty: "Facile",
      duration: "8 min",
      points: 10,
      question: "Classez les nombres suivants dans les bons ensembles :\n5, -3, 2/3, 0.75, 0, √4, -1/4",
      options: ["N, Z, Q, D, R", "Uniquement R", "N et Z seulement", "Q et R seulement"],
      correctAnswer: "N, Z, Q, D, R",
      hint: "Rappelez-vous : N (naturels ≥ 0), Z (entiers), D (décimaux finis), Q (rationnels), R (réels)",
      explanation: "Analyse détaillée :\n• 5 ∈ N ⊂ Z ⊂ D ⊂ Q ⊂ R\n• -3 ∈ Z ⊂ Q ⊂ R (pas N car négatif)\n• 2/3 ∈ Q ⊂ R (rationnel, 0.666...)\n• 0.75 = 3/4 ∈ D ⊂ Q ⊂ R\n• 0 ∈ N ⊂ Z ⊂ D ⊂ Q ⊂ R\n• √4 = 2 ∈ N ⊂ Z ⊂ D ⊂ Q ⊂ R\n• -1/4 = -0.25 ∈ D ⊂ Q ⊂ R",
      solution: "Tous ces nombres appartiennent à leurs ensembles respectifs selon les règles d'inclusion."
    },
    {
      id: 2,
      title: "Identification des ensembles",
      difficulty: "Facile",
      duration: "10 min",
      points: 15,
      question: "Quel est le plus petit ensemble contenant le nombre -7/2 ?",
      options: ["N", "Z", "Q", "D"],
      correctAnswer: "Q",
      hint: "Ce nombre est-il naturel ? Entier ? Décimal ? Rationnel ?",
      explanation: "-7/2 = -3.5\n• Pas dans N (négatif)\n• Pas dans Z (non entier)\n• Pas dans D (mais si ! -3.5 est décimal)\n• Dans Q (fraction d'entiers)",
      solution: "En fait, -7/2 = -3.5 appartient à D car c'est un décimal fini. D ⊂ Q, donc D est le plus petit ensemble."
    }
  ];

  const intermediateExercises = [
    {
      id: 3,
      title: "Relations d'inclusion",
      difficulty: "Moyen",
      duration: "15 min",
      points: 20,
      question: "Vrai ou faux ? Justifiez :\na) Tout nombre décimal est rationnel\nb) Tout nombre entier est naturel\nc) √9 est un nombre naturel\nd) 1/3 est un nombre décimal",
      options: ["Toutes vraies", "a et c vraies", "a, c vraies, b et d fausses", "Toutes fausses"],
      correctAnswer: "a, c vraies, b et d fausses",
      hint: "Analysez chaque affirmation en vous basant sur les définitions des ensembles",
      explanation: "Analyse :\na) VRAI : D ⊂ Q par définition\nb) FAUX : Z contient les négatifs, exemple -5 ∈ Z mais -5 ∉ N\nc) VRAI : √9 = 3 ∈ N\nd) FAUX : 1/3 = 0.333... (infini) ∉ D mais ∈ Q",
      solution: "Les affirmations a et c sont vraies, b et d sont fausses."
    },
    {
      id: 4,
      title: "Nombres décimaux vs rationnels",
      difficulty: "Moyen",
      duration: "18 min",
      points: 25,
      question: "Parmi ces fractions, lesquelles donnent un nombre décimal ?\na) 3/8  b) 5/6  c) 7/25  d) 11/12  e) 13/40",
      options: ["a, c, e", "a, c, d", "Toutes", "a, b, c"],
      correctAnswer: "a, c, e",
      hint: "Un rationnel p/q (irréductible) est décimal ⟺ q = 2ᵃ × 5ᵇ",
      explanation: "Vérification des dénominateurs :\na) 8 = 2³ ✓ (décimal : 0.375)\nb) 6 = 2×3 ✗ (facteur 3)\nc) 25 = 5² ✓ (décimal : 0.28)\nd) 12 = 2²×3 ✗ (facteur 3)\ne) 40 = 2³×5 ✓ (décimal : 0.325)",
      solution: "Seules a, c et e donnent des nombres décimaux car leurs dénominateurs ne contiennent que les facteurs 2 et 5."
    }
  ];

  const advancedExercises = [
    {
      id: 5,
      title: "Démonstration d'irrationalité",
      difficulty: "Difficile",
      duration: "25 min",
      points: 30,
      question: "Démontrez que √5 est irrationnel en utilisant un raisonnement par l'absurde.",
      hint: "Supposez √5 = p/q avec pgcd(p,q) = 1, puis cherchez une contradiction",
      explanation: "Étapes de la démonstration :\n1) Hypothèse : √5 ∈ Q\n2) Alors √5 = p/q avec pgcd(p,q) = 1\n3) En élevant au carré : 5 = p²/q²\n4) Donc 5q² = p²\n5) p² divisible par 5 ⟹ p divisible par 5\n6) Soit p = 5k, alors 25k² = p²\n7) Donc 5q² = 25k² ⟹ q² = 5k²\n8) q² divisible par 5 ⟹ q divisible par 5\n9) Contradiction : pgcd(p,q) ≥ 5 ≠ 1",
      solution: "√5 ∉ Q car l'hypothèse √5 ∈ Q mène à une contradiction."
    },
    {
      id: 6,
      title: "Propriétés avancées",
      difficulty: "Difficile", 
      duration: "20 min",
      points: 35,
      question: "Soit x = 0.123123123... (période 123). Montrez que x ∈ Q et trouvez sa forme fractionnaire.",
      hint: "Utilisez la technique de multiplication par une puissance de 10 appropriée",
      explanation: "Résolution :\n• Posons x = 0.123123123...\n• 1000x = 123.123123123...\n• 1000x - x = 123\n• 999x = 123\n• x = 123/999\n• Simplification : pgcd(123, 999) = 3\n• x = 41/333",
      solution: "x = 41/333, donc x ∈ Q. Tout nombre décimal périodique est rationnel."
    }
  ];

  const allExercises = [...basicExercises, ...intermediateExercises, ...advancedExercises];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800 border-green-200";
      case "Moyen": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Difficile": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const completionRate = Math.round((completedExercises.length / allExercises.length) * 100);
  const totalPoints = completedExercises.reduce((sum, id) => {
    const exercise = allExercises.find(ex => ex.id === id);
    return sum + (exercise?.points || 0);
  }, 0);

  const renderExerciseCard = (exercise: any) => (
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
              <Badge variant="outline" className="text-orange-600 border-orange-300">
                <Star className="h-3 w-3 mr-1" />
                {exercise.points} pts
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
            {completedExercises.includes(exercise.id) ? "Terminé ✓" : "Marquer fait"}
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
          
          {exercise.options && (
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-gray-800 mb-3">Options :</h4>
              <div className="space-y-2">
                {exercise.options.map((option: string, index: number) => (
                  <label key={index} className="flex items-center space-x-3 cursor-pointer hover:bg-white/50 p-2 rounded transition-colors">
                    <input
                      type="radio"
                      name={`exercise-${exercise.id}`}
                      value={option}
                      onChange={(e) => setSelectedAnswers({...selectedAnswers, [exercise.id]: e.target.value})}
                      className="text-purple-600"
                    />
                    <span className="text-gray-700">{String.fromCharCode(65 + index)}) {option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
          
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
              {openSolutions.includes(exercise.id) ? 'Masquer la solution' : 'Voir la solution détaillée'}
            </Button>
            
            {openSolutions.includes(exercise.id) && (
              <div className="mt-4 bg-green-50 p-4 rounded-lg border-l-4 border-green-500 animate-fade-in">
                <h4 className="font-semibold text-gray-800 mb-3">Solution détaillée :</h4>
                <div className="space-y-3">
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed text-sm">
                    {exercise.explanation}
                  </div>
                  <div className="bg-white p-3 rounded border-l-2 border-green-400">
                    <p className="font-medium text-green-800">Réponse finale :</p>
                    <p className="text-gray-700 mt-1">{exercise.solution}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/lessons" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-all duration-200 hover:scale-105">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Retour aux leçons</span>
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-800">Exercices Interactifs</h1>
            <p className="text-sm text-gray-600">Les ensembles de nombres - Entraînement progressif</p>
          </div>
          <div className="text-sm text-indigo-600 font-medium flex items-center space-x-2">
            <Trophy className="h-4 w-4" />
            <span>{totalPoints} points</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Maîtrisez les ensembles de nombres</h2>
            <p className="text-gray-600 text-lg mb-6">Exercices progressifs avec corrections détaillées et système de points</p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">{completedExercises.length}/{allExercises.length}</div>
                  <div className="text-sm text-gray-600">Exercices terminés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{totalPoints}</div>
                  <div className="text-sm text-gray-600">Points gagnés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{completionRate}%</div>
                  <div className="text-sm text-gray-600">Progression</div>
                </div>
              </div>
              <Progress value={completionRate} className="w-full h-3" />
            </div>
          </div>

          <Tabs defaultValue="facile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/80 backdrop-blur-sm shadow-md">
              <TabsTrigger value="facile" className="flex items-center space-x-2">
                <Brain className="h-4 w-4" />
                <span>Niveau Facile</span>
                <Badge variant="secondary">{basicExercises.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="moyen" className="flex items-center space-x-2">
                <Target className="h-4 w-4" />
                <span>Niveau Moyen</span>
                <Badge variant="secondary">{intermediateExercises.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="avance" className="flex items-center space-x-2">
                <Trophy className="h-4 w-4" />
                <span>Niveau Avancé</span>
                <Badge variant="secondary">{advancedExercises.length}</Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="facile" className="space-y-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Exercices de base</h3>
                <p className="text-gray-600">Commencez par maîtriser les concepts fondamentaux</p>
              </div>
              {basicExercises.map(renderExerciseCard)}
            </TabsContent>
            
            <TabsContent value="moyen" className="space-y-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Exercices intermédiaires</h3>
                <p className="text-gray-600">Approfondissez vos connaissances</p>
              </div>
              {intermediateExercises.map(renderExerciseCard)}
            </TabsContent>
            
            <TabsContent value="avance" className="space-y-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Exercices avancés</h3>
                <p className="text-gray-600">Relevez le défi avec des démonstrations complexes</p>
              </div>
              {advancedExercises.map(renderExerciseCard)}
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Continuez votre parcours d'apprentissage</h3>
              <p className="text-gray-600 mb-4">Explorez nos autres ressources pédagogiques</p>
              <div className="flex justify-center space-x-4">
                <Link to="/lesson/1/course">
                  <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                    Revoir le cours
                  </Button>
                </Link>
                <Link to="/lesson/1/videos">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Vidéos explicatives
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
