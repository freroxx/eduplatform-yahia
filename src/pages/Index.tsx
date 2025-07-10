
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Users, Award, Play, FileText, Video, Calendar, Clock, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              EduPlatform
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-indigo-600 border-indigo-300">
              <Sparkles className="h-3 w-3 mr-1" />
              Nouvelle version
            </Badge>
            <div className="text-sm text-gray-600">
              Par <span className="font-semibold text-indigo-600">Yahia Ikni</span>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
            Tronc Commun Sciences
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in leading-relaxed">
            Découvrez une plateforme moderne d'apprentissage avec des <strong>cours interactifs</strong>, 
            des <strong>exercices pratiques</strong> et des <strong>vidéos explicatives</strong> pour maîtriser les mathématiques.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>2 Semestres</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>15 Chapitres</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>12h30 de contenu</span>
            </div>
          </div>
          
          <Link to="/lessons">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <BookOpen className="mr-2 h-5 w-5" />
              Commencer l'apprentissage
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Une plateforme complète</h2>
          <p className="text-gray-600 text-lg">Tout ce dont vous avez besoin pour réussir en mathématiques</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">Cours Interactifs</CardTitle>
              <CardDescription className="leading-relaxed">
                Des présentations modernes et engageantes pour chaque chapitre avec des explications claires et progressives
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Badge variant="outline" className="text-indigo-600 border-indigo-300">
                <Play className="h-3 w-3 mr-1" />
                Slides dynamiques
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">Exercices Pratiques</CardTitle>
              <CardDescription className="leading-relaxed">
                Renforcez vos connaissances avec des exercices adaptés, des solutions détaillées et un suivi de progression
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Badge variant="outline" className="text-purple-600 border-purple-300">
                <Target className="h-3 w-3 mr-1" />
                Solutions détaillées
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <CardHeader className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Video className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-800">Vidéos YouTube</CardTitle>
              <CardDescription className="leading-relaxed">
                Complétez votre apprentissage avec des vidéos explicatives sélectionnées et des démonstrations visuelles
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Badge variant="outline" className="text-red-600 border-red-300">
                <Users className="h-3 w-3 mr-1" />
                Contenu vérifié
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Matières Disponibles</h2>
          <p className="text-gray-600">Explorez notre programme complet pour le Tronc Commun Sciences</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link to="/lessons">
            <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mathématiques</h3>
                <p className="text-indigo-100 mb-3">Programme complet en 15 chapitres</p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    <Calendar className="h-3 w-3 mr-1" />
                    2 semestres
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
          
          <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white border-0 shadow-lg opacity-50 cursor-not-allowed">
            <CardContent className="p-6 text-center">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Physique-Chimie</h3>
              <p className="text-green-100 mb-3">Bientôt disponible</p>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Prochainement
              </Badge>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 shadow-lg opacity-50 cursor-not-allowed">
            <CardContent className="p-6 text-center">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">SVT</h3>
              <p className="text-orange-100 mb-3">Bientôt disponible</p>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Prochainement
              </Badge>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white border-0 shadow-lg opacity-50 cursor-not-allowed">
            <CardContent className="p-6 text-center">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Langues</h3>
              <p className="text-pink-100 mb-3">Bientôt disponible</p>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Prochainement
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Prêt à commencer ?</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Rejoignez des milliers d'étudiants qui utilisent déjà notre plateforme pour réussir leurs études
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/lessons">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200">
                <BookOpen className="h-4 w-4 mr-2" />
                Voir tous les cours
              </Button>
            </Link>
            <Link to="/lesson/1/course">
              <Button variant="outline" size="lg" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 transition-all duration-200">
                <Play className="h-4 w-4 mr-2" />
                Commencer le 1er cours
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-bold">EduPlatform</span>
            </div>
            <div className="text-center">
              <p className="text-gray-400">
                &copy; 2024 EduPlatform - Créé avec ❤️ par <span className="font-semibold text-indigo-400">Yahia Ikni</span>
              </p>
            </div>
            <div className="text-gray-400">
              <p className="text-sm">Version 2.0</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
