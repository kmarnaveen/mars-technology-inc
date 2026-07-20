import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "HTML Sitemap",
  description:
    "Human-readable HTML sitemap for navigating Mars Technology Inc's public pages and content sections.",
  path: "/html-sitemap",
  noIndex: true,
});

const sitemapLinks = {
  Main: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Brands", href: "/brands" },
    { label: "Categories", href: "/categories" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "HTML Sitemap", href: "/html-sitemap" },
  ],
};

const featuredPosts = [
  {
    label: "Price Like a Distributor, Not a Spreadsheet",
    href: "/blog/wholesale-pricing-strategy",
  },
  {
    label: "Liquidation Without the Fire Sale",
    href: "/blog/asset-liquidation-guide",
  },
  {
    label: "Never Explain an Empty Shelf Again",
    href: "/blog/supply-chain-resilience",
  },
];

export default function HtmlSitemap() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-20">
        <div className="mb-12 sm:mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Index
          </p>
          <h1 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            HTML Sitemap
          </h1>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
            Complete overview of Mars Technology Inc website structure and
            pages
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(sitemapLinks).map(([section, links], index) => (
            <section key={section}>
              <h2 className="border-t-2 border-foreground pt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                {String(index + 1).padStart(2, "0")} / {section}
              </h2>
              <ul className="mt-4">
                {links.map((link) => (
                  <li
                    key={link.href}
                    className="border-t border-foreground/15 first:border-t-0"
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline justify-between gap-4 py-3.5 text-sm font-light text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                      <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-12 sm:mt-16">
          <h2 className="border-t-2 border-foreground pt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            04 / Featured Blog Posts
          </h2>
          <ul className="mt-4">
            {featuredPosts.map((link) => (
              <li
                key={link.href}
                className="border-t border-foreground/15 first:border-t-0"
              >
                <Link
                  href={link.href}
                  className="group flex items-baseline justify-between gap-4 py-3.5 text-sm font-light text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                  <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </main>
  );
}
