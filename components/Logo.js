"use client";
import Image from "next/image";
import styles from "./Logo.module.css";

/**
 * Modern Animated Brand Logo:
 * - 2 interlocking boxes that rotate, pause, and bounce (signifying the geometric "O")
 * - Wordmark reads "CUBE" cleanly (as the two boxes form the O, avoiding redundancy on small screens)
 * - Compact and responsive on all devices
 */
export default function Logo({ 
  height = 40, 
  variant = "mark", // "mark" (icon + CUBE, default) | "official" (full banner image)
  className = "" 
}) {
  if (variant === "official") {
    return (
      <div className={`${styles.officialWrapper} ${className}`} id="official-brand-logo">
        <div className={styles.officialCard} style={{ height }}>
          <Image
            src="/logo-ocube.jpg"
            alt="O.CUBE Asset Management Ltd."
            width={788}
            height={264}
            priority
            className={styles.officialLogoImg}
          />
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`${styles.brandMarkPill} ${className}`}
      id="brand-logo-target"
      role="banner"
    >
      {/* 2 Animated Interlocking Boxes forming the iconic "O" */}
      <div className={styles.cubeBoxContainer} aria-hidden="true">
        <div className={styles.cubeSpinGroup}>
          <span className={styles.backBox} />
          <span className={styles.frontBox} />
        </div>
      </div>

      {/* Brand Typography: Clean "CUBE" with ASSET MANAGEMENT */}
      <div className={styles.brandTextGroup}>
        <div className={styles.brandTitleRow}>
          <span className={styles.brandCube}>CUBE</span>
        </div>
        <span className={styles.brandSub}>ASSET MANAGEMENT</span>
      </div>
    </div>
  );
}
