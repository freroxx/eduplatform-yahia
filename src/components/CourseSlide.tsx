
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Home, BookOpen, Target, Lightbulb, FileText, BarChart3 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Slide {
  title: string;
  content: string;
  type: "intro" | "definition" | "example" | "exercise" | "summary";
}

interface CourseSlideProps {
  lessonTitle: string;
  slides: Slide[];
}

const CourseSlide = ({ lessonTitle, slides }: CourseSlideProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getSlideColor = (type: string) => {
    switch (type) {
      case "intro": return "from-blue-500 to-indigo-600";
      case "definition": return "from-green-500 to-teal-600";
      case "example": return "from-orange-500 to-red-600";
      case "exercise": return "from-purple-500 to-pink-600";
      case "summary": return "from-gray-600 to-gray-800";
      default: return "from-indigo-500 to-purple-600";
    }
  };

  const getSlideIcon = (type: string) => {
    switch (type) {
      case "intro": return <BookOpen className="h-6 w-6" />;
      case "definition": return <Target className="h-6 w-6" />;
      case "example": return <Lightbulb className="h-6 w-6" />;
      case "exercise": return <FileText className="h-6 w-6" />;
      case "summary": return <BarChart3 className="h-6 w-6" />;
      default: return <BookOpen className="h-6 w-6" />;
    }
  };

  const getSlideTypeName = (type: string) => {
    switch (type) {
      case "intro": return "Introduction";
      case "definition": return "Définition";
      case "example": return "Exemple";
      case "exercise": return "Exercice";
      case "summary": return "Résumé";
      default: return "Contenu";
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/lessons" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-all duration-200 hover:scale-105">
            <Home className="h-5 w-5" />
            <span className="font-medium">Retour aux leçons</span>
          </Link>
          <div className="text-center flex-1">
            <h1 className="text-xl font-bold text-gray-800">{lessonTitle}</h1>
            <div className="flex items-center justify-center space-x-2 mt-1">
              <Badge variant="outline" className="text-xs">
                {getSlideIcon(currentSlideData.type)}
                <span className="ml-1">{getSlideTypeName(currentSlideData.type)}</span>
              </Badge>
            </div>
          </div>
          <div className="text-sm text-gray-600 font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-5xl h-[500px] bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="h-full p-0 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-r ${getSlideColor(currentSlideData.type)} opacity-10`}></div>
            <div className="relative h-full flex flex-col justify-center items-center p-12 text-center">
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${getSlideColor(currentSlideData.type)} text-white mb-4`}>
                  {getSlideIcon(currentSlideData.type)}
                </div>
                <Badge className={`bg-gradient-to-r ${getSlideColor(currentSlideData.type)} text-white border-0 px-3 py-1`}>
                  {getSlideTypeName(currentSlideData.type)}
                </Badge>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-800 mb-8 leading-tight">
                {currentSlideData.title}
              </h2>
              
              <div className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                {currentSlideData.content.split('\n').map((line, index) => (
                  <p key={index} className="mb-4 last:mb-0">{line}</p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white/80 backdrop-blur-md border-t border-gray-200/50 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Button
            onClick={prevSlide}
            variant="outline"
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Précédent</span>
          </Button>

          <div className="flex space-x-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? `bg-gradient-to-r ${getSlideColor(slide.type)} scale-125 shadow-lg`
                    : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                }`}
                title={`${index + 1}. ${slide.title}`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200"
          >
            <span>Suivant</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseSlide;
