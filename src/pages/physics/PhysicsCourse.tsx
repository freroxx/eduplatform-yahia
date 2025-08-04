
import CourseSlide from "@/components/CourseSlide";
import { useParams } from "react-router-dom";
import { physicsData } from "@/data/courseData";

const PhysicsCourse = () => {
  const { id } = useParams();
  
  const currentCourse = physicsData[id || "101"];

  return (
    <CourseSlide 
      lessonTitle={currentCourse?.title || "Cours de Physique"}
      slides={currentCourse?.slides || []}
    />
  );
};

export default PhysicsCourse;
