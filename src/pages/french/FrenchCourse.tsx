
import CourseSlide from "@/components/CourseSlide";
import { useParams } from "react-router-dom";
import { frenchData } from "@/data/courseData";

const FrenchCourse = () => {
  const { id } = useParams();
  
  const currentCourse = frenchData[id || "301"];

  return (
    <CourseSlide 
      lessonTitle={currentCourse?.title || "Cours de Français"}
      slides={currentCourse?.slides || []}
    />
  );
};

export default FrenchCourse;
