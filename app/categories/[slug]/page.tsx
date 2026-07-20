import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Package } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { buildMetadata } from "@/lib/seo";
import { getAllCategories, getProductsByCategory } from "@/lib/brands";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const actualCategory = getAllCategories().find(
    (category) => category.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!actualCategory) {
    return {
      title: "Category Not Found | Mars Technology Inc",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const products = getProductsByCategory(actualCategory);

  return buildMetadata({
    title: `Wholesale ${actualCategory} in Canada & USA`,
    description: `Browse ${products.length} wholesale ${actualCategory.toLowerCase()} products from Mars Technology Inc, including inventory from top global brands.`,
    path: `/categories/${slug}`,
    keywords: [
      `${actualCategory.toLowerCase()} wholesale`,
      `bulk ${actualCategory.toLowerCase()}`,
      `${actualCategory.toLowerCase()} distributor`,
    ],
    image: products[0]?.image,
  });
}

export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const allCategories = getAllCategories();
  const actualCategory = allCategories.find(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!actualCategory) {
    notFound();
  }

  const products = getProductsByCategory(actualCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Breadcrumb */}
          <div className="py-6 sm:py-8">
            <Link
              href="/categories"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              All Categories
            </Link>
          </div>

          {/* Category header */}
          <section className="border-b-2 border-foreground pb-10 sm:pb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              Category
            </p>
            <h1 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {actualCategory}
            </h1>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {products.length} products · B2B wholesale · CA&nbsp;&amp;&nbsp;US
              </p>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 self-start bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background sm:self-auto"
              >
                Request Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* Products section header */}
          <div className="flex items-end justify-between gap-4 pb-6 pt-10 sm:pb-8 sm:pt-14">
            <h2 className="font-display text-2xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-3xl">
              All Products
            </h2>
            <span className="pb-0.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {products.length} items
            </span>
          </div>

          {/* Products grid */}
          <section className="pb-16 sm:pb-24">
            {products.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 md:grid-cols-4">
                {products.map((product) => (
                  <ProductCard
                    key={`${product.brand}-${product.id}`}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center border-2 border-foreground bg-card px-6 py-20 text-center">
                <Package className="mb-4 h-8 w-8 text-primary" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  No products in this category yet
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
