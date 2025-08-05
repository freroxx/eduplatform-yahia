import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, Trophy, TrendingUp, Users, Star, Zap, Target, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GlobalHeader from "@/components/GlobalHeader";
import WelcomeBanner from "@/components/WelcomeBanner";
import EnhancedSubjectCard from "@/components/EnhancedSubjectCard";
import StatsOverview from "@/components/StatsOverview";
import QuickStats from "@/components/QuickStats";
import ChangelogDialog from "@/components/ChangelogDialog";
import Footer from "@/components/Footer";
import UserOnboarding from "@/components/UserOnboarding";
import WelcomeTutorial from "@/components/WelcomeTutorial";
import { useSettings } from "@/hooks/useSettings";
import { useExerciseStats } from "@/hooks/useExerciseStats";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showChangelog, setShowChangelog] = useState(false);
  const { settings } = useSettings();
  const { getSubjectStats, getTotalStats } = useExerciseStats();

  const totalStats = getTotalStats();

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  // Subject data with proper typing
  const subjects = [
    {
      id: "math",
      title: "Mathématiques",
      description: "Fonctions, équations, géométrie",
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
      lessons: 12,
      exercises: 48,
      progress: getSubjectStats('math').progress,
      difficulty: "Moyen" as const,
      topics: ["Fonctions linéaires", "Équations", "Géométrie", "Statistiques"],
      estimatedTime: "2h 30min",
      name: "Mathématiques",
      bgGradient: "from-blue-500 to-cyan-500",
      duration: "2h 30min",
      path: "/math"
    },
    {
      id: "french",
      title: "Français",
      description: "Littérature, grammaire, expression",
      icon: "📚",
      color: "from-red-500 to-pink-500", 
      lessons: 10,
      exercises: 35,
      progress: getSubjectStats('french').progress,
      difficulty: "Facile" as const,
      topics: ["Typologie textuelle", "Grammaire", "Orthographe", "Littérature"],
      estimatedTime: "2h 15min",
      name: "Français",
      bgGradient: "from-red-500 to-pink-500",
      duration: "2h 15min",
      path: "/french"
    },
    {
      id: "english",
      title: "Anglais",
      description: "Grammaire, vocabulaire, communication",
      icon: "🇬🇧",
      color: "from-green-500 to-emerald-500",
      lessons: 8,
      exercises: 32,
      progress: getSubjectStats('english').progress,
      difficulty: "Moyen" as const,
      topics: ["Tenses", "Vocabulary", "Grammar", "Communication"],
      estimatedTime: "1h 45min",
      name: "Anglais",
      bgGradient: "from-green-500 to-emerald-500",
      duration: "1h 45min",
      path: "/english"
    },
    {
      id: "physics",
      title: "Physique-Chimie",
      description: "Mécanique, optique, chimie",
      icon: "⚛️",
      color: "from-purple-500 to-indigo-500",
      lessons: 9,
      exercises: 28,
      progress: getSubjectStats('physics').progress,
      difficulty: "Difficile" as const,
      topics: ["Optique", "Mécanique", "Électricité", "Chimie"],
      estimatedTime: "3h 00min",
      name: "Physique-Chimie",
      bgGradient: "from-purple-500 to-indigo-500",
      duration: "3h 00min",
      path: "/physics"
    },
    {
      id: "svt",
      title: "SVT",
      description: "Biologie, génétique, environnement",
      icon: "🧬",
      color: "from-green-600 to-teal-500",
      lessons: 7,
      exercises: 25,
      progress: getSubjectStats('svt').progress,
      difficulty: "Moyen" as const,
      topics: ["Génétique", "Écologie", "Biologie", "Environnement"],
      estimatedTime: "2h 00min",
      name: "SVT",
      bgGradient: "from-green-600 to-teal-500",
      duration: "2h 00min",
      path: "/svt"
    },
    {
      id: "histoire-geo",
      title: "Histoire-Géographie",
      description: "Histoire contemporaine, géographie",
      icon: "🌍",
      color: "from-amber-500 to-orange-500",
      lessons: 6,
      exercises: 22,
      progress: getSubjectStats('histoire-geo').progress,
      difficulty: "Facile" as const,
      topics: ["Histoire moderne", "Géopolitique", "Économie", "Société"],
      estimatedTime: "2h 30min",
      name: "Histoire-Géographie",
      bgGradient: "from-amber-500 to-orange-500",
      duration: "2h 30min",
      path: "/histoire-geo"
    },
    {
      id: "arabic",
      title: "العربية",
      description: "اللغة العربية، الأدب، القواعد",
      icon: "🕌",
      color: "from-teal-500 to-cyan-500",
      lessons: 5,
      exercises: 18,
      progress: getSubjectStats('arabic').progress,
      difficulty: "Moyen" as const,
      topics: ["النحو", "الصرف", "الأدب", "البلاغة"],
      estimatedTime: "1h 30min",
      name: "العربية",
      bgGradient: "from-teal-500 to-cyan-500",
      duration: "1h 30min",
      path: "/arabic"
    }
  ];

  const featuredUpdates = [
    {
      title: "Nouveaux exercices interactifs",
      description: "Plus de 50 nouveaux exercices avec corrections détaillées",
      icon: <Zap className="h-5 w-5" />,
      badge: "Nouveau"
    },
    {
      title: "Mode concentration",
      description: "Étudiez sans distractions avec le nouveau mode focus",
      icon: <Target className="h-5 w-5" />,
      badge: "Amélioré"
    },
    {
      title: "Suivi des progrès",
      description: "Visualisez vos performances avec des statistiques détaillées",
      icon: <TrendingUp className="h-5 w-5" />,
      badge: "Beta"
    }
  ];

  const achievements = [
    { title: "Premier cours terminé", icon: <BookOpen className="h-5 w-5" />, unlocked: totalStats.coursesCompleted > 0 },
    { title: "Studieux", icon: <Brain className="h-5 w-5" />, unlocked: totalStats.exercisesCompleted >= 10 },
    { title: "Expert", icon: <Trophy className="h-5 w-5" />, unlocked: totalStats.averageScore >= 80 },
    { title: "Assidu", icon: <Star className="h-5 w-5" />, unlocked: totalStats.streak >= 7 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <GlobalHeader />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Award className="h-5 w-5" />
              <span className="text-sm font-medium">Plateforme éducative #1</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              EduPlatform
              <span className="block text-3xl md:text-4xl text-blue-200 font-normal mt-2">
                Votre réussite commence ici
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Une plateforme d'apprentissage moderne avec des cours interactifs, 
              des exercices personnalisés et un suivi de progression avancé.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                Commencer maintenant
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                Découvrir les cours
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-white rounded-full"
          />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 bg-white rounded-lg"
          />
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <WelcomeBanner onShowChangelog={() => setShowChangelog(true)} />
        
        {/* Quick Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <QuickStats 
            totalLessons={totalStats.totalLessons}
            completedLessons={totalStats.coursesCompleted}
            totalStudyTime={totalStats.totalStudyTime}
            currentStreak={totalStats.streak}
            averageScore={totalStats.averageScore}
            weeklyGoal={totalStats.weeklyGoal}
          />
        </motion.section>

        {/* Featured Updates */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Nouveautés
            </h2>
            <Button 
              variant="outline" 
              onClick={() => setShowChangelog(true)}
              className="text-sm"
            >
              Voir toutes les mises à jour
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredUpdates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                          {update.icon}
                        </div>
                        <CardTitle className="text-lg">{update.title}</CardTitle>
                      </div>
                      <Badge variant="secondary">{update.badge}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {update.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Vos réussites
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Card className={`text-center p-4 ${achievement.unlocked ? 'bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-yellow-200 dark:border-yellow-800' : 'bg-gray-50 dark:bg-gray-800 opacity-60'}`}>
                  <div className={`inline-flex p-3 rounded-full mb-3 ${achievement.unlocked ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400' : 'bg-gray-200 dark:bg-gray-700 text-gray-400'}`}>
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold text-sm">{achievement.title}</h3>
                  {achievement.unlocked && (
                    <Badge className="mt-2" variant="secondary">
                      Débloqué
                    </Badge>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Subjects Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Vos matières
              </h2>
              <p className="text-muted-foreground">
                Choisissez une matière pour commencer votre apprentissage
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>+2,847 étudiants actifs</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <EnhancedSubjectCard subject={subject} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <StatsOverview />
        </motion.section>
      </div>

      <ChangelogDialog 
        open={showChangelog} 
        onOpenChange={setShowChangelog} 
      />

      <Footer />

      {showOnboarding && (
        <UserOnboarding 
          onComplete={() => {
            setShowOnboarding(false);
            setShowTutorial(true);
          }} 
        />
      )}

      {showTutorial && (
        <WelcomeTutorial onComplete={() => setShowTutorial(false)} />
      )}
    </div>
  );
};

export default Index;
