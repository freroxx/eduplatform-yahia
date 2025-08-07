// Math courses data with proper slide types
export const mathLessonsData = {
  "1": {
    title: "Les ensembles de nombres N, Z, Q, D et R",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Introduction aux ensembles de nombres",
        content: "Les nombres constituent la base fondamentale des mathématiques. Dans ce chapitre, nous allons explorer les différents ensembles de nombres : les nombres naturels (ℕ), les entiers relatifs (ℤ), les nombres rationnels (ℚ), les nombres décimaux (𝔻) et les nombres réels (ℝ).\n\nChaque ensemble possède ses propres propriétés et caractéristiques que nous détaillerons.",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "L'ensemble des nombres naturels ℕ",
        content: "L'ensemble des nombres naturels ℕ = {0, 1, 2, 3, 4, ...}\n\nPropriétés :\n• Ensemble infini\n• Possède un plus petit élément : 0\n• Tout nombre naturel a un successeur\n• Stable pour l'addition et la multiplication\n• Non stable pour la soustraction",
        type: "definition" as const
      },
      {
        id: 3,
        title: "L'ensemble des entiers relatifs ℤ",
        content: "L'ensemble des nombres entiers relatifs ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}\n\nPropriétés :\n• Extension de ℕ pour inclure les nombres négatifs\n• Stable pour l'addition, la soustraction et la multiplication\n• Non stable pour la division\n• Pas de plus petit ni plus grand élément",
        type: "definition" as const
      },
      {
        id: 4,
        title: "L'ensemble des nombres rationnels ℚ",
        content: "L'ensemble des nombres rationnels ℚ = {a/b | a ∈ ℤ, b ∈ ℤ*, b ≠ 0}\n\nPropriétés :\n• Tout nombre pouvant s'écrire sous forme de fraction\n• Stable pour les quatre opérations (sauf division par 0)\n• Dense : entre deux rationnels, il existe toujours un autre rationnel\n• Développement décimal fini ou périodique",
        type: "definition" as const
      },
      {
        id: 5,
        title: "L'ensemble des nombres décimaux 𝔻",
        content: "L'ensemble des nombres décimaux 𝔻 = {a/10^n | a ∈ ℤ, n ∈ ℕ}\n\nPropriétés :\n• Nombres ayant un développement décimal fini\n• Sous-ensemble de ℚ\n• 𝔻 ⊂ ℚ ⊂ ℝ\n• Exemples : 0,25 = 1/4, 3,14 = 314/100",
        type: "definition" as const
      },
      {
        id: 6,
        title: "L'ensemble des nombres réels ℝ",
        content: "L'ensemble des nombres réels ℝ contient tous les nombres rationnels et irrationnels.\n\nPropriétés :\n• Ensemble complet\n• Contient tous les autres ensembles\n• Stable pour toutes les opérations\n• Correspond à tous les points d'une droite\n• Inclut les nombres irrationnels comme π, √2, e",
        type: "definition" as const
      },
      {
        id: 7,
        title: "Relations d'inclusion",
        content: "Les ensembles de nombres sont organisés selon les inclusions suivantes :\n\nℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ\n\nCela signifie :\n• Tout nombre naturel est un entier relatif\n• Tout entier relatif est un nombre décimal\n• Tout nombre décimal est un nombre rationnel\n• Tout nombre rationnel est un nombre réel",
        type: "content" as const
      },
      {
        id: 8,
        title: "Synthèse et applications",
        content: "Cette hiérarchie des ensembles de nombres est fondamentale en mathématiques. Elle nous permet de :\n\n• Classer les nombres selon leurs propriétés\n• Comprendre les opérations possibles dans chaque ensemble\n• Résoudre des équations en identifiant l'ensemble solution\n• Établir des démonstrations rigoureuses",
        type: "summary" as const
      }
    ],
    videos: [
      { title: "Cours en Arabe", url: "https://www.youtube.com/watch?v=NOV6FpGLBZ8" },
      { title: "Cours en Français", url: "https://www.youtube.com/watch?v=WWJ8hoPSBAo" }
    ]
  },
  "2": {
    title: "Arithmétique dans ℕ",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Introduction à l'arithmétique",
        content: "L'arithmétique est la branche des mathématiques qui étudie les propriétés des nombres entiers naturels et les opérations sur ces nombres.\n\nNous allons explorer :\n• La divisibilité\n• Les nombres premiers\n• Le PGCD et PPCM\n• Les congruences",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Divisibilité dans ℕ",
        content: "Définition : Soit a et b deux entiers naturels avec b ≠ 0.\nOn dit que b divise a (noté b|a) s'il existe un entier naturel k tel que a = b × k.\n\nPropriétés :\n• Si a|b et b|c, alors a|c (transitivité)\n• Si a|b et a|c, alors a|(b+c) et a|(b-c)\n• Si a|b, alors a|bc pour tout entier c",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Nombres premiers",
        content: "Un nombre premier est un entier naturel supérieur à 1 qui n'admet que deux diviseurs : 1 et lui-même.\n\nExemples : 2, 3, 5, 7, 11, 13, 17, 19, 23...\n\nThéorème fondamental : Tout entier n > 1 se décompose de manière unique en produit de nombres premiers.\n\nCrible d'Ératosthène : Méthode pour trouver tous les nombres premiers inférieurs à un nombre donné.",
        type: "definition" as const
      },
      {
        id: 4,
        title: "PGCD - Plus Grand Commun Diviseur",
        content: "Le PGCD de deux entiers a et b est le plus grand entier qui divise à la fois a et b.\n\nAlgorithme d'Euclide :\npgcd(a,b) = pgcd(b, a mod b) si b ≠ 0\npgcd(a,0) = a\n\nPropriétés :\n• pgcd(a,b) × ppcm(a,b) = a × b\n• Si pgcd(a,b) = 1, alors a et b sont premiers entre eux",
        type: "definition" as const
      },
      {
        id: 5,
        title: "Exemple de calcul de PGCD",
        content: "Calculons pgcd(252, 105) avec l'algorithme d'Euclide :\n\n252 = 105 × 2 + 42\n105 = 42 × 2 + 21\n42 = 21 × 2 + 0\n\nDonc pgcd(252, 105) = 21\n\nVérification :\n252 = 21 × 12\n105 = 21 × 5\npgcd(12, 5) = 1 ✓",
        type: "example" as const
      },
      {
        id: 6,
        title: "Applications de l'arithmétique",
        content: "L'arithmétique a de nombreuses applications :\n\n• Cryptographie (chiffrement RSA)\n• Théorie des codes correcteurs\n• Résolution d'équations diophantiennes\n• Calendriers et cycles temporels\n• Partage équitable de ressources\n• Optimisation de problèmes discrets",
        type: "summary" as const
      }
    ],
    videos: [
      { title: "Cours en Arabe", url: "https://www.youtube.com/watch?v=-cmV1kRllWw" },
      { title: "Cours en Français", url: "https://www.youtube.com/watch?v=L_hVwt3qQpk" }
    ]
  },
  "3": {
    title: "Calcul vectoriel dans le plan",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Introduction aux vecteurs",
        content: "Un vecteur est un objet mathématique caractérisé par :\n• Une direction\n• Un sens\n• Une norme (longueur)\n\nNotation : AB⃗ représente le vecteur d'origine A et d'extrémité B.\n\nLes vecteurs permettent de représenter des grandeurs physiques comme la vitesse, la force, l'accélération.",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Opérations sur les vecteurs",
        content: "Addition vectorielle :\nu⃗ + v⃗ suit la règle du parallélogramme ou de Chasles.\n\nMultiplication par un scalaire :\nk·u⃗ a même direction que u⃗, même sens si k > 0, sens opposé si k < 0.\n\nPropriétés :\n• u⃗ + v⃗ = v⃗ + u⃗ (commutativité)\n• (u⃗ + v⃗) + w⃗ = u⃗ + (v⃗ + w⃗) (associativité)\n• k(u⃗ + v⃗) = ku⃗ + kv⃗ (distributivité)",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Coordonnées d'un vecteur",
        content: "Dans un repère orthonormé (O, i⃗, j⃗), tout vecteur u⃗ s'écrit :\nu⃗ = xi⃗ + yj⃗ = (x, y)\n\nSi A(x₁, y₁) et B(x₂, y₂), alors :\nAB⃗ = (x₂ - x₁, y₂ - y₁)\n\nNorme : ||u⃗|| = √(x² + y²)\n\nOpérations :\n• u⃗ + v⃗ = (x₁ + x₂, y₁ + y₂)\n• ku⃗ = (kx, ky)",
        type: "definition" as const
      },
      {
        id: 4,
        title: "Colinéarité et parallélisme",
        content: "Deux vecteurs u⃗ et v⃗ sont colinéaires s'il existe un réel k tel que v⃗ = ku⃗.\n\nTest de colinéarité avec les coordonnées :\nu⃗(x₁, y₁) et v⃗(x₂, y₂) sont colinéaires si et seulement si :\nx₁y₂ - x₂y₁ = 0\n\nConséquence : Deux droites sont parallèles si et seulement si leurs vecteurs directeurs sont colinéaires.",
        type: "definition" as const
      },
      {
        id: 5,
        title: "Applications géométriques",
        content: "Le calcul vectoriel permet de résoudre de nombreux problèmes géométriques :\n\n• Démontrer qu'un quadrilatère est un parallélogramme\n• Calculer des aires avec le produit vectoriel\n• Trouver l'équation d'une droite\n• Étudier la position relative de droites\n• Résoudre des problèmes de géométrie analytique",
        type: "summary" as const
      }
    ],
    videos: [
      { title: "Cours en Arabe", url: "https://www.youtube.com/watch?v=DCce28tAa70" },
      { title: "Cours en Français", url: "https://www.youtube.com/watch?v=AwzchpN8S9g" }
    ]
  },
  "4": {
    title: "La projection dans le plan",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Définition de la projection",
        content: "La projection orthogonale d'un point M sur une droite (d) est le point H de (d) tel que MH soit perpendiculaire à (d).\n\nPropriétés :\n• H est le point de (d) le plus proche de M\n• MH est la distance de M à la droite (d)\n• La projection conserve l'alignement",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Projection orthogonale sur un axe",
        content: "Soit u⃗ un vecteur unitaire dirigeant un axe (Δ).\nLa projection orthogonale du vecteur v⃗ sur (Δ) est :\n\nproj_u⃗(v⃗) = (v⃗ · u⃗)u⃗\n\noù v⃗ · u⃗ est le produit scalaire.\n\nLa composante de v⃗ selon u⃗ est : v⃗ · u⃗ = ||v⃗|| cos θ\noù θ est l'angle entre v⃗ et u⃗.",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Applications de la projection",
        content: "La projection orthogonale a de nombreuses applications :\n\n• Calcul de distances point-droite\n• Résolution de problèmes d'optimisation\n• Décomposition de forces en physique\n• Algorithmes de compression d'images\n• Analyse de données multidimensionnelles\n• Géométrie analytique",
        type: "content" as const
      }
    ],
    videos: [
      { title: "Cours en Arabe - Partie 1", url: "https://www.youtube.com/watch?v=34qrpUz1vCc" },
      { title: "Cours en Arabe - Partie 2", url: "https://www.youtube.com/watch?v=F7vz_Az_72U" }
    ]
  },
  "5": {
    title: "L'ordre dans ℝ",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Relation d'ordre dans ℝ",
        content: "La relation ≤ dans ℝ est une relation d'ordre total qui vérifie :\n\n• Réflexivité : a ≤ a\n• Antisymétrie : si a ≤ b et b ≤ a, alors a = b\n• Transitivité : si a ≤ b et b ≤ c, alors a ≤ c\n• Ordre total : pour tous a, b ∈ ℝ, on a a ≤ b ou b ≤ a",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Propriétés de l'ordre",
        content: "L'ordre dans ℝ est compatible avec les opérations :\n\nAddition :\nSi a ≤ b, alors a + c ≤ b + c pour tout c ∈ ℝ\n\nMultiplication :\n• Si a ≤ b et c ≥ 0, alors ac ≤ bc\n• Si a ≤ b et c ≤ 0, alors ac ≥ bc\n\nCes propriétés permettent de résoudre les inéquations.",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Valeur absolue",
        content: "La valeur absolue de x ∈ ℝ est définie par :\n\n|x| = { x si x ≥ 0\n       {-x si x < 0\n\nPropriétés :\n• |x| ≥ 0 et |x| = 0 ⟺ x = 0\n• |xy| = |x||y|\n• |x + y| ≤ |x| + |y| (inégalité triangulaire)\n• ||x| - |y|| ≤ |x - y|",
        type: "definition" as const
      },
      {
        id: 4,
        title: "Intervalles de ℝ",
        content: "Un intervalle est un sous-ensemble de ℝ \"sans trou\" :\n\n• [a,b] = {x ∈ ℝ | a ≤ x ≤ b} (fermé)\n• (a,b) = {x ∈ ℝ | a < x < b} (ouvert)\n• [a,b) = {x ∈ ℝ | a ≤ x < b} (semi-ouvert)\n• (-∞,a] = {x ∈ ℝ | x ≤ a}\n• [a,+∞) = {x ∈ ℝ | x ≥ a}\n• (-∞,+∞) = ℝ",
        type: "definition" as const
      },
      {
        id: 5,
        title: "Résolution d'inéquations",
        content: "Méthodologie pour résoudre les inéquations :\n\n1. Simplifier l'inéquation\n2. Regrouper tous les termes d'un côté\n3. Factoriser si possible\n4. Étudier le signe\n5. Dresser un tableau de signes\n6. Conclure selon l'inéquation initiale\n\nExemple : x² - 5x + 6 > 0\nFactorisation : (x-2)(x-3) > 0\nSolution : x ∈ (-∞,2) ∪ (3,+∞)",
        type: "example" as const
      }
    ],
    videos: [
      { title: "Cours en Arabe", url: "https://www.youtube.com/watch?v=vDXWhuLUTUg" },
      { title: "Cours en Français", url: "https://www.youtube.com/watch?v=9MtAK7Xzrls" }
    ]
  },
  "6": {
    title: "La droite dans le plan",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Équations de droite",
        content: "Une droite dans le plan peut être définie par plusieurs types d'équations :\n\n• Équation cartésienne : ax + by + c = 0\n• Équation réduite : y = mx + p (si la droite n'est pas verticale)\n• Équation paramétrique : {x = x₀ + at, y = y₀ + bt}\n• Équation vectorielle : OM⃗ = OA⃗ + tu⃗",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Vecteur directeur et normal",
        content: "Pour une droite (d) d'équation ax + by + c = 0 :\n\n• Vecteur normal : n⃗(-b, a)\n• Vecteur directeur : u⃗(-b, a)\n\nPour l'équation réduite y = mx + p :\n• Coefficient directeur : m = tan α (α = angle avec l'axe des x)\n• Vecteur directeur : u⃗(1, m)\n• Ordonnée à l'origine : p",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Position relative de deux droites",
        content: "Soient (d₁) : a₁x + b₁y + c₁ = 0 et (d₂) : a₂x + b₂y + c₂ = 0\n\n• Parallèles : a₁b₂ - a₂b₁ = 0 et pas confondues\n• Confondues : a₁b₂ - a₂b₁ = 0 et même équation\n• Sécantes : a₁b₂ - a₂b₁ ≠ 0\n• Perpendiculaires : a₁a₂ + b₁b₂ = 0\n\nPoint d'intersection : résolution du système {a₁x + b₁y + c₁ = 0, a₂x + b₂y + c₂ = 0}",
        type: "definition" as const
      },
      {
        id: 4,
        title: "Distance point-droite",
        content: "La distance du point M(x₀, y₀) à la droite (d) : ax + by + c = 0 est :\n\nd(M,(d)) = |ax₀ + by₀ + c| / √(a² + b²)\n\nCette formule découle de la projection orthogonale du point sur la droite.\n\nApplication : cette distance est minimale parmi toutes les distances de M aux points de (d).",
        type: "definition" as const
      },
      {
        id: 5,
        title: "Applications géométriques",
        content: "L'étude des droites permet de résoudre de nombreux problèmes :\n\n• Déterminer l'équation d'une médiatrice\n• Trouver l'orthocentre d'un triangle\n• Calculer l'aire d'un polygone\n• Résoudre des problèmes d'optimisation géométrique\n• Étudier les transformations du plan\n• Analyse de figures géométriques",
        type: "summary" as const
      }
    ],
    videos: [
      { title: "Cours en Arabe", url: "https://www.youtube.com/watch?v=nIeyaxowOjw" },
      { title: "Cours en Français", url: "https://www.youtube.com/watch?v=zH5vSPaSsHI" }
    ]
  },
  "7": {
    title: "Les polynômes",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Définition d'un polynôme",
        content: "Un polynôme à une variable x est une expression de la forme :\nP(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀\n\noù :\n• aᵢ sont les coefficients (nombres réels)\n• n est le degré du polynôme (si aₙ ≠ 0)\n• a₀ est le terme constant\n• aₙ est le coefficient dominant",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Opérations sur les polynômes",
        content: "Addition : (P + Q)(x) = P(x) + Q(x)\nLe degré de P + Q est au plus max(deg P, deg Q)\n\nMultiplication : (P × Q)(x) = P(x) × Q(x)\nLe degré de P × Q est deg P + deg Q\n\nDivision euclidienne : Pour P et Q avec Q ≠ 0,\nil existe des polynômes uniques q et r tels que :\nP = Qq + r avec deg r < deg Q",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Racines d'un polynôme",
        content: "Une racine (ou zéro) du polynôme P est un nombre a tel que P(a) = 0.\n\nThéorème : Si a est racine de P, alors (x - a) divise P(x).\nRéciproquement, si (x - a) divise P(x), alors a est racine de P.\n\nMultiplicité : a est racine de multiplicité k si (x - a)ᵏ divise P(x) mais (x - a)ᵏ⁺¹ ne divise pas P(x).\n\nUn polynôme de degré n a au plus n racines (comptées avec leur multiplicité).",
        type: "definition" as const
      },
      {
        id: 4,
        title: "Factorisation des polynômes",
        content: "Identités remarquables :\n• a² - b² = (a-b)(a+b)\n• a² + 2ab + b² = (a+b)²\n• a² - 2ab + b² = (a-b)²\n• a³ - b³ = (a-b)(a² + ab + b²)\n• a³ + b³ = (a+b)(a² - ab + b²)\n\nMéthodes de factorisation :\n• Facteur commun\n• Identités remarquables\n• Groupements\n• Recherche de racines évidentes",
        type: "content" as const
      },
      {
        id: 5,
        title: "Polynômes du second degré",
        content: "Pour P(x) = ax² + bx + c (a ≠ 0) :\n\nDiscriminant : Δ = b² - 4ac\n\n• Si Δ > 0 : deux racines distinctes x₁,₂ = (-b ± √Δ)/(2a)\n• Si Δ = 0 : une racine double x₀ = -b/(2a)\n• Si Δ < 0 : pas de racines réelles\n\nForme factorisée : P(x) = a(x - x₁)(x - x₂) si Δ ≥ 0\nForme canonique : P(x) = a(x + b/(2a))² - Δ/(4a)",
        type: "definition" as const
      }
    ],
    videos: [
      { title: "Cours en Arabe - Partie 1", url: "https://www.youtube.com/watch?v=msAZWl8lepI" },
      { title: "Cours en Arabe - Partie 2", url: "https://www.youtube.com/watch?v=_s9crOAALgk" },
      { title: "Cours en Arabe - Partie 3", url: "https://www.youtube.com/watch?v=EscYeHISkYw" }
    ]
  },
  "8": {
    title: "Équations, inéquations et systèmes",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Équations du premier degré",
        content: "Une équation du premier degré a la forme ax + b = 0 où a ≠ 0.\n\nSolution : x = -b/a\n\nMéthode de résolution :\n1. Développer et simplifier\n2. Regrouper les termes en x d'un côté\n3. Regrouper les constantes de l'autre côté\n4. Diviser par le coefficient de x\n\nExemple : 3x - 7 = 2x + 5\n⟺ 3x - 2x = 5 + 7\n⟺ x = 12",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Équations du second degré",
        content: "Une équation du second degré a la forme ax² + bx + c = 0 où a ≠ 0.\n\nFormule générale : x = (-b ± √Δ)/(2a) où Δ = b² - 4ac\n\nAnalyse selon le discriminant :\n• Δ > 0 : deux solutions distinctes\n• Δ = 0 : une solution double\n• Δ < 0 : aucune solution réelle\n\nRelations entre coefficients et racines :\n• Somme : x₁ + x₂ = -b/a\n• Produit : x₁ × x₂ = c/a",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Inéquations",
        content: "Résoudre une inéquation consiste à trouver toutes les valeurs qui la satisfont.\n\nPrincipes de résolution :\n• Même opérations que pour les équations\n• ATTENTION : multiplier ou diviser par un nombre négatif change le sens de l'inégalité\n\nInéquations du second degré :\n1. Trouver les racines de l'équation associée\n2. Étudier le signe du trinôme\n3. Dresser un tableau de signes\n4. Conclure selon l'inéquation demandée",
        type: "definition" as const
      },
      {
        id: 4,
        title: "Systèmes d'équations linéaires",
        content: "Système 2×2 : {ax + by = c, dx + ey = f}\n\nMéthodes de résolution :\n\n1. Substitution :\n   • Exprimer une variable en fonction de l'autre\n   • Substituer dans la seconde équation\n\n2. Combinaisons linéaires :\n   • Éliminer une variable par addition/soustraction\n   • Résoudre l'équation à une inconnue obtenue\n\n3. Méthode de Cramer (si le déterminant ≠ 0)",
        type: "definition" as const
      },
      {
        id: 5,
        title: "Applications pratiques",
        content: "Les équations et systèmes permettent de modéliser de nombreuses situations :\n\n• Problèmes d'optimisation économique\n• Calculs de trajectoires en physique\n• Problèmes de mélanges et d'alliages\n• Gestion de stocks et production\n• Problèmes géométriques\n• Analyse de circuits électriques\n• Modélisation de phénomènes naturels",
        type: "summary" as const
      }
    ],
    videos: [
      { title: "Cours en Arabe", url: "https://www.youtube.com/watch?v=QLmDbDeZ0MU" },
      { title: "Cours en Français", url: "https://www.youtube.com/watch?v=3aQDg36Rbm0" }
    ]
  },
  "9": {
    title: "Trigonométrie 1 (Règles du calcul trigonométrique)",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Le cercle trigonométrique",
        content: "Le cercle trigonométrique est le cercle de centre O et de rayon 1, orienté dans le sens direct (sens inverse des aiguilles d'une montre).\n\nSur ce cercle, à tout nombre réel x correspond un point M(x) tel que :\n• cos x est l'abscisse de M(x)\n• sin x est l'ordonnée de M(x)\n• tan x = sin x / cos x (si cos x ≠ 0)",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Fonctions trigonométriques",
        content: "Les trois fonctions trigonométriques principales :\n\n• Cosinus : cos : ℝ → [-1,1], périodique de période 2π\n• Sinus : sin : ℝ → [-1,1], périodique de période 2π\n• Tangente : tan : ℝ\\{π/2 + kπ, k∈ℤ} → ℝ, périodique de période π\n\nRelation fondamentale : cos²x + sin²x = 1 pour tout x ∈ ℝ",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Valeurs remarquables",
        content: "Angles remarquables et leurs valeurs :\n\n• 0° (0 rad) : cos = 1, sin = 0, tan = 0\n• 30° (π/6 rad) : cos = √3/2, sin = 1/2, tan = √3/3\n• 45° (π/4 rad) : cos = √2/2, sin = √2/2, tan = 1\n• 60° (π/3 rad) : cos = 1/2, sin = √3/2, tan = √3\n• 90° (π/2 rad) : cos = 0, sin = 1, tan non définie\n\nCes valeurs se déduisent par symétries pour tous les autres angles.",
        type: "definition" as const
      },
      {
        id: 4,
        title: "Formules de trigonométrie",
        content: "Formules d'addition :\n• cos(a + b) = cos a cos b - sin a sin b\n• cos(a - b) = cos a cos b + sin a sin b\n• sin(a + b) = sin a cos b + cos a sin b\n• sin(a - b) = sin a cos b - cos a sin b\n\nFormules de duplication :\n• cos(2a) = cos²a - sin²a = 2cos²a - 1 = 1 - 2sin²a\n• sin(2a) = 2sin a cos a",
        type: "definition" as const
      },
      {
        id: 5,
        title: "Applications du calcul trigonométrique",
        content: "La trigonométrie a de nombreuses applications :\n\n• Résolution de triangles quelconques\n• Physique : oscillations, ondes, mouvement circulaire\n• Ingénierie : analyse de signaux, traitement d'images\n• Astronomie : calculs de positions stellaires\n• Architecture : calculs de structures\n• Informatique graphique : rotations, transformations",
        type: "summary" as const
      }
    ]
  },
  "10": {
    title: "Trigonométrie 2 (Équations et inéquations trigonométriques)",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Équations trigonométriques simples",
        content: "Résolution d'équations de base :\n\n• cos x = a : x = ±arccos(a) + 2kπ (si |a| ≤ 1)\n• sin x = a : x = arcsin(a) + 2kπ ou x = π - arcsin(a) + 2kπ (si |a| ≤ 1)\n• tan x = a : x = arctan(a) + kπ\n\nPour résoudre sur un intervalle donné, on détermine les valeurs de k appropriées.",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Équations trigonométriques composées",
        content: "Méthodes pour les équations plus complexes :\n\n1. Utiliser les identités trigonométriques pour simplifier\n2. Factoriser quand c'est possible\n3. Utiliser les changements de variable (ex: t = tan(x/2))\n4. Transformer produits en sommes ou vice versa\n\nExemple : 2cos²x - 3cos x + 1 = 0\nPosons u = cos x : 2u² - 3u + 1 = 0\nSolutions : u = 1 ou u = 1/2\nDonc : cos x = 1 ou cos x = 1/2",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Inéquations trigonométriques",
        content: "Pour résoudre une inéquation trigonométrique :\n\n1. Se ramener à une inéquation simple\n2. Utiliser le cercle trigonométrique pour visualiser\n3. Tenir compte de la périodicité\n4. Donner la solution sous forme d'union d'intervalles\n\nExemple : sin x ≥ 1/2\nSur [0, 2π] : x ∈ [π/6, 5π/6]\nSolution générale : x ∈ [π/6 + 2kπ, 5π/6 + 2kπ], k ∈ ℤ",
        type: "definition" as const
      }
    ]
  },
  "11": {
    title: "Généralités sur les fonctions",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Définition d'une fonction",
        content: "Une fonction f de A vers B est une relation qui associe à chaque élément x de A au plus un élément y de B.\n\nNotation : f : A → B, x ↦ f(x)\n\n• A est l'ensemble de départ\n• B est l'ensemble d'arrivée\n• Le domaine de définition Df est l'ensemble des x pour lesquels f(x) existe\n• L'ensemble image est {f(x) | x ∈ Df}",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Propriétés des fonctions",
        content: "Parité :\n• Fonction paire : f(-x) = f(x) (symétrie par rapport à l'axe des y)\n• Fonction impaire : f(-x) = -f(x) (symétrie par rapport à l'origine)\n\nMonotonie :\n• Croissante : x₁ < x₂ ⟹ f(x₁) ≤ f(x₂)\n• Décroissante : x₁ < x₂ ⟹ f(x₁) ≥ f(x₂)\n• Strictement monotone : inégalités strictes\n\nPériodicité : f(x + T) = f(x) pour tout x (T est la période)",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Opérations sur les fonctions",
        content: "Soit f et g deux fonctions :\n\n• Somme : (f + g)(x) = f(x) + g(x)\n• Produit : (f × g)(x) = f(x) × g(x)\n• Quotient : (f/g)(x) = f(x)/g(x) si g(x) ≠ 0\n• Composée : (g ∘ f)(x) = g(f(x))\n\nLe domaine de définition de chaque opération dépend des domaines de f et g.",
        type: "definition" as const
      }
    ]
  },
  "12": {
    title: "Transformations du plan",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Les isométries du plan",
        content: "Une isométrie est une transformation qui conserve les distances.\n\nLes quatre isométries du plan :\n• Translation\n• Rotation\n• Réflexion (symétrie axiale)\n• Symétrie glissée\n\nPropriété : Les isométries conservent les longueurs, les angles, les aires et l'alignement.",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Translations et rotations",
        content: "Translation de vecteur u⃗ :\n• Image de M : M' tel que MM'⃗ = u⃗\n• Conserve la direction et le sens\n\nRotation de centre O et d'angle θ :\n• Image de M : M' tel que OM' = OM et (OM⃗, OM'⃗) = θ\n• Conserve les distances au centre\n• Composition de deux rotations de même centre = rotation",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Similitudes",
        content: "Une similitude est une transformation qui multiplie toutes les distances par un même facteur k > 0 (rapport de similitude).\n\nTypes de similitudes :\n• Homothétie : centre fixe, rapport k\n• Similitude directe : composition d'une homothétie et d'une rotation\n• Similitude indirecte : composition avec une réflexion\n\nPropriétés : conserve les angles et les rapports de longueurs.",
        type: "definition" as const
      }
    ]
  },
  "13": {
    title: "Le produit scalaire",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Définition du produit scalaire",
        content: "Le produit scalaire de deux vecteurs u⃗ et v⃗ est le nombre réel :\n\nu⃗ · v⃗ = ||u⃗|| × ||v⃗|| × cos θ\n\noù θ est l'angle entre u⃗ et v⃗.\n\nEn coordonnées : si u⃗(x₁, y₁) et v⃗(x₂, y₂), alors :\nu⃗ · v⃗ = x₁x₂ + y₁y₂",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Propriétés du produit scalaire",
        content: "Le produit scalaire vérifie :\n\n• Commutativité : u⃗ · v⃗ = v⃗ · u⃗\n• Bilinéarité : (au⃗ + bv⃗) · w⃗ = au⃗ · w⃗ + bv⃗ · w⃗\n• u⃗ · u⃗ = ||u⃗||² ≥ 0\n• u⃗ · v⃗ = 0 ⟺ u⃗ ⊥ v⃗ (orthogonalité)\n\nInégalité de Cauchy-Schwarz : |u⃗ · v⃗| ≤ ||u⃗|| × ||v⃗||",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Applications géométriques",
        content: "Le produit scalaire permet de :\n\n• Calculer des longueurs : ||u⃗||² = u⃗ · u⃗\n• Déterminer des angles : cos θ = (u⃗ · v⃗)/(||u⃗|| × ||v⃗||)\n• Tester l'orthogonalité : u⃗ ⊥ v⃗ ⟺ u⃗ · v⃗ = 0\n• Calculer des distances et projections\n• Démontrer des propriétés géométriques (théorème de Pythagore, etc.)",
        type: "summary" as const
      }
    ]
  },
  "14": {
    title: "Géométrie dans l'espace",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Repérage dans l'espace",
        content: "L'espace est muni d'un repère orthonormé (O, i⃗, j⃗, k⃗) :\n\n• Tout point M a des coordonnées (x, y, z)\n• Tout vecteur u⃗ a des coordonnées (x, y, z)\n• Distance : OM = √(x² + y² + z²)\n• Milieu de [AB] : ((xₐ+xᵦ)/2, (yₐ+yᵦ)/2, (zₐ+zᵦ)/2)\n\nLes opérations vectorielles s'étendent naturellement à l'espace.",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Produit scalaire dans l'espace",
        content: "Pour u⃗(x₁, y₁, z₁) et v⃗(x₂, y₂, z₂) :\n\nu⃗ · v⃗ = x₁x₂ + y₁y₂ + z₁z₂\n\nPropriétés identiques au plan :\n• Orthogonalité : u⃗ ⊥ v⃗ ⟺ u⃗ · v⃗ = 0\n• Norme : ||u⃗|| = √(u⃗ · u⃗)\n• Angle : cos θ = (u⃗ · v⃗)/(||u⃗|| × ||v⃗||)",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Droites dans l'espace",
        content: "Une droite dans l'espace peut être définie par :\n\n• Représentation paramétrique :\n  {x = x₀ + at, y = y₀ + bt, z = z₀ + ct}\n  où (x₀, y₀, z₀) est un point de la droite et (a, b, c) un vecteur directeur\n\n• Intersection de deux plans (si elle existe)\n\nPosition relative de deux droites :\n• Confondues, parallèles, sécantes ou gauches",
        type: "definition" as const
      },
      {
        id: 4,
        title: "Plans dans l'espace",
        content: "Un plan peut être défini par :\n\n• Équation cartésienne : ax + by + cz + d = 0\n  où (a, b, c) est un vecteur normal au plan\n\n• Représentation paramétrique :\n  OM⃗ = OA⃗ + su⃗ + tv⃗\n  où A est un point du plan et u⃗, v⃗ deux vecteurs directeurs\n\nDistance d'un point M₀(x₀, y₀, z₀) au plan ax + by + cz + d = 0 :\nd = |ax₀ + by₀ + cz₀ + d| / √(a² + b² + c²)",
        type: "definition" as const
      },
      {
        id: 5,
        title: "Géométrie des solides",
        content: "Principaux solides et leurs propriétés :\n\n• Cube : 6 faces carrées, 8 sommets, 12 arêtes\n• Parallélépipède rectangle : faces rectangulaires\n• Pyramide : base polygonale, sommet\n• Prisme : deux bases parallèles identiques\n• Cylindre : section circulaire constante\n• Cône : sommet et base circulaire\n• Sphère : ensemble des points équidistants du centre",
        type: "content" as const
      }
    ],
    images: [
      "/lovable-uploads/54e9514f-84af-4d63-8dfa-568532e403fb.png",
      "/lovable-uploads/027b5232-2600-493c-929d-90ad770a5188.png",
      "/lovable-uploads/8eac1178-3ea4-41eb-ba6e-59860a36a38c.png",
      "/lovable-uploads/11d170f1-9482-4f75-9865-cb90afe50c95.png",
      "/lovable-uploads/29736d58-ac5c-4a2f-ab07-dd13a79a30d0.png",
      "/lovable-uploads/df931ac0-a8f7-4ed2-80e6-856b662fd8d6.png",
      "/lovable-uploads/67b0b5a4-09ac-40b5-8dc5-d366924f161a.png",
      "/lovable-uploads/3c866e1c-ae39-412d-ab0c-6fc1ae7fed02.png",
      "/lovable-uploads/0d34cea1-ec58-43b6-bcc2-349fd4a93539.png"
    ]
  },
  "15": {
    title: "Statistiques",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Introduction aux statistiques",
        content: "Les statistiques permettent de collecter, organiser, analyser et interpréter des données.\n\nVocabulaire de base :\n• Population : ensemble étudié\n• Individu : élément de la population\n• Caractère : propriété étudiée\n• Modalité : valeur prise par le caractère\n• Effectif : nombre d'individus ayant une modalité donnée",
        type: "introduction" as const
      },
      {
        id: 2,
        title: "Paramètres de position",
        content: "Pour une série statistique :\n\n• Moyenne : x̄ = (1/n)Σxᵢnᵢ\n• Médiane : valeur qui partage la série en deux parties égales\n• Mode : modalité de plus grand effectif\n• Quartiles :\n  - Q₁ : 25% des valeurs sont inférieures\n  - Q₃ : 75% des valeurs sont inférieures\n  - Écart interquartile : Q₃ - Q₁",
        type: "definition" as const
      },
      {
        id: 3,
        title: "Paramètres de dispersion",
        content: "Mesures de la dispersion des données :\n\n• Étendue : max - min\n• Variance : V = (1/n)Σnᵢ(xᵢ - x̄)²\n• Écart-type : σ = √V\n• Coefficient de variation : CV = σ/x̄\n\nInterprétation :\n• Plus σ est grand, plus les données sont dispersées\n• σ = 0 ⟺ toutes les valeurs sont égales",
        type: "definition" as const
      },
      {
        id: 4,
        title: "Représentations graphiques",
        content: "Différents graphiques selon le type de données :\n\n• Caractère qualitatif : diagramme en secteurs, en barres\n• Caractère quantitatif discret : diagramme en bâtons\n• Caractère quantitatif continu : histogramme\n• Évolution temporelle : graphique linéaire\n• Comparaisons : diagrammes en barres groupées\n• Distribution : boîte à moustaches (box plot)",
        type: "content" as const
      },
      {
        id: 5,
        title: "Applications des statistiques",
        content: "Les statistiques sont utilisées dans de nombreux domaines :\n\n• Économie : études de marché, analyses financières\n• Médecine : essais cliniques, épidémiologie\n• Sciences sociales : sondages d'opinion\n• Industrie : contrôle qualité, amélioration des processus\n• Recherche scientifique : validation d'hypothèses\n• Sport : analyse de performances\n• Politique publique : aide à la décision",
        type: "summary" as const
      }
    ]
  }
};

// Math exercises data
export const mathExercisesData = {
  "1": {
    title: "Exercices - Les ensembles de nombres",
    exercises: [
      {
        id: 1,
        title: "Classification des nombres",
        question: "Classer les nombres suivants dans les ensembles ℕ, ℤ, 𝔻, ℚ, ℝ :\na) 5\nb) -3\nc) 2/3\nd) √2\ne) 0,25",
        solution: "a) 5 ∈ ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ\nb) -3 ∈ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ (mais -3 ∉ ℕ)\nc) 2/3 ∈ ℚ ⊂ ℝ (mais 2/3 ∉ 𝔻)\nd) √2 ∈ ℝ (mais √2 ∉ ℚ car irrationnel)\ne) 0,25 = 1/4 ∈ 𝔻 ⊂ ℚ ⊂ ℝ",
        difficulty: "Facile",
        duration: "10 min",
        points: 10
      },
      {
        id: 2,
        title: "Développements décimaux",
        question: "Déterminer la nature du développement décimal de :\na) 3/4\nb) 1/3\nc) 5/6\nd) 7/11",
        solution: "a) 3/4 = 0,75 (fini, donc 3/4 ∈ 𝔻)\nb) 1/3 = 0,333... (périodique, donc 1/3 ∈ ℚ\\𝔻)\nc) 5/6 = 0,8333... (périodique, donc 5/6 ∈ ℚ\\𝔻)\nd) 7/11 = 0,636363... (périodique, donc 7/11 ∈ ℚ\\𝔻)",
        difficulty: "Moyen",
        duration: "15 min",
        points: 15
      }
    ]
  },
  "2": {
    title: "Exercices - Arithmétique dans ℕ",
    exercises: [
      {
        id: 1,
        title: "Divisibilité",
        question: "Déterminer si :\na) 143 est divisible par 11\nb) 2024 est divisible par 8\nc) 1547 est divisible par 7",
        solution: "a) 143 = 11 × 13, donc 143 est divisible par 11\nb) 2024 = 8 × 253, donc 2024 est divisible par 8\nc) 1547 ÷ 7 = 221, donc 1547 est divisible par 7",
        difficulty: "Facile",
        duration: "10 min",
        points: 10
      },
      {
        id: 2,
        title: "PGCD et algorithme d'Euclide",
        question: "Calculer pgcd(252, 105) en utilisant l'algorithme d'Euclide.",
        solution: "252 = 105 × 2 + 42\n105 = 42 × 2 + 21\n42 = 21 × 2 + 0\n\nDonc pgcd(252, 105) = 21\n\nVérification :\n252 = 21 × 12\n105 = 21 × 5\npgcd(12, 5) = 1 ✓",
        difficulty: "Moyen",
        duration: "15 min",
        points: 15
      }
    ]
  },
  // Add more exercises for other lessons...
  "14": {
    title: "Exercices - Géométrie dans l'espace",
    exercises: [
      {
        id: 1,
        title: "Coordonnées dans l'espace",
        question: "Dans un repère orthonormé (O, i⃗, j⃗, k⃗), on donne A(1, 2, 3) et B(4, -1, 2).\na) Calculer les coordonnées du vecteur AB⃗\nb) Calculer la longueur AB\nc) Déterminer les coordonnées du milieu I de [AB]",
        solution: "a) AB⃗ = (4-1, -1-2, 2-3) = (3, -3, -1)\n\nb) AB = ||AB⃗|| = √(3² + (-3)² + (-1)²) = √(9 + 9 + 1) = √19\n\nc) I = ((1+4)/2, (2+(-1))/2, (3+2)/2) = (2.5, 0.5, 2.5)",
        difficulty: "Facile",
        duration: "15 min",
        points: 12
      },
      {
        id: 2,
        title: "Équation d'un plan",
        question: "Déterminer l'équation cartésienne du plan passant par A(1, 0, 2) et de vecteur normal n⃗(2, -1, 3).",
        solution: "L'équation d'un plan de vecteur normal n⃗(a, b, c) passant par A(x₀, y₀, z₀) est :\na(x - x₀) + b(y - y₀) + c(z - z₀) = 0\n\nIci : n⃗(2, -1, 3) et A(1, 0, 2)\nDonc : 2(x - 1) - 1(y - 0) + 3(z - 2) = 0\n2x - 2 - y + 3z - 6 = 0\n2x - y + 3z - 8 = 0",
        difficulty: "Moyen",
        duration: "20 min",
        points: 18
      },
      {
        id: 3,
        title: "Intersection droite-plan",
        question: "Étudier l'intersection de la droite (d) de représentation paramétrique :\n{x = 1 + 2t, y = -1 + t, z = 3 - t}\navec le plan (P) : x + y - z + 1 = 0",
        solution: "Substituons les équations paramétriques dans l'équation du plan :\n(1 + 2t) + (-1 + t) - (3 - t) + 1 = 0\n1 + 2t - 1 + t - 3 + t + 1 = 0\n4t - 2 = 0\nt = 1/2\n\nPoint d'intersection :\nx = 1 + 2(1/2) = 2\ny = -1 + 1/2 = -1/2\nz = 3 - 1/2 = 5/2\n\nLa droite et le plan se coupent au point M(2, -1/2, 5/2).",
        difficulty: "Difficile",
        duration: "25 min",
        points: 25
      }
    ]
  }
};
