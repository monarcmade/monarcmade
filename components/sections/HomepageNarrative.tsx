"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container, Section } from "@/components/ui/Container";
import { fadeUpSection, staggerSection, viewportOnce } from "@/lib/motion";
import { homeNarrativePanels } from "@/data/homeNarrative";
import { siteImages } from "@/data/siteImages";

const narrativeImages = [
  { ...siteImages.aiWorkstation, label: "Strategy" },
  { ...siteImages.productionSystems, label: "Build" },
  { ...siteImages.contentStudio, label: "Launch" },
] as const;

export function HomepageNarrative() {
  const reduceMotion = useReducedMotion();
  const carouselId = useId();
  const regionRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const len = homeNarrativePanels.length;
  const panel = homeNarrativePanels[index]!;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + len) % len);
    },
    [len],
  );

  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (!el.contains(document.activeElement)) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <Section
      id="narrative"
      rhythm="tight"
      className="border-t border-(--color-border) bg-(--color-bg-surface)"
    >
      <Container>
        <motion.div
          variants={staggerSection}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto flex flex-col gap-6 md:gap-8"
        >
          <motion.div variants={fadeUpSection} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-(--color-accent) m-0 mb-1.5">
                  How I frame the work
                </p>
                <h2 className="m-0 text-lg md:text-xl font-bold text-(--color-text-primary) tracking-tight leading-snug">
                  From what breaks first to what changes—five steps
                </h2>
              </div>
              <p className="text-[11px] text-(--color-text-muted) m-0 sm:text-right max-w-[15rem] sm:max-w-xs leading-snug">
                Use the arrows or dots below. If you tab into this panel, ← and → move between steps.
              </p>
            </div>

            <div
              ref={regionRef}
              tabIndex={0}
              role="region"
              aria-roledescription="carousel"
              aria-label="Monarc Made narrative: what breaks, failure modes, scope, and outcomes"
              className="rounded-2xl border border-(--color-border) bg-(--color-bg-surface) overflow-hidden shadow-md outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-bg-surface)"
            >
              <div className="relative min-h-[min(52vh,22rem)] sm:min-h-[17.5rem] md:min-h-[16rem]">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={panel.id}
                    id={`${carouselId}-slide-${index}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${len}`}
                    initial={reduceMotion ? false : { opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, x: -22 }}
                    transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex flex-col p-5 sm:p-6 md:p-7"
                  >
                    {"eyebrow" in panel && panel.eyebrow ? (
                      <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-(--color-accent) mb-2">
                        {panel.eyebrow}
                      </p>
                    ) : null}
                    <h3 className="m-0 text-lg md:text-xl font-bold text-(--color-text-primary) tracking-tight leading-snug mb-4 text-balance">
                      {panel.title}
                    </h3>
                    <ul className="list-none m-0 p-0 flex flex-col gap-2 sm:gap-2.5 flex-1 overflow-y-auto [scrollbar-width:thin]">
                      {panel.bullets.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-(--color-text-secondary) leading-snug pl-3 border-l border-(--color-border-bright)"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    {"emphasis" in panel && panel.emphasis ? (
                      <p className="m-0 mt-4 text-sm font-semibold text-(--color-text-primary) leading-snug text-pretty">
                        {panel.emphasis}
                      </p>
                    ) : null}
                    {"footer" in panel && panel.footer ? (
                      <p className="m-0 mt-3 text-xs text-(--color-text-muted) leading-relaxed text-pretty border-t border-(--color-border) pt-3.5">
                        {panel.footer}
                      </p>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between gap-3 px-4 py-3.5 md:px-5 border-t border-(--color-border) bg-[color-mix(in_oklab,var(--color-bg-base)_55%,var(--color-bg-surface))]">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) hover:border-(--color-border-bright) hover:text-(--color-accent) transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-2"
                  aria-controls={`${carouselId}-slide-${index}`}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex flex-wrap justify-center gap-2 min-w-0" aria-label="Choose slide">
                  {homeNarrativePanels.map((p, i) => (
                    <button
                      key={p.id}
                      type="button"
                      aria-current={i === index ? "true" : undefined}
                      aria-label={`Slide ${i + 1} of ${len}: ${p.title}`}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-2 ${
                        i === index
                          ? "w-8 bg-(--color-accent) shadow-[0_0_12px_var(--color-accent-glow)]"
                          : "w-2 bg-(--color-border-bright) hover:bg-(--color-text-muted)"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => go(1)}
                  className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) bg-(--color-bg-surface) text-(--color-text-primary) hover:border-(--color-border-bright) hover:text-(--color-accent) transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-2"
                  aria-controls={`${carouselId}-slide-${index}`}
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <motion.div
              variants={fadeUpSection}
              className="grid grid-cols-1 gap-3 sm:grid-cols-3"
              aria-label="Monarc Made work environments"
            >
              {narrativeImages.map((image) => (
                <figure
                  key={image.src}
                  className="group relative min-h-40 overflow-hidden rounded-xl border border-(--color-border) bg-(--color-bg-base)"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 28vw, 92vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))] px-4 pb-3 pt-10 text-xs font-bold uppercase tracking-[0.14em] text-white">
                    {image.label}
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
