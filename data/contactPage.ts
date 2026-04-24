/**
 * Contact page — intake copy and structure. Wire `ContactForm` to `/api/contact` when ready.
 */

export const contactPageIntro = {
  eyebrow: "Contact",
  title: "Send a brief Monarc Made can answer in one pass.",
  description:
    "Include stack, users, timeline, and the metric that has to move. The more concrete the constraint, the faster you get a useful reply—including when the answer is “not a fit right now.”",
} as const;

export const contactExpectations = [
  "Weekday replies within 24 hours for serious inbound.",
  "First reply covers fit, rough sequencing, and what a discovery call would cover.",
  "NDA-friendly: happy to sign yours or use a lightweight mutual template.",
  "Typical discovery: 30–45 minutes, with a short async brief beforehand so time is well spent.",
  "No RFP cattle calls—if the problem is not technical, you hear that early.",
] as const;

export const contactResponsePlaybook = [
  {
    title: "Same day",
    detail: "Auto-acknowledgment and calendar link when slots are open.",
  },
  {
    title: "48 hours",
    detail: "Written take: fit, risks, and what a first slice could look like.",
  },
  {
    title: "Before code",
    detail: "SOW or milestone map—no surprise invoices or vague retainers.",
  },
] as const;

export const contactSampleBrief = [
  "Primary user / traffic profile (e.g. “B2B, ~400k MAU, US-only”).",
  "Current stack and what is painful (deploys, perf, vendor lock-in, AI guardrails).",
  "Definition of done: numbers or behaviors, not “make it better.”",
  "Budget band and hard deadlines—helps sequence honestly.",
] as const;

export const contactFitSignals = {
  strong: [
    "Web surfaces or custom apps where performance, SEO, or conversion is on the line.",
    "Hosting, CI/CD, or multi-cloud (AWS / Azure / GCP) work with production stakes.",
    "Migrations, modernization, or AI / agent systems that need measurable guardrails.",
  ],
  weak: [
    "Greenfield mobile-native apps with no web surface.",
    "Staff aug with no roadmap owner or no authority to change architecture.",
  ],
} as const;

export const contactFaq = [
  {
    q: "Do you work US time zones only?",
    a: "Yes—async-first across U.S. time zones; limited overlap with EU for established clients.",
  },
  {
    q: "What does a first slice usually look like?",
    a: "Often 2–3 weeks: instrument the pain, ship one measurable improvement, and leave a runbook so your team can continue without a hero.",
  },
  {
    q: "Fixed bid or time and materials?",
    a: "Both: small rescue spikes tend to be T&M; bounded rebuilds can be milestone-based once scope is frozen.",
  },
] as const;

export const contactFormCopy = {
  formTitle: "Project inquiry",
  successTitle: "Message received",
  successBody:
    "Expect a reply within one business day. First response covers fit, rough sequencing, and what a discovery call would cover.",
  placeholders: {
    name: "Alex Rivera",
    email: "you@company.com",
    company: "Your organization",
    message:
      "Example: Next.js 15 storefront, checkout p95 regressed after peak season. Target −200ms LCP on PLP, RUM in Datadog. Hard launch mid-Q2. Who owns infra today?",
  },
} as const;
