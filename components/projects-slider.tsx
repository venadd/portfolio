"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { OtherProjectItem } from "@/data/portfolio";
import { ProjectCarousel } from "./project-carousel";
import { ExternalLink } from "lucide-react";

interface ProjectsSliderProps {
  items: OtherProjectItem[];
  onOpenLightbox: (images: string[], index: number, title: string) => void;
  autoPlayInterval?: number;
}

export function ProjectsSlider({
  items,
  onOpenLightbox,
  autoPlayInterval = 2500,
}: ProjectsSliderProps) {
  const [cardsToShow, setCardsToShow] = useState(3);
  const [displayIndex, setDisplayIndex] = useState(items.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);

  // Triple items list for seamless continuous infinite looping
  const extendedItems = [...items, ...items, ...items];

  // Update cards to show based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle boundary reset after transition ends
  const handleTransitionEnd = () => {
    if (displayIndex >= items.length * 2) {
      setIsTransitioning(false);
      setDisplayIndex(displayIndex - items.length);
    } else if (displayIndex < items.length) {
      setIsTransitioning(false);
      setDisplayIndex(displayIndex + items.length);
    }
  };

  // Re-enable transition after snap reset
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Auto slide effect
  useEffect(() => {
    if (!isPlaying || isHovered || items.length === 0) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setDisplayIndex((prev) => prev + 1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, autoPlayInterval, items.length]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setDisplayIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setDisplayIndex((prev) => prev + 1);
  };

  const handleDotClick = (realIdx: number) => {
    setIsTransitioning(true);
    // Find closest target index to current displayIndex
    const currentRealIdx = ((displayIndex % items.length) + items.length) % items.length;
    const diff = realIdx - currentRealIdx;
    setDisplayIndex((prev) => prev + diff);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const activeRealIndex =
    ((displayIndex % items.length) + items.length) % items.length;

  return (
    <div
      className="slider-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider-controls-top">
        <div className="slider-status">
          <span className="slider-badge">
            {activeRealIndex + 1} / {items.length}
          </span>
          <button
            type="button"
            className="slider-toggle-play"
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
            aria-label={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
          >
            {isPlaying ? <Pause size={13} /> : <Play size={13} />}
          </button>
        </div>

        <div className="slider-nav-btns">
          <button
            type="button"
            className="slider-nav-btn"
            onClick={handlePrev}
            aria-label="Previous projects"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="slider-nav-btn"
            onClick={handleNext}
            aria-label="Next projects"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="slider-track-viewport">
        <div
          className="slider-track"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${displayIndex * (100 / cardsToShow)}%)`,
            transition: isTransitioning
              ? "transform 450ms cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
          }}
        >
          {extendedItems.map((p, i) => {
            const realIdx = i % items.length;
            return (
              <div
                className="slider-item-col"
                key={`${p.id || p.title}-${i}`}
                style={{ flex: `0 0 ${100 / cardsToShow}%` }}
              >
                <article className="compact-project-card">
                  <div className="compact-card-media">
                    <ProjectCarousel
                      images={p.images}
                      title={p.title}
                      compact
                      onOpenLightbox={(idx) =>
                        onOpenLightbox(p.images, idx, p.title)
                      }
                    />
                  </div>

                  <div className="compact-card-content">
                    <div className="compact-card-header">
                      <span className="project-number">0{realIdx + 1}</span>
                      {p.category && (
                        <span className="category">{p.category}</span>
                      )}
                    </div>

                    <h4 className="compact-card-title">{p.title}</h4>
                    <p className="compact-card-desc">{p.description}</p>

                    <div className="compact-card-footer">
                      <div className="tags">
                        {p.stack.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>

                      {Boolean(p.link?.url && p.link.url.trim() !== "" && p.link.url !== "#") && (
                        <div className="compact-card-action">
                          <a
                            href={p.link!.url}
                            target="_blank"
                            rel="noreferrer"
                            className="compact-link"
                          >
                            <span>{p.link!.label}</span>
                            <ExternalLink size={13} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div className="slider-dots">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`slider-dot ${idx === activeRealIndex ? "active" : ""}`}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
