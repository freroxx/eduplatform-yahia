import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, BookOpen, Calculator, Home, FileText } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import PDFViewer from "@/components/PDFViewer";

const Lesson1Course = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPDF, setShowPDF] = useState(false);

  // Produit scalaire images
  const produitScalaireImages = [
    "/lovable-uploads/cd4a7174-2c37-4430-9977-542863367029.png",
    "/lovable-uploads/48671fc1-0965-4d5e-95fd-46dae4cf46e6.png",
    "/lovable-uploads/dca2f400-4e17-4ce5-92a6-86eb06edf538.png",
    "/lovable-uploads/dabaf442-6867-47c1-a06a-2f67b46ee150.png",
    "/lovable-uploads/a3b682bc-0d23-4380-a56d-f9420410c7d6.png",
    "/lovable-uploads/daf64bbb-f1f3-4315-a24e-3fbd0cec347d.png",
    "/lovable-uploads/baba2588-7595-448e-8891-8c5f3d728943.png",
    "/lovable-uploads/a2b5935a-5511-4c72-9cdc-ad634f9d5bd4.png",
    "/lovable-uploads/e402c0ef-008a-4d0e-8b0f-2e7ca9f9baed.png"
  ];

  const lessonContent = {
    "1": {
      title: "Généralités sur les fonctions",
      pdfUrl: "/lovable-uploads/25ac9238-31dc-4b40-8ee2-51728f1c7a9a.png",
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
      pdfUrl: "/lovable-uploads/25ac9238-31dc-4b40-8ee2-51728f1c7a9a.png",
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
      pdfUrl: "/lovable-uploads/25ac9238-31dc-4b40-8ee2-51728f1c7a9a.png",
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
      pdfUrl: "/lovable-uploads/25ac9238-31dc-4b40-8ee2-51728f1c7a9a.png",
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
      pdfUrl: "/lovable-uploads/25ac9238-31dc-4b40-8ee2-51728f1c7a9a.png",
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
      pdfUrl: "/lovable-uploads/25ac9238-31dc-4b40-8ee2-51728f1c7a9a.png",
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
    },
    "7": {
      title: "Produit scalaire",
      pdfUrl: produitScalaireImages,
      slides: [
        {
          title: "Introduction au produit scalaire",
          content: "Le produit scalaire est une notion fondamentale en mathématiques, particulièrement en géométrie vectorielle. Il a été introduit au milieu du XIXe siècle par le mathématicien allemand Hermann Grassmann.",
          formula: "Pour deux vecteurs u⃗ et v⃗, le produit scalaire est noté u⃗·v⃗",
          example: "Le produit scalaire permet de calculer des angles, des distances et des projections orthogonales."
        },
        {
          title: "Définition du produit scalaire",
          content: "Soient u⃗ et v⃗ deux vecteurs du plan. Le produit scalaire de u⃗ par v⃗, noté u⃗·v⃗, est le nombre réel défini par plusieurs méthodes équivalentes.",
          formula: "u⃗·v⃗ = ||u⃗|| × ||v⃗|| × cos(u⃗,v⃗)",
          example: "Si u⃗ = 0⃗ ou v⃗ = 0⃗ alors u⃗·v⃗ = 0"
        },
        {
          title: "Propriétés du produit scalaire",
          content: "Le produit scalaire possède plusieurs propriétés importantes : commutativité, distributivité, et relation avec la norme d'un vecteur.",
          formula: "u⃗·v⃗ = v⃗·u⃗ (commutativité)",
          example: "u⃗·u⃗ = ||u⃗||² (carré scalaire)"
        },
        {
          title: "Applications géométriques",
          content: "Le produit scalaire permet de résoudre de nombreux problèmes géométriques : calcul d'angles, vérification d'orthogonalité, calcul de projections.",
          formula: "Deux vecteurs sont orthogonaux ⟺ u⃗·v⃗ = 0",
          example: "Dans un triangle rectangle ABC, AB⃗·AC⃗ = 0"
        },
        {
          title: "Théorème d'Al-Kashi",
          content: "Le théorème d'Al-Kashi (ou loi des cosinus) généralise le théorème de Pythagore aux triangles quelconques.",
          formula: "BC² = AB² + AC² - 2AB × AC × cos(Â)",
          example: "Si Â = 90°, on retrouve le théorème de Pythagore : BC² = AB² + AC²"
        }
      ]
    }
  };

  const lesson = lessonContent[id as keyof typeof lessonContent] || lessonContent["1"];
  const totalSlides = lesson.slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  const handleBackToLessons = () => {
    navigate('/lessons/math');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen animated-bg">
      <GlobalHeader />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleBackToLessons}
              className="hover:scale-105 transition-transform"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Retour aux leçons
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleBackToHome}
              className="hover:scale-105 transition-transform"
            >
              <Home className="h-4 w-4 mr-2" />
              Accueil
            </Button>
          </motion.div>

          {/* Course Title */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
              <Calculator className="h-8 w-8 text-indigo-600" />
              {lesson.title}
            </h1>
            <p className="text-muted-foreground">
              Chapitre {id} - Cours interactif avec support PDF
            </p>
          </motion.div>

          {/* Progress */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Slide {currentSlide + 1} sur {totalSlides}
              </span>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% terminé
                </span>
                {lesson.pdfUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowPDF(!showPDF)}
                    className="hover:scale-105 transition-transform shadow-md"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    PDF {Array.isArray(lesson.pdfUrl) && `(${lesson.pdfUrl.length} pages)`}
                  </Button>
                )}
              </div>
            </div>
            <Progress value={progress} className="w-full h-3 rounded-full" />
          </motion.div>

          {/* Content */}
          {showPDF && lesson.pdfUrl ? (
            <PDFViewer 
              pdfUrl={lesson.pdfUrl} 
              title={lesson.title}
              onClose={() => setShowPDF(false)}
            />
          ) : (
            <>
              {/* Slide Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Card className="mb-8 bg-card/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-t-lg">
                      <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                        <BookOpen className="h-6 w-6" />
                        {lesson.slides[currentSlide].title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 p-8">
                      <motion.div 
                        className="text-lg leading-relaxed text-card-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {lesson.slides[currentSlide].content}
                      </motion.div>
                      
                      {lesson.slides[currentSlide].formula && (
                        <motion.div 
                          className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800 shadow-inner"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3 text-lg">
                            💡 Formule :
                          </h4>
                          <div className="font-mono text-xl text-indigo-700 dark:text-indigo-300 bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                            {lesson.slides[currentSlide].formula}
                          </div>
                        </motion.div>
                      )}

                      {lesson.slides[currentSlide].example && (
                        <motion.div 
                          className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 shadow-inner"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 text-lg">
                            📝 Exemple :
                          </h4>
                          <div className="text-green-700 dark:text-green-300 bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                            {lesson.slides[currentSlide].example}
                          </div>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <motion.div 
                className="flex justify-between items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-transform disabled:hover:scale-100 shadow-md"
                >
                  <ChevronLeft className="h-5 w-5 mr-2" />
                  Précédent
                </Button>

                <div className="flex space-x-3">
                  {lesson.slides.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-indigo-600 scale-125 shadow-lg"
                          : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-110"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-transform disabled:hover:scale-100 shadow-md"
                >
                  Suivant
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Lesson1Course;
