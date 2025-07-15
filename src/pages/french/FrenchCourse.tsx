
import CourseSlide from "@/components/CourseSlide";
import { useParams } from "react-router-dom";

const FrenchCourse = () => {
  const { id } = useParams();
  
  const courseData: { [key: string]: any } = {
    "301": {
      title: "Module 1: Typologie textuelle - Cours interactif",
      slides: [
        {
          title: "Introduction à la typologie textuelle",
          content: "Bienvenue dans ce module sur la typologie textuelle !\n\nObjectifs :\n• Identifier les différents types de textes\n• Comprendre le schéma narratif\n• Maîtriser le traitement du temps\n• Analyser la structure des récits\n\nPréparez-vous à explorer l'art de la narration !",
          type: "intro" as const
        },
        {
          title: "Les types de textes",
          content: "Classification des textes selon leur fonction :\n\n📖 Texte narratif : raconte une histoire\n• Roman, nouvelle, conte, récit\n• Présence d'un narrateur\n• Succession d'événements\n\n📝 Texte descriptif : décrit, peint\n• Portrait, paysage, lieu\n• Adjectifs qualificatifs abondants\n• Verbes d'état\n\n🗣️ Texte argumentatif : convainc, persuade\n• Essai, critique, plaidoirie\n• Thèse, arguments, exemples\n• Connecteurs logiques",
          type: "definition" as const
        },
        {
          title: "Le schéma narratif",
          content: "Structure classique du récit :\n\n1️⃣ Situation initiale\n• Présentation du cadre, des personnages\n• État d'équilibre\n\n2️⃣ Élément déclencheur\n• Événement qui rompt l'équilibre\n• Point de départ de l'action\n\n3️⃣ Péripéties\n• Développement de l'action\n• Obstacles, complications\n\n4️⃣ Dénouement\n• Résolution du conflit\n• Élimination des obstacles\n\n5️⃣ Situation finale\n• Nouvel équilibre\n• Conclusion de l'histoire",
          type: "definition" as const
        },
        {
          title: "Le traitement du temps",
          content: "Temps de l'histoire vs temps du récit :\n\n⏰ Temps de l'histoire :\n• Durée réelle des événements\n• Ordre chronologique\n• Mesurable en heures, jours, années\n\n📚 Temps du récit :\n• Durée de la narration\n• Ordre de présentation\n• Mesurable en pages, chapitres\n\n🔄 Techniques temporelles :\n• Analepse (retour en arrière)\n• Prolepse (anticipation)\n• Ellipse (omission)\n• Pause (description)\n• Sommaire (résumé)",
          type: "example" as const
        }
      ]
    },
    "302": {
      title: "Module 2: La nouvelle réaliste - Guy de Maupassant",
      slides: [
        {
          title: "Guy de Maupassant et le réalisme",
          content: "Découvrons l'univers de Maupassant !\n\n👨‍💼 Guy de Maupassant (1850-1893)\n• Maître de la nouvelle française\n• Disciple de Flaubert\n• Observateur de la société bourgeoise\n\n🎯 Caractéristiques du réalisme :\n• Reproduction fidèle de la réalité\n• Observation minutieuse\n• Critique sociale\n• Personnages du quotidien\n\nNous étudierons 'La Ficelle' et 'Aux champs'",
          type: "intro" as const
        },
        {
          title: "La Ficelle - Analyse",
          content: "Résumé de 'La Ficelle' :\n\n🏪 Contexte : Marché de Goderville\n• Maître Hauchecorne ramasse une ficelle\n• Maître Malandain l'accuse d'avoir volé un portefeuille\n• Protestation d'innocence\n• Humiliation publique\n\n🎭 Thèmes principaux :\n• La rumeur et la médisance\n• L'injustice sociale\n• La dignité bafouée\n• L'obsession de la réputation\n\n📝 Techniques narratives :\n• Narrateur omniscient\n• Focalisation externe\n• Style indirect libre\n• Ironie tragique",
          type: "example" as const
        }
      ]
    }
  };

  const currentCourse = courseData[id || "301"];

  return (
    <CourseSlide 
      lessonTitle={currentCourse?.title || "Cours de Français"}
      slides={currentCourse?.slides || []}
    />
  );
};

export default FrenchCourse;
