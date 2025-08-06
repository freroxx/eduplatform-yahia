
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, BookOpen, Calculator, Home, FileText } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import PDFViewer from "@/components/PDFViewer";
import WorkInProgressModal from "@/components/WorkInProgressModal";

const Lesson1Course = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPDF, setShowPDF] = useState(false);
  const [showWorkInProgress, setShowWorkInProgress] = useState(false);

  // Image collections for different lessons
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
      hasImages: true,
      slides: [
        {
          title: "Qu'est-ce qu'une fonction ?",
          content: "Une fonction est une relation qui associe à chaque élément d'un ensemble de départ (domaine) au plus un élément d'un ensemble d'arrivée (codomaine).\n\nUne fonction f de A vers B est une règle qui associe à chaque élément x de A exactement un élément y de B. On note f : A → B.\n\nL'élément y est appelé l'image de x par f, et on écrit y = f(x).",
          formula: "f : A → B",
          example: "Exemple : f(x) = 2x + 3 associe à chaque réel x le réel 2x + 3"
        },
        {
          title: "Domaine de définition",
          content: "Le domaine de définition d'une fonction f est l'ensemble de toutes les valeurs pour lesquelles f(x) est définie.\n\nIl faut exclure les valeurs qui rendent l'expression impossible :\n- Division par zéro\n- Racine carrée d'un nombre négatif\n- Logarithme d'un nombre négatif ou nul",
          formula: "Df = {x ∈ ℝ | f(x) existe}",
          example: "Pour f(x) = 1/x, Df = ℝ* (tous les réels sauf 0)\nPour g(x) = √x, Dg = ℝ+ (tous les réels positifs)"
        },
        {
          title: "Image d'une fonction",
          content: "L'image d'une fonction est l'ensemble de toutes les valeurs que peut prendre f(x) quand x parcourt le domaine de définition.\n\nC'est l'ensemble des ordonnées des points de la courbe représentative de f.",
          formula: "Im(f) = {y ∈ ℝ | ∃x ∈ Df, f(x) = y}",
          example: "Pour f(x) = x², Im(f) = ℝ+ (tous les réels positifs)\nPour f(x) = sin(x), Im(f) = [-1, 1]"
        },
        {
          title: "Représentation graphique",
          content: "Le graphique d'une fonction f est l'ensemble des points (x, f(x)) dans le plan cartésien.\n\nLa courbe représentative permet de visualiser :\n- Le domaine de définition (projection sur l'axe des x)\n- L'image (projection sur l'axe des y)\n- Le comportement de la fonction",
          formula: "Gf = {(x, y) | x ∈ Df et y = f(x)}",
          example: "Chaque point de la courbe a pour coordonnées (x, f(x))"
        }
      ]
    },
    "2": {
      title: "Fonctions de référence",
      pdfUrl: "/lovable-uploads/25ac9238-31dc-4b40-8ee2-51728f1c7a9a.png",
      hasImages: false,
      slides: [
        {
          title: "Fonction linéaire",
          content: "Une fonction linéaire est de la forme f(x) = ax où a est une constante non nulle.\n\nCaractéristiques :\n- Sa courbe est une droite passant par l'origine\n- a est le coefficient directeur (pente)\n- Elle est définie sur ℝ tout entier",
          formula: "f(x) = ax",
          example: "f(x) = 3x passe par l'origine avec une pente de 3\nf(x) = -2x a une pente négative de -2"
        },
        {
          title: "Fonction affine",
          content: "Une fonction affine est de la forme f(x) = ax + b où a et b sont des constantes.\n\nCaractéristiques :\n- Sa courbe est une droite\n- a est le coefficient directeur\n- b est l'ordonnée à l'origine",
          formula: "f(x) = ax + b",
          example: "f(x) = 2x - 1 a une pente de 2 et coupe l'axe y en -1\nf(x) = -x + 3 a une pente de -1 et coupe l'axe y en 3"
        },
        {
          title: "Fonction carrée",
          content: "La fonction carrée est définie par f(x) = x².\n\nCaractéristiques :\n- Sa courbe est une parabole\n- Elle est paire : f(-x) = f(x)\n- Son sommet est à l'origine\n- Elle est décroissante sur ]-∞, 0] et croissante sur [0, +∞[",
          formula: "f(x) = x²",
          example: "f(2) = 4, f(-2) = 4\nLe minimum est atteint en x = 0"
        },
        {
          title: "Fonction inverse",
          content: "La fonction inverse est définie par f(x) = 1/x pour x ≠ 0.\n\nCaractéristiques :\n- Elle n'est pas définie en 0\n- Sa courbe est une hyperbole\n- Elle a deux branches symétriques\n- Les axes sont asymptotes",
          formula: "f(x) = 1/x",
          example: "f(2) = 1/2 = 0,5\nf(-1) = -1\nQuand x tend vers 0, f(x) tend vers ±∞"
        }
      ]
    },
    "3": {
      title: "Équations et inéquations",
      pdfUrl: "/lovable-uploads/25ac9238-31dc-4b40-8ee2-51728f1c7a9a.png",
      hasImages: false,
      slides: [
        {
          title: "Équations du premier degré",
          content: "Une équation du premier degré est de la forme ax + b = 0 où a ≠ 0.\n\nMéthode de résolution :\n1. Isoler les termes en x d'un côté\n2. Diviser par le coefficient de x\n3. Vérifier la solution",
          formula: "ax + b = 0 ⟹ x = -b/a",
          example: "3x - 6 = 0\n3x = 6\nx = 6/3 = 2\nVérification : 3(2) - 6 = 0 ✓"
        },
        {
          title: "Équations du second degré",
          content: "Une équation du second degré est de la forme ax² + bx + c = 0 où a ≠ 0.\n\nLe discriminant Δ = b² - 4ac détermine le nombre de solutions :\n- Si Δ > 0 : deux solutions distinctes\n- Si Δ = 0 : une solution double\n- Si Δ < 0 : aucune solution réelle",
          formula: "x = (-b ± √(b² - 4ac)) / 2a",
          example: "x² - 5x + 6 = 0\nΔ = 25 - 24 = 1 > 0\nx = (5 ± 1)/2\nx = 3 ou x = 2"
        },
        {
          title: "Inéquations du premier degré",
          content: "Une inéquation du premier degré se résout comme une équation en conservant le sens des inégalités.\n\nAttention : quand on multiplie ou divise par un nombre négatif, le sens de l'inégalité change !",
          formula: "ax + b > 0 ⟹ x > -b/a (si a > 0)",
          example: "2x - 4 > 0\n2x > 4\nx > 2\nSolution : ]2, +∞["
        },
        {
          title: "Tableaux de signes",
          content: "Les tableaux de signes permettent de résoudre les inéquations plus complexes impliquant des produits ou quotients.\n\nMéthode :\n1. Factoriser l'expression\n2. Trouver les zéros de chaque facteur\n3. Étudier le signe sur chaque intervalle",
          formula: "Étudier le signe de chaque facteur séparément",
          example: "(x-1)(x+2) > 0\nZéros : x = 1 et x = -2\nSolution : x ∈ ]-∞,-2[ ∪ ]1,+∞["
        }
      ]
    },
    "4": {
      title: "Statistiques descriptives",
      pdfUrl: "/lovable-uploads/25ac9238-31dc-4b40-8ee2-51728f1c7a9a.png",
      hasImages: false,
      slides: [
        {
          title: "Mesures de tendance centrale",
          content: "Les mesures de tendance centrale résument les données par une valeur représentative :\n\n• Moyenne : somme des valeurs divisée par leur nombre\n• Médiane : valeur centrale qui partage les données en deux groupes égaux\n• Mode : valeur la plus fréquente",
          formula: "Moyenne = (Σxi)/n",
          example: "Pour {2, 4, 6, 8} :\nMoyenne = (2+4+6+8)/4 = 5\nMédiane = (4+6)/2 = 5"
        },
        {
          title: "Mesures de dispersion",
          content: "Les mesures de dispersion indiquent comment les données sont réparties :\n\n• Étendue : différence entre max et min\n• Variance : moyenne des carrés des écarts à la moyenne\n• Écart-type : racine carrée de la variance",
          formula: "σ = √(Σ(xi - μ)²/n)",
          example: "Plus σ est grand, plus les données sont dispersées autour de la moyenne"
        },
        {
          title: "Représentations graphiques",
          content: "Différents graphiques selon le type de données :\n\n• Histogramme : données quantitatives continues\n• Diagramme circulaire : données qualitatives\n• Diagramme en barres : données quantitatives discrètes\n• Boîte à moustaches : résumé des quartiles",
          formula: "Choisir le graphique adapté au type de données",
          example: "Histogramme pour les notes d'un examen\nDiagramme circulaire pour les matières préférées"
        },
        {
          title: "Quartiles et centiles",
          content: "Les quartiles divisent les données ordonnées en 4 parties égales :\n\n• Q1 : 25% des données sont inférieures\n• Q2 : médiane (50%)\n• Q3 : 75% des données sont inférieures\n• Écart interquartile : Q3 - Q1",
          formula: "Q1, Q2 (médiane), Q3",
          example: "Pour 100 élèves, Q1 est la note du 25e élève dans l'ordre croissant"
        }
      ]
    },
    "5": {
      title: "Géométrie dans l'espace",
      pdfUrl: "/lovable-uploads/25ac9238-31dc-4b40-8ee2-51728f1c7a9a.png",
      hasImages: false,
      slides: [
        {
          title: "Solides usuels",
          content: "Les principaux solides et leurs propriétés :\n\n• Cube : 6 faces carrées identiques\n• Parallélépipède : 6 faces rectangulaires\n• Cylindre : 2 bases circulaires, surface latérale courbe\n• Cône : 1 base circulaire, sommet\n• Sphère : surface courbe, tous les points à égale distance du centre",
          formula: "Chaque solide a ses formules spécifiques",
          example: "Un dé est un cube parfait\nUne boîte de conserve est un cylindre"
        },
        {
          title: "Calculs de volumes",
          content: "Formules des volumes principaux :\n\n• Cube : a³\n• Parallélépipède : L × l × h\n• Cylindre : π × r² × h\n• Cône : (1/3) × π × r² × h\n• Sphère : (4/3) × π × r³",
          formula: "V = aire_base × hauteur (pour les prismes)",
          example: "Volume d'un cylindre de rayon 3 et hauteur 5 :\nV = π × 3² × 5 = 45π cm³"
        },
        {
          title: "Calculs d'aires",
          content: "L'aire totale comprend toutes les surfaces externes :\n\n• Cube : 6a²\n• Cylindre : 2πr² + 2πrh (bases + latérale)\n• Cône : πr² + πrl (base + latérale)\n• Sphère : 4πr²",
          formula: "Aire totale = aire latérale + aires des bases",
          example: "Aire d'un cube d'arête 4 cm :\nA = 6 × 4² = 96 cm²"
        },
        {
          title: "Transformations géométriques",
          content: "Les transformations conservent certaines propriétés :\n\n• Translation : déplacement sans rotation\n• Rotation : pivot autour d'un point\n• Symétrie : reflexion par rapport à un axe ou point\n• Homothétie : agrandissement/réduction",
          formula: "Les isométries conservent distances et angles",
          example: "Une rotation de 90° transforme un carré en carré identique"
        }
      ]
    },
    "6": {
      title: "Trigonométrie",
      pdfUrl: "/lovable-uploads/25ac9238-31dc-4b40-8ee2-51728f1c7a9a.png",
      hasImages: false,
      slides: [
        {
          title: "Relations trigonométriques",
          content: "Dans un triangle rectangle, les rapports trigonométriques relient un angle aigu aux longueurs des côtés :\n\n• Sinus : rapport du côté opposé à l'hypoténuse\n• Cosinus : rapport du côté adjacent à l'hypoténuse\n• Tangente : rapport du côté opposé au côté adjacent",
          formula: "sin θ = opposé/hypoténuse",
          example: "cos θ = adjacent/hypoténuse\ntan θ = opposé/adjacent\ntan θ = sin θ / cos θ"
        },
        {
          title: "Cercle trigonométrique",
          content: "Le cercle trigonométrique généralise les fonctions sin et cos à tous les angles :\n\n• Rayon = 1\n• Centre à l'origine\n• Angles mesurés depuis l'axe positif des x\n• Sens trigonométrique (anti-horaire)",
          formula: "sin²θ + cos²θ = 1 (relation fondamentale)",
          example: "π radians = 180°\nsin(π/2) = 1, cos(π/2) = 0"
        },
        {
          title: "Résolution de triangles",
          content: "La trigonométrie permet de calculer tous les éléments d'un triangle connaissant :\n\n• 2 côtés et l'angle entre eux\n• 1 côté et 2 angles\n• 3 côtés (loi des cosinus)\n\nLoi des sinus : dans tout triangle, les rapports côté/sinus de l'angle opposé sont égaux.",
          formula: "Loi des sinus : a/sin A = b/sin B = c/sin C",
          example: "Triangle avec a = 5, b = 7, angle C = 60°\nOn peut calculer c avec la loi des cosinus"
        },
        {
          title: "Applications pratiques",
          content: "La trigonométrie a de nombreuses applications :\n\n• Navigation : calcul de cap et distances\n• Architecture : calcul de pentes et hauteurs\n• Physique : analyse des forces, ondes\n• Astronomie : positions des astres",
          formula: "Utilisation des rapports trigonométriques",
          example: "Mesurer la hauteur d'un bâtiment :\nSi angle = 30° et distance = 50m\nHauteur = 50 × tan(30°) ≈ 29m"
        }
      ]
    },
    "7": {
      title: "Produit scalaire",
      pdfUrl: produitScalaireImages,
      hasImages: true,
      slides: [
        {
          title: "Introduction au produit scalaire",
          content: "Le produit scalaire est une opération fondamentale en géométrie vectorielle, introduite au XIXe siècle par Hermann Grassmann.\n\nC'est un outil puissant qui permet de :\n• Calculer des angles entre vecteurs\n• Déterminer l'orthogonalité\n• Calculer des projections\n• Résoudre des problèmes géométriques complexes",
          formula: "u⃗ · v⃗ (produit scalaire de u⃗ par v⃗)",
          example: "Applications : physique (travail d'une force), géométrie (angles), informatique (graphisme 3D)"
        },
        {
          title: "Définition du produit scalaire",
          content: "Pour deux vecteurs u⃗ et v⃗ non nuls, le produit scalaire est le nombre réel défini par :\n\nu⃗ · v⃗ = ||u⃗|| × ||v⃗|| × cos(θ)\n\noù θ est l'angle entre les deux vecteurs.\n\nCas particuliers :\n• Si u⃗ = 0⃗ ou v⃗ = 0⃗, alors u⃗ · v⃗ = 0\n• Si θ = 90°, alors u⃗ · v⃗ = 0 (vecteurs orthogonaux)",
          formula: "u⃗ · v⃗ = ||u⃗|| × ||v⃗|| × cos(u⃗, v⃗)",
          example: "Deux vecteurs de normes 3 et 4 avec un angle de 60° :\nu⃗ · v⃗ = 3 × 4 × cos(60°) = 12 × 0,5 = 6"
        },
        {
          title: "Propriétés du produit scalaire",
          content: "Le produit scalaire possède plusieurs propriétés importantes :\n\n• Commutativité : u⃗ · v⃗ = v⃗ · u⃗\n• Distributivité : u⃗ · (v⃗ + w⃗) = u⃗ · v⃗ + u⃗ · w⃗\n• Associativité avec un scalaire : (ku⃗) · v⃗ = k(u⃗ · v⃗)\n• Carré scalaire : u⃗ · u⃗ = ||u⃗||²",
          formula: "u⃗ · v⃗ = v⃗ · u⃗ (commutativité)",
          example: "Si u⃗ · v⃗ = 5, alors v⃗ · u⃗ = 5\nSi ||u⃗|| = 3, alors u⃗ · u⃗ = 9"
        },
        {
          title: "Applications géométriques",
          content: "Le produit scalaire permet de résoudre de nombreux problèmes :\n\n• Test d'orthogonalité : u⃗ · v⃗ = 0 ⟺ u⃗ ⊥ v⃗\n• Calcul d'angles : cos θ = (u⃗ · v⃗)/(||u⃗|| × ||v⃗||)\n• Projection orthogonale d'un vecteur sur un autre\n• Théorème de Pythagore généralisé",
          formula: "u⃗ ⊥ v⃗ ⟺ u⃗ · v⃗ = 0",
          example: "Dans un carré ABCD :\nAB⃗ · BC⃗ = 0 (côtés perpendiculaires)\nAB⃗ · AD⃗ = 0 (côtés perpendiculaires)"
        },
        {
          title: "Théorème d'Al-Kashi",
          content: "Le théorème d'Al-Kashi (ou loi des cosinus) généralise le théorème de Pythagore aux triangles quelconques :\n\nDans un triangle ABC :\nBC² = AB² + AC² - 2 × AB × AC × cos(Â)\n\nCe théorème permet de :\n• Calculer un côté connaissant deux côtés et l'angle entre eux\n• Calculer un angle connaissant les trois côtés",
          formula: "BC² = AB² + AC² - 2AB × AC × cos(Â)",
          example: "Triangle rectangle : si Â = 90°, cos(90°) = 0\nDonc BC² = AB² + AC² (Pythagore)\n\nTriangle avec AB = 3, AC = 4, Â = 60° :\nBC² = 9 + 16 - 24 × 0,5 = 13"
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
    navigate("/lessons/math");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const handlePDFClick = () => {
    if (lesson.hasImages) {
      setShowPDF(!showPDF);
    } else {
      setShowWorkInProgress(true);
    }
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
              Chapitre {id} - Cours interactif avec support visuel
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
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePDFClick}
                  className={`hover:scale-105 transition-transform shadow-md ${
                    !lesson.hasImages ? 'opacity-75' : ''
                  }`}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Images {Array.isArray(lesson.pdfUrl) && `(${lesson.pdfUrl.length})`}
                  {!lesson.hasImages && " - Bientôt"}
                </Button>
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
                        className="text-lg leading-relaxed text-card-foreground whitespace-pre-line"
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
                          <div className="text-green-700 dark:text-green-300 bg-white/50 dark:bg-black/20 p-3 rounded-lg whitespace-pre-line">
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

      <WorkInProgressModal
        open={showWorkInProgress}
        onOpenChange={setShowWorkInProgress}
        lessonTitle={lesson.title}
      />
    </div>
  );
};

export default Lesson1Course;
