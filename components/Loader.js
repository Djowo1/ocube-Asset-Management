"use client";
import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Ultra-snappy entrance: shows for only 250ms then smoothly dissolves away by 450ms
    const a = setTimeout(() => setPhase(1), 250);
    const b = setTimeout(() => setPhase(2), 480);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  if (phase === 2) return null;

  return (
    <div className={`${styles.loaderShell} ${phase === 1 ? styles.loaderFadeOut : ""}`} aria-hidden="true">
      <div className={styles.centerBox}>
        {/* Animated 3D Micro-Cube */}
        <div className={styles.cubeScene}>
          <div className={styles.cube3d}>
            <div className={`${styles.face} ${styles.fFront}`}><span>O</span></div>
            <div className={`${styles.face} ${styles.fBack}`}><span>CUBE</span></div>
            <div className={`${styles.face} ${styles.fRight}`}><span>✦</span></div>
            <div className={`${styles.face} ${styles.fLeft}`}><span>✦</span></div>
            <div className={`${styles.face} ${styles.fTop}`} />
            <div className={`${styles.face} ${styles.fBottom}`} />
          </div>
        </div>

        <div className={styles.textWrap}>
          <div className={styles.brandTitle}>
            <span className={styles.brandCube}>CUBE</span>
          </div>
          <span className={styles.subtext}>ASSET MANAGEMENT</span>
        </div>

        {/* High-speed smooth progress bar */}
        <div className={styles.progressTrack}>
          <div className={styles.progressBar} />
        </div>
      </div>
    </div>
  );
}
