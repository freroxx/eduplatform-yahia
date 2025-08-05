
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CourseSlide from "@/components/CourseSlide";
import LoadingSpinner from "@/components/LoadingSpinner";

const PhysicsCourse = () => {
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
        return prev + 12;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: "Module 1: La lumière et la vision",
      content: `La lumière est une onde électromagnétique qui nous permet de voir le monde qui nous entoure. Ce module explore les propriétés fondamentales de la lumière et les mécanismes de la vision.
      
      Objectifs du module:
      • Comprendre la nature de la lumière
      • Étudier la propagation rectiligne de la lumière
      • Analyser les phénomènes de réflexion et réfraction
      • Découvrir le fonctionnement de l'œil humain
      • Étudier les défauts de vision et leur correction
      • Explorer les instruments d'optique`,
      type: "intro" as const
    },
    {
      title: "Nature de la lumière",
      content: `🌟 Qu'est-ce que la lumière ?
      
      La lumière est une onde électromagnétique qui se propage dans le vide à la vitesse c = 300 000 km/s.
      
      📡 Spectre électromagnétique:
      • Rayons gamma (très haute énergie)
      • Rayons X
      • Ultraviolets
      • Lumière visible (380-780 nm)
      • Infrarouges
      • Micro-ondes
      • Ondes radio
      
      🌈 Lumière visible:
      • Violet: 380-450 nm
      • Bleu: 450-495 nm  
      • Vert: 495-570 nm
      • Jaune: 570-590 nm
      • Orange: 590-620 nm
      • Rouge: 620-780 nm`,
      type: "definition" as const
    },
    {
      title: "Propagation de la lumière",
      content: `📏 Propagation rectiligne
      
      Dans un milieu homogène et transparent, la lumière se propage en ligne droite.
      
      🔍 Conséquences:
      • Formation d'ombres nettes
      • Principe des chambres noires
      • Fonctionnement des instruments d'optique
      
      ⚡ Vitesse de la lumière:
      • Dans le vide: c = 299 792 458 m/s ≈ 3×10⁸ m/s
      • Dans un milieu: v = c/n (n = indice de réfraction)
      
      🏷️ Indices de réfraction courants:
      • Air: n ≈ 1,00
      • Eau: n ≈ 1,33
      • Verre: n ≈ 1,50
      • Diamant: n ≈ 2,42`,
      type: "definition" as const
    },
    {
      title: "Réflexion de la lumière",
      content: `🪞 Lois de la réflexion
      
      Quand la lumière rencontre une surface réfléchissante:
      
      **1ère loi:** Le rayon incident, le rayon réfléchi et la normale au point d'incidence sont dans le même plan.
      
      **2ème loi:** L'angle de réflexion égale l'angle d'incidence
      i = r
      
      🔍 Types de réflexion:
      • **Spéculaire:** surface lisse (miroir)
      • **Diffuse:** surface rugueuse (papier blanc)
      
      🪞 Applications:
      • Miroirs plans, concaves, convexes
      • Rétroviseurs
      • Télescopes réflecteurs`,
      type: "definition" as const
    },
    {
      title: "Réfraction de la lumière",
      content: `🌊 Lois de Snell-Descartes
      
      Quand la lumière passe d'un milieu à un autre:
      
      **1ère loi:** Le rayon incident, le rayon réfracté et la normale sont coplanaires.
      
      **2ème loi:** n₁ sin i = n₂ sin r
      • n₁, n₂: indices des milieux
      • i: angle d'incidence  
      • r: angle de réfraction
      
      🔍 Phénomènes observés:
      • Déviation du rayon lumineux
      • Réflexion totale (si n₁ > n₂ et i > ic)
      • Angle critique: sin ic = n₂/n₁
      
      🌈 Applications:
      • Lentilles optiques
      • Fibres optiques
      • Prismes dispersifs`,
      type: "definition" as const
    },
    {
      title: "L'œil humain",
      content: `👁️ Anatomie de l'œil
      
      **Éléments principaux:**
      • Cornée: première lentille (puissance fixe ≈ 43 dioptries)
      • Cristallin: lentille variable (15 à 19 dioptries)
      • Rétine: écran sensible à la lumière
      • Nerf optique: transmission au cerveau
      
      🔍 Mécanisme de vision:
      1. La lumière traverse la cornée
      2. L'iris régule la quantité de lumière
      3. Le cristallin fait la mise au point
      4. L'image se forme sur la rétine
      5. Les photorécepteurs convertissent en signaux électriques
      
      📏 Accommodation:
      Capacité du cristallin à modifier sa courbure pour voir net à différentes distances.`,
      type: "definition" as const
    },
    {
      title: "Défauts de vision et correction",
      content: `🔍 Principaux défauts visuels
      
      **Myopie:**
      • L'image se forme avant la rétine
      • Vision floue de loin, nette de près
      • Correction: lentille divergente (concave)
      
      **Hypermétropie:**
      • L'image se forme après la rétine  
      • Vision floue de près, fatigue oculaire
      • Correction: lentille convergente (convexe)
      
      **Astigmatisme:**
      • Déformation de la cornée
      • Vision déformée à toutes distances
      • Correction: lentille cylindrique
      
      **Presbytie:**
      • Perte d'accommodation avec l'âge
      • Difficulté à voir de près
      • Correction: verres progressifs`,
      type: "definition" as const
    },
    {
      title: "Instruments d'optique",
      content: `🔬 Principaux instruments
      
      **Loupe:**
      • Lentille convergente simple
      • Grossissement: G = 25/f (f en cm)
      • Usage: observation d'objets de petite taille
      
      **Microscope:**
      • Système de deux lentilles convergentes
      • Objectif + oculaire
      • Fort grossissement (×40 à ×1000)
      
      **Lunette astronomique:**
      • Objectif convergent + oculaire convergent
      • Observation d'objets éloignés
      • Grossissement: G = f₁/f₂
      
      **Télescope:**
      • Miroir concave + oculaire
      • Collecte maximale de lumière
      • Observation astronomique`,
      type: "example" as const
    },
    {
      title: "Récapitulatif",
      content: `✅ Points clés à retenir:
      
      🌟 Nature de la lumière:
      • Onde électromagnétique
      • Vitesse c = 3×10⁸ m/s dans le vide
      • Spectre visible: 380-780 nm
      
      📏 Propagation et phénomènes:
      • Propagation rectiligne en milieu homogène
      • Réflexion: i = r
      • Réfraction: n₁ sin i = n₂ sin r
      
      👁️ Vision et correction:
      • Œil = système optique complexe
      • Défauts: myopie, hypermétropie, astigmatisme
      • Corrections par lentilles appropriées
      
      🎓 Prochaine étape:
      Nous étudierons les ondes mécaniques et acoustiques.`,
      type: "summary" as const
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <LoadingSpinner text="Chargement du cours de physique..." progress={progress} type="progress" />
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
        lessonTitle="Module 1: La lumière et la vision" 
        slides={slides} 
      />
    </motion.div>
  );
};

export default PhysicsCourse;
