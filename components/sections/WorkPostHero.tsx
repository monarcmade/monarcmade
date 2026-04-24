"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { MetricInline } from "@/components/ui/MetricPill";
import { fadeUpSection, staggerSection } from "@/lib/motion";
import type { WorkMetric } from "@/types";

interface WorkPostHeroProps {
  title: string;
  summary: string;
  tags: string[];
  client: string;
  industry: string;
  year: number;
  readingTime?: string;
  metrics: WorkMetric[];
  outcomesBrief?: string[];
  contextAnchors?: string;
}

export function WorkPostHero({
  title,
  summary,
  tags,
  client,
  industry,
  year,
  readingTime,
  metrics,
  outcomesBrief,
  contextAnchors,
}: WorkPostHeroProps) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
        <ol role="list" className="flex items-center gap-2 text-sm text-(--color-text-muted)">
          <li>
            <Link
              href="/projects"
              className="hover:text-(--color-text-primary) transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3 rounded-sm"
            >
              Projects
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-(--color-text-secondary) truncate max-w-[min(20rem,55vw)]">{title}</li>
        </ol>
      </nav>

      <motion.div
        variants={staggerSection}
        initial={false}
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-8 lg:gap-12 items-start"
      >
        <motion.div variants={fadeUpSection} className="flex flex-col gap-6 md:gap-7 min-w-0">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} label={tag} variant="accent" />
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-(--color-text-primary) leading-[1.08] text-balance max-w-3xl">
            {title}
          </h1>

          <p className="text-base md:text-lg text-(--color-text-secondary) leading-relaxed max-w-2xl text-pretty">{summary}</p>

          {contextAnchors && (
            <p className="text-xs text-(--color-text-muted) leading-relaxed max-w-2xl border-l border-(--color-border-bright) pl-3.5 text-pretty">
              {contextAnchors}
            </p>
          )}

          {metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5 lg:hidden">
              {metrics.map((metric) => (
                <MetricInline key={metric.label} value={metric.value} label={metric.label} />
              ))}
            </div>
          )}
          {metrics.length === 0 && outcomesBrief && outcomesBrief.length > 0 && (
            <ul className="list-none m-0 p-0 flex flex-col gap-2 lg:hidden max-w-2xl">
              {outcomesBrief.map((line) => (
                <li key={line} className="text-sm text-(--color-text-secondary) leading-snug pl-3 border-l border-(--color-border-bright)">
                  {line}
                </li>
              ))}
            </ul>
          )}
        </motion.div>

        <motion.aside
          variants={fadeUpSection}
          className="flex flex-col gap-0 rounded-2xl border border-(--color-border) bg-(--color-bg-surface) overflow-hidden lg:sticky lg:top-28"
          aria-label="Project overview"
        >
          <div className="px-5 py-4 border-b border-(--color-border)">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-(--color-text-muted)">At a glance</p>
          </div>
          <dl className="grid grid-cols-1 divide-y divide-(--color-border)">
            <div className="px-5 py-3.5 flex flex-col gap-0.5">
              <dt className="text-[10px] text-(--color-text-muted) uppercase tracking-wide">Client</dt>
              <dd className="text-sm font-medium text-(--color-text-primary)">{client}</dd>
            </div>
            <div className="px-5 py-3.5 flex flex-col gap-0.5">
              <dt className="text-[10px] text-(--color-text-muted) uppercase tracking-wide">Industry</dt>
              <dd className="text-sm font-medium text-(--color-text-primary)">{industry}</dd>
            </div>
            <div className="px-5 py-3.5 flex flex-col gap-0.5">
              <dt className="text-[10px] text-(--color-text-muted) uppercase tracking-wide">Year</dt>
              <dd className="text-sm font-medium text-(--color-text-primary)">{year}</dd>
            </div>
            {readingTime && (
              <div className="px-5 py-3.5 flex flex-col gap-0.5">
                <dt className="text-[10px] text-(--color-text-muted) uppercase tracking-wide">Read time</dt>
                <dd className="text-sm font-medium text-(--color-text-primary)">{readingTime}</dd>
              </div>
            )}
          </dl>
          {metrics.length > 0 && (
            <div className="hidden lg:grid grid-cols-1 gap-0 border-t border-(--color-border) divide-y divide-(--color-border)">
              {metrics.map((metric) => (
                <div key={metric.label} className="px-5 py-4 flex flex-col gap-1">
                  <span className="text-2xl font-bold text-(--color-accent) leading-none tabular-nums">{metric.value}</span>
                  <span className="text-[11px] text-(--color-text-muted) leading-snug">{metric.label}</span>
                </div>
              ))}
            </div>
          )}
          {metrics.length === 0 && outcomesBrief && outcomesBrief.length > 0 && (
            <div className="hidden lg:flex flex-col gap-3 px-5 py-4 border-t border-(--color-border)">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-(--color-text-muted) m-0">Outcomes</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {outcomesBrief.map((line) => (
                  <li key={line} className="text-xs text-(--color-text-secondary) leading-snug">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.aside>
      </motion.div>
    </>
  );
}
