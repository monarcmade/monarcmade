/**
 * Homepage — how Monarc Made structures delivery (not attributed quotes).
 */

export const deliverySignalsIntro = {
  eyebrow: "How engagements read",
  title: "What stays true after handoff.",
  description:
    "No borrowed client quotes—how Monarc Made runs work when scope, risk, and ownership are non-negotiable.",
} as const;

export const deliverySignals = [
  {
    title: "Constraints before screens",
    detail: "Written success criteria and failure modes before the first substantial PR—scope debates happen once, not every sprint.",
  },
  {
    title: "Evidence on the trunk",
    detail: "Profiling, security gates, and feature flags on the main delivery path—not a hardening phase bolted on at the end.",
  },
  {
    title: "Handoff the team runs",
    detail: "Dashboards on agreed KPIs, runbooks, and rollback drills so operations does not depend on opaque vendor access.",
  },
  {
    title: "Representative write-ups",
    detail: "Case studies use composite labels; architecture and tradeoffs mirror production-grade work under NDA—judge fit from the engineering, not the logo.",
  },
] as const;
