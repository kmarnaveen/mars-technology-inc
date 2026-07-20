import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Our Wholesale Electronics Distribution — Canada & USA",
  description:
    "Learn how Mars Technology Inc supports retailers, resellers, and distribution partners with dependable wholesale electronics distribution across North America.",
  path: "/about",
  keywords: [
    "about Mars Technology Inc",
    "wholesale electronics distributor",
    "B2B electronics supplier",
    "Canada USA distribution",
  ],
});

const stats = [
  { value: "9", label: "Global brands carried" },
  { value: "50K+", label: "Customers served" },
  { value: "1000+", label: "SKUs in stock" },
  { value: "24/7", label: "Support coverage" },
];

const whyUs = [
  "1000+ SKUs with competitive wholesale pricing",
  "Same-day order processing and rapid fulfillment",
  "Dedicated account management for bulk orders",
  "Industry-leading asset liquidation expertise",
  "24/7 customer support across North America",
];

const values = [
  {
    name: "Reliability",
    description:
      "Consistent delivery of quality products and exceptional service, every single day.",
  },
  {
    name: "Integrity",
    description:
      "Transparent pricing, honest communication, and ethical business practices.",
  },
  {
    name: "Innovation",
    description:
      "Continuously improving our supply chain and services to meet evolving market needs.",
  },
  {
    name: "Partnership",
    description:
      "Building long-term relationships with our customers based on mutual growth and success.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Hero */}
        <section className="py-12 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            About
          </p>
          <h1 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Built for wholesale.
          </h1>
          <p className="mt-8 max-w-3xl text-lg font-light leading-snug text-foreground sm:text-2xl">
            Pioneering wholesale electronics distribution across North
            America.
          </p>
        </section>

        {/* Stats */}
        <section className="border-t-2 border-foreground py-10 sm:py-14">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl uppercase leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 01 Mission */}
        <section className="grid gap-8 border-t-2 border-foreground py-12 sm:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary lg:sticky lg:top-24">
              01 / Mission
            </h2>
          </div>
          <div className="lg:col-span-9">
            <p className="max-w-3xl text-base font-light leading-relaxed text-foreground/85 sm:text-lg">
              At Mars Technology Inc, we're committed to empowering retailers,
              resellers, and businesses across North America with access to
              premium wholesale electronics at competitive prices. Our mission
              is to be the most reliable, efficient, and customer-focused
              wholesale distributor in the industry.
            </p>
          </div>
        </section>

        {/* 02 Story */}
        <section className="grid gap-8 border-t-2 border-foreground py-12 sm:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary lg:sticky lg:top-24">
              02 / Story
            </h2>
          </div>
          <div className="space-y-5 lg:col-span-9">
            <p className="max-w-3xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              Mars Technology Inc emerged from a simple vision: to
              revolutionize wholesale electronics distribution by combining
              competitive pricing with exceptional customer service. Today we
              serve over 50,000 satisfied customers across North America.
            </p>
            <p className="max-w-3xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              Our expertise spans mobile phones, tablets, smart devices, and
              consumer electronics, with a specialized focus on asset
              liquidation services for businesses in transition. Today, we
              maintain one of the largest inventories of certified,
              factory-sealed devices in North America.
            </p>
          </div>
        </section>

        {/* 03 Why us */}
        <section className="grid gap-8 border-t-2 border-foreground py-12 sm:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary lg:sticky lg:top-24">
              03 / Why us
            </h2>
          </div>
          <div className="lg:col-span-9">
            <ul>
              {whyUs.map((item, index) => (
                <li
                  key={item}
                  className="flex items-baseline gap-5 border-t border-foreground/15 py-5 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-[11px] tracking-[0.2em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-light leading-relaxed text-foreground sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 04 Values */}
        <section className="grid gap-8 border-t-2 border-foreground py-12 sm:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary lg:sticky lg:top-24">
              04 / Values
            </h2>
          </div>
          <div className="lg:col-span-9">
            {values.map((value, index) => (
              <div
                key={value.name}
                className="grid gap-2 border-t border-foreground/15 py-5 first:border-t-0 first:pt-0 sm:grid-cols-12 sm:gap-6"
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-foreground sm:col-span-4">
                  <span className="mr-3 text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {value.name}
                </h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground sm:col-span-8">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t-2 border-foreground py-12 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Next step
          </p>
          <h2 className="mt-5 font-display text-3xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl">
            Let's talk volume.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
      <Footer />
    </main>
  );
}
