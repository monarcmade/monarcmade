"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import { deliverySignalsIntro, deliverySignals } from "@/data/homeDeliverySignals";
import { portfolioDeliveryNote } from "@/data/samplePortfolio";

export function DeliverySignalsSection() {
  return (
    <Section
      rhythm="tight"
      className="border-t border-(--color-border) bg-[linear-gradient(180deg,var(--color-bg-base)_0%,var(--section-band-mid)_50%,var(--color-bg-base)_100%)]"
    >
      <Container>
        <motion.div
          variants={staggerSection}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-8 md:gap-10"
        >
          <motion.div variants={fadeUpSection} className="flex flex-col gap-4">
            <SectionHeader
              eyebrow={deliverySignalsIntro.eyebrow}
              title={deliverySignalsIntro.title}
              description={deliverySignalsIntro.description}
            />
            <p className="text-xs text-(--color-text-muted) max-w-3xl leading-relaxed border-l-2 border-(--color-accent) pl-4">
              {portfolioDeliveryNote}
            </p>
          </motion.div>

          <motion.div
            variants={staggerSection}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {deliverySignals.map((item, i) => (
              <motion.article
                key={item.title}
                variants={fadeUpSection}
                custom={i}
                className="flex flex-col gap-3 p-5 md:p-6 rounded-2xl bg-(--color-bg-surface) border border-(--color-border) border-l-[3px] border-l-[var(--color-accent)] shadow-[inset_1px_0_0_rgba(0,200,255,0.06)]"
              >
                <h3 className="text-sm font-bold text-(--color-text-primary) tracking-tight leading-snug">{item.title}</h3>
                <p className="text-xs md:text-sm text-(--color-text-secondary) leading-snug flex-1">{item.detail}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
