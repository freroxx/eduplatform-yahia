
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  Atom, 
  BookOpen, 
  PenTool, 
  Landmark, 
  Microscope,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Users,
  Globe,
  Zap
} from "lucide-react";
import GlobalHeader from "@/components/GlobalHeader";
import WelcomeBanner from "@/components/WelcomeBanner";
import EnhancedSubjectCard from "@/components/EnhancedSubjectCard";
import StatsOverview from "@/components/StatsOverview";
import ChangelogDialog from "@/components/ChangelogDialog";
import Footer from "@/components/Footer";
import { useSettings } from "@/hooks/useSettings";
import { useExerciseProgress } from "@/hooks/useExerciseProgress";

const Index = () => {
  const navigate = useNavigate();
  const { settings } = useSettings();
  const { totalPoints, completedExercises } = useExerciseProgress();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showChangelog, setShowChangelog] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const subjects = [
    {
      id: "math",
      name: "Mathématiques",
      nameArabic: "الرياضيات",
      description: "Algèbre, géométrie, analyse et probabilités pour le tronc commun",
      icon: <Calculator className="text-blue-600" />,
      color: "blue",
      bgGradient: "from-blue-600 via-blue-500 to-indigo-600",
      lessons: 12,
      exercises: 45,
      duration: "6h",
      difficulty: "Moyen" as const,
      path: "math",
      featured: true
    },
    {
      id: "physics",
      name: "Physique",
      nameArabic: "الفيزياء",
      description: "Mécanique, électricité, optique et physique moderne",
      icon: <Atom className="text-emerald-600" />,
      color: "emerald",
      bgGradient: "from-emerald-600 via-teal-500 to-cyan-600",
      lessons: 15,
      exercises: 38,
      duration: "8h",
      difficulty: "Difficile" as const,
      path: "physics"
    },
    {
      id: "arabic",
      name: "Langue Arabe",
      nameArabic: "اللغة العربية",
      description: "Grammaire, littérature, expression écrite et orale",
      icon: <BookOpen className="text-orange-600" />,
      color: "orange",
      bgGradient: "from-orange-600 via-amber-500 to-yellow-500",
      lessons: 18,
      exercises: 42,
      duration: "7h",
      difficulty: "Moyen" as const,
      path: "arabic",
      isNew: true
    },
    {
      id: "french",
      name: "Français",
      nameArabic: "الفرنسية",
      description: "Littérature, grammaire, expression et communication",
      icon: <PenTool className="text-red-600" />,
      color: "red",
      bgGradient: "from-red-600 via-rose-500 to-pink-600",
      lessons: 16,
      exercises: 35,
      duration: "6h",
      difficulty: "Moyen" as const,
      path: "french"
    },
    {
      id: "history-geo",
      name: "Histoire-Géographie",
      nameArabic: "التاريخ والجغرافيا",
      description: "Histoire du Maroc et du monde, géographie physique et humaine",
      icon: <Landmark className="text-purple-600" />,
      color: "purple",
      bgGradient: "from-purple-600 via-violet-500 to-indigo-600",
      lessons: 20,
      exercises: 40,
      duration: "9h",
      difficulty: "Moyen" as const,
      path: "histoire-geo"
    },
    {
      id: "svt",
      name: "Sciences de la Vie et de la Terre",
      nameArabic: "علوم الحياة والأرض",
      description: "Biologie, géologie, écologie et sciences de l'environnement",
      icon: <Microscope className="text-green-600" />,
      color: "green",
      bgGradient: "from-green-600 via-emerald-500 to-teal-600",
      lessons: 14,
      exercises: 32,
      duration: "7h",
      difficulty: "Moyen" as const,
      path: "svt"
    }
  ];

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Bonjour";
    if (hour < 18) return "Bon après-midi";
    return "Bonsoir";
  };

  const platformStats = {
    totalStudents: "15,000+",
    totalLessons: subjects.reduce((sum, subject) => sum + subject.lessons, 0),
    totalExercises: subjects.reduce((sum, subject) => sum + subject.exercises, 0),
    successRate: "94%"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <GlobalHeader />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="relative container mx-auto px-4 pt-8 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="h-12 w-12 text-indigo-600" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                EduPlanet
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              {getGreeting()}, {settings.name || "Étudiant"} ! 
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Votre plateforme d'apprentissage interactive pour le Tronc Commun Sciences
            </p>

            {/* Platform Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 flex items-center justify-center gap-2">
                  <Users className="h-5 w-5" />
                  {platformStats.totalStudents}
                </div>
                <div className="text-sm text-muted-foreground">Étudiants actifs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 flex items-center justify-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {platformStats.totalLessons}
                </div>
                <div className="text-sm text-muted-foreground">Leçons disponibles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600 flex items-center justify-center gap-2">
                  <Zap className="h-5 w-5" />
                  {platformStats.totalExercises}
                </div>
                <div className="text-sm text-muted-foreground">Exercices interactifs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 flex items-center justify-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  {platformStats.successRate}
                </div>
                <div className="text-sm text-muted-foreground">Taux de réussite</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => navigate("/lessons")}
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Commencer l'apprentissage
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Globe className="h-5 w-5 mr-2" />
                Explorer les matières
              </Button>
            </div>
          </motion.div>

          <WelcomeBanner onShowChangelog={() => setShowChangelog(true)} />
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* User Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <StatsOverview />
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 shadow-2xl text-white">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Actions rapides</h2>
                <p className="text-white/80">Accédez rapidement à vos contenus préférés</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm h-auto p-4"
                  onClick={() => navigate("/lessons")}
                >
                  <BookOpen className="h-6 w-6 mb-2" />
                  <div>
                    <div className="font-semibold">Toutes les leçons</div>
                    <div className="text-sm text-white/80">Explorez tous les cours</div>
                  </div>
                </Button>
                <Button 
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm h-auto p-4"
                  onClick={() => navigate("/lessons/physics")}
                >
                  <Atom className="h-6 w-6 mb-2" />
                  <div>
                    <div className="font-semibold">Physique</div>
                    <div className="text-sm text-white/80">Matière populaire</div>
                  </div>
                </Button>
                <Button 
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm h-auto p-4"
                  onClick={() => navigate("/settings")}
                >
                  <GraduationCap className="h-6 w-6 mb-2" />
                  <div>
                    <div className="font-semibold">Mon profil</div>
                    <div className="text-sm text-white/80">Paramètres et progression</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Subject Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Explorez nos matières
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des cours complets et interactifs adaptés au programme du Tronc Commun Sciences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <EnhancedSubjectCard 
                key={subject.id} 
                subject={subject} 
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20 border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-emerald-700 dark:text-emerald-300">
                Prêt à commencer votre parcours d'apprentissage ?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Rejoignez des milliers d'étudiants qui font confiance à EduPlanet pour réussir leurs études.
                Commencez dès maintenant et découvrez une nouvelle façon d'apprendre !
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => navigate("/lessons")}
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Commencer maintenant
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <ChangelogDialog 
        isOpen={showChangelog} 
        onClose={() => setShowChangelog(false)} 
      />

      <Footer />
    </div>
  );
};

export default Index;
