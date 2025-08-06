
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from './pages/Index';
import Lessons from './pages/Lessons';
import Lesson1Course from './pages/Lesson1Course';
import Lesson1Exercises from './pages/Lesson1Exercises';
import Lesson1Videos from './pages/Lesson1Videos';
import StatistiquesCourse from "./pages/StatistiquesCourse";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lesson/1/course" element={<Lesson1Course />} />
            <Route path="/lesson/1/exercises" element={<Lesson1Exercises />} />
            <Route path="/lesson/1/videos" element={<Lesson1Videos />} />
            <Route path="/statistiques" element={<StatistiquesCourse />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
