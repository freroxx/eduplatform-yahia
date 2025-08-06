
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Calculator, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import EnhancedLoadingBar from "@/components/EnhancedLoadingBar";

const MathCourse = () => {
  const [isLoading, setIsLoading] = useState(false);

  const mathTopics = [
    {
      id: 1,
      title: "Équations et inéquations",
      description: "Résolution d'équations du premier et second degré, systèmes d'équations",
      duration: "45 min",
      difficulty: "Moyen",
      content: `
# Équations et inéquations

## Équations du premier degré
Une équation du premier degré est de la forme : ax + b = 0

### Méthode de résolution :
1. Isoler le terme en x
2. Diviser par le coefficient de x

**Exemple :** 
3x + 5 = 14
3x = 14 - 5
3x = 9
x = 3

## Équations du second degré
Une équation du second degré est de la forme : ax² + bx + c = 0

### Discriminant :
Δ = b² - 4ac

- Si Δ > 0 : deux solutions réelles
- Si Δ = 0 : une solution double
- Si Δ < 0 : pas de solution réelle

### Solutions :
x₁ = (-b + √Δ) / (2a)
x₂ = (-b - √Δ) / (2a)
      `
    },
    {
      id: 2,
      title: "Fonctions numériques",
      description: "Étude des fonctions, domaine de définition, variations",
      duration: "50 min",
      difficulty: "Difficile",
      content: `
# Fonctions numériques

## Définition
Une fonction f est une relation qui associe à chaque élément x d'un ensemble E au plus un élément y d'un ensemble F.

## Domaine de définition
Le domaine de définition Df d'une fonction f est l'ensemble des valeurs pour lesquelles f(x) est définie.

## Variations d'une fonction
- Fonction croissante : si x₁ < x₂ alors f(x₁) ≤ f(x₂)
- Fonction décroissante : si x₁ < x₂ alors f(x₁) ≥ f(x₂)

## Fonctions usuelles
1. **Fonction affine** : f(x) = ax + b
2. **Fonction carré** : f(x) = x²
3. **Fonction inverse** : f(x) = 1/x
4. **Fonction racine carrée** : f(x) = √x
      `
    },
    {
      id: 3,
      title: "Statistiques descriptives",
      description: "Calculs de moyennes, médiane, écart-type, représentations graphiques",
      duration: "40 min",
      difficulty: "Facile",
      content: `
# Statistiques descriptives

## Vocabulaire
- **Population** : ensemble des individus étudiés
- **Caractère** : propriété étudiée sur la population
- **Modalité** : valeur prise par le caractère

## Paramètres de position
### Moyenne arithmétique
x̄ = (Σ xi × ni) / N

### Médiane
Valeur qui partage la série en deux parties égales

### Mode
Modalité qui a la plus grande fréquence

## Paramètres de dispersion
### Étendue
E = Max - Min

### Écart-type
σ = √(Variance)

### Variance
V = Σ(xi - x̄)² × ni / N
      `
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 flex items-center justify-center">
        <EnhancedLoadingBar progress={75} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <GlobalHeader />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/lessons/math">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux leçons
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-2 justify-center">
                <Calculator className="h-8 w-8 text-blue-600" />
                Cours de Mathématiques
              </h1>
              <p className="text-muted-foreground">Tronc Commun Sciences</p>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {mathTopics.length} chapitres
            </Badge>
          </div>

          {/* Topics */}
          <div className="space-y-8">
            {mathTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge className={`
                            ${topic.difficulty === 'Facile' ? 'bg-green-100 text-green-800 border-green-200' : 
                              topic.difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' : 
                              'bg-red-100 text-red-800 border-red-200'}
                            font-medium border
                          `}>
                            <Target className="h-3 w-3 mr-1" />
                            {topic.difficulty}
                          </Badge>
                          <Badge variant="outline">
                            <Clock className="h-3 w-3 mr-1" />
                            {topic.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                          {topic.title}
                        </CardTitle>
                        <p className="text-muted-foreground">{topic.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                        {topic.content}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MathCourse;
