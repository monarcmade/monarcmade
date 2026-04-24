/* ============================================================
   MOTION SYSTEM — Monarc Made
   Central animation variants. Import from here, never define
   ad-hoc animations in components.
   ============================================================ */

import type { Variants, Transition } from "framer-motion";

/* --- Base Transitions --- */

export const transitions = {
  fast: { duration: 0.15, ease: [0.16, 1, 0.3, 1] } satisfies Transition,
  base: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } satisfies Transition,
  slow: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } satisfies Transition,
  spring: { type: "spring", stiffness: 300, damping: 30 } satisfies Transition,
} as const;

/* --- Entrance Variants --- */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.base,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.base,
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.base,
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.base,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.base,
  },
};

/* --- Container Stagger --- */

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/** Hero — cascade on first paint (slightly slower for “wow” readability) */
export const staggerHero: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.08,
    },
  },
};

export const fadeUpHero: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Hero — stronger entrance (blur lift); pair with `useReducedMotion` fallback to `fadeUpHero`. */
export const fadeUpHeroWow: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.12, 0.88, 0.16, 1] },
  },
};

export const heroAccentLine: Variants = {
  hidden: { scaleX: 0.08, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.58, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerHeroKicker: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

export const staggerHeroTitle: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0,
    },
  },
};

/** Chip row: container lifts in, children spring in sequence */
export const heroChipsWrap: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.045,
      delayChildren: 0.06,
    },
  },
};

export const heroChipItem: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 26 },
  },
};

export const fadeUpHeroDelay: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, delay: 0.18, ease: [0.16, 1, 0.3, 1] },
  },
};

export const heroStatsWrap: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

export const heroStatPop: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.88 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 20 },
  },
};

export const heroCardSpring: Variants = {
  hidden: { opacity: 0, x: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

/** Homepage sections — slightly quicker than default fadeUp */
export const fadeUpSection: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerSection: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.06,
    },
  },
};

/** Featured work / showcase rows — slightly slower cascade */
export const staggerShowcase: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

/* --- Hover States --- */

export const hoverCard = {
  whileHover: {
    y: -4,
    transition: transitions.fast,
  },
};

export const hoverScale = {
  whileHover: {
    scale: 1.02,
    transition: transitions.fast,
  },
};

/* --- Viewport defaults (use with whileInView) --- */

export const viewportOnce = { once: true, amount: 0.22, margin: "-48px 0px -12px 0px" };

/** Section shell — subtle rise + fade when scrolled into view */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};
