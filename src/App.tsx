
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Lessons from "./pages/Lessons";
import Lesson1Course from "./pages/Lesson1Course";
import Lesson1Exercises from "./pages/Lesson1Exercises";
import Lesson1Videos from "./pages/Lesson1Videos";
import Physics1Course from "./pages/Physics1Course";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lessons" element={<Lessons />} />
          
          {/* Semester 1 Lessons */}
          <Route path="/lesson/1/course" element={<Lesson1Course />} />
          <Route path="/lesson/1/exercises" element={<Lesson1Exercises />} />
          <Route path="/lesson/1/videos" element={<Lesson1Videos />} />
          
          <Route path="/lesson/2/course" element={<Lesson1Course />} />
          <Route path="/lesson/2/exercises" element={<Lesson1Exercises />} />
          <Route path="/lesson/2/videos" element={<Lesson1Videos />} />
          
          <Route path="/lesson/3/course" element={<Lesson1Course />} />
          <Route path="/lesson/3/exercises" element={<Lesson1Exercises />} />
          <Route path="/lesson/3/videos" element={<Lesson1Videos />} />
          
          <Route path="/lesson/4/course" element={<Lesson1Course />} />
          <Route path="/lesson/4/exercises" element={<Lesson1Exercises />} />
          <Route path="/lesson/4/videos" element={<Lesson1Videos />} />
          
          <Route path="/lesson/5/course" element={<Lesson1Course />} />
          <Route path="/lesson/5/exercises" element={<Lesson1Exercises />} />
          <Route path="/lesson/5/videos" element={<Lesson1Videos />} />
          
          <Route path="/lesson/6/course" element={<Lesson1Course />} />
          <Route path="/lesson/6/exercises" element={<Lesson1Exercises />} />
          <Route path="/lesson/6/videos" element={<Lesson1Videos />} />
          
          <Route path="/lesson/7/course" element={<Lesson1Course />} />
          <Route path="/lesson/7/exercises" element={<Lesson1Exercises />} />
          <Route path="/lesson/7/videos" element={<Lesson1Videos />} />
          
          <Route path="/lesson/8/course" element={<Lesson1Course />} />
          <Route path="/lesson/8/exercises" element={<Lesson1Exercises />} />
          <Route path="/lesson/8/videos" element={<Lesson1Videos />} />
          
          <Route path="/lesson/9/course" element={<Lesson1Course />} />
          <Route path="/lesson/9/exercises" element={<Lesson1Exercises />} />
          <Route path="/lesson/9/videos" element={<Lesson1Videos />} />
          
          {/* Semester 2 Lessons */}
          <Route path="/lesson/10/course" element={<Lesson1Course />} />
          <Route path="/lesson/10/exercises" element={<Lesson1Exercises />} />
          
          <Route path="/lesson/11/course" element={<Lesson1Course />} />
          <Route path="/lesson/11/exercises" element={<Lesson1Exercises />} />
          <Route path="/lesson/11/videos" element={<Lesson1Videos />} />
          
          <Route path="/lesson/12/course" element={<Lesson1Course />} />
          <Route path="/lesson/12/exercises" element={<Lesson1Exercises />} />
          <Route path="/lesson/12/videos" element={<Lesson1Videos />} />
          
          <Route path="/lesson/13/course" element={<Lesson1Course />} />
          <Route path="/lesson/13/exercises" element={<Lesson1Exercises />} />
          <Route path="/lesson/13/videos" element={<Lesson1Videos />} />
          
          <Route path="/lesson/14/course" element={<Lesson1Course />} />
          <Route path="/lesson/14/exercises" element={<Lesson1Exercises />} />
          
          <Route path="/lesson/15/course" element={<Lesson1Course />} />
          <Route path="/lesson/15/exercises" element={<Lesson1Exercises />} />
          <Route path="/lesson/15/videos" element={<Lesson1Videos />} />
          
          {/* Physics lessons routes */}
          <Route path="/lesson/101/course" element={<Physics1Course />} />
          <Route path="/lesson/101/exercises" element={<NotFound />} />
          <Route path="/lesson/101/videos" element={<NotFound />} />
          
          {/* Add more physics routes as needed */}
          <Route path="/lesson/102/course" element={<NotFound />} />
          <Route path="/lesson/102/exercises" element={<NotFound />} />
          <Route path="/lesson/102/videos" element={<NotFound />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
