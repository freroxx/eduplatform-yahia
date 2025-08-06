
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import EnhancedCourseSlide from "@/components/EnhancedCourseSlide";

const StatistiquesCourse = () => {
  const navigate = useNavigate();

  const lessonContent = {
    title: "Statistiques - Cours Complet",
    slides: [
      {
        title: "Introduction aux Statistiques",
        content: `Ce cours couvre les concepts fondamentaux des statistiques, incluant :

• Population statistique et caractères
• Effectifs, fréquences et pourcentages  
• Paramètres de position (mode, moyenne, médiane)
• Paramètres de dispersion (étendue, écart-moyen, variance)
• Utilisation de la calculatrice pour les calculs statistiques

Les statistiques permettent d'analyser et d'interpréter des données numériques pour prendre des décisions éclairées.`,
        type: "introduction" as const
      },
      {
        title: "Population statistique et Caractères",
        content: `Une population statistique est l'ensemble qui fait l'objet de l'étude.

Caractère : La propriété qu'on veut étudier chez une population statistique s'appelle "le caractère" ou "la variable statistique".

Types de caractères :
• Caractère quantitatif : peut s'exprimer par des nombres
  - Discret : valeurs isolées (notes d'élèves)
  - Continu : valeurs dans des intervalles (hauteurs d'élèves)

• Caractère qualitatif : ne peut pas s'exprimer par des nombres (couleur des cheveux, groupe sanguin)`,
        type: "content" as const
      },
      {
        title: "Effectifs, Fréquences et Pourcentages",
        content: `Effectif : Le nombre ni est appelé "effectif" relatif à la valeur xi
N = n1 + n2 + n3 + ... + nk (effectif total)

Fréquence : fi = ni/N est appelé "fréquence" relative à la valeur xi

Pourcentage : pi = 100fi est appelé le pourcentage relatif à la valeur xi

Exemple pratique :
Pour 20 élèves avec la note 12 apparaissant 4 fois :
- Effectif de la note 12 = 4
- Fréquence = 4/20 = 0,2
- Pourcentage = 20%`,
        type: "example" as const
      },
      {
        title: "Paramètres de Position",
        content: `1) Le Mode : La valeur du caractère correspondant au plus fort effectif

2) La Moyenne : 
x̄ = (x1×n1 + x2×n2 + ... + xk×nk)/(n1 + n2 + ... + nk)

3) La Médiane : Pour obtenir la médiane d'une série, on range les valeurs dans l'ordre croissant. La médiane est la valeur qui partage la série en deux populations d'effectif égal.

Ces paramètres permettent de caractériser le centre de distribution d'une série statistique.`,
        type: "content" as const
      },
      {
        title: "Paramètres de Dispersion",
        content: `1) Étendue : C'est la différence entre les valeurs extrêmes

2) Écart-moyen : C'est la moyenne des écarts à la moyenne
e = (n1×|x1-x̄| + n2×|x2-x̄| + ... + nk×|xk-x̄|)/(n1 + n2 + ... + nk)

3) Variance : V = (n1×(x1-x̄)² + n2×(x2-x̄)² + ... + nk×(xk-x̄)²)/(n1 + n2 + ... + nk)

4) Écart-type : σ = √V

Propriété importante : V = (n1×x1² + n2×x2² + ... + nk×xk²)/(n1 + n2 + ... + nk) - (x̄)²`,
        type: "content" as const
      },
      {
        title: "Utilisation de la Calculatrice",
        content: `Méthode pour déterminer les caractéristiques statistiques à l'aide d'une calculatrice :

1. Saisir les données du tableau dans deux listes de la calculatrice
2. Liste 1 : valeurs du caractère (xi)
3. Liste 2 : effectifs correspondants (ni)

Résultats obtenus :
• x̄ = moyenne
• Σx = somme des valeurs
• Σx² = somme des carrés
• Sx = écart-type
• σx = écart-type de la population
• n = effectif total

Cette méthode permet un calcul rapide et précis des paramètres statistiques.`,
        type: "example" as const
      }
    ],
    pdfUrl: [
      "/lovable-uploads/665214ec-1e56-4ddb-8a82-377bda41167a.png",
      "/lovable-uploads/6f90806e-7234-4d5f-aa28-7ceebb708a69.png", 
      "/lovable-uploads/c2b1f9e4-13c4-4de7-bb4b-a95a12aead5b.png",
      "/lovable-uploads/d222db45-54da-4dc8-a1c9-279db0969a40.png",
      "/lovable-uploads/d1ae64dc-2d51-472c-87a2-a30406aefb93.png"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
      <div className="p-6">
        <Button
          onClick={() => navigate("/lessons")}
          variant="ghost"
          className="mb-6 hover:scale-105 transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux leçons
        </Button>
      </div>
      
      <EnhancedCourseSlide 
        lessonTitle={lessonContent.title}
        slides={lessonContent.slides}
        pdfUrl={lessonContent.pdfUrl}
      />
    </div>
  );
};

export default StatistiquesCourse;
