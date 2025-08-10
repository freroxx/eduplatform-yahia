export const mathLessonsData = {
  "1": {
    title: "Les ensembles de nombres ℕ, ℤ, ℚ, 𝔻 et ℝ",
    semester: 1,
    slides: [
      {
        title: "🔢 Introduction aux ensembles de nombres",
        content: `# 📚 Les Ensembles de Nombres

Un **ensemble** est une collection d'objets appelés **éléments**. En mathématiques, nous travaillons avec plusieurs ensembles de nombres fondamentaux.

## 🔢 **Ensemble ℕ (Naturels)**
**ℕ = {0, 1, 2, 3, ...}**

• Les nombres pour **compter**
• Commencent par **zéro**
• Utilisés pour **dénombrer** les objets
• **Exemples** : 0, 1, 5, 42, 100

## 🔢 **Ensemble ℤ (Entiers relatifs)**
**ℤ = {..., -2, -1, 0, 1, 2, ...}**

• Incluent les **nombres négatifs**
• **Extension** de ℕ
• Permettent la **soustraction**
• **Exemples** : -5, -1, 0, 3, 7

## 🔢 **Ensemble ℚ (Rationnels)**
**ℚ = {a/b | a,b ∈ ℤ, b ≠ 0}**

• **Fractions** et nombres décimaux
• Peuvent s'écrire sous forme **p/q**
• **Denses** dans ℝ
• **Exemples** : 1/2, -3/4, 0.25, 2.333...

## 🔢 **Ensemble 𝔻 (Décimaux)**
Nombres avec un nombre **fini** de décimales

• **Sous-ensemble** de ℚ
• Représentation décimale **finie**
• **Exemples** : 0.5, -1.25, 3.14

## 🔢 **Ensemble ℝ (Réels)**
**Tous** les nombres sur la droite numérique

• Incluent les **irrationnels** (π, √2, e)
• **Complètent** la droite numérique
• Base de l'**analyse mathématique**`,
        type: "intro" as const
      },
      {
        title: "⚡ Relations d'inclusion et propriétés",
        content: `# ⚡ Relations entre les ensembles

## **Relation d'inclusion :**
### ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ

Cette relation signifie que :
• **Tout nombre naturel** est un entier relatif
• **Tout entier relatif** est un nombre décimal  
• **Tout nombre décimal** est un rationnel
• **Tout rationnel** est un réel

## **Propriétés des opérations dans ℝ :**

### **Commutativité :**
• **Addition** : a + b = b + a
• **Multiplication** : a × b = b × a

### **Associativité :**
• **Addition** : (a + b) + c = a + (b + c)
• **Multiplication** : (a × b) × c = a × (b × c)

### **Distributivité :**
• a × (b + c) = a × b + a × c

### **Éléments neutres :**
• Pour l'**addition** : **0** (zéro)
• Pour la **multiplication** : **1** (un)

### **Inverses :**
• **Opposé** pour l'addition : a + (-a) = 0
• **Inverse** pour la multiplication : a × (1/a) = 1 (si a ≠ 0)

## **Exemples de classification :**
• **5** ∈ ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ
• **-3** ∈ ℤ ⊂ ℚ ⊂ ℝ mais -3 ∉ ℕ
• **0.25 = 1/4** ∈ 𝔻 ⊂ ℚ ⊂ ℝ
• **π** ∈ ℝ \ ℚ (irrationnel)
• **√2** ∈ ℝ \ ℚ (irrationnel)`,
        type: "definition" as const
      },
      {
        title: "🎯 Exercices d'application",
        content: `# 🎯 Exercices pratiques

## **Exercice 1 :** Classer les nombres suivants
**Classifier dans les bons ensembles :**
a) **7**    b) **-4**    c) **2/3**    d) **π**    e) **0.125**    f) **√9**

### **Solution :**
a) **7** ∈ ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ
b) **-4** ∈ ℤ ⊂ ℚ ⊂ ℝ
c) **2/3** ∈ ℚ ⊂ ℝ
d) **π** ∈ ℝ \ ℚ (irrationnel)
e) **0.125 = 125/1000 = 1/8** ∈ 𝔻 ⊂ ℚ ⊂ ℝ
f) **√9 = 3** ∈ ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ

## **Exercice 2 :** Vrai ou Faux ?
a) **Tout entier naturel est rationnel** : ✅ **VRAI**
b) **Tout rationnel est décimal** : ❌ **FAUX** (ex: 1/3)
c) **√4 est irrationnel** : ❌ **FAUX** (√4 = 2)
d) **π est rationnel** : ❌ **FAUX**

## **Points clés à retenir :**
🎯 Les ensembles s'**emboîtent** les uns dans les autres
🎯 Chaque ensemble a ses **propriétés spécifiques**
🎯 Les **irrationnels** ne peuvent pas s'écrire sous forme de fraction`,
        type: "exercise" as const
      }
    ],
    cours: `# Les ensembles de nombres ℕ, ℤ, ℚ, 𝔻 et ℝ

## Introduction

En mathématiques, nous travaillons avec différents **ensembles de nombres**. Chaque ensemble a ses **propriétés particulières** et ses domaines d'application.

## I. L'ensemble ℕ des nombres naturels

**Définition :** ℕ = {0, 1, 2, 3, 4, ...}

Les **nombres naturels** sont les premiers nombres que nous apprenons. Ils servent à **compter** et à **ordonner**.

**Propriétés :**
- Ensemble **infini**
- Possède un **plus petit élément** : 0
- **Stable** pour l'addition et la multiplication
- **Non stable** pour la soustraction (3 - 5 ∉ ℕ)

## II. L'ensemble ℤ des entiers relatifs

**Définition :** ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}

Les **entiers relatifs** étendent les naturels en ajoutant les **nombres négatifs**.

**Propriétés :**
- Ensemble **infini** dans les deux directions
- **Stable** pour l'addition, la soustraction et la multiplication
- **Non stable** pour la division (3 ÷ 2 ∉ ℤ)

## III. L'ensemble ℚ des nombres rationnels

**Définition :** ℚ = {a/b | a ∈ ℤ, b ∈ ℤ*, b ≠ 0}

**Propriétés :**
- **Stable** pour les quatre opérations (sauf division par 0)
- **Dense** dans ℝ
- Peut avoir une écriture décimale **illimitée périodique**

**Exemples :**
- 1/2 = 0,5
- 1/3 = 0,333...
- 22/7 ≈ 3,142857142857...

## IV. L'ensemble 𝔻 des nombres décimaux

**Définition :** 𝔻 = {nombres rationnels ayant une écriture décimale **finie**}

**Exemples :**
- 0,5 = 1/2
- 0,25 = 1/4
- -1,125 = -9/8

## V. L'ensemble ℝ des nombres réels

**Définition :** ℝ contient **tous les nombres** de la droite numérique.

**Inclut :**
- Tous les **rationnels**
- Les **irrationnels** : π, e, √2, √3, ...

## VI. Relations d'inclusion

**ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ**

Cette chaîne d'inclusion montre que chaque ensemble est **contenu** dans le suivant.

## Exercices corrigés

### Exercice 1
Déterminer à quels ensembles appartiennent les nombres suivants :
a) -7    b) 0    c) 3,14    d) π    e) √16

**Solutions :**
a) **-7** ∈ ℤ ⊂ ℚ ⊂ ℝ
b) **0** ∈ ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ
c) **3,14** ∈ 𝔻 ⊂ ℚ ⊂ ℝ
d) **π** ∈ ℝ \ ℚ (irrationnel)
e) **√16 = 4** ∈ ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ

### Exercice 2
Compléter avec ∈, ∉, ⊂, ⊄ :
a) 5 ... ℕ
b) -3 ... ℕ  
c) ℤ ... ℝ
d) ℝ ... ℚ

**Solutions :**
a) **5 ∈ ℕ**
b) **-3 ∉ ℕ**
c) **ℤ ⊂ ℝ**
d) **ℝ ⊄ ℚ** (car ℝ contient des irrationnels)`,
    exercices: [
      {
        id: 1,
        title: "Classification des nombres",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: "**Classifier les nombres suivants dans les ensembles appropriés :**\na) **-5**  b) **3/4**  c) **π**  d) **√16**  e) **0**  f) **-2,5**",
        solution: "**Solutions détaillées :**\n\na) **-5** ∈ ℤ (entier relatif négatif)\nb) **3/4** ∈ ℚ (nombre rationnel, fraction)\nc) **π** ∈ ℝ\\ℚ (nombre irrationnel)\nd) **√16 = 4** ∈ ℕ (nombre naturel)\ne) **0** ∈ ℕ (nombre naturel)\nf) **-2,5 = -5/2** ∈ ℚ (nombre rationnel négatif)"
      },
      {
        id: 2,
        title: "Relations d'inclusion",
        difficulty: "Moyen",
        duration: "15 min",
        points: 10,
        question: "**Compléter avec ∈, ∉, ⊂, ou ⊄ :**\na) **7** ... ℕ\nb) **-3** ... ℕ\nc) **𝔻** ... ℚ\nd) **ℝ** ... ℚ\ne) **{1, 2, 3}** ... ℕ",
        solution: "**Solutions détaillées :**\n\na) **7 ∈ ℕ** (7 appartient aux naturels)\nb) **-3 ∉ ℕ** (-3 n'appartient pas aux naturels)\nc) **𝔻 ⊂ ℚ** (les décimaux sont inclus dans les rationnels)\nd) **ℝ ⊄ ℚ** (les réels ne sont pas inclus dans les rationnels car il y a des irrationnels)\ne) **{1, 2, 3} ⊂ ℕ** (l'ensemble {1,2,3} est inclus dans ℕ)"
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
        title: "🔢 Divisibilité dans ℕ",
        content: `# 🔢 Divisibilité dans ℕ

## **Définition :**
Soit **a** et **b** deux entiers naturels avec **b ≠ 0**.
On dit que **b divise a** (noté **b|a**) s'il existe un entier naturel **k** tel que **a = b × k**.

## **Vocabulaire :**
• **b** est un **diviseur** de **a**
• **a** est un **multiple** de **b**  
• **a** est **divisible** par **b**

## **Exemples :**
• **3|12** car **12 = 3 × 4**
• **7|21** car **21 = 7 × 3**
• **5 ∤ 13** (5 ne divise pas 13)

## **Propriétés de la divisibilité :**
• Si **a|b** et **b|c**, alors **a|c** (**transitivité**)
• Si **a|b** et **a|c**, alors **a|(b + c)** et **a|(b - c)** si b ≥ c
• Si **a|b**, alors **a|bc** pour tout entier **c**
• Si **a|b** et **b|a** avec a,b > 0, alors **a = b**

## **Critères de divisibilité :**
• **Divisibilité par 2** : le nombre se termine par **0, 2, 4, 6, 8**
• **Divisibilité par 3** : la **somme des chiffres** est divisible par **3**
• **Divisibilité par 5** : le nombre se termine par **0 ou 5**
• **Divisibilité par 9** : la **somme des chiffres** est divisible par **9**`,
        type: "intro" as const
      },
      {
        title: "⭐ Les nombres premiers",
        content: `# ⭐ Les nombres premiers

## **Définition :**
Un **nombre premier** est un entier naturel **supérieur à 1** qui n'admet exactement **deux diviseurs positifs** : **1** et **lui-même**.

## **Les premiers nombres premiers :**
**2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47...**

## **Remarques importantes :**
• **1** n'est **pas premier** (il n'a qu'un seul diviseur)
• **2** est le **seul nombre premier pair**
• Tout nombre entier > 1 est soit **premier**, soit **composé**

## **Théorème fondamental de l'arithmétique :**
Tout entier naturel **supérieur à 1** se décompose de manière **unique** (à l'ordre près) en **produit de facteurs premiers**.

## **Exemples de décomposition :**
• **12 = 2² × 3**
• **18 = 2 × 3²**
• **30 = 2 × 3 × 5**
• **100 = 2² × 5²**

## **Méthode de décomposition :**
On divise **successivement** par les nombres premiers dans l'**ordre croissant**.

## **Application pratique :**
La décomposition en facteurs premiers permet de :
• Calculer le **PGCD** et **PPCM**
• Simplifier les **fractions**
• Résoudre des **équations diophantiennes**`,
        type: "definition" as const
      }
    ],
    cours: `# Arithmétique dans ℕ

## I. Divisibilité

### Définition
Soient **a** et **b** deux entiers naturels avec **b ≠ 0**.
On dit que **b divise a** (noté **b|a**) s'il existe un entier naturel **k** tel que **a = b × k**.

### Vocabulaire
- **b** est un **diviseur** de **a**
- **a** est un **multiple** de **b**
- **a** est **divisible** par **b**

### Propriétés
1. **Transitivité** : Si a|b et b|c, alors a|c
2. **Linéarité** : Si a|b et a|c, alors a|(b+c) et a|(b-c)
3. **Produit** : Si a|b, alors a|(bc) pour tout entier c

### Critères de divisibilité
- **Par 2** : le nombre est **pair**
- **Par 3** : la **somme des chiffres** est divisible par 3
- **Par 4** : les **deux derniers chiffres** forment un nombre divisible par 4
- **Par 5** : le nombre se termine par **0 ou 5**
- **Par 9** : la **somme des chiffres** est divisible par 9
- **Par 11** : la **différence alternée** des chiffres est divisible par 11

## II. Division euclidienne

### Théorème de la division euclidienne
Pour tous entiers naturels **a** et **b** avec **b ≠ 0**, il existe un **unique couple (q, r)** d'entiers naturels tel que :
**a = bq + r** avec **0 ≤ r < b**

- **a** : dividende
- **b** : diviseur  
- **q** : quotient
- **r** : reste

### Algorithme d'Euclide (PGCD)
Pour calculer **PGCD(a,b)** :
1. On effectue la division euclidienne de **a** par **b** : a = bq + r
2. Si **r = 0**, alors **PGCD(a,b) = b**
3. Sinon, **PGCD(a,b) = PGCD(b,r)**
4. On répète jusqu'à obtenir un **reste nul**

## III. Nombres premiers

### Définition
Un **nombre premier** est un entier naturel **> 1** qui admet exactement **deux diviseurs positifs** : **1** et **lui-même**.

### Liste des premiers nombres premiers
**2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97...**

### Théorème fondamental de l'arithmétique
Tout entier **n > 1** s'écrit de manière **unique** comme produit de nombres premiers :
**n = p₁^α₁ × p₂^α₂ × ... × pₖ^αₖ**

## Exercices corrigés

### Exercice 1 : Divisibilité
Vérifier si **156** est divisible par **3, 4, 6**.

**Solution :**
- **Par 3 :** 1+5+6 = 12, et 12 est divisible par 3 → ✅ **OUI**
- **Par 4 :** 56 est divisible par 4 (56 = 4×14) → ✅ **OUI**  
- **Par 6 :** 156 est divisible par 2 **ET** par 3 → ✅ **OUI**

### Exercice 2 : PGCD
Calculer **PGCD(252, 105)** par l'algorithme d'Euclide.

**Solution :**
252 = 105 × 2 + 42
105 = 42 × 2 + 21  
42 = 21 × 2 + 0

Donc **PGCD(252, 105) = 21**

### Exercice 3 : Décomposition en facteurs premiers
Décomposer **360** en facteurs premiers.

**Solution :**
**360 = 2³ × 3² × 5**
Car : 360 ÷ 2 = 180 ÷ 2 = 90 ÷ 2 = 45 ÷ 3 = 15 ÷ 3 = 5 ÷ 5 = 1`,
    exercices: [
      {
        id: 1,
        title: "Critères de divisibilité",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: "**Déterminer si les nombres suivants sont divisibles par 2, 3, 5, 9 :**\na) **234**\nb) **315**\nc) **1260**",
        solution: "**Solutions détaillées :**\n\na) **234** :\n• **Par 2** : ✅ OUI (se termine par 4)\n• **Par 3** : ✅ OUI (2+3+4=9, divisible par 3)\n• **Par 5** : ❌ NON (ne se termine pas par 0 ou 5)\n• **Par 9** : ✅ OUI (2+3+4=9, divisible par 9)\n\nb) **315** :\n• **Par 2** : ❌ NON (se termine par 5)\n• **Par 3** : ✅ OUI (3+1+5=9, divisible par 3)\n• **Par 5** : ✅ OUI (se termine par 5)\n• **Par 9** : ✅ OUI (3+1+5=9, divisible par 9)\n\nc) **1260** :\n• **Par 2** : ✅ OUI (se termine par 0)\n• **Par 3** : ✅ OUI (1+2+6+0=9, divisible par 3)\n• **Par 5** : ✅ OUI (se termine par 0)\n• **Par 9** : ✅ OUI (1+2+6+0=9, divisible par 9)"
      },
      {
        id: 2,
        title: "PGCD par l'algorithme d'Euclide",
        difficulty: "Moyen",
        duration: "15 min",
        points: 10,
        question: "**Calculer PGCD(84, 36) en utilisant l'algorithme d'Euclide.**",
        solution: "**Algorithme d'Euclide :**\n\n**84 = 36 × 2 + 12**\n**36 = 12 × 3 + 0**\n\nLe reste est **0**, donc **PGCD(84, 36) = 12**\n\n**Vérification :**\n**84 = 12 × 7**\n**36 = 12 × 3**\nDonc **12** divise bien **84** et **36**."
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
        title: "🔢 Vecteurs dans le plan",
        content: `# 🔢 Vecteurs dans le plan

## **Définition :**
Un **vecteur** est une entité mathématique qui a à la fois une **magnitude** (ou longueur) et une **direction**.

### **Notation :**
Un vecteur est souvent noté par une lettre en gras, par exemple **v** ou par une flèche au-dessus, comme **→v**.

## **Représentation :**
Un vecteur peut être représenté graphiquement par une flèche :
- **Point de départ** : origine
- **Point d'arrivée** : extrémité

### **Exemple :**
Un vecteur **v** allant du point A(1, 2) au point B(4, 6) peut être noté comme **v = (4-1, 6-2) = (3, 4)**.

## **Propriétés des vecteurs :**
1. **Addition** : La somme de deux vecteurs est un vecteur dont l'origine est le point d'arrivée du premier vecteur.
2. **Soustraction** : La soustraction de deux vecteurs est équivalente à l'addition du vecteur opposé.
3. **Multiplication par un scalaire** : Un vecteur peut être multiplié par un nombre réel (scalaire), ce qui modifie sa longueur mais pas sa direction.

## **Applications :**
Les vecteurs sont utilisés dans de nombreux domaines, notamment :
- **Physique** : pour représenter des forces, des vitesses, etc.
- **Géométrie** : pour décrire des positions et des mouvements dans l'espace.`,
        type: "intro" as const
      },
      {
        title: "⚖️ Opérations sur les vecteurs",
        content: `# ⚖️ Opérations sur les vecteurs

## **Addition de vecteurs :**
Pour ajouter deux vecteurs **u** et **v**, on place le point d'arrivée de **u** à l'origine de **v**.

### **Formule :**
Si **u = (u₁, u₂)** et **v = (v₁, v₂)**, alors :
**u + v = (u₁ + v₁, u₂ + v₂)**

## **Soustraction de vecteurs :**
Pour soustraire un vecteur **v** d'un vecteur **u**, on additionne le vecteur opposé de **v**.

### **Formule :**
**u - v = u + (-v)**

## **Multiplication par un scalaire :**
Si **k** est un scalaire et **v = (v₁, v₂)**, alors :
**k * v = (k * v₁, k * v₂)**

### **Exemple :**
Si **v = (3, 4)** et **k = 2**, alors :
**2 * v = (6, 8)**

## **Applications :**
Les opérations sur les vecteurs sont essentielles en physique pour modéliser des mouvements, des forces et des champs.`,
        type: "definition" as const
      },
      {
        title: "🎯 Exercices d'application",
        content: `# 🎯 Exercices pratiques

## **Exercice 1 :** Addition de vecteurs
Soit **u = (2, 3)** et **v = (4, -1)**. Calculer **u + v**.

### **Solution :**
**u + v = (2 + 4, 3 - 1) = (6, 2)**

## **Exercice 2 :** Soustraction de vecteurs
Soit **u = (5, 7)** et **v = (3, 2)**. Calculer **u - v**.

### **Solution :**
**u - v = (5 - 3, 7 - 2) = (2, 5)**

## **Exercice 3 :** Multiplication par un scalaire
Soit **v = (1, 2)** et **k = 3**. Calculer **k * v**.

### **Solution :**
**3 * v = (3 * 1, 3 * 2) = (3, 6)**`,
        type: "exercise" as const
      }
    ],
    cours: `# Calcul vectoriel dans le plan

## I. Vecteurs

### Définition
Un vecteur est une entité mathématique qui a à la fois une magnitude et une direction.

### Représentation
Un vecteur peut être représenté graphiquement par une flèche.

## II. Opérations sur les vecteurs

### Addition
Pour ajouter deux vecteurs, on place le point d'arrivée du premier à l'origine du second.

### Soustraction
La soustraction de deux vecteurs est équivalente à l'addition du vecteur opposé.

### Multiplication par un scalaire
Un vecteur peut être multiplié par un nombre réel, modifiant sa longueur.

## III. Applications

Les vecteurs sont utilisés en physique pour représenter des forces, des vitesses, etc.

## Exercices corrigés

### Exercice 1 : Addition de vecteurs
Soit **u = (2, 3)** et **v = (4, -1)**. Calculer **u + v**.

**Solution :**
**u + v = (2 + 4, 3 - 1) = (6, 2)**

### Exercice 2 : Soustraction de vecteurs
Soit **u = (5, 7)** et **v = (3, 2)**. Calculer **u - v**.

**Solution :**
**u - v = (5 - 3, 7 - 2) = (2, 5)**

### Exercice 3 : Multiplication par un scalaire
Soit **v = (1, 2)** et **k = 3**. Calculer **k * v**.

**Solution :**
**3 * v = (3 * 1, 3 * 2) = (3, 6)**`,
    exercices: [
      {
        id: 1,
        title: "Addition de vecteurs",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: "**Soit u = (2, 3) et v = (4, -1). Calculer u + v.**",
        solution: "**Solution :**\n\n**u + v = (2 + 4, 3 - 1) = (6, 2)**"
      },
      {
        id: 2,
        title: "Soustraction de vecteurs",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: "**Soit u = (5, 7) et v = (3, 2). Calculer u - v.**",
        solution: "**Solution :**\n\n**u - v = (5 - 3, 7 - 2) = (2, 5)**"
      }
    ]
  },
  "4": {
    title: "La projection dans le plan",
    semester: 1,
    slides: [
      {
        title: "🔢 Projection orthogonale",
        content: `# 🔢 Projection orthogonale

## **Définition :**
La projection orthogonale d'un point sur une droite est le point d'intersection de la droite avec la perpendiculaire passant par le point.

### **Notation :**
Si **P** est un point et **D** une droite, la projection de **P** sur **D** est notée **P'**.

## **Propriétés :**
1. La projection est le point le plus proche de **P** sur **D**.
2. La distance entre **P** et **P'** est perpendiculaire à **D**.

## **Applications :**
- Utilisée en géométrie pour déterminer les distances minimales.
- En physique, pour décomposer des forces.

## **Exemple :**
Soit un point **P(3, 4)** et une droite d'équation **y = 2x + 1**. La projection de **P** sur **D** est le point **P'** tel que la distance **PP'** est perpendiculaire à **D**.`,
        type: "intro" as const
      },
      {
        title: "⚖️ Propriétés de la projection",
        content: `# ⚖️ Propriétés de la projection

## **Distance :**
La distance entre un point et sa projection sur une droite est donnée par la formule :
**d = |Ax + By + C| / √(A² + B²)**

## **Orthogonalité :**
La projection est orthogonale à la droite, ce qui signifie que les vecteurs **PP'** et **D** sont perpendiculaires.

## **Applications :**
- En géométrie analytique pour résoudre des problèmes de distances.
- En physique pour décomposer des vecteurs en composantes.

## **Exemple :**
Pour un point **P(2, 3)** et une droite d'équation **y = -x + 5**, la projection est le point **P'** tel que **PP'** est perpendiculaire à **D**.`,
        type: "definition" as const
      },
      {
        title: "🎯 Exercices d'application",
        content: `# 🎯 Exercices pratiques

## **Exercice 1 :** Projection sur une droite
Soit un point **P(1, 2)** et une droite d'équation **y = 3x + 1**. Calculer la projection de **P** sur **D**.

### **Solution :**
1. Déterminer l'équation de la droite perpendiculaire à **D** passant par **P**.
2. Résoudre le système pour trouver **P'**.

## **Exercice 2 :** Distance à une droite
Calculer la distance entre le point **P(4, 5)** et la droite **y = 2x - 3**.

### **Solution :**
Utiliser la formule de distance pour trouver la distance entre **P** et **D**.`,
        type: "exercise" as const
      }
    ],
    cours: `# La projection dans le plan

## I. Projection orthogonale

### Définition
La projection orthogonale d'un point sur une droite est le point d'intersection de la droite avec la perpendiculaire passant par le point.

### Propriétés
1. La projection est le point le plus proche de **P** sur **D**.
2. La distance entre **P** et **P'** est perpendiculaire à **D**.

## II. Applications

Utilisée en géométrie pour déterminer les distances minimales et en physique pour décomposer des forces.

## Exercices corrigés

### Exercice 1 : Projection sur une droite
Soit un point **P(1, 2)** et une droite d'équation **y = 3x + 1**. Calculer la projection de **P** sur **D**.

**Solution :**
1. Déterminer l'équation de la droite perpendiculaire à **D** passant par **P**.
2. Résoudre le système pour trouver **P'**.

### Exercice 2 : Distance à une droite
Calculer la distance entre le point **P(4, 5)** et la droite **y = 2x - 3**.

**Solution :**
Utiliser la formule de distance pour trouver la distance entre **P** et **D**.`,
    exercices: [
      {
        id: 1,
        title: "Projection sur une droite",
        difficulty: "Moyen",
        duration: "15 min",
        points: 10,
        question: "**Soit un point P(1, 2) et une droite d'équation y = 3x + 1. Calculer la projection de P sur D.**",
        solution: "**Solution :**\n\n1. Déterminer l'équation de la droite perpendiculaire à D passant par P.\n2. Résoudre le système pour trouver P'."
      },
      {
        id: 2,
        title: "Distance à une droite",
        difficulty: "Facile",
        duration: "10 min",
        points: 8,
        question: "**Calculer la distance entre le point P(4, 5) et la droite y = 2x - 3.**",
        solution: "**Solution :**\n\nUtiliser la formule de distance pour trouver la distance entre P et D."
      }
    ]
  }
};

// Export aliases for backward compatibility
export const mathExercisesData = mathLessonsData;
export const mathLessonsStructure = mathLessonsData;

// Export default
export default mathLessonsData;
