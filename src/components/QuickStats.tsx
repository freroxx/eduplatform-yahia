
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Trophy, Target, TrendingUp, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface QuickStatsProps {
  totalLessons: number;
  completedLessons: number;
  totalStudyTime: string;
  currentStreak: number;
  averageScore: number;
  weeklyGoal: number;
}

const QuickStats = ({ 
  totalLessons, 
  completedLessons, 
  totalStudyTime, 
  currentStreak, 
  averageScore, 
  weeklyGoal 
}: QuickStatsProps) => {
  const stats = [
    {
      icon: BookOpen,
      label: "Leçons complétées",
      value: `${completedLessons}/${totalLessons}`,
      color: "text-blue-600 bg-blue-50",
      progress: (completedLessons / totalLessons) * 100
    },
    {
      icon: Clock,
      label: "Temps d'étude",
      value: totalStudyTime,
      color: "text-green-600 bg-green-50",
      progress: 75
    },
    {
      icon: Trophy,
      label: "Score moyen",
      value: `${averageScore}%`,
      color: "text-yellow-600 bg-yellow-50",
      progress: averageScore
    },
    {
      icon: TrendingUp,
      label: "Série actuelle",
      value: `${currentStreak} jours`,
      color: "text-purple-600 bg-purple-50",
      progress: (currentStreak / 7) * 100
    },
    {
      icon: Target,
      label: "Objectif hebdo",
      value: `${Math.min(completedLessons, weeklyGoal)}/${weeklyGoal}`,
      color: "text-red-600 bg-red-50",
      progress: (Math.min(completedLessons, weeklyGoal) / weeklyGoal) * 100
    },
    {
      icon: Calendar,
      label: "Cette semaine",
      value: `${Math.min(completedLessons, 7)} leçons`,
      color: "text-indigo-600 bg-indigo-50",
      progress: (Math.min(completedLessons, 7) / 7) * 100
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-4 w-4" />
                </div>
                <Badge variant="outline" className="text-xs">
                  {Math.round(stat.progress)}%
                </Badge>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default QuickStats;
