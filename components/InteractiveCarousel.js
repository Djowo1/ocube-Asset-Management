"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./InteractiveCarousel.module.css";

export default function InteractiveCarousel({ title, subtitle, items = [], isTagGallery = false }) {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedTag) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedTag]);

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
              
              <div className={styles.cardActions}>
                <a
                  href={`https://wa.me/2348055260304?text=Hello%20O.CUBE,%20I%20would%20like%20to%20inquire%20about%20your%20${encodeURIComponent(item.title || "asset specification")}${item.material ? `%20(${encodeURIComponent(item.material)})` : ""}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.inquireBtn}
                  onClick={(e) => e.stopPropagation()}
                >
                  Inquire on WhatsApp ↗
                </a>
                <span className={styles.zoomHint}>
                  {isTagGallery ? "Inspect ↗" : "Details ↗"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Lightbox Modal Portal for Full-Resolution Inspection */}
      {selectedTag && mounted && typeof document !== "undefined" && createPortal(
        <div 
          className={styles.modalBackdrop} 
          onClick={() => setSelectedTag(null)}
          role="dialog"
          aria-modal="true"
        >
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
                priority
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
                  href={`https://wa.me/2348055260304?text=Hello%20O.CUBE,%20I%20would%20like%20to%20inquire%20about%20your%20${encodeURIComponent(selectedTag.title || "asset specification")}${selectedTag.material ? `%20(${encodeURIComponent(selectedTag.material)})` : ""}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${styles.modalInquireBtn}`}
                >
                  Inquire About This Specification on WhatsApp ↗
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
