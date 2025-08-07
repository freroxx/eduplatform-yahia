
import CourseSlide from "@/components/CourseSlide";
import EnhancedLoadingBar from "@/components/EnhancedLoadingBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const mathLessons = {
  "101": {
    title: "Module 1: Équations et inéquations",
    slides: [
      {
        id: 1,
        title: "Les équations du premier degré",
        content: `# Équations du Premier Degré

## Définition
Une équation du premier degré à une inconnue est une égalité de la forme **ax + b = 0** où :
- a ≠ 0 (coefficient de x)
- b est une constante
- x est l'inconnue

## Résolution
Pour résoudre ax + b = 0 :
1. **Isoler le terme en x** : ax = -b
2. **Diviser par le coefficient** : x = -b/a

## Exemples
### Exemple 1 : 2x + 6 = 0
- 2x = -6
- x = -6/2 = -3

### Exemple 2 : 3x - 9 = 0  
- 3x = 9
- x = 9/3 = 3

## Vérification
Toujours **substituer** la solution dans l'équation d'origine pour vérifier.

## Cas particuliers
- Si a = 0 et b = 0 : **infinité de solutions**
- Si a = 0 et b ≠ 0 : **aucune solution**`
      },
      {
        id: 2,
        title: "Les systèmes d'équations",
        content: `# Systèmes d'Équations Linéaires

## Définition
Un système de deux équations à deux inconnues :
\`\`\`
ax + by = c
dx + ey = f
\`\`\`

## Méthodes de résolution

### 1. Méthode par substitution
1. **Exprimer** une variable en fonction de l'autre
2. **Substituer** dans la deuxième équation
3. **Résoudre** l'équation à une inconnue
4. **Calculer** la deuxième variable

### 2. Méthode par élimination
1. **Multiplier** les équations pour éliminer une variable
2. **Additionner** ou soustraire les équations
3. **Résoudre** l'équation obtenue
4. **Substituer** pour trouver l'autre variable

## Exemple pratique
Système : 
\`\`\`
2x + 3y = 7
x - y = 1
\`\`\`

**Par substitution :**
- De la 2ème équation : x = y + 1
- Dans la 1ère : 2(y + 1) + 3y = 7
- 2y + 2 + 3y = 7
- 5y = 5, donc y = 1
- x = 1 + 1 = 2

**Solution : (2, 1)**`
      }
    ]
  },
  "102": {
    title: "Module 2: Fonctions numériques", 
    slides: [
      {
        id: 1,
        title: "Généralités sur les fonctions",
        content: `# Les Fonctions Numériques

## Définition
Une fonction f est une relation qui associe à chaque élément x d'un ensemble D (domaine) un unique élément y = f(x) d'un ensemble d'arrivée.

## Notations
- **f : D → ℝ**
- **x ↦ f(x)**
- y = f(x) se lit "y égale f de x"

## Domaine de définition
Ensemble des valeurs de x pour lesquelles f(x) existe.

### Exemples courants :
- **f(x) = 2x + 1** : Df = ℝ
- **f(x) = 1/x** : Df = ℝ* (ℝ privé de 0)
- **f(x) = √x** : Df = [0, +∞[

## Représentation graphique
La courbe représentative de f est l'ensemble des points M(x, f(x)) dans un repère.

## Image et antécédent
- **Image de a** : f(a)
- **Antécédent de b** : valeur(s) de x telles que f(x) = b

## Fonctions particulières
### Fonction constante : f(x) = k
### Fonction linéaire : f(x) = ax  
### Fonction affine : f(x) = ax + b`
      },
      {
        id: 2,
        title: "Variations des fonctions",
        content: `# Variations des Fonctions

## Fonction croissante
Sur un intervalle I, f est croissante si :
**Pour tout x₁ < x₂ dans I : f(x₁) ≤ f(x₂)**

## Fonction décroissante  
Sur un intervalle I, f est décroissante si :
**Pour tout x₁ < x₂ dans I : f(x₁) ≥ f(x₂)**

## Tableau de variations
Représentation synthétique des variations de f :
- **Flèches montantes** : fonction croissante
- **Flèches descendantes** : fonction décroissante
- **Maximum/Minimum local**

## Extremums
### Maximum
f(a) est un maximum de f si f(x) ≤ f(a) pour tout x du domaine

### Minimum  
f(a) est un minimum de f si f(x) ≥ f(a) pour tout x du domaine

## Méthodes d'étude
1. **Calcul algébrique** : comparer f(x₁) et f(x₂)
2. **Étude du signe** de f(x₂) - f(x₁)  
3. **Représentation graphique**

## Exemple : f(x) = x²
- **Décroissante** sur ]-∞, 0]
- **Croissante** sur [0, +∞[
- **Minimum** en x = 0 : f(0) = 0`
      }
    ]
  },
  "103": {
    title: "Module 3: Géométrie plane",
    slides: [
      {
        id: 1,
        title: "Triangles et relations métriques",
        content: `# Triangles et Relations Métriques

## Théorème de Pythagore
Dans un triangle rectangle ABC rectangle en C :
**AB² = AC² + BC²**

### Réciproque
Si AB² = AC² + BC², alors le triangle ABC est rectangle en C.

## Relations dans le triangle quelconque

### Théorème d'Al-Kashi (généralisation de Pythagore)
Dans un triangle ABC :
**c² = a² + b² - 2ab cos(Ĉ)**

## Aire d'un triangle
### Formule de base
**Aire = (base × hauteur) / 2**

### Formule avec deux côtés et angle
**Aire = (1/2) × a × b × sin(Ĉ)**

### Formule de Héron
**Aire = √[p(p-a)(p-b)(p-c)]**
où p = (a+b+c)/2 est le demi-périmètre

## Centres remarquables
### Circoncentre : centre du cercle circonscrit
### Incentre : centre du cercle inscrit  
### Centroïde : point d'intersection des médianes
### Orthocentre : point d'intersection des hauteurs

## Applications pratiques
- **Calculs de distances**
- **Aires de terrains**
- **Navigation et géolocalisation**`
      },
      {
        id: 2,
        title: "Transformations géométriques",
        content: `# Transformations Géométriques

## Translation
### Définition
Une translation de vecteur **u⃗** transforme tout point M en M' tel que :
**MM'⃗ = u⃗**

### Propriétés
- **Conservation des distances**
- **Conservation des angles**  
- **Conservation du parallélisme**
- L'image d'une droite est une droite parallèle

## Symétrie axiale
### Définition
Symétrie par rapport à une droite (d) :
- Si M ∈ (d), alors M' = M
- Si M ∉ (d), alors (d) est médiatrice de [MM']

### Propriétés
- **Isométrie** : conservation des distances
- **Conservation des angles**
- **Inversion de l'orientation**

## Rotation
### Définition
Rotation de centre O et d'angle α :
- O est point fixe
- OM' = OM pour tout point M
- (OM⃗, OM'⃗) = α

### Propriétés  
- **Isométrie**
- **Conservation de l'orientation**
- Composition de rotations de même centre

## Homothétie
### Définition
Homothétie de centre O et rapport k :
**OM'⃗ = k × OM⃗**

### Propriétés
- Si |k| > 1 : **agrandissement**
- Si |k| < 1 : **réduction**  
- Si k < 0 : **inversion du sens**
- Conservation du parallélisme et des angles`
      }
    ]
  }
};

const MathCourse = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 20;
        if (newProgress >= 100) {
          setIsLoading(false);
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const currentCourse = mathLessons[id || "101"];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 flex items-center justify-center">
        <EnhancedLoadingBar 
          isLoading={isLoading}
          progress={loadingProgress}
          message="Chargement du cours de mathématiques..."
          color="blue"
        />
      </div>
    );
  }

  return (
    <CourseSlide 
      lessonTitle={currentCourse?.title || "Cours de Mathématiques"}
      slides={currentCourse?.slides || []}
    />
  );
};

export default MathCourse;
