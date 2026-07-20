"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Parallax from "@/components/parallax";
import { getAllCategories, getProductsByCategory } from "@/lib/brands";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const categoryImageOverrides: Record<string, string> = {
  Accessories:
    "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwff89d0c0/1.JBL_LIVE_PRO_2_Product%20Image_Hero_Black.png?sw=535&sh=535",
  Displays:
    "https://i0.wp.com/9to5toys.com/wp-content/uploads/sites/5/2026/03/Apple-2026-Studio-Display-deals.png?w=1500&quality=82&strip=all&ssl=1",
  Smartphones: "/products/Samsung/10-pro.png",
};

export default function ProductCategories() {
  const featured = getAllCategories();

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border-t-2 border-foreground pt-8 sm:pt-10">
          {/* Header */}
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6 sm:mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary sm:text-xs">
                01 / Collections
              </p>
              <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Our Collections
              </h2>
              <p className="mt-4 max-w-prose font-sans text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                Seven wholesale categories, one supply partner — browse the
                lines retailers reorder most.
              </p>
            </div>
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
            >
              View All <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Numbered editorial tiles */}
          <Carousel opts={{ align: "start", loop: true }} className="relative">
            <CarouselContent>
              {featured.map((category, index) => {
                const products = getProductsByCategory(category);
                const heroProduct = products.find((p) => p.image);
                const imageOverride = categoryImageOverrides[category];
                const imageSrc = imageOverride ?? heroProduct?.image;
                const slug = category.toLowerCase().replace(/\s+/g, "-");

                return (
                  <CarouselItem
                    key={category}
                    className="basis-4/5 sm:basis-1/2 xl:basis-1/3"
                  >
                    <Link
                      href={`/categories/${slug}`}
                      className="group relative flex aspect-4/3 flex-col overflow-hidden border-2 border-foreground/15 bg-card transition-colors duration-300 hover:border-primary hover:bg-primary"
                    >
                      {/* Index + arrow */}
                      <div className="relative z-10 flex items-start justify-between p-5">
                        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary transition-colors duration-300 group-hover:text-primary-foreground sm:text-xs">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex h-9 w-9 items-center justify-center border-2 border-foreground/25 text-foreground transition-colors duration-300 group-hover:border-primary-foreground/50 group-hover:text-primary-foreground">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>

                      {/* Floating product image — light counter-drift */}
                      {imageSrc && (
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6">
                          <Parallax speed={-28}>
                            <Image
                              src={imageSrc}
                              alt={category}
                              width={220}
                              height={220}
                              className="max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                          </Parallax>
                        </div>
                      )}

                      {/* Category name + count */}
                      <div className="relative z-10 mt-auto p-5">
                        <h3
                          className="overflow-hidden font-display uppercase leading-none tracking-tight whitespace-nowrap text-ellipsis text-foreground transition-colors duration-300 group-hover:text-primary-foreground"
                          style={{ fontSize: "clamp(2rem, 5.5vw, 3.25rem)" }}
                        >
                          {category}
                        </h3>
                        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/70">
                          {products.length} products
                        </p>
                      </div>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
