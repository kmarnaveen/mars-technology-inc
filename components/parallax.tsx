"use client";

import { useEffect, useRef } from "react";
import type React from "react";

type ParallaxProps = {
  /**
   * Max drift in px when the element is at the viewport edges.
   * Positive = lags behind the scroll (background feel);
   * negative = moves against it (foreground feel).
   */
  speed?: number;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

/**
 * Scroll parallax: the outer div is measured, the inner div is transformed,
 * so the effect never feeds back into its own measurements. Transform-only
 * (no layout), rAF-throttled, and disabled for prefers-reduced-motion.
 */
export default function Parallax({
  speed = 24,
  className,
  innerClassName,
  children,
}: ParallaxProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = outer.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const progress = (center - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      inner.style.transform = `translate3d(0, ${(clamped * speed).toFixed(2)}px, 0)`;
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={outerRef} className={className}>
      <div
        ref={innerRef}
        className={innerClassName}
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
