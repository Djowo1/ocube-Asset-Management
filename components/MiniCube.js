"use client";
import styles from "./CubeAnimation.module.css";

/**
 * Lightweight, elegant rotating 3D O.Cube micro-element
 * Perfectly sized to align with section titles or badges in continuous smooth motion.
 */
export default function MiniCube({ size = 26, className = "" }) {
  const half = size / 2;

  return (
    <span
      className={`${styles.miniCubeWrapper} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className={styles.miniCubeScene}>
        <span
          className={`${styles.miniFace} ${styles.mfFront}`}
          style={{ transform: `translateZ(${half}px)` }}
        />
        <span
          className={`${styles.miniFace} ${styles.mfBack}`}
          style={{ transform: `rotateY(180deg) translateZ(${half}px)` }}
        />
        <span
          className={`${styles.miniFace} ${styles.mfRight}`}
          style={{ transform: `rotateY(90deg) translateZ(${half}px)` }}
        />
        <span
          className={`${styles.miniFace} ${styles.mfLeft}`}
          style={{ transform: `rotateY(-90deg) translateZ(${half}px)` }}
        />
        <span
          className={`${styles.miniFace} ${styles.mfTop}`}
          style={{ transform: `rotateX(90deg) translateZ(${half}px)` }}
        />
        <span
          className={`${styles.miniFace} ${styles.mfBottom}`}
          style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }}
        />
      </span>
    </span>
  );
}

