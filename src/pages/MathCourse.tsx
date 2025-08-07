
import CourseSlide from "@/components/CourseSlide";
import EnhancedLoadingBar from "@/components/EnhancedLoadingBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { mathLessonsData } from "@/data/mathCourseData";

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
    };
  }, []);

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

  // Transform the slides to match the expected interface
  const transformedSlides: Slide[] = currentCourse?.slides.map(slide => ({
    ...slide,
    type: slide.type as "intro" | "definition" | "example" | "summary" | "exercise" | "content" | "introduction" | "conclusion"
  })) || [];

  return (
    <CourseSlide 
      lessonTitle={currentCourse?.title || "Cours de Mathématiques"}
      slides={transformedSlides}
      images={currentCourse?.images}
    />
  );
};

export default MathCourse;
