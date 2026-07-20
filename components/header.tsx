'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Menu, X } from "lucide-react"
import { TopBar } from "@/components/top-bar"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isSearchFocused, setIsSearchFocused] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname()

  React.useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/brands", label: "Brands" },
    { href: "/categories", label: "Categories" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <div className="flex flex-col">
      <TopBar />
      <header className="sticky top-0 z-50 w-full border-b-2 border-foreground bg-background">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 md:h-20">
          {/* Wordmark */}
          <Link href="/" className="flex shrink-0 items-center">
            <span className="font-display text-lg uppercase leading-none tracking-tight text-foreground sm:text-xl">
              Mars Technology<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="mx-auto hidden items-center lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-2 py-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-primary xl:px-3",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground/70",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            {/* Search */}
            <div
              className={cn(
                "hidden items-center gap-2 border bg-transparent px-3 py-2.5 transition-all duration-300 ease-in-out xl:flex",
                isSearchFocused
                  ? "w-56 border-foreground"
                  : "w-40 border-foreground/20 hover:border-foreground/40",
              )}
            >
              <Search className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full border-none bg-transparent font-mono text-xs tracking-wide text-foreground outline-none placeholder:uppercase placeholder:tracking-[0.15em] placeholder:text-muted-foreground"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>

            <Link
              href="/contact"
              className="hidden items-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background md:inline-flex"
            >
              Get Quote
            </Link>

            {/* Mobile Menu */}
            <button
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="site-mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center border-2 border-foreground text-foreground transition-colors hover:bg-foreground hover:text-background lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-overlay"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div
              id="site-mobile-menu"
              className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col overflow-y-auto border-l-2 border-foreground bg-background"
            >
              <div className="flex items-center justify-between border-b-2 border-foreground px-5 py-4 sm:px-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                  Menu
                </p>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center border-2 border-foreground text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center justify-between gap-4 border-b-2 border-foreground px-5 py-5 transition-colors hover:bg-primary sm:px-8"
                  >
                    <span
                      className={cn(
                        "font-display text-4xl uppercase leading-[0.95] tracking-tight transition-colors group-hover:text-primary-foreground sm:text-5xl",
                        pathname === link.href
                          ? "text-primary"
                          : "text-foreground",
                      )}
                    >
                      {link.label}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-primary-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 border-t-2 border-foreground px-5 py-6 sm:px-8">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </div>
  );
}
