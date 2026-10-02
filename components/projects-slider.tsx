"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, ExternalLink } from "lucide-react";
import { OtherProjectItem } from "@/data/portfolio";
import { ProjectCarousel } from "./project-carousel";

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

  // 4 sets of items provide generous buffers on both ends to eliminate any blank gaps
  const extendedItems = [...items, ...items, ...items, ...items];

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

  // Keep displayIndex synchronized when items length changes
  useEffect(() => {
    setDisplayIndex(items.length);
  }, [items.length]);

  // Snap boundary helper function
  const resetBoundaryIfNeeded = useCallback(() => {
    if (items.length === 0) return;
    if (displayIndex >= items.length * 2) {
      setIsTransitioning(false);
      setDisplayIndex((prev) => prev - items.length);
    } else if (displayIndex < items.length) {
      setIsTransitioning(false);
      setDisplayIndex((prev) => prev + items.length);
    }
  }, [displayIndex, items.length]);

  // Handle boundary reset after transition ends on the track itself
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    // Only react to the track's own transform transition, not child elements (buttons, cards)
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== "transform") return;
    resetBoundaryIfNeeded();
  };

  // Fallback timer: if onTransitionEnd does not fire (e.g. background tab, dropped frame),
  // guarantee boundary reset happens right after the transition finishes (450ms)
  useEffect(() => {
    if (items.length === 0) return;
    if (displayIndex >= items.length * 2 || displayIndex < items.length) {
      const snapTimer = setTimeout(() => {
        resetBoundaryIfNeeded();
      }, 480);
      return () => clearTimeout(snapTimer);
    }
  }, [displayIndex, items.length, resetBoundaryIfNeeded]);

  // Re-enable transition after snap reset
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        const timer = setTimeout(() => {
          setIsTransitioning(true);
        }, 30);
        return () => clearTimeout(timer);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Pause auto slide and snap index if tab/browser becomes hidden
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        if (items.length > 0) {
          setDisplayIndex((prev) => {
            const mod = ((prev % items.length) + items.length) % items.length;
            return items.length + mod;
          });
          setIsTransitioning(false);
        }
      } else {
        setIsTransitioning(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, [items.length]);

  // Auto slide effect
  useEffect(() => {
    if (!isPlaying || isHovered || items.length === 0) return;

    const timer = setInterval(() => {
      // Do not advance while document is hidden in the background
      if (typeof document !== "undefined" && document.hidden) return;

      setIsTransitioning(true);
      setDisplayIndex((prev) => prev + 1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, autoPlayInterval, items.length]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setDisplayIndex((prev) => {
      if (prev <= 1) {
        return items.length;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setDisplayIndex((prev) => {
      if (prev >= items.length * 3) {
        return items.length + 1;
      }
      return prev + 1;
    });
  };

  const handleDotClick = (realIdx: number) => {
    setIsTransitioning(true);
    // Directly target the slide in the middle set
    setDisplayIndex(items.length + realIdx);
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
    items.length > 0
      ? ((displayIndex % items.length) + items.length) % items.length
      : 0;

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
                      <span className="project-number">
                        {String(realIdx + 1).padStart(2, "0")}
                      </span>
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

                      {Boolean(
                        p.link?.url &&
                          p.link.url.trim() !== "" &&
                          p.link.url !== "#"
                      ) && (
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
