
export const frenchLessonsStructure = {
  semester1: [
    {
      id: 'roman-autobiographique',
      title: 'Le roman autobiographique',
      description: 'Découvrir les caractéristiques du genre autobiographique'
    },
    {
      id: 'nouvelle-fantastique',
      title: 'La nouvelle fantastique',
      description: 'Étudier les éléments du récit fantastique'
    },
    {
      id: 'poesie-moderne',
      title: 'La poésie moderne et contemporaine',
      description: 'Analyser l\'évolution de la poésie française'
    },
    {
      id: 'theatre-20eme',
      title: 'Le théâtre du XXème siècle',
      description: 'Explorer le renouveau théâtral moderne'
    },
    {
      id: 'argumentation',
      title: 'L\'art de l\'argumentation',
      description: 'Maîtriser les techniques argumentatives'
    },
    {
      id: 'litterature-engagee',
      title: 'La littérature engagée',
      description: 'Comprendre le rôle social de la littérature'
    }
  ],
  semester2: [
    {
      id: 'roman-realiste',
      title: 'Le roman réaliste',
      description: 'Analyser les œuvres du réalisme français'
    },
    {
      id: 'theatre-classique',
      title: 'Le théâtre classique',
      description: 'Étudier les grands auteurs du théâtre français'
    },
    {
      id: 'poesie-romantique',
      title: 'La poésie romantique',
      description: 'Découvrir le mouvement romantique'
    },
    {
      id: 'essai-critique',
      title: 'L\'essai et la critique littéraire',
      description: 'Développer l\'esprit critique littéraire'
    },
    {
      id: 'francophonie',
      title: 'Littératures francophones',
      description: 'Explorer la diversité francophone'
    },
    {
      id: 'oral-ecrit',
      title: 'Techniques d\'expression orale et écrite',
      description: 'Perfectionner les compétences communicatives'
    }
  ]
};

export const frenchCourses = {
  'roman-autobiographique': {
    title: 'Le roman autobiographique',
    semester: 1,
    slides: [
      {
        title: 'Introduction au roman autobiographique',
        content: 'Le roman autobiographique est un genre littéraire où l\'auteur raconte sa propre vie sous la forme d\'un récit romancé.',
        type: 'intro' as const
      },
      {
        title: 'Définition et caractéristiques',
        content: 'Caractéristiques principales :\n- Narrateur = auteur = personnage principal\n- Récit à la première personne\n- Mélange de réalité et de fiction\n- Dimension introspective',
        type: 'definition' as const
      }
    ]
  },
  'nouvelle-fantastique': {
    title: 'La nouvelle fantastique',
    semester: 1,
    slides: [
      {
        title: 'Le genre fantastique',
        content: 'La nouvelle fantastique introduit des éléments surnaturels dans un cadre réaliste, créant une atmosphère d\'inquiétude.',
        type: 'intro' as const
      }
    ]
  },
  'poesie-moderne': {
    title: 'La poésie moderne et contemporaine',
    semester: 1,
    slides: [
      {
        title: 'Évolution de la poésie française',
        content: 'La poésie moderne rompt avec les formes classiques et explore de nouveaux modes d\'expression.',
        type: 'intro' as const
      }
    ]
  },
  'theatre-20eme': {
    title: 'Le théâtre du XXème siècle',
    semester: 1,
    slides: [
      {
        title: 'Le renouveau théâtral',
        content: 'Le théâtre du XXème siècle renouvelle les formes dramatiques et questionne la condition humaine.',
        type: 'intro' as const
      }
    ]
  },
  'argumentation': {
    title: 'L\'art de l\'argumentation',
    semester: 1,
    slides: [
      {
        title: 'Techniques argumentatives',
        content: 'L\'argumentation vise à convaincre par la logique et à persuader par l\'émotion.',
        type: 'intro' as const
      }
    ]
  },
  'litterature-engagee': {
    title: 'La littérature engagée',
    semester: 1,
    slides: [
      {
        title: 'Littérature et société',
        content: 'La littérature engagée met l\'art au service d\'une cause sociale ou politique.',
        type: 'intro' as const
      }
    ]
  },
  'roman-realiste': {
    title: 'Le roman réaliste',
    semester: 2,
    slides: [
      {
        title: 'Le réalisme français',
        content: 'Le roman réaliste dépeint fidèlement la société et les mœurs de son époque.',
        type: 'intro' as const
      }
    ]
  },
  'theatre-classique': {
    title: 'Le théâtre classique',
    semester: 2,
    slides: [
      {
        title: 'Les grands maîtres',
        content: 'Corneille, Racine et Molière ont établi les bases du théâtre français classique.',
        type: 'intro' as const
      }
    ]
  },
  'poesie-romantique': {
    title: 'La poésie romantique',
    semester: 2,
    slides: [
      {
        title: 'Le mouvement romantique',
        content: 'Le romantisme privilégie l\'expression des sentiments et de la subjectivité.',
        type: 'intro' as const
      }
    ]
  },
  'essai-critique': {
    title: 'L\'essai et la critique littéraire',
    semester: 2,
    slides: [
      {
        title: 'L\'esprit critique',
        content: 'L\'essai développe une réflexion personnelle sur des questions littéraires ou sociales.',
        type: 'intro' as const
      }
    ]
  },
  'francophonie': {
    title: 'Littératures francophones',
    semester: 2,
    slides: [
      {
        title: 'Diversité francophone',
        content: 'Les littératures francophones enrichissent la langue française de leurs spécificités culturelles.',
        type: 'intro' as const
      }
    ]
  },
  'oral-ecrit': {
    title: 'Techniques d\'expression orale et écrite',
    semester: 2,
    slides: [
      {
        title: 'Communication efficace',
        content: 'Maîtriser les techniques d\'expression pour communiquer avec clarté et persuasion.',
        type: 'intro' as const
      }
    ]
  }
};
