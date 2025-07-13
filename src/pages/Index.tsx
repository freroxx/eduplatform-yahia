
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookOpen, GraduationCap, Users, Award, Play, FileText, Video, Calendar, Clock, Target, Sparkles, Sun, Moon, Monitor, Settings, Maximize2, Bot, BarChart3, PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import UserOnboarding from "@/components/UserOnboarding";
import { useSettings } from "@/hooks/useSettings";

const Index = () => {
  const { settings } = useSettings();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAI, setShowAI] = useState(false);


  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const subjects = [
    { 
      title: "Mathématiques", 
      description: "Découvrez l'algèbre, la géométrie et l'analyse avec des cours progressifs et des exercices interactifs adaptés au niveau Tronc Commun.",
      icon: BookOpen,
      color: "indigo",
      lessons: 15,
      link: "/lessons"
    },
    { 
      title: "Physique Chimie", 
      description: "Découvrez les lois de la physique et les secrets de la chimie avec des expériences virtuelles et des animations interactives.",
      icon: BarChart3,
      color: "emerald",
      lessons: 23,
      link: "/lessons"
    },
    { 
      title: "SVT", 
      description: "Explorez les sciences de la vie et de la terre avec des études de cas réels et des observations écologiques détaillées.",
      icon: Target,
      color: "green",
      lessons: 11,
      link: "/lessons"
    },
    { 
      title: "Français", 
      description: "Maîtrisez la langue française avec des modules sur la typologie textuelle, la nouvelle réaliste et fantastique, et le théâtre.",
      icon: PenTool,
      color: "purple",
      lessons: 4,
      link: "/lessons"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20"
    >
      <UserOnboarding />
      <header className="backdrop-blur-md border-b sticky top-0 z-50 bg-background/80 border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
              EduPlatform
            </span>
          </motion.div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              <Sparkles className="h-3 w-3 mr-1" />
              Nouvelle version
            </Badge>
            <Link to="/settings">
              <Button variant="outline" size="sm" className="hover:bg-accent/50 transition-colors">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleFullscreen}
              className="hover:bg-accent/50 transition-colors"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Dialog open={showAI} onOpenChange={setShowAI}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-500 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20 transition-colors"
                >
                  <Bot className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                <DialogHeader className="p-4 border-b">
                  <DialogTitle className="text-lg font-semibold flex items-center gap-2">
                    <Bot className="h-5 w-5" />
                    Assistant IA - Aide aux devoirs
                  </DialogTitle>
                </DialogHeader>
                <div className="flex-1 h-full">
                  <iframe 
                    src="https://studio.pickaxe.co/_embed/4EMPJ5JYJT?d=deployment-49947cc5-189a-4ecf-9af3-033927e297ef" 
                    className="w-full h-full border-0"
                    allow="microphone; camera"
                  />
                </div>
              </DialogContent>
            </Dialog>
            <div className="text-sm text-muted-foreground">
              Par <span className="font-semibold text-primary">Yahia Ikni</span>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary-foreground to-accent-foreground bg-clip-text text-transparent"
          >
            Bonjour {settings.name || 'Étudiant'} 👋
          </motion.h1>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-foreground"
          >
            Tronc Commun Sciences
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl mb-8 leading-relaxed text-muted-foreground"
          >
            Découvrez une plateforme moderne d'apprentissage avec des <strong>cours interactifs</strong>, 
            des <strong>exercices pratiques</strong> et des <strong>vidéos explicatives</strong> pour maîtriser les mathématiques, physique-chimie, SVT et français.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-8 mb-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>2 Semestres</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>53 Chapitres</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>40h+ de contenu</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link to="/lessons">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Commencer l'apprentissage
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Une plateforme complète</h2>
          <p className="text-muted-foreground text-lg">Tout ce dont vous avez besoin pour réussir vos études</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: BookOpen,
              title: "Cours Interactifs",
              description: "Des présentations modernes et engageantes pour chaque chapitre avec des explications claires et progressives",
              badge: "Slides dynamiques",
              badgeIcon: Play,
              color: "indigo"
            },
            {
              icon: FileText,
              title: "Exercices Pratiques",
              description: "Renforcez vos connaissances avec des exercices adaptés, des solutions détaillées et un suivi de progression",
              badge: "Solutions détaillées",
              badgeIcon: Target,
              color: "purple"
            },
            {
              icon: Video,
              title: "Vidéos YouTube",
              description: "Complétez votre apprentissage avec des vidéos explicatives sélectionnées et des démonstrations visuelles",
              badge: "Contenu vérifié",
              badgeIcon: Users,
              color: "red"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader className="text-center">
                  <div className={`bg-${feature.color}-100 dark:bg-${feature.color}-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${feature.color}-200 dark:group-hover:bg-${feature.color}-800/50 transition-colors`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className={`text-${feature.color}-600 border-${feature.color}-300 dark:text-${feature.color}-400 dark:border-${feature.color}-600`}>
                    <feature.badgeIcon className="h-3 w-3 mr-1" />
                    {feature.badge}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Matières Disponibles</h2>
          <p className="text-muted-foreground">Explorez notre programme complet pour le Tronc Commun Sciences</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link to={subject.link}>
                <Card className={`bg-gradient-to-br from-${subject.color}-500 to-${subject.color}-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group h-full`}>
                  <CardContent className="p-6 text-center">
                    <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <subject.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{subject.title}</h3>
                    <p className={`text-${subject.color}-100 mb-3 text-sm`}>{subject.description}</p>
                    <div className="flex justify-center space-x-2">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {subject.lessons} chapitres
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold text-card-foreground mb-4">Prêt à commencer ?</h2>
          <p className="text-muted-foreground mb-6 text-lg">
            Rejoignez des milliers d'étudiants qui utilisent déjà notre plateforme pour réussir leurs études
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/lessons">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                <BookOpen className="h-4 w-4 mr-2" />
                Voir tous les cours
              </Button>
            </Link>
            <Link to="/lesson/1/course">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-accent px-6 py-3 transition-all duration-200">
                <Play className="h-4 w-4 mr-2" />
                Commencer le 1er cours
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <footer className="bg-secondary/20 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">EduPlatform</span>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground">
                &copy; 2024 EduPlatform - Créé avec ❤️ par <span className="font-semibold text-primary">Yahia Ikni</span>
              </p>
            </div>
            <div className="text-muted-foreground">
              <p className="text-sm">Version 2.0</p>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;
