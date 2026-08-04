import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacyPolicy } from "@/data/legal";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  canonical: `${siteConfig.url}/privacy`,
});

export default function PrivacyPage() {
  return <LegalPage content={privacyPolicy} />;
}
