import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { UniversityPageBody } from "@/components/sections/UniversityPageBody";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Monarc University",
  description:
    "Monarc University is a guided AI builder cohort for beginners, founders, creatives, and professionals who want to learn AI from zero and ship a real capstone project.",
  canonical: `${siteConfig.url}/university`,
});

export default function UniversityPage() {
  return (
    <div className="inner-page">
      <UniversityPageBody />
    </div>
  );
}
