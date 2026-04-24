/**
 * Homepage editorial — trust strip teasers, process, footer accents.
 */

/** Trust band — qualitative delivery types (no fabricated counts). */
export const recentWorkIncludes = [
  "Multi-site WordPress migrations toward modern stacks.",
  "AWS hosting, deployment restructuring, and operational hardening.",
  "Frontend systems for large e-commerce and business platforms.",
  "Performance debugging and optimization under real traffic.",
  "AI integrations and internal workflow automation in production constraints.",
  "Embedded delivery with client teams—planning, review gates, releases, and cutover support.",
] as const;

/** Trust bar — “Stack & tools” copy and chips (homepage TrustBar). */
export const stackToolsSection = {
  pillars: [
    {
      label: "Agents & models",
      body: "The practice ships OpenClaw, model APIs, and agents where they change how work gets done—tool calls, retrieval over your sources, eval gates, and human-in-the-loop steps when policy requires it.",
    },
    {
      label: "Surfaces & platforms",
      body: "Most delivery still lives in surfaces and platforms: Next.js and TypeScript, clear component and data boundaries, performance and accessibility treated as defaults—not a late pass.",
    },
    {
      label: "What production runs on",
      body: "Under that sits what production actually runs on: data models and APIs, infrastructure as code, CI/CD and release discipline, and AWS, Azure, or GCP with observability and ownership your team and compliance can run.",
    },
  ] as const,
  chips: [
    "OpenClaw",
    "Production AI & agents",
    "Next.js",
    "TypeScript",
    "Major clouds",
    "CI/CD & releases",
    "Terraform / IaC",
    "Observability & ops",
  ] as const,
} as const;

export const howWeWorkIntro = {
  eyebrow: "Practice",
  title: "Delivery you can plan around.",
  description:
    "Constraint first, smallest system that clears it, slices with proof, handoff with runbooks—the same shape on every Monarc Made engagement.",
} as const;

export const processPhases = [
  {
    step: "01",
    title: "Constraint in writing",
    description:
      "Stack, stakeholders, and the success metric—documented first so scope does not drift two sprints in.",
  },
  {
    step: "02",
    title: "Architecture you can argue with",
    description:
      "Boundaries, failure modes, observability contracts. If it is not diagrammed, it is not agreed.",
  },
  {
    step: "03",
    title: "Ship in slices, prove each slice",
    description:
      "Staging gates, profiling, feature flags—performance and security stay on the trunk.",
  },
  {
    step: "04",
    title: "Cutover + handoff you own",
    description:
      "Rollback paths, KPI dashboards, runbooks—so on-call is not stuck waiting on ad-hoc access.",
  },
] as const;
