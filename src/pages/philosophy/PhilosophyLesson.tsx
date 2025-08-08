
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import EnhancedCourseSlide from '@/components/EnhancedCourseSlide';
import EnhancedExercisesList from '@/components/EnhancedExercisesList';
import EnhancedVideoViewer from '@/components/EnhancedVideoViewer';
import EnhancedGlobalHeader from '@/components/EnhancedGlobalHeader';
import Footer from '@/components/Footer';

interface PhilosophyLessonProps {
  type: 'course' | 'exercises' | 'videos';
}

const PhilosophyLesson = ({ type }: PhilosophyLessonProps) => {
  const { id } = useParams<{ id: string }>();
  
  const lessonData = {
    1: { title: 'تقديم عام لمجزوءة الفلسفة', content: 'Introduction générale à la philosophie...' },
    2: { title: 'نشأة الفلسفة', content: 'Les origines de la philosophie...' },
    3: { title: 'محطات في تطور الفلسفة', content: 'Les étapes du développement philosophique...' },
    // Add more lessons as needed
  };

  const currentLesson = lessonData[parseInt(id || '1') as keyof typeof lessonData] || lessonData[1];

  if (type === 'course') {
    return (
      <div className="min-h-screen">
        <EnhancedGlobalHeader />
        <div className="container mx-auto px-4 py-8">
          <EnhancedCourseSlide 
            lessonTitle={currentLesson.title}
            slides={[
              {
                id: '1',
                title: currentLesson.title,
                content: currentLesson.content,
                type: 'text'
              }
            ]}
          />
        </div>
        <Footer />
      </div>
    );
  }

  if (type === 'exercises') {
    return (
      <div className="min-h-screen">
        <EnhancedGlobalHeader />
        <div className="container mx-auto px-4 py-8">
          <EnhancedExercisesList 
            title={`Exercices - ${currentLesson.title}`}
            exercises={[
              {
                id: '1',
                title: 'Exercice de réflexion',
                description: 'Questions de compréhension',
                type: 'text',
                difficulty: 'medium',
                points: 20
              }
            ]}
          />
        </div>
        <Footer />
      </div>
    );
  }

  if (type === 'videos') {
    return (
      <div className="min-h-screen">
        <EnhancedGlobalHeader />
        <div className="container mx-auto px-4 py-8">
          <EnhancedVideoViewer 
            title={`Vidéos - ${currentLesson.title}`}
            videos={[
              {
                id: '1',
                title: `Leçon vidéo: ${currentLesson.title}`,
                url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                duration: '15:30'
              }
            ]}
          />
        </div>
        <Footer />
      </div>
    );
  }

  return null;
};

export default PhilosophyLesson;
