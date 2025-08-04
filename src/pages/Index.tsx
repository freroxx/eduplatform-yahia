import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import GlobalHeader from '@/components/GlobalHeader';
import UserOnboarding from '@/components/UserOnboarding';
import WelcomeBanner from '@/components/WelcomeBanner';
import QuickStats from '@/components/QuickStats';
import ProgressTracker from '@/components/ProgressTracker';
import ChangelogDialog from '@/components/ChangelogDialog';
import WelcomeTutorial from '@/components/WelcomeTutorial';
import Footer from '@/components/Footer';
import { useSettings } from '@/hooks/useSettings';
import { BookOpen, Video, FileText, Users, HelpCircle, Sparkles } from 'lucide-react';

const Index = () => {
  const { settings } = useSettings();
  const [showChangelog, setShowChangelog] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  const subjects = [
    {
      name: 'Mathématiques',
      path: '/math',
      lessons: 24,
      description: 'Explorez les concepts fondamentaux des mathématiques avec des leçons interactives et des exercices pratiques.',
      icon: BookOpen,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      name: 'Arabe',
      path: '/arabic',
      lessons: 18,
      description: 'Améliorez vos compétences en arabe avec des modules linguistiques et culturels.',
      icon: FileText,
      color: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      name: 'Histoire-Géographie',
      path: '/history',
      lessons: 32,
      description: 'Découvrez l\'histoire et la géographie du monde à travers des récits captivants et des cartes interactives.',
      icon: Users,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600'
    },
  ];

  useEffect(() => {
    const hasSeenChangelog = localStorage.getItem('hasSeenChangelog_v4.5');
    if (!hasSeenChangelog) {
      setShowChangelog(true);
      localStorage.setItem('hasSeenChangelog_v4.5', 'true');
    }
  }, []);

  if (!settings.hasOnboarded) {
    return <UserOnboarding />;
  }

  return (
    <div className="min-h-screen flex flex-col animated-bg">
      <GlobalHeader />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <WelcomeBanner />
        
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold gradient-text">Matières disponibles</h2>
                <Badge variant="secondary" className="floating-animation">
                  <Sparkles className="h-3 w-3 mr-1" />
                  {subjects.length} matières
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {subjects.map((subject, index) => (
                  <motion.div
                    key={subject.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link to={subject.path}>
                      <Card className="h-full glass-effect hover-lift hover-glow cursor-pointer group">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-xl ${subject.color} text-white group-hover:scale-110 transition-transform`}>
                              <subject.icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-lg">{subject.name}</h3>
                                <Badge variant="outline">{subject.lessons} leçons</Badge>
                              </div>
                              <p className="text-muted-foreground text-sm mb-4">{subject.description}</p>
                              
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <BookOpen className="h-4 w-4 mr-1" />
                                  <span>Cours</span>
                                </div>
                                <div className="flex items-center">
                                  <FileText className="h-4 w-4 mr-1" />
                                  <span>Exercices</span>
                                </div>
                                <div className="flex items-center">
                                  <Video className="h-4 w-4 mr-1" />
                                  <span>Vidéos</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <QuickStats />
            <ProgressTracker />
          </div>
        </div>
      </main>

      <Footer />

      {/* Floating Help Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          onClick={() => setShowTutorial(true)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg hover-lift hover-glow bg-gradient-to-r from-indigo-500 to-purple-600"
        >
          <HelpCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      <ChangelogDialog 
        isOpen={showChangelog} 
        onClose={() => setShowChangelog(false)} 
      />
      
      <WelcomeTutorial 
        isOpen={showTutorial} 
        onClose={() => setShowTutorial(false)} 
      />
    </div>
  );
};

export default Index;
