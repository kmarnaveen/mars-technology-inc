"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    label: "Source",
    parallaxOffset: -10,
    title: "Buy fast-moving electronics in bulk",
    description:
      "Build assortments around the categories your customers already ask for instead of chasing product one request at a time.",
    items: [
      "1,000+ SKUs across smartphones, tablets, audio, displays, and accessories",
      "Apple, Samsung, Google, Xiaomi, JBL, and more",
      "Asset liquidation opportunities when timing makes sense",
    ],
    cardClassName: "border-border bg-card",
    iconClassName: "bg-success/10 text-success",
    numberClassName: "text-background",
    labelClassName: "text-muted-foreground",
    titleClassName: "text-foreground",
    descriptionClassName: "text-muted-foreground",
    listClassName: "text-foreground",
    dividerClassName: "border-foreground/5",
    bulletClassName: "bg-success/100",
  },
  {
    number: "02",
    label: "Verify",
    parallaxOffset: 14,
    title: "Choose stock your team can sell with confidence",
    description:
      "Work from inventory options that are easier to merchandise, support, and move without avoidable surprises after purchase.",
    items: [
      "Factory-sealed and verified inventory options",
      "Checked stock designed to reduce downstream issues",
      "Built for resale confidence and shelf-ready presentation",
    ],
    cardClassName: "border-background/10 bg-foreground",
    iconClassName: "bg-background/10 text-background",
    numberClassName: "text-background/10",
    labelClassName: "text-background/45",
    titleClassName: "text-background",
    descriptionClassName: "text-background/70",
    listClassName: "text-background/80",
    dividerClassName: "border-background/10",
    bulletClassName: "bg-background/70",
  },
  {
    number: "03",
    label: "Deliver",
    parallaxOffset: -12,
    title: "Keep fulfillment dependable across borders",
    description:
      "Move from quote to shipment with an operating model designed for repeat wholesale buying across North America.",
    items: [
      "Same-day order processing and rapid fulfillment",
      "Dedicated account management for bulk orders",
      "Tracked delivery across Canada and the United States",
    ],
    cardClassName: "border-warning/20 bg-warning/10",
    iconClassName: "bg-card text-warning",
    numberClassName: "text-warning",
    labelClassName: "text-warning/55",
    titleClassName: "text-foreground",
    descriptionClassName: "text-muted-foreground",
    listClassName: "text-foreground",
    dividerClassName: "border-foreground/5",
    bulletClassName: "bg-warning/100",
  },
];

const proofStats = [
  {
    value: "9",
    label: "Global brands distributed",
    detail: "Apple, Samsung, Google, and more under one roof.",
  },
  {
    value: "50K+",
    label: "Satisfied customers served",
    detail: "Built through repeat business across North America.",
  },
  {
    value: "1,000+",
    label: "SKUs in the inventory mix",
    detail: "Covering fast-moving consumer electronics categories.",
  },
  {
    value: "Same day",
    label: "Order processing",
    detail: "Supported by rapid fulfillment and tracked shipping.",
  },
];

const buyerTypes = [
  "Retailers",
  "Resellers",
  "Distributors",
  "Liquidation buyers",
];

export default function ValueProps() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const numberRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const proofGlowRef = useRef<HTMLDivElement | null>(null);
  const factsGlowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const resetParallax = () => {
      numberRefs.current.forEach((element) => {
        if (element) {
          element.style.transform = "translate3d(0, 0, 0)";
        }
      });

      if (proofGlowRef.current) {
        proofGlowRef.current.style.transform = "translate3d(0, 0, 0)";
      }

      if (factsGlowRef.current) {
        factsGlowRef.current.style.transform = "translate3d(0, 0, 0)";
      }
    };

    const updateParallax = () => {
      frame = 0;

      const section = sectionRef.current;

      if (!section || mediaQuery.matches || window.innerWidth < 1024) {
        resetParallax();
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = Math.max(
        -1,
        Math.min(
          1,
          (viewportHeight / 2 - (rect.top + rect.height / 2)) / viewportHeight,
        ),
      );

      numberRefs.current.forEach((element, index) => {
        if (!element) {
          return;
        }

        const offset = pillars[index]?.parallaxOffset ?? 0;
        element.style.transform = `translate3d(0, ${progress * offset}px, 0)`;
      });

      if (proofGlowRef.current) {
        proofGlowRef.current.style.transform = `translate3d(0, ${progress * 18}px, 0)`;
      }

      if (factsGlowRef.current) {
        factsGlowRef.current.style.transform = `translate3d(0, ${progress * -16}px, 0)`;
      }
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    };

    const handleMotionPreference = () => {
      requestUpdate();
    };

    updateParallax();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      mediaQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border-t-2 border-foreground pt-8 sm:pt-10">
          {/* Header */}
          <div className="grid grid-cols-12 items-end gap-x-6 gap-y-6">
            <div className="col-span-12 lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary sm:text-xs">
                04 / What we do
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-3xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Source it. Verify it. Move it.{" "}
                <span className="text-primary">In bulk.</span>
              </h2>
            </div>
            <p className="col-span-12 max-w-prose font-sans text-sm font-light leading-relaxed text-muted-foreground sm:text-base lg:col-span-5">
              Premium devices, verified stock, and dependable wholesale
              fulfillment for retailers, resellers, distributors, and
              liquidation buyers across Canada and the United States.
            </p>
          </div>

          {/* Pillar rows */}
          <div className="mt-12 sm:mt-16">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.number}
                className="grid grid-cols-12 gap-x-6 gap-y-6 border-t-2 border-foreground py-8 sm:py-10"
              >
                <div className="col-span-12 sm:col-span-2">
                  <span
                    ref={(element) => {
                      numberRefs.current[index] = element;
                    }}
                    className="block font-display text-5xl leading-none tracking-tight text-primary will-change-transform sm:text-6xl lg:text-7xl"
                  >
                    {pillar.number}
                  </span>
                </div>

                <div className="col-span-12 sm:col-span-10 lg:col-span-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                    {pillar.label}
                  </p>
                  <h3 className="mt-3 max-w-xs font-display text-2xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 max-w-prose font-sans text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                    {pillar.description}
                  </p>
                </div>

                <ul className="col-span-12 self-center lg:col-span-6 lg:border-l lg:border-foreground/15 lg:pl-8">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-t border-foreground/15 py-3 text-sm leading-relaxed text-foreground first:border-t-0 first:pt-0 last:pb-0"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Proof aside + stat table */}
          <div className="mt-12 grid gap-10 border-t-2 border-foreground pt-10 sm:mt-16 lg:grid-cols-12">
            <article className="relative overflow-hidden bg-foreground p-6 text-background sm:p-8 lg:col-span-5">
              <div
                ref={proofGlowRef}
                className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 bg-primary/30 blur-3xl will-change-transform"
              />

              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-background/60 sm:text-xs">
                Proof in the operating model
              </p>

              <h3 className="mt-5 max-w-md font-display text-2xl uppercase leading-[0.95] tracking-tight sm:text-3xl">
                Built on repeat wholesale relationships, not one-off
                transactions.
              </h3>

              <p className="mt-5 max-w-lg font-sans text-sm font-light leading-relaxed text-background/70 sm:text-base">
                Mars Technology Inc supports North American demand with a
                broad inventory mix and keeps bulk orders moving with
                dedicated account handling and rapid processing.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {buyerTypes.map((type) => (
                  <span
                    key={type}
                    className="border border-background/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-background/85"
                  >
                    {type}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-background hover:text-foreground"
                >
                  Request inventory
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 border-2 border-background px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-background hover:text-foreground"
                >
                  Browse catalog
                </Link>
              </div>
            </article>

            {/* Editorial stat table */}
            <div className="relative lg:col-span-7">
              <div
                ref={factsGlowRef}
                className="pointer-events-none absolute right-0 top-6 h-32 w-32 bg-primary/10 blur-3xl will-change-transform"
              />

              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                Operating facts
              </p>

              <div className="mt-5">
                {proofStats.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-12 items-center gap-x-6 gap-y-2 border-t-2 border-foreground py-5 first:border-t-0 first:pt-0 sm:py-6"
                  >
                    <p className="col-span-12 font-display text-4xl uppercase leading-none tracking-tight text-foreground sm:col-span-5 sm:text-5xl lg:text-6xl">
                      {item.value}
                    </p>
                    <div className="col-span-12 sm:col-span-7">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                        {item.label}
                      </p>
                      <p className="mt-2 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
