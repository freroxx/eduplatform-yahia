
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              EduPlatform
            </span>
          </div>
          <div className="text-sm text-gray-600">
            Par <span className="font-semibold text-indigo-600">Yahia Ikni</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
            Tronc Commun Sciences
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in">
            Découvrez une plateforme moderne d'apprentissage avec des cours interactifs, 
            des exercices pratiques et des vidéos explicatives pour maîtriser les mathématiques.
          </p>
          <Link to="/lessons">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <BookOpen className="mr-2 h-5 w-5" />
              Commencer l'apprentissage
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-bold text-gray-800">Cours Interactifs</CardTitle>
              <CardDescription>
                Des présentations modernes et engageantes pour chaque chapitre
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-bold text-gray-800">Exercices Pratiques</CardTitle>
              <CardDescription>
                Renforcez vos connaissances avec des exercices adaptés
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-bold text-gray-800">Vidéos YouTube</CardTitle>
              <CardDescription>
                Complétez votre apprentissage avec des explications vidéo
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Subject Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Matières Disponibles</h2>
          <p className="text-gray-600">Explorez notre programme complet</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Mathématiques</h3>
              <p className="text-indigo-100">9 chapitres disponibles</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white border-0 shadow-lg opacity-50">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Physique-Chimie</h3>
              <p className="text-green-100">Bientôt disponible</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 shadow-lg opacity-50">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">SVT</h3>
              <p className="text-orange-100">Bientôt disponible</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white border-0 shadow-lg opacity-50">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Langues</h3>
              <p className="text-pink-100">Bientôt disponible</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 EduPlatform - Créé par Yahia Ikni</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
