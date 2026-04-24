"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";

interface CTABlockProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  trackingPrefix?: string;
  /** Stronger accent treatment (e.g. homepage final band). */
  homeAccent?: boolean;
}

export function CTABlock({
  eyebrow = "Ready to scope?",
  title = "Let's solve something hard together.",
  description = "Whether the constraint is a new surface, a failing cutover, cloud cost, or production AI—Monarc Made scopes honest fit and a first slice you can ship.",
  primaryLabel = "Start a Conversation",
  primaryHref = "/contact",
  secondaryLabel = "See My Work",
  secondaryHref = "/projects",
  trackingPrefix = "cta_block",
  homeAccent = false,
  noBorderTop = false,
}: CTABlockProps & { noBorderTop?: boolean }) {
  return (
    <Section
      rhythm={homeAccent ? "wide" : "default"}
      className={`bg-(--color-bg-surface) ${noBorderTop ? "" : "border-t border-(--color-border)"}`}
    >
      <Container size="lg">
        <motion.div
          variants={staggerSection}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center gap-6 md:gap-8"
        >
          <motion.div variants={fadeUpSection} className="flex flex-col items-center gap-4 md:gap-5 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="accent-line w-10 md:w-12" aria-hidden="true" />
              <span className="text-(--color-accent) text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase">
                {eyebrow}
              </span>
              <span className="accent-line w-10 md:w-12" aria-hidden="true" />
            </div>
            <h2 className="text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.02em] text-(--color-text-primary) leading-[1.08] text-balance">
              {title}
            </h2>
            <p className="text-(--color-text-secondary) text-sm md:text-lg leading-relaxed text-pretty max-w-xl">
              {description}
            </p>
          </motion.div>

          <motion.div variants={fadeUpSection} className="flex flex-wrap justify-center gap-3 md:gap-4 pt-1">
            <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex">
              <Button
                label={primaryLabel}
                href={primaryHref}
                variant="primary"
                size="lg"
                trackingLabel={`${trackingPrefix}_primary`}
              />
            </motion.span>
            <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex">
              <Button
                label={secondaryLabel}
                href={secondaryHref}
                variant="secondary"
                size="lg"
                trackingLabel={`${trackingPrefix}_secondary`}
              />
            </motion.span>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
