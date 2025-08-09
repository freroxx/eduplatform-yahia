
import EnhancedCourseSlide from "@/components/EnhancedCourseSlide";
import EnhancedLoadingBar from "@/components/EnhancedLoadingBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { mathLessonsData } from "@/data/mathCourseData";
import { useProgressTracker } from "@/hooks/useProgressTracker";

interface Slide {
  id: number;
  title: string;
  content: string;
  type: "intro" | "definition" | "example" | "summary" | "exercise" | "content" | "introduction" | "conclusion";
}

const MathCourse = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { completeLesson, addStudyTime } = useProgressTracker();
  const [startTime] = useState(Date.now());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          setIsLoading(false);
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      // Track study time when component unmounts
      const studyDuration = Math.floor((Date.now() - startTime) / 1000 / 60);
      if (studyDuration > 0) {
        addStudyTime("Mathématiques", studyDuration);
      }
    };
  }, [startTime, addStudyTime]);

  // Mark lesson as completed when user finishes reading
  const handleLessonComplete = () => {
    if (id) {
      completeLesson("Mathématiques", id, 10); // Award 10 points for completing a lesson
    }
  };

  const currentCourse = mathLessonsData[id || "1"];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 flex items-center justify-center">
        <EnhancedLoadingBar 
          isLoading={isLoading}
          progress={loadingProgress}
          message="Chargement du cours de mathématiques..."
          color="blue"
        />
      </div>
    );
  }

  if (!currentCourse) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-2">Cours non trouvé</h2>
          <p className="text-muted-foreground">Ce cours n'existe pas ou n'est pas encore disponible.</p>
        </div>
      </div>
    );
  }

  // Transform the slides to match the expected interface
  const transformedSlides: Slide[] = currentCourse?.slides?.map((slide, index) => ({
    id: index + 1,
    ...slide,
    type: slide.type as "intro" | "definition" | "example" | "summary" | "exercise" | "content" | "introduction" | "conclusion"
  })) || [];

  // If no slides but has cours content, create a simple slide
  if (transformedSlides.length === 0 && currentCourse.cours) {
    transformedSlides.push({
      id: 1,
      title: currentCourse.title,
      content: currentCourse.cours,
      type: "content"
    });
  }

  return (
    <EnhancedCourseSlide 
      lessonTitle={currentCourse?.title || "Cours de Mathématiques"}
      slides={transformedSlides}
      pdfUrl={currentCourse?.images}
      onLessonComplete={handleLessonComplete}
    />
  );
};

export default MathCourse;
