import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CentrifugalCarouselProps {
  images: string[];
  title: string;
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export function CentrifugalCarousel({
  images,
  title,
  className,
  autoPlay = true,
  interval = 4000
}: CentrifugalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* Main Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ 
              duration: 0.7,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src={images[currentIndex]}
              alt={`${title} - Vista ${currentIndex + 1}`}
              className="w-full h-full object-contain p-4"
              style={{
                filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))'
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlays for better integration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/5 to-transparent" />
        </div>
      </div>

    </div>
  );
}