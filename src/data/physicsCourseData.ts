
// Données des cours de physique-chimie (en français uniquement)

export const physicsLessonsData = {
  "1": {
    title: "Gravitation Universelle",
    slides: [
      {
        title: "Introduction : Loi de la gravitation universelle",
        content: `🌍 Loi de la gravitation universelle de Newton

La loi de la gravitation universelle est l'une des lois les plus importantes en physique. Elle explique l'attraction gravitationnelle entre tous les objets massifs dans l'univers.

📐 Expression mathématique :
F = G × (m₁ × m₂) / r²

Où :
• F : force gravitationnelle (Newton)
• G : constante gravitationnelle universelle = 6,67×10⁻¹¹ N⋅m²/kg²
• m₁, m₂ : masses des deux objets (kg)
• r : distance entre les centres de masse (m)

🔍 Caractéristiques de cette force :
• Proportionnelle au produit des masses
• Inversement proportionnelle au carré de la distance
• Dirigée le long de la droite joignant les centres des deux objets
• Toujours attractive`,
        type: "intro" as const
      },
      {
        title: "Poids et masse",
        content: `⚖️ Distinction entre poids et masse

**La masse (m) :**
• Quantité de matière contenue dans un objet
• Mesurée en kilogrammes (kg)
• Propriété intrinsèque invariable
• Ne dépend pas du lieu

**Le poids (P) :**
• Force d'attraction exercée par la Terre sur un objet
• P = mg où g = 9,8 m/s² (intensité de pesanteur)
• Mesuré en Newtons (N)
• Varie selon le lieu (Terre, Lune, planètes)

🌙 Exemple sur la Lune :
• La masse reste identique
• Le poids = m × 1,6 (car g_Lune = 1,6 m/s²)

🚀 Dans l'espace :
• La masse reste constante
• Le poids = 0 (apesanteur)

💡 Application pratique :
Un astronaute de 70 kg a un poids de 686 N sur Terre, mais seulement 112 N sur la Lune !`,
        type: "definition" as const
      },
      {
        title: "Applications de la gravitation",
        content: `🛰️ Applications de la loi de gravitation universelle

**Les satellites artificiels :**
• Orbite circulaire autour de la Terre
• Équilibre entre force gravitationnelle et force centripète
• Condition : mg = mv²/r

**Marées océaniques :**
• Résultent de l'attraction lunaire et solaire
• Effet différentiel de la gravitation sur les océans
• Phénomène de haute et basse marée

**Mouvement des planètes :**
• Lois de Kepler expliquées par la gravitation
• Orbites elliptiques autour du Soleil
• Période orbitale dépend de la distance au Soleil

**Exploration spatiale :**
• Calcul des trajectoires des sondes spatiales
• Assistance gravitationnelle pour économiser du carburant
• Mise en orbite des satellites

🌌 Le système solaire :
• Le Soleil maintient les planètes en orbite par sa gravitation
• Chaque planète influence les autres par sa propre gravitation`,
        type: "example" as const
      }
    ]
  },
  "14": {
    title: "Courant Électrique Continu",
    slides: [
      {
        title: "Nature du courant électrique",
        content: `⚡ Le courant électrique

**Définition :**
Le courant électrique est un déplacement ordonné de porteurs de charge électrique dans un conducteur.

📊 Intensité du courant :
I = Q/t = n × q × v × S

Où :
• I : intensité du courant (Ampère)
• Q : charge électrique transportée (Coulomb)
• t : durée (seconde)
• n : nombre de porteurs de charge
• v : vitesse de dérive
• S : section du conducteur

🔄 Sens du courant :
• Courant conventionnel : du pôle + vers le pôle -
• Déplacement réel des électrons : du pôle - vers le pôle +
• I = 1 Ampère = 1 Coulomb/seconde

⚡ Dans les métaux :
Les porteurs de charge sont les électrons libres qui se déplacent dans le réseau cristallin.`,
        type: "definition" as const
      },
      {
        title: "Loi d'Ohm",
        content: `🔌 Loi d'Ohm fondamentale

**Expression de la loi :**
U = R × I

Où :
• U : tension ou différence de potentiel (Volt)
• R : résistance électrique (Ohm Ω)
• I : intensité du courant (Ampère)

📈 Résistance électrique :
• Dépend du matériau conducteur
• Proportionnelle à la longueur
• Inversement proportionnelle à la section
• R = ρ × L/S (ρ = résistivité)

🌡️ Influence de la température :
• Métaux : résistance augmente avec la température
• Semi-conducteurs : résistance diminue avec la température

⚖️ Lois de Kirchhoff :
• Loi des nœuds : Σ I_entrants = Σ I_sortants
• Loi des mailles : Σ U = 0 dans une boucle fermée

Ces lois permettent d'analyser tous les circuits électriques.`,
        type: "definition" as const
      },
      {
        title: "Circuits électriques",
        content: `🔄 Types de circuits électriques

**Montage en série :**
• Même courant dans tous les éléments
• I = I₁ = I₂ = I₃
• Résistance totale : R_total = R₁ + R₂ + R₃
• Répartition des tensions : U = U₁ + U₂ + U₃

**Montage en parallèle (dérivation) :**
• Même tension aux bornes de chaque élément
• U = U₁ = U₂ = U₃
• Courant total : I = I₁ + I₂ + I₃
• Résistance équivalente : 1/R_total = 1/R₁ + 1/R₂ + 1/R₃

🔋 Puissance électrique :
• P = U × I = R × I² = U²/R
• Unité : le Watt (W)
• Énergie : E = P × t (Joule ou kWh)

⚡ Applications pratiques :
• Installation domestique en dérivation
• Éclairage de Noël en série
• Circuits électroniques mixtes`,
        type: "example" as const
      }
    ]
  }
};

export const physicsLessonsStructure = {
  semester1: [
    { id: "1", title: "Gravitation Universelle", description: "Étude de la loi de Newton et ses applications" },
    { id: "2", title: "Mouvement Circulaire Uniforme", description: "Analyse du mouvement circulaire et force centripète" },
    { id: "3", title: "Oscillations Libres", description: "Étude du mouvement harmonique simple et du pendule" },
    { id: "4", title: "Propagation d'une Onde Lumineuse", description: "Propriétés de la lumière et lois de propagation" },
    { id: "5", title: "Réflexion et Réfraction", description: "Phénomènes de réflexion et réfraction de la lumière" },
    { id: "6", title: "Réactions Acide-Base", description: "Étude des réactions entre acides et bases" },
    { id: "7", title: "Réactions d'Oxydoréduction", description: "Analyse des réactions redox" },
    { id: "8", title: "Énergie d'un Système Chimique", description: "Étude énergétique des réactions chimiques" },
    { id: "9", title: "Matière et ses Transformations", description: "Propriétés et transformations de la matière" },
    { id: "10", title: "Atome et Éléments", description: "Structure atomique et classification périodique" },
    { id: "11", title: "Liaisons Chimiques", description: "Types de liaisons et leurs propriétés" },
    { id: "12", title: "Solutions Aqueuses", description: "Étude des solutions et leurs propriétés" },
    { id: "13", title: "Équilibre Chimique", description: "Concept d'équilibre dans les réactions" }
  ],
  semester2: [
    { id: "14", title: "Courant Électrique Continu", description: "Étude du courant électrique et ses lois fondamentales" },
    { id: "15", title: "Circuits Électriques", description: "Analyse des circuits simples et complexes" },
    { id: "16", title: "Champ Magnétique", description: "Propriétés du champ magnétique et applications" },
    { id: "17", title: "Induction Électromagnétique", description: "Phénomène d'induction et lois de Faraday" },
    { id: "18", title: "Ondes Électromagnétiques", description: "Propriétés et propagation des ondes EM" },
    { id: "19", title: "Chimie Organique", description: "Introduction aux composés organiques" },
    { id: "20", title: "Polymères", description: "Étude des polymères naturels et synthétiques" },
    { id: "21", title: "Chimie et Environnement", description: "Impact des réactions chimiques sur l'environnement" },
    { id: "22", title: "Physique Moderne", description: "Introduction à la physique nucléaire et quantique" },
    { id: "23", title: "Projet de Fin d'Année", description: "Application pratique des concepts étudiés" }
  ],
  modules: [
    {
      id: "mechanics",
      title: "Mécanique",
      lessons: ["1", "2", "3", "4", "5"]
    },
    {
      id: "electricity",
      title: "Électricité", 
      lessons: ["14", "15", "16", "17"]
    },
    {
      id: "optics",
      title: "Optique",
      lessons: ["7", "8", "9"]
    },
    {
      id: "chemistry",
      title: "Chimie",
      lessons: ["6", "7", "8", "19", "20", "21"]
    }
  ]
};

export const physicsExercisesData = {
  "1": {
    title: "Exercices de Gravitation Universelle",
    exercises: [
      {
        id: 1,
        title: "Calcul de force gravitationnelle",
        difficulty: "Moyen",
        duration: "15 min",
        points: 12,
        question: "Calculer la force gravitationnelle entre la Terre (M = 6,0×10²⁴ kg) et la Lune (m = 7,3×10²² kg), sachant que la distance qui les sépare est d = 3,8×10⁸ m.\nDonnée : G = 6,67×10⁻¹¹ N⋅m²/kg²",
        solution: "Application de la loi de gravitation universelle :\nF = G × (M × m) / d²\nF = 6,67×10⁻¹¹ × (6,0×10²⁴ × 7,3×10²²) / (3,8×10⁸)²\nF = 6,67×10⁻¹¹ × 4,38×10⁴⁷ / 1,44×10¹⁷\nF = 2,0×10²⁰ N\n\nLa force gravitationnelle entre la Terre et la Lune est de 2,0×10²⁰ N."
      },
      {
        id: 2,
        title: "Poids et masse",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: "Un objet de masse m = 60 kg se trouve sur la surface terrestre.\n1. Calculer son poids sur Terre (g = 9,8 m/s²)\n2. Calculer son poids sur la Lune où g = 1,6 m/s²\n3. Que peut-on dire de sa masse ?",
        solution: "1. Poids sur Terre :\nP = mg = 60 × 9,8 = 588 N\n\n2. Poids sur la Lune :\nP = mg = 60 × 1,6 = 96 N\n\n3. La masse reste constante (60 kg) car elle représente la quantité de matière, qui ne dépend pas du lieu.\n\nConclusion : Le poids varie selon l'intensité de pesanteur du lieu, mais la masse reste invariable."
      }
    ]
  },
  "14": {
    title: "Exercices de Courant Électrique",
    exercises: [
      {
        id: 1,
        title: "Application de la loi d'Ohm",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: "Un résistor de résistance R = 100 Ω est traversé par un courant d'intensité I = 0,2 A. Calculer la tension U aux bornes du résistor.",
        solution: "Application de la loi d'Ohm : U = R × I\nU = 100 × 0,2 = 20 V\n\nLa tension aux bornes du résistor est de 20 V."
      },
      {
        id: 2,
        title: "Circuit électrique simple",
        difficulty: "Moyen",
        duration: "15 min",
        points: 12,
        question: "Un circuit électrique comprend un générateur (12V) et deux résistors en série :\nR₁ = 4 Ω et R₂ = 8 Ω\n1. Calculer la résistance totale\n2. Calculer l'intensité du courant\n3. Calculer la tension aux bornes de chaque résistor",
        solution: "1. Résistance totale (montage série) :\nR_total = R₁ + R₂ = 4 + 8 = 12 Ω\n\n2. Intensité du courant :\nI = U/R_total = 12/12 = 1 A\n\n3. Tensions aux bornes :\nU₁ = R₁ × I = 4 × 1 = 4 V\nU₂ = R₂ × I = 8 × 1 = 8 V\n\nVérification : U₁ + U₂ = 4 + 8 = 12 V ✓"
      }
    ]
  }
};
