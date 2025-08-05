
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, CheckCircle, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PDFViewer from "@/components/PDFViewer";

interface Slide {
  title: string;
  content: string;
  type: "intro" | "definition" | "example" | "summary" | "exercise" | "content" | "introduction" | "conclusion";
}

interface EnhancedCourseSlideProps {
  lessonTitle: string;
  slides: Slide[];
  pdfUrl?: string | string[];
}

const EnhancedCourseSlide = ({ lessonTitle, slides, pdfUrl }: EnhancedCourseSlideProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPDF, setShowPDF] = useState(false);

  // Safety check for empty slides
  if (!slides || slides.length === 0) {
    return (
      <div className="min-h-screen animated-bg flex items-center justify-center">
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

  const imageCount = Array.isArray(pdfUrl) ? pdfUrl.length : (pdfUrl ? 1 : 0);

  return (
    <motion.div 
      className="min-h-screen animated-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div 
        className="bg-background/90 backdrop-blur-md border-b border-border sticky top-0 z-10 shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div 
                className={`p-2 rounded-lg bg-gradient-to-r ${getSlideColor(currentSlideData?.type || 'intro')} text-white shadow-lg`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getSlideIcon(currentSlideData?.type || 'intro')}
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  {lessonTitle}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Slide {currentSlide + 1} sur {slides.length}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32">
                <Progress value={progress} className="h-3 rounded-full" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {Math.round(progress)}%
              </span>
              {pdfUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPDF(!showPDF)}
                  className="hover:scale-105 transition-transform shadow-md hover:shadow-lg"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  PDF {imageCount > 1 && `(${imageCount})`}
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {showPDF && pdfUrl ? (
          <PDFViewer 
            pdfUrl={pdfUrl} 
            title={lessonTitle}
            onClose={() => setShowPDF(false)}
          />
        ) : (
          <Tabs defaultValue="slides" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="slides" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Slides
              </TabsTrigger>
              {pdfUrl && (
                <TabsTrigger value="pdf" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  PDF Complet {imageCount > 1 && `(${imageCount} pages)`}
                </TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="slides">
              <motion.div 
                className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-border overflow-hidden hover:shadow-3xl transition-shadow duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="p-8"
                  >
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-foreground mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {currentSlideData?.title}
                      </h2>
                    </div>

                    <ScrollArea className="h-[60vh]">
                      <div className="pr-4">
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                          <div className="whitespace-pre-line text-muted-foreground leading-relaxed text-lg">
                            {currentSlideData?.content}
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <motion.div 
                  className="px-8 py-6 bg-muted/30 border-t border-border backdrop-blur-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center justify-between">
                    <Button
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                      variant="outline"
                      className="flex items-center gap-2 hover:scale-105 transition-transform shadow-md"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Précédent
                    </Button>

                    <div className="flex gap-3">
                      {slides.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-4 h-4 rounded-full transition-all duration-300 ${
                            index === currentSlide
                              ? "bg-primary scale-125 shadow-lg"
                              : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
                          }`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>

                    <Button
                      onClick={nextSlide}
                      disabled={currentSlide === slides.length - 1}
                      className="flex items-center gap-2 hover:scale-105 transition-transform shadow-md"
                    >
                      Suivant
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
            
            {pdfUrl && (
              <TabsContent value="pdf">
                <PDFViewer pdfUrl={pdfUrl} title={lessonTitle} />
              </TabsContent>
            )}
          </Tabs>
        )}
      </div>
    </motion.div>
  );
};

export default EnhancedCourseSlide;
