"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { CTABlock } from "@/components/sections/CTABlock";
import { WaysToEngage } from "@/components/sections/WaysToEngage";
import { servicesByCategory, serviceCategoryOrder, serviceCategoryPresentation } from "@/data/services";
import { servicesEngagementFormatsIntro, servicesPageIntro, servicesFaq } from "@/data/servicesPageExtras";
import { engagementFormats } from "@/data/homepage";
import { engagementFormatIcons } from "@/components/engagement/EngagementFormatIcons";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import { portfolioDeliveryNote } from "@/data/samplePortfolio";
import { siteImages } from "@/data/siteImages";

export function ServicesPageBody() {
  return (
    <>
      <Section>
        <Container>
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 items-center gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.55fr)] lg:gap-10"
          >
            <div className="flex max-w-3xl flex-col gap-5 md:gap-6">
              <motion.div variants={fadeUpSection}>
                <SectionHeader
                  eyebrow={servicesPageIntro.eyebrow}
                  title={servicesPageIntro.title}
                  description={servicesPageIntro.description}
                />
              </motion.div>
              <motion.p
                variants={fadeUpSection}
                className="text-xs text-(--color-text-muted) leading-relaxed border-l-2 border-(--color-accent) pl-4 max-w-2xl"
              >
                {portfolioDeliveryNote}
              </motion.p>
            </div>
            <motion.figure
              variants={fadeUpSection}
              className="relative min-h-[18rem] overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-bg-surface) shadow-[0_18px_48px_rgba(0,0,0,0.32)]"
            >
              <Image
                src={siteImages.productionSystems.src}
                alt={siteImages.productionSystems.alt}
                fill
                priority
                sizes="(min-width: 1024px) 34vw, 92vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.74))] px-5 pb-4 pt-16 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Production-ready systems
              </figcaption>
            </motion.figure>
          </motion.div>
        </Container>
      </Section>

      <WaysToEngage />

      <Section className="pt-0! bg-[linear-gradient(180deg,var(--color-bg-base)_0%,var(--section-band-mid)_50%,var(--color-bg-base)_100%)] border-y border-(--color-border)">
        <Container>
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-x-3.5 gap-y-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8 xl:grid-cols-4"
            role="list"
            aria-label="Engagement formats"
          >
            <motion.div variants={fadeUpSection} className="max-w-3xl sm:col-span-2 xl:col-span-4">
              <SectionHeader
                eyebrow={servicesEngagementFormatsIntro.eyebrow}
                title={servicesEngagementFormatsIntro.title}
                description={servicesEngagementFormatsIntro.description}
              />
            </motion.div>
            {engagementFormats.map((f, i) => (
              <motion.article
                key={f.label}
                variants={fadeUpSection}
                custom={i}
                role="listitem"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group flex min-h-full flex-col gap-4 rounded-2xl border border-(--color-border) bg-(--color-bg-base) p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-(--color-border-bright) hover:shadow-[0_12px_40px_rgba(0,0,0,0.28)] md:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-(--color-border-bright)/60 bg-(--color-bg-surface)/90 text-(--color-accent) shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    {engagementFormatIcons[i]}
                  </span>
                  <span className="font-mono text-[11px] font-bold tabular-nums text-(--color-text-muted)">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex min-w-0 flex-col gap-2">
                  <h3 className="m-0 text-base font-bold tracking-tight text-(--color-text-primary)">{f.label}</h3>
                  <p className="m-0 text-sm leading-relaxed text-(--color-text-secondary) text-pretty">{f.detail}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </Section>

      {serviceCategoryOrder.map((category, idx) => {
        const meta = serviceCategoryPresentation[category];
        const items = servicesByCategory[category];
        const isEven = idx % 2 === 0;

        return (
          <Section
            key={category}
            className={`pt-0! border-t border-(--color-border) ${isEven ? "bg-(--color-bg-surface)" : "bg-(--color-bg-base)"}`}
          >
            <Container>
              <motion.div
                variants={staggerSection}
                initial={false}
                whileInView="visible"
                viewport={viewportOnce}
                className="flex flex-col gap-7 md:gap-8"
              >
                <motion.div
                  variants={fadeUpSection}
                  className="mb-2 pb-6 border-b border-(--color-border)"
                >
                  <SectionHeader
                    title={meta.label}
                    description={meta.description}
                  />
                </motion.div>

                <motion.div variants={staggerSection} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {items.map((service, i) => (
                    <motion.article
                      key={service.id}
                      id={service.id}
                      variants={fadeUpSection}
                      custom={i}
                      whileHover={{ y: -4, transition: { duration: 0.22 } }}
                      className={`flex flex-col gap-4 md:gap-5 p-5 md:p-6 rounded-xl border transition-all duration-300 ${
                        service.highlighted
                          ? isEven
                            ? "bg-(--color-bg-elevated) border-(--color-accent) shadow-[0_0_24px_var(--color-accent-glow)]"
                            : "bg-(--color-bg-surface) border-(--color-accent) shadow-[0_0_24px_var(--color-accent-glow)]"
                          : isEven
                          ? "bg-(--color-bg-elevated) border-(--color-border) hover:border-(--color-border-bright)"
                          : "bg-(--color-bg-surface) border-(--color-border) hover:border-(--color-border-bright)"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-xl font-mono text-(--color-accent)" aria-hidden="true">
                          {service.icon}
                        </span>
                        {service.highlighted && <Badge label="High demand" variant="accent" />}
                      </div>

                      <div className="flex flex-col gap-2 flex-1">
                        <h2 className="text-lg font-bold text-(--color-text-primary)">{service.title}</h2>
                        <p className="text-sm text-(--color-text-secondary) leading-relaxed">{service.description}</p>
                      </div>

                      <ul className="flex flex-col gap-2" aria-label={`${service.title} includes`}>
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-(--color-text-secondary)">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-(--color-accent) shrink-0" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  ))}
                </motion.div>
              </motion.div>
            </Container>
          </Section>
        );
      })}

      <Section className="pt-0! border-t border-(--color-border) bg-(--color-bg-surface) pb-0!">
        <Container>
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            <motion.div variants={fadeUpSection}>
              <SectionHeader
                eyebrow="FAQ"
                title="Commercial questions, answered plainly."
                description="Straight answers on procurement, legal, and staffing—adjust specifics to your policies in conversation."
              />
            </motion.div>
            <motion.div variants={fadeUpSection} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {servicesFaq.map((item) => (
                <div
                  key={item.q}
                  className="flex flex-col gap-2 p-5 rounded-xl border border-(--color-border) bg-(--color-bg-base) hover:border-(--color-border-bright) transition-colors duration-300"
                >
                  <p className="text-sm font-semibold text-(--color-text-primary) leading-snug">{item.q}</p>
                  <p className="text-sm text-(--color-text-secondary) leading-relaxed">{item.a}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <CTABlock
        eyebrow="Scope together"
        title={'Define "done" in metrics Monarc Made can ship against.'}
        description="Map services to outcomes—latency, conversion, cost, or time-to-ship—and cut anything that does not move those needles."
        primaryLabel="Contact Monarc Made"
        primaryHref="/contact"
        secondaryLabel="Case studies"
        secondaryHref="/projects"
        trackingPrefix="services_page_cta"
        noBorderTop
      />
    </>
  );
}
