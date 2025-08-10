
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, CheckCircle, FileText, Download, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PDFViewer from "@/components/PDFViewer";
import ConfettiAnimation from "@/components/ConfettiAnimation";

interface Slide {
  title: string;
  content: string;
  type: "intro" | "definition" | "example" | "summary" | "exercise" | "content" | "introduction" | "conclusion";
}

interface EnhancedCourseSlideProps {
  lessonTitle: string;
  slides: Slide[];
  pdfUrl?: string | string[];
  onLessonComplete?: () => void;
}

const EnhancedCourseSlide = ({ lessonTitle, slides, pdfUrl, onLessonComplete }: EnhancedCourseSlideProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPDF, setShowPDF] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);

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
    } else if (currentSlide === slides.length - 1 && !lessonCompleted) {
      // Lesson completed - trigger confetti
      setShowConfetti(true);
      setLessonCompleted(true);
      if (onLessonComplete) {
        onLessonComplete();
      }
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
        return <Trophy className="h-6 w-6" />;
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

  const formatContent = (content: string) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^#\s(.+)$/gm, '<h1 class="text-2xl font-bold mb-4 text-primary">$1</h1>')
      .replace(/^##\s(.+)$/gm, '<h2 class="text-xl font-semibold mb-3 text-foreground">$1</h2>')
      .replace(/^###\s(.+)$/gm, '<h3 class="text-lg font-medium mb-2 text-foreground">$3</h3>')
      .replace(/•\s(.+)$/gm, '<li class="ml-4 mb-1">• $1</li>')
      .replace(/^\d+\.\s(.+)$/gm, '<li class="ml-4 mb-1 list-decimal">$1</li>');
  };

  const imageCount = Array.isArray(pdfUrl) ? pdfUrl.length : (pdfUrl ? 1 : 0);

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ConfettiAnimation 
        trigger={showConfetti} 
        type="lesson"
        onComplete={() => setShowConfetti(false)} 
      />

      {/* Header */}
      <motion.div 
        className="bg-background/95 backdrop-blur-lg border-b border-border/50 sticky top-0 z-10 shadow-xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div 
                className={`p-3 rounded-xl bg-gradient-to-r ${getSlideColor(currentSlideData?.type || 'intro')} text-white shadow-lg`}
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {getSlideIcon(currentSlideData?.type || 'intro')}
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
                  {lessonTitle}
                  {lessonCompleted && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Sparkles className="h-5 w-5 text-yellow-500" />
                    </motion.div>
                  )}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Slide {currentSlide + 1} sur {slides.length}
                  {lessonCompleted && (
                    <span className="ml-2 text-green-600 font-medium">• Terminé!</span>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-40">
                <Progress 
                  value={progress} 
                  className="h-3 rounded-full shadow-inner" 
                />
              </div>
              <motion.span 
                className="text-sm font-bold text-muted-foreground bg-muted/50 px-3 py-1 rounded-full"
                animate={{ scale: progress === 100 ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.5 }}
              >
                {Math.round(progress)}%
              </motion.span>
              {pdfUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPDF(!showPDF)}
                  className="hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
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
            <TabsList className="grid w-full grid-cols-2 mb-8 backdrop-blur-sm bg-card/80 shadow-lg border border-border/50">
              <TabsTrigger value="slides" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <BookOpen className="h-4 w-4" />
                Slides
              </TabsTrigger>
              {pdfUrl && (
                <TabsTrigger value="pdf" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <FileText className="h-4 w-4" />
                  PDF Complet {imageCount > 1 && `(${imageCount} pages)`}
                </TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="slides">
              <motion.div 
                className="bg-card/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-border/50 overflow-hidden hover:shadow-3xl transition-all duration-500"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="p-8"
                  >
                    <div className="mb-6">
                      <motion.h2 
                        className="text-3xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {currentSlideData?.title}
                      </motion.h2>
                    </div>

                    <ScrollArea className="h-[65vh]">
                      <motion.div 
                        className="pr-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div 
                          className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-strong:text-primary prose-em:text-blue-600"
                          dangerouslySetInnerHTML={{ 
                            __html: formatContent(currentSlideData?.content || '') 
                          }}
                        />
                      </motion.div>
                    </ScrollArea>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <motion.div 
                  className="px-8 py-6 bg-gradient-to-r from-muted/30 to-muted/40 border-t border-border/50 backdrop-blur-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center justify-between">
                    <Button
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                      variant="outline"
                      className="flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
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
                              ? "bg-primary shadow-lg scale-125"
                              : index <= currentSlide 
                              ? "bg-primary/60 hover:bg-primary/80 hover:scale-110"
                              : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
                          }`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>

                    <Button
                      onClick={nextSlide}
                      className={`flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg ${
                        currentSlide === slides.length - 1 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' 
                          : ''
                      }`}
                    >
                      {currentSlide === slides.length - 1 ? (
                        <>
                          <Trophy className="h-4 w-4" />
                          Terminer le cours
                        </>
                      ) : (
                        <>
                          Suivant
                          <ChevronRight className="h-4 w-4" />
                        </>
                      )}
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
