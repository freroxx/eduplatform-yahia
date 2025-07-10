
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
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

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/lessons" className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors">
            <Home className="h-5 w-5" />
            <span>Retour aux leçons</span>
          </Link>
          <h1 className="text-xl font-bold text-gray-800 text-center flex-1">{lessonTitle}</h1>
          <div className="text-sm text-gray-600">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </header>

      {/* Main Slide Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-4xl h-96 bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="h-full p-0 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-r ${getSlideColor(currentSlideData.type)} opacity-10`}></div>
            <div className="relative h-full flex flex-col justify-center items-center p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {currentSlideData.title}
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                {currentSlideData.content.split('\n').map((line, index) => (
                  <p key={index} className="mb-4">{line}</p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-t border-gray-200/50 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Button
            onClick={prevSlide}
            variant="outline"
            disabled={currentSlide === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Précédent</span>
          </Button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-indigo-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2"
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
