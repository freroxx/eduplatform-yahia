
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Lessons from "./pages/Lessons";
import Settings from "./pages/Settings";

// Math lessons
import Lesson1Course from "./pages/math/Lesson1Course";
import Lesson1Exercises from "./pages/math/Lesson1Exercises";
import Lesson1Videos from "./pages/math/Lesson1Videos";
import Lesson2Course from "./pages/math/Lesson2Course";
import Lesson2Exercises from "./pages/math/Lesson2Exercises";
import Lesson2Videos from "./pages/math/Lesson2Videos";

// French lessons
import FrenchLessons from "./pages/french/FrenchLessons";
import FrenchLesson1Course from "./pages/french/FrenchLesson1Course";
import FrenchLesson1Exercises from "./pages/french/FrenchLesson1Exercises";
import FrenchLesson1Videos from "./pages/french/FrenchLesson1Videos";
import FrenchLesson2Course from "./pages/french/FrenchLesson2Course";
import FrenchLesson2Exercises from "./pages/french/FrenchLesson2Exercises";
import FrenchLesson2Videos from "./pages/french/FrenchLesson2Videos";

// Physics lessons
import PhysicsLessons from "./pages/physics/PhysicsLessons";
import PhysicsLesson1Course from "./pages/physics/PhysicsLesson1Course";
import PhysicsLesson1Exercises from "./pages/physics/PhysicsLesson1Exercises";
import PhysicsLesson1Videos from "./pages/physics/PhysicsLesson1Videos";

// SVT lessons
import SVTLessons from "./pages/svt/SVTLessons";
import SVTLesson1Course from "./pages/svt/SVTLesson1Course";
import SVTLesson1Exercises from "./pages/svt/SVTLesson1Exercises";
import SVTLesson1Videos from "./pages/svt/SVTLesson1Videos";

// Arabic lessons
import ArabicLessons from "./pages/arabic/ArabicLessons";
import ArabicLesson1Course from "./pages/arabic/ArabicLesson1Course";
import ArabicLesson1Exercises from "./pages/arabic/ArabicLesson1Exercises";
import ArabicLesson1Videos from "./pages/arabic/ArabicLesson1Videos";

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
            <Route path="/lessons/math" element={<Lessons subject="math" />} />
            <Route path="/math/lesson/:id/course" element={<Lesson1Course />} />
            <Route path="/math/lesson/:id/exercises" element={<Lesson1Exercises />} />
            <Route path="/math/lesson/:id/videos" element={<Lesson1Videos />} />
            
            {/* French routes */}
            <Route path="/lessons/french" element={<FrenchLessons />} />
            <Route path="/french/lesson/:id/course" element={<FrenchLesson1Course />} />
            <Route path="/french/lesson/:id/exercises" element={<FrenchLesson1Exercises />} />
            <Route path="/french/lesson/:id/videos" element={<FrenchLesson1Videos />} />
            
            {/* Physics routes */}
            <Route path="/lessons/physics" element={<PhysicsLessons />} />
            <Route path="/physics/lesson/:id/course" element={<PhysicsLesson1Course />} />
            <Route path="/physics/lesson/:id/exercises" element={<PhysicsLesson1Exercises />} />
            <Route path="/physics/lesson/:id/videos" element={<PhysicsLesson1Videos />} />
            
            {/* SVT routes */}
            <Route path="/lessons/svt" element={<SVTLessons />} />
            <Route path="/svt/lesson/:id/course" element={<SVTLesson1Course />} />
            <Route path="/svt/lesson/:id/exercises" element={<SVTLesson1Exercises />} />
            <Route path="/svt/lesson/:id/videos" element={<SVTLesson1Videos />} />
            
            {/* Arabic routes */}
            <Route path="/lessons/arabic" element={<ArabicLessons />} />
            <Route path="/arabic/lesson/:id/course" element={<ArabicLesson1Course />} />
            <Route path="/arabic/lesson/:id/exercises" element={<ArabicLesson1Exercises />} />
            <Route path="/arabic/lesson/:id/videos" element={<ArabicLesson1Videos />} />
            
            {/* Legacy routes for backwards compatibility */}
            <Route path="/lessons" element={<Lessons subject="math" />} />
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
