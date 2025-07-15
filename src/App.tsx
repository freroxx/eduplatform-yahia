
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Lessons from "./pages/Lessons";
import Settings from "./pages/Settings";

// Math lessons
import Lesson1Course from "./pages/Lesson1Course";
import Lesson1Exercises from "./pages/Lesson1Exercises";
import Lesson1Videos from "./pages/Lesson1Videos";

// French lessons
import FrenchLessons from "./pages/french/FrenchLessons";
import FrenchCourse from "./pages/french/FrenchCourse";
import FrenchExercises from "./pages/french/FrenchExercises";
import FrenchVideos from "./pages/french/FrenchVideos";

// Physics lessons
import PhysicsLessons from "./pages/physics/PhysicsLessons";
import PhysicsCourse from "./pages/physics/PhysicsCourse";
import PhysicsExercises from "./pages/physics/PhysicsExercises";
import PhysicsVideos from "./pages/physics/PhysicsVideos";

// SVT lessons
import SVTLessons from "./pages/svt/SVTLessons";
import SVTCourse from "./pages/svt/SVTCourse";
import SVTExercises from "./pages/svt/SVTExercises";
import SVTVideos from "./pages/svt/SVTVideos";

// Arabic lessons
import ArabicLessons from "./pages/arabic/ArabicLessons";
import ArabicCourse from "./pages/arabic/ArabicCourse";
import ArabicExercises from "./pages/arabic/ArabicExercises";
import ArabicVideos from "./pages/arabic/ArabicVideos";

// Histoire-Geo lessons
import HistoireGeoLessons from "./pages/histoire-geo/HistoireGeoLessons";
import HistoireGeoCourse from "./pages/histoire-geo/HistoireGeoCourse";
import HistoireGeoExercises from "./pages/histoire-geo/HistoireGeoExercises";
import HistoireGeoVideos from "./pages/histoire-geo/HistoireGeoVideos";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/settings" element={<Settings />} />
            
            {/* Math routes */}
            <Route path="/lessons/math" element={<Lessons />} />
            <Route path="/math/lesson/:id/course" element={<Lesson1Course />} />
            <Route path="/math/lesson/:id/exercises" element={<Lesson1Exercises />} />
            <Route path="/math/lesson/:id/videos" element={<Lesson1Videos />} />
            
            {/* French routes */}
            <Route path="/lessons/french" element={<FrenchLessons />} />
            <Route path="/french/lesson/:id/course" element={<FrenchCourse />} />
            <Route path="/french/lesson/:id/exercises" element={<FrenchExercises />} />
            <Route path="/french/lesson/:id/videos" element={<FrenchVideos />} />
            
            {/* Physics routes */}
            <Route path="/lessons/physics" element={<PhysicsLessons />} />
            <Route path="/physics/lesson/:id/course" element={<PhysicsCourse />} />
            <Route path="/physics/lesson/:id/exercises" element={<PhysicsExercises />} />
            <Route path="/physics/lesson/:id/videos" element={<PhysicsVideos />} />
            
            {/* SVT routes */}
            <Route path="/lessons/svt" element={<SVTLessons />} />
            <Route path="/svt/lesson/:id/course" element={<SVTCourse />} />
            <Route path="/svt/lesson/:id/exercises" element={<SVTExercises />} />
            <Route path="/svt/lesson/:id/videos" element={<SVTVideos />} />
            
            {/* Arabic routes */}
            <Route path="/lessons/arabic" element={<ArabicLessons />} />
            <Route path="/arabic/lesson/:id/course" element={<ArabicCourse />} />
            <Route path="/arabic/lesson/:id/exercises" element={<ArabicExercises />} />
            <Route path="/arabic/lesson/:id/videos" element={<ArabicVideos />} />
            
            {/* Histoire-Geo routes */}
            <Route path="/lessons/histoire-geo" element={<HistoireGeoLessons />} />
            <Route path="/histoire-geo/lesson/:id/course" element={<HistoireGeoCourse />} />
            <Route path="/histoire-geo/lesson/:id/exercises" element={<HistoireGeoExercises />} />
            <Route path="/histoire-geo/lesson/:id/videos" element={<HistoireGeoVideos />} />
            
            {/* Legacy routes for backwards compatibility */}
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lesson/:id/course" element={<Lesson1Course />} />
            <Route path="/lesson/:id/exercises" element={<Lesson1Exercises />} />
            <Route path="/lesson/:id/videos" element={<Lesson1Videos />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
