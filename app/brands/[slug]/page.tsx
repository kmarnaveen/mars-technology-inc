import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import BrandHeader from "@/components/brand-header";
import { getBrand, getBrandProducts, brands } from "@/lib/brands";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);

  if (!brand) {
    return {
      title: "Brand Not Found | Mars Technology Inc",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildMetadata({
    title: `${brand.name} Wholesale Distributor in Canada & USA`,
    description: `Browse ${brand.name} wholesale products for retailers, resellers, and distributors. ${brand.description}`,
    path: `/brands/${slug}`,
    keywords: [
      `${brand.name} wholesale`,
      `${brand.name} distributor`,
      `${brand.name} bulk products`,
      `${brand.category.toLowerCase()} wholesale`,
    ],
    image: brand.logo,
  });
}

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

export default async function BrandProductsPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrand(slug);

  if (!brand) {
    notFound();
  }

  const products = getBrandProducts(slug);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Breadcrumb */}
          <div className="py-6 sm:py-8">
            <Link
              href="/brands"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              All Brands
            </Link>
          </div>

          {/* Brand hero */}
          <BrandHeader
            name={brand.name}
            description={brand.description}
            logo={brand.logo}
            productCount={products.length}
            category={brand.category}
          />

          {/* Products section header */}
          <div className="mt-12 flex items-end justify-between gap-4 border-t-2 border-foreground pb-6 pt-5 sm:mt-16 sm:pb-8">
            <div>
              <h2 className="font-display text-2xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-3xl">
                All Products
              </h2>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {products.length} items · wholesale only
              </p>
            </div>
            <Link
              href="/contact"
              className="hidden shrink-0 items-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background sm:inline-flex"
            >
              Request Bulk Quote
            </Link>
          </div>

          {/* Products grid */}
          <section className="pb-16 sm:pb-24">
            {products.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                  <ProductCard
                    key={`${slug}-${product.id}`}
                    product={{ ...product, brand: slug }}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center border-2 border-foreground bg-card px-6 py-20 text-center">
                <Package className="mb-4 h-8 w-8 text-primary" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  No products available for this brand yet
                </p>
                <Link
                  href="/contact"
                  className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-primary underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  Contact us to enquire
                </Link>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
