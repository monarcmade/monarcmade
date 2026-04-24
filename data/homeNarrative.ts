/**
 * Homepage narrative — problem / system framing after the hero.
 */

export const homeNarrativeFeel = {
  eyebrow: "When systems don’t hold up",
  title: "What breaks first",
  items: [
    "Customer surfaces slow under real traffic.",
    "Migrations add risk instead of removing it.",
    "Infra drifts; trust erodes quietly.",
    "AI stays in slides—never clears production gates.",
  ],
  closing: "The gap rarely feels urgent until it is expensive.",
} as const;

export const homeNarrativeChallenges = {
  eyebrow: "Failure modes",
  title: "Where things usually break",
  items: [
    "Slow or fragile customer-facing systems.",
    "WordPress or legacy stacks that do not scale with editorial or traffic reality.",
    "Unclear architecture and ownership.",
    "Performance that degrades under load before priorities align.",
    "AI that never clears legal, ops, or observability for production.",
  ],
  punch: "These are not design problems. They are system problems.",
} as const;

export const homeNarrativeSystemBar = {
  title: "Let the system do what it is supposed to do",
  items: [
    "Fast, reliable performance under real use.",
    "Architecture your team can reason about in review.",
    "Deployments you are not afraid to run.",
    "AI and agents that operate under production constraints—not demos.",
  ],
  closing: "That is what disciplined engineering looks like.",
} as const;

export const homeNarrativeDelivers = {
  eyebrow: "Scope",
  title: "What Monarc Made delivers",
  items: [
    "Modern web platforms—Next.js, TypeScript, performance and accessibility on the trunk.",
    "Cloud and delivery—AWS, Azure, GCP, CI/CD, hosting, and production deployments.",
    "Migrations and modernization—moving off legacy without breaking what still pays rent.",
    "Production AI and automation—OpenClaw, LLM integrations, and workflows under real guardrails.",
  ],
  closing: "Scoped against real constraints—not abstract best-practice theater.",
} as const;

export const homeNarrativeOutcomes = {
  eyebrow: "Outcomes",
  title: "What changes",
  items: [
    "Systems your team can trust in production.",
    "Performance that holds under real traffic.",
    "Infrastructure that supports growth instead of blocking it.",
    "Clearer ownership across code, deployment, and operations.",
  ],
  closing:
    "The difference is not only shipping—it is knowing the system will hold after it ships.",
} as const;

/** Single carousel source — same copy as above, one panel per view. */
export const homeNarrativePanels = [
  {
    id: "feel",
    eyebrow: homeNarrativeFeel.eyebrow,
    title: homeNarrativeFeel.title,
    bullets: homeNarrativeFeel.items,
    footer: homeNarrativeFeel.closing,
  },
  {
    id: "challenges",
    eyebrow: homeNarrativeChallenges.eyebrow,
    title: homeNarrativeChallenges.title,
    bullets: homeNarrativeChallenges.items,
    emphasis: homeNarrativeChallenges.punch,
  },
  {
    id: "system",
    title: homeNarrativeSystemBar.title,
    bullets: homeNarrativeSystemBar.items,
    footer: homeNarrativeSystemBar.closing,
  },
  {
    id: "delivers",
    eyebrow: homeNarrativeDelivers.eyebrow,
    title: homeNarrativeDelivers.title,
    bullets: homeNarrativeDelivers.items,
    footer: homeNarrativeDelivers.closing,
  },
  {
    id: "outcomes",
    eyebrow: homeNarrativeOutcomes.eyebrow,
    title: homeNarrativeOutcomes.title,
    bullets: homeNarrativeOutcomes.items,
    footer: homeNarrativeOutcomes.closing,
  },
] as const;
