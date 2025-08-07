import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Calculator, Atom, Leaf, Globe, Languages, FileText, MessageSquare, BarChart3, Clock, Target, Star, TrendingUp, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import SearchBar from "@/components/SearchBar";
import WelcomeBanner from "@/components/WelcomeBanner";
import QuickStats from "@/components/QuickStats";
import EnhancedSubjectCard from "@/components/EnhancedSubjectCard";
import MotivationalQuoteBar from "@/components/MotivationalQuoteBar";
import Footer from "@/components/Footer";
import WelcomeTutorial from "@/components/WelcomeTutorial";
import UserOnboarding from "@/components/UserOnboarding";

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
    
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
    } else if (!hasSeenTutorial) {
      setShowTutorial(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setShowOnboarding(false);
    setShowTutorial(true);
  };

  const handleTutorialComplete = () => {
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
      lessons: 12,
      exercises: 90,
      duration: "18h",
      difficulty: "Difficile" as const,
      path: "physics"
    },
    {
      id: "svt",
      name: "SVT",
      nameArabic: "علوم الحياة والأرض",
      description: "Biologie, géologie et sciences de la terre",
      icon: <Leaf className="h-6 w-6" />,
      color: "#10B981",
      bgGradient: "from-green-500 to-emerald-600",
      lessons: 10,
      exercises: 75,
      duration: "15h",
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
    }
  ];

  const quickActions = [
    { icon: BookOpen, title: "Cours récents", description: "Reprendre où vous vous êtes arrêté", link: "/lessons/math" },
    { icon: FileText, title: "Exercices", description: "Pratiquer avec des exercices ciblés", link: "/math/lesson/1/exercises" },
    { icon: BarChart3, title: "Progrès", description: "Voir vos statistiques d'apprentissage", link: "/settings" },
    { icon: MessageSquare, title: "Assistant IA", description: "Obtenez de l'aide personnalisée", link: "#" }
  ];

  const achievements = [
    { icon: Target, title: "Précision", value: "89%", description: "Taux de réussite moyen" },
    { icon: Clock, title: "Temps d'étude", value: "24h", description: "Cette semaine" },
    { icon: Star, title: "Badges", value: "12", description: "Objectifs atteints" },
    { icon: TrendingUp, title: "Progression", value: "+15%", description: "Ce mois-ci" }
  ];

  const recentActivities = [
    { subject: "Mathématiques", lesson: "Les polynômes", time: "Il y a 2h", progress: 75 },
    { subject: "Physique", lesson: "Électricité", time: "Hier", progress: 60 },
    { subject: "SVT", lesson: "Génétique", time: "Il y a 2 jours", progress: 90 },
  ];

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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20"
      >
        <GlobalHeader />
        
        <div className="container mx-auto px-4 py-8 space-y-8">
          <WelcomeBanner />
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-8">
              <SearchBar isOpen={false} onClose={() => {}} />
              
              <MotivationalQuoteBar />
              
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-foreground">Matières</h2>
                  <Badge variant="secondary" className="text-sm">
                    {subjects.length} matières disponibles
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {subjects.map((subject, index) => (
                    <motion.div
                      key={subject.id}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
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
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-foreground">Actions rapides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => (
                    <motion.div
                      key={action.title}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <Link to={action.link}>
                        <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border-0">
                          <CardContent className="p-6 text-center">
                            <action.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                            <h3 className="font-semibold mb-2">{action.title}</h3>
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
              <QuickStats 
                totalLessons={101}
                completedLessons={45}
                totalStudyTime={24}
                currentStreak={5}
                averageScore={89}
                badgesEarned={12}
              />

              <motion.section
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-bold text-foreground">Vos performances</h2>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <Card className="bg-card/80 backdrop-blur-sm border-0">
                        <CardContent className="p-4 text-center">
                          <achievement.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
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
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-bold text-foreground">Activité récente</h2>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <motion.div
                      key={activity.subject + activity.lesson}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      <Card className="bg-card/80 backdrop-blur-sm border-0">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium text-sm">{activity.subject}</h4>
                              <p className="text-xs text-muted-foreground">{activity.lesson}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {activity.progress}%
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              <motion.section
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="space-y-4"
              >
                <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
                  <CardContent className="p-6 text-center">
                    <Users className="h-10 w-10 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Communauté</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Rejoignez notre communauté d'étudiants
                    </p>
                    <Button size="sm" className="w-full">
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
