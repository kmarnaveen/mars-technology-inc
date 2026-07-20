import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, PhoneCall } from "lucide-react";
import Parallax from "@/components/parallax";
import { siteConfig } from "@/lib/seo";

const sourcingSignals = [
  {
    value: "1,000+",
    label:
      "SKUs across smartphones, tablets, audio, displays, and accessories.",
  },
  {
    value: "Same day",
    label: "Order processing backed by rapid wholesale fulfillment.",
  },
  {
    value: "Canada + USA",
    label: "Cross-border coverage for North American buyers.",
  },
];

const commonRequests = [
  "Pricing and availability",
  "Bulk order support",
  "Retailer programs",
  "Liquidation inventory",
];

const contactCards = [
  {
    title: "Sales",
    value: siteConfig.emails.sales,
    href: `mailto:${siteConfig.emails.sales}`,
    detail: "Product availability, pricing, and wholesale account inquiries.",
    icon: Mail,
  },
  {
    title: "Call or WhatsApp",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phoneHref}`,
    detail:
      "Speak directly with the team about current inventory and lead times.",
    icon: PhoneCall,
  },
  {
    title: "Business Hours",
    value: "Mon - Fri, 9AM - 6PM EST",
    detail:
      "Fast follow-up for bulk orders, retailer programs, and partnership requests.",
    icon: Clock3,
  },
];

export default function CTA() {
  return (
    <section className="bg-linear-to-br from-primary via-primary to-chart-3 py-16 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border-t-2 border-primary-foreground pt-8 sm:pt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary-foreground/70 sm:text-xs">
            06 / Ready to source?
          </p>

          <div className="mt-6 grid grid-cols-12 gap-x-10 gap-y-12 sm:mt-8">
            <article className="col-span-12 lg:col-span-7">
              <Parallax speed={30}>
                <h2 className="max-w-3xl font-display text-3xl uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                  Your shelves are waiting. So is our warehouse.
                  <span className="mt-3 block text-2xl text-primary-foreground/50 sm:text-3xl lg:text-4xl">
                    Pricing in hours. Pallets in days. Built for repeat
                    buyers.
                  </span>
                </h2>
              </Parallax>
              <p className="mt-6 max-w-prose font-sans text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
                Work with Mars Technology Inc to secure fast-moving inventory,
                verified stock, and dependable cross-border fulfillment for
                retail, resale, and distribution demand without slowing down
                your buying cycle.
              </p>

              {/* Sourcing signal cells */}
              <div className="mt-8 grid border-t border-l border-primary-foreground/25 sm:grid-cols-3">
                {sourcingSignals.map((signal) => (
                  <div
                    key={signal.value}
                    className="border-r border-b border-primary-foreground/25 p-5"
                  >
                    <p className="font-display text-2xl uppercase leading-none tracking-tight sm:text-3xl">
                      {signal.value}
                    </p>
                    <p className="mt-3 font-sans text-sm font-light leading-relaxed text-primary-foreground/70">
                      {signal.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-background px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Request pricing
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 border-2 border-primary-foreground px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-background hover:text-foreground"
                >
                  Browse inventory
                </Link>
              </div>

              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60 sm:text-xs">
                Sales response within 24 hours. WhatsApp available. Mon - Fri,
                9AM - 6PM EST.
              </p>
            </article>

            <aside className="col-span-12 lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary-foreground/70 sm:text-xs">
                Direct lines
              </p>

              <div className="mt-5 space-y-4">
                {contactCards.map((card) => {
                  const Icon = card.icon;

                  const content = (
                    <>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-primary-foreground/25 text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60">
                          {card.title}
                        </p>
                        <p className="mt-2 font-sans text-sm font-medium text-primary-foreground wrap-break-word">
                          {card.value}
                        </p>
                        <p className="mt-2 font-sans text-sm font-light leading-relaxed text-primary-foreground/70">
                          {card.detail}
                        </p>
                      </div>
                      {card.href ? (
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-primary-foreground/25 text-primary-foreground transition-colors group-hover:border-background group-hover:bg-background group-hover:text-foreground">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      ) : null}
                    </>
                  );

                  if (card.href) {
                    return (
                      <a
                        key={card.title}
                        href={card.href}
                        className="group flex gap-4 border border-primary-foreground/25 p-5 transition-colors hover:bg-primary-foreground/10"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={card.title}
                      className="flex gap-4 border border-primary-foreground/25 p-5"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 border border-primary-foreground/25 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60">
                  Common requests
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {commonRequests.map((request) => (
                    <span
                      key={request}
                      className="border border-primary-foreground/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-primary-foreground/85"
                    >
                      {request}
                    </span>
                  ))}
                </div>

                <p className="mt-4 font-sans text-sm font-light leading-relaxed text-primary-foreground/70">
                  Best for retailers, resellers, distributors, and buyers
                  sourcing premium electronics or liquidation inventory at
                  wholesale scale.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
