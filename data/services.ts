import type { Service, ServiceCategory } from "@/types";

/**
 * Service catalog — Monarc Made technical offerings.
 * Six pillars: surfaces → delivery → cloud → modernize → intelligence → agents.
 */

export const serviceCategoryOrder: ServiceCategory[] = [
  "surfaces",
  "delivery",
  "cloud",
  "modernize",
  "intelligence",
  "agents",
];

export const serviceCategoryPresentation: Record<
  ServiceCategory,
  { label: string; description: string }
> = {
  surfaces: {
    label: "Digital products & surfaces",
    description:
      "Marketing and business sites, custom web apps, and high-performance frontends—built so design, SEO, and speed survive real traffic.",
  },
  delivery: {
    label: "Hosting, delivery & operations",
    description:
      "Hosting topologies, CI/CD, production launches, and ongoing technical support—so releases are repeatable and incidents have owners.",
  },
  cloud: {
    label: "Cloud & platform engineering",
    description:
      "AWS, Azure, and Google Cloud: migrations, modernization, app and server setup, and troubleshooting when the bill or the outage is the headline.",
  },
  modernize: {
    label: "Modernization & migration",
    description:
      "WordPress → Next.js and other stack moves, legacy cleanup, performance programs, and fragile sites moved onto scalable hosting and patterns.",
  },
  intelligence: {
    label: "Applied AI & automation",
    description:
      "Production AI integrations, internal workflows, automation systems, and custom tools that remove manual work—with budgets, evals, and audit trails.",
  },
  agents: {
    label: "Agent systems & OpenClaw",
    description:
      "OpenClaw setups, private and local agents, orchestration with real tools, and business workflow agents shaped for production—not demo scripts.",
  },
};

export const services: Service[] = [
  /* --- Surfaces --- */
  {
    id: "marketing-custom-web",
    category: "surfaces",
    icon: "◇",
    title: "Marketing & business websites",
    description:
      "Credible marketing stacks and business sites: fast LCP, accessible components, and CMS or headless patterns your marketing team can actually run.",
    features: [
      "Next.js marketing sites, landing systems, and componentized brand pages",
      "SEO, structured data, and analytics events tied to conversion—not vanity charts",
      "Integrations: CRM forms, MAP, consent, and edge-friendly personalization where justified",
    ],
  },
  {
    id: "custom-web-applications",
    category: "surfaces",
    icon: "◆",
    title: "Custom web applications",
    description:
      "Authenticated products, ops dashboards, and multi-tenant B2B surfaces—TypeScript-first, with APIs and data models your team can extend.",
    features: [
      "Auth, roles, and audit-friendly admin paths",
      "REST, GraphQL, or tRPC with versioning and contract tests",
      "Observability baked in: traces, errors, and user-impacting SLOs",
    ],
    highlighted: true,
  },
  {
    id: "performance-frontend-systems",
    category: "surfaces",
    icon: "△",
    title: "High-performance frontends & modern rebuilds",
    description:
      "Rebuilds from older SPAs and monolith UIs—bundle discipline, streaming, and edge caching where it earns its keep, measured in RUM and Core Web Vitals.",
    features: [
      "INP / LCP / CLS programs with before-after dashboards leadership already reads",
      "SSR, edge, and partial hydration tradeoffs documented per route",
      "Image pipelines, font strategy, and third-party script containment",
    ],
  },

  /* --- Delivery --- */
  {
    id: "hosting-environments-production",
    category: "delivery",
    icon: "▣",
    title: "Custom hosting & production environments",
    description:
      "Environments that match prod constraints: secrets, TLS, network boundaries, and parity so staging catches what used to blow up on Friday.",
    features: [
      "Vercel, containers, or VM topologies chosen for your compliance and traffic profile",
      "Secrets management, key rotation, and least-privilege service accounts",
      "Blue/green or canary patterns with rollback switches operators can hit under stress",
    ],
  },
  {
    id: "deployment-pipelines",
    category: "delivery",
    icon: "⌁",
    title: "Deployment pipelines & release engineering",
    description:
      "Pipelines that gate quality: previews, automated checks, and promote-to-prod flows that reduce hero deploys without slowing product velocity.",
    features: [
      "GitHub Actions, GitLab CI, or cloud-native build systems with artifact promotion",
      "Database migration hooks, smoke suites, and feature-flag coordination",
      "Release notes, change logs, and on-call handoff tied to each deploy",
    ],
  },
  {
    id: "launches-ongoing-support",
    category: "delivery",
    icon: "◉",
    title: "Production launches & ongoing technical support",
    description:
      "Cutover planning, hypercare windows, and sustainment retainers—so the week after launch is owned, not improvised in Slack threads.",
    features: [
      "Launch runbooks, traffic ramp plans, and rollback rehearsals",
      "Post-launch monitoring: SLOs, paging policies, and incident comms templates",
      "Retainer-style support for patches, dependency hygiene, and infra drift control",
    ],
  },

  /* --- Cloud --- */
  {
    id: "aws-support-engineering",
    category: "cloud",
    icon: "☁",
    title: "AWS support & delivery",
    description:
      "Accounts, networking, IAM, and cost—hands-on when p95 latency or the monthly bill is the incident, with Terraform or CDK where teams already live.",
    features: [
      "VPC design, private connectivity, and hardened baseline modules",
      "Rightsizing, autoscaling, and reserved capacity recommendations with finance-friendly narratives",
      "Break-glass access, audit trails, and guardrails for production changes",
    ],
    highlighted: true,
  },
  {
    id: "azure-gcp-platform",
    category: "cloud",
    icon: "◎",
    title: "Azure & Google Cloud platform work",
    description:
      "Multi-cloud and hybrid reality: landing zones, identity federation, and the troubleshooting that happens when workloads span vendors.",
    features: [
      "Azure App Service / AKS and GCP Cloud Run / GKE patterns matched to your org",
      "Cross-cloud DNS, TLS, and CDN routing with clear failover behavior",
      "Cost and quota visibility so surprises show up in dashboards, not invoices",
    ],
  },
  {
    id: "cloud-migration-modernization",
    category: "cloud",
    icon: "⎔",
    title: "Cloud migrations & modernization",
    description:
      "Datacenter exits, account consolidation, and refactor-friendly migrations—sequenced so risk drops every week, not in one big bang.",
    features: [
      "Workload discovery, dependency mapping, and cutover sequencing",
      "Data movement with validation jobs and reconciliation reports",
      "Post-migration hardening: backups, DR drills, and patch cadence",
    ],
  },

  /* --- Modernize --- */
  {
    id: "wordpress-next-migration",
    category: "modernize",
    icon: "↻",
    title: "WordPress → Next.js & custom frontend rebuilds",
    description:
      "Editor workflows preserved where they matter, performance and security where they hurt—redirect matrices and parity checks so SEO does not become a regret.",
    features: [
      "Content modeling, preview URLs, and incremental cutover strategies",
      "Redirect and canonical governance; structured data regression checks",
      "Editor training and playbooks so marketing is not blocked on engineering",
    ],
  },
  {
    id: "legacy-performance-rescue",
    category: "modernize",
    icon: "▲",
    title: "Legacy modernization & performance rescue",
    description:
      "Slow, fragile sites and tangled deploys—profiled, bounded, and fixed with evidence your team can defend in postmortems and board updates.",
    features: [
      "Hot-path profiling across app, DB, and edge; fix lists ranked by user and revenue impact",
      "Stability work: flaky tests, noisy alerts, and deploy reliability",
      "Incremental strangler patterns when the monolith cannot move in one jump",
    ],
  },
  {
    id: "scalable-hosting-moves",
    category: "modernize",
    icon: "⊞",
    title: "Moves to scalable hosting & infrastructure",
    description:
      "When traffic, compliance, or COGS outgrow the old box—CDN, cache, autoscaling, and database tiers sized to real load, not spreadsheet fiction.",
    features: [
      "Traffic and growth assumptions documented before spend commits",
      "Cache and invalidation design that survives campaigns and launches",
      "Load testing and capacity plans with explicit failure modes",
    ],
  },

  /* --- Intelligence --- */
  {
    id: "ai-integrations-production",
    category: "intelligence",
    icon: "◈",
    title: "AI integrations for production systems",
    description:
      "LLM features behind your data and policies—rate limits, eval hooks, and UX that makes wrong answers recoverable instead of reputation damage.",
    features: [
      "OpenAI / Anthropic patterns with retrieval, citations, and escalation paths",
      "Token and cost budgets with anomaly detection and kill switches",
      "Tracing and logging shaped for security review—not black-box prompts",
    ],
    highlighted: true,
  },
  {
    id: "internal-ai-workflows",
    category: "intelligence",
    icon: "□",
    title: "Internal AI workflows & copilots",
    description:
      "Support, ops, and knowledge work augmented with models that cite internal docs—reducing handle time without inventing policy.",
    features: [
      "Chunking, re-rank, and permission-aware retrieval",
      "Human-in-the-loop queues when confidence or compliance requires it",
      "Pilot metrics: deflection, escalation quality, and legal sign-off checkpoints",
    ],
  },
  {
    id: "automation-systems",
    category: "intelligence",
    icon: "⧉",
    title: "Automation systems & custom internal tools",
    description:
      "Queues, schedulers, and glue code that replace brittle spreadsheets—idempotent jobs, dead-letter handling, and alerts people act on.",
    features: [
      "Event-driven workers (SQS, Pub/Sub, webhooks) with replay tooling",
      "Slack / email notifications with actionable payloads and ownership",
      "Backfills, reconciliation reports, and operator runbooks",
    ],
  },

  /* --- Agents --- */
  {
    id: "openclaw-agent-delivery",
    category: "agents",
    icon: "⎈",
    title: "OpenClaw setups & delivery",
    description:
      "Practical OpenClaw installations: profiles, tool policies, and workflows so agents stay useful under real business constraints—not toy demos.",
    features: [
      "Environment layout, secrets, and upgrade paths that match your risk profile",
      "Tool connections to internal APIs with authZ boundaries operators understand",
      "Playbooks for prompts, evals, and rollback when a model or tool misbehaves",
    ],
    highlighted: true,
  },
  {
    id: "private-local-agents",
    category: "agents",
    icon: "◐",
    title: "Private & local agent systems",
    description:
      "VPC-bound or air-gapped agent stacks when data residency matters—still tool-connected where it is safe, with logging that auditors can follow.",
    features: [
      "Model hosting choices aligned to latency, cost, and compliance",
      "Memory and context policies that prevent cross-tenant leakage",
      "Operator controls: approvals, dry runs, and circuit breakers",
    ],
  },
  {
    id: "agent-orchestration-tools",
    category: "agents",
    icon: "✦",
    title: "Agent orchestration & tool-connected workflows",
    description:
      "Multi-step agent flows with approvals, branching, and observability across runs—so “agent” is a system, not a single brittle prompt.",
    features: [
      "Orchestration patterns: planner, workers, reviewers, and handoffs",
      "Tool schemas, timeouts, and partial failure behavior defined up front",
      "Dashboards for run success, cost, and human override rates",
    ],
  },
];

export const servicesByCategory: Record<ServiceCategory, Service[]> = {
  surfaces: services.filter((s) => s.category === "surfaces"),
  delivery: services.filter((s) => s.category === "delivery"),
  cloud: services.filter((s) => s.category === "cloud"),
  modernize: services.filter((s) => s.category === "modernize"),
  intelligence: services.filter((s) => s.category === "intelligence"),
  agents: services.filter((s) => s.category === "agents"),
};
