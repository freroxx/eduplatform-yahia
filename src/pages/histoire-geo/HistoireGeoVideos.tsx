
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, ChevronRight, Home, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";

const HistoireGeoVideos = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoSets = {
    "501": {
      title: "العالم المتوسطي في القرنين 15م و18م",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "نشأة الإمبراطورية العثمانية",
          description: "تاريخ توسع العثمانيين وسيطرتهم على شرق المتوسط",
          duration: "18:45",
          level: "متوسط"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "إسبانيا في عصر الملوك الكاثوليك",
          description: "توحيد إسبانيا وسقوط الأندلس",
          duration: "16:32",
          level: "متوسط"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "التجارة في البحر المتوسط",
          description: "طرق التجارة والتبادل التجاري في المتوسط",
          duration: "14:28",
          level: "سهل"
        }
      ]
    },
    "521": {
      title: "ملف حول كارثة طبيعية (الزلازل في المغرب)",
      videos: [
        {
          id: "dQw4w9WgXcQ",
          title: "جيولوجية المغرب والنشاط الزلزالي",
          description: "الصفائح التكتونية وأسباب الزلازل في المغرب",
          duration: "15:20",
          level: "متوسط"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "زلزال أكادير 1960: دروس وعبر",
          description: "تحليل لأسوأ زلزال في تاريخ المغرب المعاصر",
          duration: "20:15",
          level: "سهل"
        },
        {
          id: "dQw4w9WgXcQ",
          title: "إدارة مخاطر الزلازل",
          description: "استراتيجيات الوقاية والاستعداد للزلازل",
          duration: "17:38",
          level: "متوسط"
        }
      ]
    }
  };

  const currentSet = videoSets[id as keyof typeof videoSets] || videoSets["501"];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "سهل": return "bg-green-100 text-green-800 border-green-200";
      case "متوسط": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "صعب": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen animated-bg" dir="rtl">
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
                <Home className="h-4 w-4 ml-2" />
                الصفحة الرئيسية
              </Button>
            </Link>
            <Link to="/lessons/histoire-geo">
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4 ml-2" />
                العودة للدروس
              </Button>
            </Link>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
              <Play className="h-8 w-8 text-red-600" />
              {currentSet.title}
            </h1>
            <p className="text-muted-foreground">
              الدرس {id} - فيديوهات تعليمية في التاريخ والجغرافيا
            </p>
          </div>

          {/* Video Player */}
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedVideo}?rel=0`}
                      title="فيديو تعليمي في التاريخ والجغرافيا"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Video List */}
          <div className="grid gap-6">
            {currentSet.videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3 justify-end">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {video.duration}
                          </Badge>
                          <Badge className={`${getLevelColor(video.level)} font-medium border`}>
                            {video.level}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-red-600 transition-colors text-right">
                          {video.title}
                        </CardTitle>
                        <p className="text-muted-foreground mt-2 leading-relaxed text-right">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3 justify-end">
                      <Button
                        variant="outline"
                        asChild
                      >
                        <a
                          href={`https://www.youtube.com/watch?v=${video.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 ml-2" />
                          فتح في يوتيوب
                        </a>
                      </Button>
                      <Button
                        onClick={() => setSelectedVideo(video.id)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <Play className="h-4 w-4 ml-2" />
                        مشاهدة
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 justify-end">
                  <div className="text-right">
                    <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                      نصائح لاستخدام الفيديوهات التعليمية
                    </h3>
                    <ul className="text-orange-700 dark:text-orange-300 space-y-1 text-sm">
                      <li>• اكتب الملاحظات أثناء المشاهدة</li>
                      <li>• توقف مؤقتاً للتفكير في المعلومات</li>
                      <li>• أعد المشاهدة عند الحاجة</li>
                      <li>• اربط المعلومات بالخرائط والمصادر</li>
                    </ul>
                  </div>
                  <Play className="h-6 w-6 text-orange-600 mt-1" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HistoireGeoVideos;
