
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Atom, Languages, Globe, Dna, FileText, Brain, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import WelcomeBanner from "@/components/WelcomeBanner";
import StatsOverview from "@/components/StatsOverview";
import EnhancedProgressTracker from "@/components/EnhancedProgressTracker";
import MotivationalQuoteBar from "@/components/MotivationalQuoteBar";
import { useProgressTracker } from "@/hooks/useProgressTracker";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const { getTotalProgress } = useProgressTracker();
  const totalProgress = getTotalProgress();

  useEffect(() => {
    setMounted(true);
  }, []);

  const subjects = [
    {
      id: "math",
      title: "Mathématiques",
      description: "Algèbre, géométrie, analyse et statistiques pour le tronc commun sciences",
      icon: Calculator,
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      lessons: 15,
      path: "/math",
      badge: "Complet",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300"
    },
    {
      id: "physics",
      title: "Physique-Chimie",
      description: "Mécanique, électricité, chimie et thermodynamique",
      icon: Atom,
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      lessons: 23,
      path: "/physics",
      badge: "Complet",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300"
    },
    {
      id: "french",
      title: "Français",
      description: "Littérature, grammaire et expression écrite",
      icon: FileText,
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800",
      lessons: 12,
      path: "/french",
      badge: "Disponible",
      badgeColor: "bg-green-100 text-green-800 border-green-300"
    },
    {
      id: "english",
      title: "Anglais",
      description: "Grammaire, vocabulaire et communication",
      icon: Languages,
      color: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      lessons: 10,
      path: "/english",
      badge: "Disponible",
      badgeColor: "bg-orange-100 text-orange-800 border-orange-300"
    },
    {
      id: "arabic",
      title: "العربية",
      description: "اللغة العربية والأدب والنحو",
      icon: Globe,
      color: "from-teal-500 to-teal-700",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
      borderColor: "border-teal-200 dark:border-teal-800",
      lessons: 8,
      path: "/arabic",
      badge: "Disponible",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-300"
    },
    {
      id: "svt",
      title: "SVT",
      description: "Sciences de la Vie et de la Terre",
      icon: Dna,
      color: "from-emerald-500 to-emerald-700",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      lessons: 14,
      path: "/svt",
      badge: "Bientôt",
      badgeColor: "bg-gray-100 text-gray-800 border-gray-300"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10"
    >
      <GlobalHeader />
      
      <main className="container mx-auto px-4 py-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <WelcomeBanner />
          <MotivationalQuoteBar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <StatsOverview />
          <EnhancedProgressTracker subject="Général" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-primary" />
            </motion.div>
            <h2 className="text-4xl font-bold text-foreground">
              Choisissez votre matière
            </h2>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Brain className="h-8 w-8 text-primary" />
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explorez nos cours interactifs avec des exercices pratiques et des animations modernes
          </motion.p>
        </motion.div>

        <AnimatePresence>
          {mounted && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {subjects.map((subject) => {
                const Icon = subject.icon;
                return (
                  <motion.div
                    key={subject.id}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -8,
                      scale: 1.03,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group"
                  >
                    <Card className={`h-full ${subject.bgColor} ${subject.borderColor} border-2 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 overflow-hidden relative`}>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${subject.color.split(' ')[1]}, ${subject.color.split(' ')[3]})`
                        }}
                      />
                      
                      <CardHeader className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <motion.div
                            className={`p-3 rounded-xl bg-gradient-to-r ${subject.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="h-8 w-8" />
                          </motion.div>
                          <Badge className={`${subject.badgeColor} border font-medium`}>
                            {subject.badge}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {subject.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed text-muted-foreground">
                          {subject.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <BookOpen className="h-4 w-4" />
                            <span>{subject.lessons} modules</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-green-600">
                            <TrendingUp className="h-4 w-4" />
                            <span>Interactif</span>
                          </div>
                        </div>
                        
                        <Link to={subject.path}>
                          <Button 
                            className={`w-full bg-gradient-to-r ${subject.color} hover:shadow-lg transition-all duration-300 text-white border-0 group-hover:scale-105`}
                            size="lg"
                          >
                            <motion.span
                              initial={{ x: 0 }}
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                              className="flex items-center gap-2"
                            >
                              Commencer
                              <BookOpen className="h-4 w-4" />
                            </motion.span>
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </motion.div>
  );
};

export default Index;
