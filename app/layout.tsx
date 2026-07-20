import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _anton = Anton({ weight: "400", subsets: ["latin"] });

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl("/marstechnologyinc-logo.svg"),
  description: siteConfig.description,
  areaServed: ["CA", "US"],
  address: {
    "@type": "PostalAddress",
    ...siteConfig.canadaOffice,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: siteConfig.phoneHref,
      email: siteConfig.emails.sales,
      areaServed: ["CA", "US"],
      availableLanguage: ["en"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: siteConfig.phoneHref,
      email: siteConfig.emails.support,
      areaServed: ["CA", "US"],
      availableLanguage: ["en"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
};

// Regional/local schema — powers "wholesale electronics distributor near me",
// "electronics wholesaler Brampton/Toronto/GTA" style queries.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "WholesaleStore",
  name: siteConfig.name,
  url: siteConfig.url,
  image: absoluteUrl("/marstechnologyinc-logo.svg"),
  telephone: siteConfig.phoneHref,
  email: siteConfig.emails.sales,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    ...siteConfig.canadaOffice,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7557,
    longitude: -79.7407,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United States" },
    { "@type": "City", name: "Brampton" },
    { "@type": "City", name: "Toronto" },
    { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
    { "@type": "AdministrativeArea", name: "Ontario" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Wholesale Electronics Distributor in Canada & USA | Mars Technology Inc",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "wholesale electronics distributor",
    "wholesale electronics distributor Canada",
    "electronics wholesaler Toronto",
    "wholesale electronics GTA",
    "electronics distributor Brampton",
    "bulk smartphones Canada",
    "wholesale phones Ontario",
    "wholesale tablets",
    "consumer electronics distributor",
    "electronics liquidation Canada",
    "B2B electronics supplier",
    "USA electronics distributor",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Wholesale Electronics",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Wholesale Electronics Distributor in Canada & USA | Mars Technology Inc",
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary",
    title: "Wholesale Electronics Distributor in Canada & USA | Mars Technology Inc",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#C1440E",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
