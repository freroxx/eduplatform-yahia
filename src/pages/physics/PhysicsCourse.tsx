
import CourseSlide from "@/components/CourseSlide";
import { useParams } from "react-router-dom";
import { physicsLessonsData } from "@/data/physicsCourseData";

const PhysicsCourse = () => {
  const { id } = useParams();
  
  const currentCourse = physicsLessonsData[id || "1"];

  return (
    <CourseSlide 
      lessonTitle={currentCourse?.title || "Cours de Physique"}
      slides={currentCourse?.slides || []}
    />
  );
};

export default PhysicsCourse;
