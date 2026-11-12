"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./InteractiveCarousel.module.css";

export default function InteractiveCarousel({ title, subtitle, items = [], isTagGallery = false }) {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // Manual scroll buttons
  function scroll(direction) {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -360 : 360;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  }

  // Smooth continuous auto-moving marquee carousel
  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    let animId;
    const speed = 0.85;

    const step = () => {
      if (!isPaused && track) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 5) {
          track.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  return (
    <div 
      className={styles.carouselContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className={styles.headerRow}>
        <div>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          {title && <h2 className={styles.title}>{title}</h2>}
        </div>
        <div className={styles.controls}>
          <button
            onClick={() => scroll("left")}
            className={styles.controlBtn}
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className={styles.controlBtn}
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.track} ref={scrollRef}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.card} ${isTagGallery ? styles.tagCard : ""}`}
            onClick={() => setSelectedTag(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedTag(item);
              }
            }}
          >
            <div className={styles.imageBox}>
              <Image
                src={item.src}
                alt={item.title || item.alt || "O.Cube asset showcase"}
                fill
                sizes="(max-width: 640px) 290px, 340px"
                className={styles.image}
              />
              {item.material && (
                <span className={styles.materialTag}>{item.material}</span>
              )}
              {item.category && (
                <span className={styles.categoryTag}>{item.category}</span>
              )}
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              {item.code && (
                <p className={styles.cardCode}>
                  <span>ID / Serial:</span> <code>{item.code}</code>
                </p>
              )}
              {item.desc && <p className={styles.cardDesc}>{item.desc}</p>}
              <span className={styles.zoomHint}>
                {isTagGallery ? "Click to Inspect Tag ↗" : "Click to View Details ↗"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Lightbox Modal for Full-Resolution Inspection */}
      {selectedTag && (
        <div className={styles.modalBackdrop} onClick={() => setSelectedTag(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedTag(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className={styles.modalImageWrapper}>
              <Image
                src={selectedTag.src}
                alt={selectedTag.title}
                width={800}
                height={550}
                className={styles.modalImage}
              />
            </div>
            <div className={styles.modalInfo}>
              <div className={styles.modalPillRow}>
                {selectedTag.material && <span className={styles.modalPill}>{selectedTag.material}</span>}
                {selectedTag.category && <span className={styles.modalPill}>{selectedTag.category}</span>}
              </div>
              <h3>{selectedTag.title}</h3>
              {selectedTag.code && (
                <p className={styles.modalCode}>
                  <strong>Item Serial / Asset Code:</strong> <code>{selectedTag.code}</code>
                </p>
              )}
              {selectedTag.desc && <p className={styles.modalDesc}>{selectedTag.desc}</p>}
              <div className={styles.modalCtaRow}>
                <a
                  href={`https://wa.me/2348055260304?text=Hello%20O.CUBE,%20I%20am%20inquiring%20about:%20${encodeURIComponent(selectedTag.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Inquire About This Specification on WhatsApp ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
