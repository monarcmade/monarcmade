/**
 * Homepage offerings — four practice lanes. Full catalog: `/services`.
 */

export const homepageServices = [
  {
    id: "home-build",
    category: "Build",
    title: "Product surfaces & high-performance web",
    outcome: "Systems that hold up to traffic, SEO, and scrutiny.",
    description:
      "Marketing and product experiences in Next.js and TypeScript—performance, accessibility, and observability on the trunk from day one.",
    points: [
      "Stacks marketing can ship without a ticket for every edit",
      "Auth, roles, and telemetry wired in early—not bolted on",
      "Core Web Vitals and RUM tied to revenue, not vanity scores",
    ],
    href: "/services#custom-web-applications",
    accent: false,
  },
  {
    id: "home-modernize",
    category: "Modernize",
    title: "Migrations, legacy rescue & scale-out",
    outcome: "Same URLs—or better—with cleaner bills.",
    description:
      "WordPress → Next and other stack moves, performance programs, fragile estates moved onto hosting and patterns that match how you grow.",
    points: [
      "SEO-preserving migrations with parity checks leadership can audit",
      "Profile-first work tied to conversion and COGS",
      "CDN, cache, and autoscaling sized to real traffic assumptions",
    ],
    href: "/services#wordpress-next-migration",
    accent: false,
  },
  {
    id: "home-operate",
    category: "Operate",
    title: "Hosting, pipelines & multi-cloud operations",
    outcome: "Ship often. Sleep after cutover.",
    description:
      "Topologies, CI/CD, launches, sustainment—hands-on AWS, Azure, and GCP when cost, scale, or incidents are the constraint.",
    points: [
      "Environments and pipelines that match how the org actually releases",
      "Runbooks, hypercare, and post-launch retainers",
      "Migrations and incidents with explicit rollback and owners",
    ],
    href: "/services#hosting-environments-production",
    accent: false,
  },
  {
    id: "home-intelligence",
    category: "Intelligence",
    title: "Production AI, automation & OpenClaw agents",
    outcome: "Intelligence shaped for production—not slideware.",
    description:
      "LLM integrations with budgets and evals, internal automation, OpenClaw and orchestrated agents—tools, approvals, observability.",
    points: [
      "Retrieval, citations, escalations legal can sign",
      "Queues and internal tools operations trusts",
      "OpenClaw delivery and multi-step orchestration you can run",
    ],
    href: "/services#openclaw-agent-delivery",
    accent: true,
  },
] as const;
