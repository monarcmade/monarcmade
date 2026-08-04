import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { termsOfService } from "@/data/legal";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: termsOfService.title,
  description: termsOfService.description,
  canonical: `${siteConfig.url}/terms`,
});

export default function TermsPage() {
  return <LegalPage content={termsOfService} />;
}
