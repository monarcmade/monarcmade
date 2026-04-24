/**
 * Services page — intro and FAQ. Full catalog lives in `data/services.ts`.
 */

export const servicesPageIntro = {
  eyebrow: "Capabilities",
  title: "Six pillars. One Monarc Made thread.",
  description:
    "Structured offerings—not a flat menu. Surfaces and apps, how you ship and host them, multi-cloud reality, modernization when debt is the risk, applied AI and automation, and agent systems including OpenClaw. Most work blends pillars; the catalog shows where depth lives.",
} as const;

export const servicesEngagementFormatsIntro = {
  eyebrow: "How engagements run",
  title: "Contract and cadence, clear before the deep catalog",
  description:
    "Same engineering bar for fixed delivery, embedding with your team, advisory-only, or sustain after launch. Use this to align procurement and pace—the pillars below are where the work lands.",
} as const;

export const servicesFaq = [
  {
    q: "Do you only ship net-new builds?",
    a: "No—many engagements are modernization, cloud remediation, or production support after launch. Build and sustain are both in scope when it keeps the business moving.",
  },
  {
    q: "How do you work across AWS, Azure, and GCP?",
    a: "Multi-cloud and hybrid are common constraints. Monarc Made sequences around risk—identity, networking, data gravity—then concrete remediation or migration slices with rollback you can rehearse.",
  },
  {
    q: "What does OpenClaw delivery include?",
    a: "Install and environment layout, tool policies, upgrade paths, and operator playbooks—treated like any other production system, not a one-off script.",
  },
  {
    q: "Can you embed with our internal team?",
    a: "Yes—two to three days per week inside your repos and release process is a typical pattern when you need senior ownership without a full-time hire.",
  },
  {
    q: "How does IP and code ownership work?",
    a: "All work-for-hire code transfers to you at handoff. No residual licenses, no framework lock-in. Monarc Made retains the right to reference the engagement scope (not the code) in portfolio summaries, subject to any NDA.",
  },
  {
    q: "What is a typical engagement length?",
    a: "Project engagements run 2–12 weeks depending on scope. Retainers are month-to-month with 30-day notice. Discovery calls take 30–45 minutes and end with a written scope proposal—not a vague estimate.",
  },
  {
    q: "Do you subcontract?",
    a: "Rarely and only with disclosure. Most work is delivered directly. If a specialized dependency is needed (e.g. a licensed design system or a domain-specific API integration), it is named in the SOW before work begins.",
  },
  {
    q: "What is the smallest way to start?",
    a: "A WordPress support retainer ($250/month) or a scoped rescue spike (from $1,500) is the lowest-friction entry. Both begin with a discovery call and a written scope—no surprise invoices.",
  },
] as const;
