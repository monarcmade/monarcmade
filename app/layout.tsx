import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.og.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Monarc Made",
    "Luis Cantu",
    "AI systems",
    "AI engineering",
    "production AI",
    "web development",
    "production web development",
    "Next.js",
    "Shopify development",
    "AWS",
    "Azure",
    "GCP",
    "OpenClaw",
    "cloud engineering",
    "CI/CD",
    "modernization",
    "senior engineer",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.name,
  openGraph: {
    title: siteConfig.og.title,
    description: siteConfig.og.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.og.image,
        width: 1200,
        height: 630,
        alt: siteConfig.og.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.og.title,
    description: siteConfig.og.description,
    creator: "@lcantu",
    images: [siteConfig.og.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/brand/mm-logo.png", type: "image/png" }],
    apple: "/brand/mm-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen antialiased`}
      >
        <ThemeProvider>
          {/* Skip-to-content for keyboard users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-(--color-accent) focus:text-(--color-text-inverse) focus:rounded-md focus:font-medium"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main-content" className="flex-1 pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
