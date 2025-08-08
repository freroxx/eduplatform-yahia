import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Calculator, Atom, Leaf, Globe, Languages, FileText, BookOpen, Users, Sparkles, Target, Clock, Star, TrendingUp, BarChart3, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import EnhancedGlobalHeader from "@/components/EnhancedGlobalHeader";
import SearchBar from "@/components/SearchBar";
import WelcomeBanner from "@/components/WelcomeBanner";
import QuickStats from "@/components/QuickStats";
import EnhancedSubjectCard from "@/components/EnhancedSubjectCard";
import Footer from "@/components/Footer";
import WelcomeTutorial from "@/components/WelcomeTutorial";
import UserOnboarding from "@/components/UserOnboarding";
import ChangelogDialog from "@/components/ChangelogDialog";
import EasterEggModal from "@/components/EasterEggModal";
import PictureInPictureMusic from "@/components/PictureInPictureMusic";
import { useThemeEasterEgg } from "@/hooks/useThemeEasterEgg";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showChangelog, setShowChangelog] = useState(false);
  const [showPipMusic, setShowPipMusic] = useState(() => {
    return localStorage.getItem('pipMusicVisible') === 'true';
  });
  
  const { handleThemeChange, showEasterEgg, closeEasterEgg } = useThemeEasterEgg();

  useEffect(() => {
    // Check for new users or reset data
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
    const currentVersion = '5.5';
    const lastSeenVersion = localStorage.getItem('lastSeenVersion');
    
    console.log('Checking onboarding status:', { hasSeenOnboarding, hasSeenTutorial, lastSeenVersion });
    
    if (!hasSeenOnboarding || hasSeenOnboarding === 'false') {
      console.log('Showing onboarding for new user');
      setShowOnboarding(true);
    } else if (!hasSeenTutorial || hasSeenTutorial === 'false') {
      console.log('Showing tutorial for returning user');
      setShowTutorial(true);
    } else if (lastSeenVersion !== currentVersion) {
      console.log('Showing changelog for version update');
      setShowChangelog(true);
      localStorage.setItem('lastSeenVersion', currentVersion);
    }
  }, []);

  const handleOnboardingComplete = () => {
    console.log('Onboarding completed');
    localStorage.setItem('hasSeenOnboarding', 'true');
    setShowOnboarding(false);
    setShowTutorial(true);
  };

  const handleTutorialComplete = () => {
    console.log('Tutorial completed');
    localStorage.setItem('hasSeenTutorial', 'true');
    setShowTutorial(false);
  };

  const subjects = [
    {
      id: "math",
      name: "Mathématiques",
      nameArabic: "الرياضيات",
      description: "Algèbre, géométrie, analyse et statistiques",
      icon: <Calculator className="h-6 w-6" />,
      color: "#3B82F6",
      bgGradient: "from-blue-500 to-indigo-600",
      lessons: 15,
      exercises: 120,
      duration: "20h",
      difficulty: "Moyen" as const,
      path: "math",
      featured: true
    },
    {
      id: "physics",
      name: "Physique-Chimie",
      nameArabic: "الفيزياء والكيمياء",
      description: "Mécanique, électricité, chimie organique",
      icon: <Atom className="h-6 w-6" />,
      color: "#8B5CF6",
      bgGradient: "from-purple-500 to-violet-600",
      lessons: 23,
      exercises: 180,
      duration: "25h",
      difficulty: "Difficile" as const,
      path: "physics"
    },
    {
      id: "svt",
      name: "SVT",
      nameArabic: "علوم الحياة والأرض",
      description: "Écologie et biologie végétale",
      icon: <Leaf className="h-6 w-6" />,
      color: "#10B981",
      bgGradient: "from-green-500 to-emerald-600",
      lessons: 11,
      exercises: 85,
      duration: "16h",
      difficulty: "Facile" as const,
      path: "svt",
      isNew: true
    },
    {
      id: "french",
      name: "Français",
      nameArabic: "الفرنسية",
      description: "Littérature, grammaire et expression écrite",
      icon: <Book className="h-6 w-6" />,
      color: "#EF4444",
      bgGradient: "from-red-500 to-rose-600",
      lessons: 14,
      exercises: 85,
      duration: "16h",
      difficulty: "Moyen" as const,
      path: "french"
    },
    {
      id: "english",
      name: "Anglais",
      nameArabic: "الإنجليزية",
      description: "Grammaire, vocabulaire et compréhension",
      icon: <Languages className="h-6 w-6" />,
      color: "#F59E0B",
      bgGradient: "from-yellow-500 to-orange-600",
      lessons: 16,
      exercises: 95,
      duration: "18h",
      difficulty: "Facile" as const,
      path: "english"
    },
    {
      id: "arabic",
      name: "العربية",
      description: "الأدب والنحو والتعبير",
      icon: <FileText className="h-6 w-6" />,
      color: "#F97316",
      bgGradient: "from-orange-500 to-amber-600",
      lessons: 13,
      exercises: 70,
      duration: "14h",
      difficulty: "Moyen" as const,
      path: "arabic"
    },
    {
      id: "histoire-geo",
      name: "Histoire-Géographie",
      nameArabic: "التاريخ والجغرافيا",
      description: "Histoire mondiale et géographie physique",
      icon: <Globe className="h-6 w-6" />,
      color: "#06B6D4",
      bgGradient: "from-cyan-500 to-teal-600",
      lessons: 11,
      exercises: 65,
      duration: "13h",
      difficulty: "Moyen" as const,
      path: "histoire-geo"
    },
    {
      id: "philosophy",
      name: "Philosophie",
      nameArabic: "الفلسفة",
      description: "Pensée critique, éthique et philosophie islamique",
      icon: <Book className="h-6 w-6" />,
      color: "#6366F1",
      bgGradient: "from-indigo-500 to-purple-600",
      lessons: 15,
      exercises: 45,
      duration: "13h",
      difficulty: "Moyen" as const,
      path: "philosophy",
      isNew: true
    }
  ];

  const quickActions = [
    { icon: BookOpen, title: "Cours récents", description: "Reprendre où vous vous êtes arrêté", link: "/math" },
    { icon: FileText, title: "Exercices", description: "Pratiquer avec des exercices ciblés", link: "/math" },
    { icon: BarChart3, title: "Progrès", description: "Voir vos statistiques d'apprentissage", link: "/settings" },
    { icon: MessageSquare, title: "Assistant IA", description: "Obtenez de l'aide personnalisée", link: "#" }
  ];

  const achievements = [
    { icon: Target, title: "Précision", value: "92%", description: "Taux de réussite moyen", color: "text-green-600" },
    { icon: Clock, title: "Temps d'étude", value: "28h", description: "Cette semaine", color: "text-blue-600" },
    { icon: Star, title: "Badges", value: "15", description: "Objectifs atteints", color: "text-yellow-600" },
    { icon: TrendingUp, title: "Progression", value: "+23%", description: "Ce mois-ci", color: "text-purple-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <>
      {showOnboarding && (
        <UserOnboarding 
          isOpen={showOnboarding}
          onComplete={handleOnboardingComplete}
        />
      )}
      
      {showTutorial && (
        <WelcomeTutorial 
          isOpen={showTutorial}
          onComplete={handleTutorialComplete}
        />
      )}

      {showChangelog && (
        <ChangelogDialog
          open={showChangelog}
          onOpenChange={setShowChangelog}
        />
      )}

      {showEasterEgg && (
        <EasterEggModal 
          isOpen={showEasterEgg}
          onClose={closeEasterEgg}
        />
      )}

      <PictureInPictureMusic 
        isVisible={showPipMusic}
        onToggle={() => {
          setShowPipMusic(!showPipMusic);
          localStorage.setItem('pipMusicVisible', (!showPipMusic).toString());
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen relative"
      >
        <EnhancedGlobalHeader />
        
        <div className="container mx-auto px-4 py-8 space-y-8 relative z-10">
          <motion.div variants={itemVariants}>
            <WelcomeBanner onShowChangelog={() => setShowChangelog(true)} />
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-8">
              <motion.div variants={itemVariants}>
                <SearchBar isOpen={false} onClose={() => {}} />
              </motion.div>
              
              <motion.section
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <motion.h2 
                      className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring" as const, stiffness: 200 }}
                    >
                      EduPlatform v5.5
                    </motion.h2>
                    <p className="text-muted-foreground text-lg">
                      Votre plateforme d'apprentissage nouvelle génération
                    </p>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" as const }}
                  >
                    <Badge variant="secondary" className="text-sm px-4 py-2 glass-effect animate-glow">
                      <Sparkles className="h-4 w-4 mr-2" />
                      {subjects.length} matières disponibles
                    </Badge>
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {subjects.map((subject, index) => (
                    <motion.div
                      key={subject.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      className="transform transition-all duration-300"
                    >
                      <EnhancedSubjectCard
                        subject={subject}
                        index={index}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              <motion.section
                variants={itemVariants}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-foreground">Actions rapides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => (
                    <motion.div
                      key={action.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link to={action.link}>
                        <Card className="cursor-pointer glass-effect hover:shadow-2xl transition-all duration-500 border-0 hover-glow group">
                          <CardContent className="p-6 text-center">
                            <motion.div
                              className="relative"
                              whileHover={{ rotate: 10, scale: 1.1 }}
                              transition={{ type: "spring" as const, stiffness: 400 }}
                            >
                              <action.icon className="h-10 w-10 mx-auto mb-3 text-primary group-hover:text-accent transition-colors duration-300" />
                              <motion.div
                                className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100"
                                transition={{ duration: 0.3 }}
                              />
                            </motion.div>
                            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{action.title}</h3>
                            <p className="text-sm text-muted-foreground">{action.description}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            <div className="w-full lg:w-96 space-y-8">
              <motion.div variants={itemVariants}>
                <QuickStats 
                  totalLessons={112}
                  completedLessons={58}
                  totalStudyTime={28}
                  currentStreak={7}
                  averageScore={92}
                  weeklyGoal={15}
                />
              </motion.div>

              <motion.section
                variants={itemVariants}
                className="space-y-6"
              >
                <h2 className="text-xl font-bold text-foreground">Vos performances</h2>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card className="glass-effect border-0 hover:shadow-xl transition-all duration-500 hover-glow">
                        <CardContent className="p-4 text-center">
                          <motion.div
                            className="relative"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                          >
                            <achievement.icon className={`h-6 w-6 mx-auto mb-2 ${achievement.color}`} />
                          </motion.div>
                          <div className="text-2xl font-bold text-foreground">{achievement.value}</div>
                          <div className="text-xs font-medium text-foreground">{achievement.title}</div>
                          <div className="text-xs text-muted-foreground">{achievement.description}</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              <motion.section
                variants={itemVariants}
                className="space-y-4"
              >
                <Card className="glass-effect border-0 bg-gradient-to-br from-primary/10 to-secondary/10 hover-glow">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring" as const, stiffness: 400 }}
                      className="animate-float"
                    >
                      <Users className="h-10 w-10 mx-auto mb-3 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold mb-2">Communauté</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Rejoignez notre communauté d'étudiants
                    </p>
                    <Button size="sm" className="w-full glass-effect hover:scale-105 transition-transform">
                      Participer
                    </Button>
                  </CardContent>
                </Card>
              </motion.section>
            </div>
          </div>
        </div>

        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
