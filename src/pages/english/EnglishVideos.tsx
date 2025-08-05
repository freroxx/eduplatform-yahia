
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, PlayCircle, Clock, Eye, ThumbsUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";

const EnglishVideos = () => {
  const videos = [
    {
      id: 1,
      title: "Introduction to English Tenses",
      description: "A comprehensive overview of English tenses with examples and usage patterns.",
      duration: "12:30",
      views: "15.2K",
      likes: "1.1K",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop",
      difficulty: "Beginner",
      topics: ["Tenses", "Grammar", "Basics"]
    },
    {
      id: 2,
      title: "Present Simple vs Present Continuous",
      description: "Learn the difference between present simple and present continuous with practical examples.",
      duration: "8:45",
      views: "12.8K",
      likes: "956",
      thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=225&fit=crop",
      difficulty: "Beginner",
      topics: ["Present Tenses", "Usage", "Examples"]
    },
    {
      id: 3,
      title: "Past Tenses Explained Simply",
      description: "Master past simple and past continuous tenses with clear explanations and practice.",
      duration: "10:15",
      views: "9.5K",
      likes: "743",
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=225&fit=crop",
      difficulty: "Beginner",
      topics: ["Past Tenses", "Grammar", "Practice"]
    },
    {
      id: 4,
      title: "Common English Grammar Mistakes",
      description: "Avoid these frequent grammar errors that many English learners make.",
      duration: "15:20",
      views: "18.7K",
      likes: "1.4K",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
      difficulty: "Intermediate",
      topics: ["Mistakes", "Grammar", "Tips"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 border-red-200";
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
            <Link to="/lessons/english">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to lessons
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-2 justify-center">
                <PlayCircle className="h-8 w-8 text-blue-600" />
                English Video Lessons
              </h1>
              <p className="text-muted-foreground">Visual learning with expert explanations</p>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <PlayCircle className="h-4 w-4" />
              {videos.length} videos
            </Badge>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <PlayCircle className="h-16 w-16 text-white" />
                    </div>
                    <Badge 
                      className={`absolute top-2 right-2 ${getDifficultyColor(video.difficulty)} font-medium border`}
                    >
                      {video.difficulty}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg font-bold line-clamp-2">{video.title}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {video.duration}
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {video.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            {video.likes}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="text-sm font-medium">Topics:</span>
                        <div className="flex flex-wrap gap-1">
                          {video.topics.map((topic, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Watch Video
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Card className="bg-card/60 backdrop-blur-sm border-dashed border-2 border-muted-foreground/20">
              <CardContent className="text-center py-12">
                <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">More Videos Coming Soon!</h3>
                <p className="text-muted-foreground">
                  We're constantly creating new video content to help you master English. 
                  Stay tuned for more lessons covering advanced topics!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnglishVideos;
