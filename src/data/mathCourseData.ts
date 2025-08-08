// Math course data with lessons and exercises including Statistics

export const mathLessonsData = {
  "1": {
    title: "Les Ensembles - مجموعات الأعداد",
    slides: [
      {
        title: "Introduction aux Ensembles",
        content: `📚 Les Ensembles de Nombres

Un ensemble est une collection d'objets appelés éléments. En mathématiques, nous travaillons avec plusieurs ensembles de nombres :

🔢 **Ensemble ℕ (Naturels)** : {0, 1, 2, 3, ...}
• Les nombres pour compter
• Commencent par zéro
• Utilisés pour dénombrer

🔢 **Ensemble ℤ (Entiers relatifs)** : {..., -2, -1, 0, 1, 2, ...}
• Incluent les nombres négatifs
• Extension de ℕ
• Permettent la soustraction

🔢 **Ensemble ℚ (Rationnels)** : {a/b | a,b ∈ ℤ, b ≠ 0}
• Fractions et nombres décimaux
• Peuvent s'écrire sous forme p/q
• Denses dans ℝ

🔢 **Ensemble ℝ (Réels)** : Tous les nombres sur la droite numérique
• Incluent les irrationnels (π, √2, e)
• Complètent la droite numérique
• Base de l'analyse mathématique`,
        type: "intro" as const
      },
      {
        title: "Opérations et Propriétés",
        content: `⚡ Opérations dans les Ensembles

**Addition et Multiplication :**
• Commutativité : a + b = b + a, a × b = b × a
• Associativité : (a + b) + c = a + (b + c)
• Distributivité : a × (b + c) = a × b + a × c

**Éléments neutres :**
• Pour l'addition : 0 (zéro)
• Pour la multiplication : 1 (un)

**Inverses :**
• Opposé pour l'addition : a + (-a) = 0
• Inverse pour la multiplication : a × (1/a) = 1 (si a ≠ 0)

🎯 **Relation d'inclusion :**
ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ

Chaque ensemble contient le précédent avec des propriétés supplémentaires.`,
        type: "definition" as const
      },
      {
        title: "Exercices d'Application",
        content: `💡 Exercices Pratiques

**Exercice 1 :** Classifier les nombres suivants :
-3, 0.5, π, √4, -7/3, 0

**Solution :**
• -3 ∈ ℤ (entier négatif)
• 0.5 ∈ ℚ (1/2, fraction)
• π ∈ ℝ \\ ℚ (irrationnel)
• √4 = 2 ∈ ℕ (naturel)
• -7/3 ∈ ℚ (fraction négative)
• 0 ∈ ℕ (naturel)

**Exercice 2 :** Simplifier les expressions :
a) 3 + 4 × 2 - 1
b) (2 + 3) × (4 - 1)
c) 15 ÷ 3 + 2²

**Solutions :**
a) 3 + 8 - 1 = 10
b) 5 × 3 = 15
c) 5 + 4 = 9`,
        type: "example" as const
      }
    ]
  },
  "14": {
    title: "Statistiques - الإحصاء",
    slides: [
      {
        title: "Population statistique et Caractère",
        content: `📊 Introduction aux Statistiques

**Population statistique :**
La population statistique est l'ensemble qui fait l'objet de l'étude. Chaque élément de cet ensemble est appelé « individu » ou « unité statistique ».

**Caractère :**
La propriété qu'on veut étudier chez une population statistique s'appelle « le caractère » ou « la variable statistique ». Le caractère peut être quantitatif ou qualitatif.

🔢 **Caractère quantitatif :**
Un caractère qui peut s'exprimer par des nombres.

• **Caractère discret :** Prend des valeurs isolées (notes des élèves)
• **Caractère continu :** Prend des valeurs dans des intervalles (hauteurs des élèves)

📝 **Caractère qualitatif :**
Un caractère qui ne peut pas s'exprimer par des nombres (couleur des cheveux, groupe sanguin, sexe).

**Exemples d'études statistiques :**
- Étude des notes de 20 élèves
- Vitesses des voitures sur l'autoroute
- Nombre de buts par match durant la Coupe du monde`,
        type: "intro" as const
      },
      {
        title: "Effectif - Fréquence - Pourcentage",
        content: `📊 Définitions fondamentales

**Effectif (ni) :**
Le nombre ni est appelé « Effectif » relatif à la valeur xi
N = n1 + n2 + n3 + ... + nk (effectif total)

**Fréquence (fi) :**
fi = ni/N est appelé « fréquence » relative à la valeur xi

**Pourcentage (pi) :**
pi = 100fi est appelé le pourcentage relatif à la valeur xi

📈 **Exemple pratique :**
Dans l'exemple des notes d'élèves :
- N = n1 + n2 + n3 + n4 + n5 + n6 + n7 = 20
- p1 = f1 × 100 = (1/20) × 100 = 5% (pourcentage relatif à la valeur x1)

💡 **Remarques importantes :**
- La somme des effectifs égale l'effectif total : Σni = N
- La somme des fréquences égale 1 : Σfi = 1  
- La somme des pourcentages égale 100% : Σpi = 100%`,
        type: "definition" as const
      },
      {
        title: "Paramètres de position",
        content: `📊 Le Mode, La Moyenne et La Médiane

**1) Le Mode :**
C'est la valeur du caractère ou la classe correspondant au plus fort effectif.

**Remarque :** Pour déterminer le mode, il faut d'abord dresser le tableau des effectifs.

**2) La Moyenne :**
x̄ = (x1×n1 + x2×n2 + ... + xk×nk)/(n1 + n2 + ... + nk) = Σ(xi×ni)/Σni

**3) La Médiane :**
Pour obtenir la médiane d'une série, on range les valeurs dans l'ordre croissant. La médiane est la valeur qui partage la série en deux populations d'effectif égal.

**Exemple de calcul :**
- Moyenne des notes : x̄ = (8×4 + 9×2 + 10×5 + 12×4 + 15×3 + 16×1 + 18×1)/20 = 227/20 ≈ 11,35
- Moyenne de buts par match : x̄ = (7×0 + 17×1 + 13×2 + 14×3 + 8×4 + 6×5 + 0×6 + 1×7)/(7+17+13+14+8+6+0+1) = 154/66 ≈ 2,3`,
        type: "definition" as const
      },
      {
        title: "Paramètres de dispersion",
        content: `📊 Mesures de la dispersion

**1) Étendue :**
C'est la différence entre les valeurs extrêmes.
Dans l'exemple 1 : valeur minimale = 8, valeur maximale = 18
Étendue = 18 - 8 = 10

**2) Écart-moyen :**
C'est la moyenne des écarts à la moyenne
e = (n1×|x1-x̄| + n2×|x2-x̄| + ... + nk×|xk-x̄|)/(n1 + n2 + ... + nk)

**3) Variance :**
V = (n1×(x1-x̄)² + n2×(x2-x̄)² + ... + nk×(xk-x̄)²)/(n1 + n2 + ... + nk)

**4) Écart-type :**
σ = √V

**Propriété importante :**
V = (n1×x1² + n2×x2² + ... + nk×xk²)/(n1 + n2 + ... + nk) - (x̄)²

**Remarque :**
L'écart-type exprime la dispersion des valeurs d'une série statistique autour de sa moyenne. Les valeurs extrêmes influencent l'écart-type.`,
        type: "definition" as const
      },
      {
        title: "Méthode de calcul avec calculatrice",
        content: `🔧 Utilisation de la calculatrice

**Méthode :** Déterminer les caractéristiques statistiques à l'aide d'une calculatrice

Pour déterminer la moyenne, la variance et l'écart-type de la série statistique étudiée :

**Étapes :**
1. Saisir les données du tableau dans deux listes de la calculatrice
2. Liste 1 (L1) : valeurs du caractère (xi)
3. Liste 2 (L2) : effectifs correspondants (ni)

**Résultats obtenus :**
- x̄ = 2,3333333 (moyenne)
- Σx = 154 (somme des valeurs)
- Σx² = 522 (somme des carrés)
- Sx = 2,4646465 (écart-type)
- σx = 1,5699193 (écart-type de la population)  
- n = 66 (effectif total)

**Variables utilisées :**
- Var XList : List1
- Var Freq : List2

Cette méthode permet un calcul rapide et précis des paramètres statistiques sans erreur de calcul manuel.`,
        type: "example" as const
      }
    ],
    images: [
      "/lovable-uploads/9bb9f036-2eb5-4015-9659-dcf43d08d732.png",
      "/lovable-uploads/302a4c2c-e626-457b-a4f7-beabe01da93f.png",
      "/lovable-uploads/a14e0211-ab56-4f88-a110-36052b86054e.png",
      "/lovable-uploads/d6037b0d-8716-4959-ae79-059ac75fe8ae.png",
      "/lovable-uploads/4d027159-0943-4265-a547-9837e61b3cb0.png"
    ]
  }
};

export const mathLessonsStructure = {
  semester1: [
    { id: "1", title: "Les Ensembles - مجموعات الأعداد", description: "Étude des différents ensembles de nombres et leurs propriétés" },
    { id: "2", title: "Calcul dans ℝ - الحساب في ℝ", description: "Opérations et propriétés dans l'ensemble des réels" },
    { id: "3", title: "Ordre dans ℝ - الترتيب في ℝ", description: "Relations d'ordre et inégalités" },
    { id: "4", title: "Valeur absolue - القيمة المطلقة", description: "Définition et propriétés de la valeur absolue" },
    { id: "5", title: "Puissances - القوى", description: "Calcul avec les puissances et racines" },
    { id: "6", title: "Polynômes - كثيرات الحدود", description: "Opérations sur les polynômes" },
    { id: "7", title: "Équations - المعادلات", description: "Résolution d'équations du premier et second degré" }
  ],
  semester2: [
    { id: "8", title: "Inéquations - المتراجحات", description: "Résolution d'inéquations" },
    { id: "9", title: "Systèmes d'équations - جمل المعادلات", description: "Résolution de systèmes linéaires" },
    { id: "10", title: "Géométrie plane - الهندسة المستوية", description: "Figures géométriques dans le plan" },
    { id: "11", title: "Transformations - التحويلات", description: "Translation, rotation, symétrie" },
    { id: "12", title: "Fonctions - الدوال", description: "Introduction aux fonctions" },
    { id: "13", title: "Trigonométrie - المثلثات", description: "Fonctions trigonométriques" },
    { id: "14", title: "Statistiques - الإحصاء", description: "Étude statistique complète avec paramètres de position et de dispersion" }
  ]
};

export const mathExercisesData = {
  "14": {
    title: "Exercices de Statistiques",
    exercises: [
      {
        id: 1,
        title: "Calcul des paramètres statistiques",
        difficulty: "Moyen",
        duration: "20 min",
        points: 15,
        question: "Les notes obtenues par 20 élèves sont :\n9-8-10-12-10-8-15-18-16-15-12-12-10-10-9-8-15-12-8-10\n\nCalculer :\n1) Le mode\n2) La moyenne\n3) La médiane\n4) L'étendue",
        solution: "1) Mode : Dressons le tableau des effectifs :\n   Note: 8  9  10  12  15  16  18\n   Effectif: 4  2  5  4  3  1  1\n   Le mode est 10 (effectif le plus fort = 5)\n\n2) Moyenne :\n   x̄ = (8×4 + 9×2 + 10×5 + 12×4 + 15×3 + 16×1 + 18×1)/20\n   x̄ = (32 + 18 + 50 + 48 + 45 + 16 + 18)/20 = 227/20 = 11,35\n\n3) Médiane : Rangeons les valeurs dans l'ordre croissant :\n   8,8,8,8,9,9,10,10,10,10,10,12,12,12,12,15,15,15,16,18\n   Médiane = (10e + 11e valeur)/2 = (10 + 10)/2 = 10\n\n4) Étendue = 18 - 8 = 10"
      },
      {
        id: 2,
        title: "Analyse des vitesses",
        difficulty: "Moyen",
        duration: "25 min",
        points: 18,
        question: "Les vitesses de 150 voitures ont été mesurées :\n[130,150[ : 15 voitures\n[110,130[ : 25 voitures\n[90,110[ : 60 voitures\n[70,90[ : 40 voitures\n[50,70[ : 10 voitures\n\nCalculer la moyenne et interpréter le résultat.",
        solution: "Pour les données groupées en classes, on prend le centre de chaque classe :\n- Centre de [130,150[ : 140\n- Centre de [110,130[ : 120\n- Centre de [90,110[ : 100\n- Centre de [70,90[ : 80\n- Centre de [50,70[ : 60\n\nMoyenne :\nx̄ = (140×15 + 120×25 + 100×60 + 80×40 + 60×10)/150\nx̄ = (2100 + 3000 + 6000 + 3200 + 600)/150\nx̄ = 14900/150 = 99,33 km/h\n\nInterprétation : La vitesse moyenne des voitures est d'environ 99,33 km/h."
      }
    ]
  }
};
