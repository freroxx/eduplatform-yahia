
// Math course data with lessons and exercises including Statistics

export const mathLessonsData = {
  "1": {
    title: "Les Ensembles - مجموعات الأعداد",
    semester: 1,
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
  "2": {
    title: "Calcul dans ℝ - الحساب في ℝ",
    semester: 1,
    slides: [
      {
        title: "Introduction au calcul dans ℝ",
        content: `🔢 Calcul dans l'ensemble des réels

L'ensemble des nombres réels ℝ est muni de deux opérations fondamentales :
• L'addition (+)
• La multiplication (×)

Ces opérations satisfont plusieurs propriétés importantes qui permettent de simplifier les calculs et résoudre des équations.

**Propriétés de l'addition :**
• Commutativité : a + b = b + a
• Associativité : (a + b) + c = a + (b + c)
• Élément neutre : a + 0 = a
• Élément opposé : a + (-a) = 0

**Propriétés de la multiplication :**
• Commutativité : a × b = b × a
• Associativité : (a × b) × c = a × (b × c)
• Élément neutre : a × 1 = a
• Élément inverse : a × (1/a) = 1 (si a ≠ 0)

**Distributivité :**
a × (b + c) = a × b + a × c`,
        type: "intro" as const
      },
      {
        title: "Opérations avancées",
        content: `🧮 Techniques de calcul avancé

**Priorités opératoires :**
1. Parenthèses et crochets
2. Puissances et racines
3. Multiplication et division (de gauche à droite)
4. Addition et soustraction (de gauche à droite)

**Fractions et décimaux :**
• Addition de fractions : a/b + c/d = (ad + bc)/(bd)
• Multiplication : (a/b) × (c/d) = (ac)/(bd)
• Division : (a/b) ÷ (c/d) = (a/b) × (d/c)

**Règles des signes :**
• (+) × (+) = (+)
• (-) × (-) = (+)
• (+) × (-) = (-)
• (-) × (+) = (-)

Ces règles s'appliquent aussi à la division.`,
        type: "definition" as const
      }
    ]
  },
  "3": {
    title: "Ordre dans ℝ - الترتيب في ℝ",
    semester: 1,
    slides: [
      {
        title: "Introduction à l'ordre dans ℝ",
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

**Représentation sur la droite numérique :**
La droite numérique permet de visualiser l'ordre des nombres réels.`,
        type: "intro" as const
      },
      {
        title: "Inégalités et intervalles",
        content: `📏 Intervalles et inégalités

**Types d'intervalles :**
• [a, b] = {x ∈ ℝ | a ≤ x ≤ b} (fermé)
• ]a, b[ = {x ∈ ℝ | a < x < b} (ouvert)
• [a, b[ = {x ∈ ℝ | a ≤ x < b} (semi-ouvert)
• ]a, b] = {x ∈ ℝ | a < x ≤ b} (semi-ouvert)

**Intervalles infinis :**
• [a, +∞[ = {x ∈ ℝ | x ≥ a}
• ]-∞, a] = {x ∈ ℝ | x ≤ a}
• ]-∞, +∞[ = ℝ

**Opérations sur les inégalités :**
• Addition : si a < b, alors a + c < b + c
• Multiplication par un nombre positif : si a < b et c > 0, alors ac < bc
• Multiplication par un nombre négatif : si a < b et c < 0, alors ac > bc`,
        type: "definition" as const
      }
    ]
  },
  "4": {
    title: "Valeur absolue - القيمة المطلقة",
    semester: 1,
    slides: [
      {
        title: "Introduction à la valeur absolue",
        content: `📐 Valeur absolue d'un nombre réel

**Définition :**
La valeur absolue d'un nombre réel a, notée |a|, est définie par :
• |a| = a si a ≥ 0
• |a| = -a si a < 0

**Interprétation géométrique :**
|a| représente la distance de a à 0 sur la droite numérique.

**Propriétés fondamentales :**
• |a| ≥ 0 pour tout a ∈ ℝ
• |a| = 0 si et seulement si a = 0
• |a| = |-a|
• |ab| = |a| × |b|
• |a/b| = |a|/|b| (si b ≠ 0)

**Distance entre deux nombres :**
La distance entre a et b est |a - b| = |b - a|`,
        type: "intro" as const
      },
      {
        title: "Équations et inéquations avec valeur absolue",
        content: `🔍 Résolution avec valeur absolue

**Équations :**
• |x| = a (a > 0) ⟺ x = a ou x = -a
• |x| = a (a = 0) ⟺ x = 0
• |x| = a (a < 0) ⟺ pas de solution

**Inéquations :**
• |x| < a (a > 0) ⟺ -a < x < a
• |x| > a (a > 0) ⟺ x < -a ou x > a
• |x| ≤ a (a ≥ 0) ⟺ -a ≤ x ≤ a
• |x| ≥ a (a ≥ 0) ⟺ x ≤ -a ou x ≥ a

**Inégalité triangulaire :**
|a + b| ≤ |a| + |b|
|a - b| ≥ ||a| - |b||

Ces propriétés sont fondamentales en analyse mathématique.`,
        type: "definition" as const
      }
    ]
  },
  "5": {
    title: "Puissances - القوى",
    semester: 1,
    slides: [
      {
        title: "Introduction aux puissances",
        content: `⚡ Les puissances dans ℝ

**Définition :**
Pour a ∈ ℝ* et n ∈ ℕ :
• aⁿ = a × a × ... × a (n fois)
• a⁰ = 1 (par convention, a ≠ 0)
• a⁻ⁿ = 1/aⁿ (pour a ≠ 0)

**Propriétés des puissances :**
• aᵐ × aⁿ = aᵐ⁺ⁿ
• (aᵐ)ⁿ = aᵐˣⁿ
• aᵐ ÷ aⁿ = aᵐ⁻ⁿ
• (a × b)ⁿ = aⁿ × bⁿ
• (a/b)ⁿ = aⁿ/bⁿ

**Puissances de 10 :**
• 10² = 100
• 10³ = 1000
• 10⁻¹ = 0,1
• 10⁻² = 0,01

Utilisées en notation scientifique : a × 10ⁿ`,
        type: "intro" as const
      },
      {
        title: "Racines et puissances fractionnaires",
        content: `🌱 Racines et puissances fractionnaires

**Racine carrée :**
• √a est le nombre positif dont le carré est a
• √a = b ⟺ b² = a et b ≥ 0
• √(a²) = |a|
• √(ab) = √a × √b (a, b ≥ 0)

**Racine n-ième :**
• ⁿ√a est le nombre réel x tel que xⁿ = a
• Pour n pair : a ≥ 0
• Pour n impair : a ∈ ℝ

**Puissances fractionnaires :**
• a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ
• a^(1/n) = ⁿ√a
• Toutes les propriétés des puissances s'appliquent

**Exemples :**
• 8^(1/3) = ³√8 = 2
• 16^(3/4) = (⁴√16)³ = 2³ = 8`,
        type: "definition" as const
      }
    ]
  },
  "6": {
    title: "Polynômes - كثيرات الحدود",
    semester: 1,
    slides: [
      {
        title: "Introduction aux polynômes",
        content: `📊 Les polynômes

**Définition :**
Un polynôme de degré n est une expression de la forme :
P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀

où aₙ, aₙ₋₁, ..., a₁, a₀ sont des nombres réels (coefficients) et aₙ ≠ 0.

**Vocabulaire :**
• aₙ : coefficient dominant
• a₀ : terme constant
• n : degré du polynôme
• Monôme : polynôme à un seul terme
• Binôme : polynôme à deux termes
• Trinôme : polynôme à trois termes

**Exemples :**
• P(x) = 3x² - 2x + 1 (trinôme de degré 2)
• Q(x) = x³ + 5 (binôme de degré 3)
• R(x) = -2x (monôme de degré 1)`,
        type: "intro" as const
      },
      {
        title: "Opérations sur les polynômes",
        content: `🧮 Calcul avec les polynômes

**Addition et soustraction :**
On additionne les coefficients des termes de même degré.

**Exemple :**
P(x) = 2x² + 3x - 1
Q(x) = x² - 2x + 4
P(x) + Q(x) = 3x² + x + 3

**Multiplication :**
• Monôme × Polynôme : distribuer le monôme
• Polynôme × Polynôme : distribuer chaque terme

**Multiplication remarquable :**
• (a + b)² = a² + 2ab + b²
• (a - b)² = a² - 2ab + b²
• (a + b)(a - b) = a² - b²

**Division euclidienne :**
Pour P(x) et D(x) ≠ 0, il existe Q(x) et R(x) tels que :
P(x) = D(x) × Q(x) + R(x)
où deg(R) < deg(D)`,
        type: "definition" as const
      }
    ]
  },
  "7": {
    title: "Équations - المعادلات",
    semester: 1,
    slides: [
      {
        title: "Introduction aux équations",
        content: `🔍 Les équations du premier et second degré

**Équation du premier degré :**
ax + b = 0 (a ≠ 0)

**Résolution :**
ax = -b
x = -b/a

**Équation du second degré :**
ax² + bx + c = 0 (a ≠ 0)

**Discriminant :**
Δ = b² - 4ac

**Solutions selon le signe de Δ :**
• Si Δ > 0 : deux solutions distinctes
  x₁ = (-b + √Δ)/(2a) et x₂ = (-b - √Δ)/(2a)
• Si Δ = 0 : une solution double
  x = -b/(2a)
• Si Δ < 0 : aucune solution réelle`,
        type: "intro" as const
      },
      {
        title: "Résolution pratique",
        content: `💡 Méthodes de résolution

**Factorisation :**
Si ax² + bx + c = a(x - x₁)(x - x₂), alors les solutions sont x₁ et x₂.

**Forme canonique :**
ax² + bx + c = a[(x + b/(2a))² - Δ/(4a²)]

**Relations entre coefficients et racines :**
Si x₁ et x₂ sont les racines de ax² + bx + c = 0 :
• Somme : x₁ + x₂ = -b/a
• Produit : x₁ × x₂ = c/a

**Exemples :**
1) x² - 5x + 6 = 0
   Δ = 25 - 24 = 1 > 0
   x₁ = (5 + 1)/2 = 3
   x₂ = (5 - 1)/2 = 2

2) x² - 4x + 4 = 0
   Δ = 16 - 16 = 0
   x = 4/2 = 2 (solution double)`,
        type: "example" as const
      }
    ]
  },
  "8": {
    title: "Inéquations - المتراجحات",
    semester: 2,
    slides: [
      {
        title: "Introduction aux inéquations",
        content: `📊 Résolution d'inéquations

**Définition :**
Une inéquations est une inégalité contenant une ou plusieurs inconnues.

**Types d'inéquations :**
• Premier degré : ax + b > 0, ax + b ≤ 0, etc.
• Second degré : ax² + bx + c > 0, etc.
• Rationnelles : f(x)/g(x) > 0, etc.

**Inéquations du premier degré :**
ax + b > 0 (a ≠ 0)

Si a > 0 : x > -b/a
Si a < 0 : x < -b/a (le sens change !)

**Règles importantes :**
• On peut ajouter le même nombre aux deux membres
• On peut multiplier par un nombre positif
• Si on multipie par un nombre négatif, on change le sens de l'inégalité`,
        type: "intro" as const
      },
      {
        title: "Inéquations du second degré",
        content: `🔍 Inéquations ax² + bx + c > 0

**Méthode générale :**
1. Calculer le discriminant Δ = b² - 4ac
2. Trouver les racines (si elles existent)
3. Étudier le signe du trinôme selon les cas

**Cas 1 : Δ > 0 (deux racines x₁ < x₂)**
Le trinôme a le même signe que a à l'extérieur des racines,
et le signe opposé à a entre les racines.

**Cas 2 : Δ = 0 (une racine double x₀)**
Le trinôme a toujours le même signe que a (sauf en x₀ où il s'annule).

**Cas 3 : Δ < 0 (pas de racine réelle)**
Le trinôme a toujours le même signe que a.

**Tableau de signes :**
Outil indispensable pour visualiser la solution.`,
        type: "definition" as const
      }
    ]
  },
  "9": {
    title: "Systèmes d'équations - جمل المعادلات",
    semester: 2,
    slides: [
      {
        title: "Introduction aux systèmes",
        content: `🔗 Systèmes d'équations linéaires

**Définition :**
Un système de deux équations à deux inconnues :
{ax + by = c
{a'x + b'y = c'

**Méthodes de résolution :**
• Substitution
• Élimination (combinaisons linéaires)
• Méthode graphique

**Solution d'un système :**
Un couple (x₀, y₀) qui vérifie simultanément les deux équations.

**Types de systèmes :**
• Compatible déterminé : une solution unique
• Compatible indéterminé : infinité de solutions
• Incompatible : pas de solution`,
        type: "intro" as const
      },
      {
        title: "Méthodes de résolution",
        content: `🔧 Techniques pratiques

**Méthode par substitution :**
1. Isoler une inconnue dans une équation
2. Substituer dans l'autre équation
3. Résoudre l'équation à une inconnue
4. Calculer la deuxième inconnue

**Méthode par combinaisons linéaires :**
1. Multiplier les équations pour égaliser les coefficients
2. Additionner ou soustraire pour éliminer une inconnue
3. Résoudre l'équation obtenue
4. Substituer pour trouver l'autre inconnue

**Exemple :**
{2x + 3y = 7
{x - y = 1

De la 2ème : x = y + 1
Substitution : 2(y + 1) + 3y = 7
2y + 2 + 3y = 7
5y = 5
y = 1, donc x = 2

Solution : (2, 1)`,
        type: "example" as const
      }
    ]
  },
  "10": {
    title: "Géométrie plane - الهندسة المستوية",
    semester: 2,
    slides: [
      {
        title: "Introduction à la géométrie plane",
        content: `📐 Géométrie dans le plan

**Éléments de base :**
• Points, droites, segments
• Angles et leurs mesures
• Figures géométriques : triangles, quadrilatères, cercles

**Propriétés fondamentales :**
• Deux points déterminent une droite unique
• Par un point extérieur à une droite passe une unique parallèle
• La somme des angles d'un triangle est 180°

**Théorèmes classiques :**
• Théorème de Pythagore : a² + b² = c² (triangle rectangle)
• Théorème de Thalès : proportionnalité dans les triangles
• Théorèmes sur les triangles isocèles et équilatéraux

**Mesures :**
• Périmètres et aires des figures usuelles
• Relations métriques dans le triangle`,
        type: "intro" as const
      }
    ]
  },
  "11": {
    title: "Transformations - التحويلات",
    semester: 2,
    slides: [
      {
        title: "Introduction aux transformations",
        content: `🔄 Transformations géométriques

**Types de transformations :**
• **Translation** : déplacement selon un vecteur
• **Rotation** : rotation autour d'un point
• **Symétrie axiale** : réflexion par rapport à une droite
• **Symétrie centrale** : symétrie par rapport à un point

**Propriétés conservées :**
• Distances (isométries)
• Angles
• Alignement
• Parallélisme

**Translation :**
Transformation qui associe à tout point M un point M' tel que
MM' = u⃗ (vecteur de translation)

**Rotation :**
Transformation définie par :
• Un centre O
• Un angle θ
• Un sens (horaire ou anti-horaire)`,
        type: "intro" as const
      }
    ]
  },
  "12": {
    title: "Fonctions - الدوال",
    semester: 2,
    slides: [
      {
        title: "Introduction aux fonctions",
        content: `📈 Notion de fonction

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

**Fonctions usuelles :**
• Fonction constante : f(x) = k
• Fonction linéaire : f(x) = ax
• Fonction affine : f(x) = ax + b
• Fonction carré : f(x) = x²

**Représentation graphique :**
Courbe dans un repère orthonormé (O, i⃗, j⃗)`,
        type: "intro" as const
      }
    ]
  },
  "13": {
    title: "Trigonométrie - المثلثات",
    semester: 2,
    slides: [
      {
        title: "Introduction à la trigonométrie",
        content: `📐 Fonctions trigonométriques

**Dans un triangle rectangle :**
• sin(α) = côté opposé / hypoténuse
• cos(α) = côté adjacent / hypoténuse  
• tan(α) = côté opposé / côté adjacent = sin(α)/cos(α)

**Relations fondamentales :**
• sin²(α) + cos²(α) = 1
• tan(α) = sin(α)/cos(α)

**Cercle trigonométrique :**
Cercle de rayon 1 centré à l'origine.
• Angles en radians : π rad = 180°
• Correspondance degré-radian

**Angles remarquables :**
• 30° = π/6 : sin = 1/2, cos = √3/2
• 45° = π/4 : sin = cos = √2/2  
• 60° = π/3 : sin = √3/2, cos = 1/2`,
        type: "intro" as const
      }
    ]
  },
  "14": {
    title: "Statistiques - الإحصاء",
    semester: 2,
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
  },
  "15": {
    title: "Probabilités - الاحتماليات",
    semester: 2,
    slides: [
      {
        title: "Introduction aux probabilités",
        content: `🎲 Notion de probabilité

**Expérience aléatoire :** Une expérience dont le résultat ne peut être prédit avec certitude.

**Événement :** Un sous-ensemble de l'ensemble des résultats possibles.

**Probabilité d'un événement A :** P(A) = (nombre de cas favorables)/(nombre de cas possibles)

**Propriétés :**
• 0 ≤ P(A) ≤ 1
• P(∅) = 0 (événement impossible)
• P(Ω) = 1 (événement certain)

**Événements :**
• Événement élémentaire : ne peut pas se décomposer
• Événement composé : union d'événements élémentaires
• Événements incompatibles : A ∩ B = ∅
• Événement contraire : Ā tel que P(A) + P(Ā) = 1

**Calculs de probabilités :**
• P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
• Si A et B incompatibles : P(A ∪ B) = P(A) + P(B)`,
        type: "intro" as const
      }
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
    { id: "14", title: "Statistiques - الإحصاء", description: "Étude statistique complète avec paramètres de position et de dispersion" },
    { id: "15", title: "Probabilités - الاحتماليات", description: "Introduction aux probabilités" }
  ]
};

export const mathExercisesData = {
  "1": {
    title: "Exercices sur les Ensembles",
    exercises: [
      {
        id: 1,
        title: "Classification des nombres",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: "Classifier les nombres suivants dans les ensembles appropriés :\na) -5  b) 3/4  c) π  d) √16  e) 0  f) -2,5",
        solution: "a) -5 ∈ ℤ (entier relatif négatif)\nb) 3/4 ∈ ℚ (nombre rationnel, fraction)\nc) π ∈ ℝ\\ℚ (nombre irrationnel)\nd) √16 = 4 ∈ ℕ (nombre naturel)\ne) 0 ∈ ℕ (nombre naturel)\nf) -2,5 = -5/2 ∈ ℚ (nombre rationnel négatif)"
      },
      {
        id: 2,
        title: "Propriétés des opérations",
        difficulty: "Moyen",
        duration: "15 min",
        points: 12,
        question: "Simplifier les expressions suivantes en utilisant les propriétés des opérations :\na) (2 + 3) × 4 - 2 × 4\nb) 5 × (7 + 3) - 5 × 3\nc) (4 + 6) × (4 - 6)",
        solution: "a) (2 + 3) × 4 - 2 × 4 = 2 × 4 + 3 × 4 - 2 × 4 = 3 × 4 = 12\n   (Propriété de distributivité)\n\nb) 5 × (7 + 3) - 5 × 3 = 5 × 7 + 5 × 3 - 5 × 3 = 5 × 7 = 35\n   (Propriété de distributivité)\n\nc) (4 + 6) × (4 - 6) = 10 × (-2) = -20\n   Ou en utilisant l'identité remarquable : a² - b² avec a=4, b=6\n   Mais ici c'est (a+b)(a-b) = 4² - 6² = 16 - 36 = -20"
      }
    ]
  },
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
