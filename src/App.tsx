import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomScrollbar from "@/components/CustomScrollbar";
import LoadingSpinner from "@/components/LoadingSpinner";

const queryClient = new QueryClient();

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const Settings = lazy(() => import("./pages/Settings"));
const MathLessons = lazy(() => import("./pages/math/MathLessons"));
const PhysicsLessons = lazy(() => import("./pages/physics/PhysicsLessons"));
const SVTLessons = lazy(() => import("./pages/svt/SVTLessons"));
const MathLesson = lazy(() => import("./pages/math/MathLesson"));
const PhysicsLesson = lazy(() => import("./pages/physics/PhysicsLesson"));
const SVTLesson = lazy(() => import("./pages/svt/SVTLesson"));
const FrenchLessons = lazy(() => import("./pages/french/FrenchLessons"));
const EnglishLessons = lazy(() => import("./pages/english/EnglishLessons"));
const ArabicLessons = lazy(() => import("./pages/arabic/ArabicLessons"));
const HistoryGeoLessons = lazy(() => import("./pages/history-geo/HistoryGeoLessons"));
const PhilosophyLessons = lazy(() => import("./pages/philosophy/PhilosophyLessons"));
const PhilosophyLesson = lazy(() => import("./pages/philosophy/PhilosophyLesson"));

const AppContent = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground theme={theme} />
      <CustomScrollbar theme={theme} />
      
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/math" element={<MathLessons />} />
            <Route path="/physics" element={<PhysicsLessons />} />
            <Route path="/svt" element={<SVTLessons />} />
            <Route path="/french" element={<FrenchLessons />} />
            <Route path="/english" element={<EnglishLessons />} />
            <Route path="/arabic" element={<ArabicLessons />} />
            <Route path="/histoire-geo" element={<HistoryGeoLessons />} />
            <Route path="/philosophy" element={<PhilosophyLessons />} />
            
            {/* Math lesson routes */}
            <Route path="/math/lesson/:id/course" element={<MathLesson type="course" />} />
            <Route path="/math/lesson/:id/exercises" element={<MathLesson type="exercises" />} />
            <Route path="/math/lesson/:id/videos" element={<MathLesson type="videos" />} />
            
            {/* Physics lesson routes */}
            <Route path="/physics/lesson/:id/course" element={<PhysicsLesson type="course" />} />
            <Route path="/physics/lesson/:id/exercises" element={<PhysicsLesson type="exercises" />} />
            <Route path="/physics/lesson/:id/videos" element={<PhysicsLesson type="videos" />} />
            
            {/* SVT lesson routes */}
            <Route path="/svt/lesson/:id/course" element={<SVTLesson type="course" />} />
            <Route path="/svt/lesson/:id/exercises" element={<SVTLesson type="exercises" />} />
            <Route path="/svt/lesson/:id/videos" element={<SVTLesson type="videos" />} />
            
            {/* Philosophy lesson routes */}
            <Route path="/philosophy/lesson/:id/course" element={<PhilosophyLesson type="course" />} />
            <Route path="/philosophy/lesson/:id/exercises" element={<PhilosophyLesson type="exercises" />} />
            <Route path="/philosophy/lesson/:id/videos" element={<PhilosophyLesson type="videos" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <AppContent />
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
