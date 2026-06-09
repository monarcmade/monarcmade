import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ContactPageBody } from "@/components/sections/ContactPageBody";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Monarc Made: expectations, response playbook, and FAQ—send stack, timeline, and the metric that has to move.",
  canonical: `${siteConfig.url}/contact`,
});

export default function ContactPage() {
  return (
    <div className="inner-page">
      <ContactPageBody />
    </div>
  );
}
