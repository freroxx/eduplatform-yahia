
import CourseSlide from "@/components/CourseSlide";

const Lesson1Course = () => {
  const slides = [
    {
      title: "Les ensembles de nombres",
      content: "Bienvenue dans ce cours sur les ensembles de nombres N, Z, Q, D et R.\n\nNous allons découvrir les différents types de nombres et leurs propriétés fondamentales.",
      type: "intro" as const
    },
    {
      title: "L'ensemble N des nombres naturels",
      content: "N = {0, 1, 2, 3, 4, 5, ...}\n\nLes nombres naturels sont les nombres entiers positifs et zéro.\nIls servent principalement à compter et ordonner.",
      type: "definition" as const
    },
    {
      title: "L'ensemble Z des nombres entiers",
      content: "Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}\n\nLes nombres entiers incluent les nombres naturels et leurs opposés.\nOn a : N ⊂ Z",
      type: "definition" as const
    },
    {
      title: "L'ensemble Q des nombres rationnels",
      content: "Q = {a/b | a ∈ Z, b ∈ Z*}\n\nLes nombres rationnels sont tous les nombres qui peuvent s'écrire sous la forme d'une fraction.\nOn a : Z ⊂ Q",
      type: "definition" as const
    },
    {
      title: "Exemple de nombres rationnels",
      content: "Exemples :\n• 3/4 = 0,75\n• -2/3 = -0,666...\n• 5 = 5/1\n• 0,125 = 1/8\n\nTous ces nombres ont une écriture décimale finie ou périodique.",
      type: "example" as const
    },
    {
      title: "L'ensemble D des nombres décimaux",
      content: "D = {a/10ⁿ | a ∈ Z, n ∈ N}\n\nLes nombres décimaux sont les nombres rationnels qui ont une écriture décimale finie.\nOn a : D ⊂ Q",
      type: "definition" as const
    },
    {
      title: "L'ensemble R des nombres réels",
      content: "R contient tous les nombres rationnels et irrationnels.\n\nExemples de nombres irrationnels :\n• √2 ≈ 1,414...\n• π ≈ 3,14159...\n• e ≈ 2,718...",
      type: "definition" as const
    },
    {
      title: "Inclusions des ensembles",
      content: "Relations d'inclusion :\n\nN ⊂ Z ⊂ D ⊂ Q ⊂ R\n\nChaque ensemble est inclus dans le suivant, formant une hiérarchie naturelle des nombres.",
      type: "summary" as const
    }
  ];

  return (
    <CourseSlide 
      lessonTitle="Les ensembles de nombres N, Z, Q, D et R - Cours"
      slides={slides}
    />
  );
};

export default Lesson1Course;
