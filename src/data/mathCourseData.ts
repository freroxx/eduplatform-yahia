// Math course data with lessons and exercises - Updated structure

export const mathLessonsData = {
  "1": {
    title: "Les ensembles de nombres ℕ, ℤ, ℚ, 𝔻 et ℝ",
    semester: 1,
    slides: [
      {
        title: "Introduction aux ensembles de nombres",
        content: `📚 Les Ensembles de Nombres

Un ensemble est une collection d'objets appelés éléments. En mathématiques, nous travaillons avec plusieurs ensembles de nombres fondamentaux.

🔢 **Ensemble ℕ (Naturels)** : {0, 1, 2, 3, ...}
• Les nombres pour compter
• Commencent par zéro
• Utilisés pour dénombrer
• Exemples : 0, 1, 5, 42, 100

🔢 **Ensemble ℤ (Entiers relatifs)** : {..., -2, -1, 0, 1, 2, ...}
• Incluent les nombres négatifs
• Extension de ℕ
• Permettent la soustraction
• Exemples : -5, -1, 0, 3, 7

🔢 **Ensemble ℚ (Rationnels)** : {a/b | a,b ∈ ℤ, b ≠ 0}
• Fractions et nombres décimaux
• Peuvent s'écrire sous forme p/q
• Denses dans ℝ
• Exemples : 1/2, -3/4, 0.25, 2.333...

🔢 **Ensemble 𝔻 (Décimaux)** : Nombres avec un nombre fini de décimales
• Sous-ensemble de ℚ
• Représentation décimale finie
• Exemples : 0.5, -1.25, 3.14

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

Cette relation signifie que :
• Tout nombre naturel est un entier relatif
• Tout entier relatif est un nombre décimal
• Tout nombre décimal est un rationnel
• Tout rationnel est un réel

**Propriétés des opérations dans ℝ :**

**Commutativité :**
• Addition : a + b = b + a
• Multiplication : a × b = b × a

**Associativité :**
• Addition : (a + b) + c = a + (b + c)
• Multiplication : (a × b) × c = a × (b × c)

**Distributivité :**
• a × (b + c) = a × b + a × c

**Éléments neutres :**
• Pour l'addition : 0 (zéro)
• Pour la multiplication : 1 (un)

**Inverses :**
• Opposé pour l'addition : a + (-a) = 0
• Inverse pour la multiplication : a × (1/a) = 1 (si a ≠ 0)

**Exemples de classification :**
• 5 ∈ ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ
• -3 ∈ ℤ ⊂ ℚ ⊂ ℝ mais -3 ∉ ℕ
• 0.25 = 1/4 ∈ 𝔻 ⊂ ℚ ⊂ ℝ
• π ∈ ℝ \\ ℚ (irrationnel)
• √2 ∈ ℝ \\ ℚ (irrationnel)`,
        type: "definition" as const
      },
      {
        title: "Exercices d'application",
        content: `🎯 Exercices pratiques

**Exercice 1 :** Classer les nombres suivants
Classifier dans les bons ensembles :
a) 7    b) -4    c) 2/3    d) π    e) 0.125    f) √9

**Solution :**
a) 7 ∈ ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ
b) -4 ∈ ℤ ⊂ ℚ ⊂ ℝ
c) 2/3 ∈ ℚ ⊂ ℝ
d) π ∈ ℝ \\ ℚ (irrationnel)
e) 0.125 = 125/1000 = 1/8 ∈ 𝔻 ⊂ ℚ ⊂ ℝ
f) √9 = 3 ∈ ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ

**Exercice 2 :** Vrai ou Faux ?
a) Tout entier naturel est rationnel : VRAI
b) Tout rationnel est décimal : FAUX (ex: 1/3)
c) √4 est irrationnel : FAUX (√4 = 2)
d) π est rationnel : FAUX`,
        type: "exercise" as const
      }
    ],
    cours: `# Les ensembles de nombres ℕ, ℤ, ℚ, 𝔻 et ℝ

## Introduction

En mathématiques, nous travaillons avec différents ensembles de nombres. Chaque ensemble a ses propriétés particulières et ses domaines d'application.

## I. L'ensemble ℕ des nombres naturels

**Définition :** ℕ = {0, 1, 2, 3, 4, ...}

Les nombres naturels sont les premiers nombres que nous apprenons. Ils servent à compter et à ordonner.

**Propriétés :**
- Ensemble infini
- Possède un plus petit élément : 0
- Stable pour l'addition et la multiplication
- Non stable pour la soustraction (3 - 5 ∉ ℕ)

## II. L'ensemble ℤ des entiers relatifs

**Définition :** ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}

Les entiers relatifs étendent les naturels en ajoutant les nombres négatifs.

**Propriétés :**
- Ensemble infini dans les deux directions
- Stable pour l'addition, la soustraction et la multiplication
- Non stable pour la division (3 ÷ 2 ∉ ℤ)

## III. L'ensemble ℚ des nombres rationnels

**Définition :** ℚ = {a/b | a ∈ ℤ, b ∈ ℤ*, b ≠ 0}

**Propriétés :**
- Stable pour les quatre opérations (sauf division par 0)
- Dense dans ℝ
- Peut avoir une écriture décimale illimitée périodique

**Exemples :**
- 1/2 = 0,5
- 1/3 = 0,333...
- 22/7 ≈ 3,142857142857...

## IV. L'ensemble 𝔻 des nombres décimaux

**Définition :** 𝔻 = {nombres rationnels ayant une écriture décimale finie}

**Exemples :**
- 0,5 = 1/2
- 0,25 = 1/4
- -1,125 = -9/8

## V. L'ensemble ℝ des nombres réels

**Définition :** ℝ contient tous les nombres de la droite numérique.

**Inclut :**
- Tous les rationnels
- Les irrationnels : π, e, √2, √3, ...

## VI. Relations d'inclusion

ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ

Cette chaîne d'inclusion montre que chaque ensemble est contenu dans le suivant.

## Exercices corrigés

### Exercice 1
Déterminer à quels ensembles appartiennent les nombres suivants :
a) -7    b) 0    c) 3,14    d) π    e) √16

**Solutions :**
a) -7 ∈ ℤ ⊂ ℚ ⊂ ℝ
b) 0 ∈ ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ
c) 3,14 ∈ 𝔻 ⊂ ℚ ⊂ ℝ
d) π ∈ ℝ \\ ℚ (irrationnel)
e) √16 = 4 ∈ ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ

### Exercice 2
Compléter avec ∈, ∉, ⊂, ⊄ :
a) 5 ... ℕ
b) -3 ... ℕ  
c) ℤ ... ℝ
d) ℝ ... ℚ

**Solutions :**
a) 5 ∈ ℕ
b) -3 ∉ ℕ
c) ℤ ⊂ ℝ
d) ℝ ⊄ ℚ (car ℝ contient des irrationnels)`,
    exercices: [
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
        title: "Relations d'inclusion",
        difficulty: "Moyen",
        duration: "15 min",
        points: 10,
        question: "Compléter avec ∈, ∉, ⊂, ou ⊄ :\na) 7 ... ℕ\nb) -3 ... ℕ\nc) 𝔻 ... ℚ\nd) ℝ ... ℚ\ne) {1, 2, 3} ... ℕ",
        solution: "a) 7 ∈ ℕ (7 appartient aux naturels)\nb) -3 ∉ ℕ (-3 n'appartient pas aux naturels)\nc) 𝔻 ⊂ ℚ (les décimaux sont inclus dans les rationnels)\nd) ℝ ⊄ ℚ (les réels ne sont pas inclus dans les rationnels car il y a des irrationnels)\ne) {1, 2, 3} ⊂ ℕ (l'ensemble {1,2,3} est inclus dans ℕ)"
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
        title: "Divisibilité dans ℕ",
        content: `🔢 Divisibilité dans ℕ

**Définition :**
Soit a et b deux entiers naturels avec b ≠ 0.
On dit que b divise a (noté b|a) s'il existe un entier naturel k tel que a = b × k.

**Vocabulaire :**
• b est un diviseur de a
• a est un multiple de b
• a est divisible par b

**Exemples :**
• 3|12 car 12 = 3 × 4
• 7|21 car 21 = 7 × 3
• 5 ∤ 13 (5 ne divise pas 13)

**Propriétés de la divisibilité :**
• Si a|b et b|c, alors a|c (transitivité)
• Si a|b et a|c, alors a|(b + c) et a|(b - c) si b ≥ c
• Si a|b, alors a|bc pour tout entier c
• Si a|b et b|a avec a,b > 0, alors a = b

**Critères de divisibilité :**
• Divisibilité par 2 : le nombre se termine par 0, 2, 4, 6, 8
• Divisibilité par 3 : la somme des chiffres est divisible par 3
• Divisibilité par 5 : le nombre se termine par 0 ou 5
• Divisibilité par 9 : la somme des chiffres est divisible par 9`,
        type: "intro" as const
      },
      {
        title: "Nombres premiers",
        content: `⭐ Les nombres premiers

**Définition :**
Un nombre premier est un entier naturel supérieur à 1 qui n'admet exactement que deux diviseurs positifs : 1 et lui-même.

**Les premiers nombres premiers :**
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47...

**Remarques importantes :**
• 1 n'est pas premier (il n'a qu'un seul diviseur)
• 2 est le seul nombre premier pair
• Tout nombre entier > 1 est soit premier, soit composé

**Théorème fondamental de l'arithmétique :**
Tout entier naturel supérieur à 1 se décompose de manière unique (à l'ordre près) en produit de facteurs premiers.

**Exemples de décomposition :**
• 12 = 2² × 3
• 18 = 2 × 3²
• 30 = 2 × 3 × 5
• 100 = 2² × 5²

**Méthode de décomposition :**
On divise successivement par les nombres premiers dans l'ordre croissant.`,
        type: "definition" as const
      }
    ],
    cours: `# Arithmétique dans ℕ

## I. Divisibilité

### Définition
Soient a et b deux entiers naturels avec b ≠ 0.
On dit que **b divise a** (noté b|a) s'il existe un entier naturel k tel que a = b × k.

### Vocabulaire
- b est un **diviseur** de a
- a est un **multiple** de b
- a est **divisible** par b

### Propriétés
1. **Transitivité** : Si a|b et b|c, alors a|c
2. **Linéarité** : Si a|b et a|c, alors a|(b+c) et a|(b-c)
3. **Produit** : Si a|b, alors a|(bc) pour tout entier c

### Critères de divisibilité
- **Par 2** : le nombre est pair
- **Par 3** : la somme des chiffres est divisible par 3
- **Par 4** : les deux derniers chiffres forment un nombre divisible par 4
- **Par 5** : le nombre se termine par 0 ou 5
- **Par 9** : la somme des chiffres est divisible par 9
- **Par 11** : la différence alternée des chiffres est divisible par 11

## II. Division euclidienne

### Théorème de la division euclidienne
Pour tous entiers naturels a et b avec b ≠ 0, il existe un unique couple (q, r) d'entiers naturels tel que :
**a = bq + r** avec **0 ≤ r < b**

- a : dividende
- b : diviseur  
- q : quotient
- r : reste

### Algorithme d'Euclide (PGCD)
Pour calculer PGCD(a,b) :
1. On effectue la division euclidienne de a par b : a = bq + r
2. Si r = 0, alors PGCD(a,b) = b
3. Sinon, PGCD(a,b) = PGCD(b,r)
4. On répète jusqu'à obtenir un reste nul

## III. Nombres premiers

### Définition
Un nombre premier est un entier naturel > 1 qui admet exactement deux diviseurs positifs : 1 et lui-même.

### Liste des premiers nombres premiers
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97...

### Théorème fondamental de l'arithmétique
Tout entier n > 1 s'écrit de manière unique comme produit de nombres premiers :
n = p₁^α₁ × p₂^α₂ × ... × pₖ^αₖ

## Exercices corrigés

### Exercice 1 : Divisibilité
Vérifier si 156 est divisible par 3, 4, 6.

**Solution :**
- **Par 3 :** 1+5+6 = 12, et 12 est divisible par 3 → OUI
- **Par 4 :** 56 est divisible par 4 (56 = 4×14) → OUI  
- **Par 6 :** 156 est divisible par 2 ET par 3 → OUI

### Exercice 2 : PGCD
Calculer PGCD(252, 105) par l'algorithme d'Euclide.

**Solution :**
252 = 105 × 2 + 42
105 = 42 × 2 + 21  
42 = 21 × 2 + 0

Donc PGCD(252, 105) = 21

### Exercice 3 : Décomposition en facteurs premiers
Décomposer 360 en facteurs premiers.

**Solution :**
360 = 2³ × 3² × 5
Car : 360 ÷ 2 = 180 ÷ 2 = 90 ÷ 2 = 45 ÷ 3 = 15 ÷ 3 = 5 ÷ 5 = 1`,
    exercices: [
      {
        id: 1,
        title: "Critères de divisibilité",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: "Déterminer si les nombres suivants sont divisibles par 2, 3, 5, 9 :\na) 234\nb) 315\nc) 1260",
        solution: "a) 234 :\n• Par 2 : OUI (se termine par 4)\n• Par 3 : OUI (2+3+4=9, divisible par 3)\n• Par 5 : NON (ne se termine pas par 0 ou 5)\n• Par 9 : OUI (2+3+4=9, divisible par 9)\n\nb) 315 :\n• Par 2 : NON (se termine par 5)\n• Par 3 : OUI (3+1+5=9, divisible par 3)\n• Par 5 : OUI (se termine par 5)\n• Par 9 : OUI (3+1+5=9, divisible par 9)\n\nc) 1260 :\n• Par 2 : OUI (se termine par 0)\n• Par 3 : OUI (1+2+6+0=9, divisible par 3)\n• Par 5 : OUI (se termine par 0)\n• Par 9 : OUI (1+2+6+0=9, divisible par 9)"
      },
      {
        id: 2,
        title: "PGCD par l'algorithme d'Euclide",
        difficulty: "Moyen",
        duration: "15 min",
        points: 10,
        question: "Calculer PGCD(84, 36) en utilisant l'algorithme d'Euclide.",
        solution: "Algorithme d'Euclide :\n84 = 36 × 2 + 12\n36 = 12 × 3 + 0\n\nLe reste est 0, donc PGCD(84, 36) = 12\n\nVérification :\n84 = 12 × 7\n36 = 12 × 3\nDonc 12 divise bien 84 et 36."
      },
      {
        id: 3,
        title: "Décomposition en facteurs premiers",
        difficulty: "Moyen",
        duration: "20 min",
        points: 12,
        question: "Décomposer en facteurs premiers :\na) 72\nb) 150\nc) 420",
        solution: "a) 72 :\n72 ÷ 2 = 36\n36 ÷ 2 = 18\n18 ÷ 2 = 9\n9 ÷ 3 = 3\n3 ÷ 3 = 1\nDonc 72 = 2³ × 3²\n\nb) 150 :\n150 ÷ 2 = 75\n75 ÷ 3 = 25\n25 ÷ 5 = 5\n5 ÷ 5 = 1\nDonc 150 = 2 × 3 × 5²\n\nc) 420 :\n420 ÷ 2 = 210\n210 ÷ 2 = 105\n105 ÷ 3 = 35\n35 ÷ 5 = 7\n7 ÷ 7 = 1\nDonc 420 = 2² × 3 × 5 × 7"
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
    ],
    exercices: [
      {
        id: 1,
        title: "Fonctions de référence",
        difficulty: "Moyen",
        duration: "20 min",
        points: 12,
        question: "Étudier les variations de f(x) = 2x² - 3 sur ℝ.",
        solution: "f(x) = 2x² - 3 est une fonction parabole avec a = 2 > 0\nSommet en (0, -3)\nf est décroissante sur ]-∞, 0] et croissante sur [0, +∞[\nMinimum : f(0) = -3"
      },
      {
        id: 2,
        title: "Domaine de définition",
        difficulty: "Moyen",
        duration: "15 min",
        points: 10,
        question: "Déterminer le domaine de définition de g(x) = 1/(x+2) + √(x-1)",
        solution: "Pour que g(x) soit définie, il faut :\n• x + 2 ≠ 0 donc x ≠ -2\n• x - 1 ≥ 0 donc x ≥ 1\n\nComme x ≥ 1, la condition x ≠ -2 est automatiquement vérifiée.\nDonc Dg = [1, +∞["
      }
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
    cours: `# Statistiques

## I. Vocabulaire statistique

### Population et échantillon
- **Population** : ensemble sur lequel porte l'étude statistique
- **Échantillon** : sous-ensemble de la population
- **Individu** : élément de la population
- **Caractère** : propriété étudiée sur la population

### Types de caractères
- **Quantitatif** : s'exprime par un nombre
  - Discret : prend des valeurs isolées
  - Continu : prend toutes les valeurs d'un intervalle
- **Qualitatif** : ne s'exprime pas par un nombre

## II. Représentation des données

### Tableaux statistiques
- **Effectif** nᵢ : nombre d'individus ayant la modalité xᵢ
- **Effectif total** : N = Σnᵢ
- **Fréquence** : fᵢ = nᵢ/N

### Représentations graphiques
- **Diagramme en bâtons** (caractère discret)
- **Histogramme** (caractère continu)
- **Diagramme circulaire**
- **Diagramme en boîte** (boîte à moustaches)

## III. Paramètres de position

### 1. Mode
Valeur du caractère ayant le plus grand effectif.

### 2. Moyenne arithmétique
x̄ = (n₁x₁ + n₂x₂ + ... + nₖxₖ)/(n₁ + n₂ + ... + nₖ) = Σnᵢxᵢ/Σnᵢ

### 3. Médiane
Valeur qui partage la série ordonnée en deux parties de même effectif.
- Si N est impair : médiane = valeur centrale
- Si N est pair : médiane = moyenne des deux valeurs centrales

### 4. Quartiles
- **Q₁** : 25% des valeurs sont inférieures à Q₁
- **Q₃** : 75% des valeurs sont inférieures à Q₃

## IV. Paramètres de dispersion

### 1. Étendue
e = xₘₐₓ - xₘᵢₙ

### 2. Écart interquartile
EIQ = Q₃ - Q₁

### 3. Variance
V = Σnᵢ(xᵢ - x̄)²/Σnᵢ

### 4. Écart-type
σ = √V

## V. Utilisation de la calculatrice

### Méthode
1. Saisir les valeurs du caractère dans L1
2. Saisir les effectifs dans L2
3. Utiliser STAT → CALC → 1-Var Stats L1, L2

### Résultats affichés
- x̄ : moyenne
- Σx : somme des valeurs
- Σx² : somme des carrés
- Sx : écart-type de l'échantillon
- σx : écart-type de la population
- n : effectif total

## Exercices corrigés

### Exercice 1 : Calcul des paramètres
Soit la série : 12, 15, 12, 18, 15, 20, 12, 15, 18, 12

**Solution :**
Tableau des effectifs :
| Valeur | 12 | 15 | 18 | 20 |
|--------|----|----|----|----|
| Effectif| 4  | 3  | 2  | 1  |

- **Effectif total** : N = 10
- **Mode** : 12 (effectif le plus grand)
- **Moyenne** : x̄ = (4×12 + 3×15 + 2×18 + 1×20)/10 = 150/10 = 15
- **Médiane** : série ordonnée : 12,12,12,12,15,15,15,18,18,20
  Médiane = (15+15)/2 = 15
- **Étendue** : 20 - 12 = 8

### Exercice 2 : Variance et écart-type
Calculer la variance et l'écart-type de la série précédente.

**Solution :**
V = [4×(12-15)² + 3×(15-15)² + 2×(18-15)² + 1×(20-15)²]/10
V = [4×9 + 3×0 + 2×9 + 1×25]/10
V = [36 + 0 + 18 + 25]/10 = 79/10 = 7,9

σ = √7,9 ≈ 2,81`,
    images: [
      "/lovable-uploads/9bb9f036-2eb5-4015-9659-dcf43d08d732.png",
      "/lovable-uploads/302a4c2c-e626-457b-a4f7-beabe01da93f.png",
      "/lovable-uploads/a14e0211-ab56-4f88-a110-36052b86054e.png",
      "/lovable-uploads/d6037b0d-8716-4959-ae79-059ac75fe8ae.png",
      "/lovable-uploads/4d027159-0943-4265-a547-9837e61b3cb0.png"
    ],
    exercices: [
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
        title: "Variance et écart-type",
        difficulty: "Difficile",
        duration: "25 min",
        points: 18,
        question: "Calculer la variance et l'écart-type de la série :\n5, 7, 5, 9, 7, 11, 5, 7, 9, 5",
        solution: "Tableau des effectifs :\nValeur xi : 5  7  9  11\nEffectif ni: 4  3  2  1\n\n1) Moyenne :\nx̄ = (5×4 + 7×3 + 9×2 + 11×1)/10 = (20+21+18+11)/10 = 70/10 = 7\n\n2) Variance :\nV = Σni(xi - x̄)²/Σni\nV = [4×(5-7)² + 3×(7-7)² + 2×(9-7)² + 1×(11-7)²]/10\nV = [4×4 + 3×0 + 2×4 + 1×16]/10\nV = [16 + 0 + 8 + 16]/10 = 40/10 = 4\n\n3) Écart-type :\nσ = √V = √4 = 2"
      }
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
    exercises: mathLessonsData["1"].exercices
  },
  "2": {
    title: "Exercices d'arithmétique dans ℕ", 
    exercises: mathLessonsData["2"].exercices
  },
  "11": {
    title: "Exercices sur les fonctions",
    exercises: mathLessonsData["11"].exercices
  },
  "15": {
    title: "Exercices de Statistiques",
    exercises: mathLessonsData["15"].exercices
  }
};
