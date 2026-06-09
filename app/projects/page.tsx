import type { Metadata } from "next";
import { getAllWorkSummaries } from "@/lib/work";
import { buildMetadata } from "@/lib/metadata";
import { WorkPageBody } from "@/components/sections/WorkPageBody";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Case studies across web, cloud, modernization, and production AI—constraint, approach, and measured outcomes with anonymized company labels.",
  canonical: `${siteConfig.url}/projects`,
});

export default function ProjectsPage() {
  const posts = getAllWorkSummaries();

  return (
    <div className="inner-page">
      <WorkPageBody posts={posts} />
    </div>
  );
}
