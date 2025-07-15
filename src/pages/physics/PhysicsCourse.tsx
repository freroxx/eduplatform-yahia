
import CourseSlide from "@/components/CourseSlide";
import { useParams } from "react-router-dom";

const PhysicsCourse = () => {
  const { id } = useParams();
  
  const courseData: { [key: string]: any } = {
    "101": {
      title: "La gravitation universelle - Cours interactif",
      slides: [
        {
          title: "Introduction à la gravitation",
          content: "Découvrons les mystères de la gravitation universelle !\n\n🌍 Objectifs :\n• Comprendre la loi de Newton\n• Calculer la force gravitationnelle\n• Appliquer aux mouvements planétaires\n• Résoudre des problèmes concrets\n\n🚀 Préparez-vous pour un voyage dans l'univers !",
          type: "intro" as const
        },
        {
          title: "Loi de Newton",
          content: "La loi de la gravitation universelle :\n\n📐 Formule : F = G × (m₁ × m₂) / d²\n\nOù :\n• F = force gravitationnelle (N)\n• G = constante gravitationnelle = 6,67 × 10⁻¹¹ N⋅m²/kg²\n• m₁, m₂ = masses des corps (kg)\n• d = distance entre les centres (m)\n\n🔑 Propriétés :\n• Force attractive\n• Réciproque (3ème loi de Newton)\n• Diminue avec le carré de la distance\n• Proportionnelle au produit des masses",
          type: "definition" as const
        },
        {
          title: "Applications",
          content: "Applications de la gravitation :\n\n🌙 Système Terre-Lune :\n• Force : F = 1,98 × 10²⁰ N\n• Responsable des marées\n• Mouvement orbital de la Lune\n\n🌍 Pesanteur terrestre :\n• g = 9,81 m/s² (surface)\n• Varie avec l'altitude\n• P = mg (poids)\n\n🌌 Mouvements planétaires :\n• Orbites elliptiques\n• Lois de Kepler\n• Satellites artificiels",
          type: "example" as const
        }
      ]
    },
    "114": {
      title: "Le courant électrique continu - Cours interactif",
      slides: [
        {
          title: "Le courant électrique",
          content: "Découvrons les bases de l'électricité !\n\n⚡ Qu'est-ce que le courant électrique ?\n• Déplacement de charges électriques\n• Généralement des électrons\n• Mouvement ordonné dans un conducteur\n\n🔋 Conditions d'existence :\n• Générateur (pile, batterie)\n• Circuit fermé\n• Conducteur électrique\n\n📏 Unités :\n• Intensité : Ampère (A)\n• Charge : Coulomb (C)\n• Temps : Seconde (s)",
          type: "intro" as const
        },
        {
          title: "Intensité du courant",
          content: "Définition et mesure de l'intensité :\n\n📐 Formule : I = Q / t\n\nOù :\n• I = intensité (A)\n• Q = charge électrique (C)\n• t = temps (s)\n\n🔬 Mesure :\n• Instrument : Ampèremètre\n• Branchement : en série\n• Symbole : A dans un cercle\n\n⚡ Ordres de grandeur :\n• LED : 20 mA\n• Lampe : 0,5 A\n• Moteur : 10 A\n• Foudre : 30 000 A",
          type: "definition" as const
        }
      ]
    }
  };

  const currentCourse = courseData[id || "101"];

  return (
    <CourseSlide 
      lessonTitle={currentCourse?.title || "Cours de Physique"}
      slides={currentCourse?.slides || []}
    />
  );
};

export default PhysicsCourse;
