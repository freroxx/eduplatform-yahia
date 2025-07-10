
import CourseSlide from "@/components/CourseSlide";

const Lesson1Course = () => {
  const slides = [
    {
      title: "Les ensembles de nombres",
      content: "Bienvenue dans ce cours interactif sur les ensembles de nombres N, Z, Q, D et R.\n\nObjectifs :\n• Maîtriser les définitions de chaque ensemble\n• Comprendre les relations d'inclusion\n• Savoir classifier n'importe quel nombre\n• Résoudre des exercices avec confiance\n\nPréparez-vous pour un voyage mathématique passionnant !",
      type: "intro" as const
    },
    {
      title: "L'ensemble N des nombres naturels",
      content: "N = {0, 1, 2, 3, 4, 5, ...}\n\nDéfinition : Les nombres naturels sont les nombres entiers positifs et zéro.\n\nUtilisations :\n• Compter des objets (0, 1, 2, 3 pommes...)\n• Numéroter (1er, 2ème, 3ème...)\n• Mesurer des quantités discrètes\n\nPropriété importante : N est le plus petit ensemble de nombres, tous les autres l'incluent.",
      type: "definition" as const
    },
    {
      title: "L'ensemble Z des nombres entiers",
      content: "Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}\n\nDéfinition : Les nombres entiers incluent les nombres naturels et leurs opposés (nombres négatifs).\n\nExemples pratiques :\n• Températures : -5°C, 0°C, +15°C\n• Étages : -2 (sous-sol), 0 (rez-de-chaussée), +3\n• Années : -44 av. J.-C., 0, 2024 ap. J.-C.\n\nRelation : N ⊂ Z (N est inclus dans Z)",
      type: "definition" as const
    },
    {
      title: "Exemple concret avec Z",
      content: "Situation : Un ascenseur dans un immeuble\n\n🏢 Étage +3 : Bureaux\n🏢 Étage +2 : Appartements\n🏢 Étage +1 : Commerces\n🏬 Étage 0 : Hall d'entrée\n🅿️ Étage -1 : Parking\n🔧 Étage -2 : Local technique\n\nTous ces niveaux sont représentés par des nombres entiers Z !\n\nObservation : Les étages positifs et zéro appartiennent aussi à N, mais pas les étages négatifs.",
      type: "example" as const
    },
    {
      title: "L'ensemble Q des nombres rationnels",
      content: "Q = {a/b | a ∈ Z, b ∈ Z*}\n\nDéfinition : Les nombres rationnels sont tous les nombres qui peuvent s'écrire comme fraction de deux entiers (dénominateur non nul).\n\nExemples :\n• 3/4 = 0,75 (fraction simple)\n• -2/3 = -0,666... (décimal périodique)\n• 5 = 5/1 (tout entier est rationnel)\n• 0,125 = 1/8 (décimal fini)\n\nCaractéristique : Écriture décimale finie OU infinie périodique",
      type: "definition" as const
    },
    {
      title: "Reconnaître les nombres rationnels",
      content: "Comment identifier un nombre rationnel ?\n\n✅ Décimaux finis : 0,75 = 3/4\n✅ Décimaux périodiques : 0,333... = 1/3\n✅ Entiers : 7 = 7/1\n✅ Fractions : 22/7 ≈ 3,14285714...\n\n❌ Décimaux infinis non périodiques :\n• π = 3,14159265...\n• √2 = 1,41421356...\n• e = 2,71828182...\n\nAstuces : Si vous pouvez l'écrire en fraction, c'est rationnel !",
      type: "example" as const
    },
    {
      title: "L'ensemble D des nombres décimaux",
      content: "D = {a/10ⁿ | a ∈ Z, n ∈ N}\n\nDéfinition : Les nombres décimaux ont une écriture décimale finie.\n\nExemples :\n• 0,25 = 25/100 = 1/4\n• -3,7 = -37/10\n• 12,005 = 12005/1000\n\nCritère pratique : Une fraction a/b (irréductible) est décimale si et seulement si le dénominateur b ne contient que les facteurs premiers 2 et 5.\n\nRelation : D ⊂ Q (tout décimal est rationnel)",
      type: "definition" as const
    },
    {
      title: "Test : Décimal ou pas ?",
      content: "Analysons quelques fractions :\n\n• 3/8 : 8 = 2³ → DÉCIMAL ✅ (0,375)\n• 5/6 : 6 = 2×3 → PAS DÉCIMAL ❌ (0,8333...)\n• 7/25 : 25 = 5² → DÉCIMAL ✅ (0,28)\n• 11/12 : 12 = 2²×3 → PAS DÉCIMAL ❌ (0,91666...)\n\nRègle d'or : Si le dénominateur contient d'autres facteurs premiers que 2 et 5, le nombre n'est pas décimal !\n\nMais attention : il reste rationnel !",
      type: "exercise" as const
    },
    {
      title: "L'ensemble R des nombres réels",
      content: "R contient TOUS les nombres : rationnels ET irrationnels.\n\nNombres irrationnels célèbres :\n• √2 ≈ 1,414... (diagonale du carré unité)\n• π ≈ 3,14159... (rapport circonférence/diamètre)\n• e ≈ 2,718... (base du logarithme naturel)\n• φ = (1+√5)/2 ≈ 1,618... (nombre d'or)\n\nPropriété : Les irrationnels ont une écriture décimale infinie non périodique.\n\nR représente tous les points sur la droite numérique !",
      type: "definition" as const
    },
    {
      title: "La hiérarchie complète",
      content: "Relations d'inclusion fondamentales :\n\nN ⊂ Z ⊂ D ⊂ Q ⊂ R\n\n🔵 N : Nombres naturels (0, 1, 2, 3...)\n🟢 Z : + nombres négatifs (-1, -2, -3...)\n🟡 D : + décimaux non entiers (0,5; -2,75...)\n🟠 Q : + rationnels non décimaux (1/3; 2/7...)\n🔴 R : + nombres irrationnels (√2; π; e...)\n\nChaque ensemble contient le précédent et ajoute de nouveaux nombres !\n\nC'est la beauté des mathématiques : une construction logique et progressive.",
      type: "summary" as const
    }
  ];

  return (
    <CourseSlide 
      lessonTitle="Les ensembles de nombres N, Z, Q, D et R - Cours interactif"
      slides={slides}
    />
  );
};

export default Lesson1Course;
