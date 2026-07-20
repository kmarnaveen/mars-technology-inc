import type { Metadata } from "next";

export const siteConfig = {
  name: "Mars Technology Inc",
  url: "https://marstechnologyinc.com",
  description:
    "Wholesale electronics distributor based in Brampton, Ontario supplying bulk smartphones, tablets, audio, displays, accessories, and liquidation inventory to retailers across Canada and the USA.",
  phoneDisplay: "+1 647 403 4735",
  phoneHref: "+16474034735",
  emails: {
    info: "gaurav@marstechnologyinc.com",
    sales: "gaurav@marstechnologyinc.com",
    support: "ayush@marstechnologyinc.com",
    partners: "ayush@marstechnologyinc.com",
  },
  canadaOffice: {
    streetAddress: "250 Sunny Meadow Blvd, Unit 248",
    addressLocality: "Brampton",
    addressRegion: "ON",
    postalCode: "L6R 3Y6",
    addressCountry: "CA",
  },
} as const;

type MetadataType = "website" | "article";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: MetadataType;
  image?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(
    path.startsWith("/") ? path : `/${path}`,
    siteConfig.url,
  ).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  image,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const images = image ? [absoluteUrl(image)] : undefined;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title,
      description,
      ...(images ? { images } : {}),
    },
  };
}
