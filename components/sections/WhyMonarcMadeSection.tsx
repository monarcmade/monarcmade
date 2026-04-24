"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import { whyMonarcMadeIntro, whyMonarcMadeScenarios } from "@/data/homeWhyMe";

export function WhyMonarcMadeSection() {
  return (
    <Section
      id="why-monarc-made"
      rhythm="airy"
      className="relative overflow-hidden border-t border-(--color-border) bg-[linear-gradient(180deg,var(--color-bg-base)_0%,var(--section-band-mid)_50%,var(--color-bg-base)_100%)]"
    >
      <Container className="relative z-[1]">
        <motion.div
          variants={staggerSection}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-10 md:gap-12"
        >
          <motion.div variants={fadeUpSection} className="max-w-3xl flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="accent-line w-10 md:w-12" aria-hidden="true" />
              <span className="text-(--color-accent) text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase">
                {whyMonarcMadeIntro.eyebrow}
              </span>
            </div>
            <h2 className="text-[1.55rem] sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-(--color-text-primary) leading-[1.12] text-balance">
              {whyMonarcMadeIntro.title}
            </h2>
            <p className="text-(--color-text-secondary) text-sm md:text-base leading-relaxed text-pretty">
              {whyMonarcMadeIntro.lead}
            </p>
          </motion.div>

          <motion.ul
            variants={staggerSection}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 list-none m-0 p-0"
          >
            {whyMonarcMadeScenarios.map((s, i) => {
              const isLast = i === whyMonarcMadeScenarios.length - 1;
              return (
                <motion.li
                  key={s.title}
                  variants={fadeUpSection}
                  custom={i}
                  className={`flex flex-col gap-2.5 p-5 md:p-6 rounded-2xl border border-(--color-border) bg-(--color-bg-surface) hover:border-(--color-border-bright) transition-colors duration-300 ${isLast ? "md:col-span-2" : ""}`}
                >
                  <span className="font-mono text-[10px] font-semibold text-(--color-accent) tracking-[0.14em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-(--color-text-primary) tracking-tight leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-(--color-text-secondary) leading-snug flex-1">{s.detail}</p>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </Container>
    </Section>
  );
}
