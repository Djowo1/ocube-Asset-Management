"use client";
import { useEffect, useState } from "react";
import styles from "./CubeDropSequence.module.css";

/**
 * Natural 3D Cube Cascade Animation
 * - Smooth, gentle physics drop from the top of the screen on load.
 * - Gentle, natural bounces at the bottom of the viewport with realistic perspective.
 * - Graceful soft fade settling into place without gimmicky cartoon ropes or abrupt vanishing.
 * - Gives a clean, high-end corporate 3D impression.
 */
export default function CubeDropSequence() {
  const [phase, setPhase] = useState("falling"); // "falling" | "bouncing" | "settling" | "done"

  useEffect(() => {
    // Gentle timeline:
    // 0ms - 1800ms: cubes fall gracefully with 3D rotation
    // 1800ms - 3200ms: gentle harmonic rebound / bounce
    // 3200ms - 4200ms: smooth soft fade settling into the page
    const t1 = setTimeout(() => setPhase("bouncing"), 1600);
    const t2 = setTimeout(() => setPhase("settling"), 3200);
    const t3 = setTimeout(() => setPhase("done"), 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div 
      className={`${styles.cascadeContainer} ${phase === "settling" ? styles.settleFade : ""}`}
      aria-hidden="true"
    >
      <div className={styles.perspectiveWrap}>
        {/* Cube 1 (Left) */}
        <div className={`${styles.cubeEntity} ${styles.cubeCol1} ${styles[phase] || ""}`}>
          <RealisticCube label="VERIFY" />
        </div>

        {/* Cube 2 (Mid-Left) */}
        <div className={`${styles.cubeEntity} ${styles.cubeCol2} ${styles[phase] || ""}`}>
          <RealisticCube label="005 ALUM" />
        </div>

        {/* Cube 3 (Center Hero) */}
        <div className={`${styles.cubeEntity} ${styles.cubeCol3} ${styles[phase] || ""}`}>
          <RealisticCube label="O.CUBE" isHero />
        </div>

        {/* Cube 4 (Mid-Right) */}
        <div className={`${styles.cubeEntity} ${styles.cubeCol4} ${styles[phase] || ""}`}>
          <RealisticCube label="RFID / QR" />
        </div>

        {/* Cube 5 (Right) */}
        <div className={`${styles.cubeEntity} ${styles.cubeCol5} ${styles[phase] || ""}`}>
          <RealisticCube label="100% AUDIT" />
        </div>
      </div>

      <button
        type="button"
        className={styles.skipBtn}
        onClick={() => setPhase("done")}
        title="Dismiss intro animation"
      >
        Skip ✕
      </button>
    </div>
  );
}

function RealisticCube({ label = "O.CUBE", isHero = false }) {
  return (
    <div className={`${styles.cubeMesh} ${isHero ? styles.heroMesh : ""}`}>
      <div className={`${styles.face} ${styles.fFront}`}>
        <span>{label}</span>
      </div>
      <div className={`${styles.face} ${styles.fBack}`}>
        <span>O.CUBE</span>
      </div>
      <div className={`${styles.face} ${styles.fRight}`}>
        <span>✦</span>
      </div>
      <div className={`${styles.face} ${styles.fLeft}`}>
        <span>TAG</span>
      </div>
      <div className={`${styles.face} ${styles.fTop}`} />
      <div className={`${styles.face} ${styles.fBottom}`} />
    </div>
  );
}
