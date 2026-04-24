"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import { analytics } from "@/lib/analytics";
import { homepageServices } from "@/data/homeServices";
import { engagementFormats } from "@/data/homepage";
import { engagementFormatIcons } from "@/components/engagement/EngagementFormatIcons";

function ServiceGlyph({ id }: { id: string }) {
  const shell =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-(--color-border-bright)/70 bg-(--color-bg-base)/90 text-(--color-accent) shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]";
  switch (id) {
    case "home-build":
      return (
        <span className={shell} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <path d="M4 6h16v12H4z" strokeLinejoin="round" />
            <path d="M8 10h8M8 14h5" strokeLinecap="round" />
          </svg>
        </span>
      );
    case "home-operate":
      return (
        <span className={shell} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <path d="M7 16h11a3 3 0 0 0 0-6 1 1 0 0 0-1.9-.3A4 4 0 0 0 7 10v0" strokeLinecap="round" />
            <path d="M7 10 5.5 8.5M12 19v-3" strokeLinecap="round" />
          </svg>
        </span>
      );
    case "home-modernize":
      return (
        <span className={shell} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      );
    case "home-intelligence":
      return (
        <span className={shell} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <rect x="5" y="10" width="6" height="8" rx="1" />
            <rect x="13" y="6" width="6" height="12" rx="1" opacity="0.85" />
            <path d="M8 7V5M12 5v4M16 5v2" strokeLinecap="round" />
          </svg>
        </span>
      );
    default:
      return (
        <span className={shell} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            <circle cx="12" cy="12" r="7" />
          </svg>
        </span>
      );
  }
}

export function ServicesGrid() {
  return (
    <Section
      id="services"
      rhythm="wide"
      className="relative border-t border-(--color-border) bg-(--color-bg-surface)"
    >
      <Container>
        <motion.div
          variants={staggerSection}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-8 md:gap-9"
        >
          {/* Header row */}
          <motion.div
            variants={fadeUpSection}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-7"
          >
            <SectionHeader
              eyebrow="Offerings"
              title="Build. Modernize. Operate. Intelligence."
              description="Four practice lanes—structured like productized engineering, scoped like serious production work. Stack follows the constraint."
            />
            <Button
              label="Full catalog"
              href="/services"
              variant="ghost"
              size="sm"
              className="self-start md:self-auto shrink-0 text-(--color-accent) hover:text-(--color-accent-dim)"
              trackingLabel="services_grid_all"
            />
          </motion.div>

          <motion.div
            variants={fadeUpSection}
            className="rounded-2xl border border-(--color-border) bg-(--color-bg-base) p-3 md:p-4"
            aria-label="Engagement formats"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-(--color-text-muted) px-1 pb-2 md:pb-2.5">
              Ways to work together
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2.5">
              {engagementFormats.map((f, idx) => (
                <div
                  key={f.label}
                  className="flex gap-2.5 rounded-xl border border-(--color-border) bg-(--color-bg-surface) px-3 py-2.5 md:px-3.5 md:py-3"
                >
                  <span className="mt-0.5 text-(--color-accent) opacity-90">{engagementFormatIcons[idx]}</span>
                  <div className="min-w-0 flex flex-col gap-0.5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-(--color-accent)">
                      {f.label}
                    </p>
                    <p className="text-[11px] md:text-xs text-(--color-text-secondary) leading-snug">{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 2×2 grid */}
          <motion.div variants={staggerSection} className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-5">
            {homepageServices.map((service, i) => (
              <motion.div
                key={service.id}
                variants={fadeUpSection}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
              >
                <Link
                  href={service.href}
                  className={`group flex flex-col gap-4 md:gap-5 p-5 md:p-6 rounded-2xl border transition-[transform,box-shadow,border-color] duration-300 h-full focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3 ${
                    service.accent
                      ? "bg-(--color-bg-base) border-[color-mix(in_oklab,var(--color-accent)_70%,var(--color-border))] shadow-[0_0_36px_var(--color-accent-glow),0_16px_40px_rgba(0,0,0,0.35)]"
                      : "bg-(--color-bg-base) border-(--color-border) hover:border-(--color-border-bright) hover:shadow-[0_18px_44px_rgba(0,0,0,0.38),0_0_32px_var(--color-accent-glow)]"
                  }`}
                  onClick={() => analytics.serviceClick(service.title)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <ServiceGlyph id={service.id} />
                      <span
                        className={`text-xs font-bold tracking-widest uppercase truncate ${
                          service.accent ? "text-(--color-accent)" : "text-(--color-text-muted)"
                        }`}
                      >
                        {service.category}
                      </span>
                    </div>
                    <span
                      className="text-(--color-accent) text-lg opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-250 shrink-0"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg md:text-[1.15rem] font-bold text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors duration-250 tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-(--color-accent) leading-snug">{service.outcome}</p>
                  </div>

                  <p className="text-sm text-(--color-text-secondary) leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <ul
                    className="flex flex-col gap-1.5 pt-3 border-t border-(--color-border) border-dashed"
                    aria-label={`${service.title} includes`}
                  >
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[11px] md:text-xs text-(--color-text-muted) leading-snug">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-[2px] bg-(--color-accent) shrink-0 opacity-80 shadow-[0_0_8px_var(--color-accent-glow)]"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
