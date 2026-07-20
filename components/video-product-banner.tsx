"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Parallax from "@/components/parallax";

type VideoProductBannerProps = {
  badge?: string;
  title?: string;
  highlight?: string;
  description?: string;
  videoSrc?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function VideoProductBanner({
  badge = "Samsung Spotlight",
  title = "Move fast on",
  highlight = "flagship demand.",
  description = "Highlight premium Samsung inventory with a secondary campaign section built for retailers, resellers, and distribution partners.",
  videoSrc = "/products/Super_Steady_Video_Galaxy_S26_Ultra_Samsung_720P.mp4",
  primaryHref = "/brands/samsung",
  primaryLabel = "Explore Samsung",
  secondaryHref = "/contact",
  secondaryLabel = "Request Quote",
}: VideoProductBannerProps) {
  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative flex w-full flex-col overflow-hidden border-2 border-foreground bg-foreground ring-1 ring-primary/40 md:h-132 lg:h-144 xl:h-152">
          {/* Video — overscanned and counter-drifting inside the clipped frame */}
          <div className="relative aspect-video overflow-hidden border-b border-background/10 md:absolute md:inset-0 md:aspect-auto md:border-0">
            <Parallax
              speed={-24}
              className="absolute inset-0"
              innerClassName="h-full w-full"
            >
              <video
                className="block h-full w-full scale-110 object-contain object-center md:object-cover md:opacity-90"
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
              />
            </Parallax>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-6 p-5 sm:p-6 md:absolute md:inset-0 md:justify-between md:p-8 lg:p-10">
            {/* Mono eyebrow badge */}
            <div>
              <span className="inline-flex max-w-full items-center gap-2.5 border border-background/25 bg-foreground/35 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-background backdrop-blur-sm sm:text-xs">
                <span className="h-1.5 w-1.5 shrink-0 bg-success" />
                {badge}
              </span>
            </div>

            {/* Readability panel */}
            <div className="w-full max-w-sm space-y-4 sm:max-w-2xl md:mt-auto md:border md:border-background/15 md:bg-foreground/35 md:p-6 md:backdrop-blur-sm">
              <h2 className="font-display text-3xl uppercase leading-[0.95] tracking-tight text-background sm:text-5xl lg:text-6xl">
                {title} <span className="text-primary">{highlight}</span>
              </h2>
              <p className="max-w-prose font-sans text-sm font-light leading-relaxed text-background/70 sm:text-base">
                {description}
              </p>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                <Link
                  href={primaryHref}
                  className="inline-flex w-fit items-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-background hover:text-foreground"
                >
                  {primaryLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href={secondaryHref}
                  className="inline-flex w-fit items-center gap-2 border-2 border-background bg-transparent px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-background hover:text-foreground"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
