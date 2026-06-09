import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { getAllBlogSummaries } from "@/lib/blog";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Practical Monarc Made guides for production AI, web performance, cloud cleanup, migrations, e-commerce, and modernization work.",
  canonical: `${siteConfig.url}/blog`,
});

export default function BlogPage() {
  const posts = getAllBlogSummaries();

  return (
    <div className="inner-page">
      <BlogIndex posts={posts} />
    </div>
  );
}
