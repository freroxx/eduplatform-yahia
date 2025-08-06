
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Zap, Leaf, PenTool, Globe, MapPin, Users, Target, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GlobalHeader from "@/components/GlobalHeader";
import QuickStats from "@/components/QuickStats";
import ProgressTracker from "@/components/ProgressTracker";
import EnhancedSubjectCard from "@/components/EnhancedSubjectCard";
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
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          setIsLoading(false);
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const totalStats = getTotalStats();

  const subjects = [
    {
      id: "math",
      name: "Mathématiques",
      nameArabic: "الرياضيات",
      description: "Algèbre, géométrie, analyse et statistiques pour renforcer votre logique mathématique.",
      icon: <Calculator className="text-blue-600" />,
      color: "text-blue-600",
      bgGradient: "from-blue-500 via-blue-600 to-blue-700",
      lessons: 12,
      exercises: 45,
      duration: "3h 30min",
      difficulty: "Moyen" as const,
      path: "math",
      featured: true
    },
    {
      id: "physics",
      name: "Physique",
      nameArabic: "الفيزياء",
      description: "Mécanique, électricité, optique et thermodynamique pour comprendre les lois de la nature.",
      icon: <Zap className="text-emerald-600" />,
      color: "text-emerald-600",
      bgGradient: "from-emerald-500 via-emerald-600 to-emerald-700",
      lessons: 10,
      exercises: 38,
      duration: "4h 15min",
      difficulty: "Difficile" as const,
      path: "physics",
      isNew: true
    },
    {
      id: "svt",
      name: "Sciences de la Vie et de la Terre",
      nameArabic: "علوم الحياة والأرض",
      description: "Biologie, géologie et environnement pour explorer le monde vivant qui nous entoure.",
      icon: <Leaf className="text-green-600" />,
      color: "text-green-600",
      bgGradient: "from-green-500 via-green-600 to-green-700",
      lessons: 8,
      exercises: 32,
      duration: "3h 45min",
      difficulty: "Moyen" as const,
      path: "svt"
    },
    {
      id: "french",
      name: "Français",
      nameArabic: "اللغة الفرنسية",
      description: "Littérature, expression écrite et analyse de textes pour maîtriser la langue de Molière.",
      icon: <PenTool className="text-red-600" />,
      color: "text-red-600",
      bgGradient: "from-red-500 via-red-600 to-red-700",
      lessons: 6,
      exercises: 28,
      duration: "2h 50min",
      difficulty: "Moyen" as const,
      path: "french"
    },
    {
      id: "english",
      name: "English",
      nameArabic: "اللغة الإنجليزية",
      description: "Grammar, vocabulary, and communication skills for global opportunities.",
      icon: <Globe className="text-blue-500" />,
      color: "text-blue-500",
      bgGradient: "from-blue-400 via-cyan-500 to-teal-600",
      lessons: 8,
      exercises: 35,
      duration: "3h 20min",
      difficulty: "Facile" as const,
      path: "english"
    },
    {
      id: "arabic",
      name: "العربية",
      nameArabic: "اللغة العربية",
      description: "البلاغة والنحو والأدب العربي لتعميق فهم لغة الضاد.",
      icon: <BookOpen className="text-orange-600" />,
      color: "text-orange-600",
      bgGradient: "from-orange-500 via-amber-600 to-yellow-600",
      lessons: 7,
      exercises: 30,
      duration: "3h 10min",
      difficulty: "Moyen" as const,
      path: "arabic"
    },
    {
      id: "histoire-geo",
      name: "Histoire-Géographie",
      nameArabic: "التاريخ والجغرافيا",
      description: "Histoire du monde et géographie physique et humaine pour comprendre notre planète.",
      icon: <MapPin className="text-purple-600" />,
      color: "text-purple-600",
      bgGradient: "from-purple-500 via-indigo-600 to-blue-600",
      lessons: 9,
      exercises: 33,
      duration: "4h 00min",
      difficulty: "Moyen" as const,
      path: "histoire-geo"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 flex items-center justify-center">
        <EnhancedLoadingBar progress={loadingProgress} />
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen transition-all duration-500 ${
        settings?.animatedBackground ? 'animated-bg' : 'bg-gradient-to-br from-background via-secondary/30 to-accent/20'
      }`}
    >
      <GlobalHeader />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 animate-pulse-subtle">
            <Star className="h-4 w-4 text-primary animate-spin-slow" />
            <span className="text-sm font-medium text-primary">Plateforme éducative avancée</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
            EduLearn Pro
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Votre parcours d'apprentissage personnalisé pour exceller dans toutes les matières du Tronc Commun Sciences
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <Target className="h-4 w-4 text-green-600" />
              <span>+1000 exercices</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <Users className="h-4 w-4 text-blue-600" />
              <span>+5000 étudiants</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              <TrendingUp className="h-4 w-4 text-purple-600" />
              <span>Progression garantie</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
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

            {/* Subjects Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Matières disponibles</h2>
                <Badge variant="outline" className="bg-card/80 backdrop-blur-sm">
                  {subjects.length} matières
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
                {subjects.map((subject, index) => (
                  <EnhancedSubjectCard key={subject.id} subject={subject} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Tracker */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <EnhancedProgressTracker />
            </motion.div>

            {/* Legacy Progress Tracker */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <ProgressTracker />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
