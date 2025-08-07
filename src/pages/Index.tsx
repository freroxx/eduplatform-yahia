
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import ProgressTracker from "@/components/ProgressTracker";
import UserOnboarding from "@/components/UserOnboarding";
import WelcomeTutorial from "@/components/WelcomeTutorial";
import EnhancedLoadingBar from "@/components/EnhancedLoadingBar";
import EnhancedSubjectCard from "@/components/EnhancedSubjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSettings } from "@/hooks/useSettings";
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  TrendingUp,
  Sparkles,
  Target,
  Calendar,
  Users,
  Award
} from "lucide-react";

const subjects = [
  {
    id: 'math',
    title: 'Mathématiques',
    description: 'Algèbre, géométrie, analyse et statistiques',
    icon: 'calculator',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-100',
    darkBgColor: 'from-blue-900/20 to-indigo-900/20',
    lessons: 15,
    progress: 45,
    link: '/lessons/math'
  },
  {
    id: 'physics',
    title: 'Physique-Chimie',
    description: 'Mécanique, électricité, chimie générale',
    icon: 'atom',
    color: 'from-emerald-500 to-green-600',
    bgColor: 'from-emerald-50 to-green-100',
    darkBgColor: 'from-emerald-900/20 to-green-900/20',
    lessons: 12,
    progress: 30,
    link: '/lessons/physics'
  },
  {
    id: 'svt',
    title: 'Sciences de la Vie et de la Terre',
    description: 'Biologie, géologie et environnement',
    icon: 'microscope',
    color: 'from-green-500 to-teal-600',
    bgColor: 'from-green-50 to-teal-100',
    darkBgColor: 'from-green-900/20 to-teal-900/20',
    lessons: 10,
    progress: 25,
    link: '/lessons/svt'
  },
  {
    id: 'french',
    title: 'Français',
    description: 'Littérature, grammaire et expression écrite',
    icon: 'book-open',
    color: 'from-red-500 to-pink-600',
    bgColor: 'from-red-50 to-pink-100',
    darkBgColor: 'from-red-900/20 to-pink-900/20',
    lessons: 8,
    progress: 60,
    link: '/lessons/french'
  },
  {
    id: 'english',
    title: 'Anglais',
    description: 'Grammar, vocabulary and communication',
    icon: 'globe',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'from-purple-50 to-violet-100',
    darkBgColor: 'from-purple-900/20 to-violet-900/20',
    lessons: 10,
    progress: 40,
    link: '/lessons/english'
  },
  {
    id: 'arabic',
    title: 'اللغة العربية',
    description: 'القواعد والأدب والتعبير والإملاء',
    icon: 'book-text',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'from-amber-50 to-orange-100',
    darkBgColor: 'from-amber-900/20 to-orange-900/20',
    lessons: 9,
    progress: 35,
    link: '/lessons/arabic'
  },
  {
    id: 'history-geo',
    title: 'Histoire-Géographie',
    description: 'Histoire contemporaine et géographie mondiale',
    icon: 'map',
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'from-indigo-50 to-purple-100',
    darkBgColor: 'from-indigo-900/20 to-purple-900/20',
    lessons: 11,
    progress: 20,
    link: '/lessons/histoire-geo'
  }
];

const Index = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { settings } = useSettings();

  useEffect(() => {
    // Loading simulation
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          setIsLoading(false);
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 100);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Check if user has seen onboarding
      const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
      const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
      
      if (!hasSeenOnboarding) {
        setShowOnboarding(true);
      } else if (!hasSeenTutorial) {
        setShowTutorial(true);
      }
    }
  }, [isLoading]);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    setShowTutorial(true);
  };

  const handleTutorialComplete = () => {
    localStorage.setItem('hasSeenTutorial', 'true');
    setShowTutorial(false);
  };

  const totalStats = {
    coursesCompleted: subjects.reduce((acc, subject) => acc + Math.floor(subject.lessons * subject.progress / 100), 0),
    totalCourses: subjects.reduce((acc, subject) => acc + subject.lessons, 0),
    totalPoints: subjects.reduce((acc, subject) => acc + subject.lessons * 10, 0),
    earnedPoints: subjects.reduce((acc, subject) => acc + Math.floor(subject.lessons * subject.progress / 100) * 10, 0),
    totalStudyTime: 180
  };

  const averageProgress = Math.round(subjects.reduce((acc, subject) => acc + subject.progress, 0) / subjects.length);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 flex items-center justify-center">
        <EnhancedLoadingBar 
          isLoading={isLoading}
          progress={loadingProgress}
          message="Chargement d'EduLearn Pro..."
          color="blue"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <GlobalHeader />

      {/* Loading bar at top */}
      <EnhancedLoadingBar 
        isLoading={false}
        progress={averageProgress}
        message="Progression globale"
        showPercentage={true}
        color="blue"
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 shadow-lg"
            >
              <Sparkles className="h-4 w-4" />
              EduLearn Pro v4.5
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Nouveau
              </Badge>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
          >
            Votre réussite académique
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Plateforme d'apprentissage moderne pour le <strong>Tronc Commun Sciences</strong>. 
            Cours interactifs, exercices corrigés et suivi personnalisé.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-blue-200 dark:border-blue-800">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">{totalStats.totalCourses}</div>
                <div className="text-sm text-muted-foreground">Cours disponibles</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border-green-200 dark:border-green-800">
              <CardContent className="p-6 text-center">
                <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">{totalStats.earnedPoints}</div>
                <div className="text-sm text-muted-foreground">Points obtenus</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/10 dark:to-violet-900/10 border-purple-200 dark:border-purple-800">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">{Math.floor(totalStats.totalStudyTime / 60)}h{totalStats.totalStudyTime % 60}min</div>
                <div className="text-sm text-muted-foreground">Temps d'étude</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 border-orange-200 dark:border-orange-800">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">{averageProgress}%</div>
                <div className="text-sm text-muted-foreground">Progression moyenne</div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content - Subjects Grid */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    Mes Matières
                  </h2>
                  <p className="text-muted-foreground">
                    Choisissez une matière pour commencer votre apprentissage
                  </p>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {subjects.length} matières
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence>
                  {subjects.map((subject, index) => (
                    <motion.div
                      key={subject.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link to={subject.link}>
                        <EnhancedSubjectCard
                          title={subject.title}
                          description={subject.description}
                          icon={subject.icon}
                          color={subject.color}
                          bgColor={subject.bgColor}
                          darkBgColor={subject.darkBgColor}
                          lessons={subject.lessons}
                          progress={subject.progress}
                          className="hover-lift"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <ProgressTracker 
                subject="Vue d'ensemble"
                totalLessons={totalStats.totalCourses}
                completedLessons={totalStats.coursesCompleted}
                totalPoints={totalStats.totalPoints}
                earnedPoints={totalStats.earnedPoints}
                studyTime={`${Math.floor(totalStats.totalStudyTime / 60)}h ${totalStats.totalStudyTime % 60}min`}
              />
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
            >
              <Card className="glass-effect hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Actions Rapides
                  </h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setShowTutorial(true)}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Revoir le tutoriel
                    </Button>
                    <Link to="/settings" className="block">
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="h-4 w-4 mr-2" />
                        Programmer l'étude
                      </Button>
                    </Link>
                    <Link to="/stats" className="block">
                      <Button variant="outline" className="w-full justify-start">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Voir mes statistiques
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {showOnboarding && (
          <UserOnboarding onComplete={handleOnboardingComplete} />
        )}
        {showTutorial && (
          <WelcomeTutorial onComplete={handleTutorialComplete} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
