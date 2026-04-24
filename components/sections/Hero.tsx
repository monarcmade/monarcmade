"use client";

import dynamic from "next/dynamic";
import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { useTheme } from "next-themes";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  staggerHero,
  fadeUpHero,
  fadeUpHeroDelay,
  staggerHeroTitle,
  heroChipsWrap,
  heroCardSpring,
} from "@/lib/motion";
import { heroProofChips, heroMessaging } from "@/data/homepage";

const HeroScene = dynamic(
  () => import("@/components/visuals/HeroScene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null },
);

const recentWork = [
  {
    label: "04/26 · BTS1981",
    outcome:
      "AWS migration and full website redesign — moved the platform to a reliable cloud environment and rebuilt the site to match.",
    slug: "bts1981-platform-hosting",
  },
  {
    label: "03/26 · BulkThreads",
    outcome:
      "Built an API to sync inventory across SanMar and other supplier systems. Enabled real-time tracking across thousands of SKUs, improving accuracy and reducing manual overhead in day-to-day operations.",
    slug: "bulkthreads-inventory-sync",
  },
  {
    label: "02/26 · Liberty Perfume",
    outcome:
      "Full Shopify redesign using Liquid — updated structure, visuals, and product presentation to improve usability and conversion.",
    slug: "liberty-perfume-shopify",
  },
  {
    label: "01/26 · RealTruck",
    outcome: "Frontend systems and product configurator work inside a large-scale e-commerce production environment.",
    slug: "realtruck-ecommerce-frontend",
  },
] as const;

const linkMotion =
  "transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out";

const FADE_WORD_SPLIT = /(fade)/;

function renderTensionWithFadeWord(
  line: string,
  reduceMotion: boolean | null,
): ReactNode {
  const parts = line.split(FADE_WORD_SPLIT);
  return parts.map((part, i) => {
    if (part === "fade") {
      return (
        <span
          key={i}
          className={
            reduceMotion
              ? "inline"
              : "hero-tension-fade-word inline"
          }
        >
          {part}
        </span>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const chipsRef = useRef<HTMLUListElement>(null);
  const [chipsScroll, setChipsScroll] = useState({ left: false, right: true });
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = chipsRef.current;
    if (!el) return;
    const update = () => setChipsScroll({
      left: el.scrollLeft > 8,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - 8,
    });
    update();
    el.addEventListener("scroll", update, { passive: true });
    return () => el.removeEventListener("scroll", update);
  }, []);

  const scrollChips = (dir: "left" | "right") => {
    const el = chipsRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 160 : -160, behavior: "smooth" });
  };
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backdropShift = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 110],
  );
  const backdropShiftSlow = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 56],
  );

  /** Blur-on-enter (fadeUpHeroWow) breaks `background-clip: text` / contrast; keep a simple fade for the headline. */
  const titleEmphasisMotion = fadeUpHero;
  const emphasisVisualClass =
    mounted && resolvedTheme === "light"
      ? "text-[#031018] [text-shadow:0_1px_0_rgb(255_255_255_/_0.92),0_0_28px_rgb(255_255_255_/_0.5)]"
      : "text-gradient-hero";

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      className="relative min-h-0 md:min-h-dvh flex flex-col justify-start lg:justify-center overflow-hidden border-b border-(--color-border)"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        style={{ y: backdropShift }}
      >
        <div className="hero-conic-halo" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_85%_at_50%_-18%,var(--hero-ellipse-a)_0%,var(--hero-ellipse-mid)_38%,transparent_58%)]" />
        <div className="hero-atmosphere-blob absolute -top-[min(38%,22rem)] -left-[min(28%,14rem)] w-[min(48rem,120vw)] h-[min(48rem,120vw)] rounded-full bg-[radial-gradient(ellipse_at_center,var(--hero-blob-a-0)_0%,var(--hero-blob-a-1)_45%,transparent_65%)] blur-[2px]" />
        <div className="hero-atmosphere-blob hero-atmosphere-blob--delayed absolute -bottom-[min(42%,18rem)] -right-[min(22%,8rem)] w-[min(36rem,95vw)] h-[min(36rem,95vw)] rounded-full bg-[radial-gradient(ellipse_at_center,var(--hero-blob-b-0)_0%,var(--hero-blob-b-1)_50%,transparent_72%)] blur-[1px]" />
        <div className="hero-signature-grid absolute inset-0 z-[1]" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(var(--hero-grid-dot)_1px,transparent_1px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_88%_65%_at_50%_8%,black_32%,transparent_100%)] opacity-[0.72]" />
        <div className="absolute inset-0 z-[3] bg-[linear-gradient(180deg,var(--hero-vig-0)_0%,transparent_42%,var(--hero-vig-1)_100%)]" />
        <div
          className="hero-horizon-band absolute left-[10%] right-[10%] top-[58%] z-[2] max-w-3xl mx-auto md:left-[18%] md:right-auto md:mx-0 md:max-w-none md:w-[min(42rem,48%)]"
          aria-hidden="true"
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[0]"
        style={{ y: backdropShiftSlow }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_82%_72%,var(--hero-side)_0%,transparent_72%)]" />
      </motion.div>
      <HeroScene />

      <Container className="relative z-10 pt-14 pb-10 md:pt-[4.25rem] md:max-lg:pt-[4.5rem] lg:pt-20 xl:pt-24 2xl:pt-28 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(252px,19rem)] xl:grid-cols-[minmax(0,1fr)_minmax(280px,22rem)] gap-10 md:max-lg:gap-8 lg:gap-11 xl:gap-16 items-start">
          <motion.div
            variants={staggerHero}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3.5 md:max-lg:gap-5 md:gap-7 lg:gap-8 max-w-2xl md:max-lg:max-w-[40rem] lg:max-w-none md:max-lg:mx-auto lg:mx-0 lg:pt-3 xl:pt-4"
          >
            <motion.h1
              variants={staggerHeroTitle}
              className="m-0 p-0 flex flex-col gap-2.5 md:max-lg:gap-3 md:gap-3.5 lg:gap-4 text-balance"
            >
              <motion.span
                variants={titleEmphasisMotion}
                className="text-[clamp(2.2rem,6.9vw,4.75rem)] md:max-lg:text-[clamp(2.35rem,6.25vw,4.85rem)] lg:text-[clamp(2.35rem,6.9vw,5.5rem)] leading-[0.98] font-bold tracking-[-0.042em] block max-w-[22ch] sm:max-w-[28ch] lg:max-w-[32ch] xl:max-w-none order-1 relative z-[1]"
              >
                <span className={emphasisVisualClass}>{heroMessaging.titleEmphasis}</span>
              </motion.span>
              <motion.span
                variants={fadeUpHero}
                className="text-[clamp(1.12rem,2.55vw,1.55rem)] md:text-[1.28rem] md:max-lg:text-[1.34rem] lg:text-[1.42rem] xl:text-[1.5rem] font-medium tracking-[-0.018em] text-(--color-text-secondary) block order-2 max-w-xl md:max-lg:max-w-[36rem] lg:max-w-[36rem]"
              >
                {heroMessaging.titleLead}
              </motion.span>
            </motion.h1>
            <motion.p
              variants={fadeUpHero}
              className="m-0 max-w-xl md:max-lg:max-w-[40rem] lg:max-w-136 text-[0.94rem] sm:text-[1rem] md:text-[1.06rem] md:max-lg:text-[1.08rem] lg:text-[1.125rem] xl:text-[1.14rem] italic md:not-italic text-(--color-text-muted) md:text-(--color-text-secondary) leading-[1.65] md:leading-[1.62] text-pretty"
            >
              {renderTensionWithFadeWord(heroMessaging.tension[0], reduceMotion)}
            </motion.p>
            <motion.p
              variants={fadeUpHero}
              className="m-0 max-w-xl md:max-lg:max-w-[40rem] lg:max-w-136 text-[0.98rem] sm:text-[1.02rem] md:text-[1.08rem] md:max-lg:text-[1.1rem] lg:text-[1.14rem] xl:text-[1.16rem] text-(--color-text-primary) md:text-(--color-text-secondary) leading-[1.65] md:leading-[1.58] text-pretty border-l-2 border-l-(--color-accent) pl-3 md:border-none md:pl-0 font-medium md:font-normal"
            >
              {heroMessaging.tension[1]}
            </motion.p>
            <motion.p
              variants={fadeUpHeroDelay}
              className="m-0 max-w-xl md:max-lg:max-w-[40rem] md:max-w-2xl text-[0.875rem] sm:text-[0.9375rem] md:text-[0.98rem] md:max-lg:text-[1.02rem] lg:text-[1.06rem] xl:text-[1.08rem] font-semibold text-(--color-accent) tracking-wide leading-relaxed opacity-95"
            >
              {heroMessaging.signatureLine}
            </motion.p>

            {heroMessaging.subtitle ? (
              <motion.p
                variants={fadeUpHero}
                className="text-[0.95rem] md:text-lg text-(--color-text-secondary) max-w-xl lg:max-w-136 leading-[1.55] text-pretty border-l-2 border-l-[color-mix(in_oklab,var(--color-accent)_42%,transparent)] pl-4 md:pl-5"
              >
                {heroMessaging.subtitle}
              </motion.p>
            ) : null}

          </motion.div>

          <motion.div
            variants={staggerHero}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex flex-col gap-2.5 w-full"
            aria-label="Representative work"
          >
            <motion.p
              variants={fadeUpHero}
              className="text-[11px] font-bold tracking-[0.14em] uppercase text-(--color-text-muted) pb-0.5"
            >
              Representative work
            </motion.p>

            {recentWork.map((item, i) => (
              <motion.div key={item.slug} variants={heroCardSpring} custom={i}>
                <motion.div whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 28 } }}>
                  <Link
                    href={`/projects/${item.slug}`}
                    className={`group flex items-start justify-between gap-3 px-3.5 py-3 rounded-xl bg-(--color-bg-surface) border border-(--color-border) hover:border-(--color-border-bright) hover:bg-(--color-bg-elevated) hover:shadow-[0_0_20px_var(--color-accent-glow)] ${linkMotion} focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3`}
                  >
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <span className="text-[10px] font-medium text-(--color-text-muted) tracking-wide text-pretty normal-case">
                        {item.label}
                      </span>
                      <span className="text-xs font-medium text-(--color-text-secondary) group-hover:text-(--color-text-primary) transition-colors duration-300 leading-snug">
                        {item.outcome}
                      </span>
                    </div>
                    <span
                      className="text-(--color-accent) opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-0.5 transition-all duration-300 shrink-0 self-center text-base leading-none"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            ))}

          </motion.div>
        </div>

        <motion.div
          variants={heroChipsWrap}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 w-full max-w-lg">
            {chipsScroll.left && (
              <button
                onClick={() => scrollChips("left")}
                aria-label="Scroll left"
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-(--color-bg-elevated) border border-(--color-border-bright) text-(--color-accent) shadow-md text-sm leading-none transition-opacity hover:opacity-80"
              >
                ‹
              </button>
            )}
            <ul
              ref={chipsRef}
              className="flex gap-2 overflow-x-auto pb-1 list-none m-0 p-0 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Practice focus areas"
            >
              {heroProofChips.map((chip) => (
                <li
                  key={chip}
                  className="flex items-center gap-1.5 text-[11.5px] md:text-xs font-medium text-(--color-text-primary) px-3 py-1.5 rounded-full border border-[color-mix(in_oklab,var(--color-accent)_35%,var(--color-border-bright))] bg-[color-mix(in_oklab,var(--color-bg-surface)_92%,var(--color-accent)_8%)] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_1px_3px_rgba(0,0,0,0.12)] shrink-0 snap-start"
                >
                  <span className="w-1 h-1 rounded-full bg-(--color-accent) opacity-70 shrink-0" />
                  {chip}
                </li>
              ))}
            </ul>
            {chipsScroll.right && (
              <button
                onClick={() => scrollChips("right")}
                aria-label="Scroll right"
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-(--color-bg-elevated) border border-(--color-border-bright) text-(--color-accent) shadow-md text-sm leading-none transition-opacity hover:opacity-80"
              >
                ›
              </button>
            )}
          </div>

          <motion.div variants={fadeUpHero} className="flex flex-wrap justify-center items-center gap-3">
            <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex">
              <Button
                label="View projects"
                href="/projects"
                variant="primary"
                size="lg"
                trackingLabel="hero_primary_cta"
              />
            </motion.span>
            <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex">
              <Button
                label="Start a conversation"
                href="/contact"
                variant="secondary"
                size="lg"
                trackingLabel="hero_secondary_cta"
              />
            </motion.span>
          </motion.div>
        </motion.div>

      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
        className="hidden md:flex absolute bottom-6 md:bottom-9 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
      >
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-(--color-text-muted)">
          Scroll
        </span>
        <div className="w-px h-9 bg-linear-to-b from-transparent via-(--color-accent) to-transparent opacity-70 shadow-[0_0_12px_var(--color-accent-glow)]" />
      </motion.div>
    </section>
  );
}
