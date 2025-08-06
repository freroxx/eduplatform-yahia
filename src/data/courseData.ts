
// Physics Data
export const physicsData: { [key: string]: { title: string; slides: any[] } } = {
  "101": {
    title: "Gravitation universelle",
    slides: [
      {
        id: 1,
        title: "La loi de Newton",
        content: `# Gravitation Universelle

## Loi de Newton (1687)
**"Deux corps s'attirent mutuellement avec une force proportionnelle au produit de leurs masses et inversement proportionnelle au carré de la distance qui les sépare."**

## Formule mathématique
**F = G × (m₁ × m₂) / r²**

Où :
- F = Force gravitationnelle (N)
- G = Constante gravitationnelle = 6,67 × 10⁻¹¹ N⋅m²/kg²
- m₁, m₂ = masses des deux corps (kg)
- r = distance entre les centres de gravité (m)

## Caractéristiques
- Force **attractive** (toujours)
- Action à **distance**
- **Réciproque** (3ème loi de Newton)
- **Universelle** (tous les objets)`
      },
      {
        id: 2,
        title: "Applications de la gravitation",
        content: `# Applications de la gravitation

## 1. Pesanteur terrestre
- **g = 9,81 m/s²** à la surface
- Variation avec l'altitude : g = GM/r²
- **Poids** : P = mg

## 2. Mouvement des planètes
### Lois de Kepler
1. **Orbites elliptiques** avec le Soleil au foyer
2. **Loi des aires** : vitesses variables
3. **T² ∝ a³** (période et demi-grand axe)

## 3. Marées
- Attraction **Lune-Terre**
- Attraction **Soleil-Terre**
- **Marées vives** et **marées mortes**

## 4. Satellites artificiels
- **Vitesse de libération** : 11,2 km/s
- **Orbites géostationnaires**
- **Exploration spatiale**`
      }
    ]
  },
  "114": {
    title: "Le courant électrique continu",
    slides: [
      {
        id: 1,
        title: "Nature du courant électrique",
        content: `# Le Courant Électrique

## Définition
Le courant électrique est un **déplacement ordonné de porteurs de charge** électrique dans un conducteur.

## Intensité du courant
**I = Q / t**

Où :
- I = Intensité (Ampères - A)
- Q = Charge électrique (Coulombs - C)
- t = Temps (secondes - s)

## Sens conventionnel
- Du **pôle positif** vers le **pôle négatif**
- **Contraire** au sens de déplacement des électrons
- Convention historique maintenue

## Types de conducteurs
- **Métalliques** : électrons libres
- **Électrolytiques** : ions en solution
- **Gazeux** : ionisation du gaz`
      },
      {
        id: 2,
        title: "Lois du courant continu",
        content: `# Lois du Courant Continu

## Loi d'Ohm
**U = R × I**

Où :
- U = Tension (Volts - V)
- R = Résistance (Ohms - Ω)
- I = Intensité (Ampères - A)

## Loi des nœuds (Kirchhoff)
**Σ I_entrantes = Σ I_sortantes**

*"La somme des intensités qui arrivent à un nœud égale la somme des intensités qui en partent."*

## Loi des mailles (Kirchhoff)
**Σ U = 0**

*"La somme algébrique des tensions dans une maille fermée est nulle."*

## Puissance électrique
**P = U × I = R × I² = U²/R**

Unité : Watt (W)`
      }
    ]
  }
};

// French Data
export const frenchData: { [key: string]: { title: string; slides: any[] } } = {
  "301": {
    title: "Typologie textuelle",
    slides: [
      {
        id: 1,
        title: "Les types de textes",
        content: `# Typologie Textuelle

## Les quatre types de textes

### 1. Le texte narratif
- **But** : raconter une histoire
- **Caractéristiques** : 
  - Présence d'un narrateur
  - Succession d'événements
  - Personnages et actions
- **Temps** : passé (passé simple, imparfait)
- **Exemple** : romans, nouvelles, contes

### 2. Le texte descriptif
- **But** : décrire, présenter
- **Caractéristiques** :
  - Détails visuels, sensoriels
  - Ordre spatial ou chronologique
  - Adjectifs qualificatifs nombreux
- **Temps** : présent, imparfait
- **Exemple** : portraits, paysages

### 3. Le texte explicatif
- **But** : expliquer, informer
- **Caractéristiques** :
  - Objectivité
  - Connecteurs logiques
  - Définitions et exemples
- **Temps** : présent de vérité générale
- **Exemple** : articles encyclopédiques

### 4. Le texte argumentatif
- **But** : convaincre, persuader
- **Caractéristiques** :
  - Thèse, arguments, exemples
  - Connecteurs d'opposition
  - Subjectivité assumée
- **Temps** : présent, futur
- **Exemple** : éditoriaux, essais`
      },
      {
        id: 2,
        title: "Le schéma narratif",
        content: `# Le Schéma Narratif

## Les cinq étapes

### 1. Situation initiale
- **État d'équilibre** au début du récit
- Présentation des **personnages** et du **cadre**
- **"Il était une fois..."**

### 2. Élément perturbateur
- **Événement** qui rompt l'équilibre initial
- **Déclencheur** de l'action
- **"Soudain, un jour..."**

### 3. Péripéties
- **Série d'événements** liés à l'élément perturbateur
- **Actions** des personnages
- **Développement** du conflit

### 4. Dénouement
- **Résolution** du conflit
- **Réponse** à la problématique posée
- **Élimination** des obstacles

### 5. Situation finale
- **Nouvel état d'équilibre**
- **Bilan** des transformations
- **"Ils vécurent heureux..."**

## Analyse pratique
- Identifier chaque étape
- Repérer les **indicateurs temporels**
- Analyser les **transformations** des personnages`
      }
    ]
  },
  "302": {
    title: "Guy de Maupassant et le réalisme",
    slides: [
      {
        id: 1,
        title: "Guy de Maupassant (1850-1893)",
        content: `# Guy de Maupassant

## Biographie
- **Naissance** : 1850 en Normandie
- **Formation** : droit, puis littérature
- **Mentor** : Gustave Flaubert
- **Carrière** : fonctionnaire puis écrivain
- **Mort** : 1893, troubles mentaux

## Œuvre littéraire
### Nouvelles (300+)
- **"Boule de Suif"** (1880)
- **"La Parure"** (1884)
- **"La Ficelle"** (1883)
- **"Le Horla"** (1887)

### Romans
- **"Une Vie"** (1883)
- **"Bel-Ami"** (1885)
- **"Pierre et Jean"** (1888)

## Style d'écriture
- **Concision** et **efficacité**
- **Objectivité** narrative
- **Fin en chute** (surprenante)
- **Pessimisme** lucide`
      },
      {
        id: 2,
        title: "Le mouvement réaliste",
        content: `# Le Réalisme (XIXe siècle)

## Principes du réalisme
### Objectifs
- **Représenter la réalité** sans idéalisation
- **Peindre la société** contemporaine
- **Dénoncer** les injustices sociales

### Caractéristiques
- **Documentation** rigoureuse
- **Observation** minutieuse
- **Langue** accessible
- **Thèmes** du quotidien

## Auteurs majeurs
- **Honoré de Balzac** (La Comédie humaine)
- **Gustave Flaubert** (Madame Bovary)
- **Émile Zola** (Les Rougon-Macquart)

## Héritage de Maupassant
### Influence du réalisme
- **Personnages** de toutes classes sociales
- **Critique sociale** implicite
- **Vérité psychologique**

### Innovation personnelle
- **Nouvelles** comme forme d'art
- **Pessimisme** moderne
- **Technique** du non-dit`
      }
    ]
  }
};

// Arabic Data  
export const arabicData: { [key: string]: { title: string; slides: any[] } } = {
  "401": {
    title: "الإملاء والقواعد الأساسية",
    slides: [
      {
        id: 1,
        title: "قواعد الإملاء",
        content: `# قواعد الإملاء الأساسية

## الهمزة وأنواعها

### 1. همزة الوصل
- **تُكتب ألفاً بدون همزة**: (ا)
- **تُنطق عند البدء** بها ولا تُنطق عند الوصل
- **مواضعها**:
  - أل التعريف: الكتاب، المدرسة
  - أمر الثلاثي: اكتب، اقرأ
  - ماضي وأمر ومصدر الخماسي والسداسي: انطلق، استخرج

### 2. همزة القطع  
- **تُكتب همزة فوق أو تحت الألف**: (أ، إ)
- **تُنطق دائماً** في البدء والوصل
- **مواضعها**:
  - جميع الحروف: أن، إن، أو
  - الأسماء: أحمد، إبراهيم، أسد
  - الأفعال الرباعية: أكرم، أعطى

## التاء المربوطة والمفتوحة

### التاء المربوطة (ة)
- تُنطق **هاءً ساكنة** عند الوقف
- تُنطق **تاءً** عند الوصل
- **مواضعها**: أسماء الإناث، جمع التكسير

### التاء المفتوحة (ت)
- تُنطق **تاءً** دائماً
- **مواضعها**: آخر الأفعال، جمع المؤنث السالم`
      },
      {
        id: 2,
        title: "علامات الترقيم",
        content: `# علامات الترقيم

## علامات الوقف

### النقطة (.)
- **نهاية الجملة** التامة المعنى
- **مثال**: العلم نور.

### الفاصلة (،)
- **بين أجزاء الجملة** المترابطة
- **مثال**: قرأت، وكتبت، ورسمت.

### النقطتان (:)
- **قبل القول** المنقول
- **قبل التفسير** والتوضيح
- **مثال**: قال المعلم: اجتهدوا.

## علامات التنبيه

### علامة الاستفهام (؟)
- **نهاية الجملة** الاستفهامية
- **مثال**: متى ستسافر؟

### علامة التعجب (!)
- **نهاية جملة** التعجب أو الانفعال
- **مثال**: ما أجمل الطبيعة!

### الفاصلة المنقوطة (؛)
- **بين جملتين** مترابطتين معنوياً
- **مثال**: المطر ينزل؛ والأرض تخضر.

## القواعد العامة
- **المسافات**: فراغ بعد كل علامة
- **التناسق**: استخدام موحد في النص
- **الوضوح**: تسهيل فهم المعنى`
      }
    ]
  },
  "407": {
    title: "أسماء الآلة والزمان والمكان",
    slides: [
      {
        id: 1,
        title: "اسم الآلة",
        content: `# اسم الآلة

## تعريف
**اسم مشتق** للدلالة على **الأداة** التي يكون بها الفعل

## أوزانه القياسية

### مِفْعَل
- **مِبْرَد**: آلة البرد
- **مِقَص**: آلة القص  
- **مِفْتَاح**: آلة الفتح

### مِفْعَلَة
- **مِكْنَسَة**: آلة الكنس
- **مِذْيَاع**: آلة الإذاعة
- **مِطْرَقَة**: آلة الطرق

### مِفْعَال
- **مِفْتَاح**: آلة الفتح
- **مِصْبَاح**: آلة الإضاءة
- **مِنْشَار**: آلة النشر

### فَعَّالَة (للكثرة)
- **غَسَّالَة**: آلة الغسل
- **خَلَّاطَة**: آلة الخلط
- **سَيَّارَة**: آلة السير

## أوزان سماعية
- **سِكِّين، فَأْس، قَلَم، سَيْف**

## شروط الاشتقاق
- **من فعل ثلاثي**
- **متعدٍ**
- **تام التصرف**`
      },
      {
        id: 2,
        title: "اسما الزمان والمكان",
        content: `# اسما الزمان والمكان

## تعريف
- **اسم الزمان**: اسم مشتق للدلالة على **زمان** حدوث الفعل
- **اسم المكان**: اسم مشتق للدلالة على **مكان** حدوث الفعل

## أوزانهما

### من الثلاثي
#### مَفْعَل (مفتوح العين)
**إذا كان الفعل**:
- مفتوح العين: ذَهَبَ → مَذْهَب
- مكسور العين: جَلَسَ → مَجْلَس  
- معتل الآخر: رَمَى → مَرْمَى

#### مَفْعِل (مكسور العين)  
**إذا كان الفعل**:
- مضموم العين: خَرُجَ → مَخْرِج
- معتل الأول: وَعَدَ → مَوْعِد

### من غير الثلاثي
**على وزن المضارع** مع إبدال حرف المضارعة **ميماً مضمومة** وفتح ما قبل الآخر

**أمثلة**:
- اِنْطَلَقَ → يَنْطَلِقُ → مُنْطَلَق
- اِسْتَخْرَجَ → يَسْتَخْرِجُ → مُسْتَخْرَج
- تَعَلَّمَ → يَتَعَلَّمُ → مُتَعَلَّم

## أمثلة تطبيقية
- **مَطْبَخ**: مكان الطبخ
- **مَوْعِد**: زمان الوعد  
- **مُسْتَشْفَى**: مكان الاستشفاء
- **مُلْتَقَى**: مكان الالتقاء`
      }
    ]
  }
};

// Exercise data for all subjects
export const physicsExercises: { [key: string]: { title: string; exercises: any[] } } = {
  "101": {
    title: "Exercices - Gravitation universelle",
    exercises: [
      {
        id: 1,
        title: "Calcul de force gravitationnelle",
        difficulty: "Moyen",
        duration: "15 min",
        points: 12,
        question: "Calculer la force d'attraction gravitationnelle entre la Terre (M = 6,0×10²⁴ kg) et la Lune (m = 7,3×10²² kg), sachant que la distance Terre-Lune est d = 3,8×10⁸ m.\nDonnée : G = 6,67×10⁻¹¹ N⋅m²/kg²",
        solution: "F = G × (M × m) / d²\nF = 6,67×10⁻¹¹ × (6,0×10²⁴ × 7,3×10²²) / (3,8×10⁸)²\nF = 6,67×10⁻¹¹ × 4,38×10⁴⁷ / 1,44×10¹⁷\nF = 2,0×10²⁰ N"
      }
    ]
  },
  "114": {
    title: "Exercices - Courant électrique",
    exercises: [
      {
        id: 1,
        title: "Application de la loi d'Ohm",
        difficulty: "Facile", 
        duration: "10 min",
        points: 8,
        question: "Un résistor de résistance R = 100 Ω est traversé par un courant d'intensité I = 0,2 A. Calculer la tension U aux bornes du résistor.",
        solution: "D'après la loi d'Ohm : U = R × I\nU = 100 × 0,2 = 20 V\nLa tension aux bornes du résistor est de 20 V."
      }
    ]
  }
};

export const frenchExercises: { [key: string]: { title: string; exercises: any[] } } = {
  "301": {
    title: "Exercices - Typologie textuelle", 
    exercises: [
      {
        id: 1,
        title: "Identification des types de textes",
        difficulty: "Facile",
        duration: "12 min",
        points: 10,
        question: `Identifiez le type de chacun des textes suivants et justifiez votre réponse :

Texte A : "Le château se dressait majestueusement sur la colline. Ses tours élancées perçaient les nuages bas, tandis que ses murs de pierre grise semblaient défier le temps."

Texte B : "Il faut réduire la pollution automobile dans nos villes. En effet, elle est responsable de nombreuses maladies respiratoires. De plus, elle contribue au réchauffement climatique."`,
        solution: `Texte A : Type DESCRIPTIF
Justification : 
- Présente les caractéristiques visuelles du château
- Nombreux adjectifs qualificatifs (majestueusement, élancées, grise)
- Verbes d'état et de description
- Ordre spatial (sur la colline, tours, murs)

Texte B : Type ARGUMENTATIF  
Justification :
- Présente une thèse (réduire la pollution)
- Arguments avec connecteurs logiques ("En effet", "De plus")
- But : convaincre le lecteur
- Présent de vérité générale`
      }
    ]
  },
  "302": {
    title: "Exercices - Guy de Maupassant",
    exercises: [
      {
        id: 1,
        title: "Analyse de 'La Ficelle'",
        difficulty: "Moyen",
        duration: "18 min", 
        points: 15,
        question: `Analysez les caractéristiques réalistes dans la nouvelle "La Ficelle" de Maupassant :
1) Le cadre spatio-temporel
2) Les personnages
3) Les thèmes abordés
4) Le style de l'auteur`,
        solution: `1) Cadre spatio-temporel :
- Lieu précis : marché de Goderville en Normandie
- Époque contemporaine à l'auteur (XIXe siècle)
- Milieu rural authentique

2) Personnages :
- Maître Hauchecorne : paysan normand typique
- Personnages issus du peuple (fermiers, marchands)
- Psychologie vraisemblable et nuancée

3) Thèmes réalistes :
- Critique de la société rurale
- Méfiance et médisance villageoise  
- Injustice sociale et préjugés
- Solitude de l'individu face au groupe

4) Style :
- Objectivité narrative
- Dialogue en patois normand
- Description minutieuse des lieux et des mœurs
- Fin pessimiste et amère`
      }
    ]
  }
};

export const arabicExercises: { [key: string]: { title: string; exercises: any[] } } = {
  "401": {
    title: "تمارين الإملاء",
    exercises: [
      {
        id: 1,
        title: "تمييز همزة الوصل والقطع",
        difficulty: "Facile",
        duration: "10 min", 
        points: 8,
        question: `حدد نوع الهمزة في الكلمات التالية (همزة وصل أم قطع) واذكر السبب:
1. انطلق
2. أحمد  
3. استخراج
4. إبراهيم
5. اكتب
6. أعطى`,
        solution: `1. انطلق: همزة وصل - ماضي الفعل الخماسي
2. أحمد: همزة قطع - اسم علم
3. استخراج: همزة وصل - مصدر الفعل السداسي  
4. إبراهيم: همزة قطع - اسم علم
5. اكتب: همزة وصل - أمر الفعل الثلاثي
6. أعطى: همزة قطع - فعل رباعي`
      }
    ]
  },
  "407": {
    title: "تمارين أسماء الآلة والزمان والمكان",
    exercises: [
      {
        id: 1,
        title: "اشتقاق أسماء الآلة", 
        difficulty: "Moyen",
        duration: "15 min",
        points: 12,
        question: `اشتق اسم الآلة من الأفعال التالية على الوزن المناسب:
1. نشر
2. طرق  
3. كنس
4. برد
5. غسل`,
        solution: `1. نشر ← مِنْشار (مِفْعال)
2. طرق ← مِطْرقة (مِفْعَلة)  
3. كنس ← مِكْنَسة (مِفْعَلة)
4. برد ← مِبْرَد (مِفْعَل)
5. غسل ← غسّالة (فَعّالة) أو مِغْسَلة (مِفْعَلة)`
      }
    ]
  }
};
