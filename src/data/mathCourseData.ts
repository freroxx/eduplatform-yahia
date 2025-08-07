export const mathLessonsData: Record<string, {
  title: string;
  semester: number;
  slides: { id: number; title: string; content: string; }[];
  videos?: { title: string; url: string; }[];
  images?: string[];
}> = {
  "1": {
    title: "Les ensembles de nombres N, Z, Q, D et R",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Introduction aux ensembles de nombres",
        content: `# Les ensembles de nombres N, Z, Q, D et R

## Introduction

Les nombres sont fondamentaux en mathématiques. Ils nous permettent de compter, mesurer et résoudre des problèmes. En mathématiques, nous classons les nombres en différents ensembles selon leurs propriétés.

## Les différents ensembles

### L'ensemble N (Nombres naturels)
- N = {0, 1, 2, 3, 4, 5, ...}
- Ce sont les nombres que nous utilisons pour compter
- Ils commencent à 0 et continuent indéfiniment

### L'ensemble Z (Nombres entiers relatifs)  
- Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}
- Inclut tous les nombres naturels et leurs opposés
- Z contient N : N ⊂ Z

### L'ensemble Q (Nombres rationnels)
- Q = {a/b | a ∈ Z, b ∈ Z*}
- Tous les nombres qui peuvent s'écrire sous forme de fraction
- Exemples : 1/2, -3/4, 5 = 5/1
- Q contient Z : Z ⊂ Q

### L'ensemble D (Nombres décimaux)
- Nombres qui ont un nombre fini de chiffres après la virgule
- Exemples : 0,5 ; -2,34 ; 7,0
- D ⊂ Q

### L'ensemble R (Nombres réels)
- Contient tous les nombres rationnels et irrationnels
- Exemples de nombres irrationnels : π, √2, e
- R contient tous les ensembles précédents

## Relations d'inclusion

N ⊂ Z ⊂ D ⊂ Q ⊂ R

Cette chaîne d'inclusion montre que chaque ensemble est contenu dans le suivant.`
      }
    ],
    videos: [
      { title: "Les ensembles de nombres (Arabe)", url: "https://www.youtube.com/watch?v=NOV6FpGLBZ8" },
      { title: "Les ensembles de nombres (Français)", url: "https://www.youtube.com/watch?v=WWJ8hoPSBAo" }
    ]
  },

  "2": {
    title: "Arithmétique dans IN",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Arithmétique dans IN",
        content: `# Arithmétique dans IN

## Introduction

L'arithmétique dans N étudie les propriétés des nombres naturels, particulièrement la divisibilité, les nombres premiers et le calcul du PGCD et PPCM.

## Divisibilité

### Définition
Un nombre a divise un nombre b (noté a|b) si il existe un nombre naturel k tel que b = a × k.

### Propriétés de la divisibilité
- Si a|b et b|c, alors a|c (transitivité)
- Si a|b et a|c, alors a|(b+c) et a|(b-c)
- Si a|b, alors a|kb pour tout k ∈ N

## Nombres premiers

### Définition
Un nombre premier est un nombre naturel supérieur à 1 qui n'admet que deux diviseurs : 1 et lui-même.

### Exemples
Les premiers nombres premiers sont : 2, 3, 5, 7, 11, 13, 17, 19, 23, ...

### Théorème fondamental de l'arithmétique
Tout nombre naturel supérieur à 1 peut s'écrire de manière unique comme produit de nombres premiers.

## PGCD et PPCM

### PGCD (Plus Grand Commun Diviseur)
Le PGCD de deux nombres est le plus grand nombre qui divise les deux.

### PPCM (Plus Petit Commun Multiple)
Le PPCM de deux nombres est le plus petit multiple commun aux deux nombres.

### Relation importante
Pour deux nombres a et b : PGCD(a,b) × PPCM(a,b) = a × b`
      }
    ],
    videos: [
      { title: "Arithmétique dans IN (Arabe)", url: "https://www.youtube.com/watch?v=-cmV1kRllWw" },
      { title: "Arithmétique dans IN (Français)", url: "https://www.youtube.com/watch?v=L_hVwt3qQpk" }
    ]
  },

  "3": {
    title: "Calcul vectoriel dans le plan",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Introduction aux vecteurs",
        content: `# Calcul vectoriel dans le plan

## Qu'est-ce qu'un vecteur ?

Un vecteur est un objet mathématique caractérisé par :
- Une direction
- Un sens  
- Une norme (longueur)

## Notation et représentation

Un vecteur est noté avec une flèche au-dessus : u⃗ ou AB⃗

### Vecteur nul
Le vecteur nul 0⃗ a une norme nulle et n'a pas de direction définie.

## Opérations sur les vecteurs

### Addition de vecteurs
Pour additionner deux vecteurs u⃗ et v⃗ :
- Méthode du parallélogramme
- Relation de Chasles : AB⃗ + BC⃗ = AC⃗

### Multiplication par un scalaire
Si k est un nombre réel et u⃗ un vecteur :
- ku⃗ a la même direction que u⃗
- Sa norme est |k| fois celle de u⃗
- Son sens dépend du signe de k

## Coordonnées d'un vecteur

Dans un repère (O, i⃗, j⃗), un vecteur u⃗ a des coordonnées (x, y) :
u⃗ = xi⃗ + yj⃗

### Opérations avec les coordonnées
- u⃗(x₁, y₁) + v⃗(x₂, y₂) = (x₁+x₂, y₁+y₂)
- ku⃗(x, y) = (kx, ky)
- ||u⃗|| = √(x² + y²)

## Applications

### Vecteurs colinéaires
Deux vecteurs u⃗ et v⃗ sont colinéaires s'il existe k tel que u⃗ = kv⃗

### Point défini par un vecteur
Si M a pour vecteur position OM⃗ = u⃗, alors M est défini par ce vecteur.`
      }
    ],
    videos: [
      { title: "Calcul vectoriel (Arabe)", url: "https://www.youtube.com/watch?v=DCce28tAa70" },
      { title: "Calcul vectoriel (Français)", url: "https://www.youtube.com/watch?v=AwzchpN8S9g" }
    ]
  },

  "4": {
    title: "La projection dans le plan",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "La projection dans le plan",
        content: `# La projection dans le plan

## Définition de la projection

La projection d'un point sur une droite est le pied de la perpendiculaire menée de ce point à la droite.

## Types de projections

### Projection orthogonale sur une droite
Soit M un point et d une droite. La projection orthogonale de M sur d est le point H tel que MH ⊥ d.

### Projection orthogonale sur un axe
Dans un repère orthonormé, la projection d'un point M(x, y) :
- Sur l'axe des abscisses : H(x, 0)
- Sur l'axe des ordonnées : K(0, y)

## Propriétés importantes

### Conservation de l'alignement
Si trois points A, B, C sont alignés, leurs projections A', B', C' sont aussi alignées.

### Conservation du rapport
Si B est entre A et C, alors AB'/A'C' = AB/AC où A', B', C' sont les projections.

## Applications géométriques

### Distance d'un point à une droite
La distance d'un point M à une droite d est la longueur MH où H est la projection de M sur d.

### Théorème de Pythagore généralisé
Dans un triangle rectangle, la projection du côté opposé à l'angle droit sur l'hypoténuse divise celle-ci en segments proportionnels aux carrés des côtés adjacents.

## Calcul de projections

### Avec les coordonnées
Pour projeter M(x₀, y₀) sur la droite d : ax + by + c = 0 :
H = M - ((ax₀ + by₀ + c)/(a² + b²)) × (a, b)

### Cas particuliers
- Projection sur Ox : (x, 0)
- Projection sur Oy : (0, y)
- Projection sur y = x : ((x+y)/2, (x+y)/2)`
      }
    ],
    videos: [
      { title: "Projection dans le plan - Partie 1 (Arabe)", url: "https://www.youtube.com/watch?v=34qrpUz1vCc" },
      { title: "Projection dans le plan - Partie 2 (Arabe)", url: "https://www.youtube.com/watch?v=F7vz_Az_72U" }
    ]
  },

  "5": {
    title: "L'ordre dans IR",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "L'ordre dans IR",
        content: `# L'ordre dans IR

## Relation d'ordre dans R

L'ensemble des nombres réels R est muni d'une relation d'ordre total ≤.

### Propriétés de l'ordre
1. **Réflexivité** : a ≤ a pour tout a ∈ R
2. **Antisymétrie** : si a ≤ b et b ≤ a, alors a = b
3. **Transitivité** : si a ≤ b et b ≤ c, alors a ≤ c
4. **Ordre total** : pour tous a, b ∈ R, soit a ≤ b, soit b ≤ a

## Compatibilité avec les opérations

### Addition
Si a ≤ b, alors a + c ≤ b + c pour tout c ∈ R

### Multiplication
- Si a ≤ b et c ≥ 0, alors ac ≤ bc
- Si a ≤ b et c ≤ 0, alors ac ≥ bc (l'inégalité change de sens)

## Valeur absolue

### Définition
|a| = a si a ≥ 0, |a| = -a si a < 0

### Propriétés
- |a| ≥ 0 pour tout a ∈ R
- |a| = 0 si et seulement si a = 0
- |ab| = |a| × |b|
- |a + b| ≤ |a| + |b| (inégalité triangulaire)

## Intervalles

### Types d'intervalles
- [a, b] = {x ∈ R | a ≤ x ≤ b} (fermé)
- ]a, b[ = {x ∈ R | a < x < b} (ouvert)
- [a, b[ = {x ∈ R | a ≤ x < b} (fermé à gauche)
- ]a, b] = {x ∈ R | a < x ≤ b} (fermé à droite)

### Intervalles non bornés
- [a, +∞[ = {x ∈ R | x ≥ a}
- ]-∞, b] = {x ∈ R | x ≤ b}
- ]-∞, +∞[ = R

## Opérations sur les intervalles

### Intersection
I ∩ J est l'ensemble des éléments appartenant à I et à J

### Réunion
I ∪ J est l'ensemble des éléments appartenant à I ou à J

## Applications

### Résolution d'inéquations
Les inéquations se résolvent en utilisant les propriétés de l'ordre et se représentent par des intervalles.

### Distance sur la droite réelle
La distance entre deux points a et b est |a - b|.`
      }
    ],
    videos: [
      { title: "L'ordre dans IR (Arabe)", url: "https://www.youtube.com/watch?v=vDXWhuLUTUg" },
      { title: "L'ordre dans IR (Français)", url: "https://www.youtube.com/watch?v=9MtAK7Xzrls" }
    ]
  },

  "6": {
    title: "La droite dans le plan",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "La droite dans le plan",
        content: `# La droite dans le plan

## Équations d'une droite

### Équation cartésienne
Une droite dans le plan a une équation de la forme : ax + by + c = 0
où a et b ne sont pas tous les deux nuls.

### Équation réduite
Si b ≠ 0, on peut écrire : y = mx + p
- m est le coefficient directeur (pente)
- p est l'ordonnée à l'origine

### Cas particuliers
- Droite verticale (parallèle à Oy) : x = k
- Droite horizontale (parallèle à Ox) : y = k
- Droite passant par l'origine : y = mx

## Vecteur directeur

### Définition
Un vecteur u⃗ est directeur d'une droite d si u⃗ ≠ 0⃗ et si u⃗ est colinéaire à tout vecteur AB⃗ où A et B sont sur d.

### Relation avec l'équation
Si la droite a pour équation ax + by + c = 0, alors u⃗(-b, a) est un vecteur directeur.

## Position relative de deux droites

### Droites parallèles
Deux droites d₁ et d₂ sont parallèles si elles ont le même vecteur directeur (aux proportionnalités près).

### Droites sécantes
Deux droites non parallèles se coupent en un point unique.

### Condition de parallélisme
d₁ : a₁x + b₁y + c₁ = 0 et d₂ : a₂x + b₂y + c₂ = 0 sont parallèles si et seulement si a₁b₂ - a₂b₁ = 0.

## Droites perpendiculaires

### Condition de perpendicularité
Deux droites sont perpendiculaires si leurs vecteurs directeurs sont orthogonaux.

Si u⃗₁(x₁, y₁) et u⃗₂(x₂, y₂) sont les vecteurs directeurs, alors :
d₁ ⊥ d₂ ⟺ x₁x₂ + y₁y₂ = 0

## Distance d'un point à une droite

### Formule
La distance du point M(x₀, y₀) à la droite d : ax + by + c = 0 est :
d(M, d) = |ax₀ + by₀ + c| / √(a² + b²)

## Applications

### Équation d'une droite passant par deux points
Si A(x₁, y₁) et B(x₂, y₂), l'équation de (AB) est :
(y - y₁)/(y₂ - y₁) = (x - x₁)/(x₂ - x₁) si x₁ ≠ x₂

### Intersection de deux droites
Pour trouver l'intersection, on résout le système des deux équations.`
      }
    ],
    videos: [
      { title: "La droite dans le plan (Arabe)", url: "https://www.youtube.com/watch?v=nIeyaxowOjw" },
      { title: "La droite dans le plan (Français)", url: "https://www.youtube.com/watch?v=zH5vSPaSsHI" }
    ]
  },

  "7": {
    title: "Les polynômes",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Les polynômes",
        content: `# Les polynômes

## Définition

Un polynôme P(x) est une expression de la forme :
P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀

où :
- aᵢ sont les coefficients (nombres réels)
- n est le degré du polynôme si aₙ ≠ 0
- a₀ est le terme constant

## Degré d'un polynôme

### Définition
Le degré d'un polynôme non nul est le plus grand exposant de x ayant un coefficient non nul.

### Conventions
- Le polynôme nul n'a pas de degré (ou degré -∞)
- Un polynôme constant non nul a le degré 0
- deg(P) se note le degré de P

## Opérations sur les polynômes

### Addition et soustraction
Les polynômes s'additionnent en ajoutant les coefficients de même degré.
deg(P + Q) ≤ max(deg(P), deg(Q))

### Multiplication
deg(P × Q) = deg(P) + deg(Q) si P et Q sont non nuls

### Division euclidienne
Pour tout polynôme A et B ≠ 0, il existe des polynômes uniques Q et R tels que :
A = BQ + R avec deg(R) < deg(B)

## Racines d'un polynôme

### Définition
a est racine de P(x) si P(a) = 0

### Théorème
Si a est racine de P(x), alors P(x) = (x - a)Q(x) où Q(x) est un polynôme.

### Multiplicité
Si P(x) = (x - a)ᵏQ(x) avec Q(a) ≠ 0, alors a est racine de multiplicité k.

## Factorisation

### Identités remarquables
- a² - b² = (a - b)(a + b)
- a² + 2ab + b² = (a + b)²
- a² - 2ab + b² = (a - b)²
- a³ - b³ = (a - b)(a² + ab + b²)
- a³ + b³ = (a + b)(a² - ab + b²)

### Méthodes de factorisation
1. Factorisation par mise en évidence
2. Utilisation des identités remarquables
3. Recherche de racines évidentes
4. Méthode de Horner

## Polynômes particuliers

### Polynômes du second degré
P(x) = ax² + bx + c avec a ≠ 0

Discriminant : Δ = b² - 4ac
- Si Δ > 0 : deux racines réelles distinctes
- Si Δ = 0 : une racine double
- Si Δ < 0 : pas de racines réelles`
      }
    ],
    videos: [
      { title: "Les polynômes - Partie 1 (Arabe)", url: "https://www.youtube.com/watch?v=msAZWl8lepI" },
      { title: "Les polynômes - Partie 2 (Arabe)", url: "https://www.youtube.com/watch?v=_s9crOAALgk" },
      { title: "Les polynômes - Partie 3 (Arabe)", url: "https://www.youtube.com/watch?v=EscYeHISkYw" }
    ]
  },

  "8": {
    title: "Équations, inéquations et systèmes",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Équations, inéquations et systèmes",
        content: `# Équations, inéquations et systèmes

## Équations du premier degré

### Forme générale
ax + b = 0 avec a ≠ 0
Solution : x = -b/a

### Méthodes de résolution
1. Isoler l'inconnue
2. Effectuer les mêmes opérations des deux côtés
3. Vérifier la solution

## Équations du second degré

### Forme générale
ax² + bx + c = 0 avec a ≠ 0

### Discriminant
Δ = b² - 4ac

### Solutions
- Si Δ > 0 : x₁ = (-b - √Δ)/(2a) et x₂ = (-b + √Δ)/(2a)
- Si Δ = 0 : x = -b/(2a) (racine double)
- Si Δ < 0 : pas de solution réelle

### Relations entre coefficients et racines
Si x₁ et x₂ sont les racines :
- x₁ + x₂ = -b/a
- x₁ × x₂ = c/a

## Inéquations

### Inéquations du premier degré
ax + b > 0 (ou <, ≤, ≥)

Résolution : x > -b/a si a > 0, x < -b/a si a < 0

### Inéquations du second degré
ax² + bx + c > 0

La résolution dépend du signe de a et du discriminant Δ.

### Tableau de signes
Méthode efficace pour résoudre les inéquations polynomiales et rationnelles.

## Systèmes d'équations linéaires

### Système 2×2
{ax + by = c
{dx + ey = f

### Méthodes de résolution

#### Substitution
1. Exprimer une inconnue en fonction de l'autre
2. Substituer dans la deuxième équation
3. Résoudre et remonter

#### Combinaison linéaire
1. Multiplier les équations par des constantes
2. Additionner pour éliminer une inconnue
3. Résoudre le système simplifié

#### Méthode de Cramer
Δ = ae - bd (déterminant)
- Si Δ ≠ 0 : solution unique
- Si Δ = 0 : soit pas de solution, soit infinité de solutions

## Systèmes d'inéquations

### Résolution graphique
Représenter les demi-plans correspondant à chaque inéquation et trouver l'intersection.

### Résolution algébrique
Résoudre chaque inéquation séparément puis faire l'intersection des ensembles solutions.

## Applications pratiques

### Problèmes de géométrie
Utilisation d'équations pour exprimer des conditions géométriques.

### Problèmes d'optimisation
Utilisation de systèmes d'inéquations pour définir un domaine admissible.`
      }
    ],
    videos: [
      { title: "Équations, inéquations et systèmes (Arabe)", url: "https://www.youtube.com/watch?v=QLmDbDeZ0MU" },
      { title: "Équations, inéquations et systèmes (Français)", url: "https://www.youtube.com/watch?v=3aQDg36Rbm0" }
    ]
  },

  "9": {
    title: "Trigonométrie 1 (Règles du calcul trigonométrique)",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Trigonométrie 1 - Règles du calcul trigonométrique",
        content: `# Trigonométrie 1 - Règles du calcul trigonométrique

## Le cercle trigonométrique

### Définition
Le cercle trigonométrique est le cercle de centre O et de rayon 1, orienté dans le sens direct (trigonométrique).

### Enroulement de la droite réelle
Chaque nombre réel x correspond à un point M sur le cercle, obtenu en parcourant un arc de longueur |x| depuis le point I(1,0).

## Fonctions trigonométriques

### Définitions
Pour un angle x (en radians) :
- cos(x) = abscisse du point M
- sin(x) = ordonnée du point M
- tan(x) = sin(x)/cos(x) si cos(x) ≠ 0

### Propriétés fondamentales
- -1 ≤ cos(x) ≤ 1
- -1 ≤ sin(x) ≤ 1
- cos²(x) + sin²(x) = 1 (relation fondamentale)

## Angles remarquables

### Valeurs principales
- cos(0) = 1, sin(0) = 0
- cos(π/6) = √3/2, sin(π/6) = 1/2
- cos(π/4) = √2/2, sin(π/4) = √2/2
- cos(π/3) = 1/2, sin(π/3) = √3/2
- cos(π/2) = 0, sin(π/2) = 1

## Périodicité

### Périodes
- cos(x + 2π) = cos(x)
- sin(x + 2π) = sin(x)
- tan(x + π) = tan(x)

Les fonctions cosinus et sinus sont périodiques de période 2π.
La fonction tangente est périodique de période π.

## Parité

### Fonctions paires et impaires
- cos(-x) = cos(x) (fonction paire)
- sin(-x) = -sin(x) (fonction impaire)
- tan(-x) = -tan(x) (fonction impaire)

## Formules de transformation

### Angles associés
- cos(π - x) = -cos(x), sin(π - x) = sin(x)
- cos(π + x) = -cos(x), sin(π + x) = -sin(x)
- cos(π/2 - x) = sin(x), sin(π/2 - x) = cos(x)
- cos(π/2 + x) = -sin(x), sin(π/2 + x) = cos(x)

### Formules d'addition
- cos(a + b) = cos(a)cos(b) - sin(a)sin(b)
- cos(a - b) = cos(a)cos(b) + sin(a)sin(b)
- sin(a + b) = sin(a)cos(b) + cos(a)sin(b)
- sin(a - b) = sin(a)cos(b) - cos(a)sin(b)

### Formules de duplication
- cos(2x) = cos²(x) - sin²(x) = 2cos²(x) - 1 = 1 - 2sin²(x)
- sin(2x) = 2sin(x)cos(x)

## Applications géométriques

### Dans le triangle rectangle
Si A est un angle aigu d'un triangle rectangle :
- cos(A) = côté adjacent / hypoténuse
- sin(A) = côté opposé / hypoténuse
- tan(A) = côté opposé / côté adjacent`
      }
    ]
  },

  "10": {
    title: "Trigonométrie 2 (Équations et inéquations trigonométriques)",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Trigonométrie 2 - Équations et inéquations trigonométriques",
        content: `# Trigonométrie 2 - Équations et inéquations trigonométriques

## Équations trigonométriques de base

### Équation cos(x) = a
- Si |a| > 1 : pas de solution
- Si |a| ≤ 1 : x = ±arccos(a) + 2kπ, k ∈ Z

### Équation sin(x) = a
- Si |a| > 1 : pas de solution
- Si |a| ≤ 1 : x = arcsin(a) + 2kπ ou x = π - arcsin(a) + 2kπ, k ∈ Z

### Équation tan(x) = a
x = arctan(a) + kπ, k ∈ Z

## Équations trigonométriques particulières

### cos(x) = cos(α)
x = α + 2kπ ou x = -α + 2kπ, k ∈ Z

### sin(x) = sin(α)
x = α + 2kπ ou x = π - α + 2kπ, k ∈ Z

### tan(x) = tan(α)
x = α + kπ, k ∈ Z

## Résolution d'équations plus complexes

### Méthode par factorisation
Exemple : sin(x)cos(x) = 0
Solutions : sin(x) = 0 ou cos(x) = 0

### Méthode par changement de variable
Exemple : 2cos²(x) - 3cos(x) + 1 = 0
Poser u = cos(x) et résoudre 2u² - 3u + 1 = 0

### Utilisation des formules
Transformer l'équation à l'aide des formules trigonométriques.

## Inéquations trigonométriques

### Méthode générale
1. Résoudre l'équation associée
2. Étudier le signe de l'expression trigonométrique
3. Utiliser le cercle trigonométrique pour visualiser

### Exemples types

#### cos(x) ≥ 1/2
Sur [0, 2π] : x ∈ [0, π/3] ∪ [5π/3, 2π]
Solution générale : x ∈ [-π/3 + 2kπ, π/3 + 2kπ], k ∈ Z

#### sin(x) > √2/2
Sur [0, 2π] : x ∈ ]π/4, 3π/4[
Solution générale : x ∈ ]π/4 + 2kπ, 3π/4 + 2kπ[, k ∈ Z

## Systèmes d'équations trigonométriques

### Exemple
{cos(x) + sin(x) = 1
{cos(x) - sin(x) = 0

Méthode : addition/soustraction des équations ou substitution.

## Applications pratiques

### Oscillations harmoniques
Les équations trigonométriques modélisent de nombreux phénomènes périodiques.

### Problèmes géométriques
Calcul d'angles dans des figures géométriques complexes.

## Conseils de résolution

1. Ramener l'équation à une forme standard
2. Utiliser les formules trigonométriques appropriées
3. Résoudre les équations de base
4. Vérifier les solutions dans l'intervalle demandé
5. Utiliser le cercle trigonométrique pour visualiser`
      }
    ]
  },

  "11": {
    title: "Généralités sur les fonctions",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Généralités sur les fonctions",
        content: `# Généralités sur les fonctions

## Définition d'une fonction

### Notion de fonction
Une fonction f de E vers F est une relation qui associe à chaque élément x de E au plus un élément y de F.
On note f : E → F et y = f(x).

### Vocabulaire
- E est l'ensemble de départ
- F est l'ensemble d'arrivée
- x est la variable (antécédent)
- f(x) est l'image de x par f
- Df est l'ensemble de définition de f

## Ensemble de définition

### Détermination de Df
L'ensemble de définition est l'ensemble des valeurs de x pour lesquelles f(x) existe.

### Cas particuliers
- Fonction polynôme : Df = ℝ
- Fonction rationnelle : Df = ℝ privé des valeurs annulant le dénominateur
- Fonction racine : x ≥ 0 pour √x
- Fonction logarithme : x > 0 pour ln(x)

## Représentation graphique

### Courbe représentative
Dans un repère orthonormé, la courbe Cf d'une fonction f est l'ensemble des points M(x, f(x)) où x ∈ Df.

### Lecture graphique
- Ensemble de définition : projection de la courbe sur l'axe des abscisses
- Ensemble image : projection de la courbe sur l'axe des ordonnées
- Variations : croissance/décroissance

## Parité d'une fonction

### Fonction paire
f est paire si pour tout x ∈ Df : -x ∈ Df et f(-x) = f(x)
La courbe est symétrique par rapport à l'axe des ordonnées.

### Fonction impaire
f est impaire si pour tout x ∈ Df : -x ∈ Df et f(-x) = -f(x)
La courbe est symétrique par rapport à l'origine.

## Périodicité

### Fonction périodique
f est périodique de période T > 0 si pour tout x ∈ Df :
x + T ∈ Df et f(x + T) = f(x)

La courbe se répète tous les T.

## Monotonie

### Fonction croissante
f est croissante sur I si pour tous x₁, x₂ ∈ I :
x₁ < x₂ ⟹ f(x₁) ≤ f(x₂)

### Fonction décroissante
f est décroissante sur I si pour tous x₁, x₂ ∈ I :
x₁ < x₂ ⟹ f(x₁) ≥ f(x₂)

### Fonction monotone
Une fonction est monotone si elle est soit croissante, soit décroissante.

## Extremums

### Maximum local
f admet un maximum local en a si il existe un intervalle I contenant a tel que :
pour tout x ∈ I ∩ Df, f(x) ≤ f(a)

### Minimum local
f admet un minimum local en a si il existe un intervalle I contenant a tel que :
pour tout x ∈ I ∩ Df, f(x) ≥ f(a)

## Opérations sur les fonctions

### Addition, soustraction, multiplication
(f + g)(x) = f(x) + g(x)
(f - g)(x) = f(x) - g(x)
(f × g)(x) = f(x) × g(x)
Ensemble de définition : Df ∩ Dg

### Division
(f/g)(x) = f(x)/g(x)
Ensemble de définition : Df ∩ Dg privé des zéros de g

### Composition
(f ∘ g)(x) = f(g(x))
Ensemble de définition : {x ∈ Dg | g(x) ∈ Df}`
      }
    ]
  },

  "12": {
    title: "Transformations du plan",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Transformations du plan",
        content: `# Transformations du plan

## Définition générale

Une transformation du plan est une application qui associe à tout point M du plan un point M' du plan.
On note T : M ↦ M' ou M' = T(M).

## Isométries

### Définition
Une isométrie est une transformation qui conserve les distances.
Si T est une isométrie : d(M,N) = d(T(M),T(N))

### Propriétés des isométries
- Conservent les longueurs
- Conservent les angles
- Conservent les aires
- Transforment une droite en droite
- Transforment un cercle en cercle de même rayon

## Translation

### Définition
Une translation de vecteur u⃗ est la transformation qui associe à tout point M le point M' tel que MM'⃗ = u⃗.

### Propriétés
- T_u⃗(M) = M + u⃗
- Conserve les directions
- Pas de point fixe (sauf si u⃗ = 0⃗)
- Commutative : T_u⃗ ∘ T_v⃗ = T_v⃗ ∘ T_u⃗ = T_{u⃗+v⃗}

## Symétrie centrale

### Définition
La symétrie de centre O associe à tout point M le point M' tel que O soit le milieu de [MM'].

### Propriétés
- S_O(M) = 2O - M en coordonnées
- O est point fixe
- S_O ∘ S_O = Id (involution)
- Conserve les directions mais change le sens

## Rotation

### Définition
Une rotation de centre O et d'angle θ transforme tout point M en un point M' tel que :
- OM' = OM
- (OM⃗, OM'⃗) = θ

### Propriétés
- O est point fixe
- R_{O,θ} ∘ R_{O,φ} = R_{O,θ+φ}
- R_{O,-θ} = (R_{O,θ})^{-1}

### Expression complexe
Si M a pour affixe z et O pour affixe a :
z' = e^{iθ}(z - a) + a

## Symétrie orthogonale (réflexion)

### Définition
La symétrie orthogonale par rapport à une droite d transforme tout point M en un point M' tel que d soit la médiatrice de [MM'].

### Propriétés
- Les points de d sont fixes
- s_d ∘ s_d = Id (involution)
- Change l'orientation

## Homothétie

### Définition
L'homothétie de centre O et de rapport k (k ≠ 0) transforme tout point M en un point M' tel que :
OM'⃗ = k·OM⃗

### Propriétés
- Si k > 0 : même sens, si k < 0 : sens opposé
- Si |k| > 1 : agrandissement, si |k| < 1 : rétrécissement
- h_{O,k} ∘ h_{O,k'} = h_{O,kk'}
- Conserve les directions et les angles

### Cas particuliers
- k = 1 : identité
- k = -1 : symétrie centrale

## Similitudes

### Définition
Une similitude est la composée d'une isométrie et d'une homothétie.
Elle multiplie toutes les distances par un même facteur k > 0.

### Types de similitudes
- Similitude directe : rotation-homothétie
- Similitude indirecte : symétrie-homothétie

## Applications

### Géométrie
- Construction de figures
- Démonstrations géométriques
- Étude de configurations

### Art et architecture
- Frises et pavages
- Symétries dans l'art

### Physique
- Transformations d'espace
- Changements de référentiel`
      }
    ]
  },

  "13": {
    title: "Le produit scalaire",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Le produit scalaire",
        content: `# Le produit scalaire

## Définition du produit scalaire

### Définition géométrique
Le produit scalaire de deux vecteurs u⃗ et v⃗ est le nombre réel :
u⃗ · v⃗ = ||u⃗|| × ||v⃗|| × cos(u⃗, v⃗)

où (u⃗, v⃗) est l'angle entre les deux vecteurs.

### Cas particuliers
- Si u⃗ = 0⃗ ou v⃗ = 0⃗ : u⃗ · v⃗ = 0
- Si u⃗ ⊥ v⃗ : u⃗ · v⃗ = 0
- u⃗ · u⃗ = ||u⃗||² (carré scalaire)

## Propriétés du produit scalaire

### Commutativité
u⃗ · v⃗ = v⃗ · u⃗

### Bilinéarité
- (λu⃗) · v⃗ = λ(u⃗ · v⃗)
- u⃗ · (λv⃗) = λ(u⃗ · v⃗)
- (u⃗ + v⃗) · w⃗ = u⃗ · w⃗ + v⃗ · w⃗

### Positivité
u⃗ · u⃗ ≥ 0 et u⃗ · u⃗ = 0 ⟺ u⃗ = 0⃗

## Expression analytique

### Dans une base orthonormée
Si u⃗(x₁, y₁) et v⃗(x₂, y₂) dans une base orthonormée :
u⃗ · v⃗ = x₁x₂ + y₁y₂

### Norme d'un vecteur
||u⃗|| = √(u⃗ · u⃗) = √(x₁² + y₁²)

## Applications du produit scalaire

### Calcul d'angles
cos(u⃗, v⃗) = (u⃗ · v⃗)/(||u⃗|| × ||v⃗||)

### Test d'orthogonalité
u⃗ ⊥ v⃗ ⟺ u⃗ · v⃗ = 0

### Projection orthogonale
La projection de u⃗ sur v⃗ est :
proj_v⃗(u⃗) = (u⃗ · v⃗/||v⃗||²) × v⃗

## Identités remarquables

### Identité de polarisation
u⃗ · v⃗ = ¼(||u⃗ + v⃗||² - ||u⃗ - v⃗||²)

### Identité du parallélogramme
||u⃗ + v⃗||² + ||u⃗ - v⃗||² = 2(||u⃗||² + ||v⃗||²)

### Développement
||u⃗ + v⃗||² = ||u⃗||² + 2u⃗ · v⃗ + ||v⃗||²

## Applications géométriques

### Distance d'un point à une droite
Si d a un vecteur directeur u⃗ et passe par A, la distance de M à d est :
d(M, d) = ||AM⃗ ∧ u⃗||/||u⃗||

### Équation d'un cercle
Un cercle de centre A et de rayon r a pour équation :
||AM⃗||² = r² ou AM⃗ · AM⃗ = r²

### Médiane d'un triangle
Dans un triangle ABC, la longueur de la médiane issue de A est :
m_a = ½√(2b² + 2c² - a²)

## Inéqualités

### Inégalité de Cauchy-Schwarz
|u⃗ · v⃗| ≤ ||u⃗|| × ||v⃗||

L'égalité a lieu si et seulement si u⃗ et v⃗ sont colinéaires.

### Inégalité triangulaire
||u⃗ + v⃗|| ≤ ||u⃗|| + ||v⃗||

## Applications en physique

### Travail d'une force
W = F⃗ · d⃗ où F⃗ est la force et d⃗ le déplacement

### Puissance
P = F⃗ · v⃗ où v⃗ est la vitesse`
      }
    ]
  },

  "14": {
    title: "Géométrie dans l'espace",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Géométrie dans l'espace",
        content: `# Géométrie dans l'espace

## Repérage dans l'espace

### Repère orthonormé de l'espace
Un repère orthonormé de l'espace est constitué d'un point O (origine) et de trois vecteurs unitaires i⃗, j⃗, k⃗ orthogonaux deux à deux.

### Coordonnées d'un point
Tout point M de l'espace a des coordonnées uniques (x, y, z) telles que :
OM⃗ = xi⃗ + yj⃗ + zk⃗

### Coordonnées d'un vecteur
Un vecteur u⃗ a des coordonnées (a, b, c) telles que :
u⃗ = ai⃗ + bj⃗ + ck⃗

## Distance et norme

### Distance entre deux points
La distance entre M₁(x₁, y₁, z₁) et M₂(x₂, y₂, z₂) est :
d = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]

### Norme d'un vecteur
||u⃗|| = √(a² + b² + c²)

### Point milieu
Le milieu de [AB] a pour coordonnées :
((xₐ+xᵦ)/2, (yₐ+yᵦ)/2, (zₐ+zᵦ)/2)

## Produit scalaire dans l'espace

### Expression analytique
u⃗(a₁, b₁, c₁) · v⃗(a₂, b₂, c₂) = a₁a₂ + b₁b₂ + c₁c₂

### Applications
- Calcul d'angles
- Test d'orthogonalité
- Projection orthogonale

## Produit vectoriel

### Définition
Le produit vectoriel u⃗ ∧ v⃗ est un vecteur perpendiculaire à u⃗ et v⃗, de norme ||u⃗|| × ||v⃗|| × sin(u⃗, v⃗).

### Expression analytique
Si u⃗(a₁, b₁, c₁) et v⃗(a₂, b₂, c₂) :
u⃗ ∧ v⃗ = (b₁c₂ - c₁b₂, c₁a₂ - a₁c₂, a₁b₂ - b₁a₂)

### Propriétés
- Anticommutativité : u⃗ ∧ v⃗ = -v⃗ ∧ u⃗
- Distributivité par rapport à l'addition
- ||u⃗ ∧ v⃗|| = aire du parallélogramme formé par u⃗ et v⃗

## Droites dans l'espace

### Représentation paramétrique
Une droite passant par A(x₀, y₀, z₀) et de vecteur directeur u⃗(a, b, c) a pour équations :
x = x₀ + ta
y = y₀ + tb
z = z₀ + tc
où t ∈ ℝ

### Position relative de deux droites
Deux droites peuvent être :
- Sécantes (un point d'intersection)
- Parallèles (même direction, pas d'intersection)
- Gauches (non coplanaires)

## Plans dans l'espace

### Équation cartésienne
Un plan a une équation de la forme : ax + by + cz + d = 0
Le vecteur n⃗(a, b, c) est normal au plan.

### Équation paramétrique
Un plan passant par A et dirigé par u⃗ et v⃗ non colinéaires :
x = x₀ + su₁ + tv₁
y = y₀ + su₂ + tv₂
z = z₀ + su₃ + tv₃
où s, t ∈ ℝ

### Position relative
- Deux plans peuvent être parallèles, sécants ou confondus
- Une droite et un plan peuvent être parallèles, sécants ou inclus

## Sphères

### Équation
Une sphère de centre A(a, b, c) et de rayon r a pour équation :
(x-a)² + (y-b)² + (z-c)² = r²

### Intersection avec un plan
- Si d < r : cercle
- Si d = r : point (tangence)
- Si d > r : ensemble vide

## Volumes et aires

### Volume d'un parallélépipède
V = |u⃗ · (v⃗ ∧ w⃗)| (produit mixte)

### Volume d'une pyramide
V = (1/3) × aire_base × hauteur

### Aire d'un parallélogramme
A = ||u⃗ ∧ v⃗||

## Applications

### Géométrie analytique
Résolution de problèmes géométriques par le calcul.

### Physique
- Mécanique du point et du solide
- Électromagnétisme
- Optique géométrique`
      }
    ],
    images: [
      "/lovable-uploads/54e9514f-84af-4d63-8dfa-568532e403fb.png",
      "/lovable-uploads/df931ac0-a8f7-4ed2-80e6-856b662fd8d6.png",
      "/lovable-uploads/67b0b5a4-09ac-40b5-8dc5-d366924f161a.png",
      "/lovable-uploads/3c866e1c-ae39-412d-ab0c-6fc1ae7fed02.png",
      "/lovable-uploads/027b5232-2600-493c-929d-90ad770a5188.png",
      "/lovable-uploads/0d34cea1-ec58-43b6-bcc2-349fd4a93539.png",
      "/lovable-uploads/8eac1178-3ea4-41eb-ba6e-59860a36a38c.png",
      "/lovable-uploads/11d170f1-9482-4f75-9865-cb90afe50c95.png",
      "/lovable-uploads/29736d58-ac5c-4a2f-ab07-dd13a79a30d0.png"
    ]
  },

  "15": {
    title: "Statistiques",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Statistiques",
        content: `# Statistiques

## Introduction aux statistiques

### Définition
La statistique est la science qui consiste à recueillir, organiser, analyser et interpréter des données numériques.

### Vocabulaire de base
- **Population** : ensemble d'individus étudiés
- **Échantillon** : sous-ensemble de la population
- **Individu** : élément de la population
- **Caractère** : propriété étudiée sur les individus
- **Modalité** : valeur prise par un caractère

### Types de caractères
- **Qualitatif** : non mesurable (couleur, sexe, profession)
- **Quantitatif** : mesurable
  - Discret : valeurs isolées (nombre d'enfants)
  - Continu : toutes les valeurs d'un intervalle (taille, poids)

## Organisation des données

### Tableaux statistiques
- Effectif (nᵢ) : nombre d'individus ayant la modalité i
- Fréquence (fᵢ) : fᵢ = nᵢ/n où n est l'effectif total
- Effectif cumulé croissant : somme des effectifs jusqu'à la modalité i
- Fréquence cumulée croissante

### Classes
Pour les caractères quantitatifs continus, on groupe les données en classes.
- Amplitude d'une classe : différence entre les bornes
- Centre d'une classe : moyenne des bornes

## Représentations graphiques

### Diagrammes en barres
Pour les caractères qualitatifs ou quantitatifs discrets.

### Histogrammes
Pour les caractères quantitatifs continus groupés en classes.
L'aire de chaque rectangle est proportionnelle à l'effectif.

### Diagrammes circulaires
Chaque secteur a un angle proportionnel à l'effectif.

### Polygones des effectifs
Ligne brisée joignant les points (modalité, effectif).

## Paramètres de position

### Mode
Modalité ayant le plus grand effectif.
- Unimodal : un seul mode
- Bimodal : deux modes
- Multimodal : plusieurs modes

### Médiane
Valeur qui partage la série en deux parties égales.
- Si n est impair : valeur du rang (n+1)/2
- Si n est pair : moyenne des valeurs des rangs n/2 et n/2+1

### Moyenne arithmétique
x̄ = (n₁x₁ + n₂x₂ + ... + nₖxₖ)/n = Σnᵢxᵢ/n

### Quartiles
- Q₁ : 25% des valeurs lui sont inférieures
- Q₂ = médiane : 50%
- Q₃ : 75% des valeurs lui sont inférieures

## Paramètres de dispersion

### Étendue
E = xₘₐₓ - xₘᵢₙ

### Écart interquartile
IQR = Q₃ - Q₁

### Variance
V = Σnᵢ(xᵢ - x̄)²/n = (Σnᵢxᵢ²)/n - x̄²

### Écart-type
σ = √V

## Diagrammes en boîte

### Construction
- Boîte : de Q₁ à Q₃
- Médiane : trait dans la boîte
- Moustaches : jusqu'aux valeurs extrêmes (sans aberrants)
- Valeurs aberrantes : points isolés

### Interprétation
- Position : médiane
- Dispersion : longueur de la boîte et des moustaches
- Symétrie : position de la médiane dans la boîte

## Comparaison de séries

### Critères de comparaison
- Position : moyennes, médianes
- Dispersion : écarts-types, étendues
- Forme : symétrie, modalité

### Coefficient de variation
CV = σ/x̄ (permet de comparer la dispersion relative)

## Applications

### Sondages
Estimation des paramètres d'une population à partir d'un échantillon.

### Contrôle qualité
Surveillance de la production industrielle.

### Sciences expérimentales
Analyse des résultats d'expériences.

## Probabilités élémentaires

### Fréquence et probabilité
Quand n → ∞, la fréquence tend vers la probabilité.

### Loi des grands nombres
Plus l'échantillon est grand, plus la moyenne de l'échantillon se rapproche de la moyenne théorique.`
      }
    ]
  }
};
