"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeLeft, fadeRight, staggerSection, viewportOnce } from "@/lib/motion";
import { siteConfig } from "@/data/site";
import { brandLogoPath } from "@/components/brand/SiteLogo";

export function AboutTeaser() {
  return (
    <Section
      rhythm="tight"
      className="border-t border-(--color-border) bg-(--color-bg-surface)"
    >
      <Container>
        <motion.div
          variants={staggerSection}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
        >
          <motion.div variants={fadeLeft} className="flex flex-col gap-4 md:gap-5">
            <div className="flex items-center gap-3">
              <span className="accent-line" aria-hidden="true" />
              <span className="text-(--color-accent) text-xs md:text-sm font-semibold tracking-widest uppercase">
                About
              </span>
            </div>
            <h2 className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold tracking-[-0.02em] text-(--color-text-primary) leading-[1.1] text-balance">
              A practice built for production, not pitch decks.
            </h2>
            <div className="flex flex-col gap-3 text-(--color-text-secondary) leading-snug text-pretty">
              <p>
                {siteConfig.name} was founded by a senior engineer who was looking for better systems—and built them.
              </p>
              <p>
                We build on Next.js and TypeScript, run hosting and CI/CD on AWS · Azure · GCP, modernize when technical debt is the bottleneck, and ship production AI—including OpenClaw-style agents—when that is the lever.
              </p>
            </div>
            <div className="pt-1">
              <Button
                label="About the practice"
                href="/about"
                variant="secondary"
                trackingLabel="about_teaser_cta"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeRight} className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm aspect-square md:max-w-md md:w-80 md:h-80 md:aspect-auto">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,200,255,0.12)_0%,transparent_55%)]"
              />
              <div className="absolute inset-0 rounded-2xl border border-(--color-border) bg-(--color-bg-base) overflow-hidden flex items-center justify-center">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 opacity-[0.22] bg-[linear-gradient(var(--color-border-bright)_1px,transparent_1px),linear-gradient(90deg,var(--color-border-bright)_1px,transparent_1px)] bg-size-[24px_24px]"
                />
                <div className="relative z-[1] flex flex-col items-center justify-center gap-2 px-6 py-4">
                  <img
                    src={brandLogoPath}
                    alt={`${siteConfig.name} logo`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="block w-[min(65%,11rem)] sm:w-[min(60%,12rem)] h-auto max-w-full border-0 object-contain outline-none select-none drop-shadow-[0_10px_36px_rgba(0,200,255,0.12)]"
                  />
                  <p className="text-center text-xs font-medium text-(--color-text-secondary) uppercase tracking-[0.2em]">
                    {siteConfig.name}
                  </p>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-(--color-accent) opacity-[0.08] pointer-events-none"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
