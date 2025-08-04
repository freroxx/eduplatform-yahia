
import CourseSlide from "@/components/CourseSlide";
import { useParams } from "react-router-dom";
import { arabicData } from "@/data/courseData";

const ArabicCourse = () => {
  const { id } = useParams();
  
  const currentCourse = arabicData[id || "401"];

  return (
    <CourseSlide 
      lessonTitle={currentCourse?.title || "درس اللغة العربية"}
      slides={currentCourse?.slides || []}
    />
  );
};

export default ArabicCourse;
