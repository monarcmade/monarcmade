/**
 * Homepage-only strips (hero, engagement formats, deep links).
 */

export const heroMessaging = {
  titleLead: "Systems made for use, not repair.",
  titleEmphasis: "Less noise. More clarity.",
  tension: [
    "Agencies fade after go-live. Contractors skip the handoff. Demos rarely survive production.",
    "We ship working software, docs your team can run with, and a real handoff, so you own the system when we step back.",
  ] as const,
  signatureLine: "Fixed scope. Production reality. Docs your team can actually use.",
  subtitle: "",
} as const;

export const heroProofChips = [
  "OpenClaw & production agents",
  "LLM workflows under guardrails",
  "Web & platform delivery",
  "Cloud, CI/CD, cutovers",
  "TypeScript, APIs & integration boundaries",
  "Modernization, migrations & runbooks",
] as const;

export const engagementFormats = [
  { label: "Project", detail: "Fixed scope with milestones and written acceptance" },
  { label: "Embed", detail: "2–3 days/week inside your repos and release process" },
  { label: "Advisory", detail: "Architecture, cloud, and technical decision support" },
  { label: "Sustain", detail: "Post-launch support, infrastructure, and ongoing improvements" },
] as const;

export const featuredWorkMoreLinks = [
  { href: "/projects/bts1981-platform-hosting", label: "BTS1981 — platform migration & hosting →" },
  { href: "/projects/mixnmorph-media-web", label: "Mix N Morph Media — agency site & SEO structure →" },
] as const;
