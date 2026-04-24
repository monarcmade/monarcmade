"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { fadeUpSection, staggerSection, staggerShowcase, viewportOnce } from "@/lib/motion";
import { analytics } from "@/lib/analytics";
import { featuredWorkMoreLinks } from "@/data/homepage";
import { selectedClientContextsInline } from "@/data/selectedClients";
import type { WorkPost } from "@/types";

interface FeaturedWorkProps {
  posts: WorkPost[];
}

export function FeaturedWork({ posts }: FeaturedWorkProps) {
  if (posts.length === 0) {
    return (
      <Section
        id="projects"
        rhythm="wide"
        className="border-t border-(--color-border) bg-[linear-gradient(180deg,var(--color-bg-base)_0%,var(--section-band-mid)_50%,var(--color-bg-base)_100%)]"
      >
        <Container>
          <p className="text-(--color-text-secondary) text-center py-16">
            Work summaries load from <code className="text-(--color-accent)">content/work</code>. Add MDX files with{" "}
            <code className="text-(--color-accent)">featured: true</code> to populate this block.
          </p>
        </Container>
      </Section>
    );
  }

  const displayItems = [...posts]
    .sort((a, b) => b.year - a.year || a.slug.localeCompare(b.slug))
    .slice(0, 3)
    .map((post) => ({
      href: `/projects/${post.slug}`,
      slug: post.slug,
      tags: post.tags.slice(0, 4),
      title: post.title,
      summary: post.summary,
      client: post.client,
      industry: post.industry,
      year: post.year,
      metrics: post.metrics.slice(0, 2),
      outcomesBrief: post.outcomesBrief?.slice(0, 3) ?? [],
      type: post.services[0] ?? "Project",
    }));

  return (
    <Section
      id="projects"
      rhythm="tight"
      className="relative overflow-hidden border-t border-(--color-border) bg-[linear-gradient(180deg,var(--color-bg-base)_0%,var(--section-band-mid)_50%,var(--color-bg-base)_100%)]"
    >
      <Container className="relative z-[1]">
        <motion.div
          variants={staggerSection}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-8 md:gap-10"
        >
          <motion.div
            variants={fadeUpSection}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-8"
          >
            <SectionHeader
              eyebrow="Representative work"
              title="Real systems. Real environments. Real constraints."
              description={`Structured write-ups with real client names and qualitative outcomes—no fabricated percentages. On-the-record contexts also include ${selectedClientContextsInline}.`}
              impact
            />
            <Button
              label="Browse all projects"
              href="/projects"
              variant="ghost"
              size="sm"
              className="self-start md:self-auto shrink-0 text-(--color-accent) hover:text-(--color-accent-dim)"
              trackingLabel="featured_work_all"
            />
          </motion.div>

          <motion.div variants={staggerShowcase} className="flex flex-col gap-4 md:gap-5">
            {displayItems.map((item, i) => (
              <motion.div
                key={item.slug}
                variants={fadeUpSection}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
              >
                <Link
                  href={item.href}
                  className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0 rounded-2xl bg-(--color-bg-surface) border border-(--color-border) shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-[color-mix(in_oklab,var(--color-accent)_55%,var(--color-border-bright))] hover:shadow-[0_20px_56px_rgba(0,0,0,0.45),0_0_0_1px_rgba(0,200,255,0.12),0_0_48px_var(--color-accent-glow)] transition-[transform,box-shadow,border-color] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3 overflow-hidden"
                  onClick={() => analytics.projectView(item.slug)}
                >
                  <div className={`flex flex-col gap-5 p-6 sm:p-7 ${i === 0 ? "md:p-9 md:gap-6" : "md:p-7"}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold tracking-widest uppercase text-(--color-accent)">
                        {item.type}
                      </span>
                      <span className="text-(--color-border-bright)" aria-hidden="true">
                        ·
                      </span>
                      {item.tags.map((tag) => (
                        <Badge key={tag} label={tag} variant="muted" />
                      ))}
                    </div>

                    <h3
                      className={`font-bold text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors duration-300 text-balance leading-snug tracking-tight ${
                        i === 0 ? "text-2xl md:text-[1.85rem] lg:text-3xl" : "text-xl md:text-[1.35rem]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="text-(--color-text-secondary) leading-relaxed text-sm md:text-[0.95rem] max-w-2xl">
                      {item.summary}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-(--color-border)">
                      <span className="text-xs text-(--color-text-muted)">{item.client}</span>
                      <span className="text-(--color-border)" aria-hidden="true">
                        ·
                      </span>
                      <span className="text-xs text-(--color-text-muted)">{item.industry}</span>
                      <span className="text-(--color-border)" aria-hidden="true">
                        ·
                      </span>
                      <span className="text-xs text-(--color-text-muted)">{item.year}</span>
                      <span className="w-full sm:w-auto sm:ml-auto text-xs font-medium text-(--color-accent) opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                        Read summary →
                      </span>
                    </div>

                    {item.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-4 pt-4 md:hidden">
                        {item.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="flex flex-col gap-1 min-w-[5.75rem] rounded-xl border border-(--color-border) bg-(--color-bg-elevated) px-3.5 py-3"
                          >
                            <span className="text-2xl font-bold text-(--color-accent) leading-none tabular-nums drop-shadow-[0_0_16px_rgba(0,200,255,0.15)]">
                              {metric.value}
                            </span>
                            <span className="text-[11px] font-medium uppercase tracking-wide text-(--color-text-muted) leading-snug">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {item.metrics.length === 0 && item.outcomesBrief.length > 0 && (
                      <ul className="list-none m-0 p-0 flex flex-col gap-2 pt-4 md:hidden border-t border-(--color-border)">
                        {item.outcomesBrief.map((line) => (
                          <li
                            key={line}
                            className="text-xs text-(--color-text-secondary) leading-snug pl-3 border-l border-(--color-border-bright)"
                          >
                            {line}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {item.metrics.length > 0 && (
                    <div className="hidden md:flex flex-col justify-center gap-6 px-7 py-8 md:border-l border-(--color-border) bg-[linear-gradient(180deg,var(--color-bg-elevated)_0%,var(--color-bg-surface)_100%)] min-w-[10.5rem] relative before:absolute before:left-0 before:top-[12%] before:bottom-[12%] before:w-px before:bg-[linear-gradient(180deg,transparent,var(--color-accent),transparent)] before:opacity-50 before:blur-[0.5px]">
                      {item.metrics.map((metric) => (
                        <div key={metric.label} className="flex flex-col gap-1.5">
                          <span className="text-[2rem] lg:text-4xl font-bold text-(--color-accent) leading-none tabular-nums tracking-tight drop-shadow-[0_0_24px_rgba(0,200,255,0.18)]">
                            {metric.value}
                          </span>
                          <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-(--color-text-muted) leading-snug">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  {item.metrics.length === 0 && item.outcomesBrief.length > 0 && (
                    <div className="hidden md:flex flex-col justify-center gap-4 px-7 py-8 md:border-l border-(--color-border) bg-[linear-gradient(180deg,var(--color-bg-elevated)_0%,var(--color-bg-surface)_100%)] min-w-[12rem] max-w-[16rem] relative before:absolute before:left-0 before:top-[12%] before:bottom-[12%] before:w-px before:bg-[linear-gradient(180deg,transparent,var(--color-accent),transparent)] before:opacity-50 before:blur-[0.5px]">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-(--color-text-muted) m-0">Outcomes</p>
                      <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                        {item.outcomesBrief.map((line) => (
                          <li
                            key={line}
                            className="text-xs text-(--color-text-secondary) leading-snug pl-3 border-l border-(--color-border-bright)"
                          >
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpSection}
            className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 pt-1 border-t border-(--color-border) border-dashed"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--color-text-muted) shrink-0">
              More entries
            </span>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {featuredWorkMoreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-(--color-accent) hover:text-(--color-accent-dim) underline-offset-4 hover:underline transition-colors"
                  onClick={() => analytics.projectView(link.href.replace("/projects/", ""))}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
