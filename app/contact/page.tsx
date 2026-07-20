import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Wholesale Electronics Distributor in Canada",
  description:
    "Talk to Mars Technology Inc about wholesale electronics, partnership opportunities, bulk orders, and cross-border distribution support.",
  path: "/contact",
  keywords: [
    "contact wholesale electronics distributor","electronics wholesaler Brampton Ontario","wholesale distributor GTA",
    "bulk order inquiry",
    "Mars Technology Inc sales",
    "electronics distribution contact",
  ],
});

const departments = [
  {
    name: "Sales & International Business",
    email: "gaurav@marstechnologyinc.com",
    description:
      "Wholesale pricing, bulk orders, global business development, and international trade partnerships",
  },
  {
    name: "Support, Partnerships & Retailers",
    email: "ayush@marstechnologyinc.com",
    description:
      "Product information, customer service, retail programs, and authorized dealer opportunities",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left — channels */}
          <div className="lg:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              Contact
            </p>
            <h1 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Talk to us.
            </h1>
            <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              Ready to partner with a trusted global technology distributor?
              Contact our team for partnership opportunities, support, and
              business solutions.
            </p>

            {/* Channel rows */}
            <div className="mt-10 border-t-2 border-foreground">
              <a
                href="tel:+16474034735"
                className="group flex items-start justify-between gap-4 border-b border-foreground/15 py-5"
              >
                <div className="flex flex-1 flex-col gap-1 sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                  <span className="pt-0.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Phone
                  </span>
                  <span>
                    <span className="block text-sm font-light text-foreground transition-colors group-hover:text-primary sm:text-base">
                      +1 647 403 4735
                    </span>
                    <span className="mt-1 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      WhatsApp available
                    </span>
                  </span>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>

              <a
                href="mailto:gaurav@marstechnologyinc.com"
                className="group flex items-start justify-between gap-4 border-b border-foreground/15 py-5"
              >
                <div className="flex flex-1 flex-col gap-1 sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                  <span className="pt-0.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Email
                  </span>
                  <span>
                    <span className="block break-all text-sm font-light text-foreground transition-colors group-hover:text-primary sm:text-base">
                      gaurav@marstechnologyinc.com
                    </span>
                    <span className="mt-1 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Response within 24 hours
                    </span>
                  </span>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>

              <a
                href="mailto:ayush@marstechnologyinc.com"
                className="group flex items-start justify-between gap-4 border-b border-foreground/15 py-5"
              >
                <div className="flex flex-1 flex-col gap-1 sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                  <span className="pt-0.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Support
                  </span>
                  <span className="block break-all text-sm font-light text-foreground transition-colors group-hover:text-primary sm:text-base">
                    ayush@marstechnologyinc.com
                  </span>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>

              <div className="flex items-start justify-between gap-4 border-b border-foreground/15 py-5">
                <div className="flex flex-1 flex-col gap-1 sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                  <span className="pt-0.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Hours
                  </span>
                  <span>
                    <span className="block text-sm font-light text-foreground sm:text-base">
                      Mon - Fri: 9AM - 6PM EST
                    </span>
                    <span className="mt-1 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Saturday & Sunday: Closed
                    </span>
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-foreground/15 py-5">
                <div className="flex flex-1 flex-col gap-1 sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                  <span className="pt-0.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Canada Office
                  </span>
                  <span>
                    <span className="block text-sm font-light text-foreground sm:text-base">
                      250 Sunny Meadow Blvd, Unit 248
                    </span>
                    <span className="mt-1 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Brampton, ON L6R 3Y6, Canada
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="mt-14 border-t-2 border-foreground pt-5">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                Department contacts
              </h2>
              <div className="mt-4">
                {departments.map((dept) => (
                  <a
                    key={dept.email}
                    href={`mailto:${dept.email}`}
                    className="group flex items-start justify-between gap-4 border-t border-foreground/15 py-5 first:border-t-0"
                  >
                    <div className="flex-1">
                      <p className="font-mono text-xs uppercase tracking-widest text-foreground">
                        {dept.name}
                      </p>
                      <p className="mt-2 break-all text-sm font-light text-foreground transition-colors group-hover:text-primary">
                        {dept.email}
                      </p>
                      <p className="mt-1.5 text-xs font-light leading-relaxed text-muted-foreground">
                        {dept.description}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-6">
            <div className="border-2 border-foreground bg-card p-6 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
