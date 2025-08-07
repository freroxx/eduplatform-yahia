import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, Calculator, FlaskConical, Dna, Globe, Languages, PenTool, Sparkles, TrendingUp, Users, Clock, BookOpen } from 'lucide-react';
import GlobalHeader from '@/components/GlobalHeader';
import EnhancedSubjectCard from '@/components/EnhancedSubjectCard';
import QuickStats from '@/components/QuickStats';
import ProgressTracker from '@/components/ProgressTracker';
import WelcomeBanner from '@/components/WelcomeBanner';
import UserOnboarding from '@/components/UserOnboarding';
import WelcomeTutorial from '@/components/WelcomeTutorial';
import EnhancedLoadingBar from '@/components/EnhancedLoadingBar';
import { useSettings } from '@/hooks/useSettings';
import { useExerciseStats } from '@/hooks/useExerciseStats';

const subjects = [
  {
    id: 'math',
    name: 'Mathématiques',
    nameArabic: 'الرياضيات',
    description: 'Algèbre, géométrie, analyse et statistiques pour développer votre raisonnement logique.',
    icon: <Calculator className="h-6 w-6" />,
    color: '#3B82F6',
    bgGradient: 'from-blue-500 to-blue-600',
    lessons: 15,
    exercises: 120,
    duration: '25h',
    difficulty: 'Moyen' as const,
    path: 'math',
    featured: true
  },
  {
    id: 'physics',
    name: 'Physique-Chimie',
    nameArabic: 'الفيزياء والكيمياء',
    description: 'Découvrez les lois de la nature et les réactions chimiques qui nous entourent.',
    icon: <FlaskConical className="h-6 w-6" />,
    color: '#10B981',
    bgGradient: 'from-emerald-500 to-emerald-600',
    lessons: 12,
    exercises: 90,
    duration: '20h',
    difficulty: 'Difficile' as const,
    path: 'physics'
  },
  {
    id: 'svt',
    name: 'Sciences de la Vie et de la Terre',
    nameArabic: 'علوم الحياة والأرض',
    description: 'Explorez le monde vivant et les phénomènes terrestres.',
    icon: <Dna className="h-6 w-6" />,
    color: '#059669',
    bgGradient: 'from-green-500 to-green-600',
    lessons: 10,
    exercises: 75,
    duration: '18h',
    difficulty: 'Moyen' as const,
    path: 'svt'
  },
  {
    id: 'french',
    name: 'Français',
    nameArabic: 'الفرنسية',
    description: 'Maîtrisez la langue française, la littérature et l\'expression écrite.',
    icon: <Book className="h-6 w-6" />,
    color: '#8B5CF6',
    bgGradient: 'from-purple-500 to-purple-600',
    lessons: 14,
    exercises: 85,
    duration: '22h',
    difficulty: 'Moyen' as const,
    path: 'french'
  },
  {
    id: 'english',
    name: 'Anglais',
    nameArabic: 'الإنجليزية',
    description: 'Développez vos compétences en anglais pour communiquer efficacement.',
    icon: <Languages className="h-6 w-6" />,
    color: '#EF4444',
    bgGradient: 'from-red-500 to-red-600',
    lessons: 12,
    exercises: 80,
    duration: '20h',
    difficulty: 'Facile' as const,
    path: 'english',
    isNew: true
  },
  {
    id: 'arabic',
    name: 'Arabe',
    nameArabic: 'العربية',
    description: 'Approfondissez votre maîtrise de la langue arabe et de sa richesse littéraire.',
    icon: <PenTool className="h-6 w-6" />,
    color: '#F59E0B',
    bgGradient: 'from-amber-500 to-amber-600',
    lessons: 11,
    exercises: 70,
    duration: '18h',
    difficulty: 'Moyen' as const,
    path: 'arabic'
  },
  {
    id: 'histoire-geo',
    name: 'Histoire-Géographie',
    nameArabic: 'التاريخ والجغرافيا',
    description: 'Comprenez l\'évolution des civilisations et la géographie du monde.',
    icon: <Globe className="h-6 w-6" />,
    color: '#8B5CF6',
    bgGradient: 'from-indigo-500 to-indigo-600',
    lessons: 13,
    exercises: 65,
    duration: '19h',
    difficulty: 'Facile' as const,
    path: 'histoire-geo'
  }
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const { settings } = useSettings();
  const { getTotalStats } = useExerciseStats();

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
    if (!hasSeenTutorial) {
      setShowTutorial(true);
    }
  }, []);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
    }

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
    }, 100);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    localStorage.setItem('hasSeenOnboarding', 'true');
    setShowTutorial(true);
  };

  const stats = getTotalStats();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 flex items-center justify-center">
        <EnhancedLoadingBar 
          isLoading={isLoading}
          progress={loadingProgress}
          message="Chargement de votre plateforme d'apprentissage..."
          color="blue"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen ${
        settings.animatedBackgrounds 
          ? 'bg-gradient-to-br from-background via-secondary/30 to-accent/20' 
          : 'bg-background'
      }`}
    >
      <GlobalHeader />
      
      <main className="container mx-auto px-4 pt-20 pb-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <WelcomeBanner />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8"
        >
          <QuickStats
            totalLessons={stats.totalLessons}
            completedLessons={stats.coursesCompleted}
            totalStudyTime={stats.totalStudyTime}
            currentStreak={stats.streak}
            averageScore={stats.averageScore}
            weeklyGoal={stats.weeklyGoal}
          />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <ProgressTracker
            totalLessons={stats.totalLessons}
            completedLessons={stats.coursesCompleted}
            totalPoints={stats.totalPoints}
            earnedPoints={stats.totalPoints}
            studyTime={stats.totalStudyTime}
          />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <Sparkles className="h-4 w-4" />
              Tronc Commun Sciences
            </motion.div>
            
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Votre Plateforme d'Apprentissage
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Découvrez nos cours interactifs, exercices pratiques et ressources pédagogiques 
              adaptés au programme marocain du Tronc Commun Sciences.
            </p>

            <div className="flex justify-center space-x-8 text-sm text-muted-foreground mb-12">
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>7 Matières</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>87 Leçons</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>142h+ de contenu</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                <span>Suivi des progrès</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {subjects.map((subject, index) => (
              <EnhancedSubjectCard
                key={subject.id}
                subject={subject}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </main>

      {showOnboarding && (
        <UserOnboarding onComplete={handleOnboardingComplete} />
      )}

      {showTutorial && (
        <WelcomeTutorial onComplete={() => setShowTutorial(false)} />
      )}
    </motion.div>
  );
};

export default Index;
