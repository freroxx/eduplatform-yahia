import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import FrenchModule1 from './pages/FrenchModule1';
import PhysicsLesson1 from './pages/PhysicsLesson1';
import SVTLesson1 from './pages/SVTLesson1';
import Lesson1Course from './pages/Lesson1Course';
import Lesson1Exercises from './pages/Lesson1Exercises';
import Lesson1Videos from './pages/Lesson1Videos';
import { QueryClient } from '@tanstack/react-query';
import StatistiquesCourse from "./pages/StatistiquesCourse";

function App() {
  return (
    <QueryClient>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/french/module1" element={<FrenchModule1 />} />
            <Route path="/physics/lesson1" element={<PhysicsLesson1 />} />
            <Route path="/svt/lesson1" element={<SVTLesson1 />} />
            <Route path="/lesson/1/course" element={<Lesson1Course />} />
            <Route path="/lesson/1/exercises" element={<Lesson1Exercises />} />
            <Route path="/lesson/1/videos" element={<Lesson1Videos />} />
            
            {/* Add the new statistics course route */}
            <Route path="/statistiques" element={<StatistiquesCourse />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClient>
  );
}

export default App;
