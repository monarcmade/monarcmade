import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface PageMetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function buildMetadata(options: PageMetadataOptions = {}): Metadata {
  const {
    title,
    description = siteConfig.description,
    image = siteConfig.og.image,
    noIndex = false,
    canonical,
  } = options;

  const shareTitle = title
    ? `${title} — ${siteConfig.name}`
    : siteConfig.og.title;

  const absoluteImage = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image}`;

  return {
    title: title ?? siteConfig.og.title,
    description,
    metadataBase: new URL(siteConfig.url),
    ...(canonical && { alternates: { canonical } }),
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: shareTitle,
      description,
      url: canonical ?? siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: shareTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [absoluteImage],
      creator: "@lcantu",
    },
  };
}

export function buildWorkMetadata(options: {
  title: string;
  description: string;
  slug: string;
  image?: string;
}): Metadata {
  return buildMetadata({
    title: options.title,
    description: options.description,
    image: options.image,
    canonical: `${siteConfig.url}/projects/${options.slug}`,
  });
}
