"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Linkedin, Instagram, Twitter } from "lucide-react";

const productLinks = [
  { href: "/products", label: "All Products" },
  { href: "/categories", label: "Categories" },
  { href: "/brands", label: "Brands" },
  { href: "/contact", label: "Special Orders" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer className="relative isolate w-full overflow-hidden border-t-4 border-primary bg-foreground text-background">
      {/* Ember wash in the top corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-radial-[at_12%_0%] from-primary/20 via-transparent to-transparent"
      />
      {/* Top — brand + direct contact */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 pb-10 pt-12 sm:pt-14 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-md">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-background/50">
              B2B Wholesale Distribution
            </p>
            <p className="mt-4 font-display text-3xl uppercase leading-[0.95] tracking-tight text-background sm:text-4xl">
              Mars Technology<span className="text-primary">.</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Leading B2B distributor of premium electronics across North
              America.
            </p>
          </div>

          <a
            href="mailto:gaurav@marstechnologyinc.com"
            className="inline-flex items-center gap-3 self-start border-2 border-background/25 px-4 py-3.5 font-mono text-[10px] uppercase tracking-widest text-background transition-colors hover:border-background hover:bg-background hover:text-foreground sm:px-5 sm:text-xs"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            gaurav@marstechnologyinc.com
          </a>
        </div>
      </div>

      {/* Link columns + newsletter */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-background/10 py-10 sm:gap-x-8 sm:py-12 md:grid-cols-4">
          {/* Products */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/50">
              Products
            </h4>
            <nav className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block font-mono text-[11px] uppercase tracking-[0.15em] text-background/70 transition-colors hover:text-background sm:text-xs"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/50">
              Company
            </h4>
            <nav className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block font-mono text-[11px] uppercase tracking-[0.15em] text-background/70 transition-colors hover:text-background sm:text-xs"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/50">
              Stay up to date
            </h4>
            <p className="mt-5 text-sm leading-relaxed text-background/60">
              Get the latest wholesale deals and exclusive pricing updates.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex flex-col gap-2 sm:flex-row"
            >
              {submitted ? (
                <p className="py-3 font-mono text-xs uppercase tracking-widest text-success">
                  Thanks! We&apos;ll keep you posted.
                </p>
              ) : (
                <>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full min-w-0 border border-background/25 bg-transparent px-4 py-3 font-mono text-xs text-background placeholder:text-background/40 focus:border-background focus:outline-none sm:flex-1"
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-background hover:text-foreground sm:w-auto"
                  >
                    Subscribe
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Giant wordmark — SVG scales to fill width on any screen, never clips */}
      <div className="select-none px-3 pt-6 sm:px-5 sm:pt-8">
        <svg
          viewBox="0 0 1180 148"
          className="block h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Mars Technology Inc"
        >
          <text
            x="590"
            y="116"
            textAnchor="middle"
            textLength="1160"
            lengthAdjust="spacingAndGlyphs"
            className="fill-background"
            style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 400, fontSize: "128px" }}
          >
            MARS TECHNOLOGY INC
          </text>
        </svg>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mt-6 border-t border-background/10 sm:mt-8">
          <div className="flex flex-col items-start justify-between gap-3 py-4 font-mono text-[10px] uppercase tracking-widest text-background/50 sm:flex-row sm:items-center sm:py-5">
            <p>© 2026. All rights reserved. Mars Technology Inc</p>
            <div className="flex items-center gap-4">
              <span>@marstechnologyinc</span>
              <a
                href="https://linkedin.com/company/marstechnologyinc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-background/50 transition-colors hover:text-background"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/marstechnologyinc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-background/50 transition-colors hover:text-background"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/marstechnologyinc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="text-background/50 transition-colors hover:text-background"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="border-t border-background/10 py-4 font-mono text-[10px] uppercase tracking-widest text-background/40">
            <p>
              Designed &amp; developed by{" "}
              <a
                href="https://www.linkedin.com/in/naveen-kumar-fed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 transition-colors hover:text-background"
              >
                Naveen Yaduvanshi
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
