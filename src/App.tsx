
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

// Physics lessons
import PhysicsLessons from "./pages/physics/PhysicsLessons";

// Arabic lessons
import ArabicLessons from "./pages/arabic/ArabicLessons";

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
            <Route path="/french/lesson/:id/course" element={<Lesson1Course />} />
            <Route path="/french/lesson/:id/exercises" element={<Lesson1Exercises />} />
            <Route path="/french/lesson/:id/videos" element={<Lesson1Videos />} />
            
            {/* Physics routes */}
            <Route path="/lessons/physics" element={<PhysicsLessons />} />
            <Route path="/physics/lesson/:id/course" element={<Lesson1Course />} />
            <Route path="/physics/lesson/:id/exercises" element={<Lesson1Exercises />} />
            <Route path="/physics/lesson/:id/videos" element={<Lesson1Videos />} />
            
            {/* SVT routes */}
            <Route path="/lessons/svt" element={<Lessons />} />
            <Route path="/svt/lesson/:id/course" element={<Lesson1Course />} />
            <Route path="/svt/lesson/:id/exercises" element={<Lesson1Exercises />} />
            <Route path="/svt/lesson/:id/videos" element={<Lesson1Videos />} />
            
            {/* Arabic routes */}
            <Route path="/lessons/arabic" element={<ArabicLessons />} />
            <Route path="/arabic/lesson/:id/course" element={<Lesson1Course />} />
            <Route path="/arabic/lesson/:id/exercises" element={<Lesson1Exercises />} />
            <Route path="/arabic/lesson/:id/videos" element={<Lesson1Videos />} />
            
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
