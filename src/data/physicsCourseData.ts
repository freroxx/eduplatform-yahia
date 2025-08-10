// Physics course data with enhanced formatting and complete content

export const physicsLessonsData = {
  "1": {
    title: "Gravitation Universelle",
    slides: [
      {
        title: "🌍 Introduction : Loi de la gravitation universelle",
        content: `# 🌍 Loi de la gravitation universelle de Newton

La **loi de la gravitation universelle** est l'une des lois les plus importantes en physique. Elle explique l'**attraction gravitationnelle** entre tous les objets massifs dans l'univers.

## 📐 **Expression mathématique :**
### **F = G × (m₁ × m₂) / r²**

**Où :**
• **F** : force gravitationnelle (**Newton**)
• **G** : constante gravitationnelle universelle = **6,67×10⁻¹¹ N⋅m²/kg²**
• **m₁, m₂** : masses des deux objets (**kg**)
• **r** : distance entre les centres de masse (**m**)

## 🔍 **Caractéristiques de cette force :**
• **Proportionnelle** au produit des masses
• **Inversement proportionnelle** au carré de la distance
• **Dirigée** le long de la droite joignant les centres des deux objets
• **Toujours attractive**

## 🎯 **Applications importantes :**
• **Mouvement des planètes** autour du Soleil
• **Orbites des satellites** artificiels
• **Phénomène des marées** océaniques
• **Chute des corps** à la surface terrestre`,
        type: "intro" as const
      },
      {
        title: "⚖️ Poids et masse",
        content: `# ⚖️ Distinction entre poids et masse

## **La masse (m) :**
• **Quantité de matière** contenue dans un objet
• Mesurée en **kilogrammes (kg)**
• **Propriété intrinsèque** invariable
• **Ne dépend pas** du lieu

## **Le poids (P) :**
• **Force d'attraction** exercée par la Terre sur un objet
• **P = mg** où **g = 9,8 m/s²** (intensité de pesanteur)
• Mesuré en **Newtons (N)**
• **Varie selon le lieu** (Terre, Lune, planètes)

## 🌙 **Exemple sur la Lune :**
• La **masse reste identique**
• Le **poids = m × 1,6** (car g_Lune = 1,6 m/s²)

## 🚀 **Dans l'espace :**
• La **masse reste constante**
• Le **poids = 0** (apesanteur)

## 💡 **Application pratique :**
Un astronaute de **70 kg** a un poids de **686 N** sur Terre, mais seulement **112 N** sur la Lune !

### **Calcul détaillé :**
• **Sur Terre** : P = 70 × 9,8 = **686 N**
• **Sur la Lune** : P = 70 × 1,6 = **112 N**
• **Masse** : toujours **70 kg** partout !`,
        type: "definition" as const
      },
      {
        title: "🛰️ Applications de la gravitation",
        content: `# 🛰️ Applications de la loi de gravitation universelle

## **Les satellites artificiels :**
• **Orbite circulaire** autour de la Terre
• **Équilibre** entre force gravitationnelle et force centripète
• **Condition** : **mg = mv²/r**
• **Vitesse orbitale** : v = √(GM/r)

## **Marées océaniques :**
• **Résultent** de l'attraction lunaire et solaire
• **Effet différentiel** de la gravitation sur les océans
• **Phénomène** de haute et basse marée
• **Coefficient de marée** varie selon les positions relatives

## **Mouvement des planètes :**
• **Lois de Kepler** expliquées par la gravitation
• **Orbites elliptiques** autour du Soleil
• **Période orbitale** dépend de la distance au Soleil
• **3ème loi de Kepler** : T² ∝ r³

## **Exploration spatiale :**
• **Calcul des trajectoires** des sondes spatiales
• **Assistance gravitationnelle** pour économiser du carburant
• **Mise en orbite** des satellites
• **Points de Lagrange** pour les stations spatiales

## 🌌 **Le système solaire :**
• Le **Soleil maintient** les planètes en orbite par sa gravitation
• **Chaque planète influence** les autres par sa propre gravitation
• **Perturbations orbitales** permettent de découvrir de nouvelles planètes`,
        type: "example" as const
      }
    ],
    cours: `# Gravitation Universelle

## I. Loi de Newton

### Énoncé
**Tous les corps s'attirent mutuellement** avec une force proportionnelle au produit de leurs masses et inversement proportionnelle au carré de la distance qui sépare leurs centres.

### Expression mathématique
**F = G × (m₁ × m₂) / r²**

Où :
- **F** : force gravitationnelle (N)
- **G** : constante gravitationnelle = **6,67 × 10⁻¹¹ N⋅m²/kg²**
- **m₁, m₂** : masses des objets (kg)
- **r** : distance entre les centres (m)

### Propriétés
- Force **toujours attractive**
- **Action-réaction** : F₁₂ = -F₂₁
- **Portée infinie** mais décroit rapidement
- **Universelle** : s'applique à tous les objets massifs

## II. Poids et pesanteur

### Définitions
- **Masse** : quantité de matière (kg)
- **Poids** : force gravitationnelle terrestre (N)
- **Pesanteur** : accélération due à la gravité (m/s²)

### Relations
**P = mg** où **g ≈ 9,8 m/s²** au niveau de la mer

### Variations de g
- **Altitude** : g diminue avec l'altitude
- **Latitude** : g plus faible à l'équateur
- **Géologie** : variations locales selon la densité

## III. Applications

### Satellites artificiels
Pour une **orbite circulaire** :
- **Force centripète** = Force gravitationnelle
- **mv²/r = GMm/r²**
- **Vitesse orbitale** : v = √(GM/r)

### Lois de Kepler
1. **Trajectoires elliptiques** avec le Soleil au foyer
2. **Aire balayée constante** (vitesse variable)
3. **T² = kr³** (période et rayon orbital)

## Exercices corrigés

### Exercice 1 : Force gravitationnelle
Calculer la force entre la Terre (M = 6,0×10²⁴ kg) et un satellite de masse m = 1000 kg à altitude h = 400 km.

**Solution :**
r = R_Terre + h = 6400 + 400 = 6800 km = 6,8×10⁶ m

F = G(Mm)/r² = 6,67×10⁻¹¹ × (6,0×10²⁴ × 1000) / (6,8×10⁶)²
F = **8,65×10³ N**

### Exercice 2 : Vitesse orbitale
Calculer la vitesse d'un satellite en orbite basse (h = 200 km).

**Solution :**
v = √(GM/r) avec r = 6,6×10⁶ m
v = √(6,67×10⁻¹¹ × 6,0×10²⁴ / 6,6×10⁶)
v = **7,8 km/s**`,
    exercices: [
      {
        id: 1,
        title: "Calcul de force gravitationnelle",
        difficulty: "Moyen",
        duration: "15 min",
        points: 12,
        question: "**Calculer la force gravitationnelle entre la Terre (M = 6,0×10²⁴ kg) et la Lune (m = 7,3×10²² kg), sachant que la distance qui les sépare est d = 3,8×10⁸ m.**\n\n**Donnée :** G = 6,67×10⁻¹¹ N⋅m²/kg²",
        solution: "**Application de la loi de gravitation universelle :**\n\n**F = G × (M × m) / d²**\n\n**F = 6,67×10⁻¹¹ × (6,0×10²⁴ × 7,3×10²²) / (3,8×10⁸)²**\n\n**F = 6,67×10⁻¹¹ × 4,38×10⁴⁷ / 1,44×10¹⁷**\n\n**F = 2,0×10²⁰ N**\n\n**La force gravitationnelle entre la Terre et la Lune est de 2,0×10²⁰ N.**"
      },
      {
        id: 2,
        title: "Poids et masse",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: "**Un objet de masse m = 60 kg se trouve sur la surface terrestre.**\n\n1. **Calculer son poids sur Terre** (g = 9,8 m/s²)\n2. **Calculer son poids sur la Lune** où g = 1,6 m/s²\n3. **Que peut-on dire de sa masse ?**",
        solution: "**Solutions détaillées :**\n\n1. **Poids sur Terre :**\n**P = mg = 60 × 9,8 = 588 N**\n\n2. **Poids sur la Lune :**\n**P = mg = 60 × 1,6 = 96 N**\n\n3. **La masse reste constante (60 kg)** car elle représente la **quantité de matière**, qui ne dépend pas du lieu.\n\n**Conclusion :** Le poids **varie** selon l'intensité de pesanteur du lieu, mais la masse reste **invariable**."
      }
    ]
  },
  "14": {
    title: "Courant Électrique Continu",
    slides: [
      {
        title: "⚡ Nature du courant électrique",
        content: `# ⚡ Le courant électrique

## **Définition :**
Le **courant électrique** est un déplacement **ordonné** de porteurs de charge électrique dans un **conducteur**.

## 📊 **Intensité du courant :**
### **I = Q/t = n × q × v × S**

**Où :**
• **I** : intensité du courant (**Ampère**)
• **Q** : charge électrique transportée (**Coulomb**)
• **t** : durée (**seconde**)
• **n** : nombre de porteurs de charge
• **v** : vitesse de dérive
• **S** : section du conducteur

## 🔄 **Sens du courant :**
• **Courant conventionnel** : du pôle **+** vers le pôle **-**
• **Déplacement réel des électrons** : du pôle **-** vers le pôle **+**
• **I = 1 Ampère = 1 Coulomb/seconde**

## ⚡ **Dans les métaux :**
Les porteurs de charge sont les **électrons libres** qui se déplacent dans le **réseau cristallin**.

## 🔋 **Types de conducteurs :**
• **Métalliques** : électrons libres
• **Électrolytiques** : ions en solution
• **Gazeux** : ions et électrons libres`,
        type: "definition" as const
      },
      {
        title: "🔌 Loi d'Ohm",
        content: `# 🔌 Loi d'Ohm fondamentale

## **Expression de la loi :**
### **U = R × I**

**Où :**
• **U** : tension ou différence de potentiel (**Volt**)
• **R** : résistance électrique (**Ohm Ω**)
• **I** : intensité du courant (**Ampère**)

## 📈 **Résistance électrique :**
• **Dépend du matériau** conducteur
• **Proportionnelle** à la longueur
• **Inversement proportionnelle** à la section
• **R = ρ × L/S** (ρ = résistivité)

## 🌡️ **Influence de la température :**
• **Métaux** : résistance **augmente** avec la température
• **Semi-conducteurs** : résistance **diminue** avec la température

## ⚖️ **Lois de Kirchhoff :**
• **Loi des nœuds** : **Σ I_entrants = Σ I_sortants**
• **Loi des mailles** : **Σ U = 0** dans une boucle fermée

Ces lois permettent d'analyser **tous les circuits électriques**.

## 📏 **Résistivité des matériaux :**
• **Argent** : 1,6×10⁻⁸ Ω⋅m
• **Cuivre** : 1,7×10⁻⁸ Ω⋅m  
• **Fer** : 10×10⁻⁸ Ω⋅m`,
        type: "definition" as const
      },
      {
        title: "🔄 Circuits électriques",
        content: `# 🔄 Types de circuits électriques

## **Montage en série :**
• **Même courant** dans tous les éléments
• **I = I₁ = I₂ = I₃**
• **Résistance totale** : **R_total = R₁ + R₂ + R₃**
• **Répartition des tensions** : **U = U₁ + U₂ + U₃**

## **Montage en parallèle (dérivation) :**
• **Même tension** aux bornes de chaque élément
• **U = U₁ = U₂ = U₃**
• **Courant total** : **I = I₁ + I₂ + I₃**
• **Résistance équivalente** : **1/R_total = 1/R₁ + 1/R₂ + 1/R₃**

## 🔋 **Puissance électrique :**
• **P = U × I = R × I² = U²/R**
• **Unité** : le **Watt (W)**
• **Énergie** : **E = P × t** (Joule ou kWh)

## ⚡ **Applications pratiques :**
• **Installation domestique** en dérivation
• **Éclairage de Noël** en série
• **Circuits électroniques** mixtes

## 🏠 **Sécurité électrique :**
• **Disjoncteurs** et fusibles
• **Mise à la terre**
• **Différentiel** 30 mA`,
        type: "example" as const
      }
    ],
    cours: `# Courant Électrique Continu

## I. Nature du courant électrique

### Définition
Le **courant électrique** est un déplacement ordonné de **porteurs de charge** dans un milieu conducteur.

### Intensité du courant
**I = Q/Δt**
- **I** : intensité (A)
- **Q** : charge transportée (C)  
- **Δt** : durée (s)

### Sens conventionnel
Par **convention**, le courant circule du **pôle positif** vers le **pôle négatif** à l'extérieur du générateur.

## II. Loi d'Ohm

### Énoncé
Pour un **conducteur ohmique**, la tension à ses bornes est **proportionnelle** à l'intensité qui le traverse.

### Expression
**U = R × I**
- **U** : tension (V)
- **R** : résistance (Ω)
- **I** : intensité (A)

### Résistance d'un conducteur
**R = ρ × L/S**
- **ρ** : résistivité du matériau (Ω⋅m)
- **L** : longueur (m)
- **S** : section (m²)

## III. Lois de Kirchhoff

### Loi des nœuds
**La somme des intensités qui arrivent** à un nœud est égale à **la somme des intensités qui en repartent**.
**Σ I_entrants = Σ I_sortants**

### Loi des mailles  
**La somme algébrique des tensions** dans une maille fermée est **nulle**.
**Σ U = 0**

## IV. Associations de résistors

### En série
- **Même intensité** : I = I₁ = I₂
- **Résistance équivalente** : R_eq = R₁ + R₂
- **Tension totale** : U = U₁ + U₂

### En dérivation (parallèle)
- **Même tension** : U = U₁ = U₂  
- **Résistance équivalente** : 1/R_eq = 1/R₁ + 1/R₂
- **Intensité totale** : I = I₁ + I₂

## V. Puissance électrique

### Définition
**P = U × I**

### Autres expressions
- **P = R × I²** (effet Joule)
- **P = U²/R**

### Énergie électrique
**E = P × t** (en Joules)
**E = P × t** (en kWh si P en kW et t en h)

## Exercices corrigés

### Exercice 1 : Loi d'Ohm
Un résistor de **100 Ω** est traversé par un courant de **0,5 A**. Calculer la tension.

**Solution :**
U = R × I = 100 × 0,5 = **50 V**

### Exercice 2 : Circuit série
Deux résistors R₁ = 20 Ω et R₂ = 30 Ω sont en série sous 12 V.

**Solution :**
- R_total = 20 + 30 = **50 Ω**
- I = U/R = 12/50 = **0,24 A**
- U₁ = R₁ × I = 20 × 0,24 = **4,8 V**
- U₂ = R₂ × I = 30 × 0,24 = **7,2 V**

### Exercice 3 : Puissance
Calculer la puissance dissipée par le résistor R₁.

**Solution :**
P₁ = R₁ × I² = 20 × (0,24)² = **1,15 W**`,
    exercices: [
      {
        id: 1,
        title: "Application de la loi d'Ohm",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: "**Un résistor de résistance R = 100 Ω est traversé par un courant d'intensité I = 0,2 A. Calculer la tension U aux bornes du résistor.**",
        solution: "**Application de la loi d'Ohm :**\n\n**U = R × I**\n\n**U = 100 × 0,2 = 20 V**\n\n**La tension aux bornes du résistor est de 20 V.**"
      },
      {
        id: 2,
        title: "Circuit électrique simple",
        difficulty: "Moyen",
        duration: "15 min",
        points: 12,
        question: "**Un circuit électrique comprend un générateur (12V) et deux résistors en série :**\n**R₁ = 4 Ω et R₂ = 8 Ω**\n\n1. **Calculer la résistance totale**\n2. **Calculer l'intensité du courant**\n3. **Calculer la tension aux bornes de chaque résistor**",
        solution: "**Solutions détaillées :**\n\n1. **Résistance totale (montage série) :**\n**R_total = R₁ + R₂ = 4 + 8 = 12 Ω**\n\n2. **Intensité du courant :**\n**I = U/R_total = 12/12 = 1 A**\n\n3. **Tensions aux bornes :**\n**U₁ = R₁ × I = 4 × 1 = 4 V**\n**U₂ = R₂ × I = 8 × 1 = 8 V**\n\n**Vérification :** U₁ + U₂ = 4 + 8 = 12 V ✅"
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
        question: "**Calculer la force gravitationnelle entre la Terre (M = 6,0×10²⁴ kg) et la Lune (m = 7,3×10²² kg), sachant que la distance qui les sépare est d = 3,8×10⁸ m.**\n\n**Donnée :** G = 6,67×10⁻¹¹ N⋅m²/kg²",
        solution: "**Application de la loi de gravitation universelle :**\n\n**F = G × (M × m) / d²**\n\n**F = 6,67×10⁻¹¹ × (6,0×10²⁴ × 7,3×10²²) / (3,8×10⁸)²**\n\n**F = 6,67×10⁻¹¹ × 4,38×10⁴⁷ / 1,44×10¹⁷**\n\n**F = 2,0×10²⁰ N**\n\n**La force gravitationnelle entre la Terre et la Lune est de 2,0×10²⁰ N.**"
      },
      {
        id: 2,
        title: "Poids et masse",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: "**Un objet de masse m = 60 kg se trouve sur la surface terrestre.**\n\n1. **Calculer son poids sur Terre** (g = 9,8 m/s²)\n2. **Calculer son poids sur la Lune** où g = 1,6 m/s²\n3. **Que peut-on dire de sa masse ?**",
        solution: "**Solutions détaillées :**\n\n1. **Poids sur Terre :**\n**P = mg = 60 × 9,8 = 588 N**\n\n2. **Poids sur la Lune :**\n**P = mg = 60 × 1,6 = 96 N**\n\n3. **La masse reste constante (60 kg)** car elle représente la **quantité de matière**, qui ne dépend pas du lieu.\n\n**Conclusion :** Le poids **varie** selon l'intensité de pesanteur du lieu, mais la masse reste **invariable**."
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
        question: "**Un résistor de résistance R = 100 Ω est traversé par un courant d'intensité I = 0,2 A. Calculer la tension U aux bornes du résistor.**",
        solution: "**Application de la loi d'Ohm :**\n\n**U = R × I**\n\n**U = 100 × 0,2 = 20 V**\n\n**La tension aux bornes du résistor est de 20 V.**"
      },
      {
        id: 2,
        title: "Circuit électrique simple",
        difficulty: "Moyen",
        duration: "15 min",
        points: 12,
        question: "**Un circuit électrique comprend un générateur (12V) et deux résistors en série :**\n**R₁ = 4 Ω et R₂ = 8 Ω**\n\n1. **Calculer la résistance totale**\n2. **Calculer l'intensité du courant**\n3. **Calculer la tension aux bornes de chaque résistor**",
        solution: "**Solutions détaillées :**\n\n1. **Résistance totale (montage série) :**\n**R_total = R₁ + R₂ = 4 + 8 = 12 Ω**\n\n2. **Intensité du courant :**\n**I = U/R_total = 12/12 = 1 A**\n\n3. **Tensions aux bornes :**\n**U₁ = R₁ × I = 4 × 1 = 4 V**\n**U₂ = R₂ × I = 8 × 1 = 8 V**\n\n**Vérification :** U₁ + U₂ = 4 + 8 = 12 V ✅"
      }
    ]
  }
};
