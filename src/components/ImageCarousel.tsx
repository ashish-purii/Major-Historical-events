
"use client";

import type { EventImage } from '@/lib/events';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: EventImage[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  if (!isMounted) {
    // Basic placeholder during mount to avoid layout shifts if possible
    return (
      <div className="relative w-full max-w-2xl mx-auto group">
        <div className="overflow-hidden rounded-lg shadow-lg aspect-video relative bg-muted animate-pulse" />
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      <div className="overflow-hidden rounded-lg shadow-lg aspect-video relative">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
              priority={index === 0} // Prioritize the first image in the carousel
              data-ai-hint={image.hint}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-background/70 hover:bg-background text-foreground opacity-50 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-background/70 hover:bg-background text-foreground opacity-50 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  currentIndex === index ? "bg-primary" : "bg-muted-foreground/50 hover:bg-muted-foreground"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
