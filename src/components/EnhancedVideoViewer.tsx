
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Play, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VideoData {
  id: string;
  title: string;
  url: string;
  duration?: string;
  description?: string;
}

interface EnhancedVideoViewerProps {
  videos: VideoData[];
  title: string;
  onClose?: () => void;
  isOpen?: boolean;
}

const EnhancedVideoViewer = ({ videos, title, onClose, isOpen = true }: EnhancedVideoViewerProps) => {
  const [selectedVideo, setSelectedVideo] = React.useState<VideoData | null>(videos[0] || null);

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1` : url;
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen || videos.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="w-full max-w-7xl h-[90vh] flex gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Video Player */}
          <Card className="flex-1 border-0 shadow-2xl overflow-hidden">
            <CardHeader className="pb-3 bg-gradient-to-r from-red-600 to-pink-600 text-white">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  <Play className="h-6 w-6" />
                  <div>
                    <div className="text-lg font-bold">{title}</div>
                    {selectedVideo && (
                      <div className="text-sm opacity-90 font-normal">
                        {selectedVideo.title}
                      </div>
                    )}
                  </div>
                </CardTitle>
                
                <div className="flex items-center gap-2">
                  {selectedVideo && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openInNewTab(selectedVideo.url)}
                        className="text-white hover:bg-white/20"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          const iframe = document.querySelector('iframe');
                          if (iframe?.requestFullscreen) {
                            iframe.requestFullscreen();
                          }
                        }}
                        className="text-white hover:bg-white/20"
                      >
                        <Maximize className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                  {onClose && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onClose}
                      className="text-white hover:bg-white/20"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0 h-full bg-black flex items-center justify-center">
              {selectedVideo ? (
                <div className="w-full h-full aspect-video">
                  <iframe
                    src={getYouTubeEmbedUrl(selectedVideo.url)}
                    title={selectedVideo.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="text-white text-center p-8">
                  <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-xl mb-2">Aucune vidéo sélectionnée</p>
                  <p className="text-muted-foreground">Choisissez une vidéo dans la liste</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Video List */}
          {videos.length > 1 && (
            <Card className="w-80 border-0 shadow-2xl">
              <CardHeader className="pb-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                <CardTitle className="text-lg">
                  Vidéos disponibles
                  <Badge variant="secondary" className="ml-2 bg-white/20 text-white">
                    {videos.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-0 h-full overflow-y-auto">
                <div className="divide-y">
                  {videos.map((video, index) => (
                    <motion.div
                      key={video.id}
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                      className={`p-4 cursor-pointer transition-colors ${
                        selectedVideo?.id === video.id 
                          ? "bg-primary/10 border-l-4 border-primary" 
                          : "hover:bg-muted/50"
                      }`}
                      onClick={() => setSelectedVideo(video)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          selectedVideo?.id === video.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {index + 1}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className={`font-semibold text-sm line-clamp-2 mb-1 ${
                            selectedVideo?.id === video.id
                              ? "text-primary"
                              : "text-foreground"
                          }`}>
                            {video.title}
                          </div>
                          
                          {video.description && (
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                              {video.description}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between">
                            {video.duration && (
                              <Badge variant="outline" className="text-xs">
                                {video.duration}
                              </Badge>
                            )}
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                openInNewTab(video.url);
                              }}
                              className="h-6 w-6 p-0 hover:bg-primary/20"
                            >
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnhancedVideoViewer;
