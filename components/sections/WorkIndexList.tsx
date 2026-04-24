"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import type { WorkPostSummary } from "@/types";

export function WorkIndexList({ posts }: { posts: WorkPostSummary[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-center text-(--color-text-secondary) py-20">
        Add MDX files under <code className="text-(--color-accent)">content/work</code> to populate this index.
      </p>
    );
  }

  return (
    <motion.ul
      role="list"
      variants={staggerSection}
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
      className="flex flex-col gap-3 md:gap-4"
    >
      {posts.map((post, i) => (
        <motion.li
          key={post.slug}
          id={`case-${post.slug}`}
          variants={fadeUpSection}
          custom={i}
          whileHover={{ y: -2, transition: { duration: 0.2 } }}
          className="scroll-mt-28"
        >
          <Link
            href={`/projects/${post.slug}`}
            className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 p-6 md:p-8 rounded-xl bg-(--color-bg-surface) border border-(--color-border) hover:border-(--color-border-bright) hover:shadow-[0_0_32px_var(--color-accent-glow)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3 block"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 5).map((tag) => (
                  <Badge key={tag} label={tag} variant="accent" />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-(--color-text-secondary) leading-relaxed max-w-2xl text-sm md:text-base">
                  {post.summary}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-(--color-text-muted)">
                <span>{post.client}</span>
                <span aria-hidden="true">·</span>
                <span>{post.industry}</span>
                <span aria-hidden="true">·</span>
                <span>{post.year}</span>
                {post.readingTime && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                  </>
                )}
              </div>
            </div>

            {post.metrics.length > 0 && (
              <div className="flex md:flex-col gap-4 md:gap-3 md:items-end md:justify-center shrink-0">
                {post.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="flex flex-col gap-0.5 md:text-right">
                    <span className="text-2xl font-bold text-(--color-accent) leading-none tabular-nums">{metric.value}</span>
                    <span className="text-xs text-(--color-text-muted)">{metric.label}</span>
                  </div>
                ))}
              </div>
            )}
            {post.metrics.length === 0 && post.outcomesBrief && post.outcomesBrief.length > 0 && (
              <div className="flex flex-col gap-2 md:items-end md:justify-center shrink-0 max-w-[14rem] md:text-right">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-(--color-text-muted)">Outcomes</span>
                <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
                  {post.outcomesBrief.slice(0, 3).map((line) => (
                    <li key={line} className="text-xs text-(--color-text-secondary) leading-snug">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
