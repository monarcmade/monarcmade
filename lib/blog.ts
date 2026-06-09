import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogFrontmatter, BlogPost, BlogPostSummary } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const { text: readTime } = readingTime(content);

  return {
    ...(data as BlogFrontmatter),
    slug,
    readingTime: readTime,
    content,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== null && post.published !== false)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date) || a.slug.localeCompare(b.slug));
}

export function toBlogPostSummary({ content, ...rest }: BlogPost): BlogPostSummary {
  void content;
  return rest;
}

export function getAllBlogSummaries(): BlogPostSummary[] {
  return getAllBlogPosts().map(toBlogPostSummary);
}

export function getFeaturedBlogSummaries(limit = 3): BlogPostSummary[] {
  return getAllBlogPosts()
    .filter((post) => post.featured)
    .slice(0, limit)
    .map(toBlogPostSummary);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 3): BlogPostSummary[] {
  const all = getAllBlogPosts();
  const current = all.find((post) => post.slug === currentSlug);
  const tagSet = new Set(current?.tags ?? []);

  return all
    .filter((post) => post.slug !== currentSlug)
    .map((post) => ({
      post,
      score:
        post.tags.reduce((n, tag) => n + (tagSet.has(tag) ? 1 : 0), 0) +
        (post.category === current?.category ? 2 : 0),
    }))
    .sort((a, b) => b.score - a.score || Date.parse(b.post.date) - Date.parse(a.post.date))
    .slice(0, limit)
    .map(({ post }) => toBlogPostSummary(post));
}

export function formatBlogDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
