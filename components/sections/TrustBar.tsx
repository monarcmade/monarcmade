"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import { recentWorkIncludes, stackToolsSection } from "@/data/home";
import { selectedClientEntries } from "@/data/selectedClients";

function ClientLogoChip({
  alt,
  logoSrc,
  logoPad = "light",
  imgClassName,
}: {
  alt: string;
  logoSrc: string;
  logoPad?: "light" | "dark";
  imgClassName?: string;
}) {
  const isDark = logoPad === "dark";
  return (
    <div
      className={`mb-2 w-full min-h-[3rem] flex items-center justify-center rounded-md border px-2.5 py-2 ${
        isDark ? "border-zinc-700/90 bg-zinc-950" : "border-(--color-border) bg-white"
      }`}
    >
      <img
        src={logoSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={
          imgClassName ??
          "h-auto w-auto max-w-full max-h-8 sm:max-h-9 object-contain object-center"
        }
      />
    </div>
  );
}

export function TrustBar() {
  return (
    <div className="border-y border-(--color-border) bg-[linear-gradient(180deg,var(--color-bg-base)_0%,var(--section-band-mid)_50%,var(--color-bg-base)_100%)]">
      <div className="border-b border-[color-mix(in_oklab,var(--color-accent)_28%,var(--color-border))] bg-[linear-gradient(165deg,color-mix(in_oklab,var(--color-bg-surface)_68%,var(--color-accent)_32%)_0%,color-mix(in_oklab,var(--color-bg-surface)_58%,var(--color-accent)_42%)_52%,color-mix(in_oklab,var(--color-bg-surface)_72%,var(--color-accent)_28%)_100%)]">
        <Container>
          <motion.div
            variants={staggerSection}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="py-5 md:py-6 flex flex-col gap-3"
          >
            <motion.div variants={fadeUpSection} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-6">
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-(--color-accent-dim) m-0 shrink-0">
                Recent work includes
              </p>
              <p className="text-[11px] text-(--color-text-secondary) leading-snug m-0 sm:text-right max-w-xl">
                All delivered in production environments.
              </p>
            </motion.div>
            <motion.ul
              variants={fadeUpSection}
              className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-2.5"
            >
              {recentWorkIncludes.map((line) => (
                <li
                  key={line}
                  className="text-xs md:text-[0.8125rem] text-(--color-text-secondary) leading-snug rounded-lg border border-[color-mix(in_oklab,var(--color-accent)_22%,var(--color-border))] bg-(--color-bg-surface) px-3 py-2.5 md:px-3.5 md:py-2.5 shadow-sm"
                >
                  {line}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </Container>
      </div>

      <div className="border-t border-b border-(--color-border) bg-(--color-bg-surface)">
        <div id="recent-clients" className="scroll-mt-24">
          <Container className="py-4 md:py-6">
            <motion.div
              variants={staggerSection}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-3 md:gap-4"
            >
              <motion.p variants={fadeUpSection} className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--color-text-muted)">
                Recent clients
              </motion.p>
              <motion.ul
                variants={fadeUpSection}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5 md:gap-3 list-none m-0 p-0"
                aria-label="Named clients and contribution scope"
              >
                {selectedClientEntries.map((c) => (
                  <li
                    key={c.id}
                    className="rounded-lg border border-(--color-border) bg-(--color-bg-base) px-3 py-2.5 md:px-3.5 md:py-3"
                  >
                    {c.logoSrc ? (
                      <ClientLogoChip
                        alt={c.name}
                        logoSrc={c.logoSrc}
                        logoPad={c.logoPad ?? "light"}
                        imgClassName={c.logoImgClass}
                      />
                    ) : (
                      <p className="text-xs font-semibold text-(--color-text-primary) tracking-tight leading-snug">{c.name}</p>
                    )}
                    <p className="text-[11px] text-(--color-text-muted) leading-snug mt-1.5">{c.system}</p>
                    <p className="text-[11px] text-(--color-text-secondary) leading-snug mt-1">{c.work}</p>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </Container>
        </div>

        <Container>
          <motion.div
            variants={staggerSection}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="py-6 md:py-8 border-t border-(--color-border)"
          >
            <motion.div variants={fadeUpSection} className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8">
              <span className="text-xs font-semibold text-(--color-text-muted) uppercase tracking-widest whitespace-nowrap shrink-0 pt-0.5">
                Representative systems
              </span>
              <p className="text-sm text-(--color-text-secondary) max-w-3xl leading-snug">
                NDA-heavy work still means architecture, observability, and cutover discipline are part of the deliverable. These summaries name real engagements and stay qualitative—no invented benchmarks.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      <Container>
        <motion.div
          variants={staggerSection}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="py-7 md:py-10 border-b border-(--color-border)"
        >
          <motion.div
            variants={fadeUpSection}
            className="rounded-2xl border border-(--color-border) bg-(--color-bg-base) p-5 sm:p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            <header className="mb-6 md:mb-8 pb-6 border-b border-(--color-border)">
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className="h-8 w-1 shrink-0 rounded-full bg-linear-to-b from-(--color-accent) to-(--color-accent-dim) opacity-90 shadow-[0_0_12px_color-mix(in_oklab,var(--color-accent)_40%,transparent)]"
                  aria-hidden="true"
                />
                <p className="m-0 text-[10px] font-bold tracking-[0.2em] uppercase text-(--color-accent)">
                  Stack & tools
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
              {stackToolsSection.pillars.map((pillar) => (
                <article
                  key={pillar.label}
                  className="flex flex-col rounded-xl border border-(--color-border) bg-(--color-bg-surface) p-4 md:p-5 transition-[border-color,background-color] duration-300 hover:border-(--color-border-bright) hover:bg-[color-mix(in_oklab,var(--color-bg-elevated)_50%,var(--color-bg-surface))]"
                >
                  <div className="pl-3.5 border-l-2 border-l-[color-mix(in_oklab,var(--color-accent)_48%,transparent)] min-h-0 flex flex-col gap-2.5">
                    <h3 className="m-0 text-[11px] font-bold tracking-[0.12em] uppercase text-(--color-text-primary)">
                      {pillar.label}
                    </h3>
                    <p className="m-0 text-[0.8125rem] md:text-sm text-(--color-text-secondary) leading-relaxed text-pretty">
                      {pillar.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 md:mt-8 pt-6 md:pt-7 border-t border-(--color-border)">
              <p className="m-0 mb-3 text-[10px] font-bold tracking-[0.16em] uppercase text-(--color-text-muted)">
                Capability tags
              </p>
              <ul className="flex flex-wrap gap-2 md:gap-2.5 list-none m-0 p-0" aria-label="Stack and tooling keywords">
                {stackToolsSection.chips.map((tool) => (
                  <li key={tool}>
                    <span className="inline-flex items-center text-[11px] sm:text-xs font-medium text-(--color-text-secondary) px-3 py-1.5 md:px-3.5 md:py-2 rounded-lg border border-[color-mix(in_oklab,var(--color-accent)_22%,var(--color-border-bright))] bg-[color-mix(in_oklab,var(--color-bg-base)_90%,transparent)] backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-[color,border-color,background-color] duration-250 hover:text-(--color-text-primary) hover:border-(--color-border-bright)">
                      {tool}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
