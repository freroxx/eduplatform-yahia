
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Maximize, Minimize, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PDFViewerProps {
  pdfUrl: string | string[];
  title: string;
  onClose?: () => void;
}

const PDFViewer = ({ pdfUrl, title, onClose }: PDFViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle both single image and array of images
  const images = Array.isArray(pdfUrl) ? pdfUrl : [pdfUrl];
  const currentImage = images[currentImageIndex];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentImage;
    link.download = `${title}-page-${currentImageIndex + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const adjustZoom = (increment: number) => {
    setZoom(prev => Math.max(50, Math.min(200, prev + increment)));
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => Math.min(prev + 1, images.length - 1));
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`${
        isFullscreen 
          ? "fixed inset-0 z-50 bg-background" 
          : "w-full h-[80vh]"
      } transition-all duration-300`}
    >
      <Card className="h-full border-0 shadow-2xl">
        <CardHeader className="pb-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              {title}
              {images.length > 1 && (
                <span className="text-sm opacity-90">
                  ({currentImageIndex + 1}/{images.length})
                </span>
              )}
            </CardTitle>
            <div className="flex items-center gap-2">
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                    className="text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextImage}
                    disabled={currentImageIndex === images.length - 1}
                    className="text-white hover:bg-white/20"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => adjustZoom(-10)}
                className="text-white hover:bg-white/20"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm px-2">{zoom}%</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => adjustZoom(10)}
                className="text-white hover:bg-white/20"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="text-white hover:bg-white/20"
              >
                {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownload}
                className="text-white hover:bg-white/20"
              >
                <Download className="h-4 w-4" />
              </Button>
              {onClose && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-white hover:bg-white/20"
                >
                  ×
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 h-full overflow-hidden">
          <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <div 
              className="max-w-full max-h-full overflow-auto flex items-center justify-center"
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center' }}
            >
              <motion.img
                key={currentImageIndex}
                src={currentImage}
                alt={`${title} - Page ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain shadow-lg rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ minHeight: '400px' }}
              />
            </div>
          </div>
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex
                      ? "bg-primary"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PDFViewer;
