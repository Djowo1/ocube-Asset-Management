"use client";
import styles from "./CubeAnimation.module.css";

/**
 * Clean, professional 3D Geometric Brand Display
 * Rotates smoothly in space without any gimmicky labels or 'drag to rotate' prompts.
 */
export default function CubeAnimation({ size = 160 }) {
  const half = size / 2;

  return (
    <div
      className={styles.cubeContainer}
      style={{ width: size, height: size }}
      role="img"
      aria-label="3D O.Cube Brand Element"
    >
      <div className={styles.cubeScene}>
        {/* Front Face: O.CUBE */}
        <div
          className={`${styles.face} ${styles.front}`}
          style={{ transform: `translateZ(${half}px)` }}
        >
          <div className={styles.innerPattern}>
            <span className={styles.cubeBrand}>O.CUBE</span>
            <div className={styles.gridMini}>
              <span className={styles.cellBlue} />
              <span className={styles.cellCyan} />
              <span className={styles.cellCyan} />
              <span className={styles.cellBlue} />
            </div>
            <small>VERIFIED</small>
          </div>
        </div>

        {/* Back Face: Asset Tag */}
        <div
          className={`${styles.face} ${styles.back}`}
          style={{ transform: `rotateY(180deg) translateZ(${half}px)` }}
        >
          <div className={styles.innerTag}>
            <div className={styles.tagHead}>ASSET TAG</div>
            <div className={styles.barLines}>
              <span /><span /><span /><span /><span /><span /><span /><span />
            </div>
            <div className={styles.tagCode}>RC 1247860</div>
          </div>
        </div>

        {/* Right Face: 2D QR Code */}
        <div
          className={`${styles.face} ${styles.right}`}
          style={{ transform: `rotateY(90deg) translateZ(${half}px)` }}
        >
          <div className={styles.innerQr}>
            <div className={styles.qrCorner} />
            <div className={styles.qrCorner} />
            <div className={styles.qrCorner} />
            <div className={styles.qrDot} />
            <small>BARCODE / RFID</small>
          </div>
        </div>

        {/* Left Face: Tag Substrates */}
        <div
          className={`${styles.face} ${styles.left}`}
          style={{ transform: `rotateY(-90deg) translateZ(${half}px)` }}
        >
          <div className={styles.innerList}>
            <b>SUBSTRATES</b>
            <span>• 005 ALUM</span>
            <span>• 3M POLY</span>
            <span>• TAMPER VOID</span>
          </div>
        </div>

        {/* Top Face: Sky Blue Lustre */}
        <div
          className={`${styles.face} ${styles.top}`}
          style={{ transform: `rotateX(90deg) translateZ(${half}px)` }}
        >
          <div className={styles.blueLuster}>
            <span>TOTAL CONTROL</span>
          </div>
        </div>

        {/* Bottom Face: Base */}
        <div
          className={`${styles.face} ${styles.bottom}`}
          style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }}
        >
          <div className={styles.darkBase} />
        </div>
      </div>
      <div className={styles.shadow} />
    </div>
  );
}
