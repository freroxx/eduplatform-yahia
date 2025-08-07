
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, CheckCircle, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Slide {
  title: string;
  content: string;
  type: "intro" | "definition" | "example" | "summary" | "exercise" | "content" | "introduction" | "conclusion";
}

interface CourseSlideProps {
  lessonTitle: string;
  slides: Slide[];
  images?: string[];
}

const CourseSlide = ({ lessonTitle, slides, images }: CourseSlideProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Safety check for empty slides
  if (!slides || slides.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center p-8">
          <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-2">Aucun contenu disponible</h2>
          <p className="text-muted-foreground">Ce cours sera bientôt disponible.</p>
        </div>
      </div>
    );
  }

  const currentSlideData = slides[currentSlide];
  const progress = ((currentSlide + 1) / slides.length) * 100;

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const getSlideIcon = (type: string) => {
    switch (type) {
      case "intro":
      case "introduction":
        return <BookOpen className="h-6 w-6" />;
      case "definition":
      case "content":
        return <BookOpen className="h-6 w-6" />;
      case "example":
      case "exercise":
        return <CheckCircle className="h-6 w-6" />;
      case "summary":
      case "conclusion":
        return <CheckCircle className="h-6 w-6" />;
      default:
        return <BookOpen className="h-6 w-6" />;
    }
  };

  const getSlideColor = (type: string) => {
    switch (type) {
      case "intro":
      case "introduction":
        return "from-blue-500 to-purple-600";
      case "definition":
      case "content":
        return "from-green-500 to-teal-600";
      case "example":
      case "exercise":
        return "from-orange-500 to-red-600";
      case "summary":
      case "conclusion":
        return "from-purple-500 to-pink-600";
      default:
        return "from-blue-500 to-purple-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${getSlideColor(currentSlideData.type)} text-white`}>
                {getSlideIcon(currentSlideData.type)}
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  {lessonTitle}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Slide {currentSlide + 1} sur {slides.length}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {images && images.length > 0 && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ImageIcon className="h-4 w-4" />
                      Voir les images ({images.length})
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {images.map((image, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`Image ${index + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              )}
              <div className="w-32">
                <Progress value={progress} className="h-2" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {currentSlideData.title}
                </h2>
              </div>

              <ScrollArea className="h-[60vh]">
                <div className="pr-4">
                  <div className="prose prose-lg max-w-none dark:prose-invert">
                    <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                      {currentSlideData.content}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="px-8 py-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <Button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Précédent
              </Button>

              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide
                        ? "bg-blue-500"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center gap-2"
              >
                Suivant
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSlide;
