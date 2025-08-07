
// Physics courses data with proper slide types
export const physicsLessonsData = {
  // SEMESTER 1
  "1": {
    title: "La gravitation universelle",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Introduction à la gravitation universelle",
        content: "La gravitation universelle est une force fondamentale qui s'exerce entre tous les corps massifs de l'univers.\n\nDécouverte par Isaac Newton au XVIIe siècle, cette loi révolutionnaire explique:\n• Le mouvement des planètes autour du Soleil\n• La chute des corps à la surface de la Terre\n• Les marées océaniques\n• L'orbite de la Lune autour de la Terre",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Loi de Newton",
        content: "**Énoncé de la loi:**\nDeux corps ponctuels de masses m₁ et m₂, séparés par une distance r, s'attirent mutuellement avec une force d'intensité:\n\nF = G × (m₁ × m₂)/r²\n\noù G = 6,67 × 10⁻¹¹ N⋅m²/kg² est la constante gravitationnelle universelle.\n\n**Caractéristiques:**\n• Force attractive\n• Proportionnelle au produit des masses\n• Inversement proportionnelle au carré de la distance",
        type: "definition" as const
      }
    ],
    videos: []
  },
  "2": {
    title: "Exemples d'actions mécaniques",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Les actions mécaniques",
        content: "Une action mécanique est une cause capable de:\n• Mettre un corps en mouvement\n• Modifier le mouvement d'un corps\n• Déformer un corps\n• Maintenir un corps au repos\n\n**Types d'actions mécaniques:**\n• Actions de contact (poussée, traction, frottement)\n• Actions à distance (poids, forces magnétiques)\n• Actions réparties ou localisées",
        type: "introduction" as const
      }
    ],
    videos: []
  },
  "3": {
    title: "Le mouvement",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Notion de mouvement",
        content: "Le mouvement est relatif: un objet peut être en mouvement par rapport à un référentiel et au repos par rapport à un autre.\n\n**Éléments d'étude:**\n• Référentiel: système de coordonnées pour décrire le mouvement\n• Trajectoire: ensemble des positions occupées successivement\n• Types de mouvements: rectiligne, circulaire, parabolique\n• Vitesse: grandeur caractérisant la rapidité du mouvement",
        type: "introduction" as const
      }
    ],
    videos: []
  },
  "4": {
    title: "Le principe d'inertie",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Première loi de Newton",
        content: "**Énoncé du principe d'inertie:**\nTout corps persiste dans son état de repos ou de mouvement rectiligne uniforme si les forces qui s'exercent sur lui se compensent ou s'il n'est soumis à aucune force.\n\n**Conséquences:**\n• Un objet au repos reste au repos si ΣF⃗ = 0⃗\n• Un objet en mouvement rectiligne uniforme continue si ΣF⃗ = 0⃗\n• Notion de référentiel galiléen",
        type: "definition" as const
      }
    ],
    videos: []
  },
  "5": {
    title: "Équilibre d'un corps sous l'action de 2 forces",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Conditions d'équilibre à 2 forces",
        content: "Un corps soumis à deux forces est en équilibre si:\n\n**Conditions:**\n• Les deux forces ont la même droite d'action\n• Les deux forces ont la même intensité\n• Les deux forces sont de sens opposés\n\n**Applications:**\n• Tension d'un ressort: F = k × Δl\n• Poussée d'Archimède: P⃗ = π⃗\n• Équilibre d'un objet suspendu",
        type: "definition" as const
      }
    ],
    videos: []
  },
  // Continue with remaining lessons...
  "21": {
    title: "La mole, unité de quantité de matière",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "La mole",
        content: "La mole est l'unité de base du système international pour la quantité de matière.\n\n**Définition:**\nUne mole contient autant d'entités élémentaires qu'il y a d'atomes dans 12 grammes de carbone 12.\n\n**Nombre d'Avogadro:**\nNA = 6,022 × 10²³ mol⁻¹\n\n**Applications:**\n• Calculs stœchiométriques\n• Masse molaire\n• Volume molaire des gaz",
        type: "introduction" as const
      }
    ],
    videos: []
  }
};

export const physicsLessonsStructure = {
  semester1: [
    { id: 1, title: "La gravitation universelle" },
    { id: 2, title: "Exemples d'actions mécaniques" },
    { id: 3, title: "Le mouvement" },
    { id: 4, title: "Le principe d'inertie" },
    { id: 5, title: "Équilibre d'un corps sous l'action de 2 forces" },
    { id: 6, title: "Équilibre d'un corps sous l'action de 3 forces" },
    { id: 7, title: "Équilibre d'un solide en rotation autour d'un axe fixe" },
    { id: 8, title: "Les espèces chimiques" },
    { id: 9, title: "Extraction, séparation et identification des espèces chimiques" },
    { id: 10, title: "Synthèse des espèces chimiques" },
    { id: 11, title: "Le modèle de l'atome" },
    { id: 12, title: "La géométrie de quelques molécules" },
    { id: 13, title: "Classification périodique des éléments chimiques" }
  ],
  semester2: [
    { id: 14, title: "Le courant électrique continu" },
    { id: 15, title: "La tension électrique" },
    { id: 16, title: "Association des conducteurs ohmiques" },
    { id: 17, title: "Caractéristiques de quelque dipôles passifs" },
    { id: 18, title: "Caractéristique d'un dipôle actif" },
    { id: 19, title: "Le transistor" },
    { id: 20, title: "L'amplificateur opérationnel" },
    { id: 21, title: "La mole, unité de quantité de matière" },
    { id: 22, title: "La concentration molaire" },
    { id: 23, title: "Modélisation des transformations chimiques - Bilan de la matière" }
  ]
};
