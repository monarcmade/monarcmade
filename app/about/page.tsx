import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { AboutPageBody } from "@/components/sections/AboutPageBody";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Monarc Made: focused engineering practice—contexts, delivery process, and technical depth for production web, cloud, modernization, and AI.",
  canonical: `${siteConfig.url}/about`,
});

export default function AboutPage() {
  return (
    <div className="inner-page">
      <AboutPageBody />
    </div>
  );
}
