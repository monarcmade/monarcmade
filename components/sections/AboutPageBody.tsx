"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/sections/CTABlock";
import { practiceCredibility } from "@/data/trust";
import { siteConfig } from "@/data/site";
import { portfolioDeliveryNote } from "@/data/samplePortfolio";
import {
  aboutPageIntro,
  aboutBioParagraphs,
  aboutValueContexts,
  aboutApproach,
  aboutSkills,
} from "@/data/aboutPage";
import { engagementFormats } from "@/data/homepage";
import { engagementFormatIcons } from "@/components/engagement/EngagementFormatIcons";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import { brandLogoPath } from "@/components/brand/SiteLogo";

export function AboutPageBody() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
            <motion.div
              variants={staggerSection}
              initial={false}
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeUpSection}>
                <SectionHeader
                  eyebrow={aboutPageIntro.eyebrow}
                  title={aboutPageIntro.title}
                  description={aboutPageIntro.description}
                />
              </motion.div>
              <motion.p
                variants={fadeUpSection}
                className="text-xs text-(--color-text-muted) border-l-2 border-(--color-accent) pl-4 leading-relaxed max-w-xl"
              >
                {portfolioDeliveryNote}
              </motion.p>
              <motion.div variants={fadeUpSection} className="flex flex-col gap-3.5 text-(--color-text-secondary) leading-relaxed text-pretty">
                <p>
                  <strong className="text-(--color-text-primary)">{siteConfig.name}</strong> is a focused practice for full-stack and AI delivery—the work where the wrong abstraction costs six months and the right observability saves a weekend.
                </p>
                {aboutBioParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </motion.div>
              <motion.div variants={fadeUpSection} className="flex flex-wrap gap-3 pt-1">
                <Button label="View projects" href="/projects" variant="primary" trackingLabel="about_work_cta" />
                <Button label="Contact" href="/contact" variant="secondary" trackingLabel="about_contact_cta" />
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerSection}
              initial={false}
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-5"
            >
              <motion.div
                variants={fadeUpSection}
                className="relative w-full aspect-square max-w-md mx-auto md:mx-0 md:ml-auto rounded-2xl bg-(--color-bg-surface)/90 overflow-hidden flex flex-col items-center justify-center"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,200,255,0.12)_0%,transparent_55%)]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 opacity-[0.2] bg-[linear-gradient(var(--color-border-bright)_1px,transparent_1px),linear-gradient(90deg,var(--color-border-bright)_1px,transparent_1px)] bg-size-[20px_20px]"
                />
                <div className="relative z-[1] flex flex-col items-center justify-center gap-2 px-8 py-10 md:py-12">
                  <img
                    src={brandLogoPath}
                    alt={`${siteConfig.name} logo`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="block w-[min(72%,13rem)] h-auto max-w-full border-0 object-contain outline-none select-none drop-shadow-[0_12px_40px_rgba(0,200,255,0.14)]"
                  />
                  <p className="text-center text-xs font-medium text-(--color-text-secondary) uppercase tracking-[0.2em]">
                    {siteConfig.name}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={staggerSection} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
                {practiceCredibility.map((item) => (
                  <motion.div
                    key={item.headline}
                    variants={fadeUpSection}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="flex flex-col gap-2 p-3.5 md:p-4 rounded-xl bg-(--color-bg-surface) border border-(--color-border) hover:border-(--color-border-bright) transition-colors duration-300"
                  >
                    <span className="text-xs md:text-sm font-semibold text-(--color-accent) leading-tight">{item.headline}</span>
                    <span className="text-[11px] md:text-xs text-(--color-text-secondary) leading-snug">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="bg-(--color-bg-surface) border-y border-(--color-border)">
        <Container>
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-7 md:gap-8"
          >
            <motion.div variants={fadeUpSection}>
              <SectionHeader
                eyebrow="Where work lands"
                title="Contexts with the highest leverage."
                description="Representative verticals—high traffic, regulated data, modernization pressure, or AI under audit—not every industry Monarc Made touches."
              />
            </motion.div>
            <motion.div variants={fadeUpSection} className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {aboutValueContexts.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-2 p-5 rounded-xl bg-(--color-bg-base) border border-(--color-border) hover:border-(--color-border-bright) transition-colors duration-300"
                >
                  <h3 className="text-base font-bold text-(--color-text-primary)">{item.title}</h3>
                  <p className="text-sm text-(--color-text-secondary) leading-snug">{item.detail}</p>
                </div>
              ))}
            </motion.div>

            <motion.ul
              variants={fadeUpSection}
              className="m-0 grid list-none grid-cols-1 gap-3 p-0 pt-2 sm:grid-cols-2 xl:grid-cols-4 md:gap-3.5 border-t border-(--color-border) border-dashed"
              aria-label="Engagement formats"
            >
              {engagementFormats.map((f, i) => (
                <li
                  key={f.label}
                  className="flex gap-3 rounded-2xl border border-(--color-border) bg-(--color-bg-base) p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-(--color-border-bright)/60 bg-(--color-bg-surface)/90 text-(--color-accent)">
                    {engagementFormatIcons[i]}
                  </span>
                  <div className="min-w-0 flex flex-col gap-1">
                    <p className="text-sm font-bold tracking-tight text-(--color-text-primary)">{f.label}</p>
                    <p className="text-xs leading-relaxed text-(--color-text-secondary) text-pretty">{f.detail}</p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </Container>
      </Section>

      <Section className="border-t border-(--color-border) bg-[linear-gradient(180deg,var(--color-bg-base)_0%,var(--section-band-mid-soft)_50%,var(--color-bg-base)_100%)]">
        <Container>
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-7 md:gap-9"
          >
            <motion.div variants={fadeUpSection}>
              <SectionHeader
                eyebrow="Practice"
                title="Process you can plan against."
                description="Constraint → system design → incremental proof → handoff. That shape is how Monarc Made keeps delivery predictable."
              />
            </motion.div>
            <motion.div variants={staggerSection} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {aboutApproach.map((item, i) => (
                <motion.article
                  key={item.step}
                  variants={fadeUpSection}
                  custom={i}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex flex-col gap-3 p-5 md:p-6 rounded-xl bg-(--color-bg-surface) border border-(--color-border) hover:border-(--color-border-bright) transition-colors duration-300"
                >
                  <span className="text-xs font-mono text-(--color-accent) font-semibold">{item.step}</span>
                  <h3 className="text-lg font-bold text-(--color-text-primary)">{item.title}</h3>
                  <p className="text-sm text-(--color-text-secondary) leading-relaxed">{item.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6 md:gap-8"
          >
            <motion.div variants={fadeUpSection}>
              <SectionHeader
                eyebrow="Tech & tools"
                title="Depth without buzzword soup."
                description="Representative stack—every engagement picks tools to match constraint, not trend."
              />
            </motion.div>
            <motion.div variants={fadeUpSection} className="flex flex-wrap gap-2" role="list" aria-label="Technical skills">
              {aboutSkills.map((skill) => (
                <div key={skill} role="listitem">
                  <Badge label={skill} variant="default" />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <CTABlock
        eyebrow="Work with Monarc Made"
        title="Scope the constraint. Get a straight answer."
        description="Limited concurrent engagements, written SOWs, async-first collaboration across U.S. time zones—direct attention on production outcomes."
        primaryLabel="Contact"
        primaryHref="/contact"
        secondaryLabel="Case studies"
        secondaryHref="/projects"
        trackingPrefix="about_page_cta"
      />
    </>
  );
}
