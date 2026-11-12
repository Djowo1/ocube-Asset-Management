"use client";
import { useEffect, useRef, useState } from "react";
import s from "./Reveal.module.css";

/**
 * Enhanced Reveal Component with multiple animation variants:
 * - "fadeUp" (default)
 * - "slideLeft" (slides smoothly from left)
 * - "slideRight" (slides smoothly from right)
 * - "popIn" (pops into view with scale and bounce)
 */
export default function Reveal({
  children,
  delay = 0,
  variant = "fadeUp", // "fadeUp" | "slideLeft" | "slideRight" | "popIn"
  className = ""
}) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const variantClass = s[variant] || s.fadeUp;

  return (
    <div
      ref={ref}
      className={`${s.r} ${variantClass} ${on ? s.in : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
