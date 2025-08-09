
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, ArrowLeft, Calendar, Clock, Target, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import { mathLessonsStructure } from "@/data/mathCourseData";

const MathLessons = () => {
  const renderLessonCard = (lesson: any, index: number) => (
    <motion.div
      key={lesson.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group bg-card/80 hover-lift">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <span className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white">
                  {lesson.id}
                </span>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 font-medium border">
                  <Target className="h-3 w-3 mr-1" />
                  Cours + Exercices
                </Badge>
                <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  60-90 min
                </Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-300 dark:border-blue-400">
                  <Video className="h-3 w-3 mr-1" />
                  Vidéos
                </Badge>
              </div>
              <CardTitle className="text-lg font-bold transition-colors mb-2 text-card-foreground group-hover:text-primary">
                {lesson.title}
              </CardTitle>
              <CardDescription className="leading-relaxed">
                {lesson.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Link to={`/math/${lesson.id}`}>
              <Button variant="default" size="sm" className="shadow-md hover:shadow-lg transition-all duration-200 bg-blue-600 hover:bg-blue-700">
                <BookOpen className="h-4 w-4 mr-2" />
                Cours
              </Button>
            </Link>
            <Link to={`/math/${lesson.id}/exercises`}>
              <Button variant="outline" size="sm" className="transition-all duration-200 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20">
                <FileText className="h-4 w-4 mr-2" />
                Exercices
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20"
    >
      <GlobalHeader />
      
      <header className="backdrop-blur-md border-b sticky top-16 z-40 bg-background/80 border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 transition-all duration-200 hover:scale-105 text-primary hover:text-primary/80">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Calculator className="h-6 w-6 text-blue-600" />
                Mathématiques
              </h1>
              <p className="text-sm text-muted-foreground">
                Tronc Commun Sciences
              </p>
            </div>
            <div className="text-sm font-medium text-primary">
              15 modules
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Programme de Mathématiques
          </h2>
          <p className="text-xl mb-6 text-muted-foreground">
            Algèbre, géométrie, analyse et statistiques
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>2 Semestres</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>15 Modules</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>20h+ de contenu</span>
            </div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="semester1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 backdrop-blur-sm shadow-md bg-card/80">
              <TabsTrigger 
                value="semester1" 
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4" />
                <span>1er Semestre</span>
                <Badge variant="secondary" className="ml-2">
                  9 modules
                </Badge>
              </TabsTrigger>
              <TabsTrigger 
                value="semester2" 
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4" />
                <span>2ème Semestre</span>
                <Badge variant="secondary" className="ml-2">
                  6 modules
                </Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="semester1" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Premier Semestre
                </h3>
                <p className="text-muted-foreground">
                  Ensembles numériques, arithmétique, calcul vectoriel et géométrie
                </p>
              </div>
              {mathLessonsStructure.semester1.map((lesson, index) => renderLessonCard(lesson, index))}
            </TabsContent>
            
            <TabsContent value="semester2" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Deuxième Semestre
                </h3>
                <p className="text-muted-foreground">
                  Fonctions, transformations, produit scalaire et statistiques
                </p>
              </div>
              {mathLessonsStructure.semester2.map((lesson, index) => renderLessonCard(lesson, index))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default MathLessons;
