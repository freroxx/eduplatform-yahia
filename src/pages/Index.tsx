
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
import { WelcomeTutorial } from "@/components/WelcomeTutorial";
import { UserOnboarding } from "@/components/UserOnboarding";

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
      title: "Mathématiques",
      description: "Algèbre, géométrie, analyse et statistiques",
      icon: Calculator,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      darkBgColor: "dark:bg-blue-900/20",
      lessons: 15,
      progress: 65,
      route: "/math"
    },
    {
      id: "physics",
      title: "Physique-Chimie",
      description: "Mécanique, électricité, chimie organique",
      icon: Atom,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      darkBgColor: "dark:bg-purple-900/20",
      lessons: 12,
      progress: 45,
      route: "/physics"
    },
    {
      id: "svt",
      title: "SVT",
      description: "Biologie, géologie et sciences de la terre",
      icon: Leaf,
      color: "text-green-600",
      bgColor: "bg-green-50",
      darkBgColor: "dark:bg-green-900/20",
      lessons: 10,
      progress: 30,
      route: "/svt"
    },
    {
      id: "french",
      title: "Français",
      description: "Littérature, grammaire et expression écrite",
      icon: Book,
      color: "text-red-600",
      bgColor: "bg-red-50",
      darkBgColor: "dark:bg-red-900/20",
      lessons: 14,
      progress: 55,
      route: "/french"
    },
    {
      id: "english",
      title: "Anglais",
      description: "Grammaire, vocabulaire et compréhension",
      icon: Languages,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      darkBgColor: "dark:bg-yellow-900/20",
      lessons: 16,
      progress: 40,
      route: "/english"
    },
    {
      id: "arabic",
      title: "العربية",
      description: "الأدب والنحو والتعبير",
      icon: FileText,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      darkBgColor: "dark:bg-orange-900/20",
      lessons: 13,
      progress: 25,
      route: "/arabic"
    },
    {
      id: "histoire-geo",
      title: "Histoire-Géographie",
      description: "Histoire mondiale et géographie physique",
      icon: Globe,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      darkBgColor: "dark:bg-cyan-900/20",
      lessons: 11,
      progress: 50,
      route: "/histoire-geo"
    }
  ];

  const quickActions = [
    { icon: BookOpen, title: "Cours récents", description: "Reprendre où vous vous êtes arrêté", link: "/math" },
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
              <SearchBar />
              
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
                        subject={subject.title}
                        description={subject.description}
                        icon={subject.icon}
                        color={subject.color}
                        bgColor={subject.bgColor}
                        darkBgColor={subject.darkBgColor}
                        lessons={subject.lessons.toString()}
                        progress={subject.progress.toString()}
                        route={subject.route}
                        className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
              <QuickStats />

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
