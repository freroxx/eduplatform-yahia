
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Clock, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface ProgressTrackerProps {
  subject: string;
  totalLessons: number;
  completedLessons: number;
  totalPoints: number;
  earnedPoints: number;
  studyTime: string;
}

const ProgressTracker = ({ 
  subject, 
  totalLessons, 
  completedLessons, 
  totalPoints, 
  earnedPoints, 
  studyTime 
}: ProgressTrackerProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((completedLessons / totalLessons) * 100);
    }, 500);
    return () => clearTimeout(timer);
  }, [completedLessons, totalLessons]);

  const getSubjectColor = (subject: string) => {
    switch (subject.toLowerCase()) {
      case 'math': return 'text-blue-600 border-blue-200 bg-blue-50';
      case 'french': return 'text-red-600 border-red-200 bg-red-50';
      case 'physics': return 'text-emerald-600 border-emerald-200 bg-emerald-50';
      case 'arabic': return 'text-amber-600 border-amber-200 bg-amber-50';
      case 'svt': return 'text-green-600 border-green-200 bg-green-50';
      default: return 'text-gray-600 border-gray-200 bg-gray-50';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-yellow-500';
    if (progress >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg font-bold">Progression en {subject}</span>
          <Badge className={`${getSubjectColor(subject)} font-medium`}>
            <Trophy className="h-3 w-3 mr-1" />
            {Math.round(progress)}%
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Leçons complétées</span>
            <span className="font-medium">{completedLessons}/{totalLessons}</span>
          </div>
          <Progress 
            value={progress} 
            className="h-2"
          />
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center text-muted-foreground">
              <Target className="h-4 w-4 mr-1" />
            </div>
            <div className="text-sm font-medium">{completedLessons}</div>
            <div className="text-xs text-muted-foreground">Leçons</div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center justify-center text-muted-foreground">
              <Star className="h-4 w-4 mr-1" />
            </div>
            <div className="text-sm font-medium">{earnedPoints}</div>
            <div className="text-xs text-muted-foreground">Points</div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center justify-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
            </div>
            <div className="text-sm font-medium">{studyTime}</div>
            <div className="text-xs text-muted-foreground">Temps</div>
          </div>
        </div>
        
        <div className="pt-2 border-t">
          <div className="flex justify-between items-center text-sm">
            <span>Objectif mensuel</span>
            <Badge variant="outline" className="text-xs">
              {earnedPoints}/{totalPoints} pts
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;
