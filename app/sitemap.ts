import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllWork } from "@/lib/work";
import { getAllBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const posts = getAllWork();
  const blogPosts = getAllBlogPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/university`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const workRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/projects/${post.slug}`,
    lastModified: new Date(`${post.year}-01-01`),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.8 : 0.7,
  }));

  return [...staticRoutes, ...workRoutes, ...blogRoutes];
}
