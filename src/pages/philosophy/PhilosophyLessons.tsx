
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Play, Download, Users, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedGlobalHeader from '@/components/EnhancedGlobalHeader';
import Footer from '@/components/Footer';

const PhilosophyLessons = () => {
  const semester1Lessons = [
    { id: 1, title: 'تقديم عام لمجزوءة الفلسفة', duration: '45 min', difficulty: 'Facile' },
    { id: 2, title: 'نشأة الفلسفة', duration: '50 min', difficulty: 'Moyen' },
    { id: 3, title: 'محطات في تطور الفلسفة', duration: '60 min', difficulty: 'Moyen' },
    { id: 4, title: 'الفلسفة الإسلامية', duration: '55 min', difficulty: 'Moyen' },
    { id: 5, title: 'الفلسفة الغربية المعاصرة', duration: '65 min', difficulty: 'Difficile' },
    { id: 6, title: 'لماذا التفلسف ؟', duration: '40 min', difficulty: 'Facile' },
    { id: 7, title: 'منطق الفلسفة', duration: '50 min', difficulty: 'Difficile' },
    { id: 8, title: 'الفلسفة والقيم', duration: '45 min', difficulty: 'Moyen' }
  ];

  const semester2Lessons = [
    { id: 9, title: 'تقديم عام لمجزوءة الطبيعة والثقافة', duration: '45 min', difficulty: 'Facile' },
    { id: 10, title: 'الإنسان كائن ثقافي', duration: '50 min', difficulty: 'Moyen' },
    { id: 11, title: 'الإنسان كائن لغوي', duration: '55 min', difficulty: 'Moyen' },
    { id: 12, title: 'المؤسسة كمظهر من مظاهر الثقافة', duration: '60 min', difficulty: 'Moyen' },
    { id: 13, title: 'التمييز بين الطبيعة والثقافة', duration: '50 min', difficulty: 'Difficile' },
    { id: 14, title: 'الطبيعة والنشاط الإنساني', duration: '55 min', difficulty: 'Moyen' },
    { id: 15, title: 'من السيطرة على الطبيعة إلى الانسجام معها', duration: '65 min', difficulty: 'Difficile' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-100 text-green-800 border-green-200';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Difficile': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const LessonCard = ({ lesson, semesterTitle }: { lesson: any; semesterTitle: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group"
    >
      <Card className="glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 group-hover:from-indigo-500/10 group-hover:to-purple-600/10 transition-all duration-500" />
        
        <CardHeader className="pb-3 relative z-10">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="h-5 w-5" />
            </div>
            <Badge className={`${getDifficultyColor(lesson.difficulty)} font-medium border`}>
              <Target className="h-3 w-3 mr-1" />
              {lesson.difficulty}
            </Badge>
          </div>
          
          <CardTitle className="text-lg font-bold text-card-foreground group-hover:text-indigo-600 transition-colors duration-300 text-right leading-relaxed">
            {lesson.title}
          </CardTitle>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{lesson.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>Philosophie</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 relative z-10">
          <div className="grid grid-cols-3 gap-2 mb-4">
            <Link to={`/philosophy/lesson/${lesson.id}/course`}>
              <Button size="sm" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <BookOpen className="h-3 w-3 mr-1" />
                Cours
              </Button>
            </Link>
            <Link to={`/philosophy/lesson/${lesson.id}/exercises`}>
              <Button size="sm" variant="outline" className="w-full hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300 transition-all duration-300 hover:scale-105">
                <FileText className="h-3 w-3 mr-1" />
                Exercices
              </Button>
            </Link>
            <Link to={`/philosophy/lesson/${lesson.id}/videos`}>
              <Button size="sm" variant="outline" className="w-full hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-all duration-300 hover:scale-105">
                <Play className="h-3 w-3 mr-1" />
                Vidéos
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      <EnhancedGlobalHeader />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Philosophie
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explorez les grandes questions de l'humanité à travers l'histoire de la pensée philosophique
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Badge variant="secondary" className="px-4 py-2">
              <BookOpen className="h-4 w-4 mr-2" />
              15 leçons complètes
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              ~13 heures de contenu
            </Badge>
          </div>
        </motion.div>

        <div className="space-y-12">
          {/* Semester 1 */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                1
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">الدورة الأولى</h2>
                <p className="text-muted-foreground">أسس الفلسفة والتفكير النقدي</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {semester1Lessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <LessonCard lesson={lesson} semesterTitle="الدورة الأولى" />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Semester 2 */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                2
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">الدورة الثانية</h2>
                <p className="text-muted-foreground">الطبيعة والثقافة والإنسان</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {semester2Lessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <LessonCard lesson={lesson} semesterTitle="الدورة الثانية" />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PhilosophyLessons;
