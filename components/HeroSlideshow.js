"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MiniCube from "./MiniCube";
import styles from "./HeroSlideshow.module.css";

// 3 Core Focus Pillars - Uncluttered, impactful editorial copywriting
const SLIDES = [
  {
    pillarTag: "CORE SERVICE 01",
    badgeText: "Asset Verification & Tagging",
    titlePrefix: "Smart Asset Tracking",
    titleHighlight: "Starts With One Scan",
    description: "Take control of your fixed assets with fast, accurate physical verification, durable serialized barcode plates, QR tags, and RFID identification nationwide.",
    primaryCta: "Request Asset Audit ↗",
    primaryLink: "/contact",
    secondaryCta: "Explore Tag Materials",
    secondaryLink: "/#tags",
    bgImage: "/img/hero-warehouse-audit.jpg",
    imageAlt: "Enterprise physical asset verification and inventory management",
    statNum: "100,000+",
    statLabel: "Assets Verified",
    pills: ["QR & BARCODE TAGGING", "RFID INTEGRATION", "DIGITAL SCANNING"]
  },
  {
    pillarTag: "CORE SERVICE 02",
    badgeText: "Asset Reconciliation",
    titlePrefix: "Zero Ghost Asset",
    titleHighlight: "Ledger Reconciliation",
    description: "Line-by-line reconciliation of physical assets against financial books. Eliminating phantom assets, resolving variances, and establishing 99.99% statutory audit readiness.",
    primaryCta: "Reconcile Your Register ↗",
    primaryLink: "/contact",
    secondaryCta: "Our 4-Step Process",
    secondaryLink: "/#process",
    bgImage: "/img/hero-corporate-architecture.jpg",
    imageAlt: "Corporate headquarters asset reconciliation",
    statNum: "99.99%",
    statLabel: "Reconciliation Accuracy",
    pills: ["ZERO GHOST ASSETS", "LEDGER ALIGNMENT", "AUDIT READINESS"]
  },
  {
    pillarTag: "CORE SERVICE 03",
    badgeText: "Software & Archiving",
    titlePrefix: "Intelligent Cloud",
    titleHighlight: "Asset Management Software",
    description: "Deployment of advanced cloud software for real-time asset tracking, depreciation calculation, preventative maintenance scheduling, and digital document archiving.",
    primaryCta: "Request Software Demo ↗",
    primaryLink: "/contact",
    secondaryCta: "View Core Services",
    secondaryLink: "/#services",
    bgImage: "/img/hero-executive-operations.jpg",
    imageAlt: "Executive cloud asset platform operations",
    statNum: "100%",
    statLabel: "Accountability & Control",
    pills: ["CLOUD ASSET DATABASE", "DOCUMENT ARCHIVING", "LIFECYCLE TRACKING"]
  }
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className={styles.heroSection} aria-label="Hero Showcase">
      {/* Full-bleed, full-height backdrop images with smooth transition */}
      <div className={styles.heroBackgroundContainer}>
        {SLIDES.map((s, idx) => (
          <div
            key={idx}
            className={`${styles.heroBgSlide} ${idx === current ? styles.heroBgSlideActive : ""}`}
          >
            <Image
              src={s.bgImage}
              alt={s.imageAlt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className={styles.heroBgImage}
            />
          </div>
        ))}
        {/* Soft, translucent gradient scrim: photography remains vibrant and visible */}
        <div className={styles.heroBackdropScrim} />
      </div>

      <div className={`wrap ${styles.heroContentWrap}`}>
        <div className={styles.textColumn}>
          {/* Category Pill Badge with rotating MiniCube */}
          <div className={styles.categoryBadge} key={`badge-${current}`}>
            <MiniCube size={18} />
            <span className={styles.badgeCategory}>{slide.pillarTag}</span>
            <span className={styles.badgeDivider}>•</span>
            <span className={styles.badgeSubtitle}>{slide.badgeText}</span>
          </div>

          {/* Main Headline */}
          <h1 className={styles.headline} key={`title-${current}`}>
            <span className={styles.headlineRegular}>{slide.titlePrefix} </span>
            <span className={styles.headlineHighlight}>{slide.titleHighlight}</span>
          </h1>

          {/* Clean, unclustered description */}
          <p className={styles.description} key={`desc-${current}`}>
            {slide.description}
          </p>

          {/* Primary & Secondary Call to Action Buttons */}
          <div className={styles.ctaGroup}>
            <Link href={slide.primaryLink} className={`btn ${styles.primaryBtn}`}>
              {slide.primaryCta}
            </Link>
            <Link href={slide.secondaryLink} className={`btn ghost ${styles.secondaryBtn}`}>
              {slide.secondaryCta}
            </Link>
          </div>

          {/* Key capability pills */}
          <div className={styles.capabilitiesStrip} key={`pills-${current}`}>
            {slide.pills.map((pill) => (
              <span key={pill} className={styles.capabilityPill}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {pill}
              </span>
            ))}
          </div>

          {/* Stat indicator & slide controls */}
          <div className={styles.heroBottomRow}>
            <div className={styles.statCallout}>
              <strong className={styles.statNum}>{slide.statNum}</strong>
              <span className={styles.statLabel}>{slide.statLabel}</span>
            </div>
            <div className={styles.slideIndicators} aria-label="Slide Selector">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrent(idx)}
                  className={`${styles.indicatorDot} ${current === idx ? styles.indicatorActive : ""}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
