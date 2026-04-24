/**
 * Homepage — sellable entry points (ranges are anchors; scope is confirmed in writing).
 */

export const waysToEngageIntro = {
  eyebrow: "Ways to engage",
  title: "Defined scopes. Clear outcomes.",
  lead: [
    "Starting ranges reflect typical scopes. Every engagement is defined in writing after a short discovery call — scope, timeline, and what “done” means.",
    "WordPress, Shopify, or custom React / Next.js systems — scoped against real constraints before any work begins.",
  ] as const,
} as const;

export const waysToEngageFootnote =
  "Figures are starting bands, not quotes. Final pricing follows written scope, acceptance criteria, and any third-party fees (domains, cloud usage, model APIs).";

export const waysToEngageOffers = [
  {
    id: "website-builds",
    title: "Website builds",
    subtitle: "WordPress · React · Next.js · Shopify +",
    price: "From $2,500 – $8,000+",
    includes: [
      "Full site build or redesign with performance in mind",
      "Core Web Vitals–oriented frontends and SEO-ready structure",
      "WordPress, headless CMS, React/Next.js, or Shopify—wired to how editors and ops actually work",
      "Deployment and hosting handoff your team can operate",
    ],
    bestFor: "Teams that need a fast, modern site that converts—and can grow without a rewrite in six months.",
    cta: "Scope a build",
  },
  {
    id: "wordpress-care",
    title: "WordPress support & management",
    subtitle: "Ongoing care",
    price: "From $250 / month",
    includes: [
      "Updates, backups, and security hygiene on a steady cadence",
      "Performance fixes tied to real traffic—not guesswork",
      "Plugin and theme stewardship within sensible guardrails",
      "Small changes and support without opening a new project every time",
    ],
    bestFor: "Businesses staying on WordPress who need reliability before a larger migration.",
    cta: "Get started",
  },
  {
    id: "hosting-cloud",
    title: "Hosting & cloud setup",
    subtitle: "AWS · Vercel · GCP",
    price: "From $500 – $2,000+",
    includes: [
      "Environments, DNS, TLS, and parity between staging and prod",
      "CI/CD wired to how your team actually releases",
      "Cost and performance passes with concrete next steps",
      "Migrations off fragile hosting when cutover risk is the constraint",
    ],
    bestFor: "Teams that need infrastructure that behaves in production—not a one-off deploy script.",
    cta: "Discuss your setup",
  },
  {
    id: "custom-apps",
    title: "Custom app & platform work",
    subtitle: "Full-stack delivery",
    price: "From $5,000 – $25,000+",
    includes: [
      "Next.js, Node, APIs, and data models your team can extend",
      "Dashboards, internal tools, and multi-tenant B2B surfaces",
      "Auth, roles, and audit-friendly admin paths",
      "Observability and release discipline baked in—not bolted on later",
    ],
    bestFor: "Organizations shipping tools, platforms, or internal systems that have to hold under real use.",
    cta: "Scope your platform",
  },
  {
    id: "api-automation",
    title: "API & automation systems",
    subtitle: "Integrations & operations",
    price: "From $1,500+",
    includes: [
      "Custom APIs for inventory, suppliers, and partner systems",
      "Automation that retires brittle spreadsheets and manual syncs",
      "Cross-platform sync (e.g. commerce, CRMs, fulfillment) with clear ownership",
      "Internal workflow tools operators can trust",
    ],
    bestFor: "Businesses juggling data and operations across more than one system of record.",
    cta: "Talk integrations",
  },
  {
    id: "ai-openclaw",
    title: "AI & OpenClaw systems",
    subtitle: "Production-shaped",
    price: "From $2,000 – $10,000+",
    includes: [
      "OpenClaw setup, tool policies, and workflows under real constraints",
      "LLM integrations with logging, guardrails, and escalation paths",
      "Internal copilots and agents—not slideware demos",
      "Operator playbooks: eval hooks, rollback, and cost visibility",
    ],
    bestFor: "Teams that want AI to clear security, ops, and observability—not just a prototype.",
    cta: "Scope your AI system",
  },
  {
    id: "retainer",
    title: "Ongoing engineering support",
    subtitle: "Retainer · Low-risk entry point",
    price: "From $1,000 / month",
    includes: [
      "Continuous improvements on an agreed slice of the stack",
      "Bug fixes, performance work, and small features in sequence",
      "Release support when your team needs senior coverage",
      "Clear monthly cap and priority rules so expectations stay aligned",
    ],
    bestFor: "Teams that need senior ownership without a full-time hire—or a low-stakes way to start before committing to a larger project.",
    cta: "Start a retainer",
  },
] as const;
