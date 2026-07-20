"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Parallax from "@/components/parallax";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-14 sm:pt-12 sm:pb-16">
      {/* Ghost wordmark — drifts against the scroll behind the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-2 z-0 select-none sm:-right-10 sm:top-0"
      >
        <Parallax speed={-90}>
          <span className="font-display text-[30vw] uppercase leading-none text-primary/10 sm:text-[22vw]">
            Mars
          </span>
        </Parallax>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Mono eyebrow badge */}
        <p className="inline-flex max-w-full items-center gap-2.5 border border-foreground/20 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.3em] text-primary sm:text-xs">
          <span className="h-1.5 w-1.5 shrink-0 bg-success" />
          B2B Wholesale Distribution — CA &amp; US
        </p>

        {/* Poster headline */}
        <h1 className="mt-6 max-w-6xl font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:mt-8 sm:text-6xl lg:text-8xl">
          Big brands. <span className="text-primary">Bigger margins.</span>
        </h1>

        {/* Standfirst + CTAs */}
        <div className="mt-8 grid grid-cols-12 items-end gap-x-6 gap-y-6 sm:mt-10">
          <p className="col-span-12 max-w-prose font-sans text-sm font-light leading-relaxed text-muted-foreground sm:text-base md:col-span-7">
            Stock the shelves that sell: iPhone to Pixel, Galaxy to JBL —
            verified, factory-sealed inventory for retailers, resellers, and
            distributors across North America, with same-day processing on every
            bulk order.
          </p>
          <div className="col-span-12 flex flex-col gap-3 sm:flex-row sm:items-center md:col-span-5 md:justify-end">
            <Link
              href="/products"
              className="inline-flex w-fit items-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Shop Products
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 border-2 border-foreground bg-transparent px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Get Wholesale Price
            </Link>
          </div>
        </div>

        {/* Video card — drifts slower than the scroll for depth */}
        <Parallax speed={55} className="mt-10 sm:mt-12">
          <div className="relative overflow-hidden border-2 border-foreground bg-foreground ring-1 ring-primary/40">
            <div className="relative aspect-video md:aspect-auto md:h-152 lg:h-168 xl:h-176">
              <video
                className="block h-full w-full object-cover object-center"
                src="/hero/4183c37d-0b3f-4c98-950f-834e7087960f.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            {/* Mono caption strip over media */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t border-background/20 bg-foreground/35 px-4 py-3 backdrop-blur-sm sm:px-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-background sm:text-xs">
                Now intaking — flagship smartphones, audio + more
              </p>
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-background/70 sm:block sm:text-xs">
                Shipping Canada + USA
              </p>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}
