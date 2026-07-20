import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import ProductCategories from "@/components/product-categories";
import VideoProductBanner from "@/components/video-product-banner";
import VideoSection from "@/components/video-section";
import ValueProps from "@/components/value-props";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import LeadModal from "@/components/lead-modal";
import { buildMetadata } from "@/lib/seo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata = buildMetadata({
  title: "Wholesale Electronics Distributor in Canada & USA",
  description:
    "Mars Technology Inc supplies bulk smartphones, tablets, audio devices, displays, accessories, and liquidation inventory to retailers, resellers, and distributors across North America.",
  path: "/",
  keywords: [
    "wholesale electronics distributor",
    "bulk smartphones",
    "wholesale tablets",
    "audio device wholesaler",
    "electronics liquidation",
    "B2B electronics supplier",
  ],
  image: "/products/iphone_17pro__0s6piftg70ym_large.jpg",
});

const FEATURED_PRODUCTS = [
  {
    label: "NEW",
    name: "iPhone 17 Pro",
    statement:
      "The flagship your customers walk in asking for — sealed, verified, ready to retail.",
    meta: "Bulk pricing available",
    href: "/products/apple/a12",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-compare-iphone-17-pro-202509?wid=400&hei=512&fmt=png-alpha&.v=M0dlUVBobHVpY1h1dmlaR3RZekpEMi9sbCsxVVJmYjNiS29STjQrZEV5NnNlL1VpWDFHcHBMQXVUWWdWdkZZNGJPbDJJWDFrVGJEYlIxTitTcHhVWldNTk4rSDJkMy8vL20va2hrM1NheXZ4VldteDRHenNWeThpV3EzUWVVd2o",
    cardClassName: "bg-muted",
  },
  {
    label: "FLAGSHIP",
    name: "Galaxy S25 Ultra",
    statement:
      "Android's top shelf — for stores that lead with premium and restock weekly.",
    meta: "Fast-moving Samsung inventory",
    href: "/products/samsung/s11",
    image:
      "/products/Samsung/in-galaxy-s25-s938-sm-s938bztbins-thumb-544702943.png",
    cardClassName: "bg-muted",
  },
  {
    label: "PREMIUM AUDIO",
    name: "AirPods Max",
    statement:
      "The basket-builder — premium audio that lifts every ticket it touches.",
    meta: "Wholesale audio availability",
    href: "/products/apple/a26",
    image: "/products/airpods_max_stardust__l9lr6719rmaa_large.png",
    cardClassName: "bg-muted",
  },
];

const TICKER_PHRASES = [
  "Wholesale Gravity",
  "Canada + USA",
  "1,000+ SKUs",
  "Same-Day Processing",
  "Flagship Electronics",
];

function Ticker() {
  return (
    <div className="overflow-hidden border-y-2 border-foreground bg-background py-3 mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee font-mono text-xs uppercase tracking-[0.3em] text-foreground">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-8 pr-8"
          >
            {TICKER_PHRASES.map((phrase) => (
              <Fragment key={phrase}>
                <span className="whitespace-nowrap">{phrase}</span>
                <span className="text-primary">●</span>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />

      <Ticker />

      {/* 01 / Collections */}
      <ProductCategories />

      {/* 02 / The Latest */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="border-t-2 border-foreground pt-8 sm:pt-10">
            <div className="mb-10 grid grid-cols-12 items-end gap-x-6 gap-y-6 sm:mb-12 sm:pr-28">
              <div className="col-span-12 lg:col-span-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary sm:text-xs">
                  02 / The Latest
                </p>
                <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Moving now.
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <p className="max-w-prose font-sans text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                  This week&apos;s fastest-turning SKUs — flagship hardware
                  with proven sell-through and margin still on the table.
                </p>
                <Link
                  href="/products"
                  className="mt-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
                >
                  Browse full catalog <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <Carousel
              opts={{ align: "start", loop: true }}
              className="relative"
            >
              <CarouselContent>
                {FEATURED_PRODUCTS.map((product) => (
                  <CarouselItem
                    key={product.name}
                    className="basis-4/5 sm:basis-1/2 lg:basis-1/3"
                  >
                    <Link href={product.href} className="group block h-full">
                      <article className="flex h-full flex-col border-2 border-foreground/15 bg-card transition-colors duration-300 group-hover:border-foreground">
                        {/* Image plate */}
                        <div className="relative flex aspect-square items-center justify-center overflow-hidden border-b-2 border-foreground/15 bg-secondary p-6 transition-colors duration-300 group-hover:border-foreground sm:p-8">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={420}
                            height={420}
                            className="max-h-[72%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Copy */}
                        <div className="flex flex-1 flex-col justify-between gap-6 p-5 sm:p-6">
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                              {product.label}
                            </p>
                            <h3 className="mt-3 font-display text-2xl uppercase leading-none tracking-tight text-foreground sm:text-3xl">
                              {product.name}
                            </h3>
                            <p className="mt-3 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                              {product.statement}
                            </p>
                          </div>
                          <div className="flex items-center justify-between gap-4 border-t border-foreground/15 pt-4">
                            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                              {product.meta}
                            </p>
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-foreground text-foreground transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden size-10 sm:inline-flex -top-19 left-auto right-12 translate-y-0 rounded-none border-2 border-foreground bg-background text-foreground shadow-none hover:bg-foreground hover:text-background" />
              <CarouselNext className="hidden size-10 sm:inline-flex -top-19 right-0 translate-y-0 rounded-none border-2 border-foreground bg-background text-foreground shadow-none hover:bg-foreground hover:text-background" />
            </Carousel>
          </div>
        </div>
      </section>

      <VideoProductBanner
        badge="Google Pixel Focus"
        title="Put the Pixel"
        highlight="front and center."
        description="Google's lineup is pulling customers into stores. Stock the range before your competitors restock theirs."
        videoSrc="/products/Meet_the_New_Pixel_Lineup_Engineered_by_Google_For_All_You_Do_720P.mp4"
        primaryHref="/brands/google"
        primaryLabel="Explore Google"
        secondaryHref="/contact"
        secondaryLabel="Request Quote"
      />

      {/* 03 / Brands */}
      <Services />

      <VideoProductBanner />

      {/* 04 / Why Mars */}
      <ValueProps />

      {/* 05 / Exhibitions */}
      <VideoSection />

      <Ticker />

      {/* 06 / Ready to source */}
      <CTA />
      <Footer />
      <LeadModal />
    </main>
  );
}
