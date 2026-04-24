import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { WorkPostSummary } from "@/types";

export function WorkPostRelated({ posts, heading = "Related work" }: { posts: WorkPostSummary[]; heading?: string }) {
  if (posts.length === 0) return null;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold text-(--color-text-primary) tracking-tight">{heading}</h2>
        <p className="text-xs text-(--color-text-muted) max-w-2xl leading-relaxed">
          Related work: tag overlap first, then recency—curated in <code className="text-(--color-accent)">getRelatedWork</code> when you tighten the map.
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-3" role="list">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              className="group flex h-full flex-col gap-3 p-5 rounded-xl border border-(--color-border) bg-(--color-bg-base) hover:border-(--color-border-bright) hover:shadow-[0_0_24px_var(--color-accent-glow)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3"
            >
              <div className="flex flex-wrap gap-1.5">
                {p.tags.slice(0, 3).map((t) => (
                  <Badge key={t} label={t} variant="muted" />
                ))}
              </div>
              <p className="text-sm font-semibold text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors line-clamp-2">
                {p.title}
              </p>
              <p className="text-xs text-(--color-text-muted) mt-auto">{p.client} · {p.year}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
