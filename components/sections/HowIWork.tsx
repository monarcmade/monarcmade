"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import { howWeWorkIntro, processPhases } from "@/data/home";

export function HowIWork() {
  return (
    <Section
      id="approach"
      rhythm="wide"
      className="border-t border-(--color-border) bg-(--color-bg-surface)"
    >
      <Container>
        <motion.div
          variants={staggerSection}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-8 md:gap-10"
        >
          <motion.div variants={fadeUpSection}>
            <SectionHeader
              eyebrow={howWeWorkIntro.eyebrow}
              title={howWeWorkIntro.title}
              description={howWeWorkIntro.description}
            />
          </motion.div>

          <motion.div variants={staggerSection} className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-5">
            {processPhases.map((phase, i) => (
              <motion.article
                key={phase.step}
                variants={fadeUpSection}
                custom={i}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                }}
                className="group flex flex-col gap-3.5 md:gap-4 p-5 md:p-6 rounded-2xl bg-(--color-bg-base) border border-(--color-border) hover:border-(--color-border-bright) hover:shadow-[0_16px_40px_rgba(0,0,0,0.32),0_0_28px_var(--color-accent-glow)] transition-[border-color,box-shadow] duration-300"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-[11px] font-semibold text-(--color-accent) tracking-widest">
                    {phase.step}
                  </span>
                  <span
                    className="h-px flex-1 max-w-20 bg-(--color-border) group-hover:bg-(--color-accent) transition-colors duration-250 opacity-60"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-(--color-text-primary) tracking-tight">
                  {phase.title}
                </h3>
                <p className="text-sm text-(--color-text-secondary) leading-snug flex-1">
                  {phase.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
