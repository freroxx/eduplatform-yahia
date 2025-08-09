
// Math course data with lessons and exercises - Updated structure

export const mathLessonsData = {
  "1": {
    title: "Les ensembles de nombres ℕ, ℤ, ℚ, 𝔻 et ℝ",
    semester: 1,
    slides: [
      {
        title: "Introduction aux ensembles de nombres",
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

🔢 **Ensemble 𝔻 (Décimaux)** : Nombres avec un nombre fini de décimales
• Sous-ensemble de ℚ
• Représentation décimale finie

🔢 **Ensemble ℝ (Réels)** : Tous les nombres sur la droite numérique
• Incluent les irrationnels (π, √2, e)
• Complètent la droite numérique
• Base de l'analyse mathématique`,
        type: "intro" as const
      },
      {
        title: "Relations d'inclusion et propriétés",
        content: `⚡ Relations entre les ensembles

**Relation d'inclusion :**
ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ

**Propriétés des opérations :**
• Commutativité : a + b = b + a, a × b = b × a
• Associativité : (a + b) + c = a + (b + c)
• Distributivité : a × (b + c) = a × b + a × c

**Éléments neutres :**
• Pour l'addition : 0 (zéro)
• Pour la multiplication : 1 (un)

**Inverses :**
• Opposé pour l'addition : a + (-a) = 0
• Inverse pour la multiplication : a × (1/a) = 1 (si a ≠ 0)

**Exemples de classification :**
• 5 ∈ ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ
• -3 ∈ ℤ ⊂ ℚ ⊂ ℝ
• 0,25 = 1/4 ∈ 𝔻 ⊂ ℚ ⊂ ℝ
• π ∈ ℝ \\ ℚ (irrationnel)`,
        type: "definition" as const
      }
    ],
    videos: [
      { title: "Les ensembles de nombres - Cours complet", url: "https://www.youtube.com/watch?v=abc123", duration: "25:30" },
      { title: "Exercices sur les ensembles", url: "https://www.youtube.com/watch?v=def456", duration: "18:45" }
    ]
  },
  "2": {
    title: "Arithmétique dans ℕ",
    semester: 1,
    slides: [
      {
        title: "Divisibilité et nombres premiers",
        content: `🔢 Arithmétique dans ℕ

**Divisibilité :**
Soit a et b deux entiers naturels avec b ≠ 0.
On dit que b divise a (noté b|a) s'il existe un entier k tel que a = b × k.

**Propriétés de la divisibilité :**
• Si a|b et b|c, alors a|c (transitivité)
• Si a|b et a|c, alors a|(b + c) et a|(b - c)
• Si a|b, alors a|bc pour tout entier c

**Nombres premiers :**
Un nombre premier est un entier naturel supérieur à 1 qui n'admet que deux diviseurs : 1 et lui-même.

**Exemples :** 2, 3, 5, 7, 11, 13, 17, 19, 23, ...

**Théorème fondamental :**
Tout entier naturel supérieur à 1 se décompose de manière unique en produit de facteurs premiers.`,
        type: "intro" as const
      }
    ],
    videos: [
      { title: "Arithmétique dans N - Divisibilité", url: "https://www.youtube.com/watch?v=ghi789", duration: "22:15" }
    ]
  },
  "3": {
    title: "Calcul vectoriel dans le plan",
    semester: 1,
    slides: [
      {
        title: "Vecteurs et opérations",
        content: `➡️ Calcul vectoriel dans le plan

**Définition d'un vecteur :**
Un vecteur est défini par :
• Une direction
• Un sens
• Une norme (longueur)

**Notation :** 
• Vecteur AB⃗ : du point A vers le point B
• Vecteur u⃗ : vecteur libre

**Opérations sur les vecteurs :**

**Addition :** u⃗ + v⃗
• Règle du parallélogramme
• Relation de Chasles : AB⃗ + BC⃗ = AC⃗

**Multiplication par un scalaire :** k × u⃗
• Si k > 0 : même sens que u⃗
• Si k < 0 : sens opposé à u⃗
• |k × u⃗| = |k| × |u⃗|

**Vecteurs colinéaires :**
Deux vecteurs sont colinéaires s'il existe un réel k tel que u⃗ = k × v⃗`,
        type: "intro" as const
      }
    ],
    videos: [
      { title: "Calcul vectoriel - Introduction", url: "https://www.youtube.com/watch?v=jkl012", duration: "28:20" }
    ]
  },
  "4": {
    title: "La projection dans le plan",
    semester: 1,
    slides: [
      {
        title: "Projection orthogonale",
        content: `📐 La projection dans le plan

**Projection orthogonale :**
La projection orthogonale d'un point M sur une droite (d) est le point H de (d) tel que MH ⊥ (d).

**Propriétés :**
• H est le point de (d) le plus proche de M
• MH est la distance de M à la droite (d)

**Projection d'un vecteur :**
La projection du vecteur u⃗ sur la direction du vecteur v⃗ est :
proj_v⃗(u⃗) = (u⃗ · v⃗ / |v⃗|²) × v⃗

**Applications :**
• Calcul de distances
• Résolution de problèmes géométriques
• Base du produit scalaire`,
        type: "intro" as const
      }
    ],
    videos: [
      { title: "Projection orthogonale", url: "https://www.youtube.com/watch?v=mno345", duration: "20:30" }
    ]
  },
  "5": {
    title: "L'ordre dans ℝ",
    semester: 1,
    slides: [
      {
        title: "Relation d'ordre dans ℝ",
        content: `📊 L'ordre dans les nombres réels

L'ensemble ℝ est totalement ordonné par la relation ≤ (inférieur ou égal).

**Propriétés de l'ordre :**
• Réflexivité : a ≤ a
• Antisymétrie : si a ≤ b et b ≤ a, alors a = b
• Transitivité : si a ≤ b et b ≤ c, alors a ≤ c
• Comparabilité : pour tous a, b ∈ ℝ, on a soit a ≤ b, soit b ≤ a

**Compatibilité avec les opérations :**
• Si a ≤ b, alors a + c ≤ b + c
• Si a ≤ b et c ≥ 0, alors ac ≤ bc
• Si a ≤ b et c ≤ 0, alors ac ≥ bc

**Intervalles :**
• [a, b] = {x ∈ ℝ | a ≤ x ≤ b}
• ]a, b[ = {x ∈ ℝ | a < x < b}
• [a, +∞[ = {x ∈ ℝ | x ≥ a}`,
        type: "intro" as const
      }
    ],
    videos: [
      { title: "L'ordre dans R", url: "https://www.youtube.com/watch?v=pqr678", duration: "25:10" }
    ]
  },
  "6": {
    title: "La droite dans le plan",
    semester: 1,
    slides: [
      {
        title: "Équations de droites",
        content: `📏 La droite dans le plan

**Équation cartésienne :**
Une droite (d) a pour équation : ax + by + c = 0
où (a, b) ≠ (0, 0)

**Vecteur normal :** n⃗(a, b) est perpendiculaire à la droite

**Équation réduite :**
Si b ≠ 0 : y = mx + p
• m : coefficient directeur (pente)
• p : ordonnée à l'origine

**Équation paramétrique :**
(d) : { x = x₀ + αt
      { y = y₀ + βt
où (α, β) est un vecteur directeur

**Position relative de deux droites :**
• Parallèles : même coefficient directeur
• Sécantes : intersection en un point
• Confondues : mêmes équations`,
        type: "intro" as const
      }
    ],
    videos: [
      { title: "Équations de droites", url: "https://www.youtube.com/watch?v=stu901", duration: "30:45" }
    ]
  },
  "7": {
    title: "Les polynômes",
    semester: 1,
    slides: [
      {
        title: "Polynômes et opérations",
        content: `📊 Les polynômes

**Définition :**
Un polynôme de degré n est une expression de la forme :
P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀

où aₙ, aₙ₋₁, ..., a₁, a₀ sont des nombres réels (coefficients) et aₙ ≠ 0.

**Vocabulaire :**
• aₙ : coefficient dominant
• a₀ : terme constant
• n : degré du polynôme

**Opérations sur les polynômes :**

**Addition :** On additionne les coefficients des termes de même degré

**Multiplication :** On applique la distributivité

**Identités remarquables :**
• (a + b)² = a² + 2ab + b²
• (a - b)² = a² - 2ab + b²
• (a + b)(a - b) = a² - b²

**Factorisation :** Écrire un polynôme comme produit de facteurs`,
        type: "intro" as const
      }
    ],
    videos: [
      { title: "Les polynômes - Cours", url: "https://www.youtube.com/watch?v=vwx234", duration: "35:20" }
    ]
  },
  "8": {
    title: "Équations, inéquations et systèmes",
    semester: 1,
    slides: [
      {
        title: "Résolution d'équations et systèmes",
        content: `🔍 Équations, inéquations et systèmes

**Équation du premier degré :**
ax + b = 0 (a ≠ 0) ⟹ x = -b/a

**Équation du second degré :**
ax² + bx + c = 0 (a ≠ 0)

**Discriminant :** Δ = b² - 4ac
• Si Δ > 0 : deux solutions distinctes
• Si Δ = 0 : une solution double
• Si Δ < 0 : aucune solution réelle

**Inéquations :**
Résolution par tableau de signes

**Systèmes d'équations :**
{ ax + by = c
{ a'x + b'y = c'

**Méthodes de résolution :**
• Substitution
• Combinaisons linéaires
• Méthode graphique`,
        type: "intro" as const
      }
    ],
    videos: [
      { title: "Équations et systèmes", url: "https://www.youtube.com/watch?v=yza567", duration: "40:15" }
    ]
  },
  "9": {
    title: "Trigonométrie 1 (Règles du calcul trigonométrique)",
    semester: 1,
    slides: [
      {
        title: "Fonctions trigonométriques",
        content: `📐 Trigonométrie - Règles de calcul

**Cercle trigonométrique :**
Cercle de rayon 1 centré à l'origine
• Angles en radians : π rad = 180°

**Fonctions trigonométriques :**
• sin(θ) : ordonnée du point sur le cercle
• cos(θ) : abscisse du point sur le cercle
• tan(θ) = sin(θ)/cos(θ)

**Relations fondamentales :**
• sin²(θ) + cos²(θ) = 1
• tan(θ) = sin(θ)/cos(θ)
• 1 + tan²(θ) = 1/cos²(θ)

**Angles remarquables :**
• 30° = π/6 : sin = 1/2, cos = √3/2
• 45° = π/4 : sin = cos = √2/2
• 60° = π/3 : sin = √3/2, cos = 1/2

**Formules d'addition :**
• sin(a + b) = sin(a)cos(b) + cos(a)sin(b)
• cos(a + b) = cos(a)cos(b) - sin(a)sin(b)`,
        type: "intro" as const
      }
    ],
    videos: [
      { title: "Trigonométrie - Règles de calcul", url: "https://www.youtube.com/watch?v=bcd890", duration: "45:30" }
    ]
  },
  "10": {
    title: "Trigonométrie 2 (Équations et inéquations trigonométriques)",
    semester: 2,
    slides: [
      {
        title: "Équations trigonométriques",
        content: `📐 Équations et inéquations trigonométriques

**Équations de base :**

**sin(x) = a :**
• Si |a| > 1 : pas de solution
• Si |a| ≤ 1 : x = arcsin(a) + 2kπ ou x = π - arcsin(a) + 2kπ

**cos(x) = a :**
• Si |a| > 1 : pas de solution
• Si |a| ≤ 1 : x = arccos(a) + 2kπ ou x = -arccos(a) + 2kπ

**tan(x) = a :**
• x = arctan(a) + kπ

**Méthodes de résolution :**
• Utiliser les angles remarquables
• Factoriser les expressions
• Utiliser les formules trigonométriques
• Représentation sur le cercle trigonométrique

**Inéquations trigonométriques :**
Résolution graphique sur le cercle trigonométrique`,
        type: "intro" as const
      }
    ],
    videos: [
      { title: "Équations trigonométriques", url: "https://www.youtube.com/watch?v=efg123", duration: "38:20" }
    ]
  },
  "11": {
    title: "Généralités sur les fonctions",
    semester: 2,
    slides: [
      {
        title: "Définition et vocabulaire",
        content: `📈 Généralités sur les fonctions

**Définition :**
Une fonction f est une relation qui associe à chaque élément x d'un ensemble A (domaine de définition) un unique élément y d'un ensemble B.

**Notation :**
f: A → B
x ↦ f(x) = y

**Vocabulaire :**
• x : variable (antécédent)
• f(x) : image de x par f
• Df : domaine de définition
• Courbe représentative dans un repère

**Représentation graphique :**
Un repère du plan étant choisi, on appelle courbe représentative d'une fonction f, notée Cf, l'ensemble des points M de coordonnées (x ; f(x)) où x ∈ D.

**Sens de variations :**
• Fonction croissante sur un intervalle I
• Fonction décroissante sur un intervalle I
• Fonction constante sur un intervalle I`,
        type: "intro" as const
      },
      {
        title: "Fonctions de référence : parabole et hyperbole",
        content: `📊 Fonctions de référence

**Fonction parabole :**
f(x) = ax² où a ≠ 0 est une parabole de sommet O et d'axe de symétrie la droite d'équation x = 0.

**Propriétés selon le signe de a :**
• Si a > 0 : parabole "tournée vers le haut", fonction décroissante sur ]-∞, 0] et croissante sur [0, +∞[
• Si a < 0 : parabole "tournée vers le bas", fonction croissante sur ]-∞, 0] et décroissante sur [0, +∞[

**Fonction trinôme :**
f(x) = ax² + bx + c avec a ≠ 0
Sommet : S(-b/2a, f(-b/2a))
Axe de symétrie : x = -b/2a

**Fonction hyperbole :**
f(x) = a/x, a ≠ 0 est une hyperbole de centre O et d'asymptotes les droites d'équations x = 0 et y = 0.

**Transformations :**
f(x) = a/(x + b) + c est une hyperbole de centre I(-b, c)`,
        type: "definition" as const
      }
    ],
    images: [
      "/lovable-uploads/afdcd59c-b3be-447f-9a8f-71e621219f53.png",
      "/lovable-uploads/df00d01d-2440-4cf2-ba56-d8869ffa49bd.png",
      "/lovable-uploads/20408aa2-547e-40df-9f72-fd9d473c90af.png",
      "/lovable-uploads/320ebce3-25a3-46df-b516-5ba55c99cbcc.png",
      "/lovable-uploads/c5be9329-7215-47dd-aa10-85ec6b0a5c87.png",
      "/lovable-uploads/1e7d3729-cbe9-4eda-8197-9d58c2bfde41.png"
    ],
    videos: [
      { title: "Généralités sur les fonctions", url: "https://www.youtube.com/watch?v=hij456", duration: "32:15" }
    ]
  },
  "12": {
    title: "Transformations du plan",
    semester: 2,
    slides: [
      {
        title: "Transformations géométriques",
        content: `🔄 Transformations du plan

**Types de transformations :**

**1° Symétrie axiale :**
Définition : (Δ) est une droite du plan.
La symétrie axiale d'axe (Δ) est la transformation qui transforme tout point M du plan au point unique M' tel que : (Δ) est la médiatrice du segment [MM']

**2° Symétrie centrale :**
Définition : Ω est un point du plan
La symétrie centrale de centre Ω est la transformation qui transforme tout point M du plan au point unique M' tel que ΩM' = -ΩM

**Propriétés conservées :**
• Distances (isométries)
• Angles
• Alignement
• Parallélisme

**Translation :**
Transformation qui associe à tout point M un point M' tel que MM' = u⃗ (vecteur de translation)

**Rotation :**
Transformation définie par un centre O, un angle θ et un sens`,
        type: "intro" as const
      }
    ],
    images: [
      "/lovable-uploads/cb2eec38-dc43-4e87-bd90-09130932f92a.png"
    ],
    videos: [
      { title: "Transformations du plan", url: "https://www.youtube.com/watch?v=klm789", duration: "28:40" }
    ]
  },
  "13": {
    title: "Le produit scalaire",
    semester: 2,
    slides: [
      {
        title: "Définition et propriétés",
        content: `📐 Le produit scalaire

**Définition :**
Le produit scalaire de deux vecteurs u⃗ et v⃗ est le nombre réel noté u⃗ · v⃗ défini par :
u⃗ · v⃗ = |u⃗| × |v⃗| × cos(θ)
où θ est l'angle entre les deux vecteurs.

**Propriétés :**
• Commutativité : u⃗ · v⃗ = v⃗ · u⃗
• Distributivité : u⃗ · (v⃗ + w⃗) = u⃗ · v⃗ + u⃗ · w⃗
• Associativité mixte : k(u⃗ · v⃗) = (ku⃗) · v⃗ = u⃗ · (kv⃗)

**Expressions analytiques :**
Dans un repère orthonormé (O, i⃗, j⃗) :
Si u⃗(x, y) et v⃗(x', y'), alors u⃗ · v⃗ = xx' + yy'

**Applications :**
• Calcul d'angles
• Orthogonalité : u⃗ ⊥ v⃗ ⟺ u⃗ · v⃗ = 0
• Projections orthogonales`,
        type: "intro" as const
      }
    ],
    videos: [
      { title: "Le produit scalaire", url: "https://www.youtube.com/watch?v=nop012", duration: "42:25" }
    ]
  },
  "14": {
    title: "Géométrie dans l'espace",
    semester: 2,
    slides: [
      {
        title: "Repérage dans l'espace",
        content: `🌐 Géométrie dans l'espace

**Repère de l'espace :**
Un repère de l'espace est défini par un point O (origine) et trois vecteurs non coplanaires i⃗, j⃗, k⃗.

**Coordonnées d'un point :**
Tout point M de l'espace peut être repéré par ses coordonnées (x, y, z) telles que :
OM⃗ = xi⃗ + yj⃗ + zk⃗

**Distance entre deux points :**
Si A(xₐ, yₐ, zₐ) et B(xᵦ, yᵦ, zᵦ), alors :
AB = √[(xᵦ - xₐ)² + (yᵦ - yₐ)² + (zᵦ - zₐ)²]

**Plans et droites :**
• Équation d'un plan : ax + by + cz + d = 0
• Équations paramétriques d'une droite
• Positions relatives : parallélisme, orthogonalité`,
        type: "intro" as const
      }
    ]
  },
  "15": {
    title: "Statistiques",
    semester: 2,
    slides: [
      {
        title: "Population statistique et Caractères",
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
Un caractère qui ne peut pas s'exprimer par des nombres (couleur des cheveux, groupe sanguin, sexe).`,
        type: "intro" as const
      },
      {
        title: "Paramètres statistiques",
        content: `📊 Paramètres de position et de dispersion

**Paramètres de position :**
1) **Le Mode :** La valeur du caractère correspondant au plus fort effectif
2) **La Moyenne :** x̄ = Σ(xᵢnᵢ)/Σnᵢ
3) **La Médiane :** Valeur qui partage la série en deux parties égales

**Paramètres de dispersion :**
1) **Étendue :** Différence entre les valeurs extrêmes
2) **Écart-moyen :** Moyenne des écarts à la moyenne
3) **Variance :** V = Σnᵢ(xᵢ - x̄)²/Σnᵢ
4) **Écart-type :** σ = √V

**Utilisation de la calculatrice :**
Méthode pour calculer rapidement tous les paramètres statistiques en saisissant les données dans deux listes.`,
        type: "definition" as const
      }
    ],
    images: [
      "/lovable-uploads/9bb9f036-2eb5-4015-9659-dcf43d08d732.png",
      "/lovable-uploads/302a4c2c-e626-457b-a4f7-beabe01da93f.png",
      "/lovable-uploads/a14e0211-ab56-4f88-a110-36052b86054e.png",
      "/lovable-uploads/d6037b0d-8716-4959-ae79-059ac75fe8ae.png",
      "/lovable-uploads/4d027159-0943-4265-a547-9837e61b3cb0.png"
    ],
    videos: [
      { title: "Statistiques - Paramètres", url: "https://www.youtube.com/watch?v=qrs345", duration: "35:50" }
    ]
  }
};

export const mathLessonsStructure = {
  semester1: [
    { id: "1", title: "Les ensembles de nombres ℕ, ℤ, ℚ, 𝔻 et ℝ", description: "Étude des différents ensembles de nombres et leurs propriétés" },
    { id: "2", title: "Arithmétique dans ℕ", description: "Divisibilité, nombres premiers, PGCD et PPCM" },
    { id: "3", title: "Calcul vectoriel dans le plan", description: "Opérations sur les vecteurs, colinéarité" },
    { id: "4", title: "La projection dans le plan", description: "Projection orthogonale et ses applications" },
    { id: "5", title: "L'ordre dans ℝ", description: "Relations d'ordre, intervalles et inégalités" },
    { id: "6", title: "La droite dans le plan", description: "Équations de droites et positions relatives" },
    { id: "7", title: "Les polynômes", description: "Opérations sur les polynômes et factorisation" },
    { id: "8", title: "Équations, inéquations et systèmes", description: "Résolution d'équations et de systèmes" },
    { id: "9", title: "Trigonométrie 1 (Règles du calcul trigonométrique)", description: "Fonctions trigonométriques et formules" }
  ],
  semester2: [
    { id: "10", title: "Trigonométrie 2 (Équations et inéquations trigonométriques)", description: "Résolution d'équations trigonométriques" },
    { id: "11", title: "Généralités sur les fonctions", description: "Fonctions de référence, parabole et hyperbole" },
    { id: "12", title: "Transformations du plan", description: "Symétries, translations et rotations" },
    { id: "13", title: "Le produit scalaire", description: "Définition et applications du produit scalaire" },
    { id: "14", title: "Géométrie dans l'espace", description: "Repérage et figures dans l'espace" },
    { id: "15", title: "Statistiques", description: "Paramètres de position et de dispersion" }
  ]
};

export const mathExercisesData = {
  "1": {
    title: "Exercices sur les ensembles de nombres",
    exercises: [
      {
        id: 1,
        title: "Classification des nombres",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: "Classifier les nombres suivants dans les ensembles appropriés :\na) -5  b) 3/4  c) π  d) √16  e) 0  f) -2,5",
        solution: "a) -5 ∈ ℤ (entier relatif négatif)\nb) 3/4 ∈ ℚ (nombre rationnel, fraction)\nc) π ∈ ℝ\\ℚ (nombre irrationnel)\nd) √16 = 4 ∈ ℕ (nombre naturel)\ne) 0 ∈ ℕ (nombre naturel)\nf) -2,5 = -5/2 ∈ ℚ (nombre rationnel négatif)"
      }
    ]
  },
  "2": {
    title: "Exercices d'arithmétique dans ℕ",
    exercises: [
      {
        id: 1,
        title: "Divisibilité",
        difficulty: "Moyen",
        duration: "15 min",
        points: 10,
        question: "Déterminer si 15 divise 225 et justifier.",
        solution: "225 ÷ 15 = 15, donc 225 = 15 × 15\nDonc 15 divise 225."
      }
    ]
  },
  "11": {
    title: "Exercices sur les fonctions",
    exercises: [
      {
        id: 1,
        title: "Fonctions de référence",
        difficulty: "Moyen",
        duration: "20 min",
        points: 12,
        question: "Étudier les variations de f(x) = 2x² - 3 sur ℝ.",
        solution: "f(x) = 2x² - 3 est une fonction parabole avec a = 2 > 0\nSommet en (0, -3)\nf est décroissante sur ]-∞, 0] et croissante sur [0, +∞[\nMinimum : f(0) = -3"
      }
    ]
  },
  "15": {
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
      }
    ]
  }
};
