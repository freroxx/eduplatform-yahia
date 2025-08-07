
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, 
  Maximize, 
  Minimize, 
  ZoomIn, 
  ZoomOut, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen,
  Grid,
  Eye,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface EnhancedPDFViewerProps {
  pdfUrl: string | string[];
  title: string;
  onClose?: () => void;
  isOpen?: boolean;
}

const EnhancedPDFViewer = ({ pdfUrl, title, onClose, isOpen = true }: EnhancedPDFViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);

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
    setZoom(prev => Math.max(25, Math.min(300, prev + increment)));
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => Math.min(prev + 1, images.length - 1));
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => Math.max(prev - 1, 0));
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    setShowThumbnails(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${
          isFullscreen 
            ? "fixed inset-0 z-50 bg-background/95 backdrop-blur-sm" 
            : "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
        } transition-all duration-300`}
        onClick={isFullscreen ? undefined : onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`${
            isFullscreen 
              ? "w-full h-full" 
              : "w-full max-w-6xl h-[90vh]"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Card className="h-full border-0 shadow-2xl overflow-hidden">
            {/* Header */}
            <CardHeader className="pb-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white shrink-0">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6" />
                  <div>
                    <div className="text-lg font-bold">{title}</div>
                    {images.length > 1 && (
                      <div className="text-sm opacity-90 font-normal">
                        Page {currentImageIndex + 1} sur {images.length}
                      </div>
                    )}
                  </div>
                </CardTitle>
                
                <div className="flex items-center gap-2">
                  {/* Navigation Controls */}
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
                      <Separator orientation="vertical" className="h-6 bg-white/30" />
                    </>
                  )}
                  
                  {/* Thumbnail Toggle */}
                  {images.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowThumbnails(!showThumbnails)}
                      className="text-white hover:bg-white/20"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                  )}
                  
                  {/* Zoom Controls */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => adjustZoom(-25)}
                    className="text-white hover:bg-white/20"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Badge variant="outline" className="border-white/30 text-white bg-transparent px-3">
                    {zoom}%
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => adjustZoom(25)}
                    className="text-white hover:bg-white/20"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  
                  <Separator orientation="vertical" className="h-6 bg-white/30" />
                  
                  {/* Action Buttons */}
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
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>

            {/* Content */}
            <CardContent className="p-0 h-full overflow-hidden flex">
              {/* Thumbnails Sidebar */}
              <AnimatePresence>
                {showThumbnails && images.length > 1 && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="bg-muted border-r overflow-y-auto p-2 space-y-2"
                  >
                    {images.map((img, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
                          index === currentImageIndex 
                            ? "border-primary shadow-lg" 
                            : "border-transparent hover:border-muted-foreground"
                        }`}
                        onClick={() => goToImage(index)}
                      >
                        <img
                          src={img}
                          alt={`Page ${index + 1}`}
                          className="w-full h-24 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1">
                          <div className="text-white text-xs text-center font-medium">
                            {index + 1}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Image Viewer */}
              <div className="flex-1 bg-gray-100 dark:bg-gray-900 flex items-center justify-center overflow-hidden relative">
                <div 
                  className="max-w-full max-h-full overflow-auto flex items-center justify-center transition-transform duration-300"
                  style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center' }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={currentImage}
                      alt={`${title} - Page ${currentImageIndex + 1}`}
                      className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      style={{ minHeight: '400px' }}
                    />
                  </AnimatePresence>
                </div>
                
                {/* Navigation Overlay */}
                {images.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={prevImage}
                      disabled={currentImageIndex === 0}
                      className="pointer-events-auto opacity-0 hover:opacity-100 transition-opacity shadow-lg"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={nextImage}
                      disabled={currentImageIndex === images.length - 1}
                      className="pointer-events-auto opacity-0 hover:opacity-100 transition-opacity shadow-lg"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>

            {/* Bottom Navigation */}
            {images.length > 1 && !showThumbnails && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-background/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? "bg-primary scale-125"
                        : "bg-muted-foreground hover:bg-primary/70 hover:scale-110"
                    }`}
                  />
                ))}
              </div>
            )}
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnhancedPDFViewer;
