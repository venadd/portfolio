"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface ProjectCarouselProps {
  images: string[];
  title: string;
  onOpenLightbox?: (index: number) => void;
  aspectRatio?: string;
  compact?: boolean;
}

export function ProjectCarousel({
  images,
  title,
  onOpenLightbox,
  aspectRatio = "16 / 10",
  compact = false,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    setCurrentIndex(idx);
  };

  const handleContainerClick = () => {
    if (onOpenLightbox) {
      onOpenLightbox(currentIndex);
    }
  };

  return (
    <div
      className={`carousel-container ${compact ? "carousel-container--compact" : ""}`}
      style={{ aspectRatio }}
      onClick={handleContainerClick}
      title="Click to view full preview"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleContainerClick();
        }
      }}
    >
      <div className="carousel-slide">
        <Image
          src={images[currentIndex]}
          alt={`${title} - Preview ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="carousel-img"
          priority={false}
        />
      </div>

      <div className="carousel-zoom-hint">
        <Maximize2 size={12} />
        <span>Expand</span>
      </div>

      {images.length > 1 && (
        <>
          <div className="carousel-badge">
            {currentIndex + 1} / {images.length}
          </div>

          <button
            type="button"
            className="carousel-btn carousel-btn--prev"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            type="button"
            className="carousel-btn carousel-btn--next"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>

          <div className="carousel-dots" onClick={(e) => e.stopPropagation()}>
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={(e) => handleDotClick(e, idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
