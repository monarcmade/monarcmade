import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { UniversityPageBody } from "@/components/sections/UniversityPageBody";

export const metadata: Metadata = buildMetadata({
  title: "University",
  description:
    "Monarc Made University: a structured AI curriculum from first principles to production. Learn LLMs, RAG, agents, and deployment — built for developers who want to ship real things.",
  canonical: "https://monarcmade.com/university",
});

export default function UniversityPage() {
  return (
    <div className="inner-page">
      <UniversityPageBody />
    </div>
  );
}
