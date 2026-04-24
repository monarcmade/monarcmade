"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/data/site";
import { portfolioDeliveryNote } from "@/data/samplePortfolio";
import {
  contactPageIntro,
  contactExpectations,
  contactResponsePlaybook,
  contactSampleBrief,
  contactFitSignals,
  contactFaq,
} from "@/data/contactPage";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import { analytics } from "@/lib/analytics";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Best for scoped inquiries with context",
  },
  {
    label: "GitHub",
    value: "github.com/lcantu",
    href: siteConfig.social.github ?? "#",
    description: "Open source and experiments",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lcantu",
    href: siteConfig.social.linkedin ?? "#",
    description: "Background and recommendations",
  },
] as const;

export function ContactPageBody() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,26rem)] gap-10 lg:gap-14 items-start">
            <motion.div
              variants={staggerSection}
              initial={false}
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-7"
            >
              <motion.div variants={fadeUpSection}>
                <SectionHeader
                  eyebrow={contactPageIntro.eyebrow}
                  title={contactPageIntro.title}
                  description={contactPageIntro.description}
                />
              </motion.div>

              <motion.p
                variants={fadeUpSection}
                className="text-xs text-(--color-text-muted) leading-relaxed border-l-2 border-(--color-accent) pl-4 max-w-xl"
              >
                {portfolioDeliveryNote}
              </motion.p>

              <motion.div variants={fadeUpSection} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {contactResponsePlaybook.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-(--color-border) bg-(--color-bg-surface) px-4 py-3.5 flex flex-col gap-1"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-(--color-accent)">{item.title}</p>
                    <p className="text-xs text-(--color-text-secondary) leading-snug">{item.detail}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUpSection} className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-(--color-text-muted) uppercase tracking-widest">
                  What to expect
                </p>
                <ul className="flex flex-col gap-2.5" role="list">
                  {contactExpectations.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-(--color-text-secondary) leading-snug">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-(--color-accent) shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUpSection} className="rounded-xl border border-(--color-border) bg-(--color-bg-surface) p-5 flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-(--color-text-muted)">
                  Strong briefs include
                </p>
                <ul className="flex flex-col gap-2" role="list">
                  {contactSampleBrief.map((line) => (
                    <li key={line} className="flex items-start gap-2.5 text-sm text-(--color-text-secondary) leading-snug">
                      <span className="text-(--color-accent) font-mono text-xs shrink-0 pt-0.5" aria-hidden="true">
                        +
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUpSection} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="rounded-xl border border-(--color-border) bg-(--color-bg-base) p-4 flex flex-col gap-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-(--color-accent)">Strong fit</p>
                  <ul className="flex flex-col gap-1.5" role="list">
                    {contactFitSignals.strong.map((line) => (
                      <li key={line} className="text-xs text-(--color-text-secondary) leading-snug flex gap-2">
                        <span className="text-(--color-accent)" aria-hidden="true">
                          ·
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-(--color-border) bg-(--color-bg-base) p-4 flex flex-col gap-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-(--color-text-muted)">Weaker fit</p>
                  <ul className="flex flex-col gap-1.5" role="list">
                    {contactFitSignals.weak.map((line) => (
                      <li key={line} className="text-xs text-(--color-text-secondary) leading-snug flex gap-2">
                        <span className="text-(--color-text-muted)" aria-hidden="true">
                          ·
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={fadeUpSection} className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-(--color-text-muted) uppercase tracking-widest">
                  Direct channels
                </p>
                <div className="flex flex-col gap-2.5">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      onClick={() => analytics.externalLink(link.label, link.href)}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 rounded-xl bg-(--color-bg-surface) border border-(--color-border) hover:border-(--color-border-bright) hover:shadow-[0_0_16px_var(--color-accent-glow)] transition-all duration-300 group focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3"
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs text-(--color-text-muted) uppercase tracking-wide">{link.label}</span>
                        <span className="text-sm font-medium text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors duration-300">
                          {link.value}
                        </span>
                      </div>
                      <span className="text-xs text-(--color-text-muted) sm:text-right max-w-xs">{link.description}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <div className="w-full lg:sticky lg:top-28">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-(--color-bg-surface) border-y border-(--color-border) !pt-0">
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
                eyebrow="FAQ"
                title="Questions inbound usually hits."
                description="Short, candid answers—same tone you would use on a real site before legal tightens phrasing."
              />
            </motion.div>
            <motion.div variants={fadeUpSection} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {contactFaq.map((item) => (
                <div
                  key={item.q}
                  className="flex flex-col gap-2 p-5 rounded-xl border border-(--color-border) bg-(--color-bg-base) hover:border-(--color-border-bright) transition-colors duration-300"
                >
                  <p className="text-sm font-semibold text-(--color-text-primary) leading-snug">{item.q}</p>
                  <p className="text-xs text-(--color-text-secondary) leading-relaxed">{item.a}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
