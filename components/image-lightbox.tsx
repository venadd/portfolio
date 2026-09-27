"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  images: string[];
  initialIndex?: number;
  title: string;
  onClose: () => void;
}

export function ImageLightbox({
  isOpen,
  images,
  initialIndex = 0,
  title,
  onClose,
}: ImageLightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose]);

  if (!isOpen || !images || images.length === 0) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image preview`}
      onClick={onClose}
    >
      <div className="lightbox-header" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-meta">
          <span className="lightbox-title">{title}</span>
          {images.length > 1 && (
            <span className="lightbox-counter">
              ({index + 1} of {images.length})
            </span>
          )}
        </div>
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close preview"
        >
          <X size={20} />
        </button>
      </div>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <button
            className="lightbox-nav-btn lightbox-nav-btn--prev"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <div className="lightbox-image-wrapper">
          <Image
            src={images[index]}
            alt={`${title} - Preview ${index + 1}`}
            width={1200}
            height={800}
            className="lightbox-image"
            priority
          />
        </div>

        {images.length > 1 && (
          <button
            className="lightbox-nav-btn lightbox-nav-btn--next"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="lightbox-footer" onClick={(e) => e.stopPropagation()}>
          <div className="lightbox-thumbnails">
            {images.map((img, idx) => (
              <button
                key={idx}
                className={`lightbox-thumb ${idx === index ? "active" : ""}`}
                onClick={() => setIndex(idx)}
                aria-label={`Switch to image ${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  width={64}
                  height={40}
                  className="lightbox-thumb-img"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
