import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { WorkFrontmatter, WorkPost, WorkPostSummary } from "@/types";

const WORK_DIR = path.join(process.cwd(), "content/work");

export function getWorkSlugs(): string[] {
  if (!fs.existsSync(WORK_DIR)) return [];
  return fs
    .readdirSync(WORK_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getWorkPost(slug: string): WorkPost | null {
  const filePath = path.join(WORK_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const { text: readTime } = readingTime(content);

  return {
    ...(data as WorkFrontmatter),
    slug,
    readingTime: readTime,
    content,
  };
}

export function getAllWork(): WorkPost[] {
  const slugs = getWorkSlugs();
  return slugs
    .map((slug) => getWorkPost(slug))
    .filter((post): post is WorkPost => post !== null && post.published !== false)
    .sort((a, b) => b.year - a.year || a.slug.localeCompare(b.slug));
}

export function toWorkPostSummary({ content, ...rest }: WorkPost): WorkPostSummary {
  void content;
  return rest;
}

export function getAllWorkSummaries(): WorkPostSummary[] {
  return getAllWork().map(toWorkPostSummary);
}

export function getFeaturedWork(limit = 3): WorkPost[] {
  return getAllWork()
    .filter((post) => post.featured)
    .sort((a, b) => b.year - a.year || a.slug.localeCompare(b.slug))
    .slice(0, limit);
}

/** Related case studies for detail pages — tag overlap first, then recency. */
export function getRelatedWork(currentSlug: string, limit = 3): WorkPost[] {
  const all = getAllWork();
  const current = all.find((p) => p.slug === currentSlug);
  const tagSet = new Set(current?.tags ?? []);

  return all
    .filter((p) => p.slug !== currentSlug)
    .map((post) => ({
      post,
      score: post.tags.reduce((n, t) => n + (tagSet.has(t) ? 1 : 0), 0),
    }))
    .sort((a, b) => b.score - a.score || b.post.year - a.post.year || a.post.slug.localeCompare(b.post.slug))
    .map((x) => x.post)
    .slice(0, limit);
}
