
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EnhancedCourseSlide from "@/components/EnhancedCourseSlide";
import LoadingSpinner from "@/components/LoadingSpinner";

const TransformationsCourse = () => {
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
      title: "Transformations du plan - Introduction",
      content: `🎯 Les transformations du plan sont des outils fondamentaux en géométrie moderne.

📚 Objectifs d'apprentissage:
• Maîtriser les concepts de symétrie axiale et centrale
• Comprendre les translations et homothéties
• Analyser les propriétés caractéristiques de chaque transformation
• Appliquer les transformations dans des problèmes concrets
• Développer une vision géométrique des invariants

💡 Plan de la leçon:
I) Symétrie axiale et symétrie centrale et translation et l'homothétie
II. Propriété caractéristique de la symétrie centrale et la translation et l'homothétie
III. Propriété des transformations
IV) Images des figures par les transformations

🎓 Prérequis:
Connaissances de base en géométrie du plan, droites, segments et points.`,
      type: "intro" as const
    },
    {
      title: "1° Symétrie axiale",
      content: `📐 Définition rigoureuse
      
La symétrie axiale d'axe (Δ) est une droite du plan.

🔍 Propriétés caractéristiques:
• La symétrie axiale d'axe (Δ) est la transformation qui transforme tout point M du plan au point unique M' tel que : (Δ) est la médiatrice du segment [MM']
• La symétrie axiale d'axe (Δ) est notée : S(Δ)
• D'où : S(Δ)(M) = M' ssi (Δ) est la médiatrice du segment [MM']

⚖️ Formules importantes:
• S(Δ)(N) = N'
• S(Δ)(M) = M'

🎯 Représentation géométrique:
Les points N, M et leurs images N', M' par rapport à l'axe (Δ) forment une figure symétrique où l'axe est perpendiculaire aux segments joignant chaque point à son image.`,
      type: "definition" as const
    },
    {
      title: "2° Symétrie centrale",
      content: `📊 Définition générale
      
Ω est un point du plan. La symétrie centrale de centre Ω est la transformation qui transforme tout point M du plan au point unique M' tel que ΩM' = -ΩM⃗

🎯 Notation et formules:
• La symétrie centrale de centre Ω est notée : SΩ
• D'où : SΩ(M) = M' ssi ΩM' = -ΩM⃗
• SΩ(N) = N'

📈 Représentation graphique:
• Le centre Ω est le milieu de chaque segment [MM']
• Les points M, Ω, M' sont alignés
• ΩM = ΩM' (distances égales de part et d'autre du centre)

💫 Propriété remarquable:
La symétrie centrale conserve les distances et les angles, mais change l'orientation des figures.`,
      type: "definition" as const
    },
    {
      title: "3° Translation",
      content: `📏 Définition de la translation

u⃗ est un vecteur du plan. La translation de vecteur u⃗ est la transformation qui transforme tout point M du plan au point unique M' tel que : u⃗ = MM'⃗

🧮 Notation et propriétés:
• La translation de vecteur u⃗ est notée : tu⃗
• D'où : tu⃗(M) = M' ssi u⃗ = MM'⃗
• t(N) = N'

📈 Interprétation géométrique:
• Tous les points se déplacent dans la même direction
• La distance de déplacement est constante
• Les segments [MM'] sont tous parallèles et de même longueur
• Les vecteurs MM'⃗ sont tous égaux au vecteur u⃗`,
      type: "example" as const
    },
    {
      title: "4° Homothétie",
      content: `🎯 Définition de l'homothétie

Ω est un point du plan et k un nombre réel. L'homothétie de centre Ω et de rapport k est la transformation qui transforme tout point M du plan au point unique M' tel que : ΩM'⃗ = k·ΩM⃗

🔧 Notation et formules:
• L'homothétie de centre Ω et de rapport k est notée : h(Ω,k)
• D'où : h(M) = M' ssi ΩM'⃗ = k·ΩM⃗

📊 Exemple concret:
Soit l'homothétie de centre O et de rapport k = 2 donc h(O,2)
• h(A) = A' ssi OA'⃗ = 2OA⃗
• h(B) = B' ssi OB'⃗ = 2OB⃗

🎯 Cas particuliers:
• Si k > 0: l'image est dans la même direction
• Si k < 0: l'image est dans la direction opposée
• Si k = 1: transformation identité
• Si k = -1: symétrie centrale`,
      type: "definition" as const
    },
    {
      title: "Propriétés caractéristiques des transformations",
      content: `📐 1° Propriété caractéristique de l'homothétie

Soit k ∈ ℝ* Si on a:
• Soit l'homothétie h(Ω,k) et M et N deux points tq h(M) = M' et h(N) = N' alors
• ΩM'⃗ = k·ΩM⃗ et ΩN'⃗ = k·ΩN⃗

🔍 Conséquences importantes:
• M⃗N'⃗ = k(M⃗Ω + ΩN'⃗) = k·M⃗N⃗
• La réciproque est vraie

📈 2° Propriété caractéristique de la symétrie centrale:
Si on prend k = -1 on trouve la propriété caractéristique de la symétrie centrale

⚖️ 2° Propriété caractéristique de la translation:
Soit la translation tu⃗
• Si on a tu⃗(M) = M' et tu⃗(N) = N' alors u⃗ = MM'⃗ et u⃗ = NN'⃗ donc MM'⃗ = NN'⃗
• Donc MNÑN est un parallélogramme donc MN'⃗ = MN⃗`,
      type: "definition" as const
    },
    {
      title: "III. Propriétés des transformations",
      content: `✅ Propriétés de conservation

🎯 Propriétés de la translation:
• La Translation conserve l'alignement des Points et le coefficient d'alignement
• La Translation conserve le Milieu
• La Translation conserve la distance
• La Translation conserve la mesure des angles
• La Translation conserve le Parallélisme et l'orthogonalité

🔧 Propriétés de la symétrie centrale:
• La symétrie centrale conserve l'alignement des points et le coefficient d'alignement
• La symétrie centrale conserve le milieu
• La symétrie centrale conserve la distance
• La symétrie centrale conserve la mesure des angles
• La symétrie centrale conserve le parallélisme et l'orthogonalité

📈 Propriétés de la symétrie axiale:
• La symétrie axiale conserve l'alignement des points et le coefficient d'alignement
• La symétrie axiale conserve le milieu
• La symétrie axiale conserve la distance
• La symétrie axiale conserve la mesure des angles
• La symétrie axiale conserve le parallélisme et l'orthogonalité

💫 Propriétés de l'homothétie:
• L'homothétie conserve l'alignement des points et le coefficient d'alignement
• L'homothétie conserve le milieu
• L'homothétie ne conserve pas les distances (sauf si k = ±1)
• L'homothétie conserve la mesure des angles
• L'homothétie conserve le parallélisme et l'orthogonalité`,
      type: "summary" as const
    },
    {
      title: "IV) Images des figures par les transformations",
      content: `🌍 Applications géométriques

**1)Image d'une figure par une Translation:**
• L'image d'une droite par une translation est une droite qui lui est parallèle
• L'image d'une demi-droite par une translation est une demi-droite qui lui est parallèle

**2)Image d'une figure par une symétrie centrale:**
• L'image d'une droite par une symétrie centrale est une droite qui lui est parallèle
• L'image d'une demi-droite par une symétrie centrale est une demi-droite qui lui est parallèle
• L'image d'un segment par une symétrie centrale est un segment de même longueur
• L'image d'un cercle par une symétrie centrale est un cercle de même rayon

**3)Image d'une figure par une symétrie axiale:**
• L'image d'une droite par une symétrie axiale est une droite homothétie qui ne lui est parallèle que si la droite est parallèle à l'axe de la symétrie
• L'image d'une demi-droite par une symétrie axiale est une demi-droite
• L'image d'un segment par une symétrie axiale est un segment de même longueur
• L'image d'un cercle par une symétrie axiale est un cercle de même rayon

**4)Image d'une figure par une symétrie homothétie:**
• L'image d'une droite par une homothétie est une droite qui lui est parallèle
• L'image d'une demi-droite par homothétie est une demi-droite qui lui est parallèle
• L'image d'un segment par homothétie est un segment
• L'image d'un cercle par homothétie est un cercle`,
      type: "example" as const
    }
  ];

  const transformationsPDFs = [
    "/lovable-uploads/92ff6be4-b2e5-4245-9cac-90db6ac4a0f4.png",
    "/lovable-uploads/ee9a8482-2425-4e78-bdce-a4ca4bd58eb6.png",
    "/lovable-uploads/c4d7bed5-76fe-4ac4-9dcf-9dd3856f89a9.png",
    "/lovable-uploads/3d46d6e2-46d3-47b3-b12d-ffd0d331a9e2.png"
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen animated-bg flex items-center justify-center">
        <LoadingSpinner 
          text="Chargement du cours de transformations géométriques..." 
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
        lessonTitle="Transformations du plan - Cours de Mathématiques" 
        slides={slides}
        pdfUrl={transformationsPDFs}
      />
    </motion.div>
  );
};

export default TransformationsCourse;
