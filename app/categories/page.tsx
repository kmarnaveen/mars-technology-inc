import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getAllCategories, getProductsByCategory } from "@/lib/brands";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wholesale Electronics Categories in Canada & USA",
  description:
    "Browse wholesale product categories including smartphones, tablets, audio, displays, accessories, and more from Mars Technology Inc.",
  path: "/categories",
  keywords: [
    "wholesale electronics categories",
    "smartphone wholesaler",
    "tablet distributor",
    "audio accessories wholesale",
  ],
});

export default function CategoriesPage() {
  const categories = getAllCategories();

  const categoryImageOverrides: Record<string, string> = {
    Accessories:
      "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwff89d0c0/1.JBL_LIVE_PRO_2_Product%20Image_Hero_Black.png?sw=535&sh=535",
    Displays:
      "https://i0.wp.com/9to5toys.com/wp-content/uploads/sites/5/2026/03/Apple-2026-Studio-Display-deals.png?w=1500&quality=82&strip=all&ssl=1",
    Smartphones: "/products/Samsung/10-pro.png",
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page header */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Catalog
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Browse by <span className="text-primary">category</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Wholesale electronics across {categories.length} categories — from
            flagship smartphones to audio, tablets, and accessories.
          </p>
        </section>

        {/* Numbered tiles */}
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="flex items-center justify-between border-t-2 border-foreground pb-6 pt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Index</span>
            <span>{categories.length} categories</span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {categories.map((category, index) => {
              const categoryProducts = getProductsByCategory(category);
              const categorySlug = category.toLowerCase().replace(/\s+/g, "-");
              const heroProduct = categoryProducts.find((p) => p.image);
              const imageSrc =
                categoryImageOverrides[category] ?? heroProduct?.image;

              return (
                <Link
                  key={category}
                  href={`/categories/${categorySlug}`}
                  className={`group flex flex-col border-2 border-border bg-card p-5 transition-colors hover:border-foreground sm:p-6 ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  {/* Number + arrow */}
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary sm:text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center border-2 border-foreground text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Image plate */}
                  <div className="mt-5 flex h-44 items-center justify-center overflow-hidden bg-secondary p-6 sm:h-52">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={category}
                        width={220}
                        height={220}
                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <span
                        className="font-display text-7xl uppercase leading-none text-foreground/10"
                        aria-hidden="true"
                      >
                        {category.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Title + count */}
                  <div className="mt-5 flex flex-1 items-end justify-between gap-3">
                    <h2 className="font-display text-2xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-3xl">
                      {category}
                    </h2>
                    <span className="whitespace-nowrap pb-0.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {categoryProducts.length} products
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
