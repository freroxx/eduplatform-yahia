import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EnhancedCourseSlide from "@/components/EnhancedCourseSlide";
import LoadingSpinner from "@/components/LoadingSpinner";

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
      content: `🎯 Les fonctions linéaires et affines constituent les bases de l'analyse mathématique moderne.

📚 Objectifs d'apprentissage:
• Maîtriser les concepts fondamentaux des fonctions linéaires
• Comprendre la représentation graphique des droites
• Analyser les variations et propriétés
• Résoudre des problèmes concrets d'application
• Développer une intuition géométrique solide

💡 Applications pratiques:
Ces fonctions sont omniprésentes dans la vie quotidienne : tarifs, conversions d'unités, calculs de proportionnalité, modélisation de phénomènes linéaires.

🎓 Prérequis:
Connaissances de base en calcul algébrique et géométrie du plan.`,
      type: "intro" as const
    },
    {
      title: "Fonctions linéaires - Fondements",
      content: `📐 Définition rigoureuse
      
Une fonction linéaire f est définie sur ℝ par:
f(x) = ax (où a ∈ ℝ)

🔍 Propriétés caractéristiques:
• Graphique: droite passant par l'origine O(0,0)
• Coefficient directeur: a détermine l'inclinaison
• Variation: strictement monotone si a ≠ 0
• Proportionnalité: f(kx) = k·f(x) pour tout k ∈ ℝ

⚖️ Analyse des variations:
• Si a > 0: fonction strictement croissante
• Si a < 0: fonction strictement décroissante  
• Si a = 0: fonction constante nulle

🎯 Cas particuliers remarquables:
• f(x) = x (fonction identité, bisectrice du 1er quadrant)
• f(x) = -x (symétrie par rapport à l'origine)`,
      type: "definition" as const
    },
    {
      title: "Fonctions affines - Extension naturelle",
      content: `📊 Définition générale
      
Une fonction affine f est définie sur ℝ par:
f(x) = ax + b (avec a, b ∈ ℝ)

🎯 Paramètres essentiels:
• a: coefficient directeur (pente de la droite)
• b: ordonnée à l'origine (point d'intersection avec l'axe y)

🔧 Classification:
• Si b = 0: fonction linéaire (cas particulier)
• Si a = 0: fonction constante f(x) = b
• Si a ≠ 0: fonction affine proprement dite

📈 Représentation graphique:
• Droite non verticale dans le plan cartésien
• Passe par le point (0, b)
• Pente constante égale à a

💫 Propriétés remarquables:
• Translation de la fonction linéaire f(x) = ax
• Conservation des accroissements proportionnels
• Bijectivité si a ≠ 0`,
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

  // Enhanced PDF URL with better organization
  const mathPDFUrl = "/lovable-uploads/25ac9238-31dc-4b40-8ee2-51728f1c7a9a.png";

  if (isLoading) {
    return (
      <div className="min-h-screen animated-bg flex items-center justify-center">
        <LoadingSpinner 
          text="Chargement du cours de mathématiques avancé..." 
          progress={progress} 
          type="progress" 
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <EnhancedCourseSlide 
        lessonTitle="Module 1: Fonctions linéaires et affines - EduPlatform 5.0" 
        slides={slides}
        pdfUrl={mathPDFUrl}
      />
    </motion.div>
  );
};

export default MathCourse;
