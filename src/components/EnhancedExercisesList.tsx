
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Clock, Target } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  description: string;
  type: string;
  difficulty: string;
  points: number;
}

interface EnhancedExercisesListProps {
  title: string;
  exercises: Exercise[];
}

const EnhancedExercisesList = ({ title, exercises }: EnhancedExercisesListProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'hard': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen animated-bg">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground">
            Exercices et activités pratiques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="glass-effect border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 group-hover:from-blue-500/10 group-hover:to-purple-600/10 transition-all duration-500" />
                
                <CardHeader className="pb-3 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FileText className="h-5 w-5" />
                    </div>
                    <Badge className={`${getDifficultyColor(exercise.difficulty)} font-medium border`}>
                      <Target className="h-3 w-3 mr-1" />
                      {exercise.difficulty}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-card-foreground group-hover:text-blue-600 transition-colors duration-300">
                    {exercise.title}
                  </CardTitle>
                  
                  <p className="text-sm text-muted-foreground mt-2">
                    {exercise.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{exercise.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      <span>{exercise.points} pts</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <FileText className="h-4 w-4 mr-2" />
                    Commencer l'exercice
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedExercisesList;
