
export const mathLessonsData = {
  // SEMESTRE 1
  "101": {
    title: "Les ensembles de nombres N, Z, Q, D et R",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Introduction aux ensembles de nombres",
        content: `# Les ensembles de nombres

## Les différents ensembles
### ℕ (Nombres naturels)
ℕ = {0, 1, 2, 3, 4, 5, ...}
- Utilisés pour **compter**
- **Addition** et **multiplication** toujours possibles
- **Soustraction** pas toujours possible dans ℕ

### ℤ (Nombres entiers)
ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}
- Extension de ℕ avec les **nombres négatifs**
- **Soustraction** toujours possible
- **Division** pas toujours possible dans ℤ

### ℚ (Nombres rationnels)
ℚ = {a/b | a ∈ ℤ, b ∈ ℤ, b ≠ 0}
- **Fractions** de nombres entiers
- **Division** possible (sauf par 0)
- Écriture **décimale limitée** ou **périodique**

### 𝔻 (Nombres décimaux)
𝔻 = {a/10ⁿ | a ∈ ℤ, n ∈ ℕ}
- **Sous-ensemble** de ℚ
- Écriture décimale **limitée**

### ℝ (Nombres réels)
- **Tous** les nombres de la droite numérique
- Inclut les nombres **irrationnels** (π, √2, e, ...)
- **Continuum** des nombres`
      },
      {
        id: 2,
        title: "Relations d'inclusion et propriétés",
        content: `# Relations entre les ensembles

## Inclusions
**ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ**

### Exemples
- 5 ∈ ℕ donc 5 ∈ ℤ, ℚ, 𝔻, ℝ
- -3 ∈ ℤ donc -3 ∈ ℚ, ℝ mais -3 ∉ ℕ
- 1/3 ∈ ℚ donc 1/3 ∈ ℝ mais 1/3 ∉ 𝔻
- √2 ∈ ℝ mais √2 ∉ ℚ

## Propriétés opératoires
### Dans ℕ
- **Fermé** pour + et ×
- **Non fermé** pour - et ÷

### Dans ℤ  
- **Fermé** pour +, -, ×
- **Non fermé** pour ÷

### Dans ℚ et ℝ
- **Fermés** pour +, -, ×, ÷ (÷ ≠ 0)

## Applications pratiques
- **ℕ** : comptage, dénombrement
- **ℤ** : températures, altitudes
- **ℚ** : fractions, proportions
- **ℝ** : mesures physiques, géométrie`
      }
    ],
    videos: [
      { title: "Cours en arabe", url: "https://www.youtube.com/watch?v=NOV6FpGLBZ8" },
      { title: "Cours en français", url: "https://www.youtube.com/watch?v=WWJ8hoPSBAo" }
    ]
  },
  "102": {
    title: "Arithmétique dans ℕ",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Divisibilité et division euclidienne",
        content: `# Arithmétique dans ℕ

## Division euclidienne
Pour tout couple (a,b) avec a ∈ ℕ et b ∈ ℕ*, il existe un unique couple (q,r) tel que :
**a = bq + r** avec **0 ≤ r < b**

- **a** : dividende
- **b** : diviseur  
- **q** : quotient
- **r** : reste

## Divisibilité
**a divise b** (noté a|b) si **∃k ∈ ℕ, b = ka**

### Propriétés
- Si a|b et b|c alors a|c (transitivité)
- Si a|b et a|c alors a|(b+c) et a|(b-c)
- Si a|b alors a|bc pour tout c ∈ ℕ

## Multiples et diviseurs
### Multiples de a
M(a) = {0, a, 2a, 3a, ...}

### Diviseurs de a
D(a) = {d ∈ ℕ* | d|a}

**Exemple** : D(12) = {1, 2, 3, 4, 6, 12}`
      },
      {
        id: 2,
        title: "PGCD et PPCM",
        content: `# PGCD et PPCM

## Plus Grand Commun Diviseur (PGCD)
**PGCD(a,b)** = le plus grand entier qui divise à la fois a et b

### Algorithme d'Euclide
Pour calculer PGCD(a,b) avec a ≥ b :
1. Effectuer la division : a = bq₁ + r₁
2. Si r₁ = 0, alors PGCD(a,b) = b
3. Sinon, calculer PGCD(b,r₁)
4. Répéter jusqu'à reste nul

### Exemple
PGCD(48, 18) :
- 48 = 18 × 2 + 12
- 18 = 12 × 1 + 6  
- 12 = 6 × 2 + 0
Donc PGCD(48, 18) = 6

## Plus Petit Commun Multiple (PPCM)
**PPCM(a,b)** = le plus petit entier positif divisible par a et b

### Relation fondamentale
**PGCD(a,b) × PPCM(a,b) = a × b**

## Nombres premiers entre eux
a et b sont **premiers entre eux** si PGCD(a,b) = 1

### Théorème de Bézout
a et b premiers entre eux ⟺ ∃u,v ∈ ℤ, au + bv = 1`
      }
    ],
    videos: [
      { title: "Cours en arabe", url: "https://www.youtube.com/watch?v=-cmV1kRllWw" },
      { title: "Cours en français", url: "https://www.youtube.com/watch?v=L_hVwt3qQpk" }
    ]
  },
  "103": {
    title: "Calcul vectoriel dans le plan",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Notion de vecteur",
        content: `# Calcul vectoriel dans le plan

## Définition d'un vecteur
Un vecteur est défini par :
- Une **direction** (droite support)
- Un **sens** (orientation)
- Une **longueur** (norme)

## Notation
**AB⃗** : vecteur d'origine A et d'extrémité B

## Égalité de vecteurs
**AB⃗ = CD⃗** si et seulement si :
- Même direction
- Même sens  
- Même longueur

⟺ ABDC est un **parallélogramme**

## Vecteur nul
**O⃗ = AA⃗** pour tout point A
- Direction indéterminée
- Longueur nulle

## Vecteurs opposés
**AB⃗ = -BA⃗**
- Même direction et longueur
- Sens opposé

## Norme d'un vecteur
**||AB⃗|| = AB** (distance entre A et B)

Dans un repère orthonormé :
**||u⃗|| = √(x² + y²)** si u⃗(x, y)`
      },
      {
        id: 2,
        title: "Opérations sur les vecteurs",
        content: `# Opérations vectorielles

## Addition de vecteurs
### Relation de Chasles
**AB⃗ + BC⃗ = AC⃗**

### Règle du parallélogramme
Si ABCD est un parallélogramme :
**AB⃗ + AD⃗ = AC⃗**

### Propriétés
- **Commutativité** : u⃗ + v⃗ = v⃗ + u⃗
- **Associativité** : (u⃗ + v⃗) + w⃗ = u⃗ + (v⃗ + w⃗)
- **Élément neutre** : u⃗ + 0⃗ = u⃗

## Multiplication par un scalaire
**ku⃗** avec k ∈ ℝ :
- Si k > 0 : même direction et sens
- Si k < 0 : même direction, sens opposé
- Si k = 0 : vecteur nul
- **||ku⃗|| = |k| × ||u⃗||**

## Coordonnées dans un repère
Si u⃗(x, y) et v⃗(x', y') :
- **u⃗ + v⃗** : (x + x', y + y')
- **ku⃗** : (kx, ky)

## Vecteurs colinéaires
u⃗ et v⃗ sont colinéaires ⟺ ∃k ∈ ℝ, u⃗ = kv⃗
Dans un repère : **xy' - x'y = 0**`
      }
    ],
    videos: [
      { title: "Cours en arabe", url: "https://www.youtube.com/watch?v=DCce28tAa70" },
      { title: "Cours en français", url: "https://www.youtube.com/watch?v=AwzchpN8S9g" }
    ]
  },
  "104": {
    title: "La projection dans le plan",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Projection orthogonale",
        content: `# La projection dans le plan

## Définition
La **projection orthogonale** d'un point M sur une droite (d) est le point H tel que :
- H ∈ (d)
- MH ⊥ (d)

## Propriétés de la projection
- **H est le point de (d) le plus proche de M**
- MH est la **distance de M à la droite (d)**
- Si M ∈ (d), alors la projection de M est M lui-même

## Projection d'un vecteur
La projection du vecteur **AB⃗** sur la droite (d) de vecteur directeur **u⃗** est :
**proj_u⃗(AB⃗) = (AB⃗ · u⃗/||u⃗||²) × u⃗**

## Applications
### Calcul de distances
- Distance d'un point à une droite
- Distance entre deux droites parallèles

### Résolution de problèmes géométriques
- Calculs d'aires
- Démonstrations de propriétés`
      },
      {
        id: 2,
        title: "Projection dans un repère orthonormé",
        content: `# Projection dans un repère

## Équation d'une droite
### Forme générale
**ax + by + c = 0** avec (a,b) ≠ (0,0)

### Vecteur normal
**n⃗(a, b)** est un vecteur normal à la droite

## Distance d'un point à une droite
Si M(x₀, y₀) et droite (d) : ax + by + c = 0
**d(M, (d)) = |ax₀ + by₀ + c|/√(a² + b²)**

## Projection orthogonale dans un repère
Pour projeter M(x₀, y₀) sur (d) : ax + by + c = 0

### Méthode
1. Écrire l'équation de la perpendiculaire à (d) passant par M
2. Résoudre le système pour trouver l'intersection H
3. H est la projection de M sur (d)

## Exemples d'applications
- **Symétrie orthogonale** : M' = 2H - M
- **Réflexion** d'un rayon lumineux
- **Optimisation** de distances`
      }
    ],
    videos: [
      { title: "Cours en arabe - Partie 1", url: "https://www.youtube.com/watch?v=34qrpUz1vCc" },
      { title: "Cours en arabe - Partie 2", url: "https://www.youtube.com/watch?v=F7vz_Az_72U" }
    ]
  },
  "105": {
    title: "L'ordre dans ℝ",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Relation d'ordre dans ℝ",
        content: `# L'ordre dans ℝ

## Définition de l'ordre
La relation **≤** sur ℝ vérifie :
- **Réflexivité** : ∀a ∈ ℝ, a ≤ a
- **Antisymétrie** : a ≤ b et b ≤ a ⟹ a = b
- **Transitivité** : a ≤ b et b ≤ c ⟹ a ≤ c
- **Ordre total** : ∀a,b ∈ ℝ, a ≤ b ou b ≤ a

## Compatibilité avec les opérations
### Addition
**a ≤ b ⟹ a + c ≤ b + c** pour tout c ∈ ℝ

### Multiplication
- Si c ≥ 0 : **a ≤ b ⟹ ac ≤ bc**
- Si c ≤ 0 : **a ≤ b ⟹ ac ≥ bc**

## Valeur absolue
**|a| = max(a, -a)**

### Propriétés
- |a| ≥ 0 et |a| = 0 ⟺ a = 0
- |ab| = |a||b|
- **Inégalité triangulaire** : |a + b| ≤ |a| + |b|

## Intervalles de ℝ
- **[a, b]** : fermé
- **]a, b[** : ouvert  
- **[a, b[** et **]a, b]** : semi-ouverts
- **]-∞, a]**, **[a, +∞[** : non bornés`
      },
      {
        id: 2,
        title: "Inéquations dans ℝ",
        content: `# Résolution d'inéquations

## Inéquations du premier degré
**ax + b ≤ 0** avec a ≠ 0

### Méthode
1. Isoler x : x ≤ -b/a (si a > 0) ou x ≥ -b/a (si a < 0)
2. Représenter sur la droite numérique

## Inéquations avec valeurs absolues
### |x| ≤ a (a > 0)
**-a ≤ x ≤ a** soit x ∈ [-a, a]

### |x| ≥ a (a > 0)  
**x ≤ -a ou x ≥ a** soit x ∈ ]-∞, -a] ∪ [a, +∞[

### |f(x)| ≤ g(x)
- g(x) ≥ 0 ET -g(x) ≤ f(x) ≤ g(x)

## Inéquations du second degré
**ax² + bx + c ≤ 0** avec a ≠ 0

### Méthode
1. Calculer Δ = b² - 4ac
2. Étudier le signe selon les racines
3. Utiliser le tableau de signes

## Systèmes d'inéquations
Résoudre plusieurs inéquations simultanément
**Solution = intersection des solutions individuelles**`
      }
    ],
    videos: [
      { title: "Cours en arabe", url: "https://www.youtube.com/watch?v=vDXWhuLUTUg" },
      { title: "Cours en français", url: "https://www.youtube.com/watch?v=9MtAK7Xzrls" }
    ]
  },
  "106": {
    title: "La droite dans le plan",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Équations de droite",
        content: `# La droite dans le plan

## Équations d'une droite
### Équation cartésienne
**ax + by + c = 0** avec (a,b) ≠ (0,0)
- Vecteur normal : **n⃗(a, b)**
- Vecteur directeur : **u⃗(-b, a)**

### Équation réduite
**y = mx + p**
- **m** : coefficient directeur (pente)
- **p** : ordonnée à l'origine

### Équation paramétrique
**{x = x₀ + tu ; y = y₀ + tv}** avec u⃗(u, v) vecteur directeur

## Détermination d'une droite
Une droite est déterminée par :
- **Deux points distincts** A et B
- **Un point et un vecteur directeur**
- **Un point et la pente**

## Positions relatives de deux droites
### Droites parallèles
- Mêmes coefficients directeurs
- (d₁) : y = m₁x + p₁ et (d₂) : y = m₂x + p₂
- Parallèles ⟺ m₁ = m₂ et p₁ ≠ p₂

### Droites sécantes
- Coefficients directeurs différents
- Point d'intersection unique

### Droites perpendiculaires
- **m₁ × m₂ = -1**`
      },
      {
        id: 2,
        title: "Applications géométriques",
        content: `# Applications des équations de droites

## Distance d'un point à une droite
Si M(x₀, y₀) et (d) : ax + by + c = 0
**d(M, (d)) = |ax₀ + by₀ + c|/√(a² + b²)**

## Angle entre deux droites
Si (d₁) : y = m₁x + p₁ et (d₂) : y = m₂x + p₂
**tan(θ) = |(m₂ - m₁)/(1 + m₁m₂)|**

## Médiatrice d'un segment
**Médiatrice de [AB]** : ensemble des points équidistants de A et B
- Perpendiculaire à AB
- Passe par le milieu de AB

## Bissectrices
**Bissectrices de deux droites sécantes** :
Lieux des points équidistants des deux droites

Si (d₁) : a₁x + b₁y + c₁ = 0 et (d₂) : a₂x + b₂y + c₂ = 0
**Bissectrices** : 
(a₁x + b₁y + c₁)/√(a₁² + b₁²) = ±(a₂x + b₂y + c₂)/√(a₂² + b₂²)

## Transformations du plan
- **Translation** : conservation du parallélisme
- **Rotation** : conservation des angles
- **Symétrie axiale** : (d) → (d') symétrique par rapport à l'axe`
      }
    ],
    videos: [
      { title: "Cours en arabe", url: "https://www.youtube.com/watch?v=nIeyaxowOjw" },
      { title: "Cours en français", url: "https://www.youtube.com/watch?v=zH5vSPaSsHI" }
    ]
  },
  "107": {
    title: "Les polynômes",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Définitions et opérations",
        content: `# Les polynômes

## Définition
Un **polynôme** à une variable x est une expression de la forme :
**P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀**

où aᵢ ∈ ℝ sont les **coefficients**

## Vocabulaire
- **Degré** : plus haute puissance de x (si aₙ ≠ 0)
- **Terme dominant** : aₙxⁿ
- **Coefficient dominant** : aₙ
- **Terme constant** : a₀

## Types particuliers
- **Polynôme nul** : tous les coefficients sont nuls
- **Polynôme constant** : P(x) = a₀
- **Monôme** : P(x) = axⁿ
- **Binôme** : somme de deux monômes
- **Trinôme** : somme de trois monômes

## Opérations sur les polynômes
### Addition
**(P + Q)(x) = P(x) + Q(x)**
- Additionner les coefficients des termes de même degré

### Multiplication
**(P × Q)(x) = P(x) × Q(x)**
- **deg(P × Q) = deg(P) + deg(Q)**`
      },
      {
        id: 2,
        title: "Division euclidienne et factorisation",
        content: `# Division et factorisation

## Division euclidienne
Pour tous polynômes A et B (B ≠ 0), il existe des polynômes uniques Q et R tels que :
**A = BQ + R** avec **deg(R) < deg(B)** ou R = 0

## Racines d'un polynôme
**a est racine de P** ⟺ P(a) = 0

### Théorème
Si a est racine de P, alors P(x) = (x - a)Q(x)

### Multiplicity
- **Racine simple** : P(a) = 0 et P'(a) ≠ 0
- **Racine double** : P(a) = P'(a) = 0 et P''(a) ≠ 0

## Factorisation
### Identités remarquables
- **a² - b² = (a-b)(a+b)**
- **a² + 2ab + b² = (a+b)²**
- **a² - 2ab + b² = (a-b)²**
- **a³ + b³ = (a+b)(a² - ab + b²)**
- **a³ - b³ = (a-b)(a² + ab + b²)**

### Polynômes du second degré
**ax² + bx + c = a(x - x₁)(x - x₂)**
si Δ ≥ 0 avec x₁ et x₂ les racines

## Applications
- **Résolution d'équations**
- **Étude de fonctions**
- **Calculs algébriques**`
      }
    ],
    videos: [
      { title: "Cours en arabe - Partie 1", url: "https://www.youtube.com/watch?v=msAZWl8lepI" },
      { title: "Cours en arabe - Partie 2", url: "https://www.youtube.com/watch?v=_s9crOAALgk" },
      { title: "Cours en arabe - Partie 3", url: "https://www.youtube.com/watch?v=EscYeHISkYw" }
    ]
  },
  "108": {
    title: "Équations, inéquations et systèmes",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Équations polynomiales",
        content: `# Équations, inéquations et systèmes

## Équations du premier degré
**ax + b = 0** avec a ≠ 0
**Solution : x = -b/a**

## Équations du second degré
**ax² + bx + c = 0** avec a ≠ 0

### Discriminant
**Δ = b² - 4ac**

### Solutions
- Si Δ > 0 : **x₁ = (-b - √Δ)/(2a)** et **x₂ = (-b + √Δ)/(2a)**
- Si Δ = 0 : **x₀ = -b/(2a)** (racine double)
- Si Δ < 0 : **Pas de solution réelle**

### Relations de Vieta
- **x₁ + x₂ = -b/a**
- **x₁ × x₂ = c/a**

## Équations factorisées
**P(x) = 0 ⟺ au moins un facteur est nul**

### Exemple
(x - 2)(x + 3)(2x - 1) = 0
Solutions : x = 2, x = -3, x = 1/2

## Équations avec racines
**√(f(x)) = g(x)**
- Condition : f(x) ≥ 0 et g(x) ≥ 0
- Élever au carré : f(x) = [g(x)]²
- **Vérifier** les solutions trouvées`
      },
      {
        id: 2,
        title: "Systèmes d'équations et inéquations",
        content: `# Systèmes et inéquations

## Systèmes d'équations linéaires
**{ax + by = c ; dx + ey = f}**

### Méthode par substitution
1. Exprimer une variable en fonction de l'autre
2. Substituer dans la deuxième équation
3. Résoudre et calculer l'autre variable

### Méthode par élimination
1. Multiplier pour éliminer une variable
2. Additionner ou soustraire les équations
3. Résoudre le système obtenu

### Méthode de Cramer
Si Δ = ae - bd ≠ 0 :
**x = (ce - bf)/Δ** et **y = (af - cd)/Δ**

## Inéquations polynomiales
### Méthode du tableau de signes
1. Factoriser le polynôme
2. Trouver les racines  
3. Dresser le tableau de signes
4. Conclure selon l'inéquation

### Exemple
x² - 3x + 2 ≤ 0
- Factorisation : (x - 1)(x - 2)
- Racines : 1 et 2
- Solution : x ∈ [1, 2]

## Systèmes d'inéquations
**Intersection** des solutions de chaque inéquation`
      }
    ],
    videos: [
      { title: "Cours en arabe", url: "https://www.youtube.com/watch?v=QLmDbDeZ0MU" },
      { title: "Cours en français", url: "https://www.youtube.com/watch?v=3aQDg36Rbm0" }
    ]
  },
  "109": {
    title: "Trigonométrie 1 (Règles du calcul trigonométrique)",
    semester: 1,
    slides: [
      {
        id: 1,
        title: "Cercle trigonométrique et fonctions",
        content: `# Trigonométrie - Règles de calcul

## Cercle trigonométrique
- **Rayon = 1**
- **Sens direct** (anti-horaire) : positif
- **Mesure principale** : angle ∈ ]-π, π]

## Fonctions trigonométriques
Pour un angle θ dans le cercle unité :
- **cos θ = abscisse** du point
- **sin θ = ordonnée** du point  
- **tan θ = sin θ / cos θ** (si cos θ ≠ 0)

## Valeurs remarquables
| θ     | 0 | π/6 | π/4 | π/3 | π/2 |
|-------|---|-----|-----|-----|-----|
| cos θ | 1 | √3/2| √2/2| 1/2 | 0   |
| sin θ | 0 | 1/2 | √2/2| √3/2| 1   |
| tan θ | 0 | √3/3| 1   | √3  | ∄   |

## Propriétés fondamentales
- **cos²θ + sin²θ = 1** (identité fondamentale)
- **-1 ≤ cos θ ≤ 1**
- **-1 ≤ sin θ ≤ 1**

## Périodicité
- **cos(θ + 2π) = cos θ**
- **sin(θ + 2π) = sin θ**  
- **tan(θ + π) = tan θ**`
      },
      {
        id: 2,
        title: "Formules trigonométriques",
        content: `# Formules trigonométriques

## Angles associés
### Angles opposés
- **cos(-θ) = cos θ**
- **sin(-θ) = -sin θ**
- **tan(-θ) = -tan θ**

### Angles supplémentaires  
- **cos(π - θ) = -cos θ**
- **sin(π - θ) = sin θ**
- **tan(π - θ) = -tan θ**

### Angles complémentaires
- **cos(π/2 - θ) = sin θ**
- **sin(π/2 - θ) = cos θ**

## Formules d'addition
### cos(a ± b)
**cos(a + b) = cos a cos b - sin a sin b**
**cos(a - b) = cos a cos b + sin a sin b**

### sin(a ± b)  
**sin(a + b) = sin a cos b + cos a sin b**
**sin(a - b) = sin a cos b - cos a sin b**

### tan(a ± b)
**tan(a ± b) = (tan a ± tan b)/(1 ∓ tan a tan b)**

## Formules de duplication
- **cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ**
- **sin(2θ) = 2sin θ cos θ**
- **tan(2θ) = 2tan θ/(1 - tan²θ)**`
      }
    ]
  },

  // SEMESTRE 2
  "110": {
    title: "Trigonométrie 2 (Équations et inéquations trigonométriques)",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Équations trigonométriques de base",
        content: `# Équations trigonométriques

## Équations élémentaires
### cos x = a
- Si |a| > 1 : **pas de solution**
- Si |a| ≤ 1 : **x = ±arccos(a) + 2kπ**, k ∈ ℤ

### sin x = a  
- Si |a| > 1 : **pas de solution**
- Si |a| ≤ 1 : **x = arcsin(a) + 2kπ** ou **x = π - arcsin(a) + 2kπ**

### tan x = a
**x = arctan(a) + kπ**, k ∈ ℤ

## Équations avec valeurs particulières
### cos x = 1/2
**x = ±π/3 + 2kπ**

### sin x = √2/2  
**x = π/4 + 2kπ** ou **x = 3π/4 + 2kπ**

### tan x = 1
**x = π/4 + kπ**

## Méthodes de résolution
1. **Simplifier** l'équation
2. **Utiliser les identités** trigonométriques
3. **Ramener** aux équations élémentaires
4. **Donner toutes les solutions**`
      },
      {
        id: 2,
        title: "Inéquations trigonométriques",
        content: `# Inéquations trigonométriques

## Principe général
1. **Résoudre l'équation** associée
2. **Étudier le signe** sur le cercle trigonométrique
3. **Donner les intervalles** solutions

## Exemples types
### cos x ≥ 1/2
- Équation : cos x = 1/2 ⟹ x = ±π/3 + 2kπ
- Sur [0, 2π] : cos x ≥ 1/2 pour x ∈ [0, π/3] ∪ [5π/3, 2π]
- **Solution générale** : x ∈ [-π/3 + 2kπ, π/3 + 2kπ]

### sin x < √2/2
- Équation : sin x = √2/2 ⟹ x = π/4 + 2kπ ou x = 3π/4 + 2kπ  
- **Solution** : x ∈ ]-π + 2kπ, π/4 + 2kπ[ ∪ ]3π/4 + 2kπ, π + 2kπ[

## Équations du second degré
### 2cos²x - cos x - 1 = 0
Poser u = cos x :
- 2u² - u - 1 = 0
- Solutions : u = 1 ou u = -1/2
- cos x = 1 : x = 2kπ
- cos x = -1/2 : x = ±2π/3 + 2kπ

## Systèmes trigonométriques
Combiner plusieurs équations/inéquations
**Intersection** des ensembles solutions`
      }
    ]
  },
  "111": {
    title: "Généralités sur les fonctions",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Notion de fonction",
        content: `# Généralités sur les fonctions

## Définition
Une **fonction f** de A vers B associe à chaque élément x ∈ A au plus un élément y ∈ B.
**f : A → B, x ↦ f(x)**

## Vocabulaire
- **Domaine de définition Df** : ensemble des x où f(x) existe
- **Image de f** : {f(x) | x ∈ Df} 
- **Antécédent de y** : x tel que f(x) = y

## Représentation graphique
**Courbe Cf** : ensemble des points M(x, f(x)) avec x ∈ Df

## Parité
### Fonction paire
**f(-x) = f(x)** pour tout x ∈ Df
- Symétrie par rapport à l'axe des ordonnées

### Fonction impaire  
**f(-x) = -f(x)** pour tout x ∈ Df
- Symétrie par rapport à l'origine

## Périodicité
f est **périodique de période T** si :
**f(x + T) = f(x)** pour tout x ∈ Df

### Exemples
- cos et sin : période 2π
- tan : période π`
      },
      {
        id: 2,
        title: "Monotonie et extremums",
        content: `# Monotonie et extremums

## Croissance et décroissance
### Fonction croissante sur I
**∀x₁, x₂ ∈ I, x₁ < x₂ ⟹ f(x₁) ≤ f(x₂)**

### Fonction décroissante sur I
**∀x₁, x₂ ∈ I, x₁ < x₂ ⟹ f(x₁) ≥ f(x₂)**

### Fonction strictement monotone
Inégalités strictes

## Tableau de variations
Synthèse des variations de f :
- **Intervalles** de monotonie
- **Valeurs** aux bornes
- **Extremums** locaux

## Maximum et minimum
### Maximum global
**f(a) est maximum ⟺ ∀x ∈ Df, f(x) ≤ f(a)**

### Minimum global
**f(a) est minimum ⟺ ∀x ∈ Df, f(x) ≥ f(a)**

### Extremums locaux
Sur un intervalle contenant a

## Fonctions majorées/minorées
- **f majorée** : ∃M, ∀x ∈ Df, f(x) ≤ M
- **f minorée** : ∃m, ∀x ∈ Df, f(x) ≥ m  
- **f bornée** : majorée et minorée`
      }
    ]
  },
  "112": {
    title: "Transformations du plan",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Isométries du plan",
        content: `# Transformations du plan

## Définition
Une **transformation** du plan est une application qui à tout point M associe un point M'.

## Isométries
**Transformations qui conservent les distances**
AB = A'B' pour tous points A, B

### Translation
**t⃗ᵤ(M) = M'** tel que **MM'⃗ = u⃗**

#### Propriétés
- Conservation des **distances** et **angles**
- Conservation du **parallélisme**
- **Composée** de translations = translation

### Symétrie centrale
**Sₒ(M) = M'** tel que **O est milieu de [MM']**

#### Propriétés  
- **Involutive** : Sₒ ∘ Sₒ = Id
- Conservation des distances
- **Renversement** de l'orientation

### Symétrie axiale
**s(d)(M) = M'** tel que **(d) est médiatrice de [MM']**

#### Propriétés
- **Involutive**
- Conservation des distances
- **Renversement** de l'orientation
- Points de (d) **invariants**`
      },
      {
        id: 2,
        title: "Rotations et similitudes",
        content: `# Rotations et similitudes

## Rotation
**R(O,θ)(M) = M'** avec :
- **OM' = OM**
- **(OM⃗, OM'⃗) = θ**

### Propriétés
- Conservation des **distances** et **angles**
- Conservation de l'**orientation**
- **Centre O invariant**
- **Composée** de rotations de même centre = rotation

## Homothétie
**h(O,k)(M) = M'** tel que **OM'⃗ = k·OM⃗**

### Propriétés
- Si |k| > 1 : **agrandissement**
- Si |k| < 1 : **réduction**
- Si k > 0 : **même orientation**
- Si k < 0 : **orientation opposée**
- Conservation du **parallélisme**

## Similitude directe
**Composée d'une homothétie et d'une rotation**
ou **composée d'une rotation et d'une homothétie**

### Forme complexe
**f(z) = az + b** avec |a| ≠ 0

### Propriétés
- Conservation des **angles orientés**
- **Rapport de similitude** = |a|`
      }
    ]
  },
  "113": {
    title: "Le produit scalaire",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Définition et propriétés du produit scalaire",
        content: `# Le produit scalaire

## Définitions équivalentes
### Par les normes
**u⃗ · v⃗ = (1/2)(||u⃗ + v⃗||² - ||u⃗||² - ||v⃗||²)**

### Par l'angle
**u⃗ · v⃗ = ||u⃗|| × ||v⃗|| × cos(u⃗, v⃗)**

### Par projection
**u⃗ · v⃗ = ||u⃗|| × proj_u⃗(v⃗)**

## Propriétés algébriques
- **Commutativité** : u⃗ · v⃗ = v⃗ · u⃗
- **Bilinéarité** : 
  - (λu⃗ + μv⃗) · w⃗ = λ(u⃗ · w⃗) + μ(v⃗ · w⃗)
  - u⃗ · (λv⃗ + μw⃗) = λ(u⃗ · v⃗) + μ(u⃗ · w⃗)
- **u⃗ · u⃗ = ||u⃗||²**

## Expression dans un repère orthonormé
Si u⃗(x, y) et v⃗(x', y') :
**u⃗ · v⃗ = xx' + yy'**

## Orthogonalité
**u⃗ ⊥ v⃗ ⟺ u⃗ · v⃗ = 0**

### Vecteurs orthonormés
- **||e⃗₁|| = ||e⃗₂|| = 1**
- **e⃗₁ · e⃗₂ = 0**`
      },
      {
        id: 2,
        title: "Applications du produit scalaire",
        content: `# Applications géométriques

## Calcul d'angles
### Angle entre deux vecteurs
**cos(u⃗, v⃗) = (u⃗ · v⃗)/(||u⃗|| × ||v⃗||)**

### Angle dans un triangle
Dans le triangle ABC :
**cos(Â) = (AB⃗ · AC⃗)/(||AB⃗|| × ||AC⃗||)**

## Théorème de la médiane
Dans un triangle ABC, si I est le milieu de [BC] :
**AB² + AC² = 2AI² + BC²/2**

## Théorème d'Al-Kashi
Dans un triangle ABC :
**BC² = AB² + AC² - 2·AB·AC·cos(Â)**

## Distance d'un point à une droite
Point M(x₀, y₀) et droite (d) : ax + by + c = 0
**d(M, (d)) = |ax₀ + by₀ + c|/√(a² + b²)**

## Équation d'un cercle
### Forme développée
**x² + y² - 2ax - 2by + c = 0**
avec centre Ω(a, b) et rayon r = √(a² + b² - c)

### Condition d'existence
**a² + b² - c > 0**`
      }
    ]
  },
  "114": {
    title: "Géométrie dans l'espace",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Axiomes et positions relatives",
        content: `# Géométrie dans l'espace

## Axiomes fondamentaux

### I. Axiomes de base
1. **Par 2 points distincts**, il passe une et une seule droite
2. **Par 3 points non alignés**, il passe un et un seul plan  
3. Si un plan contient deux points A et B, alors ce plan contient **tous les points de la droite (AB)**
4. Si deux plans distincts ont un point en commun, alors leur intersection est **une droite** passant par ce point
5. **Axiome d'Euclide** : par un point A donné et une droite D donnée, il ne passe qu'une seule droite parallèle à D

## II. Positions relatives de droites et plans

### 1) Positions relatives de deux droites
**Propriété** : Deux droites de l'espace sont soit **coplanaires** (dans un même plan) soit **non coplanaires**.

#### d₁ et d₂ sont coplanaires
- **Sécantes** : elles se coupent en un point
- **Parallèles strictement** : même direction, pas de point commun
- **Confondues** : mêmes points

#### d₁ et d₂ sont non coplanaires
- **Gauches** : ni sécantes ni parallèles`
      },
      {
        id: 2,
        title: "Positions relatives de plans et parallélisme",
        content: `# Positions relatives et parallélisme

### 2) Positions relatives de deux plans
**Propriété** : Deux plans de l'espace sont soit **sécants** soit **parallèles**.

#### P₁ et P₂ sont sécants
- Leur intersection est **une droite**

#### P₁ et P₂ sont parallèles  
- **Parallèles strictement** : aucun point commun
- **Confondus** : mêmes points

### 3) Positions relatives d'une droite et d'un plan
**Propriété** : Une droite et un plan de l'espace sont soit **sécants** soit **parallèles**.

#### d et P sont sécants
- **Un point d'intersection** unique

#### d et P sont parallèles
- **d incluse dans P** : tous les points de d sont dans P
- **d strictement parallèle à P** : aucun point commun

## III. Parallélisme

### 1) Parallélisme d'une droite avec un plan
**Propriété** : Une droite d est parallèle à un plan P s'il existe une droite d' de P parallèle à d.

### 2) Parallélisme de deux plans  
**Propriété** : Si un plan P contient deux droites sécantes d et d' parallèles à un plan P', alors **les plans P et P' sont parallèles**.`
      },
      {
        id: 3,
        title: "Orthogonalité dans l'espace",
        content: `# IV. Orthogonalité

### 1) Orthogonalité de deux droites
**Définition** : Deux droites de l'espace sont orthogonales lorsque leurs parallèles passant par un point quelconque sont **perpendiculaires**.

### 2) Orthogonalité d'une droite et d'un plan
**Propriété** : Une droite d est orthogonale à un plan P si elle est orthogonale à **deux droites sécantes de P**.

#### Conséquences importantes
- Si une droite d est orthogonale à un plan P, alors elle est orthogonale à **toutes les droites de P**
- Si une droite d est orthogonale à un plan P, alors elle est orthogonale à **toutes les droites** de P

### 3) Orthogonalité de deux plans
**Propriété** : Deux plans sont perpendiculaires lorsque l'un contient une droite **orthogonale de l'autre**.

## Applications pratiques
- **Constructions géométriques** dans l'espace
- **Calculs de volumes** et d'aires
- **Projections orthogonales**
- **Sections de solides**

## Méthodes de démonstration
1. **Utiliser les propriétés** de parallélisme et d'orthogonalité
2. **Se ramener à des configurations planes**
3. **Appliquer les théorèmes** classiques
4. **Utiliser la géométrie vectorielle** dans l'espace`
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
  "115": {
    title: "Statistiques",
    semester: 2,
    slides: [
      {
        id: 1,
        title: "Vocabulaire et représentations",
        content: `# Statistiques

## Vocabulaire de base
### Population et échantillon
- **Population** : ensemble étudié
- **Échantillon** : partie de la population
- **Individu** : élément de la population
- **Caractère** : propriété étudiée

### Types de caractères
#### Caractère qualitatif
- **Modalités** non numériques
- Ex : couleur des yeux, profession

#### Caractère quantitatif
##### Discret
- Valeurs isolées (entiers)
- Ex : nombre d'enfants, note sur 20

##### Continu  
- Valeurs dans un intervalle
- Ex : taille, poids, température

## Représentations graphiques
### Variables discrètes
- **Diagramme en bâtons**
- **Diagramme circulaire**

### Variables continues
- **Histogramme** (classes)
- **Polygone des effectifs**

## Tableaux statistiques
- **Effectifs** nᵢ
- **Fréquences** fᵢ = nᵢ/n
- **Effectifs cumulés croissants**
- **Fréquences cumulées croissantes**`
      },
      {
        id: 2,
        title: "Paramètres statistiques",
        content: `# Paramètres statistiques

## Paramètres de position
### Mode
**Valeur la plus fréquente** (effectif maximum)

### Médiane  
**Valeur qui partage la série ordonnée en deux parties égales**
- Si n impair : médiane = valeur centrale
- Si n pair : médiane = moyenne des 2 valeurs centrales

### Moyennes
#### Moyenne arithmétique
**x̄ = (1/n)Σnᵢxᵢ = Σfᵢxᵢ**

#### Moyenne pondérée
**x̄ = Σ(xᵢpᵢ)/Σpᵢ** avec pᵢ les poids

### Quartiles
- **Q₁** : 25% des valeurs sont inférieures
- **Q₃** : 75% des valeurs sont inférieures
- **Intervalle interquartile** : [Q₁, Q₃]

## Paramètres de dispersion
### Étendue
**e = xₘₐₓ - xₘᵢₙ**

### Variance  
**V(X) = σ² = (1/n)Σnᵢ(xᵢ - x̄)² = x̄² - (x̄)²**

### Écart-type
**σ = √V(X)**

## Interprétation
- **σ petit** : valeurs groupées autour de x̄
- **σ grand** : valeurs dispersées`
      }
    ]
  }
};

// Exercise data for math lessons
export const mathExercisesData: { [key: string]: { title: string; exercises: any[] } } = {
  "101": {
    title: "Exercices - Les ensembles de nombres N, Z, Q, D et R",
    exercises: [
      {
        id: 1,
        title: "Classification des nombres",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: `Classer les nombres suivants selon les ensembles N, Z, Q, D et R :
        a) 5
        b) -3
        c) 2/3
        d) 0,75
        e) √2
        f) π`,
        solution: `Classification :
        a) 5 ∈ N ⊂ Z ⊂ D ⊂ Q ⊂ R
        b) -3 ∈ Z ⊂ Q ⊂ R mais -3 ∉ N
        c) 2/3 ∈ Q ⊂ R mais 2/3 ∉ D (car 2/3 = 0,666...)
        d) 0,75 ∈ D ⊂ Q ⊂ R (car 0,75 = 75/100)
        e) √2 ∈ R mais √2 ∉ Q (nombre irrationnel)
        f) π ∈ R mais π ∉ Q (nombre irrationnel)`
      }
    ]
  },
  "102": {
    title: "Exercices - Arithmétique dans N", 
    exercises: [
      {
        id: 1,
        title: "Division euclidienne et PGCD",
        difficulty: "Moyen",
        duration: "15 min",
        points: 12,
        question: `1) Effectuer la division euclidienne de 127 par 15
        2) Calculer PGCD(127, 15) par l'algorithme d'Euclide
        3) En déduire PPCM(127, 15)`,
        solution: `1) Division euclidienne :
        127 = 15 × 8 + 7
        Donc q = 8 et r = 7
        
        2) PGCD par algorithme d'Euclide :
        127 = 15 × 8 + 7
        15 = 7 × 2 + 1
        7 = 1 × 7 + 0
        Donc PGCD(127, 15) = 1
        
        3) PPCM calculation :
        PGCD(127, 15) × PPCM(127, 15) = 127 × 15
        1 × PPCM(127, 15) = 1905
        Donc PPCM(127, 15) = 1905`
      }
    ]
  },
  "114": {
    title: "Exercices - Géométrie dans l'espace",
    exercises: [
      {
        id: 1,
        title: "Positions relatives dans l'espace",
        difficulty: "Moyen", 
        duration: "20 min",
        points: 15,
        question: `ABCDEFGH est un cube. Déterminer les positions relatives :
        1) Des droites (EG) et (FG)
        2) Des droites (AD) et (FG)  
        3) Des plans (BCG) et (BCE)
        4) De la droite (GI) et du plan (ABC) où I est le centre de EFG`,
        solution: `Analyse du cube ABCDEFGH :

        1) Droites (EG) et (FG) :
        - E, F, G sont trois sommets du cube
        - (EG) et (FG) se coupent en G
        - Position : SÉCANTES en G

        2) Droites (AD) et (FG) :
        - (AD) appartient à la face ABCD
        - (FG) appartient à la face EFGH  
        - Ces droites ne sont ni parallèles ni sécantes
        - Position : GAUCHES

        3) Plans (BCG) et (BCE) :
        - Les deux plans passent par l'arête [BC]
        - Ils se coupent suivant la droite (BC)
        - Position : SÉCANTS selon (BC)

        4) Droite (GI) et plan (ABC) :
        - I est le centre de la face EFG, donc au-dessus du plan (ABC)
        - (GI) n'a aucun point commun avec le plan (ABC)
        - Position : STRICTEMENT PARALLÈLES`
      }
    ]
  }
};
