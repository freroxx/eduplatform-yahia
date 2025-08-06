
import CourseSlide from "@/components/CourseSlide";
import { useParams } from "react-router-dom";

const svtData: { [key: string]: { title: string; slides: any[] } } = {
  "201": {
    title: "La respiration chez les êtres vivants",
    slides: [
      {
        id: 1,
        title: "Introduction à la respiration",
        content: `# La respiration cellulaire

## Définition
La respiration est l'ensemble des mécanismes permettant aux cellules d'extraire l'énergie des nutriments en utilisant l'oxygène.

## Équation générale
**C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Énergie (ATP)**

## Types de respiration
- **Respiration aérobie** : utilise l'oxygène
- **Respiration anaérobie** : sans oxygène (fermentation)

## Importance biologique
- Production d'ATP (adénosine triphosphate)
- Maintien des fonctions vitales
- Source d'énergie pour toutes les activités cellulaires`
      },
      {
        id: 2,
        title: "La respiration chez les animaux",
        content: `# Mécanismes respiratoires chez les animaux

## Chez les mammifères
### Système respiratoire
- **Poumons** : organes d'échange gazeux
- **Alvéoles** : unités fonctionnelles
- **Surface d'échange** : très importante (70 m²)

### Mécanisme ventilatoire
1. **Inspiration** : entrée d'air riche en O₂
2. **Expiration** : sortie d'air riche en CO₂
3. **Échanges alvéolaires** : diffusion des gaz

## Chez les poissons
- **Branchies** : organes respiratoires
- **Circulation à contre-courant**
- **Extraction de l'O₂ dissous** dans l'eau

## Chez les insectes
- **Trachées** : tubes ramifiés
- **Spiracles** : orifices respiratoires
- **Transport direct** de l'oxygène aux cellules`
      }
    ]
  },
  "214": {
    title: "La géologie : structure de la Terre",
    slides: [
      {
        id: 1,
        title: "Structure interne de la Terre",
        content: `# Structure de la Terre

## Les couches terrestres
### 1. La croûte terrestre
- **Épaisseur** : 5-70 km
- **Croûte océanique** : basaltique, dense
- **Croûte continentale** : granitique, moins dense

### 2. Le manteau
- **Épaisseur** : ~2900 km
- **Composition** : roches silicatées
- **Température** : 1000-3000°C
- **État** : plastique (convection)

### 3. Le noyau
- **Noyau externe** : liquide (fer + nickel)
- **Noyau interne** : solide (fer + nickel)
- **Température** : ~5000°C

## Méthodes d'étude
- Ondes sismiques
- Forages profonds
- Études des météorites`
      },
      {
        id: 2,
        title: "La tectonique des plaques",
        content: `# Tectonique des plaques

## Théorie de Wegener
- **Dérive des continents** (1912)
- **Preuves paléontologiques**
- **Preuves géologiques**

## Plaques tectoniques
### Caractéristiques
- **12 plaques principales**
- **Mouvement** : 2-10 cm/an
- **Moteur** : convection mantellique

### Types de frontières
1. **Divergentes** : création de croûte
2. **Convergentes** : destruction de croûte
3. **Transformantes** : cisaillement

## Conséquences
- **Séismes** et **volcans**
- **Formation des montagnes**
- **Création d'océans**
- **Cycle de Wilson**`
      }
    ]
  }
};

const SVTCourse = () => {
  const { id } = useParams();
  
  const currentCourse = svtData[id || "201"];

  return (
    <CourseSlide 
      lessonTitle={currentCourse?.title || "Cours de SVT"}
      slides={currentCourse?.slides || []}
    />
  );
};

export default SVTCourse;
