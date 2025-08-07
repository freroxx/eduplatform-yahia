import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from './pages/Index';
import Lessons from './pages/Lessons';
import Lesson1Course from './pages/Lesson1Course';
import Lesson1Exercises from './pages/Lesson1Exercises';
import Lesson1Videos from './pages/Lesson1Videos';
import StatistiquesCourse from "./pages/StatistiquesCourse";
import TransformationsCourse from "./pages/TransformationsCourse";
import MathCourse from "./pages/MathCourse";
import MathExercises from "./pages/MathExercises";
import Settings from "./pages/Settings";
import MotivationalQuoteBar from "./components/MotivationalQuoteBar";

// Math imports
import MathLessons from "./pages/math/MathLessons";
import MathVideos from "./pages/math/MathVideos";

// Physics imports
import PhysicsLessons from "./pages/physics/PhysicsLessons";
import PhysicsCourse from "./pages/physics/PhysicsCourse";
import PhysicsExercises from "./pages/physics/PhysicsExercises";
import PhysicsVideos from "./pages/physics/PhysicsVideos";

// SVT imports
import SVTLessons from "./pages/svt/SVTLessons";
import SVTCourse from "./pages/svt/SVTCourse";
import SVTExercises from "./pages/svt/SVTExercises";
import SVTVideos from "./pages/svt/SVTVideos";

// French imports
import FrenchLessons from "./pages/french/FrenchLessons";
import FrenchCourse from "./pages/french/FrenchCourse";
import FrenchExercises from "./pages/french/FrenchExercises";
import FrenchVideos from "./pages/french/FrenchVideos";

// English imports
import EnglishLessons from "./pages/english/EnglishLessons";
import EnglishCourse from "./pages/EnglishCourse";
import EnglishExercises from "./pages/EnglishExercises";
import EnglishVideos from "./pages/english/EnglishVideos";

// Arabic imports
import ArabicLessons from "./pages/arabic/ArabicLessons";
import ArabicCourse from "./pages/arabic/ArabicCourse";
import ArabicExercises from "./pages/arabic/ArabicExercises";
import ArabicVideos from "./pages/arabic/ArabicVideos";

// History-Geography imports
import HistoireGeoLessons from "./pages/histoire-geo/HistoireGeoLessons";
import HistoireGeoCourse from "./pages/histoire-geo/HistoireGeoCourse";
import HistoireGeoExercises from "./pages/histoire-geo/HistoireGeoExercises";
import HistoireGeoVideos from "./pages/histoire-geo/HistoireGeoVideos";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <MotivationalQuoteBar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lesson/1/course" element={<Lesson1Course />} />
            <Route path="/lesson/1/exercises" element={<Lesson1Exercises />} />
            <Route path="/lesson/1/videos" element={<Lesson1Videos />} />
            <Route path="/statistiques" element={<StatistiquesCourse />} />
            <Route path="/math" element={<MathCourse />} />
            <Route path="/math/exercises" element={<MathExercises />} />
            <Route path="/math/transformations" element={<TransformationsCourse />} />
            <Route path="/settings" element={<Settings />} />
            
            {/* Math Routes */}
            <Route path="/lessons/math" element={<MathLessons />} />
            <Route path="/math/lesson/:id/course" element={<MathCourse />} />
            <Route path="/math/lesson/:id/exercises" element={<MathExercises />} />
            <Route path="/math/lesson/:id/videos" element={<MathVideos />} />
            
            {/* Physics Routes */}
            <Route path="/lessons/physics" element={<PhysicsLessons />} />
            <Route path="/physics/lesson/:id/course" element={<PhysicsCourse />} />
            <Route path="/physics/lesson/:id/exercises" element={<PhysicsExercises />} />
            <Route path="/physics/lesson/:id/videos" element={<PhysicsVideos />} />
            
            {/* SVT Routes */}
            <Route path="/lessons/svt" element={<SVTLessons />} />
            <Route path="/svt/lesson/:id/course" element={<SVTCourse />} />
            <Route path="/svt/lesson/:id/exercises" element={<SVTExercises />} />
            <Route path="/svt/lesson/:id/videos" element={<SVTVideos />} />
            
            {/* French Routes */}
            <Route path="/lessons/french" element={<FrenchLessons />} />
            <Route path="/french/lesson/:id/course" element={<FrenchCourse />} />
            <Route path="/french/lesson/:id/exercises" element={<FrenchExercises />} />
            <Route path="/french/lesson/:id/videos" element={<FrenchVideos />} />
            
            {/* English Routes */}
            <Route path="/lessons/english" element={<EnglishLessons />} />
            <Route path="/english/lesson/:id/course" element={<EnglishCourse />} />
            <Route path="/english/lesson/:id/exercises" element={<EnglishExercises />} />
            <Route path="/english/lesson/:id/videos" element={<EnglishVideos />} />
            
            {/* Arabic Routes */}
            <Route path="/lessons/arabic" element={<ArabicLessons />} />
            <Route path="/arabic/lesson/:id/course" element={<ArabicCourse />} />
            <Route path="/arabic/lesson/:id/exercises" element={<ArabicExercises />} />
            <Route path="/arabic/lesson/:id/videos" element={<ArabicVideos />} />
            
            {/* History-Geography Routes */}
            <Route path="/lessons/histoire-geo" element={<HistoireGeoLessons />} />
            <Route path="/histoire-geo/lesson/:id/course" element={<HistoireGeoCourse />} />
            <Route path="/histoire-geo/lesson/:id/exercises" element={<HistoireGeoExercises />} />
            <Route path="/histoire-geo/lesson/:id/videos" element={<HistoireGeoVideos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
