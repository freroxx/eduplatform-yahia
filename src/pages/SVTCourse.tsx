
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CourseSlide from "@/components/CourseSlide";
import LoadingSpinner from "@/components/LoadingSpinner";

const SVTCourse = () => {
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
        return prev + 10;
      });
    }, 600);

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: "Module 1: Génétique et hérédité",
      content: `La génétique est l'étude de l'hérédité et de la variation des caractères chez les êtres vivants. Ce module explore les mécanismes fondamentaux de la transmission des caractères héréditaires.
      
      Objectifs du module:
      • Comprendre les bases de l'hérédité
      • Étudier la structure et le rôle de l'ADN
      • Maîtriser les lois de Mendel
      • Analyser les chromosomes et les gènes
      • Explorer les mutations génétiques
      • Découvrir les applications de la génétique moderne`,
      type: "intro" as const
    },
    {
      title: "L'ADN : support de l'information génétique",
      content: `🧬 Structure de l'ADN
      
      L'acide désoxyribonucléique (ADN) est une molécule constituée de:
      • Deux brins antiparallèles en double hélice
      • Quatre bases azotées: A (Adénine), T (Thymine), G (Guanine), C (Cytosine)
      • Complémentarité des bases: A-T et G-C
      
      🔍 Organisation de l'information:
      • Nucléotide: unité de base (base + sucre + phosphate)
      • Gène: séquence d'ADN codant pour un caractère
      • Chromosome: structure contenant de nombreux gènes
      • Génome: ensemble de l'information génétique d'un organisme
      
      📊 Chez l'Homme:
      • 46 chromosomes (23 paires)
      • Environ 25 000 gènes
      • 3,2 milliards de paires de bases`,
      type: "definition" as const
    },
    {
      title: "Les chromosomes et le caryotype",
      content: `🔬 Organisation chromosomique
      
      **Caryotype:** Représentation ordonnée des chromosomes d'un individu
      
      🧬 Chez l'Homme (2n = 46):
      • 22 paires d'autosomes (chromosomes non sexuels)
      • 1 paire de chromosomes sexuels (XX chez la femme, XY chez l'homme)
      
      📍 Structure du chromosome:
      • Centromère: point d'attache des chromatides
      • Chromatides: deux copies identiques du chromosome
      • Télomères: extrémités protectrices
      • Bras courts (p) et bras longs (q)
      
      🔄 Cycle cellulaire:
      • Interphase: duplication de l'ADN
      • Mitose: division équationnelle (2n → 2n)
      • Méiose: division réductionnelle (2n → n)`,
      type: "definition" as const
    },
    {
      title: "Les lois de Mendel",
      content: `👨‍🔬 Gregor Mendel (1822-1884) - Père de la génétique
      
      **1ère loi: Loi d'uniformité**
      Le croisement de deux races pures différant par un caractère donne une descendance F1 uniforme.
      
      **2ème loi: Loi de disjonction**
      Les caractères qui se sont associés en F1 se séparent en F2 selon des proportions définies (3:1).
      
      **3ème loi: Loi d'indépendance**
      Les caractères héréditaires se transmettent indépendamment les uns des autres.
      
      🧮 Exemple classique (couleur des graines):
      • P: Vert (vv) × Jaune (VV)
      • F1: 100% Jaune (Vv) - dominance du jaune
      • F2: 75% Jaune (VV, Vv) + 25% Vert (vv)
      • Ratio phénotypique: 3:1`,
      type: "definition" as const
    },
    {
      title: "Allèles et dominance",
      content: `🎭 Concepts fondamentaux
      
      **Allèle:** Version alternative d'un même gène
      • Allèle dominant: s'exprime toujours (noté en majuscule: A)
      • Allèle récessif: ne s'exprime qu'à l'état homozygote (noté en minuscule: a)
      
      🧬 Génotypes possibles:
      • Homozygote dominant: AA
      • Homozygote récessif: aa
      • Hétérozygote: Aa
      
      👁️ Types de dominance:
      • **Dominance complète:** A > a (l'hétérozygote = homozygote dominant)
      • **Codominance:** A = a (les deux allèles s'expriment)
      • **Dominance incomplète:** phénotype intermédiaire chez l'hétérozygote
      
      📝 Notation:
      • Génotype: constitution génétique (Aa)
      • Phénotype: expression observable (yeux bruns)`,
      type: "definition" as const
    },
    {
      title: "Exemple pratique : Croisements",
      content: `🧮 Exercice résolu
      
      **Énoncé:** Chez la drosophile, les ailes normales (V+) dominent les ailes vestigiales (v). Croisement entre deux drosophiles hétérozygotes.
      
      **Données:**
      • Parents: V+v × V+v
      • V+ = ailes normales (dominant)
      • v = ailes vestigiales (récessif)
      
      **Gamètes produits:**
      • Parent 1: 50% V+, 50% v
      • Parent 2: 50% V+, 50% v
      
      **Échiquier de Punnett:**
      ```
           V+    v
      V+  V+V+  V+v
      v   V+v   vv
      ```
      
      **Résultats F1:**
      • 25% V+V+ (ailes normales)
      • 50% V+v (ailes normales)  
      • 25% vv (ailes vestigiales)
      • **Ratio phénotypique: 3:1**`,
      type: "example" as const
    },
    {
      title: "Les mutations génétiques",
      content: `🔄 Types de mutations
      
      **Mutations ponctuelles:**
      • Substitution: remplacement d'une base par une autre
      • Insertion: ajout d'une ou plusieurs bases
      • Délétion: suppression d'une ou plusieurs bases
      
      **Mutations chromosomiques:**
      • Duplication: répétition d'un segment
      • Inversion: retournement d'un segment
      • Translocation: échange entre chromosomes non homologues
      • Aneuploïdie: nombre anormal de chromosomes
      
      🎯 Conséquences:
      • **Neutres:** pas d'effet sur le phénotype
      • **Délétères:** effet néfaste (maladies génétiques)
      • **Bénéfiques:** avantage adaptatif (rare)
      
      🧬 Exemples:
      • Drépanocytose: substitution dans le gène de l'hémoglobine
      • Trisomie 21: chromosome 21 surnuméraire`,
      type: "definition" as const
    },
    {
      title: "Applications de la génétique",
      content: `🔬 Génétique moderne
      
      **Thérapie génique:**
      • Correction de gènes défaillants
      • Introduction de gènes thérapeutiques
      • Applications: mucoviscidose, immunodéficiences
      
      **OGM (Organismes Génétiquement Modifiés):**
      • Agriculture: résistance aux herbicides, aux insectes
      • Médecine: production d'insuline, hormones de croissance
      • Recherche: modèles d'étude des maladies
      
      **Diagnostic génétique:**
      • Test de paternité
      • Dépistage de maladies héréditaires
      • Médecine personnalisée
      
      **Biotechnologies:**
      • PCR (amplification d'ADN)
      • Séquençage du génome
      • Empreinte génétique
      • CRISPR-Cas9 (édition génomique)`,
      type: "example" as const
    },
    {
      title: "Récapitulatif",
      content: `✅ Points clés à retenir:
      
      🧬 Structure et fonction:
      • ADN: support de l'information génétique
      • Gènes et allèles: unités de l'hérédité
      • Chromosomes: organisation de l'ADN
      
      📊 Lois de l'hérédité:
      • Lois de Mendel: base de la génétique
      • Dominance et récessivité
      • Croisements et ratios phénotypiques
      
      🔄 Variation génétique:
      • Mutations: source de diversité
      • Conséquences sur les organismes
      • Évolution des espèces
      
      🎓 Prochaine étape:
      Nous explorerons l'écologie et les interactions entre les êtres vivants et leur environnement.`,
      type: "summary" as const
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <LoadingSpinner text="Chargement du cours de SVT..." progress={progress} type="progress" />
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
        lessonTitle="Module 1: Génétique et hérédité" 
        slides={slides} 
      />
    </motion.div>
  );
};

export default SVTCourse;
