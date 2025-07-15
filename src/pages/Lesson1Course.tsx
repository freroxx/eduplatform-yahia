
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, BookOpen, Calculator, Home } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";

const Lesson1Course = () => {
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Different content based on lesson ID
  const lessonContent = {
    "1": {
      title: "Généralités sur les fonctions",
      slides: [
        {
          title: "Qu'est-ce qu'une fonction ?",
          content: "Une fonction est une relation qui associe à chaque élément d'un ensemble de départ (domaine) au plus un élément d'un ensemble d'arrivée (codomaine).",
          formula: "f : A → B",
          example: "Exemple : f(x) = 2x + 3"
        },
        {
          title: "Domaine de définition",
          content: "Le domaine de définition d'une fonction f est l'ensemble de toutes les valeurs pour lesquelles f(x) est définie.",
          formula: "Df = {x ∈ ℝ | f(x) existe}",
          example: "Pour f(x) = 1/x, Df = ℝ* (tous les réels sauf 0)"
        },
        {
          title: "Image d'une fonction",
          content: "L'image d'une fonction est l'ensemble de toutes les valeurs que peut prendre f(x).",
          formula: "Im(f) = {y ∈ ℝ | ∃x ∈ Df, f(x) = y}",
          example: "Pour f(x) = x², Im(f) = ℝ+ (tous les réels positifs)"
        },
        {
          title: "Représentation graphique",
          content: "Le graphique d'une fonction f est l'ensemble des points (x, f(x)) dans le plan cartésien.",
          formula: "Gf = {(x, y) | x ∈ Df et y = f(x)}",
          example: "La courbe représentative permet de visualiser le comportement de la fonction"
        }
      ]
    },
    "2": {
      title: "Fonctions de référence",
      slides: [
        {
          title: "Fonction linéaire",
          content: "Une fonction linéaire est de la forme f(x) = ax où a est une constante non nulle.",
          formula: "f(x) = ax",
          example: "f(x) = 3x passe par l'origine avec une pente de 3"
        },
        {
          title: "Fonction affine",
          content: "Une fonction affine est de la forme f(x) = ax + b où a et b sont des constantes.",
          formula: "f(x) = ax + b",
          example: "f(x) = 2x - 1 a une pente de 2 et une ordonnée à l'origine de -1"
        },
        {
          title: "Fonction carrée",
          content: "La fonction carrée est définie par f(x) = x².",
          formula: "f(x) = x²",
          example: "Sa courbe est une parabole avec sommet à l'origine"
        },
        {
          title: "Fonction inverse",
          content: "La fonction inverse est définie par f(x) = 1/x pour x ≠ 0.",
          formula: "f(x) = 1/x",
          example: "Sa courbe est une hyperbole avec asymptotes aux axes"
        }
      ]
    },
    "3": {
      title: "Équations et inéquations",
      slides: [
        {
          title: "Équations du premier degré",
          content: "Une équation du premier degré est de la forme ax + b = 0 où a ≠ 0.",
          formula: "ax + b = 0 ⟹ x = -b/a",
          example: "3x - 6 = 0 ⟹ x = 2"
        },
        {
          title: "Équations du second degré",
          content: "Une équation du second degré est de la forme ax² + bx + c = 0 où a ≠ 0.",
          formula: "x = (-b ± √(b² - 4ac)) / 2a",
          example: "x² - 5x + 6 = 0 ⟹ x = 2 ou x = 3"
        },
        {
          title: "Inéquations du premier degré",
          content: "Une inéquation du premier degré se résout comme une équation en conservant le sens des inégalités.",
          formula: "ax + b > 0 ⟹ x > -b/a (si a > 0)",
          example: "2x - 4 > 0 ⟹ x > 2"
        },
        {
          title: "Tableaux de signes",
          content: "Les tableaux de signes permettent de résoudre les inéquations plus complexes.",
          formula: "Étudier le signe de chaque facteur",
          example: "(x-1)(x+2) > 0 ⟹ x ∈ ]-∞,-2[ ∪ ]1,+∞["
        }
      ]
    },
    "4": {
      title: "Statistiques descriptives",
      slides: [
        {
          title: "Mesures de tendance centrale",
          content: "La moyenne, la médiane et le mode sont les principales mesures de tendance centrale.",
          formula: "Moyenne = Σxi/n",
          example: "Pour {2, 4, 6, 8}, moyenne = 5"
        },
        {
          title: "Mesures de dispersion",
          content: "L'étendue, la variance et l'écart-type mesurent la dispersion des données.",
          formula: "σ = √(Σ(xi - μ)²/n)",
          example: "Plus σ est grand, plus les données sont dispersées"
        },
        {
          title: "Représentations graphiques",
          content: "Histogrammes, diagrammes circulaires et boîtes à moustaches visualisent les données.",
          formula: "Choisir selon le type de données",
          example: "Histogramme pour données quantitatives continues"
        },
        {
          title: "Quartiles et centiles",
          content: "Les quartiles divisent les données en 4 parties égales.",
          formula: "Q1, Q2 (médiane), Q3",
          example: "25% des données sont inférieures à Q1"
        }
      ]
    },
    "5": {
      title: "Géométrie dans l'espace",
      slides: [
        {
          title: "Solides usuels",
          content: "Cube, parallélépipède, cylindre, cône, sphère sont les solides de base.",
          formula: "Chaque solide a ses formules de volume",
          example: "Volume cube = a³"
        },
        {
          title: "Calculs de volumes",
          content: "Les formules de volume permettent de calculer l'espace occupé par un solide.",
          formula: "V = aire_base × hauteur (prismes)",
          example: "Volume cylindre = πr²h"
        },
        {
          title: "Calculs d'aires",
          content: "L'aire totale d'un solide comprend toutes ses faces.",
          formula: "Aire totale = aire latérale + aires des bases",
          example: "Aire sphère = 4πr²"
        },
        {
          title: "Transformations géométriques",
          content: "Translation, rotation, symétrie conservent certaines propriétés.",
          formula: "Isométries conservent distances et angles",
          example: "La rotation conserve les longueurs"
        }
      ]
    },
    "6": {
      title: "Trigonométrie",
      slides: [
        {
          title: "Relations trigonométriques",
          content: "Dans un triangle rectangle, les rapports trigonométriques relient angles et côtés.",
          formula: "sin θ = opposé/hypoténuse",
          example: "cos θ = adjacent/hypoténuse, tan θ = opposé/adjacent"
        },
        {
          title: "Cercle trigonométrique",
          content: "Le cercle trigonométrique généralise les fonctions sin et cos à tous les angles.",
          formula: "sin²θ + cos²θ = 1",
          example: "Les angles sont mesurés en radians : π rad = 180°"
        },
        {
          title: "Résolution de triangles",
          content: "La trigonométrie permet de calculer côtés et angles d'un triangle.",
          formula: "Loi des sinus : a/sin A = b/sin B = c/sin C",
          example: "Si on connaît 2 côtés et l'angle entre eux"
        },
        {
          title: "Applications pratiques",
          content: "La trigonométrie s'applique en physique, navigation, architecture.",
          formula: "Calculs de hauteurs, distances, angles",
          example: "Mesurer la hauteur d'un bâtiment avec un théodolite"
        }
      ]
    }
  };

  const lesson = lessonContent[id as keyof typeof lessonContent] || lessonContent["1"];
  const totalSlides = lesson.slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;

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

          {/* Course Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
              <Calculator className="h-8 w-8 text-indigo-600" />
              {lesson.title}
            </h1>
            <p className="text-muted-foreground">
              Chapitre {id} - Cours interactif
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Slide {currentSlide + 1} sur {totalSlides}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% terminé
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          {/* Slide Content */}
          <Card className="mb-8 bg-card/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-card-foreground flex items-center justify-center gap-2">
                <BookOpen className="h-6 w-6 text-indigo-600" />
                {lesson.slides[currentSlide].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg leading-relaxed text-card-foreground">
                {lesson.slides[currentSlide].content}
              </div>
              
              {lesson.slides[currentSlide].formula && (
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
                    Formule :
                  </h4>
                  <div className="font-mono text-lg text-indigo-700 dark:text-indigo-300">
                    {lesson.slides[currentSlide].formula}
                  </div>
                </div>
              )}

              {lesson.slides[currentSlide].example && (
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    Exemple :
                  </h4>
                  <div className="text-green-700 dark:text-green-300">
                    {lesson.slides[currentSlide].example}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              size="lg"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Précédent
            </Button>

            <div className="flex space-x-2">
              {lesson.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? "bg-indigo-600"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              variant="outline"
              size="lg"
            >
              Suivant
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Lesson1Course;
