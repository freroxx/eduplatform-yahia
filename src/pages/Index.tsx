import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, Atom, Leaf, Languages, MessageSquare, Globe, Trophy, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import EnhancedSubjectCard from "@/components/EnhancedSubjectCard";
import WelcomeBanner from "@/components/WelcomeBanner";
import StatsOverview from "@/components/StatsOverview";
import QuickStats from "@/components/QuickStats";
import GlobalHeader from "@/components/GlobalHeader";
import Footer from "@/components/Footer";
import EnhancedProgressTracker from "@/components/EnhancedProgressTracker";
import EnhancedLoadingBar from "@/components/EnhancedLoadingBar";
import { useSettings } from "@/hooks/useSettings";
import { useExerciseStats } from "@/hooks/useExerciseStats";

const Index = () => {
  const { settings } = useSettings();
  const { getTotalStats } = useExerciseStats();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading with progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          setIsLoading(false);
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const totalStats = getTotalStats();

  const subjects = [
    {
      id: "math",
      name: "Mathématiques",
      nameArabic: "الرياضيات",
      description: "Algèbre, géométrie, statistiques et analyse mathématique pour le tronc commun scientifique.",
      icon: <Calculator className="text-blue-600" />,
      color: "text-blue-600",
      bgGradient: "from-blue-500 to-blue-700",
      lessons: 15,
      exercises: 25,
      duration: "6-8h",
      difficulty: "Moyen" as const,
      path: "math",
      isNew: true,
      featured: true
    },
    {
      id: "physics",
      name: "Physique Chimie",
      nameArabic: "الفيزياء والكيمياء",
      description: "Mécanique, électricité, chimie générale et quantitative adaptées au programme marocain.",
      icon: <Atom className="text-emerald-600" />,
      color: "text-emerald-600",
      bgGradient: "from-emerald-500 to-emerald-700",
      lessons: 23,
      exercises: 30,
      duration: "8-10h",
      difficulty: "Difficile" as const,
      path: "physics",
      featured: true
    },
    {
      id: "svt",
      name: "Sciences de la Vie et de la Terre",
      nameArabic: "علوم الحياة والأرض",
      description: "Biologie, géologie et écologie selon le curriculum du tronc commun scientifique.",
      icon: <Leaf className="text-green-600" />,
      color: "text-green-600",
      bgGradient: "from-green-500 to-green-700",
      lessons: 12,
      exercises: 20,
      duration: "5-7h",
      difficulty: "Moyen" as const,
      path: "svt"
    },
    {
      id: "french",
      name: "Français",
      nameArabic: "اللغة الفرنسية",
      description: "Littérature, grammaire et expression écrite adaptées au niveau lycée.",
      icon: <BookOpen className="text-red-600" />,
      color: "text-red-600",
      bgGradient: "from-red-500 to-red-700",
      lessons: 18,
      exercises: 22,
      duration: "6-8h",
      difficulty: "Moyen" as const,
      path: "french"
    },
    {
      id: "english",
      name: "English",
      nameArabic: "اللغة الإنجليزية",
      description: "Grammar, vocabulary, reading comprehension and communication skills.",
      icon: <Languages className="text-purple-600" />,
      color: "text-purple-600",
      bgGradient: "from-purple-500 to-purple-700",
      lessons: 16,
      exercises: 24,
      duration: "5-6h",
      difficulty: "Facile" as const,
      path: "english"
    },
    {
      id: "arabic",
      name: "اللغة العربية",
      nameArabic: "اللغة العربية",
      description: "النصوص الأدبية، القواعد النحوية والتعبير والإنشاء حسب المنهاج المغربي.",
      icon: <MessageSquare className="text-amber-600" />,
      color: "text-amber-600",
      bgGradient: "from-amber-500 to-amber-700",
      lessons: 14,
      exercises: 18,
      duration: "6-7h",
      difficulty: "Moyen" as const,
      path: "arabic"
    },
    {
      id: "histoire-geo",
      name: "التاريخ والجغرافيا",
      nameArabic: "التاريخ والجغرافيا",
      description: "تاريخ المغرب والعالم، الجغرافيا البشرية والطبيعية وفق المقرر الدراسي.",
      icon: <Globe className="text-orange-600" />,
      color: "text-orange-600",
      bgGradient: "from-orange-500 to-orange-700",
      lessons: 26,
      exercises: 20,
      duration: "7-9h",
      difficulty: "Difficile" as const,
      path: "histoire-geo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <EnhancedLoadingBar 
        isLoading={isLoading} 
        progress={loadingProgress}
        message="Chargement de la plateforme éducative..."
        color="blue"
      />
      
      <GlobalHeader />
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4 py-8 space-y-12">
              {/* Welcome Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <WelcomeBanner />
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <QuickStats
                  totalLessons={totalStats.totalLessons}
                  completedLessons={totalStats.coursesCompleted}
                  totalStudyTime={totalStats.totalStudyTime}
                  currentStreak={totalStats.streak}
                  averageScore={totalStats.averageScore}
                  weeklyGoal={totalStats.weeklyGoal}
                />
              </motion.div>

              {/* Progress Tracker */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-600" />
                    Votre Progression
                  </h2>
                  <p className="text-muted-foreground">
                    Suivez vos progrès dans toutes les matières
                  </p>
                </div>
                <EnhancedProgressTracker />
              </motion.div>

              {/* Subjects Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    Matières Disponibles
                  </h2>
                  <p className="text-muted-foreground">
                    Explorez toutes les matières du programme du tronc commun scientifique
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subjects.map((subject, index) => (
                    <motion.div
                      key={subject.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <EnhancedSubjectCard 
                        subject={subject} 
                        index={index}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <StatsOverview />
              </motion.div>
            </div>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
