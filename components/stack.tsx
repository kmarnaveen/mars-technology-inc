"use client";

import { Children, useEffect, useRef } from "react";
import type React from "react";

type StackProps = {
  /** Pin offset from the viewport top for the first card (px). */
  top?: number;
  /** Extra offset per card so stacked edges peek out (px). */
  step?: number;
  /** How much a fully covered card scales down (0.05 = to 95%). */
  scale?: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Stacking parallax: each child pins via position: sticky while the next
 * card scrolls up and over it. As a card gets covered, it recedes — scaled
 * and dimmed by a lerp-smoothed progress value — creating the card-deck
 * depth effect. Sticky stacking runs from md up (normal flow on small
 * screens); the recede motion respects prefers-reduced-motion.
 */
export default function Stack({
  top = 96,
  step = 16,
  scale = 0.05,
  className,
  children,
}: StackProps) {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const items = Children.toArray(children);

  useEffect(() => {
    const els = itemRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    if (els.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const current = els.map(() => 0);
    const target = els.map(() => 0);
    let raf = 0;
    let running = false;

    const measure = () => {
      const desktop = window.matchMedia("(min-width: 768px)").matches;
      const vh = window.innerHeight || 1;
      for (let i = 0; i < els.length; i++) {
        if (!desktop || i === els.length - 1) {
          target[i] = 0;
          continue;
        }
        // progress: 0 when the next card enters the viewport bottom,
        // 1 when it reaches this card's pin line and fully covers it.
        const pin = top + i * step;
        const nextTop = els[i + 1].getBoundingClientRect().top;
        const p = 1 - (nextTop - pin) / Math.max(vh - pin, 1);
        target[i] = Math.max(0, Math.min(1, p));
      }
    };

    const tick = () => {
      let active = false;
      for (let i = 0; i < els.length; i++) {
        current[i] += (target[i] - current[i]) * 0.15;
        if (Math.abs(target[i] - current[i]) > 0.001) {
          active = true;
        } else {
          current[i] = target[i];
        }
        const p = current[i];
        els[i].style.transform =
          p > 0.001 ? `scale(${(1 - scale * p).toFixed(4)})` : "";
        els[i].style.filter =
          p > 0.001 ? `brightness(${(1 - 0.1 * p).toFixed(3)})` : "";
      }
      running = active;
      if (running) raf = requestAnimationFrame(tick);
    };

    const wake = () => {
      measure();
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    wake();
    window.addEventListener("scroll", wake, { passive: true });
    window.addEventListener("resize", wake);
    return () => {
      running = false;
      window.removeEventListener("scroll", wake);
      window.removeEventListener("resize", wake);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items.length, top, step, scale]);

  return (
    <div className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="md:sticky"
          style={{
            top: top + i * step,
            transformOrigin: "center top",
            zIndex: i + 1,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
