
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CourseSlide from "@/components/CourseSlide";
import LoadingSpinner from "@/components/LoadingSpinner";

// Module 1: Fonctions linéaires et affines
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
      title: "Module 1: Fonctions linéaires et affines",
      content: `Les fonctions linéaires et affines sont des fonctions polynomiales du premier degré qui établissent une relation de proportionnalité ou quasi-proportionnalité entre deux variables.
      
      Objectifs du module:
      • Comprendre la différence entre fonctions linéaires et affines
      • Maîtriser le calcul du coefficient directeur
      • Déterminer l'équation d'une droite
      • Interpréter graphiquement les paramètres
      • Résoudre des problèmes de la vie courante
      • Étudier les positions relatives de droites`,
      type: "intro" as const
    },
    {
      title: "Fonctions linéaires",
      content: `📐 Définition
      Une fonction linéaire f est définie sur ℝ par:
      f(x) = ax
      
      Où a est un nombre réel appelé coefficient directeur
      
      🔍 Propriétés importantes:
      • La représentation graphique est une droite passant par l'origine O(0,0)
      • Le coefficient a détermine la pente de la droite
      • Si a > 0: la fonction est croissante
      • Si a < 0: la fonction est décroissante
      • Si a = 0: la fonction est constante (f(x) = 0)
      
      💡 Exemple pratique:
      f(x) = 3x représente une relation de proportionnalité
      Le coefficient de proportionnalité est 3`,
      type: "definition" as const
    },
    {
      title: "Fonctions affines",
      content: `📊 Définition
      Une fonction affine f est définie sur ℝ par:
      f(x) = ax + b
      
      Avec:
      • a: coefficient directeur (pente de la droite)
      • b: ordonnée à l'origine
      
      🎯 Caractéristiques:
      • Si b = 0: la fonction est linéaire
      • Si a = 0: la fonction est constante f(x) = b
      • La représentation graphique est une droite
      • Elle passe par le point (0, b)
      
      🔧 Pour déterminer une fonction affine:
      Il suffit de connaître deux points de la droite ou un point et le coefficient directeur`,
      type: "definition" as const
    },
    {
      title: "Calcul du coefficient directeur",
      content: `📏 Formule du coefficient directeur
      
      Pour deux points A(x₁, y₁) et B(x₂, y₂) avec x₁ ≠ x₂:
      
      a = (y₂ - y₁)/(x₂ - x₁)
      
      🧮 Exemple pratique:
      Soit A(1, 2) et B(4, 8)
      
      a = (8 - 2)/(4 - 1) = 6/3 = 2
      
      📈 Interprétation:
      • Si a > 0: la droite "monte" (fonction croissante)
      • Si a < 0: la droite "descend" (fonction décroissante)
      • Plus |a| est grand, plus la droite est "pentue"
      • a représente la variation de y quand x augmente de 1`,
      type: "example" as const
    },
    {
      title: "Détermination d'une équation de droite",
      content: `🎯 Méthodes pour trouver l'équation f(x) = ax + b
      
      **Méthode 1: Avec deux points A(x₁, y₁) et B(x₂, y₂)**
      1. Calculer a = (y₂ - y₁)/(x₂ - x₁)
      2. Utiliser un des points pour trouver b: y₁ = ax₁ + b donc b = y₁ - ax₁
      
      **Méthode 2: Avec un point et le coefficient directeur**
      1. On connaît a
      2. Utiliser le point pour trouver b
      
      **Méthode 3: Avec l'ordonnée à l'origine et un autre point**
      1. On connaît b (ordonnée à l'origine)
      2. Utiliser l'autre point pour trouver a
      
      🔍 Vérification: Substituer les coordonnées des points dans l'équation trouvée`,
      type: "definition" as const
    },
    {
      title: "Exemple détaillé",
      content: `📝 Exercice résolu
      
      **Énoncé:** Déterminer l'équation de la droite passant par A(2, 5) et B(6, 13)
      
      **Étape 1:** Calcul du coefficient directeur
      a = (13 - 5)/(6 - 2) = 8/4 = 2
      
      **Étape 2:** Calcul de l'ordonnée à l'origine
      En utilisant le point A(2, 5):
      5 = 2×2 + b
      5 = 4 + b
      b = 1
      
      **Étape 3:** Équation de la droite
      f(x) = 2x + 1
      
      **Vérification:** 
      • Pour A(2, 5): f(2) = 2×2 + 1 = 5 ✓
      • Pour B(6, 13): f(6) = 2×6 + 1 = 13 ✓`,
      type: "example" as const
    },
    {
      title: "Applications et problèmes",
      content: `🌍 Situations de la vie courante
      
      **Exemple 1: Tarification**
      Un taxi applique un tarif de 2€ prise en charge + 1,50€/km
      Coût = 1,50×distance + 2
      
      **Exemple 2: Conversion de température**
      °F = 9/5 × °C + 32
      Fonction affine avec a = 9/5 et b = 32
      
      **Exemple 3: Évolution d'une quantité**
      Une citerne contient 500L d'eau. On la vide à raison de 25L/min
      Volume(t) = 500 - 25t (fonction affine décroissante)
      
      🎯 Méthode de résolution:
      1. Identifier les variables
      2. Repérer la relation affine
      3. Déterminer les coefficients
      4. Interpréter les résultats`,
      type: "example" as const
    },
    {
      title: "Positions relatives de droites",
      content: `📐 Étude de deux droites
      
      Soient d₁: y = a₁x + b₁ et d₂: y = a₂x + b₂
      
      **Droites parallèles:**
      • a₁ = a₂ et b₁ ≠ b₂
      • Elles ont la même pente mais ne se croisent jamais
      
      **Droites confondues:**
      • a₁ = a₂ et b₁ = b₂
      • C'est la même droite
      
      **Droites sécantes:**
      • a₁ ≠ a₂
      • Elles se coupent en un point unique
      
      🔍 Point d'intersection:
      Résoudre a₁x + b₁ = a₂x + b₂
      x = (b₂ - b₁)/(a₁ - a₂)`,
      type: "definition" as const
    },
    {
      title: "Récapitulatif et méthodes",
      content: `✅ Points clés à retenir:
      
      🎯 Définitions:
      • Fonction linéaire: f(x) = ax (droite par l'origine)
      • Fonction affine: f(x) = ax + b (droite quelconque)
      
      🔧 Méthodes essentielles:
      • Coefficient directeur: a = (y₂ - y₁)/(x₂ - x₁)
      • Équation avec 2 points: calculer a puis b
      • Interprétation graphique des paramètres a et b
      
      📈 Applications pratiques:
      • Problèmes de proportionnalité
      • Tarifications et coûts
      • Évolutions linéaires
      • Conversions d'unités
      
      🎓 Prochaine étape:
      Nous aborderons les systèmes d'équations linéaires et leurs méthodes de résolution.`,
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
        lessonTitle="Module 1: Fonctions linéaires et affines" 
        slides={slides} 
      />
    </motion.div>
  );
};

export default MathCourse;
