import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { refundPolicy } from "@/data/legal";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: refundPolicy.title,
  description: refundPolicy.description,
  canonical: `${siteConfig.url}/refund-policy`,
});

export default function RefundPolicyPage() {
  return <LegalPage content={refundPolicy} />;
}
