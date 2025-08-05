
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Maximize, Minimize, ZoomIn, ZoomOut, RotateCw, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  onClose?: () => void;
}

const PDFViewer = ({ pdfUrl, title, onClose }: PDFViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(100);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
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
            </CardTitle>
            <div className="flex items-center gap-2">
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
            <iframe
              src={pdfUrl}
              className="w-full h-full border-0"
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left' }}
              title={title}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PDFViewer;
