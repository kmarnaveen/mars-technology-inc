import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductsContent from "@/components/products-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wholesale Electronics Catalog — Bulk Pricing Canada & USA",
  description:
    "Browse Mars Technology Inc's wholesale catalog of smartphones, tablets, audio devices, displays, and accessories from leading global brands.",
  path: "/products",
  keywords: [
    "wholesale electronics catalog",
    "bulk mobile phones",
    "wholesale consumer electronics",
    "electronics distributor catalog",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <ProductsContent />
      </Suspense>
      <Footer />
    </>
  );
}
