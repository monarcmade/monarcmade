import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { formatBlogDate } from "@/lib/blog";
import type { BlogPostSummary } from "@/types";

export function BlogRelated({ posts }: { posts: BlogPostSummary[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-(--color-text-muted) m-0">Keep reading</p>
        <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-primary) m-0">Related guides</h2>
      </div>
      <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none m-0 p-0">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col gap-4 rounded-xl border border-(--color-border) bg-(--color-bg-base) p-5 hover:border-(--color-border-bright) hover:shadow-[0_0_24px_var(--color-accent-glow)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3"
            >
              <Badge label={post.category} variant="accent" />
              <h3 className="text-base font-bold text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors m-0">
                {post.title}
              </h3>
              <p className="text-xs text-(--color-text-muted) mt-auto m-0">{formatBlogDate(post.date)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
