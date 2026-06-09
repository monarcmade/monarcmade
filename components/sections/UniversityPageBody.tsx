"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { analytics } from "@/lib/analytics";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import {
  universityHero,
  universityWhy,
  universityStats,
  universityTracks,
  universityModules,
  universityWhoFor,
  universityFeatures,
  universityCapstones,
  universityOffer,
  universityFAQ,
} from "@/data/university";
import { siteImages } from "@/data/siteImages";

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
              <Button label="Apply for the cohort" href="#waitlist" variant="primary" size="lg" trackingLabel="university_hero_apply" />
              <Button label="See the curriculum" href="#curriculum" variant="secondary" size="lg" trackingLabel="university_hero_curriculum" />
            </motion.div>
            <motion.div variants={fadeUpSection} className="grid grid-cols-3 gap-3 w-full max-w-2xl pt-6">
              {universityStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-(--color-border) bg-(--color-bg-surface) px-4 py-4">
                  <p className="text-2xl md:text-3xl font-bold text-(--color-text-primary)">{stat.value}</p>
                  <p className="text-[11px] md:text-xs font-medium text-(--color-text-muted) uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </motion.div>
            <motion.figure
              variants={fadeUpSection}
              className="relative mt-3 min-h-[18rem] w-full max-w-4xl overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-bg-surface) shadow-[0_20px_60px_rgba(0,0,0,0.36)]"
            >
              <Image
                src={siteImages.cohortWorkshop.src}
                alt={siteImages.cohortWorkshop.alt}
                fill
                priority
                sizes="(min-width: 1024px) 72vw, 92vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.74))] px-5 pb-4 pt-16 text-left text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Guided cohorts for real-world AI projects
              </figcaption>
            </motion.figure>
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
                  <span className="shrink-0 mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-(--color-accent-subtle) text-xs font-bold text-(--color-accent)" aria-hidden="true">{f.icon}</span>
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

      {/* Tracks */}
      <Section>
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
                eyebrow="Cohort paths"
                title="Choose the pace. Keep the outcome."
                description="Both tracks teach the same roadmap and push toward the same capstone. The difference is how much time you want between concepts, labs, and review."
                align="center"
              />
            </motion.div>
            <motion.div variants={fadeUpSection} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {universityTracks.map((track) => (
                <article
                  key={track.title}
                  className="flex flex-col gap-5 rounded-2xl bg-(--color-bg-surface) border border-(--color-border) p-6 hover:border-(--color-border-bright) transition-colors duration-300"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-(--color-accent)">{track.eyebrow}</span>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <h2 className="text-2xl font-bold text-(--color-text-primary)">{track.title}</h2>
                      <span className="text-sm font-semibold text-(--color-text-primary) whitespace-nowrap">{track.price}</span>
                    </div>
                    <p className="text-sm text-(--color-text-secondary) leading-relaxed">{track.description}</p>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {track.details.map((detail) => (
                      <li key={detail} className="rounded-xl bg-(--color-bg-base) border border-(--color-border) px-3 py-2 text-sm text-(--color-text-secondary)">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
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
                title="Six phases. One shipped project."
                description="The fast track moves through each phase in two weeks. The guided track gives each phase four weeks for deeper practice, review, and capstone progress."
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

      {/* Capstone */}
      <Section>
        <Container size="lg">
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-start"
          >
            <motion.div variants={fadeUpSection} className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-(--color-accent)">Capstone</p>
              <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-primary) text-balance">
                Leave with something you can actually show.
              </h2>
              <p className="text-base text-(--color-text-secondary) leading-relaxed text-pretty">
                Every student chooses a practical final project and builds toward it during the cohort. The goal is not just to understand AI. The goal is to prove you can apply it.
              </p>
            </motion.div>
            <motion.div variants={fadeUpSection} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {universityCapstones.map((capstone) => (
                <div key={capstone} className="rounded-xl bg-(--color-bg-surface) border border-(--color-border) px-4 py-3 text-sm font-semibold text-(--color-text-primary)">
                  {capstone}
                </div>
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
                title="Built for people ready to use AI seriously."
                description="You do not need to be an expert. You do need curiosity, consistency, and a reason to turn AI into something useful."
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

      {/* Offer */}
      <Section>
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
                eyebrow="Founding offer"
                title="Start accessible. Scale with support."
                description="Pricing will be finalized before enrollment opens. These tiers show how Monarc University can grow from a starter course into a guided cohort and premium build-with-me offer."
                align="center"
              />
            </motion.div>
            <motion.div variants={fadeUpSection} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {universityOffer.map((offer) => (
                <article
                  key={offer.name}
                  className="flex flex-col gap-3 rounded-2xl bg-(--color-bg-surface) border border-(--color-border) p-6"
                >
                  <h3 className="text-lg font-bold text-(--color-text-primary)">{offer.name}</h3>
                  <p className="text-2xl font-bold text-(--color-accent)">{offer.price}</p>
                  <p className="text-sm text-(--color-text-secondary) leading-relaxed">{offer.description}</p>
                </article>
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

      {/* Application */}
      <Section id="waitlist" className="bg-(--color-bg-surface) border-t border-(--color-border)">
        <Container size="lg">
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-12 items-start"
          >
            <motion.div variants={fadeUpSection} className="flex flex-col gap-4 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-(--color-accent)">
                Founding cohort
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-primary) text-pretty">
                Apply for early access.
              </h2>
              <p className="text-base text-(--color-text-secondary) leading-relaxed text-pretty">
                The first cohort will be intentionally small. This application helps sort serious students by goal, pace, readiness, and the kind of AI project they want to build.
              </p>
              <div className="rounded-2xl bg-(--color-bg-base) border border-(--color-border) p-5 text-left">
                <p className="text-sm font-bold text-(--color-text-primary)">Good fit signals</p>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-(--color-text-secondary)">
                  <li>Clear reason for learning AI</li>
                  <li>Willing to build a real capstone</li>
                  <li>Interested in business, career, content, clients, or automation</li>
                  <li>Ready for guided work, not just passive videos</li>
                </ul>
              </div>
              <figure className="relative min-h-56 overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-bg-base)">
                <Image
                  src={siteImages.aiWorkstation.src}
                  alt={siteImages.aiWorkstation.alt}
                  fill
                  sizes="(min-width: 1024px) 28vw, 92vw"
                  className="object-cover"
                />
              </figure>
            </motion.div>
            <motion.div variants={fadeUpSection} className="w-full">
              <CohortApplicationForm />
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
              <Button label="Apply for the cohort" href="#waitlist" variant="secondary" size="lg" trackingLabel="university_page_cta_secondary" />
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
            initial={{ height: 0, opacity: 1 }}
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

function CohortApplicationForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "submitted" | "error">("idle");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
    track: "",
    skillLevel: "",
    budget: "",
    project: "",
  });

  const inputBase =
    "w-full px-4 py-3 rounded-lg bg-(--color-bg-elevated) border border-(--color-border) text-(--color-text-primary) placeholder:text-(--color-text-muted) text-sm transition-all duration-250 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-0 focus-visible:border-(--color-accent) hover:border-(--color-border-bright)";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.goal || !formData.project.trim()) return;
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/university/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.detail || result.error || "Application could not be submitted.");
      }

      analytics.universityApply();
      setStatus("submitted");
      router.push("/university/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Application could not be submitted.");
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl bg-(--color-bg-base) border border-(--color-border) p-8 text-center">
        <span className="text-4xl" aria-hidden="true">✓</span>
        <h3 className="text-xl font-bold text-(--color-text-primary)">Application noted.</h3>
        <p className="max-w-md text-sm text-(--color-text-secondary) leading-relaxed">
          Thank you for applying. You will hear back with cohort details, fit, pricing, and next steps before the founding cohort opens publicly.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", email: "", goal: "", track: "", skillLevel: "", budget: "", project: "" });
          }}
          className="text-sm font-semibold text-(--color-accent) hover:underline focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3 rounded-sm"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl bg-(--color-bg-base) border border-(--color-border) p-6 md:p-8 text-left"
      aria-label="Monarc University founding cohort application"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold text-(--color-text-primary)">Founding cohort application</h3>
        <p className="text-sm text-(--color-text-secondary)">
          Tell me what you want AI to help you build. The stronger the goal, the easier it is to place you in the right track.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cohort-name" className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-wide">
            Name <span className="text-(--color-accent)" aria-label="required">*</span>
          </label>
          <input
            id="cohort-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputBase}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cohort-email" className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-wide">
            Email <span className="text-(--color-accent)" aria-label="required">*</span>
          </label>
          <input
            id="cohort-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@email.com"
            className={inputBase}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cohort-goal" className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-wide">
            Main goal <span className="text-(--color-accent)" aria-label="required">*</span>
          </label>
          <select
            id="cohort-goal"
            name="goal"
            required
            value={formData.goal}
            onChange={handleChange}
            className={`${inputBase} cursor-pointer`}
          >
            <option value="">Select your goal</option>
            <option value="business">Use AI in my business</option>
            <option value="career">Grow or pivot my career</option>
            <option value="content">Create better content systems</option>
            <option value="clients">Build AI services for clients</option>
            <option value="personal">Improve personal productivity</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cohort-track" className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-wide">
            Preferred track
          </label>
          <select
            id="cohort-track"
            name="track"
            value={formData.track}
            onChange={handleChange}
            className={`${inputBase} cursor-pointer`}
          >
            <option value="">Not sure yet</option>
            <option value="12-week">12-week fast track</option>
            <option value="24-week">24-week guided cohort</option>
            <option value="self-paced">Self-paced starter</option>
            <option value="vip">VIP / build-with-me</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cohort-skill-level" className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-wide">
            Current skill level
          </label>
          <select
            id="cohort-skill-level"
            name="skillLevel"
            value={formData.skillLevel}
            onChange={handleChange}
            className={`${inputBase} cursor-pointer`}
          >
            <option value="">Select level</option>
            <option value="new">New to AI</option>
            <option value="uses-chatgpt">I use ChatGPT/basic AI tools</option>
            <option value="some-code">I know some code or automations</option>
            <option value="builder">I already build technical projects</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cohort-budget" className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-wide">
            Readiness / budget
          </label>
          <select
            id="cohort-budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`${inputBase} cursor-pointer`}
          >
            <option value="">Select range</option>
            <option value="under-500">Under $500</option>
            <option value="500-1500">$500-$1,500</option>
            <option value="1500-2500">$1,500-$2,500</option>
            <option value="2500-plus">$2,500+</option>
            <option value="need-details">Need details first</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cohort-project" className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-wide">
          What do you want AI to help you build? <span className="text-(--color-accent)" aria-label="required">*</span>
        </label>
        <textarea
          id="cohort-project"
          name="project"
          required
          rows={5}
          value={formData.project}
          onChange={handleChange}
          placeholder="Example: I want to build an AI assistant for client intake, content planning, lead qualification, or automating repetitive work in my business."
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-(--color-accent) px-6 py-3 text-sm font-semibold text-(--color-text-inverse) shadow-[0_0_20px_var(--color-accent-glow)] transition-all duration-250 hover:bg-(--color-accent-dim) disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3"
      >
        {status === "loading" ? "Submitting..." : "Apply for founding cohort"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-(--color-error)">
          {error}
        </p>
      )}

      <p className="text-center text-xs text-(--color-text-muted)">
        Applications are reviewed manually for fit before enrollment opens.
      </p>
    </form>
  );
}
