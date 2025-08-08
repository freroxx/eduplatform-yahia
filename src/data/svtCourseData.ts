
// SVT (Sciences de la Vie et de la Terre) course data

export const svtLessonsData = {
  "1": {
    title: "Les techniques adaptatives à l'étude écologique sur le terrain",
    slides: [
      {
        title: "Introduction à l'écologie de terrain",
        content: `🌿 Étude écologique sur le terrain

L'écologie de terrain nécessite des techniques spécialisées pour observer et analyser les interactions entre les organismes vivants et leur environnement.

📋 **Méthodes d'étude :**
• Observation directe des organismes
• Relevés quantitatifs et qualitatifs
• Mesures des facteurs abiotiques
• Échantillonnage représentatif

🔬 **Techniques d'observation :**
• Quadrats pour l'étude de la végétation
• Transects linéaires
• Capture-marquage-recapture
• Pièges photographiques

📊 **Collecte de données :**
• Carnets de terrain détaillés
• Photographies documentaires
• Prélèvements d'échantillons
• Mesures physico-chimiques

L'objectif est de comprendre le fonctionnement des écosystèmes naturels.`,
        type: "intro" as const
      },
      {
        title: "Protocoles d'échantillonnage",
        content: `📐 Méthodes d'échantillonnage écologique

**Échantillonnage aléatoire :**
• Distribution hasardeuse des points d'étude
• Évite les biais de sélection
• Représentatif de l'ensemble de la zone

**Échantillonnage systématique :**
• Points d'étude régulièrement espacés
• Facilite les comparaisons
• Couvre uniformément le territoire

**Échantillonnage stratifié :**
• Division en zones homogènes
• Étude spécifique de chaque habitat
• Comparaison entre différents milieux

🎯 **Taille des échantillons :**
• Surface minimale d'échantillonnage
• Nombre suffisant de relevés
• Représentativité statistique

📝 **Matériel nécessaire :**
• Quadrats de différentes tailles
• Décamètre et piquets
• Loupe et guides d'identification
• Fiches de terrain standardisées`,
        type: "definition" as const
      }
    ]
  },
  "2": {
    title: "Les facteurs édaphiques et leurs relations avec les êtres vivants",
    slides: [
      {
        title: "Le sol : un facteur écologique majeur",
        content: `🌱 Facteurs édaphiques

Le sol constitue un facteur écologique déterminant qui influence directement la répartition et l'adaptation des organismes vivants.

🏔️ **Composition du sol :**
• Fraction minérale (45%) : sables, argiles, limons
• Matière organique (5%) : humus, débris végétaux
• Eau (25%) : solution du sol
• Air (25%) : espaces poreux

⚗️ **Propriétés physiques :**
• Texture : proportions sable/limon/argile
• Structure : agrégation des particules
• Porosité : espaces entre les agrégats
• Perméabilité : circulation de l'eau et de l'air

🔬 **Propriétés chimiques :**
• pH : acidité ou basicité du sol
• Capacité d'échange cationique
• Éléments nutritifs disponibles
• Matière organique et humus

L'analyse pédologique révèle les caractéristiques déterminantes pour la végétation.`,
        type: "intro" as const
      }
    ]
  },
  "3": {
    title: "Les facteurs climatiques et leurs relations avec les êtres vivants",
    slides: [
      {
        title: "Influence du climat sur le vivant",
        content: `🌡️ Facteurs climatiques

Le climat détermine largement la répartition des espèces et structure les écosystèmes terrestres.

☀️ **Température :**
• Facteur limitant majeur
• Influence les processus métaboliques
• Détermine les saisons de reproduction
• Zone de tolérance thermique spécifique

💧 **Précipitations :**
• Disponibilité en eau
• Régime saisonnier des pluies
• Humidité relative de l'air
• Adaptation à la sécheresse ou à l'humidité

🌬️ **Autres facteurs :**
• Vent : dispersion, évapotranspiration
• Luminosité : photosynthèse, photopériodisme
• Pression atmosphérique
• Phénomènes extrêmes

🗺️ **Zonation bioclimatique :**
Chaque zone climatique correspond à des biomes caractéristiques avec leurs communautés végétales et animales spécialisées.`,
        type: "intro" as const
      }
    ]
  }
};

export const svtLessonsStructure = {
  semester1: [
    { 
      id: "1", 
      title: "Les techniques adaptatives à l'étude écologique sur le terrain", 
      description: "Méthodes et protocoles d'étude des écosystèmes naturels" 
    },
    { 
      id: "2", 
      title: "Les facteurs édaphiques et leurs relations avec les êtres vivants", 
      description: "Influence du sol sur la distribution des organismes" 
    },
    { 
      id: "3", 
      title: "Les facteurs climatiques et leurs relations avec les êtres vivants", 
      description: "Impact des conditions climatiques sur les écosystèmes" 
    },
    { 
      id: "4", 
      title: "Flux de la matière et de l'énergie dans l'écosystème", 
      description: "Cycles biogéochimiques et flux énergétiques" 
    },
    { 
      id: "5", 
      title: "Les équilibres naturels", 
      description: "Dynamique des populations et régulation écologique" 
    }
  ],
  semester2: [
    { 
      id: "6", 
      title: "La reproduction sexuée chez les plantes à fleurs", 
      description: "Mécanismes de la reproduction chez les Angiospermes" 
    },
    { 
      id: "7", 
      title: "La reproduction sexuée chez les plantes sans fleurs", 
      description: "Reproduction chez les Gymnospermes, Fougères et Mousses" 
    },
    { 
      id: "8", 
      title: "Les cycles de développement des plantes", 
      description: "Alternance des générations et cycles biologiques" 
    },
    { 
      id: "9", 
      title: "La reproduction asexuée chez les plantes", 
      description: "Multiplication végétative et propagation asexuée" 
    },
    { 
      id: "10", 
      title: "La modification génétique des plantes", 
      description: "Techniques de biotechnologie végétale et applications" 
    },
    { 
      id: "11", 
      title: "La classification des plantes", 
      description: "Systématique et phylogénie du règne végétal" 
    }
  ],
  modules: [
    {
      id: "ecology",
      title: "Écologie",
      lessons: ["1", "2", "3", "4", "5"]
    },
    {
      id: "botany",
      title: "Botanique",
      lessons: ["6", "7", "8", "9", "10", "11"]
    }
  ]
};

export const svtExercisesData = {
  "1": {
    title: "Exercices sur les techniques d'étude écologique",
    exercises: [
      {
        id: 1,
        title: "Analyse d'un protocole d'échantillonnage",
        difficulty: "Moyen",
        duration: "20 min",
        points: 15,
        question: "Un écologiste veut étudier la végétation d'une prairie de 2 hectares.\n1. Quelle méthode d'échantillonnage recommandez-vous ?\n2. Quelle taille de quadrat utiliser ?\n3. Combien de relevés effectuer ?",
        solution: "1. Méthode recommandée : Échantillonnage aléatoire stratifié\n   - Diviser la prairie en zones homogènes\n   - Répartir aléatoirement les quadrats dans chaque zone\n\n2. Taille du quadrat :\n   - Pour une prairie : quadrats de 1m × 1m\n   - Surface suffisante pour capturer la diversité\n\n3. Nombre de relevés :\n   - Minimum 30 relevés pour 2 hectares\n   - Répartition proportionnelle aux zones\n   - Assurer la représentativité statistique"
      }
    ]
  },
  "2": {
    title: "Exercices sur les facteurs édaphiques",
    exercises: [
      {
        id: 1,
        title: "Interprétation d'une analyse de sol",
        difficulty: "Facile",
        duration: "15 min",
        points: 10,
        question: "Un sol présente les caractéristiques suivantes :\n- pH : 8,2\n- Texture : 60% sable, 30% argile, 10% limon\n- Matière organique : 2%\n\nAnalysez ces données et prédisez le type de végétation possible.",
        solution: "Analyse du sol :\n- pH 8,2 : Sol basique (alcalin)\n- Texture : Sol sablo-argileux, bien drainant\n- Matière organique faible (2%)\n\nVégétation possible :\n- Plantes calcicoles (adaptées aux sols basiques)\n- Espèces xérophiles (résistantes à la sécheresse)\n- Végétation méditerranéenne type garrigue\n- Éviter les plantes acidophiles"
      }
    ]
  }
};
