"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./IndustriesCarousel.module.css";

const INDUSTRIES = [
  {
    num: "01",
    image: "/img/ind-government.jpg",
    title: "Government Agencies & MDAs",
    desc: "Federal & State ministries, departments, municipal secretariats, and public infrastructure projects requiring strict compliance with Fiscal Responsibility Acts.",
    highlight: "Audit Assurance & Ledger Compliance"
  },
  {
    num: "02",
    image: "/img/ind-finance.jpg",
    title: "Financial Institutions & Banks",
    desc: "Commercial banks, fintechs, and microfinance nationwide branch networks tracking tellers, cash safes, servers, and multi-tier office infrastructure.",
    highlight: "Nationwide Branch Visibility"
  },
  {
    num: "03",
    image: "/img/ind-manufacturing.jpg",
    title: "Manufacturing & Heavy Plants",
    desc: "Sugar refineries, bottling facilities, assembly lines, boilers, and heavy plant equipment tracked with heat-proof 005 anodised aluminium barcode plates.",
    highlight: "Industrial Grade Durability"
  },
  {
    num: "04",
    image: "/img/ind-healthcare.jpg",
    title: "Healthcare Organizations & Hospitals",
    desc: "Medical diagnostic scanners, laboratory analyzers, ICU equipment, and surgical clinic tools with sterilization-safe antimicrobial asset tags.",
    highlight: "High-Value Critical Assets"
  },
  {
    num: "05",
    image: "/img/ind-education.jpg",
    title: "Educational Institutions & Campuses",
    desc: "Universities, campus laboratories, research ICT centers, lecture halls, and faculty departments requiring comprehensive institutional inventories.",
    highlight: "Multi-Faculty Asset Registers"
  },
  {
    num: "06",
    image: "/img/ind-logistics.jpg",
    title: "Logistics, Fleets & FMCG",
    desc: "Quick-service restaurant delivery motorbikes, logistics haulage fleets, warehouse forklifts, and urban dispatch boxes with rugged chassis tags.",
    highlight: "Real-Time Fleet Governance"
  },
  {
    num: "07",
    image: "/img/ind-telecoms.jpg",
    title: "Telecommunications & Energy",
    desc: "Cellular masts, base stations, server racks, backup diesel generators, and off-grid remote solar power units mapped to GPS coordinates.",
    highlight: "Remote Site Accountability"
  },
  {
    num: "08",
    image: "/img/ind-ngo.jpg",
    title: "Non-Governmental Organizations (NGOs)",
    desc: "International aid missions, donor-funded vehicles, cold chain medical assets, and field office equipment requiring strict donor audit reporting.",
    highlight: "Donor-Compliant Reporting"
  }
];

export default function IndustriesCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  // Manual button scrolls
  const handleScroll = (direction) => {
    if (!trackRef.current) return;
    const scrollAmount = direction === "left" ? -360 : 360;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Smooth continuous right-to-left marquee auto-scroll when not hovered
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrameId;
    let lastTime = performance.now();

    const scrollStep = (currentTime) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (!isPaused && track) {
        // Scroll rightwards by ~0.8px per frame for a calm, ultra-smooth continuous movement
        track.scrollLeft += (delta * 0.05);

        // Seamless infinite loop check: if reached halfway of doubled items, reset to beginning
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Duplicate items array once to achieve infinite seamless loop
  const displayItems = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <div 
      className={styles.multiCardCarousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Industries We Serve Multi-Card Continuous Carousel"
    >
      {/* Top Header Controls with Pause Status & Arrow Buttons */}
      <div className={styles.topControlRow}>
        <div className={styles.statusBadge}>
          <span className={styles.statusDot} />
          <span>{isPaused ? "CAROUSEL PAUSED (HOVER)" : "CONTINUOUS ROTATION ACTIVE"}</span>
        </div>

        <div className={styles.btnNavGroup}>
          <button 
            type="button" 
            onClick={() => handleScroll("left")} 
            className={styles.arrowBtn}
            aria-label="Previous industries"
          >
            ‹
          </button>
          <button 
            type="button" 
            onClick={() => handleScroll("right")} 
            className={styles.arrowBtn}
            aria-label="Next industries"
          >
            ›
          </button>
        </div>
      </div>

      {/* Continuous Marquee Track */}
      <div 
        className={styles.multiTrackViewport} 
        ref={trackRef}
      >
        <div className={styles.multiCardRow}>
          {displayItems.map((ind, idx) => (
            <article 
              key={`${ind.title}-${idx}`} 
              className={styles.industryPillCard}
            >
              <div className={styles.cardImageContainer}>
                <Image
                  src={ind.image}
                  alt={ind.title}
                  fill
                  className={styles.industryImg}
                  sizes="(max-width: 768px) 280px, 340px"
                />
                <span className={styles.industryIndexBadge}>{ind.num}</span>
              </div>

              <div className={styles.cardContentBox}>
                <span className={styles.sectorHighlight}>{ind.highlight}</span>
                <h3 className={styles.industryCardTitle}>{ind.title}</h3>
                <p className={styles.industryCardDesc}>{ind.desc}</p>
                <div className={styles.cardFooterTag}>
                  <span>✓ 100% Audit Verified</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
