"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABlock } from "@/components/sections/CTABlock";
import { WorkIndexList } from "@/components/sections/WorkIndexList";
import { recentWorkIncludes } from "@/data/home";
import { portfolioDeliveryNote } from "@/data/samplePortfolio";
import { workPageIntro } from "@/data/workPage";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import type { WorkPostSummary } from "@/types";

export function WorkPageBody({ posts }: { posts: WorkPostSummary[] }) {
  return (
    <>
      <Section>
        <Container>
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-7 md:gap-8"
          >
            <motion.div variants={fadeUpSection} className="max-w-3xl flex flex-col gap-5">
              <SectionHeader
                eyebrow={workPageIntro.eyebrow}
                title={workPageIntro.title}
                description={workPageIntro.description}
              />
              <p className="text-xs text-(--color-text-muted) leading-relaxed border-l-2 border-(--color-accent) pl-4 max-w-2xl">
                {portfolioDeliveryNote}
              </p>
            </motion.div>

            {posts.length > 0 && (
              <motion.div variants={fadeUpSection} className="flex flex-col gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-(--color-text-muted)">Jump to entry</p>
                <div className="flex flex-wrap gap-2">
                  {posts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`#case-${p.slug}`}
                      className="text-xs font-medium px-3 py-1.5 rounded-full border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-secondary) hover:border-(--color-accent) hover:text-(--color-accent) transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-2"
                    >
                      {p.client}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </Container>
      </Section>

      <Section rhythm="tight" className="border-t border-(--color-border) bg-(--color-bg-surface)">
        <Container>
          <motion.div
            variants={staggerSection}
            initial={false}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-2 md:gap-2.5"
          >
            <motion.p
              variants={fadeUpSection}
              className="text-[10px] font-semibold uppercase tracking-[0.16em] text-(--color-text-muted) m-0"
            >
              Recent work includes
            </motion.p>
            <motion.ul
              variants={fadeUpSection}
              className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-2.5"
            >
              {recentWorkIncludes.map((line) => (
                <li
                  key={line}
                  className="text-sm text-(--color-text-secondary) leading-snug pl-3 border-l border-(--color-border-bright)"
                >
                  {line}
                </li>
              ))}
            </motion.ul>
            <motion.p variants={fadeUpSection} className="text-xs text-(--color-text-muted) leading-relaxed m-0">
              All delivered in production environments.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      <Section className="!pt-5 md:!pt-6" id="work-index">
        <Container>
          <WorkIndexList posts={posts} />
        </Container>
      </Section>

      <CTABlock
        eyebrow="Have a project?"
        title="Bring the constraint and the timeline."
        description="If the shape of this work matches what you need shipped, start with stack, timeline, and what has to move—Monarc Made maps a first slice from there."
        primaryLabel="Discuss scope"
        primaryHref="/contact"
        secondaryLabel="Services"
        secondaryHref="/services"
        trackingPrefix="work_page_cta"
      />
    </>
  );
}
