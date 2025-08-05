
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CourseSlide from "@/components/CourseSlide";
import LoadingSpinner from "@/components/LoadingSpinner";

// Module 1: Fonctions et équations du second degré
const MathCourse = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsLoading(false);
          clearInterval(timer);
          return 100;
        }
        return prev + 15;
      });
    }, 400);

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: "Module 1: Fonctions et équations du second degré",
      content: `Les fonctions du second degré sont des polynômes de degré 2 qui jouent un rôle fondamental en mathématiques et dans de nombreuses applications pratiques.
      
      Objectifs du module:
      • Maîtriser la forme canonique et factorisée
      • Résoudre les équations du second degré
      • Étudier les variations et représentations graphiques
      • Analyser le discriminant et ses applications
      • Résoudre des problèmes concrets`,
      type: "intro" as const
    },
    {
      title: "Définition et forme générale",
      content: `📐 Définition
      Une fonction du second degré f est définie sur ℝ par:
      f(x) = ax² + bx + c
      
      Où a, b, c sont des réels avec a ≠ 0
      
      🔍 Formes remarquables:
      • Forme développée: f(x) = ax² + bx + c
      • Forme canonique: f(x) = a(x - α)² + β
      • Forme factorisée: f(x) = a(x - x₁)(x - x₂)
      
      💡 Le coefficient a détermine:
      - Si a > 0: parabole tournée vers le haut
      - Si a < 0: parabole tournée vers le bas`,
      type: "definition" as const
    },
    {
      title: "La forme canonique",
      content: `🎯 Transformation en forme canonique
      
      Pour f(x) = ax² + bx + c, on obtient:
      f(x) = a(x - α)² + β
      
      Avec:
      • α = -b/(2a) (abscisse du sommet)
      • β = f(α) (ordonnée du sommet)
      
      🔧 Méthode de calcul:
      1. Factoriser par a: f(x) = a(x² + (b/a)x) + c
      2. Compléter le carré: x² + (b/a)x = (x + b/(2a))² - (b/(2a))²
      3. Simplifier pour obtenir la forme canonique
      
      ⭐ Le sommet S(α, β) est un point remarquable de la parabole`,
      type: "definition" as const
    },
    {
      title: "Exemple pratique",
      content: `🧮 Soit f(x) = 2x² - 8x + 5
      
      Étape 1: Identifier les coefficients
      a = 2, b = -8, c = 5
      
      Étape 2: Calculer α et β
      α = -(-8)/(2×2) = 8/4 = 2
      β = f(2) = 2(2)² - 8(2) + 5 = 8 - 16 + 5 = -3
      
      Étape 3: Écrire la forme canonique
      f(x) = 2(x - 2)² - 3
      
      📊 Interprétation:
      • Sommet: S(2, -3)
      • Parabole tournée vers le haut (a > 0)
      • Minimum global: -3 atteint en x = 2`,
      type: "example" as const
    },
    {
      title: "Équations du second degré",
      content: `⚖️ Résolution de ax² + bx + c = 0
      
      🔑 Le discriminant Δ = b² - 4ac détermine le nombre de solutions:
      
      • Si Δ > 0: deux solutions réelles distinctes
        x₁ = (-b - √Δ)/(2a) et x₂ = (-b + √Δ)/(2a)
      
      • Si Δ = 0: une solution double
        x = -b/(2a)
      
      • Si Δ < 0: aucune solution réelle
      
      📝 Relations de Viète:
      Si x₁ et x₂ sont les racines:
      • x₁ + x₂ = -b/a
      • x₁ × x₂ = c/a`,
      type: "definition" as const
    },
    {
      title: "Représentation graphique",
      content: `📈 La parabole: courbe représentative
      
      🎨 Éléments caractéristiques:
      • Sommet S(α, β): point extremum
      • Axe de symétrie: x = α
      • Ordonnée à l'origine: f(0) = c
      • Racines: points d'intersection avec l'axe des x
      
      📊 Variations:
      • Si a > 0: f décroissante sur ]-∞; α] puis croissante sur [α; +∞[
      • Si a < 0: f croissante sur ]-∞; α] puis décroissante sur [α; +∞[
      
      🔍 Signe de f(x):
      Dépend du signe de a et de la position de x par rapport aux racines`,
      type: "definition" as const
    },
    {
      title: "Applications pratiques",
      content: `🚀 Domaines d'application:
      
      📐 Géométrie:
      • Calcul d'aires maximales et minimales
      • Optimisation de formes géométriques
      
      🏃‍♂️ Physique:
      • Trajectoires paraboliques des projectiles
      • Lois de la chute libre: h(t) = -½gt² + v₀t + h₀
      
      💼 Économie:
      • Fonctions de coût, recette, bénéfice
      • Optimisation de la production
      
      📊 Statistiques:
      • Méthode des moindres carrés
      • Ajustement parabolique de données`,
      type: "example" as const
    },
    {
      title: "Récapitulatif et méthodes",
      content: `✅ Points clés à retenir:
      
      🎯 Les trois formes:
      • Développée: ax² + bx + c
      • Canonique: a(x - α)² + β
      • Factorisée: a(x - x₁)(x - x₂)
      
      🔧 Méthodes de résolution:
      • Factorisation directe
      • Complétion du carré
      • Formule du discriminant
      • Méthode graphique
      
      📈 Analyse complète:
      1. Identifier les coefficients et calculer Δ
      2. Déterminer le sommet et l'axe de symétrie
      3. Étudier les variations et le signe
      4. Tracer la parabole avec les points clés`,
      type: "summary" as const
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <LoadingSpinner text="Chargement du cours de mathématiques..." progress={progress} type="progress" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CourseSlide 
        lessonTitle="Module 1: Fonctions du second degré" 
        slides={slides} 
      />
    </motion.div>
  );
};

export default MathCourse;
