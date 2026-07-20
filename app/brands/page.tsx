import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BrandCard from "@/components/brand-card";
import { brands } from "@/lib/brands";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Apple, Samsung & Google Wholesale Distributor — Brands",
  description:
    "Explore Mars Technology Inc's wholesale brand portfolio including Apple, Samsung, Google, Xiaomi, Motorola, JBL, Huawei, Honor, and more.",
  path: "/brands",
  keywords: [
    "wholesale electronics brands",
    "Apple distributor",
    "Samsung wholesaler",
    "bulk electronics brands",
  ],
});

export default function BrandsPage() {
  const indexedBrands = [...brands].sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const featuredCount = brands.filter((b) => b.featured).length;
  const totalProducts = brands.reduce(
    (total, brand) => total + brand.productCount,
    0,
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page header */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Portfolio
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Brands we <span className="text-primary">distribute</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Wholesale access to flagship smartphones, audio, accessories, and
            consumer electronics — brands retailers, resellers, and
            distributors already know how to move.
          </p>

          {/* Stats row */}
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 sm:mt-12">
            <div className="border-l-2 border-foreground pl-4">
              <p className="font-display text-3xl uppercase leading-none text-foreground sm:text-4xl">
                {String(brands.length).padStart(2, "0")}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Brand partners
              </p>
            </div>
            <div className="border-l-2 border-foreground pl-4">
              <p className="font-display text-3xl uppercase leading-none text-foreground sm:text-4xl">
                {totalProducts}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Wholesale products
              </p>
            </div>
            <div className="border-l-2 border-foreground pl-4">
              <p className="font-display text-3xl uppercase leading-none text-foreground sm:text-4xl">
                CA&nbsp;+&nbsp;US
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Market coverage
              </p>
            </div>
          </div>
        </section>

        {/* A–Z index */}
        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="flex items-center justify-between pb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Index A–Z</span>
            <span>{featuredCount} featured</span>
          </div>
          <div className="border-b-2 border-foreground">
            {indexedBrands.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} index={index} />
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section className="border-t-2 border-foreground bg-secondary">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 sm:py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                Wholesale access
              </p>
              <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl">
                Don&apos;t see your brand?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                We source beyond the catalog. Tell us what your market needs
                and our team will quote it.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 self-start border-2 border-foreground bg-transparent px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background md:self-auto"
            >
              Talk to sales
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
