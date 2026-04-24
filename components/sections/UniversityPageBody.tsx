"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import {
  universityHero,
  universityWhy,
  universityModules,
  universityWhoFor,
  universityFeatures,
  universityFAQ,
} from "@/data/university";

export function UniversityPageBody() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container size="lg">
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
          >
            <motion.p variants={fadeUpSection} className="text-xs font-semibold uppercase tracking-widest text-(--color-accent)">
              {universityHero.eyebrow}
            </motion.p>
            <motion.h1
              variants={fadeUpSection}
              className="text-4xl md:text-5xl font-bold text-(--color-text-primary) leading-tight text-balance"
            >
              {universityHero.title}
            </motion.h1>
            <motion.p variants={fadeUpSection} className="text-lg text-(--color-text-secondary) leading-relaxed text-pretty max-w-2xl">
              {universityHero.description}
            </motion.p>
            <motion.div variants={fadeUpSection} className="flex flex-wrap justify-center gap-3 pt-2">
              <Button label="Join the waitlist" href="#waitlist" variant="primary" size="lg" trackingLabel="university_hero_waitlist" />
              <Button label="See the curriculum" href="#curriculum" variant="secondary" size="lg" trackingLabel="university_hero_curriculum" />
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Why */}
      <Section className="bg-(--color-bg-surface) border-y border-(--color-border)">
        <Container size="lg">
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-10 md:gap-14"
          >
            <motion.div variants={fadeUpSection} className="flex justify-center">
              <SectionHeader
                eyebrow={universityWhy.eyebrow}
                title={universityWhy.title}
                description={universityWhy.description}
                align="center"
              />
            </motion.div>

            <motion.div variants={fadeUpSection} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {universityFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex gap-4 items-start p-5 rounded-xl bg-(--color-bg-base) border border-(--color-border) hover:border-(--color-border-bright) transition-colors duration-300"
                >
                  <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">{f.icon}</span>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold text-(--color-text-primary)">{f.label}</p>
                    <p className="text-sm text-(--color-text-secondary) leading-snug">{f.detail}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Curriculum */}
      <Section id="curriculum" className="bg-[linear-gradient(180deg,var(--color-bg-base)_0%,var(--section-band-mid-soft)_50%,var(--color-bg-base)_100%)]">
        <Container size="lg">
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-8 md:gap-10"
          >
            <motion.div variants={fadeUpSection} className="flex justify-center">
              <SectionHeader
                eyebrow="Full curriculum"
                title="Six modules. Cover to cover."
                description="A sequenced path from fundamentals to production — each module builds on the last and ends with something real you shipped."
                align="center"
              />
            </motion.div>

            <motion.div variants={staggerSection} className="flex flex-col gap-4">
              {universityModules.map((mod, i) => (
                <motion.article
                  key={mod.number}
                  variants={fadeUpSection}
                  custom={i}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="flex flex-col md:flex-row gap-5 md:gap-8 p-6 rounded-2xl bg-(--color-bg-surface) border border-(--color-border) hover:border-(--color-border-bright) transition-colors duration-300"
                >
                  <div className="flex-shrink-0 flex items-start gap-4 md:block md:w-24">
                    <span className="text-3xl font-mono font-bold text-(--color-accent) opacity-60">{mod.number}</span>
                    <span className="md:hidden text-xs text-(--color-text-muted) font-medium mt-2">{mod.duration}</span>
                  </div>
                  <div className="flex flex-col gap-3 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <h3 className="text-lg font-bold text-(--color-text-primary)">{mod.title}</h3>
                      <span className="hidden md:inline text-xs text-(--color-text-muted) font-medium whitespace-nowrap">
                        {mod.duration}
                      </span>
                    </div>
                    <p className="text-sm text-(--color-text-secondary) leading-relaxed">{mod.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {mod.topics.map((topic) => (
                        <Badge key={topic} label={topic} variant="default" />
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Who it's for */}
      <Section className="bg-(--color-bg-surface) border-y border-(--color-border)">
        <Container size="lg">
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUpSection} className="flex justify-center">
              <SectionHeader
                eyebrow="Who this is for"
                title="Built for people who build."
                description="You don't need a CS degree. You need to write code, care about quality, and want to understand AI at the level that actually helps you ship."
                align="center"
              />
            </motion.div>
            <motion.div variants={fadeUpSection} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {universityWhoFor.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-2 p-5 rounded-xl bg-(--color-bg-base) border border-(--color-border) hover:border-(--color-border-bright) transition-colors duration-300"
                >
                  <h3 className="text-base font-bold text-(--color-text-primary)">{item.title}</h3>
                  <p className="text-sm text-(--color-text-secondary) leading-snug">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container size="md">
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUpSection} className="flex justify-center">
              <SectionHeader
                eyebrow="Questions"
                title="Straight answers."
                align="center"
              />
            </motion.div>
            <motion.div variants={fadeUpSection} className="flex flex-col divide-y divide-(--color-border)">
              {universityFAQ.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Waitlist */}
      <Section id="waitlist" className="bg-(--color-bg-surface) border-t border-(--color-border)">
        <Container size="md">
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6 items-center text-center"
          >
            <motion.p variants={fadeUpSection} className="text-xs font-semibold uppercase tracking-widest text-(--color-accent)">
              Waitlist
            </motion.p>
            <motion.h2
              variants={fadeUpSection}
              className="text-3xl md:text-4xl font-bold text-(--color-text-primary) text-pretty max-w-xl"
            >
              Be first in when the doors open.
            </motion.h2>
            <motion.p variants={fadeUpSection} className="text-base text-(--color-text-secondary) leading-relaxed max-w-lg text-pretty">
              The first cohort will be small. Join the waitlist and get early access, the full syllabus, and a straight answer on pricing before anything goes public.
            </motion.p>
            <motion.div variants={fadeUpSection} className="w-full max-w-md">
              <WaitlistForm />
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* More from Monarc Made */}
      <Section className="bg-(--color-bg-surface)">
        <Container size="lg">
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col items-center text-center gap-6 md:gap-8"
          >
            <motion.div variants={fadeUpSection} className="flex flex-col items-center gap-4 md:gap-5 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="accent-line w-10 md:w-12" aria-hidden="true" />
                <span className="text-(--color-accent) text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase">
                  More from Monarc Made
                </span>
                <span className="accent-line w-10 md:w-12" aria-hidden="true" />
              </div>
              <h2 className="text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.02em] text-(--color-text-primary) leading-[1.08] text-balance">
                See the work behind the curriculum.
              </h2>
              <p className="text-(--color-text-secondary) text-sm md:text-lg leading-relaxed text-pretty max-w-xl">
                The curriculum is built on real production AI experience. Browse the case studies to see the kind of problems the practice actually solves.
              </p>
            </motion.div>
            <motion.div variants={fadeUpSection} className="flex flex-wrap justify-center gap-3 md:gap-4 pt-1">
              <Button label="View case studies" href="/projects" variant="primary" size="lg" trackingLabel="university_page_cta_primary" />
              <Button label="Contact" href="/contact" variant="secondary" size="lg" trackingLabel="university_page_cta_secondary" />
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors duration-200">
          {question}
        </span>
        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-(--color-border) text-(--color-text-muted) transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm text-(--color-text-secondary) leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-(--color-bg-base) border border-(--color-border)">
        <span className="text-2xl" aria-hidden="true">✓</span>
        <p className="text-sm font-semibold text-(--color-text-primary)">You're on the list.</p>
        <p className="text-xs text-(--color-text-secondary)">We'll reach out before the cohort opens with everything you need to know.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <label htmlFor="university-email" className="sr-only">Email address</label>
      <input
        id="university-email"
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-2.5 rounded-xl bg-(--color-bg-base) border border-(--color-border) text-(--color-text-primary) placeholder:text-(--color-text-muted) text-sm outline-none focus:border-(--color-accent) transition-colors duration-200"
      />
      <button
        type="submit"
        className="px-5 py-2.5 rounded-xl bg-(--color-accent) text-(--color-text-inverse) text-sm font-semibold hover:bg-(--color-accent-dim) transition-colors duration-200 whitespace-nowrap"
      >
        Join waitlist
      </button>
    </form>
  );
}
