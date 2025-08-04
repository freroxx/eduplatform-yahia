
// Comprehensive course data for all subjects
export interface Slide {
  title: string;
  content: string;
  type: "intro" | "definition" | "example" | "exercise" | "summary" | "introduction" | "content" | "conclusion";
}

export interface Exercise {
  id: number;
  title: string;
  difficulty: "Facile" | "Moyen" | "Difficile";
  duration: string;
  points: number;
  question: string;
  options?: string[];
  correctAnswer?: string;
  solution?: string;
  explanation?: string;
}

export interface CourseModule {
  title: string;
  slides: Slide[];
}

export interface ExerciseModule {
  title: string;
  exercises: Exercise[];
}

// Physics Course Data
export const physicsData: { [key: string]: CourseModule } = {
  "101": {
    title: "La gravitation universelle - Cours complet",
    slides: [
      {
        title: "Introduction à la gravitation universelle",
        content: "🌍 La gravitation universelle explique l'attraction mutuelle entre tous les corps de l'univers.\n\n🎯 Objectifs du chapitre :\n• Comprendre la loi de Newton\n• Maîtriser les calculs de force gravitationnelle\n• Appliquer aux mouvements planétaires\n• Résoudre des problèmes concrets\n\n📚 Applications pratiques :\n• Satellites artificiels\n• Marées océaniques\n• Trajectoires spatiales\n• Pesanteur terrestre",
        type: "intro"
      },
      {
        title: "Loi de Newton de la gravitation",
        content: "📐 Énoncé de la loi :\n\"Deux corps s'attirent avec une force proportionnelle au produit de leurs masses et inversement proportionnelle au carré de la distance qui les sépare.\"\n\n🧮 Formule mathématique :\nF = G × (m₁ × m₂) / d²\n\nOù :\n• F = force gravitationnelle (N)\n• G = constante gravitationnelle = 6,67 × 10⁻¹¹ N⋅m²/kg²\n• m₁, m₂ = masses des corps (kg)\n• d = distance entre les centres (m)\n\n🔑 Propriétés importantes :\n• Force toujours attractive\n• Réciproque (action-réaction)\n• Diminue avec le carré de la distance\n• Proportionnelle au produit des masses",
        type: "definition"
      },
      {
        title: "La constante gravitationnelle G",
        content: "🔢 Valeur de G :\nG = 6,67 × 10⁻¹¹ N⋅m²⋅kg⁻²\n\n📏 Unités détaillées :\n• N : Newton (kg⋅m⋅s⁻²)\n• m² : mètre carré\n• kg⁻² : par kilogramme carré\n\n🌟 Caractéristiques :\n• Constante universelle fondamentale\n• Très petite valeur (force faible à l'échelle humaine)\n• Mesurée expérimentalement par Cavendish\n• Même valeur partout dans l'univers\n\n💡 Pourquoi G est-elle si petite ?\nCela explique pourquoi nous ne ressentons pas l'attraction entre objets du quotidien !",
        type: "definition"
      },
      {
        title: "Exemple : Force Terre-Lune",
        content: "🌍🌙 Calcul pratique de la force d'attraction\n\n📊 Données :\n• Masse de la Terre : M_T = 5,97 × 10²⁴ kg\n• Masse de la Lune : M_L = 7,35 × 10²² kg\n• Distance Terre-Lune : d = 3,84 × 10⁸ m\n• Constante G = 6,67 × 10⁻¹¹ N⋅m²/kg²\n\n🧮 Calcul détaillé :\nF = G × (M_T × M_L) / d²\nF = 6,67 × 10⁻¹¹ × (5,97 × 10²⁴ × 7,35 × 10²²) / (3,84 × 10⁸)²\nF = 6,67 × 10⁻¹¹ × 4,39 × 10⁴⁷ / 1,47 × 10¹⁷\nF = 1,98 × 10²⁰ N\n\n🎯 Résultat : Cette force énorme (198 millions de trillions de newtons) maintient la Lune en orbite !",
        type: "example"
      },
      {
        title: "Applications de la gravitation",
        content: "🚀 Satellites artificiels :\n• Calcul des vitesses orbitales\n• Période de révolution\n• Altitude optimale selon l'usage\n\n🌊 Phénomène des marées :\n• Influence de la Lune et du Soleil\n• Marées de vive-eau et morte-eau\n• Calcul des coefficients\n\n⚖️ Pesanteur terrestre :\n• g = GM/R² = 9,81 m/s²\n• Variation avec l'altitude\n• Variation géographique\n\n🌌 Astronomie :\n• Lois de Kepler\n• Trajectoires des sondes spatiales\n• Formation des systèmes planétaires",
        type: "summary"
      }
    ]
  },
  "114": {
    title: "Le courant électrique continu - Cours complet",
    slides: [
      {
        title: "Qu'est-ce que le courant électrique ?",
        content: "⚡ Définition du courant électrique :\nLe courant électrique est un déplacement ordonné de charges électriques dans un conducteur.\n\n🔋 Conditions d'existence :\n• Présence d'un générateur (pile, batterie)\n• Circuit fermé\n• Conducteur électrique\n• Porteurs de charge libres\n\n📏 Grandeurs électriques :\n• Intensité : Ampère (A)\n• Charge : Coulomb (C)\n• Tension : Volt (V)\n• Résistance : Ohm (Ω)\n\n🔍 Nature microscopique :\nDans les métaux, ce sont les électrons libres qui se déplacent lentement mais de façon coordonnée.",
        type: "intro"
      },
      {
        title: "Intensité du courant électrique",
        content: "📐 Définition mathématique :\nL'intensité est la quantité de charge qui traverse une section du conducteur par unité de temps.\n\n🧮 Formule : I = Q / t\nOù :\n• I = intensité (A)\n• Q = charge électrique (C)\n• t = temps (s)\n\n🔬 Mesure de l'intensité :\n• Instrument : Ampèremètre\n• Branchement : en série dans le circuit\n• Symbole : A dans un cercle\n\n⚡ Ordres de grandeur courants :\n• LED : 20 mA = 0,020 A\n• Lampe de poche : 0,5 A\n• Fer à repasser : 10 A\n• Foudre : 30 000 A",
        type: "definition"
      },
      {
        title: "La résistance électrique",
        content: "🔧 Définition de la résistance :\nLa résistance caractérise l'opposition qu'offre un matériau au passage du courant électrique.\n\n📐 Loi d'Ohm : U = R × I\nOù :\n• U = tension aux bornes (V)\n• R = résistance (Ω)\n• I = intensité du courant (A)\n\n🌡️ Facteurs influençant la résistance :\n• Nature du matériau (conducteur, isolant)\n• Longueur du conducteur\n• Section du conducteur\n• Température\n\n💡 Applications pratiques :\n• Résistances chauffantes\n• Protection des circuits électroniques\n• Réglage de l'intensité du courant",
        type: "definition"
      },
      {
        title: "Circuits en série et en parallèle",
        content: "🔗 Circuit en série :\n• Même intensité partout : I = I₁ = I₂ = I₃\n• Tensions s'additionnent : U = U₁ + U₂ + U₃\n• Résistances s'additionnent : R_total = R₁ + R₂ + R₃\n\n🔀 Circuit en parallèle (dérivation) :\n• Même tension aux bornes : U = U₁ = U₂ = U₃\n• Intensités s'additionnent : I = I₁ + I₂ + I₃\n• Résistance totale : 1/R_total = 1/R₁ + 1/R₂ + 1/R₃\n\n🏠 Applications domestiques :\n• Installations électriques (parallèle)\n• Guirlandes de Noël (série)\n• Circuits électroniques (mixte)",
        type: "example"
      },
      {
        title: "Puissance et énergie électriques",
        content: "⚡ Puissance électrique :\nP = U × I = R × I² = U²/R\n\n📊 Unités :\n• Puissance : Watt (W)\n• Énergie : Joule (J) ou kilowatt-heure (kWh)\n• 1 kWh = 3,6 × 10⁶ J\n\n💡 Exemples de puissances :\n• LED : 5 W\n• Ampoule classique : 60 W\n• Réfrigérateur : 150 W\n• Four électrique : 2000 W\n\n💰 Calcul de consommation :\nÉnergie = Puissance × Temps\nCoût = Énergie × Prix du kWh",
        type: "summary"
      }
    ]
  },
  "115": {
    title: "Mécanique - Forces et mouvement",
    slides: [
      {
        title: "Introduction à la mécanique",
        content: "🔬 La mécanique étudie le mouvement des corps et les forces qui les causent.\n\n🎯 Objectifs du chapitre :\n• Comprendre la notion de force\n• Analyser différents types de mouvements\n• Appliquer les lois de Newton\n• Résoudre des problèmes pratiques\n\n🌍 Domaines d'application :\n• Transport (voitures, avions, trains)\n• Sport (trajectoires, performances)\n• Ingénierie (structures, machines)\n• Espace (satellites, sondes)",
        type: "intro"
      },
      {
        title: "Les forces en physique",
        content: "💪 Définition d'une force :\nUne force est une action capable de modifier l'état de repos ou de mouvement d'un corps.\n\n📐 Caractéristiques d'une force :\n• Point d'application\n• Direction et sens\n• Intensité (mesurée en Newton)\n• Nature vectorielle\n\n⚖️ Types de forces principales :\n• Force de pesanteur : P = mg\n• Force de frottement\n• Force normale (réaction du support)\n• Forces de contact\n• Forces à distance (gravitationnelle, électromagnétique)\n\n📏 Unité : le Newton (N)\n1 N = 1 kg⋅m⋅s⁻²",
        type: "definition"
      },
      {
        title: "Les trois lois de Newton",
        content: "1️⃣ Première loi (Principe d'inertie) :\n\"Tout corps persiste dans son état de repos ou de mouvement rectiligne uniforme, sauf si une force extérieure agit sur lui.\"\n\n2️⃣ Deuxième loi (Loi fondamentale) :\n\"La somme des forces appliquées à un corps est égale au produit de sa masse par son accélération.\"\nΣF = ma\n\n3️⃣ Troisième loi (Action-Réaction) :\n\"À toute action correspond une réaction égale et opposée.\"\nF_A→B = -F_B→A\n\n🎯 Applications :\n• Analyse des mouvements\n• Conception de véhicules\n• Prédiction des trajectoires\n• Calculs de structures",
        type: "definition"
      },
      {
        title: "Types de mouvements",
        content: "📍 Mouvement rectiligne uniforme (MRU) :\n• Vitesse constante : v = constante\n• Accélération nulle : a = 0\n• Position : x = x₀ + vt\n\n🚗 Mouvement rectiligne uniformément varié (MRUV) :\n• Accélération constante : a = constante\n• Vitesse : v = v₀ + at\n• Position : x = x₀ + v₀t + ½at²\n\n🎾 Mouvement de projectile :\n• Composition de deux mouvements\n• Horizontal : uniforme\n• Vertical : uniformément accéléré\n\n🔄 Mouvement circulaire :\n• Uniforme : vitesse angulaire constante\n• Accélération centripète : a = v²/r",
        type: "example"
      },
      {
        title: "Applications pratiques",
        content: "🚗 Sécurité routière :\n• Distance de freinage\n• Ceintures de sécurité\n• Airbags\n\n🚀 Exploration spatiale :\n• Mise en orbite\n• Trajectoires interplanétaires\n• Rentrée atmosphérique\n\n🏗️ Génie civil :\n• Calcul des structures\n• Résistance des matériaux\n• Stabilité des constructions\n\n⚽ Sport :\n• Trajectoires des projectiles\n• Optimisation des performances\n• Analyse biomécanique",
        type: "summary"
      }
    ]
  }
};

// Physics Exercises Data
export const physicsExercises: { [key: string]: ExerciseModule } = {
  "101": {
    title: "Exercices - Gravitation universelle",
    exercises: [
      {
        id: 1,
        title: "Force d'attraction Terre-Lune",
        difficulty: "Moyen",
        duration: "15 min",
        points: 20,
        question: "Calculez la force gravitationnelle entre la Terre (M = 5,97 × 10²⁴ kg) et la Lune (m = 7,35 × 10²² kg), sachant que la distance Terre-Lune est de 384 400 km.\n\nDonnée : G = 6,67 × 10⁻¹¹ N⋅m²/kg²",
        solution: "Étapes de résolution :\n\n1) Conversion des unités :\nd = 384 400 km = 3,844 × 10⁸ m\n\n2) Application de la formule :\nF = G × (M × m) / d²\n\n3) Calcul numérique :\nF = 6,67 × 10⁻¹¹ × (5,97 × 10²⁴ × 7,35 × 10²²) / (3,844 × 10⁸)²\nF = 6,67 × 10⁻¹¹ × 4,39 × 10⁴⁷ / 1,48 × 10¹⁷\nF = 1,98 × 10²⁰ N\n\nRéponse : La force gravitationnelle Terre-Lune est de 1,98 × 10²⁰ N"
      },
      {
        id: 2,
        title: "Pesanteur sur différentes planètes",
        difficulty: "Facile",
        duration: "10 min",
        points: 15,
        question: "Sur Mars, la pesanteur est g_Mars = 3,71 m/s². Si votre masse est de 70 kg :\na) Quel est votre poids sur Terre ?\nb) Quel serait votre poids sur Mars ?\nc) Votre masse change-t-elle ?",
        solution: "Solution complète :\n\na) Poids sur Terre :\nP_Terre = m × g_Terre = 70 × 9,81 = 686,7 N\n\nb) Poids sur Mars :\nP_Mars = m × g_Mars = 70 × 3,71 = 259,7 N\n\nc) La masse reste identique : 70 kg\nLa masse est une propriété intrinsèque du corps, elle ne dépend pas de la planète.\n\nConclusion : Vous pèseriez 2,6 fois moins sur Mars !"
      },
      {
        id: 3,
        title: "Satellite géostationnaire",
        difficulty: "Difficile",
        duration: "25 min",
        points: 30,
        question: "Un satellite géostationnaire orbite à 35 786 km d'altitude au-dessus de l'équateur.\na) Calculez le rayon de son orbite\nb) Calculez sa vitesse orbitale\nc) Vérifiez que sa période est bien de 24h\n\nDonnées : R_Terre = 6 371 km, M_Terre = 5,97 × 10²⁴ kg, G = 6,67 × 10⁻¹¹ N⋅m²/kg²",
        solution: "Solution détaillée :\n\na) Rayon orbital :\nr = R_Terre + altitude = 6 371 + 35 786 = 42 157 km = 4,22 × 10⁷ m\n\nb) Vitesse orbitale :\nPour un mouvement circulaire : F_grav = F_centripète\nGMm/r² = mv²/r\nDonc : v = √(GM/r)\nv = √(6,67 × 10⁻¹¹ × 5,97 × 10²⁴ / 4,22 × 10⁷)\nv = √(9,43 × 10⁶) = 3 070 m/s = 3,07 km/s\n\nc) Période :\nT = 2πr/v = 2π × 4,22 × 10⁷ / 3 070 = 86 400 s = 24 h ✓\n\nLe satellite parcourt son orbite en exactement 24h, restant fixe au-dessus d'un point de l'équateur."
      }
    ]
  },
  "114": {
    title: "Exercices - Courant électrique",
    exercises: [
      {
        id: 4,
        title: "Calcul d'intensité du courant",
        difficulty: "Facile",
        duration: "8 min",
        points: 10,
        question: "Une charge électrique de 240 C traverse la section d'un conducteur en 4 minutes.\na) Calculez l'intensité du courant\nb) Combien d'électrons traversent la section par seconde ?\n\nDonnée : charge élémentaire e = 1,6 × 10⁻¹⁹ C",
        solution: "Solution :\n\na) Calcul de l'intensité :\nDonnées : Q = 240 C, t = 4 min = 240 s\nI = Q/t = 240/240 = 1,0 A\n\nb) Nombre d'électrons par seconde :\nCharge par seconde = I = 1,0 C/s\nNombre d'électrons/s = 1,0 / (1,6 × 10⁻¹⁹) = 6,25 × 10¹⁸ électrons/s\n\nRéponses :\na) I = 1,0 A\nb) 6,25 × 10¹⁸ électrons passent chaque seconde"
      },
      {
        id: 5,
        title: "Application de la loi d'Ohm",
        difficulty: "Moyen",
        duration: "12 min",
        points: 18,
        question: "Un circuit simple comprend une pile de 9 V et une résistance de 150 Ω.\na) Calculez l'intensité du courant\nb) Quelle est la puissance dissipée par la résistance ?\nc) Quelle énergie est consommée en 30 minutes ?",
        solution: "Solution complète :\n\na) Intensité du courant :\nLoi d'Ohm : U = R × I\nDonc : I = U/R = 9/150 = 0,06 A = 60 mA\n\nb) Puissance dissipée :\nP = U × I = 9 × 0,06 = 0,54 W\nou P = U²/R = 9²/150 = 81/150 = 0,54 W\n\nc) Énergie consommée en 30 min :\nt = 30 min = 0,5 h\nE = P × t = 0,54 × 0,5 = 0,27 Wh = 972 J\n\nRéponses :\na) I = 60 mA\nb) P = 0,54 W\nc) E = 0,27 Wh"
      },
      {
        id: 6,
        title: "Résistances en série et parallèle",
        difficulty: "Difficile",
        duration: "20 min",
        points: 25,
        question: "Soit un circuit avec une pile de 12 V et trois résistances : R₁ = 20 Ω, R₂ = 30 Ω, R₃ = 60 Ω.\na) Calculez la résistance équivalente si elles sont en série\nb) Calculez la résistance équivalente si elles sont en parallèle\nc) Dans quel cas l'intensité totale est-elle la plus grande ?",
        solution: "Solution détaillée :\n\na) Résistances en série :\nR_série = R₁ + R₂ + R₃ = 20 + 30 + 60 = 110 Ω\nI_série = U/R_série = 12/110 = 0,109 A\n\nb) Résistances en parallèle :\n1/R_parallèle = 1/R₁ + 1/R₂ + 1/R₃\n1/R_parallèle = 1/20 + 1/30 + 1/60 = 3/60 + 2/60 + 1/60 = 6/60 = 1/10\nR_parallèle = 10 Ω\nI_parallèle = U/R_parallèle = 12/10 = 1,2 A\n\nc) Comparaison :\nI_parallèle (1,2 A) > I_série (0,109 A)\n\nL'intensité est plus grande en parallèle car la résistance équivalente est plus faible.\n\nRéponses :\na) R_série = 110 Ω\nb) R_parallèle = 10 Ω\nc) L'intensité est maximale en parallèle"
      }
    ]
  },
  "115": {
    title: "Exercices - Mécanique",
    exercises: [
      {
        id: 7,
        title: "Application de F = ma",
        difficulty: "Moyen",
        duration: "15 min",
        points: 20,
        question: "Une voiture de masse 1200 kg démarre et atteint 100 km/h en 8,0 s.\na) Calculez son accélération\nb) Quelle est la force motrice (supposée constante) ?\nc) Quelle distance a-t-elle parcourue pendant l'accélération ?",
        solution: "Solution complète :\n\na) Calcul de l'accélération :\nConversion : v = 100 km/h = 100/3,6 = 27,8 m/s\na = Δv/Δt = (27,8 - 0)/8,0 = 3,48 m/s²\n\nb) Force motrice :\nDeuxième loi de Newton : F = ma\nF = 1200 × 3,48 = 4 176 N ≈ 4,18 kN\n\nc) Distance parcourue :\nMRUV avec v₀ = 0 :\nd = ½at² = ½ × 3,48 × 8,0² = ½ × 3,48 × 64 = 111 m\n\nRéponses :\na) a = 3,48 m/s²\nb) F = 4,18 kN\nc) d = 111 m"
      },
      {
        id: 8,
        title: "Chute libre",
        difficulty: "Moyen",
        duration: "12 min",
        points: 18,
        question: "On laisse tomber une balle d'une hauteur de 20 m.\na) Combien de temps met-elle pour toucher le sol ?\nb) Quelle est sa vitesse juste avant l'impact ?\nc) Si on la lance vers le bas avec une vitesse de 5 m/s, que deviennent les réponses précédentes ?",
        solution: "Solution :\n\na) Chute libre depuis le repos :\nh = ½gt² donc t = √(2h/g) = √(2×20/9,81) = √(4,08) = 2,02 s\n\nb) Vitesse avant impact :\nv = gt = 9,81 × 2,02 = 19,8 m/s\n\nc) Avec vitesse initiale v₀ = 5 m/s vers le bas :\nPosition : h = h₀ - v₀t - ½gt²\n0 = 20 - 5t - ½ × 9,81 × t²\n4,905t² + 5t - 20 = 0\n\nRésolution : t = (-5 + √(25 + 4×4,905×20))/(2×4,905)\nt = (-5 + √417,4)/9,81 = (-5 + 20,43)/9,81 = 1,57 s\n\nVitesse finale : v = v₀ + gt = 5 + 9,81×1,57 = 20,4 m/s\n\nRéponses :\na) t = 2,02 s\nb) v = 19,8 m/s\nc) t = 1,57 s, v = 20,4 m/s"
      }
    ]
  }
};

// Arabic Course Data
export const arabicData: { [key: string]: CourseModule } = {
  "401": {
    title: "الإملاء - درس شامل",
    slides: [
      {
        title: "مقدمة في علم الإملاء",
        content: "📝 الإملاء هو فن كتابة الكلمات العربية بطريقة صحيحة وفق قواعد محددة.\n\n🎯 أهداف دراسة الإملاء:\n• إتقان الكتابة الصحيحة\n• تجنب الأخطاء الشائعة\n• فهم قواعد الرسم العربي\n• تحسين مهارات التعبير الكتابي\n\n📚 محاور الدرس:\n• الهمزة بأنواعها\n• التاء المربوطة والمفتوحة\n• الألف اللينة\n• علامات الترقيم\n\n✨ الإملاء الصحيح أساس التواصل الفعال!",
        type: "intro"
      },
      {
        title: "الهمزة في أول الكلمة",
        content: "🔤 نوعا الهمزة في أول الكلمة:\n\n✅ همزة القطع (ء):\n• تُكتب وتُلفظ في جميع الأحوال\n• أمثلة: أحمد، إبراهيم، أسد، إنسان، أمل\n• تأتي في:\n  - الأسماء (إلا العشرة المسموعة)\n  - الأفعال الثلاثية وأمرها\n  - الحروف\n\n❌ همزة الوصل:\n• تُكتب ولا تُلفظ في درج الكلام\n• أمثلة: ابن، ابنة، اسم، استعمال، انطلاق\n• تأتي في:\n  - الأسماء العشرة المسموعة\n  - أفعال الخماسي والسداسي وأمرهما\n  - (ال) التعريف\n\n🔍 طريقة التمييز:\nضع حرف 'و' أو 'ف' قبل الكلمة، إذا لُفظت الهمزة فهي قطع، وإلا فهي وصل.",
        type: "definition"
      },
      {
        title: "التاء المربوطة والتاء المفتوحة",
        content: "🅃 التاء المربوطة (ة):\n• تُلفظ هاءً عند الوقف عليها\n• تُلفظ تاءً عند الوصل\n• أمثلة: مدرسة، كتابة، حديقة، طالبة\n• تأتي في:\n  - نهاية الأسماء المؤنثة\n  - جمع التكسير غير المنتهي بتاء\n  - بعض الظروف والصفات\n\n🅃 التاء المفتوحة (ت):\n• تُلفظ تاءً دائماً (وقفاً ووصلاً)\n• أمثلة: بيت، قلت، كتبت، أخت\n• تأتي في:\n  - نهاية الأفعال\n  - الأسماء المفردة المذكرة\n  - جمع المؤنث السالم\n  - ضمائر المتكلم\n\n📋 قاعدة سهلة:\nإذا لفظت 'ها' عند الوقف → تاء مربوطة (ة)\nإذا لفظت 'ت' عند الوقف → تاء مفتوحة (ت)",
        type: "definition"
      },
      {
        title: "الألف اللينة (المقصورة والممدودة)",
        content: "📏 الألف اللينة تُكتب بصورتين: ألف ممدودة (ا) أو مقصورة (ى)\n\n📝 في آخر الأسماء:\n• الثلاثية: تُكتب ى إذا كان أصلها ياء (فتى، هدى)\n• الثلاثية: تُكتب ا إذا كان أصلها واو (عصا، ذرا)\n• الرباعية فأكثر: تُكتب ى (مستشفى، ذكرى، مصطفى)\n• الأعجمية: تُكتب ى (موسى، عيسى، كسرى)\n\n🔤 في آخر الأفعال:\n• الثلاثية: حسب الأصل (رمى، سعى، جرى) / (غزا، دعا)\n• غير الثلاثية: تُكتب ى دائماً (استدعى، تولى، اشترى)\n\n📚 في آخر الحروف:\n• أغلبها بالألف المقصورة: إلى، على، حتى، بلى\n• استثناءات: ما، لا، كلا، هلا\n\n⭐ كلمات شاذة:\n• الضمائر: أنا، هنا\n• أدوات الاستفهام: متى، أين، أنى",
        type: "definition"
      },
      {
        title: "قواعد إملائية إضافية",
        content: "🔢 كتابة الأعداد:\n• الأعداد من 1-10: تُكتب بالحروف\n• الأعداد الكبيرة: يُفضل استخدام الأرقام\n• التواريخ: تُكتب بالأرقام عادة\n\n📍 علامات الترقيم:\n• الفاصلة (،): بين الجمل المترابطة\n• النقطة (.): نهاية الجملة التامة\n• علامة الاستفهام (؟): نهاية السؤال\n• علامة التعجب (!): للتعجب والانفعال\n• الفاصلة المنقوطة (؛): بين الجمل المتوسطة الطول\n\n💡 نصائح للإملاء الصحيح:\n• اقرأ كثيراً لتعتاد الرسم الصحيح\n• تدرب على النصوص الإملائية\n• راجع القواعد بانتظام\n• استخدم القواميس عند الشك\n\n✨ الإتقان يأتي بالممارسة المستمرة!",
        type: "summary"
      }
    ]
  },
  "407": {
    title: "أسماء الآلة والزمان والمكان - درس متكامل",
    slides: [
      {
        title: "الأسماء المشتقة - تعريف وأقسام",
        content: "📚 الأسماء المشتقة هي أسماء تُشتق من الأفعال لتدل على معانٍ مختلفة.\n\n🔧 اسم الآلة:\nيدل على الأداة أو الوسيلة التي يُعمل بها الفعل\n\n⏰ اسم الزمان:\nيدل على زمن حدوث الفعل\n\n📍 اسم المكان:\nيدل على مكان حدوث الفعل\n\n🎯 أهمية دراستها:\n• فهم تركيب اللغة العربية\n• إثراء المفردات\n• التمييز بين المعاني\n• تحسين الكتابة والتعبير\n\n💡 ملاحظة: اسما الزمان والمكان لهما نفس الأوزان، والسياق يحدد المعنى.",
        type: "intro"
      },
      {
        title: "أوزان اسم الآلة",
        content: "⚙️ الأوزان القياسية التراثية:\n\n• مِفْعَال: مِفتاح، مِنشار، مِعول، مِطرقة\n• مِفْعَل: مِقود، مِبرد، مِقص، مِشرط\n• مِفْعَلة: مِكنسة، مِجرفة، مِلقطة، مِطحنة\n• فاعول: ساطور، خاتون، صاروخ\n• فاعولة: ناقوس، طاحونة\n\n🔨 الأوزان الحديثة (مستحدثة):\n• فَعَّالة: غسّالة، ثلّاجة، طبّاعة، دبّاسة\n• مِفْعال: مِذياع، مِلقاط، مِقياس\n• فاعِلة: طابعة، حاسبة، ناسخة\n• مُفَعِّل: مُدفئ، مُبرد، مُنظف\n\n💡 أمثلة من الجذر الواحد:\n• من (كتب): مِكتب (مكان)، مِكتبة (مجموعة كتب)\n• من (طبع): مَطبع (مكان)، طابعة (آلة)",
        type: "definition"
      },
      {
        title: "أوزان اسمي الزمان والمكان",
        content: "📐 من الفعل الثلاثي:\n\n🟢 إذا كان مضارعه مفتوح أو مضموم العين:\nالوزن: مَفْعَل\nأمثلة:\n• لعب - يلعب: مَلعب (مكان اللعب)\n• خرج - يخرج: مَخرج (مكان أو زمان الخروج)\n• طلع - يطلع: مَطلع (زمن الطلوع)\n\n🔴 إذا كان مضارعه مكسور العين:\nالوزن: مَفْعِل\nأمثلة:\n• نزل - ينزل: مَنزِل (مكان النزول)\n• شرب - يشرب: مَشرِب (مكان أو زمان الشرب)\n• لجأ - يلجأ: مَلجِأ (مكان اللجوء)\n\n⚡ من غير الثلاثي:\nعلى وزن اسم المفعول (بإبدال حرف المضارعة ميماً مضمومة)\nأمثلة:\n• استخرج: مُستخرَج\n• انطلق: مُنطلَق\n• اجتمع: مُجتمَع",
        type: "definition"
      },
      {
        title: "أمثلة تطبيقية وتمارين",
        content: "🎯 تمارين تطبيقية:\n\n1️⃣ حدد نوع الاسم المشتق:\n• مِطرقة → اسم آلة (وزن مِفْعَلة)\n• مَدرسة → اسم مكان (وزن مَفْعَلة)\n• مَطلع الشمس → اسم زمان (وزن مَفْعَل)\n• حاسوب → اسم آلة (وزن فاعول حديث)\n\n2️⃣ اشتق الأسماء المطلوبة:\nمن (قرأ):\n• اسم مكان: مَقْرَأ (مكان القراءة)\n• اسم زمان: مَقْرَأ (وقت القراءة)\n• اسم آلة: لا يوجد (الفعل لا يحتاج آلة)\n\nمن (كتب):\n• اسم مكان: مَكْتَب\n• اسم آلة: مِكتبة (مجموعة الكتب)\n\n💡 فوائد نحوية:\n• السياق يحدد المعنى بين اسمي الزمان والمكان\n• اسم الآلة يدل على أداة محسوسة\n• الأوزان الحديثة تواكب التطور التقني",
        type: "example"
      },
      {
        title: "خلاصة وتطبيقات",
        content: "📋 ملخص القواعد:\n\n🔧 اسم الآلة:\n• الأوزان القديمة: مِفْعال، مِفْعَل، مِفْعَلة، فاعول\n• الأوزان الحديثة: فعّالة، فاعِلة، مُفَعِّل\n\n⏰📍 اسما الزمان والمكان:\n• من الثلاثي: مَفْعَل (مفتوح/مضموم العين) أو مَفْعِل (مكسور العين)\n• من غير الثلاثي: على وزن اسم المفعول\n\n🎯 تطبيقات عملية:\n• في التكنولوجيا: حاسوب، طابعة، مِذياع\n• في التعليم: مدرسة، مكتبة، مختبر\n• في الطب: مِشرط، مِحقنة، مُستشفى\n• في الزراعة: مَزرعة، مِحراث، مُطحنة\n\n✨ اللغة العربية تتطور وتستوعب المصطلحات الحديثة بقواعدها الأصيلة!",
        type: "summary"
      }
    ]
  },
  "410": {
    title: "النحو - الجملة الاسمية والفعلية",
    slides: [
      {
        title: "أقسام الكلام في العربية",
        content: "📝 أقسام الكلام الثلاثة:\n\n1️⃣ الاسم:\n• يدل على معنى في نفسه غير مقترن بزمان\n• علاماته: التنوين، النداء، (ال)، الجر\n• أمثلة: محمد، بيت، كتاب، جميل\n\n2️⃣ الفعل:\n• يدل على معنى في نفسه مقترن بزمان\n• أقسامه: ماض، مضارع، أمر\n• أمثلة: كتب، يكتب، اكتب\n\n3️⃣ الحرف:\n• لا يدل على معنى إلا مع غيره\n• أمثلة: في، على، إن، لكن\n\n🏠 الجملة في العربية:\n• اسمية: تبدأ بالاسم\n• فعلية: تبدأ بالفعل\n\n💡 الهدف: فهم تركيب الجملة العربية وإعرابها الصحيح.",
        type: "intro"
      },
      {
        title: "الجملة الاسمية - التعريف والأركان",
        content: "🏠 تعريف الجملة الاسمية:\nهي الجملة التي تبدأ باسم وتتكون من ركنين أساسيين: المبتدأ والخبر.\n\n👑 المبتدأ:\n• اسم مرفوع يُخبر عنه\n• يأتي في مقدمة الجملة غالباً\n• يكون معرفة في الأصل\n• أمثلة: الطالبُ، محمدٌ، هذا، الكتابُ\n\n📢 الخبر:\n• ما يُخبر به عن المبتدأ\n• مرفوع مثل المبتدأ\n• يُتمم معنى الجملة\n• أنواعه: مفرد، جملة، شبه جملة\n\n📝 أمثلة:\n• الطالبُ مجتهدٌ (مبتدأ + خبر مفرد)\n• محمدٌ يدرسُ (مبتدأ + خبر جملة فعلية)\n• الكتابُ على الطاولة (مبتدأ + خبر شبه جملة)\n\n⚡ الخصائص:\n• تفيد الثبوت والدوام نسبياً\n• أسلوبها أكثر رسمية\n• تُستخدم في الوصف والتقرير",
        type: "definition"
      },
      {
        title: "أنواع الخبر في الجملة الاسمية",
        content: "📋 الخبر المفرد:\n• كلمة واحدة (ليست جملة ولا شبه جملة)\n• أمثلة: الطالبُ مجتهدٌ، الجوُّ جميلٌ، الكتابُ مفيدٌ\n\n📖 الخبر الجملة:\n• جملة فعلية: الطالبُ يدرسُ، الشمسُ تشرقُ\n• جملة اسمية: الطالبُ خلقُهُ حسنٌ، البيتُ نوافذُهُ واسعةٌ\n\n📍 الخبر شبه الجملة:\n• شبه جملة ظرفية: الكتابُ فوقَ الطاولة، الطلابُ في الفصل\n• شبه جملة جارة ومجرورة: المعلمُ في المدرسة، الطائرُ على الشجرة\n\n🔗 الرابط في الخبر الجملة:\n• ضمير يعود على المبتدأ\n• مثال: الطالبُ يدرسُ (الضمير المستتر في 'يدرس')\n• مثال: الطالبُ أخوه طبيب (أخوه: الهاء ضمير يعود على الطالب)\n\n💡 فائدة: الخبر الجملة وشبه الجملة يحتاجان رابط يعود على المبتدأ.",
        type: "definition"
      },
      {
        title: "الجملة الفعلية - التعريف والأركان",
        content: "🏃 تعريف الجملة الفعلية:\nهي الجملة التي تبدأ بفعل وتتكون من فعل وفاعل، وقد تحتوي على مفعول به.\n\n⚡ الفعل:\n• يدل على حدث مقترن بزمان\n• أنواعه: ماض، مضارع، أمر\n• أمثلة: كتبَ، يكتبُ، اكتبْ\n\n👤 الفاعل:\n• من قام بالفعل أو اتصف به\n• مرفوع دائماً\n• يأتي بعد الفعل\n• أمثلة: كتبَ الطالبُ، تشرقُ الشمسُ\n\n🎯 المفعول به (إن وُجد):\n• من وقع عليه فعل الفاعل\n• منصوب دائماً\n• مثال: قرأ الطالبُ الكتابَ\n\n📝 أمثلة متنوعة:\n• جاء الطلابُ (فعل + فاعل)\n• درس محمدٌ الدرسَ (فعل + فاعل + مفعول)\n• تطير الطيورُ في السماء (فعل + فاعل + جار ومجرور)\n\n✨ الخصائص:\n• تفيد التجدد والحدوث\n• أسلوبها أكثر حيوية\n• تُستخدم في السرد والأحداث",
        type: "definition"
      },
      {
        title: "المقارنة والإعراب",
        content: "⚖️ مقارنة بين الجملتين:\n\n🏠 الجملة الاسمية:\n• التركيب: مبتدأ + خبر\n• المعنى: الثبوت والدوام\n• الاستعمال: الوصف والحقائق\n• مثال: العلمُ نورٌ\n\n🏃 الجملة الفعلية:\n• التركيب: فعل + فاعل (+ مفعول)\n• المعنى: التجدد والحدوث\n• الاستعمال: الأحداث والأعمال\n• مثال: ينيرُ العلمُ الطريقَ\n\n📏 علامات الإعراب:\n• الرفع: الضمة، الواو (جمع مذكر)، الألف (مثنى)\n• النصب: الفتحة، الياء (مثنى وجمع مذكر)، الكسرة (جمع مؤنث)\n• الجر: الكسرة، الياء (مثنى وجمع مذكر)\n\n💡 نصائح للإعراب:\n• حدد نوع الجملة أولاً\n• ابحث عن الأركان الأساسية\n• طبق قواعد الإعراب حسب الموقع\n• انتبه لعلامات الإعراب الفرعية\n\n🎯 التطبيق العملي:\n• اقرأ النص بتأنٍ\n• حلل كل جملة\n• حدد وظيفة كل كلمة\n• أعرب حسب القواعد",
        type: "summary"
      }
    ]
  }
};

// Arabic Exercises Data  
export const arabicExercises: { [key: string]: ExerciseModule } = {
  "401": {
    title: "تمارين - الإملاء",
    exercises: [
      {
        id: 1,
        title: "تمييز همزة القطع من همزة الوصل",
        difficulty: "Moyen",
        duration: "15 دقيقة",
        points: 20,
        question: "حدد نوع الهمزة في الكلمات التالية وعلل إجابتك:\n\n1. أحمد\n2. ابن\n3. إبراهيم  \n4. اسم\n5. أسد\n6. استعمال\n7. أكل\n8. انطلاق",
        solution: "الحل التفصيلي:\n\n1. أحمد → همزة قطع (اسم علم)\n2. ابن → همزة وصل (من الأسماء المسموعة)\n3. إبراهيم → همزة قطع (اسم علم)\n4. اسم → همزة وصل (من الأسماء المسموعة)\n5. أسد → همزة قطع (اسم)\n6. استعمال → همزة وصل (فعل سداسي)\n7. أكل → همزة قطع (فعل ثلاثي)\n8. انطلاق → همزة وصل (مصدر خماسي)\n\nالقاعدة: ضع 'و' أو 'ف' قبل الكلمة، إذا لُفظت الهمزة فهي قطع، وإلا فهي وصل."
      },
      {
        id: 2,
        title: "التاء المربوطة والتاء المفتوحة",
        difficulty: "Facile",
        duration: "10 دقائق",
        points: 15,
        question: "اختر الإملاء الصحيح مع التعليل:\n\n1. مدرسة / مدرست\n2. بيت / بيته\n3. كتبت / كتبة\n4. طالبة / طالبت\n5. أخت / أخة",
        solution: "الحل مع التعليل:\n\n1. مدرسة ✓ (تُلفظ هاءً عند الوقف)\n2. بيت ✓ (اسم مذكر، تُلفظ تاءً دائماً)\n3. كتبت ✓ (فعل ماض، تُلفظ تاءً دائماً)\n4. طالبة ✓ (اسم مؤنث، تُلفظ هاءً عند الوقف)\n5. أخت ✓ (اسم مذكر، تُلفظ تاءً دائماً)\n\nالقاعدة: إذا لُفظت هاءً عند الوقف → تاء مربوطة (ة)\nإذا لُفظت تاءً عند الوقف → تاء مفتوحة (ت)"
      },
      {
        id: 3,
        title: "الألف اللينة",
        difficulty: "Difficile",
        duration: "20 دقيقة",
        points: 25,
        question: "اكتب الكلمات التالية بالإملاء الصحيح مع بيان السبب:\n\n1. هد... (من الهداية)\n2. فت... (الشاب)\n3. مستشف... (المكان)\n4. موس... (النبي)\n5. دع... (الفعل)\n6. رم... (الفعل)\n7. إل... (الحرف)\n8. أن... (الضمير)",
        solution: "الحل مع التعليل:\n\n1. هدى → ثلاثي أصله ياء\n2. فتى → ثلاثي أصله ياء\n3. مستشفى → رباعي فأكثر\n4. موسى → اسم أعجمي\n5. دعا → ثلاثي أصله واو\n6. رمى → ثلاثي أصله ياء\n7. إلى → حرف ينتهي بالألف المقصورة\n8. أنا → ضمير شاذ بالألف الممدودة\n\nالقواعد:\n• الثلاثي حسب أصل الألف (واو→ا، ياء→ى)\n• الرباعي فأكثر → ى\n• الأعجمية → ى\n• الضمائر شاذة → ا"
      }
    ]
  },
  "407": {
    title: "تمارين - أسماء الآلة والزمان والمكان",
    exercises: [
      {
        id: 4,
        title: "تحديد نوع الاسم المشتق",
        difficulty: "Moyen",
        duration: "15 دقيقة",
        points: 20,
        question: "حدد نوع كل اسم مشتق مما يأتي (آلة، زمان، مكان) مع ذكر الوزن:\n\n1. مِفتاح\n2. مَدرسة\n3. مَطلِع الفجر\n4. مِقص\n5. مَلعب\n6. مُستشفى\n7. طابعة\n8. مَشرِب",
        solution: "الحل التفصيلي:\n\n1. مِفتاح → اسم آلة (وزن مِفْعال)\n2. مَدرسة → اسم مكان (وزن مَفْعَلة)\n3. مَطلِع الفجر → اسم زمان (وزن مَفْعِل)\n4. مِقص → اسم آلة (وزن مِفْعَل)\n5. مَلعب → اسم مكان (وزن مَفْعَل)\n6. مُستشفى → اسم مكان (من غير الثلاثي)\n7. طابعة → اسم آلة (وزن فاعِلة حديث)\n8. مَشرِب → اسم مكان أو زمان (وزن مَفْعِل)\n\nملاحظة: اسما الزمان والمكان لهما نفس الأوزان، والسياق يحدد المعنى."
      },
      {
        id: 5,
        title: "اشتقاق الأسماء",
        difficulty: "Difficile",
        duration: "20 دقيقة",
        points: 25,
        question: "اشتق من الأفعال التالية ما هو مطلوب:\n\nمن (كتب):\n• اسم مكان\n• اسم آلة (إن أمكن)\n\nمن (لعب):\n• اسم مكان\n• اسم زمان\n\nمن (اجتمع):\n• اسم مكان\n• اسم زمان",
        solution: "الحل:\n\nمن (كتب) - يكتُب (مضموم العين):\n• اسم مكان: مَكْتَب (وزن مَفْعَل)\n• اسم آلة: لا يوجد قياسي، لكن يمكن: مِكتبة (مجموعة كتب)\n\nمن (لعب) - يلعَب (مفتوح العين):\n• اسم مكان: مَلْعَب (وزن مَفْعَل)\n• اسم زمان: مَلْعَب (نفس الوزن، السياق يحدد)\n\nمن (اجتمع) - يجتمع (غير ثلاثي):\n• اسم مكان: مُجْتَمَع (على وزن اسم المفعول)\n• اسم زمان: مُجْتَمَع (نفس الوزن، السياق يحدد)\n\nالقاعدة: من غير الثلاثي نأتي بصيغة اسم المفعول"
      }
    ]
  },
  "410": {
    title: "تمارين - النحو",
    exercises: [
      {
        id: 6,
        title: "تمييز الجمل الاسمية والفعلية",
        difficulty: "Facile",
        duration: "10 دقائق",
        points: 15,
        question: "حدد نوع كل جملة (اسمية أم فعلية) واذكر أركانها:\n\n1. الطالب مجتهد\n2. درس محمد الدرس\n3. الكتاب على الطاولة\n4. تشرق الشمس صباحاً\n5. العلم نور\n6. كتب الطلاب الواجب",
        solution: "الحل:\n\n1. الطالب مجتهد → جملة اسمية\n   المبتدأ: الطالب، الخبر: مجتهد (مفرد)\n\n2. درس محمد الدرس → جملة فعلية\n   الفعل: درس، الفاعل: محمد، المفعول: الدرس\n\n3. الكتاب على الطاولة → جملة اسمية\n   المبتدأ: الكتاب، الخبر: على الطاولة (شبه جملة)\n\n4. تشرق الشمس صباحاً → جملة فعلية\n   الفعل: تشرق، الفاعل: الشمس، الظرف: صباحاً\n\n5. العلم نور → جملة اسمية\n   المبتدأ: العلم، الخبر: نور (مفرد)\n\n6. كتب الطلاب الواجب → جملة فعلية\n   الفعل: كتب، الفاعل: الطلاب، المفعول: الواجب"
      },
      {
        id: 7,
        title: "إعراب الجمل",
        difficulty: "Difficile",
        duration: "25 دقيقة",
        points: 30,
        question: "أعرب الجمل التالية إعراباً كاملاً:\n\n1. الطلاب يدرسون بجد\n2. قرأت البنت القصة\n3. المعلم في الفصل",
        solution: "الإعراب الكامل:\n\n1. الطلاب يدرسون بجد:\n• الطلاب: مبتدأ مرفوع وعلامة رفعه الضمة\n• يدرسون: فعل مضارع مرفوع وعلامة رفعه ثبوت النون، والواو ضمير فاعل، والجملة الفعلية في محل رفع خبر المبتدأ\n• بجد: الباء حرف جر، جد اسم مجرور وعلامة جره الكسرة\n\n2. قرأت البنت القصة:\n• قرأت: فعل ماض مبني على الفتح، والتاء ضمير فاعل\n• البنت: بدل مرفوع وعلامة رفعه الضمة\n• القصة: مفعول به منصوب وعلامة نصبه الفتحة\n\n3. المعلم في الفصل:\n• المعلم: مبتدأ مرفوع وعلامة رفعه الضمة\n• في الفصل: في حرف جر، الفصل اسم مجرور وعلامة جره الكسرة، وشبه الجملة في محل رفع خبر المبتدأ"
      }
    ]
  }
};

// French Course Data
export const frenchData: { [key: string]: CourseModule } = {
  "301": {
    title: "Module 1: Typologie textuelle - Cours complet",
    slides: [
      {
        title: "Introduction à la typologie textuelle",
        content: "📚 La typologie textuelle est l'étude scientifique des différents types de textes selon leur fonction, leur structure et leurs caractéristiques linguistiques.\n\n🎯 Objectifs du module :\n• Identifier et analyser les différents types de textes\n• Comprendre le fonctionnement du schéma narratif\n• Maîtriser le traitement du temps dans les récits\n• Analyser la structure et l'organisation des textes littéraires\n\n📖 Plan du cours :\n• Les quatre types de textes fondamentaux\n• Le schéma narratif en cinq étapes\n• Le traitement du temps (analepse, prolepse, ellipse)\n• Les points de vue narratifs\n\n✨ Cette étude vous permettra de mieux comprendre et analyser tous types de textes !",
        type: "intro"
      },
      {
        title: "Les quatre types de textes",
        content: "📝 Classification des textes selon leur fonction dominante :\n\n📖 Le texte narratif :\n• Fonction : raconter une histoire, des événements\n• Caractéristiques : présence d'un narrateur, succession chronologique, personnages\n• Exemples : roman, nouvelle, conte, récit autobiographique\n• Temps dominants : passé simple, imparfait\n\n🎨 Le texte descriptif :\n• Fonction : décrire, peindre avec des mots\n• Caractéristiques : abondance d'adjectifs qualificatifs, verbes d'état, présent de vérité générale\n• Exemples : portrait, paysage, description d'objets\n• Procédés : énumération, comparaisons, métaphores\n\n🗣️ Le texte argumentatif :\n• Fonction : convaincre, persuader, défendre une opinion\n• Caractéristiques : thèse, arguments, exemples, connecteurs logiques\n• Exemples : essai, critique, plaidoirie, débat\n• Structure : thèse → arguments → conclusion\n\n📚 Le texte explicatif/informatif :\n• Fonction : informer, expliquer, faire comprendre\n• Caractéristiques : objectivité, clarté, progression logique\n• Exemples : article encyclopédique, cours, mode d'emploi\n• Temps : présent de vérité générale",
        type: "definition"
      },
      {
        title: "Le schéma narratif classique",
        content: "📋 Structure en cinq étapes du récit traditionnel :\n\n1️⃣ Situation initiale (état d'équilibre) :\n• Présentation du cadre spatio-temporel\n• Introduction des personnages principaux\n• Établissement d'un état stable\n• Exemple : « Il était une fois, dans un royaume lointain... »\n\n2️⃣ Élément déclencheur (élément perturbateur) :\n• Événement qui rompt l'équilibre initial\n• Point de départ de l'action principale\n• Crée un problème à résoudre\n• Exemple : l'annonce du bal dans Cendrillon\n\n3️⃣ Péripéties (nœud de l'action) :\n• Développement de l'action, aventures\n• Obstacles, complications, rebondissements\n• Tentatives de résolution du problème\n• Partie la plus développée du récit\n\n4️⃣ Dénouement (résolution) :\n• Action qui permet de résoudre le conflit\n• Élimination des obstacles\n• Moment décisif du récit\n• Peut être heureux ou malheureux\n\n5️⃣ Situation finale (nouvel équilibre) :\n• Nouvel état stable\n• Conclusion de l'histoire\n• Transformation des personnages\n• Exemple : « Ils vécurent heureux... »",
        type: "definition"
      },
      {
        title: "Le traitement du temps dans le récit",
        content: "⏰ Distinction fondamentale :\n\n🕐 Le temps de l'histoire :\n• Durée réelle des événements racontés\n• Ordre chronologique naturel\n• Mesurable en unités temporelles (heures, jours, années)\n• Exemple : l'histoire de Roméo et Juliette se déroule en quelques jours\n\n📚 Le temps du récit :\n• Temps de la narration, de la lecture\n• Ordre de présentation des événements\n• Mesurable en pages, chapitres, temps de lecture\n• Exemple : Proust raconte une soirée en 100 pages\n\n🔄 Les procédés de manipulation temporelle :\n\n• Analepse (retour en arrière, flash-back) :\nÉvocation d'événements antérieurs au moment de la narration\nExemple : « Dix ans plus tôt, il avait connu cette femme... »\n\n• Prolepse (anticipation) :\nÉvocation d'événements postérieurs\nExemple : « Plus tard, il comprendrait son erreur »\n\n• Ellipse :\nOmission d'une période plus ou moins longue\nExemple : « Vingt ans passèrent... »\n\n• Pause descriptive :\nArrêt du récit pour une description\nLe temps du récit continue, celui de l'histoire s'arrête\n\n• Sommaire :\nRésumé rapide d'une longue période\nExemple : « Pendant des mois, il travailla sans relâche »",
        type: "example"
      },
      {
        title: "Les points de vue narratifs",
        content: "👁️ La focalisation ou point de vue narratif :\n\n🔍 Focalisation zéro (narrateur omniscient) :\n• Le narrateur sait tout, voit tout\n• Accès aux pensées de tous les personnages\n• Peut juger et commenter\n• Vision panoramique de l'histoire\n• Exemple : « Pierre pensait à Marie, tandis que celle-ci rêvait de Paul »\n\n👤 Focalisation interne :\n• Vision limitée à un personnage\n• Accès aux pensées d'un seul personnage\n• Le lecteur découvre avec le personnage\n• Crée suspense et identification\n• Peut être fixe (un seul personnage) ou variable (plusieurs personnages)\n• Exemple : « Je ne comprenais pas ce qui m'arrivait »\n\n📷 Focalisation externe :\n• Narrateur-témoin, vision du dehors\n• Pas d'accès aux pensées\n• Description objective des actions\n• Technique du cinéma\n• Exemple : « Il entra, s'assit, regarda par la fenêtre »\n\n🎭 Les effets produits :\n• Omniscient : impression de vérité, analyse psychologique\n• Interne : intimité, suspense, identification\n• Externe : objectivité, mystère, réalisme\n\n💡 Un même récit peut combiner plusieurs focalisations selon les besoins de la narration.",
        type: "summary"
      }
    ]
  },
  "302": {
    title: "Module 2: La nouvelle réaliste - Guy de Maupassant",
    slides: [
      {
        title: "Guy de Maupassant et le mouvement réaliste",
        content: "👨‍💼 Guy de Maupassant (1850-1893) :\n\n📚 Biographie essentielle :\n• Né en Normandie, mort à Paris à 43 ans\n• Disciple de Gustave Flaubert\n• Maître incontesté de la nouvelle française\n• 300 nouvelles en 10 ans de carrière\n• Observateur minutieux de la société bourgeoise\n\n🎯 Le réalisme littéraire (1850-1880) :\n• Mouvement artistique et littéraire\n• Volonté de reproduire fidèlement la réalité\n• Rejet de l'idéalisation romantique\n• Intérêt pour les classes populaires et moyennes\n• Méthode d'observation scientifique\n\n✍️ Caractéristiques de l'écriture maupassantienne :\n• Précision du style, économie de moyens\n• Ironie et pessimisme\n• Chutes surprenantes et révélatrices\n• Psychologie des personnages ordinaires\n• Critique sociale implicite\n\n📖 Œuvres au programme :\n• \"La Ficelle\" (1883) : la rumeur destructrice\n• \"Aux Champs\" (1882) : l'argent et l'éducation\n\n🌍 Contexte historique : IIIe République, expansion industrielle, transformations sociales",
        type: "intro"
      },
      {
        title: "\"La Ficelle\" - Analyse détaillée",
        content: "📖 Résumé de l'intrigue :\n\n🏪 Le cadre : marché de Goderville, jour de marché\n• Maître Hauchecorne ramasse une ficelle par terre\n• Maître Malandain l'aperçoit et l'accuse d'avoir volé un portefeuille\n• Hauchecorne proteste de son innocence\n• Le portefeuille est retrouvé mais le doute persiste\n• Hauchecorne meurt, rongé par l'injustice\n\n🎭 Les thèmes principaux :\n\n• La rumeur et ses mécanismes :\nComment une accusation mensongère devient \"vérité\"\nLa puissance destructrice du qu'en-dira-t-on\nL'impossibilité de lutter contre l'opinion publique\n\n• L'injustice sociale :\nLe petit paysan face à la société\nLa réputation plus importante que la vérité\nLa solitude de l'innocent\n\n• L'avarice et la petitesse humaine :\nLe geste de ramasser une ficelle révèle la mentalité\nLa mesquinerie des rapports sociaux\nL'argent comme obsession\n\n📝 Techniques narratives :\n• Narrateur omniscient externe\n• Focalisation sur Hauchecorne\n• Style indirect libre\n• Ironie tragique du dénouement\n• Progression dramatique classique\n\n💡 La portée universelle :\nAu-delà de l'anecdote normande, une réflexion sur la nature humaine et les mécanismes sociaux.",
        type: "example"
      },
      {
        title: "\"Aux Champs\" - Étude thématique",
        content: "👨‍👩‍👧‍👦 L'histoire en bref :\n\n🏠 Deux familles paysannes voisines et pauvres :\n• Les Tuvache et les Vallin, même condition sociale\n• Chacune a plusieurs enfants\n• Vie difficile, travail de la terre\n\n💰 La proposition des d'Hubières :\n• Couple bourgeois parisien sans enfants\n• Propose d'adopter un enfant contre rente viagère\n• Les Tuvache refusent par fierté\n• Les Vallin acceptent et donnent leur fils Jean\n\n⏰ Vingt ans plus tard :\n• Jean revient, devenu bourgeois\n• Contraste saisissant avec sa famille d'origine\n• Reproches amers de Charlot Tuvache\n• Drame de la destinée et des choix\n\n🎭 Thèmes développés :\n\n• L'argent comme révélateur social :\nLa corruption par l'argent\nLe prix de la dignité\nL'inégalité des destins\n\n• L'éducation et l'ascension sociale :\nLe pouvoir transformateur de l'éducation\nLa reproduction sociale\nLe déterminisme de classe\n\n• Fierté et préjugés :\nLa fausse fierté des Tuvache\nL'aveuglement des préjugés de classe\nLe poids des conventions sociales\n\n🔍 Techniques littéraires :\n• Structure en diptyque (avant/après)\n• Parallélisme et contraste des destins\n• Dialogue révélateur des mentalités\n• Fin ouverte sur l'amertume\n• Ironie de la situation",
        type: "example"
      },
      {
        title: "Procédés stylistiques chez Maupassant",
        content: "✍️ Le style maupassantien :\n\n🎯 Économie et précision :\n• Phrases courtes et efficaces\n• Mot juste, adjectif rare mais précis\n• Suppression du superflu\n• Rythme vif, progression dramatique\n\n🗣️ L'art du dialogue :\n• Reproduction fidèle des parlers régionaux\n• Révélateur de la psychologie des personnages\n• Fonction dramatique et sociale\n• Alternance entre récit et dialogue\n\n📍 L'ancrage réaliste :\n• Descriptions précises des lieux\n• Détails vraisemblables et significatifs\n• Références à la réalité contemporaine\n• Couleur locale normande\n\n😏 L'ironie maupassantienne :\n• Ironie dramatique (le lecteur en sait plus)\n• Ironie de situation (retournement final)\n• Ironie sociale (critique des mœurs)\n• Pessimisme désabusé\n\n🎬 Techniques cinématographiques :\n• Scènes découpées comme des plans\n• Montage alterné (\"Aux Champs\")\n• Gros plans psychologiques\n• Ellipses temporelles\n\n📚 L'héritage flaubertien :\n• Objectivité apparente du narrateur\n• Travail du style (\"le mot juste\")\n• Réalisme critique\n• Refus du sentimentalisme\n\n🌟 La modernité de Maupassant :\nPrécurseur de la nouvelle moderne, influence sur Tchekhov, Kafka, Borges...",
        type: "summary"
      }
    ]
  },
  "303": {
    title: "Module 3: La nouvelle fantastique - Théophile Gautier",
    slides: [
      {
        title: "Le genre fantastique - Définition et caractéristiques",
        content: "👻 Définition du fantastique littéraire :\n\n🔮 Selon Todorov :\n\"Le fantastique, c'est l'hésitation éprouvée par un être qui ne connaît que les lois naturelles face à un événement en apparence surnaturel.\"\n\n🌟 Caractéristiques fondamentales :\n\n• L'intrusion du surnaturel dans le quotidien :\nDépart d'un cadre réaliste et familier\nIrruption d'un élément inexplicable\nPerturbation de l'ordre naturel\n\n• L'hésitation du personnage et du lecteur :\nDoute entre explication rationnelle et surnaturelle\nIncertitude maintenue jusqu'à la fin\nAmbiguïté constitutive du genre\n\n• La peur et l'inquiétante étrangeté :\nAtmosphère angoissante\nSentiment d'étrangeté familière\nMalaise psychologique\n\n📚 Distinction avec les genres voisins :\n• Merveilleux : acceptation du surnaturel (contes de fées)\n• Étrange : explication rationnelle trouvée\n• Science-fiction : explication scientifique\n\n🕰️ Contexte du XIXe siècle :\n• Époque du positivisme et de la science\n• Résurgence de l'irrationnel\n• Influence du romantisme noir\n• Développement de la psychologie",
        type: "intro"
      },
      {
        title: "Théophile Gautier (1811-1872) - Maître du fantastique",
        content: "👨‍🎨 Biographie littéraire :\n\n📖 Formation et influences :\n• Né à Tarbes, mort à Paris\n• Formation de peintre avant les lettres\n• Ami de Victor Hugo, défenseur du romantisme\n• Théoricien de \"l'art pour l'art\"\n\n✍️ Carrière d'écrivain :\n• Poète (\"Émaux et Camées\")\n• Romancier (\"Mademoiselle de Maupin\")\n• Nouvelliste du fantastique\n• Critique d'art et journaliste\n\n👻 Œuvres fantastiques principales :\n• \"La Cafetière\" (1831) - première nouvelle fantastique française\n• \"La Morte amoureuse\" (1836)\n• \"Le Pied de momie\" (1840)\n• \"Avatar\" (1856)\n• \"Le Chevalier double\" (1840) - au programme\n\n🎨 Caractéristiques de son style :\n• Préciosité et richesse descriptive\n• Sens plastique du détail\n• Couleur locale orientale ou moyenâgeuse\n• Sensualité et esthétisme\n\n💭 Sa conception du fantastique :\n• Fantastique esthétique plutôt que terrifiant\n• Goût pour l'exotisme temporel et géographique\n• Influence de l'art et de la peinture\n• Dimension symbolique et psychologique",
        type: "definition"
      },
      {
        title: "\"Le Chevalier double\" - Analyse de l'œuvre",
        content: "⚔️ Résumé de l'intrigue :\n\n🏰 Cadre médiéval danois :\n• Château du comte Lodbrog\n• Sa femme Malgaë enceinte\n• Apparition mystérieuse d'un chevalier vert\n• Naissance d'Oluf, l'enfant double\n\n👥 La dualité du héros :\n• Deux natures contradictoires en un seul être\n• Le jour : chevalier noble et vertueux\n• La nuit : chevalier vert maléfique\n• Combat intérieur permanent\n\n💔 L'amour impossible :\n• Oluf aime Minna, la douce fiancée\n• Le chevalier vert la terrorise\n• Conflit entre amour et nature maléfique\n• Quête de l'unité intérieure\n\n⚔️ Le dénouement :\n• Combat final entre les deux natures\n• Victoire du bien sur le mal\n• Mort symbolique de la dualité\n• Réconciliation avec soi-même\n\n🎭 Interprétations symboliques :\n\n• Mythe du double :\nThème romantique de la dualité humaine\nConscient/Inconscient, Bien/Mal\nInfluence de la psychologie naissante\n\n• Allégorie morale :\nLutte entre les instincts et la vertu\nTriomphe de la volonté sur les pulsions\nDimension initiatique du récit\n\n• Symbolisme des couleurs :\nVert = nature sauvage, maléfique\nBlanc = pureté, spiritualité\nRouge = passion, violence",
        type: "example"
      },
      {
        title: "Techniques du fantastique chez Gautier",
        content: "🔧 Procédés narratifs caractéristiques :\n\n📖 Structure du récit fantastique :\n• Cadre réaliste initial\n• Élément perturbateur surnaturel\n• Développement de l'inquiétude\n• Climax fantastique\n• Résolution ambiguë\n\n🎨 L'art de la description chez Gautier :\n• Descriptions picturales minutieuses\n• Création d'une atmosphère onirique\n• Jeu sur les lumières et les ombres\n• Sensualité des détails\n\n🕰️ Le traitement du temps :\n• Temps cyclique (jour/nuit)\n• Répétition obsessionnelle\n• Suspension du temps ordinaire\n• Éternité de l'instant fantastique\n\n👻 Les modalités du surnaturel :\n• Métamorphose et dédoublement\n• Animation de l'inanimé\n• Résurrection et vampirisme\n• Voyages dans le temps\n\n💭 Dimension psychologique :\n• Exploration de l'inconscient\n• États de conscience modifiés\n• Rêve et réalité mêlés\n• Projection des désirs refoulés\n\n🎭 Influences et postérité :\n• Influence d'Hoffmann et de Poe\n• Héritage romantique allemand\n• Précurseur de Maupassant et Villiers\n• Annonce de la littérature de l'inconscient\n\n🌟 Modernité du fantastique gautierien :\nAu-delà du simple effet de peur, exploration des zones obscures de la psyché humaine.",
        type: "summary"
      }
    ]
  }
};

// French Exercises Data
export const frenchExercises: { [key: string]: ExerciseModule } = {
  "301": {
    title: "Exercices - Typologie textuelle",
    exercises: [
      {
        id: 1,
        title: "Identification des types de textes",
        difficulty: "Facile",
        duration: "12 min",
        points: 15,
        question: "Identifiez le type de texte de chacun des extraits suivants et justifiez votre réponse :\n\nTexte A : \"Le château se dressait majestueusement sur la colline. Ses tours élancées perçaient le ciel gris, tandis que ses murailles de pierre blonde reflétaient les derniers rayons du soleil couchant.\"\n\nTexte B : \"Il faut impérativement réduire notre consommation d'énergie. En effet, les réserves de combustibles fossiles s'amenuisent rapidement. De plus, leur utilisation massive contribue au réchauffement climatique.\"\n\nTexte C : \"Soudain, la porte s'ouvrit avec fracas. Un homme entra, le visage défait par l'angoisse. 'Marie a disparu !' cria-t-il.\"",
        solution: "Analyse détaillée :\n\nTexte A : DESCRIPTIF\nJustification :\n• Fonction : décrire un paysage\n• Procédés : adjectifs qualificatifs nombreux (majestueusement, élancées, gris, blonde)\n• Verbes d'état et de situation (se dressait, perçaient, reflétaient)\n• Absence d'action, présence de détails visuels\n• Progression dans l'espace (château → tours → murailles)\n\nTexte B : ARGUMENTATIF\nJustification :\n• Fonction : convaincre de la nécessité de réduire la consommation\n• Thèse : il faut réduire notre consommation d'énergie\n• Arguments : épuisement des ressources + réchauffement climatique\n• Connecteurs logiques (en effet, de plus)\n• Modalité déontique (il faut)\n\nTexte C : NARRATIF\nJustification :\n• Fonction : raconter un événement\n• Succession d'actions (s'ouvrit, entra, cria)\n• Présence de personnages (un homme, Marie)\n• Progression temporelle (soudain)\n• Dialogue intégré au récit"
      },
      {
        id: 2,
        title: "Analyse du schéma narratif",
        difficulty: "Moyen",
        duration: "18 min",
        points: 20,
        question: "Lisez ce résumé du conte \"Cendrillon\" et identifiez les cinq étapes du schéma narratif :\n\n\"Cendrillon vit malheureuse chez sa belle-mère avec ses deux demi-sœurs qui la traitent comme une servante. Un jour, le prince du royaume organise un bal pour trouver épouse. Grâce à sa marraine la fée, Cendrillon peut s'y rendre magnifiquement vêtue. Au bal, le prince tombe amoureux d'elle, mais elle doit partir avant minuit et perd sa pantoufle de verre. Le prince la retrouve grâce à cette pantoufle et l'épouse. Ils vivent heureux ensemble.\"",
        solution: "Analyse du schéma narratif :\n\n1️⃣ SITUATION INITIALE :\n\"Cendrillon vit malheureuse chez sa belle-mère avec ses deux demi-sœurs qui la traitent comme une servante.\"\n• État d'équilibre initial (même si négatif)\n• Présentation du personnage principal et de sa condition\n• Cadre familial établi\n\n2️⃣ ÉLÉMENT DÉCLENCHEUR :\n\"Un jour, le prince du royaume organise un bal pour trouver épouse.\"\n• Événement qui va perturber la situation initiale\n• Crée une opportunité de changement\n• Point de départ de l'action principale\n\n3️⃣ PÉRIPÉTIES :\n\"Grâce à sa marraine la fée, Cendrillon peut s'y rendre magnifiquement vêtue. Au bal, le prince tombe amoureux d'elle, mais elle doit partir avant minuit et perd sa pantoufle de verre.\"\n• Suite d'événements et d'obstacles\n• Intervention de l'adjuvant (la fée)\n• Rencontre amoureuse et complication (fuite, pantoufle perdue)\n\n4️⃣ DÉNOUEMENT :\n\"Le prince la retrouve grâce à cette pantoufle et l'épouse.\"\n• Résolution du problème principal\n• Action décisive qui permet de surmonter les obstacles\n• Reconnaissance de l'héroïne\n\n5️⃣ SITUATION FINALE :\n\"Ils vivent heureux ensemble.\"\n• Nouvel état d'équilibre (positif)\n• Transformation complète de la condition de Cendrillon\n• Formule traditionnelle du conte"
      },
      {
        id: 3,
        title: "Analyse temporelle dans un récit",
        difficulty: "Difficile",
        duration: "25 min",
        points: 25,
        question: "Analysez les procédés temporels dans cet extrait :\n\n\"Paul regardait la mer. Vingt ans plus tôt, sur cette même plage, il avait rencontré Lucie. Comme elle était belle alors ! Il se souvenait de sa robe blanche qui flottait dans le vent. Demain, il devrait lui annoncer la nouvelle. Mais pour l'instant, il préférait se perdre dans ses souvenirs d'enfance.\"\n\nIdentifiez : le moment de la narration, les procédés temporels utilisés, et analysez leurs effets.",
        solution: "Analyse temporelle complète :\n\n🕐 MOMENT DE LA NARRATION :\nPrésent de Paul regardant la mer (temps de référence)\n\n📝 PROCÉDÉS TEMPORELS IDENTIFIÉS :\n\n1️⃣ ANALEPSE (retour en arrière) :\n\"Vingt ans plus tôt, sur cette même plage, il avait rencontré Lucie.\"\n• Retour 20 ans en arrière\n• Plus-que-parfait (antériorité)\n• Précision temporelle explicite\n\n2️⃣ PAUSE DESCRIPTIVE :\n\"Comme elle était belle alors ! Il se souvenait de sa robe blanche qui flottait dans le vent.\"\n• Arrêt sur une image du passé\n• Description intégrée au souvenir\n• Imparfait descriptif\n\n3️⃣ PROLEPSE (anticipation) :\n\"Demain, il devrait lui annoncer la nouvelle.\"\n• Projection dans le futur proche\n• Conditionnel de probabilité\n• Crée suspense et inquiétude\n\n4️⃣ RETOUR AU PRÉSENT :\n\"Mais pour l'instant, il préférait se perdre dans ses souvenirs d'enfance.\"\n• Ancrage dans le moment présent\n• \"Pour l'instant\" marque la simultanéité\n\n🎯 EFFETS PRODUITS :\n• Profondeur psychologique du personnage\n• Contraste passé heureux/présent mélancolique\n• Suspense créé par l'allusion au futur\n• Temps subjectif de la mémoire\n• Structure en abyme (souvenirs dans les souvenirs)"
      }
    ]
  },
  "302": {
    title: "Exercices - La nouvelle réaliste",
    exercises: [
      {
        id: 4,
        title: "Analyse thématique de \"La Ficelle\"",
        difficulty: "Moyen",
        duration: "20 min",
        points: 22,
        question: "Analysez les thèmes principaux de \"La Ficelle\" de Maupassant en vous appuyant sur des éléments précis du texte :\n\n1. Le thème de la rumeur\n2. Le thème de l'injustice sociale\n3. La critique de la société paysanne\n\nPour chaque thème, donnez des exemples et expliquez comment Maupassant les développe.",
        solution: "Analyse thématique détaillée :\n\n1️⃣ LE THÈME DE LA RUMEUR :\n\n📢 Mécanisme de propagation :\n• Accusation de Malandain basée sur une simple observation\n• Transmission rapide dans la communauté du marché\n• Déformation progressive de la vérité\n• Impossibilité pour Hauchecorne de convaincre\n\n🔍 Procédés littéraires :\n• Style indirect libre pour montrer la propagation\n• Répétition obsessionnelle des justifications d'Hauchecorne\n• Ironie dramatique : le lecteur connaît la vérité\n\n💡 Portée symbolique :\n• La ficelle = symbole de la futilité qui déclenche le drame\n• Critique des petitesses humaines\n• Pouvoir destructeur de l'opinion publique\n\n2️⃣ LE THÈME DE L'INJUSTICE SOCIALE :\n\n⚖️ L'innocent victime :\n• Hauchecorne, honnête homme détruit par un mensonge\n• Solitude face à l'hostilité générale\n• Impossibilité de prouver son innocence\n\n🏛️ Absence de vraie justice :\n• Le maire croit plus facilement à l'accusation\n• Aucune enquête sérieuse menée\n• Préjugés sociaux influencent le jugement\n\n😢 Conséquences tragiques :\n• Mort de chagrin d'Hauchecorne\n• Derniers mots : \"Une 'tite ficelle\"\n• Ironie tragique de la situation\n\n3️⃣ CRITIQUE DE LA SOCIÉTÉ PAYSANNE :\n\n💰 L'avarice comme trait dominant :\n• Geste de ramasser une ficelle révélateur\n• Obsession de l'économie de moyens\n• Mentalité de la récupération\n\n🗣️ Médisance et jalousie :\n• Plaisir de nuire à autrui\n• Rapidité à croire le mal plutôt que le bien\n• Solidarité négative contre l'accusé\n\n🎭 Technique de Maupassant :\n• Réalisme critique sans complaisance\n• Objectivité apparente mais jugement implicite\n• Universalité du propos au-delà du cas particulier"
      },
      {
        id: 5,
        title: "Comparaison \"Aux Champs\" - analyse des personnages",
        difficulty: "Difficile",
        duration: "30 min",
        points: 28,
        question: "Comparez les deux familles dans \"Aux Champs\" (Tuvache et Vallin) en analysant :\n\n1. Leurs réactions face à la proposition des d'Hubières\n2. Les conséquences de leurs choix respectifs\n3. Le message de Maupassant sur la société de son époque\n\nVotre analyse doit montrer comment Maupassant utilise ce contraste pour développer sa critique sociale.",
        solution: "Analyse comparative approfondie :\n\n1️⃣ RÉACTIONS FACE À LA PROPOSITION :\n\n👨‍👩‍👧‍👦 LES TUVACHE (refus) :\n• Motivation : fierté mal comprise\n• \"Vendre son enfant ? Ah ! mais non ! ça n'se fait point\"\n• Préjugé de classe : méfiance envers les bourgeois\n• Attachement sentimental sincère mais aveugle\n• Refus catégorique sans réflexion sur l'intérêt de l'enfant\n\n👨‍👩‍👧‍👦 LES VALLIN (acceptation) :\n• Motivation : pragmatisme économique\n• Calcul rationnel des avantages\n• Vision à long terme pour l'enfant\n• Sacrifice personnel pour l'avenir de Jean\n• Décision douloureuse mais réfléchie\n\n2️⃣ CONSÉQUENCES DES CHOIX :\n\n📉 FAMILLE TUVACHE (20 ans après) :\n• Pauvreté persistante\n• Charlot reste dans sa condition sociale\n• Amertume et regrets\n• \"J'aurais mieux fait de m'laisser prendre\"\n• Reproduction sociale : même vie que les parents\n\n📈 JEAN VALLIN (devenu bourgeois) :\n• Transformation complète\n• Éducation, manières raffinées\n• Ascension sociale réussie\n• Rupture avec le milieu d'origine\n• Gratitude envers ses parents adoptifs\n\n3️⃣ MESSAGE DE MAUPASSANT :\n\n💰 Critique du déterminisme social :\n• L'éducation peut briser la reproduction sociale\n• L'argent comme moyen d'émancipation\n• Fausse fierté qui maintient dans la pauvreté\n• Nécessité parfois d'accepter l'aide extérieure\n\n⚖️ Ironie de la situation :\n• Les \"nobles\" Tuvache finissent dans l'amertume\n• Les Vallin, \"sans honneur\", réussissent leur pari\n• Inversion des valeurs morales traditionnelles\n• Pragmatisme récompensé vs idéalisme puni\n\n🎭 Technique narrative :\n• Structure en diptyque (avant/après)\n• Contraste systématique entre les deux familles\n• Ellipse temporelle de 20 ans\n• Chute révélatrice avec les reproches de Charlot\n\n🌍 Portée universelle :\n• Critique des préjugés de classe\n• Réflexion sur l'éducation et l'égalité des chances\n• Questionnement des valeurs bourgeoises\n• Actualité du débat social\n\n💡 Ambiguïté maupassantienne :\n• Pas de manichéisme simple\n• Sympathie pour la souffrance de tous\n• Critique implicite de l'inégalité sociale\n• Pessimisme sur la nature humaine"
      }
    ]
  },
  "303": {
    title: "Exercices - La nouvelle fantastique",
    exercises: [
      {
        id: 6,
        title: "Caractéristiques du genre fantastique",
        difficulty: "Moyen",
        duration: "18 min",
        points: 20,
        question: "Définissez le genre fantastique selon les critères de Todorov et expliquez ce qui le distingue du merveilleux et de l'étrange.\n\nDonnez des exemples précis pour illustrer chaque genre.",
        solution: "Définition et distinctions :\n\n👻 LE FANTASTIQUE selon Todorov :\n\n🔮 Définition :\n\"Le fantastique, c'est l'hésitation éprouvée par un être qui ne connaît que les lois naturelles face à un événement en apparence surnaturel.\"\n\n⚖️ Critères constitutifs :\n1. Hésitation du personnage et du lecteur\n2. Ambiguïté maintenue entre rationnel et irrationnel\n3. Refus de l'allégorie (sens littéral maintenu)\n\n🆚 DISTINCTIONS AVEC LES GENRES VOISINS :\n\n✨ LE MERVEILLEUX :\n• Acceptation du surnaturel dès le début\n• Pas d'hésitation, monde régi par d'autres lois\n• Exemples : \"Les Mille et Une Nuits\", contes de Perrault\n• \"Il était une fois\" = signal d'entrée dans le merveilleux\n\n🔍 L'ÉTRANGE :\n• Événements troublants mais explicables rationnellement\n• Mystère résolu à la fin\n• Exemples : romans policiers, hallucinations expliquées\n• Conan Doyle : apparitions qui s'avèrent être des supercheries\n\n📊 SCHÉMA DE TODOROV :\nÉtrange pur ← Fantastique-étrange ← FANTASTIQUE PUR → Fantastique-merveilleux → Merveilleux pur\n\n📚 EXEMPLES LITTÉRAIRES :\n\n👻 Fantastique pur :\n• \"Le Horla\" de Maupassant (hésitation jusqu'au bout)\n• \"La Vénus d'Ille\" de Mérimée\n• \"Le Chevalier double\" de Gautier\n\n🔮 Fantastique-merveilleux :\n• \"La Belle et la Bête\"\n• Certains contes de Gautier\n\n🔍 Fantastique-étrange :\n• \"Aurélia\" de Nerval (rêve/réalité)\n• Nouvelles de Poe avec explication finale\n\n💡 ENJEUX DU FANTASTIQUE :\n• Remise en question de la réalité\n• Exploration de l'irrationnel à l'époque positiviste\n• Expression des angoisses inconscientes\n• Questionnement des limites de la connaissance"
      }
    ]
  }
};
