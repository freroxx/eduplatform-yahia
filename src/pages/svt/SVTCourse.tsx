
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, BookOpen, Microscope, Home } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";

const SVTCourse = () => {
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  const lessonContent = {
    "201": {
      title: "La cellule unité structurale du vivant",
      slides: [
        {
          title: "Qu'est-ce qu'une cellule ?",
          content: "La cellule est l'unité structurale et fonctionnelle de base de tous les êtres vivants. Elle constitue le plus petit niveau d'organisation capable de maintenir la vie.",
          formula: "Cellule = Membrane + Cytoplasme + Matériel génétique",
          example: "Une bactérie est constituée d'une seule cellule, tandis qu'un être humain en compte environ 37 000 milliards."
        },
        {
          title: "Types de cellules",
          content: "On distingue deux grands types de cellules : les cellules procaryotes (sans noyau) et les cellules eucaryotes (avec noyau).",
          formula: "Procaryotes : Bactéries, Archées | Eucaryotes : Plantes, Animaux, Champignons",
          example: "E. coli est une cellule procaryote, les cellules de la peau humaine sont eucaryotes."
        },
        {
          title: "Structure d'une cellule eucaryote",
          content: "Les cellules eucaryotes possèdent des organites spécialisés : noyau, mitochondries, réticulum endoplasmique, appareil de Golgi, etc.",
          formula: "Organites = Structures spécialisées dans des fonctions précises",
          example: "Les mitochondries produisent l'énergie (ATP), le noyau contient l'ADN."
        },
        {
          title: "Division cellulaire",
          content: "Les cellules se reproduisent par division. La mitose permet la croissance et la réparation des tissus.",
          formula: "1 cellule mère → 2 cellules filles identiques",
          example: "Lors de la cicatrisation, les cellules de la peau se divisent pour réparer la blessure."
        }
      ]
    },
    "202": {
      title: "L'unité chimique du vivant",
      slides: [
        {
          title: "Les éléments chimiques du vivant",
          content: "Le vivant est composé principalement de carbone (C), hydrogène (H), oxygène (O) et azote (N), représentant 96% de la matière vivante.",
          formula: "CHON = 96% de la matière vivante",
          example: "L'eau (H₂O) représente 60-70% du poids corporel humain."
        },
        {
          title: "Les biomolécules",
          content: "Quatre grandes familles de molécules constituent le vivant : glucides, lipides, protéines et acides nucléiques.",
          formula: "Biomolécules = Glucides + Lipides + Protéines + Acides nucléiques",
          example: "Le glucose (glucide) fournit l'énergie, l'ADN (acide nucléique) porte l'information génétique."
        },
        {
          title: "Les protéines",
          content: "Les protéines sont des polymères d'acides aminés. Elles assurent des fonctions structurales, enzymatiques et de transport.",
          formula: "Protéine = Chaîne d'acides aminés repliée dans l'espace",
          example: "L'hémoglobine transporte l'oxygène, les enzymes catalysent les réactions."
        },
        {
          title: "L'ADN, support de l'hérédité",
          content: "L'ADN contient l'information génétique sous forme de séquences de nucléotides (A, T, G, C).",
          formula: "ADN = Double hélice de nucléotides (A-T, G-C)",
          example: "Le génome humain contient environ 3 milliards de paires de bases."
        }
      ]
    },
    "203": {
      title: "La biodiversité",
      slides: [
        {
          title: "Définition de la biodiversité",
          content: "La biodiversité désigne la variété des formes de vie sur Terre, à trois niveaux : génétique, spécifique et écosystémique.",
          formula: "Biodiversité = Diversité génétique + Diversité spécifique + Diversité écosystémique",
          example: "On estime à 8,7 millions le nombre d'espèces sur Terre."
        },
        {
          title: "Classification du vivant",
          content: "Les êtres vivants sont classés selon leurs caractères communs en groupes emboîtés : règne, embranchement, classe, ordre, famille, genre, espèce.",
          formula: "RECOFGE : Règne > Embranchement > Classe > Ordre > Famille > Genre > Espèce",
          example: "Homo sapiens appartient au règne Animal, embranchement Vertébrés, classe Mammifères."
        },
        {
          title: "Les écosystèmes",
          content: "Un écosystème comprend tous les êtres vivants d'un milieu et leurs interactions avec le milieu physique.",
          formula: "Écosystème = Biocénose (êtres vivants) + Biotope (milieu physique)",
          example: "La forêt amazonienne, les récifs coralliens, les zones humides."
        },
        {
          title: "Menaces sur la biodiversité",
          content: "La biodiversité est menacée par les activités humaines : destruction d'habitats, pollution, changement climatique, espèces invasives.",
          formula: "Menaces = Destruction + Pollution + Climat + Invasives",
          example: "La déforestation détruit l'habitat de nombreuses espèces tropicales."
        }
      ]
    },
    "204": {
      title: "Géologie : structure de la Terre",
      slides: [
        {
          title: "Structure interne de la Terre",
          content: "La Terre est constituée de trois enveloppes concentriques : la croûte, le manteau et le noyau.",
          formula: "Terre = Croûte (0-70km) + Manteau (70-2900km) + Noyau (2900-6400km)",
          example: "La croûte océanique est plus fine (5-10km) que la croûte continentale (30-70km)."
        },
        {
          title: "La lithosphère",
          content: "La lithosphère comprend la croûte et la partie supérieure du manteau. Elle est découpée en plaques tectoniques.",
          formula: "Lithosphère = Croûte + Manteau supérieur rigide",
          example: "La plaque eurasiatique, la plaque africaine, la plaque pacifique."
        },
        {
          title: "Les roches",
          content: "Il existe trois types de roches selon leur origine : magmatiques, sédimentaires et métamorphiques.",
          formula: "Roches = Magmatiques + Sédimentaires + Métamorphiques",
          example: "Le granite (magmatique), le calcaire (sédimentaire), le marbre (métamorphique)."
        },
        {
          title: "Le cycle des roches",
          content: "Les roches se transforment continuellement sous l'action de la chaleur, de la pression et de l'érosion.",
          formula: "Cycle : Magma → Roche magmatique → Sédiments → Roche sédimentaire → Métamorphisme",
          example: "Le granite peut s'altérer en sable, qui peut devenir grès par compaction."
        }
      ]
    },
    "205": {
      title: "Écosystèmes et environnement",
      slides: [
        {
          title: "Chaînes et réseaux alimentaires",
          content: "Les êtres vivants sont liés par des relations alimentaires formant des chaînes et des réseaux trophiques.",
          formula: "Producteurs → Consommateurs primaires → Consommateurs secondaires → Décomposeurs",
          example: "Herbe → Lapin → Renard → Décomposeurs (bactéries, champignons)."
        },
        {
          title: "Flux d'énergie",
          content: "L'énergie circule de manière unidirectionnelle dans les écosystèmes, des producteurs vers les consommateurs.",
          formula: "Soleil → Producteurs (photosynthèse) → Consommateurs → Chaleur",
          example: "Seulement 10% de l'énergie passe d'un niveau trophique au suivant."
        },
        {
          title: "Cycles biogéochimiques",
          content: "Les éléments chimiques circulent entre les compartiments biotiques et abiotiques (cycles du carbone, azote, phosphore).",
          formula: "Éléments : Atmosphère ↔ Biosphère ↔ Hydrosphère ↔ Géosphère",
          example: "Le CO₂ atmosphérique est fixé par photosynthèse puis libéré par respiration."
        },
        {
          title: "Équilibres écologiques",
          content: "Les écosystèmes maintiennent des équilibres dynamiques grâce aux interactions entre espèces et avec le milieu.",
          formula: "Équilibre = Régulation des populations + Adaptation au milieu",
          example: "La relation prédateur-proie régule les effectifs des deux espèces."
        }
      ]
    },
    "206": {
      title: "L'Homme et l'environnement",
      slides: [
        {
          title: "Impact des activités humaines",
          content: "Les activités humaines modifient les écosystèmes : urbanisation, agriculture intensive, industrie, transport.",
          formula: "Impacts = Pollution + Déforestation + Urbanisation + Surexploitation",
          example: "L'agriculture intensive appauvrit les sols et pollue les nappes phréatiques."
        },
        {
          title: "Pollution et ses conséquences",
          content: "La pollution de l'air, de l'eau et des sols affecte la santé humaine et les écosystèmes.",
          formula: "Pollution → Dégradation environnementale → Problèmes sanitaires",
          example: "Les pesticides contaminent la chaîne alimentaire et réduisent la biodiversité."
        },
        {
          title: "Changement climatique",
          content: "L'augmentation des gaz à effet de serre d'origine anthropique provoque un réchauffement global.",
          formula: "GES (CO₂, CH₄, N₂O) → Effet de serre renforcé → Réchauffement",
          example: "La température moyenne a augmenté de 1,1°C depuis l'ère préindustrielle."
        },
        {
          title: "Développement durable",
          content: "Le développement durable vise à concilier progrès économique, équité sociale et protection environnementale.",
          formula: "DD = Économie + Social + Environnement",
          example: "Énergies renouvelables, agriculture biologique, économie circulaire."
        }
      ]
    },
    "207": {
      title: "Génétique et hérédité",
      slides: [
        {
          title: "L'information génétique",
          content: "L'information génétique est portée par l'ADN, organisé en gènes sur les chromosomes.",
          formula: "ADN → Gènes → Chromosomes → Caractères héréditaires",
          example: "Chaque cellule humaine contient 46 chromosomes (23 paires)."
        },
        {
          title: "Expression des gènes",
          content: "Les gènes s'expriment par la synthèse de protéines selon le code génétique universel.",
          formula: "ADN → ARN (transcription) → Protéines (traduction)",
          example: "Le gène de l'insuline code pour la protéine insuline qui régule la glycémie."
        },
        {
          title: "Transmission héréditaire",
          content: "Les caractères se transmettent des parents à la descendance selon les lois de Mendel.",
          formula: "Parents → Gamètes → Fécondation → Descendance",
          example: "La couleur des yeux suit une hérédité mendélienne simple."
        },
        {
          title: "Mutations et évolution",
          content: "Les mutations de l'ADN créent de la variabilité génétique, matière première de l'évolution.",
          formula: "Mutations → Variabilité → Sélection naturelle → Évolution",
          example: "La résistance aux antibiotiques résulte de mutations chez les bactéries."
        }
      ]
    },
    "208": {
      title: "Immunologie et santé",
      slides: [
        {
          title: "Le système immunitaire",
          content: "L'organisme se défend contre les agents pathogènes grâce à l'immunité innée et adaptative.",
          formula: "Immunité = Innée (barrières, phagocytes) + Adaptative (lymphocytes)",
          example: "La peau forme une barrière, les globules blancs détruisent les microbes."
        },
        {
          title: "Réponse immunitaire spécifique",
          content: "Les lymphocytes reconnaissent spécifiquement les antigènes et produisent une réponse adaptée.",
          formula: "Antigène → Reconnaissance → Activation → Réponse (anticorps, lymphocytes T)",
          example: "Après vaccination, les lymphocytes mémoire gardent l'information de l'antigène."
        },
        {
          title: "Vaccins et sérums",
          content: "La vaccination stimule l'immunité active, la sérothérapie apporte une immunité passive.",
          formula: "Vaccin → Immunité active durable | Sérum → Immunité passive temporaire",
          example: "Le vaccin contre la rougeole protège toute la vie, le sérum antivenimeux agit rapidement."
        },
        {
          title: "Maladies et prévention",
          content: "Les maladies infectieuses, génétiques et environnementales nécessitent des stratégies de prévention adaptées.",
          formula: "Prévention = Hygiène + Vaccination + Dépistage + Mode de vie",
          example: "Se laver les mains prévient les infections, ne pas fumer prévient le cancer du poumon."
        }
      ]
    }
  };

  const lesson = lessonContent[id as keyof typeof lessonContent] || lessonContent["201"];
  const totalSlides = lesson.slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="min-h-screen animated-bg">
      <GlobalHeader />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/lessons/svt">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Retour aux leçons
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Accueil
              </Button>
            </Link>
          </div>

          {/* Course Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
              <Microscope className="h-8 w-8 text-green-600" />
              {lesson.title}
            </h1>
            <p className="text-muted-foreground">
              Leçon {id} - Cours interactif SVT
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Slide {currentSlide + 1} sur {totalSlides}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% terminé
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          {/* Slide Content */}
          <Card className="mb-8 bg-card/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-card-foreground flex items-center justify-center gap-2">
                <BookOpen className="h-6 w-6 text-green-600" />
                {lesson.slides[currentSlide].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg leading-relaxed text-card-foreground">
                {lesson.slides[currentSlide].content}
              </div>
              
              {lesson.slides[currentSlide].formula && (
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    Schéma conceptuel :
                  </h4>
                  <div className="font-mono text-lg text-green-700 dark:text-green-300">
                    {lesson.slides[currentSlide].formula}
                  </div>
                </div>
              )}

              {lesson.slides[currentSlide].example && (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Exemple concret :
                  </h4>
                  <div className="text-blue-700 dark:text-blue-300">
                    {lesson.slides[currentSlide].example}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              size="lg"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Précédent
            </Button>

            <div className="flex space-x-2">
              {lesson.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? "bg-green-600"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              variant="outline"
              size="lg"
            >
              Suivant
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SVTCourse;
