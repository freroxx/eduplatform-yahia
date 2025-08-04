
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Clock, TrendingUp, BookOpen, Star, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useExerciseProgress } from "@/hooks/useExerciseProgress";

const StatsOverview = () => {
  const { totalPoints, completedExercises } = useExerciseProgress();
  
  const stats = [
    {
      title: "Points totaux",
      value: totalPoints,
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
    },
    {
      title: "Exercices terminés",
      value: completedExercises.length,
      icon: <Target className="h-6 w-6 text-green-500" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      title: "Temps d'étude",
      value: `${Math.round(completedExercises.length * 15)} min`,
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      title: "Progression",
      value: completedExercises.length > 0 ? "En cours" : "Commencer",
      icon: <TrendingUp className="h-6 w-6 text-purple-500" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    }
  ];

  const achievements = [
    {
      title: "Premier pas",
      description: "Première leçon terminée",
      icon: <Star className="h-5 w-5" />,
      unlocked: completedExercises.length >= 1,
      color: "text-yellow-500"
    },
    {
      title: "Studieux",
      description: "5 exercices terminés",
      icon: <BookOpen className="h-5 w-5" />,
      unlocked: completedExercises.length >= 5,
      color: "text-blue-500"
    },
    {
      title: "Expert",
      description: "10 exercices terminés",
      icon: <Zap className="h-5 w-5" />,
      unlocked: completedExercises.length >= 10,
      color: "text-purple-500"
    },
    {
      title: "Maître",
      description: "100+ points obtenus",
      icon: <Award className="h-5 w-5" />,
      unlocked: totalPoints >= 100,
      color: "text-emerald-500"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`${stat.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} shadow-lg`}>
                    {React.cloneElement(stat.icon, { className: "h-6 w-6 text-white" })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Succès débloqués
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    achievement.unlocked
                      ? "bg-white dark:bg-gray-800 border-green-200 dark:border-green-800 shadow-md"
                      : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 opacity-60"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${achievement.unlocked ? achievement.color : "text-gray-400"}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-sm ${achievement.unlocked ? "text-foreground" : "text-muted-foreground"}`}>
                        {achievement.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {achievement.description}
                      </p>
                      {achievement.unlocked && (
                        <Badge className="mt-2 bg-green-100 text-green-800 border-green-200 text-xs">
                          Débloqué ✓
                        </Badge>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default StatsOverview;
