/**
 * Homepage — when teams bring Monarc Made in.
 */

export const whyMonarcMadeIntro = {
  eyebrow: "Why Monarc Made",
  title: "When the constraint is technical and the calendar is not.",
  lead:
    "Teams bring Monarc Made in when systems are already in production, deadlines cannot move, migrations carry real risk, performance ties to revenue, or AI has to work beyond a demo. This is engineering that ships and holds—not strategy-only theater.",
} as const;

export const whyMonarcMadeScenarios = [
  {
    title: "Production is already live",
    detail: "Changes have to land without taking the business offline. The wrong partner causes an incident; the right one ships with a rollback switch already tested.",
  },
  {
    title: "Dates do not move",
    detail: "Launch, audit, or compliance windows are fixed. Missing them costs real money—sequencing and rollback are part of the deliverable, not an afterthought.",
  },
  {
    title: "Migrations carry real risk",
    detail: "A botched cutover destroys SEO rankings, breaks redirects, and loses revenue. Parity checks and disciplined cutover sequences exist for a reason.",
  },
  {
    title: "Performance ties to revenue",
    detail: "Every 100ms of LCP hurts conversion. Latency, stability, and cost show up in dashboards leadership actually reads—not just Lighthouse.",
  },
  {
    title: "AI has to clear production",
    detail: "Demos are easy. Legal, ops, and observability sign-offs are hard. Teams that skip them ship prototypes, not features.",
  },
] as const;
