
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Play, ExternalLink, Clock, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const ArabicVideos = () => {
  const { id } = useParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string>("");

  const videoData: { [key: string]: any } = {
    "401": {
      title: "فيديوهات - الإملاء",
      videos: [
        {
          id: 1,
          title: "قواعد الإملاء الأساسية",
          duration: "16:30",
          difficulty: "سهل",
          views: "23.5K",
          description: "تعلم قواعد الإملاء الأساسية والتمييز بين الهمزات",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          videoId: "dQw4w9WgXcQ"
        },
        {
          id: 2,
          title: "التاء المربوطة والمفتوحة",
          duration: "12:45",
          difficulty: "سهل",
          views: "18.2K",
          description: "الفرق بين التاء المربوطة والمفتوحة مع أمثلة تطبيقية",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          videoId: "dQw4w9WgXcQ"
        }
      ]
    },
    "407": {
      title: "فيديوهات - أسماء الآلة والزمان والمكان",
      videos: [
        {
          id: 3,
          title: "الأسماء المشتقة",
          duration: "20:15",
          difficulty: "متوسط",
          views: "15.7K",
          description: "شرح شامل لأسماء الآلة والزمان والمكان مع الأوزان والأمثلة",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          videoId: "dQw4w9WgXcQ"
        }
      ]
    }
  };

  const currentVideos = videoData[id || "401"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20" dir="rtl">
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground">فيديوهات اللغة العربية</h1>
            <p className="text-sm text-muted-foreground">{currentVideos?.title}</p>
          </div>
          <Link to="/lessons/arabic" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-all duration-200">
            <span className="font-medium">العودة للدروس</span>
            <ArrowLeft className="h-5 w-5 rotate-180" />
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {currentVideos?.videos.map((video: any) => (
            <Card key={video.id} className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="bg-amber-50 p-4 rounded-full">
                    <Play className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="flex-1 text-right">
                    <div className="flex items-center justify-end space-x-3 mb-3">
                      <Badge variant="outline">
                        <Users className="h-3 w-3 ml-1" />
                        {video.views} مشاهدة
                      </Badge>
                      <Badge variant="outline">
                        <Clock className="h-3 w-3 ml-1" />
                        {video.duration}
                      </Badge>
                      <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                        {video.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2 text-right">
                      {video.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-right">{video.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 justify-end">
                  <Button 
                    onClick={() => window.open(video.url, '_blank')}
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  >
                    <ExternalLink className="h-4 w-4 ml-2" />
                    تبويب جديد
                  </Button>
                  
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={() => {
                          setCurrentVideoId(video.videoId);
                          setIsDialogOpen(true);
                        }}
                        className="bg-amber-600 hover:bg-amber-700 text-white flex-1"
                      >
                        <Play className="h-4 w-4 ml-2" />
                        مشاهدة هنا
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                      <DialogHeader className="p-4 border-b">
                        <DialogTitle className="text-right">
                          {currentVideos.videos.find((v: any) => v.videoId === currentVideoId)?.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex-1 p-4">
                        <div className="relative w-full" style={{aspectRatio: '16/9'}}>
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArabicVideos;
