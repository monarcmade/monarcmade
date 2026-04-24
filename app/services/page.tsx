import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ServicesPageBody } from "@/components/sections/ServicesPageBody";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Monarc Made services: web surfaces, delivery and hosting, multi-cloud support, modernization, applied AI and automation, and OpenClaw-style agent systems.",
  canonical: "https://monarcmade.com/services",
});

export default function ServicesPage() {
  return (
    <div className="inner-page">
      <ServicesPageBody />
    </div>
  );
}
