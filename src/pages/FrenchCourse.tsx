import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CourseSlide from "@/components/CourseSlide";
import LoadingSpinner from "@/components/LoadingSpinner";

// Module 1: Typologie textuelle - First lesson
const Module1Course = () => {
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
        return prev + 20;
      });
    }, 600);

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: "Module 1: Typologie textuelle",
      content: `La typologie textuelle est l'étude des différents types de textes selon leur fonction, 
      leur structure et leurs caractéristiques linguistiques. Elle nous aide à mieux comprendre et analyser 
      les œuvres littéraires.
      
      Objectifs du module:
      • Identifier les différents types de textes
      • Comprendre leurs caractéristiques spécifiques
      • Analyser la structure narrative
      • Maîtriser le traitement du temps dans un récit`,
      type: "intro" as const
    },
    {
      title: "Les types de textes",
      content: `Il existe quatre types principaux de textes:

      📖 Texte narratif
      Raconte une histoire avec des personnages, un lieu et une époque
      Exemples: romans, nouvelles, contes

      💭 Texte descriptif  
      Décrit des personnes, des objets, des lieux ou des phénomènes
      Exemples: portraits, paysages

      🗣️ Texte dialogal
      Présente un échange entre plusieurs personnages
      Exemples: théâtre, interviews

      📝 Texte explicatif
      Explique un phénomène, un concept ou un processus
      Exemples: articles scientifiques`,
      type: "definition" as const
    },
    {
      title: "Le schéma narratif",
      content: `Le schéma narratif est la structure en 5 étapes d'un récit:

      1. Situation initiale
      État d'équilibre au début du récit

      2. Élément perturbateur  
      Événement qui rompt l'équilibre initial

      3. Péripéties
      Suite d'aventures et d'actions

      4. Élément de résolution
      Action qui permet de résoudre le problème

      5. Situation finale
      Nouvel état d'équilibre`,
      type: "definition" as const
    },
    {
      title: "Le traitement du temps",
      content: `⏰ Les deux temps du récit:

      Temps de l'histoire: La durée réelle des événements racontés (ex: une journée, une année)
      Temps du récit: Le temps que prend la narration (ex: nombre de pages, de chapitres)

      🔄 Les techniques narratives temporelles:

      • Analepse (flashback): Retour en arrière dans le récit
      • Prolepse (anticipation): Évocation d'événements futurs  
      • Ellipse: Omission d'une période de temps
      • Sommaire: Résumé rapide d'une longue période
      • Scène: Récit détaillé d'un moment précis`,
      type: "example" as const
    },
    {
      title: "La nouvelle littéraire",
      content: `📚 Caractéristiques de la nouvelle:

      📏 Brièveté: Récit court qui peut être lu d'une traite
      🎯 Unité d'action: Se concentre sur un seul événement principal  
      👥 Peu de personnages: Nombre limité de protagonistes
      ⚡ Chute inattendue: Fin surprenante qui révèle un sens nouveau

      💡 À retenir:
      La nouvelle littéraire est un genre narratif qui privilégie l'intensité dramatique 
      et l'effet de surprise. Elle capture un moment significatif de l'existence humaine.`,
      type: "definition" as const
    },
    {
      title: "Récapitulatif",
      content: `✅ Points clés à retenir:

      1. Il existe quatre types principaux de textes : narratif, descriptif, dialogal et explicatif
      2. Le schéma narratif suit 5 étapes : situation initiale, élément perturbateur, péripéties, résolution, situation finale  
      3. Le temps du récit peut être manipulé par diverses techniques narratives
      4. La nouvelle littéraire se caractérise par sa brièveté et sa chute inattendue

      🎓 Prochaine étape:
      Maintenant que vous maîtrisez la typologie textuelle, nous allons explorer 
      la nouvelle réaliste avec l'étude d'œuvres de Guy de Maupassant.`,
      type: "summary" as const
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <LoadingSpinner text="Chargement du cours de français..." progress={progress} type="progress" />
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
        lessonTitle="Module 1: Typologie textuelle" 
        slides={slides} 
      />
    </motion.div>
  );
};

export default Module1Course;