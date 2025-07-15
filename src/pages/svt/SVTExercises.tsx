import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Trophy, Target, CheckCircle, XCircle, Home } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";

const SVTExercises = () => {
  const { id } = useParams();
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const exerciseSets = {
    "201": {
      title: "La cellule unité structurale du vivant",
      exercises: [
        {
          question: "Quel est le plus petit niveau d'organisation du vivant ?",
          options: ["L'organe", "Le tissu", "La cellule", "L'organisme"],
          correct: "La cellule",
          explanation: "La cellule est l'unité structurale et fonctionnelle de base de tous les êtres vivants."
        },
        {
          question: "Quelle est la principale différence entre cellules procaryotes et eucaryotes ?",
          options: ["La taille", "La présence d'un noyau", "Le nombre de chromosomes", "La forme"],
          correct: "La présence d'un noyau",
          explanation: "Les cellules eucaryotes possèdent un noyau délimité par une membrane, contrairement aux procaryotes."
        },
        {
          question: "Quel organite produit l'énergie dans la cellule eucaryote ?",
          options: ["Le noyau", "Les ribosomes", "Les mitochondries", "L'appareil de Golgi"],
          correct: "Les mitochondries",
          explanation: "Les mitochondries sont les centrales énergétiques de la cellule, produisant l'ATP."
        }
      ]
    },
    "202": {
      title: "L'unité chimique du vivant",
      exercises: [
        {
          question: "Quels sont les quatre éléments principaux du vivant ?",
          options: ["C, H, O, N", "C, H, O, P", "N, P, S, K", "Ca, Mg, Fe, Zn"],
          correct: "C, H, O, N",
          explanation: "Carbone, Hydrogène, Oxygène et Azote représentent 96% de la matière vivante."
        },
        {
          question: "Quel pourcentage d'eau représente le corps humain ?",
          options: ["40-50%", "60-70%", "80-90%", "30-40%"],
          correct: "60-70%",
          explanation: "L'eau représente environ 60-70% du poids corporel chez l'adulte."
        },
        {
          question: "Quelle biomolécule porte l'information génétique ?",
          options: ["Les protéines", "Les glucides", "Les lipides", "L'ADN"],
          correct: "L'ADN",
          explanation: "L'ADN (acide désoxyribonucléique) contient l'information génétique sous forme de séquences de nucléotides."
        }
      ]
    },
    "203": {
      title: "La biodiversité",
      exercises: [
        {
          question: "Combien d'espèces estime-t-on sur Terre ?",
          options: ["1 million", "8,7 millions", "100 millions", "1 milliard"],
          correct: "8,7 millions",
          explanation: "Les scientifiques estiment qu'il existe environ 8,7 millions d'espèces sur Terre."
        },
        {
          question: "Que signifie l'acronyme RECOFGE en classification ?",
          options: ["Les noms des scientifiques", "L'ordre des groupes taxonomiques", "Les critères de classification", "Les règles de nomenclature"],
          correct: "L'ordre des groupes taxonomiques",
          explanation: "RECOFGE : Règne, Embranchement, Classe, Ordre, Famille, Genre, Espèce."
        },
        {
          question: "Qu'est-ce qu'un écosystème ?",
          options: ["Un groupe d'animaux", "Un milieu physique", "Êtres vivants + milieu physique", "Une chaîne alimentaire"],
          correct: "Êtres vivants + milieu physique",
          explanation: "Un écosystème comprend la biocénose (êtres vivants) et le biotope (milieu physique)."
        }
      ]
    },
    "204": {
      title: "Géologie : structure de la Terre",
      exercises: [
        {
          question: "Quelles sont les trois enveloppes de la Terre ?",
          options: ["Atmosphère, hydrosphère, lithosphère", "Croûte, manteau, noyau", "Continents, océans, atmosphère", "Biosphère, géosphère, atmosphère"],
          correct: "Croûte, manteau, noyau",
          explanation: "La structure interne de la Terre comprend la croûte, le manteau et le noyau."
        },
        {
          question: "Quelle est l'épaisseur approximative de la croûte océanique ?",
          options: ["5-10 km", "30-70 km", "100-200 km", "1000 km"],
          correct: "5-10 km",
          explanation: "La croûte océanique est plus fine (5-10 km) que la croûte continentale (30-70 km)."
        },
        {
          question: "Comment se forme une roche métamorphique ?",
          options: ["Par refroidissement du magma", "Par accumulation de sédiments", "Par transformation sous pression et température", "Par érosion"],
          correct: "Par transformation sous pression et température",
          explanation: "Les roches métamorphiques se forment par transformation d'autres roches sous l'effet de la pression et de la température."
        }
      ]
    },
    "205": {
      title: "Écosystèmes et environnement",
      exercises: [
        {
          question: "Dans une chaîne alimentaire, que sont les producteurs ?",
          options: ["Les carnivores", "Les herbivores", "Les végétaux", "Les décomposeurs"],
          correct: "Les végétaux",
          explanation: "Les producteurs (végétaux) produisent leur propre matière organique par photosynthèse."
        },
        {
          question: "Quel pourcentage d'énergie passe d'un niveau trophique au suivant ?",
          options: ["50%", "25%", "10%", "1%"],
          correct: "10%",
          explanation: "Environ 10% de l'énergie passe d'un niveau trophique au suivant, le reste étant perdu sous forme de chaleur."
        },
        {
          question: "Que régule la relation prédateur-proie ?",
          options: ["La température", "Les effectifs des populations", "La photosynthèse", "Le pH du sol"],
          correct: "Les effectifs des populations",
          explanation: "La relation prédateur-proie régule naturellement les effectifs des deux espèces."
        }
      ]
    },
    "206": {
      title: "L'Homme et l'environnement",
      exercises: [
        {
          question: "De combien a augmenté la température moyenne depuis l'ère préindustrielle ?",
          options: ["0,5°C", "1,1°C", "2,0°C", "3,0°C"],
          correct: "1,1°C",
          explanation: "La température moyenne globale a augmenté d'environ 1,1°C depuis l'ère préindustrielle."
        },
        {
          question: "Que signifie le développement durable ?",
          options: ["Croissance économique maximale", "Protection environnementale uniquement", "Équilibre économie-social-environnement", "Arrêt du développement"],
          correct: "Équilibre économie-social-environnement",
          explanation: "Le développement durable concilie progrès économique, équité sociale et protection environnementale."
        },
        {
          question: "Quel gaz contribue le plus à l'effet de serre anthropique ?",
          options: ["O₂", "N₂", "CO₂", "H₂O"],
          correct: "CO₂",
          explanation: "Le dioxyde de carbone (CO₂) est le principal gaz à effet de serre d'origine anthropique."
        }
      ]
    },
    "207": {
      title: "Génétique et hérédité",
      exercises: [
        {
          question: "Combien de chromosomes possède une cellule humaine ?",
          options: ["23", "46", "92", "24"],
          correct: "46",
          explanation: "Chaque cellule humaine possède 46 chromosomes (23 paires)."
        },
        {
          question: "Quelle est la séquence de l'expression génique ?",
          options: ["Protéine → ARN → ADN", "ADN → Protéine → ARN", "ADN → ARN → Protéine", "ARN → ADN → Protéine"],
          correct: "ADN → ARN → Protéine",
          explanation: "L'expression génique suit la séquence : transcription (ADN → ARN) puis traduction (ARN → Protéine)."
        },
        {
          question: "Qu'est-ce qui crée la variabilité génétique ?",
          options: ["L'alimentation", "Les mutations", "L'exercice", "L'âge"],
          correct: "Les mutations",
          explanation: "Les mutations de l'ADN créent de la variabilité génétique, matière première de l'évolution."
        }
      ]
    },
    "208": {
      title: "Immunologie et santé",
      exercises: [
        {
          question: "Quels sont les deux types d'immunité ?",
          options: ["Active et passive", "Innée et adaptative", "Spécifique et générale", "Primaire et secondaire"],
          correct: "Innée et adaptative",
          explanation: "L'organisme possède une immunité innée (non spécifique) et une immunité adaptative (spécifique)."
        },
        {
          question: "Que produit un vaccin ?",
          options: ["Une immunité passive", "Des anticorps directement", "Une immunité active", "Une guérison immédiate"],
          correct: "Une immunité active",
          explanation: "La vaccination stimule l'immunité active en présentant un antigène à l'organisme."
        },
        {
          question: "Quel est le rôle des lymphocytes mémoire ?",
          options: ["Détruire immédiatement les microbes", "Garder l'information antigénique", "Produire des enzymes", "Transporter l'oxygène"],
          correct: "Garder l'information antigénique",
          explanation: "Les lymphocytes mémoire conservent l'information sur l'antigène pour une réponse plus rapide lors d'un contact ultérieur."
        }
      ]
    }
  };

  const currentSet = exerciseSets[id as keyof typeof exerciseSets] || exerciseSets["201"];
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
              <div className="text-6xl font-bold text-green-600 mb-4">
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
                <Link to="/lessons/svt">
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
            <Link to="/lessons/svt">
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
              <Target className="h-8 w-8 text-green-600" />
              {currentSet.title}
            </h1>
            <p className="text-muted-foreground">
              Leçon {id} - Exercices pratiques SVT
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
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-border hover:border-green-300 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                        selectedAnswers[currentExercise] === option
                          ? "border-green-500 bg-green-500"
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

export default SVTExercises;
