"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import { waysToEngageFootnote, waysToEngageIntro, waysToEngageOffers } from "@/data/waysToEngage";

export function WaysToEngage() {
  return (
    <Section
      id="engage"
      rhythm="wide"
      className="relative border-t border-(--color-border) bg-(--color-bg-surface)"
    >
      <Container>
        <motion.div
          variants={staggerSection}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-8 md:gap-10"
        >
          <motion.div variants={fadeUpSection} className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-8">
            <div className="flex flex-col gap-3 md:gap-3.5 min-w-0 flex-1">
              <SectionHeader eyebrow={waysToEngageIntro.eyebrow} title={waysToEngageIntro.title} />
              <div className="flex flex-col gap-3 max-w-xl">
                {waysToEngageIntro.lead.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="m-0 text-(--color-text-secondary) leading-relaxed text-pretty text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <Button
              label="Discuss scope"
              href="/contact"
              variant="secondary"
              size="sm"
              className="self-start md:self-auto shrink-0"
              trackingLabel="ways_to_engage_contact"
            />
          </motion.div>

          <motion.ul
            variants={staggerSection}
            className="list-none m-0 p-0 grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4"
          >
            {waysToEngageOffers.map((offer, i) => {
              const isRetainer = offer.id === "retainer";
              return (
                <motion.li
                  key={offer.id}
                  variants={fadeUpSection}
                  custom={i}
                  className={`rounded-2xl border border-(--color-border) bg-(--color-bg-base) p-5 md:p-6 flex flex-col gap-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${
                    isRetainer ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <h3 className="m-0 text-base md:text-lg font-bold text-(--color-text-primary) tracking-tight leading-snug">
                        {offer.title}
                      </h3>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-(--color-text-muted)">
                        {offer.subtitle}
                      </span>
                    </div>
                    <p className="m-0 text-sm font-semibold text-(--color-accent) leading-snug tabular-nums">{offer.price}</p>
                  </div>
                  <div
                    className={
                      isRetainer
                        ? "flex flex-col gap-3.5 md:grid md:grid-cols-[1fr_minmax(0,20rem)] md:gap-x-8 md:gap-y-0 md:items-start flex-1 min-w-0"
                        : "flex flex-col gap-3.5 flex-1 min-w-0"
                    }
                  >
                    <ul className="list-none m-0 p-0 flex flex-col gap-1.5 flex-1" aria-label={`${offer.title} includes`}>
                      {offer.includes.map((line) => (
                        <li
                          key={line}
                          className="text-[11px] md:text-xs text-(--color-text-secondary) leading-snug pl-3 border-l border-(--color-border-bright)"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={
                        isRetainer
                          ? "pt-1 md:pt-0 md:border-t-0 border-t border-(--color-border) border-dashed md:border-l md:border-l-(--color-border) md:border-dashed md:pl-6 flex flex-col gap-3"
                          : "pt-1 border-t border-(--color-border) border-dashed flex flex-col gap-3"
                      }
                    >
                      <div>
                        <p className="m-0 text-[10px] font-bold uppercase tracking-[0.14em] text-(--color-text-muted) mb-1">Best for</p>
                        <p className="m-0 text-xs text-(--color-text-secondary) leading-relaxed text-pretty">{offer.bestFor}</p>
                      </div>
                      {"cta" in offer && offer.cta && (
                        <Link
                          href="/contact"
                          className="self-start text-xs font-semibold text-(--color-accent) hover:text-(--color-text-primary) transition-colors duration-200"
                        >
                          {offer.cta} →
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.p
            variants={fadeUpSection}
            className="m-0 text-[11px] text-(--color-text-muted) leading-relaxed max-w-3xl text-pretty"
          >
            {waysToEngageFootnote}
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}
