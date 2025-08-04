import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Users, Award, Play, FileText, Video, Calendar, Clock, Target, Sparkles, BarChart3, PenTool, Atom, Microscope, Globe, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import UserOnboarding from "@/components/UserOnboarding";
import GlobalHeader from "@/components/GlobalHeader";
import ChangelogDialog from "@/components/ChangelogDialog";
import WelcomeBanner from "@/components/WelcomeBanner";
import { useSettings } from "@/hooks/useSettings";
import { useState } from "react";

const Index = () => {
  const { settings } = useSettings();
  const [showChangelog, setShowChangelog] = useState(false);

  const subjects = [
    { 
      title: "Mathématiques", 
      description: "Découvrez l'algèbre, la géométrie et l'analyse avec des cours progressifs et des exercices interactifs adaptés au niveau Tronc Commun.",
      icon: BookOpen,
      color: "indigo",
      lessons: 15,
      link: "/lessons/math"
    },
    { 
      title: "Physique Chimie", 
      description: "Découvrez les lois de la physique et les secrets de la chimie avec des expériences virtuelles et des animations interactives.",
      icon: Atom,
      color: "emerald",
      lessons: 23,
      link: "/lessons/physics"
    },
    { 
      title: "SVT", 
      description: "Explorez les sciences de la vie et de la terre avec des études de cas réels et des observations écologiques détaillées.",
      icon: Microscope,
      color: "green",
      lessons: 11,
      link: "/lessons/svt"
    },
    { 
      title: "Français", 
      description: "Maîtrisez la langue française avec des modules sur la typologie textuelle, la nouvelle réaliste et fantastique, et le théâtre.",
      icon: PenTool,
      color: "red",
      lessons: 4,
      link: "/lessons/french"
    },
    { 
      title: "العربية", 
      description: "تعلم اللغة العربية مع دروس شاملة في القواعد، النصوص، والتعبير والإنشاء لمستوى الجذع المشترك.",
      icon: Globe,
      color: "amber",
      lessons: 12,
      link: "/lessons/arabic"
    },
    { 
      title: "التاريخ والجغرافيا", 
      description: "استكشف التاريخ والجغرافيا مع دروس شاملة تغطي التحولات التاريخية والظواهر الجغرافية للجذع المشترك العلمي.",
      icon: Landmark,
      color: "orange",
      lessons: 26,
      link: "/lessons/histoire-geo"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "indigo": return "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white dark:from-indigo-600 dark:to-indigo-700";
      case "emerald": return "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white dark:from-emerald-600 dark:to-emerald-700";
      case "green": return "bg-gradient-to-br from-green-500 to-green-600 text-white dark:from-green-600 dark:to-green-700";
      case "red": return "bg-gradient-to-br from-red-500 to-red-600 text-white dark:from-red-600 dark:to-red-700";
      case "amber": return "bg-gradient-to-br from-amber-500 to-amber-600 text-white dark:from-amber-600 dark:to-amber-700";
      case "orange": return "bg-gradient-to-br from-orange-500 to-orange-600 text-white dark:from-orange-600 dark:to-orange-700";
      default: return "bg-gradient-to-br from-blue-500 to-blue-600 text-white dark:from-blue-600 dark:to-blue-700";
    }
  };

  if (!settings.hasOnboarded) {
    return <UserOnboarding />;
  }

  return (
    <div className="min-h-screen animated-bg">
      <GlobalHeader />

      {/* Welcome Banner for v4.0 */}
      <WelcomeBanner onShowChangelog={() => setShowChangelog(true)} />

      {/* Welcome Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="mb-6"
          >
            <GraduationCap className="h-16 w-16 text-primary mx-auto" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            Bienvenue {settings.name ? `, ${settings.name}` : ''}!
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Découvrez EduPlatform v4.0 - une plateforme d'apprentissage révolutionnaire conçue spécialement pour le Tronc Commun Sciences. 
            Explorez vos matières avec des cours interactifs, des exercices pratiques et des vidéos explicatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              Tronc Commun Sciences
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Cours Interactifs
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Exercices Pratiques
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <Sparkles className="h-4 w-4 mr-2" />
              Version 4.0
            </Badge>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Subjects Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-3xl font-bold text-center text-foreground mb-10"
          >
            Choisissez votre matière
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to={subject.link}>
                  <Card className="h-full bg-card/90 backdrop-blur-sm border hover:border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-20 h-20 mx-auto rounded-2xl ${getColorClasses(subject.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <subject.icon className="h-10 w-10" />
                      </div>
                      <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {subject.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                        {subject.description}
                      </CardDescription>
                      <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {subject.lessons} leçons
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="text-3xl font-bold text-center text-foreground mb-10"
          >
            Fonctionnalités avancées v4.0
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Cours Interactifs",
                description: "Des présentations modernes avec des explications claires et progressives pour chaque chapitre.",
                color: "indigo"
              },
              {
                icon: FileText,
                title: "Exercices Pratiques",
                description: "Renforcez vos connaissances avec des exercices adaptés et un suivi de progression.",
                color: "green"
              },
              {
                icon: Video,
                title: "Vidéos YouTube",
                description: "Complétez votre apprentissage avec des vidéos explicatives sélectionnées.",
                color: "red"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-card/70 backdrop-blur-sm border hover:border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-2xl ${getColorClasses(feature.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-card-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Statistics Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mb-16"
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: BookOpen, label: "Chapitres", value: "91+" },
                { icon: FileText, label: "Exercices", value: "450+" },
                { icon: Video, label: "Vidéos", value: "200+" },
                { icon: Clock, label: "Heures", value: "80+" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1, type: "spring" }}
                  className="flex flex-col items-center"
                >
                  <stat.icon className="h-8 w-8 text-primary mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="text-center"
        >
          <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">
              Prêt à commencer votre apprentissage ?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Rejoignez des milliers d'étudiants qui utilisent EduPlatform v4.0 pour réussir leurs études.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/lessons/math">
                <Button size="lg" className="w-full sm:w-auto">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Voir tous les cours
                </Button>
              </Link>
              <Link to="/math/lesson/1/course">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Play className="h-4 w-4 mr-2" />
                  Commencer maintenant
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">EduPlatform v4.0</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 EduPlatform - Made by Yahia Ikni
          </p>
        </div>
      </footer>

      <ChangelogDialog isOpen={showChangelog} onClose={() => setShowChangelog(false)} />
    </div>
  );
};

export default Index;
