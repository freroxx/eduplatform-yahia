
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, BookOpen, PlayCircle, PenTool, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";

const EnglishLessons = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  const lessons = [
    {
      id: 1,
      title: "English Tenses - Present and Past",
      description: "Master the fundamental English tenses with comprehensive explanations and practice exercises.",
      difficulty: "Easy",
      duration: "45 min",
      progress: 85,
      topics: ["Present Simple", "Present Continuous", "Past Simple", "Past Continuous"],
      students: 1250,
      rating: 4.8
    },
    {
      id: 2,
      title: "English Grammar Fundamentals",
      description: "Build a solid foundation in English grammar with essential rules and structures.",
      difficulty: "Easy",
      duration: "60 min",
      progress: 0,
      topics: ["Nouns", "Verbs", "Adjectives", "Articles"],
      students: 980,
      rating: 4.7
    },
    {
      id: 3,
      title: "Vocabulary Building",
      description: "Expand your English vocabulary with common words and phrases used in daily life.",
      difficulty: "Medium",
      duration: "40 min",
      progress: 0,
      topics: ["Daily Vocabulary", "Synonyms", "Antonyms", "Context"],
      students: 750,
      rating: 4.6
    }
  ];

  const difficulties = ["all", "Easy", "Medium", "Hard"];

  const filteredLessons = selectedDifficulty === "all" 
    ? lessons 
    : lessons.filter(lesson => lesson.difficulty === selectedDifficulty);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800 border-green-200";
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Hard": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <GlobalHeader />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground">English Lessons</h1>
              <p className="text-muted-foreground">Master English with our comprehensive courses</p>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {lessons.length} lessons
            </Badge>
          </div>

          {/* Difficulty Filter */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 p-1 bg-muted rounded-lg">
              {difficulties.map((difficulty) => (
                <Button
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className="capitalize"
                >
                  {difficulty === "all" ? "Tous" : difficulty}
                </Button>
              ))}
            </div>
          </div>

          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={`${getDifficultyColor(lesson.difficulty)} font-medium border`}>
                        {lesson.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {lesson.rating}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold">{lesson.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{lesson.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {lesson.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {lesson.students}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Progression</span>
                          <span className="text-sm text-muted-foreground">{lesson.progress}%</span>
                        </div>
                        <Progress value={lesson.progress} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <span className="text-sm font-medium">Topics:</span>
                        <div className="flex flex-wrap gap-1">
                          {lesson.topics.map((topic, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-4">
                        <Link to={`/english/lesson/${lesson.id}/course`}>
                          <Button size="sm" variant="outline" className="w-full">
                            <BookOpen className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link to={`/english/lesson/${lesson.id}/exercises`}>
                          <Button size="sm" variant="outline" className="w-full">
                            <PenTool className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link to={`/english/lesson/${lesson.id}/videos`}>
                          <Button size="sm" variant="outline" className="w-full">
                            <PlayCircle className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnglishLessons;
