export const universityHero = {
  eyebrow: "Monarc Made University",
  title: "Learn AI from zero and build real systems.",
  description:
    "A guided AI builder cohort for beginners, founders, creatives, and professionals who want more than prompts. Learn the roadmap, build real workflows, and leave with a shipped AI project you can use for business, career growth, or client work.",
};

export const universityWhy = {
  eyebrow: "Why this exists",
  title: "Most AI content is scattered. This gives you the roadmap.",
  description:
    "You should not have to piece together random videos, tool lists, and hype threads just to understand what to learn next. Monarc University turns AI into a clear build path: learn the concepts, practice the workflows, ship the project, and know how to keep going.",
};

export const universityStats = [
  { value: "12 or 24", label: "week cohort paths" },
  { value: "6", label: "builder phases" },
  { value: "1", label: "shipped capstone" },
];

export const universitySchedule = {
  kickoffDate: "Monday, September 28, 2026",
  priorityApplicationDeadline: "Friday, September 11, 2026",
  paymentDeadline: "Friday, September 18, 2026",
  onboardingWeek: "September 21-25, 2026",
};

export const universityTimeline = [
  {
    label: "Priority applications",
    date: universitySchedule.priorityApplicationDeadline,
    detail: "Apply by this date for first review and track fit.",
  },
  {
    label: "Acceptance/payment deadline",
    date: universitySchedule.paymentDeadline,
    detail: "Accepted students lock their seat before onboarding week.",
  },
  {
    label: "Onboarding week",
    date: universitySchedule.onboardingWeek,
    detail: "Portal access, prep materials, and kickoff details go out.",
  },
  {
    label: "Cohort kickoff",
    date: universitySchedule.kickoffDate,
    detail: "The founding cohort starts live.",
  },
];

export const universityTracks = [
  {
    title: "12-Week Fast Track",
    eyebrow: "Accelerated",
    price: "$1,997 founding price",
    description:
      "For serious builders who want structure, speed, accountability, and a clear finish line.",
    details: ["6-10 hours per week", "2 live sessions per week", "3 payments of $750 available", "Capstone shipped by week 12"],
  },
  {
    title: "24-Week Guided Cohort",
    eyebrow: "Standard",
    price: "$2,997 founding price",
    description:
      "For beginners and busy professionals who want the same outcome with more room to practice.",
    details: ["3-5 hours per week", "1 live session per week", "6 payments of $550 available", "Same capstone, slower pace"],
  },
];

export const universityModules = [
  {
    number: "01",
    title: "AI Foundations",
    duration: "Weeks 1-2 / 1-4",
    description:
      "Understand what AI is, how LLMs work, what models are good at, where they fail, and how to choose the right tools.",
    topics: ["LLMs in plain English", "Tokens & context", "Tool selection", "Hallucinations"],
  },
  {
    number: "02",
    title: "Prompt Systems",
    duration: "Weeks 3-4 / 5-8",
    description:
      "Move from random prompts to repeatable systems for content, operations, business workflows, and personal productivity.",
    topics: ["Prompt structure", "Voice & style", "Structured outputs", "Workflow prompts"],
  },
  {
    number: "03",
    title: "AI APIs & Apps",
    duration: "Weeks 5-6 / 9-12",
    description:
      "Learn how AI moves from a chat window into a real tool, app, form, dashboard, or client workflow.",
    topics: ["OpenAI & Claude APIs", "Inputs & outputs", "Streaming", "Cost controls"],
  },
  {
    number: "04",
    title: "RAG & Knowledge Systems",
    duration: "Weeks 7-8 / 13-16",
    description:
      "Build assistants that answer from real documents, SOPs, websites, notes, and business knowledge instead of guessing.",
    topics: ["Embeddings", "Document chunking", "Vector search", "Answer quality"],
  },
  {
    number: "05",
    title: "Agents & Automations",
    duration: "Weeks 9-10 / 17-20",
    description:
      "Design AI workflows that can use tools, trigger actions, summarize information, and support real business operations.",
    topics: ["Tool calling", "Human review", "Slack/email workflows", "Automation design"],
  },
  {
    number: "06",
    title: "Production & Capstone",
    duration: "Weeks 11-12 / 21-24",
    description:
      "Scope, build, demo, and package a final AI project that proves you can apply the skills outside the classroom.",
    topics: ["Project scoping", "Evals", "Deployment basics", "Demo & portfolio"],
  },
];

export const universityWhoFor = [
  {
    title: "Beginners who feel behind",
    description:
      "You know AI matters, but the space feels noisy. This gives you a clean path from zero to useful.",
  },
  {
    title: "Founders and business owners",
    description:
      "You want to use AI for operations, content, client work, internal tools, or new service offers.",
  },
  {
    title: "Creatives and service providers",
    description:
      "You want practical systems for content, admin work, proposals, research, and repeatable workflows.",
  },
  {
    title: "Early builders and career switchers",
    description:
      "You want enough technical confidence to build demos, talk through projects, and create proof of skill.",
  },
];

export const universityFeatures = [
  { icon: "01", label: "Live guided learning", detail: "Clear lessons, live demos, weekly labs, and structured checkpoints." },
  { icon: "02", label: "Build-first curriculum", detail: "Every phase pushes toward a workflow, prototype, or capstone asset." },
  { icon: "03", label: "Business-aware AI", detail: "Learn AI for real use cases: content, operations, clients, and products." },
  { icon: "04", label: "Capstone proof", detail: "Leave with a project you can demo, use, package, or turn into an offer." },
];

export const universityCapstones = [
  "AI content engine",
  "Client intake assistant",
  "Lead qualification assistant",
  "Proposal generator",
  "Business document chatbot",
  "SOP knowledge assistant",
  "Customer support assistant",
  "AI-powered service dashboard",
];

export const universityOffer = [
  {
    name: "Self-Paced Starter",
    price: "$297",
    description: "Recorded lessons, templates, starter prompts, and project examples for students who want to move independently. Later price: $497.",
  },
  {
    name: "12-Week Fast Track",
    price: "$1,997",
    description: "Live cohort access, two sessions per week, labs, reviews, community, recordings, templates, and a shipped capstone. Payment plan: 3 payments of $750.",
  },
  {
    name: "24-Week Guided Cohort",
    price: "$2,997",
    description: "The same six-phase builder path with one live session per week, more practice time, and a shipped capstone. Payment plan: 6 payments of $550.",
  },
  {
    name: "VIP Build-With-Me",
    price: "Starts at $5,000",
    description: "Private support for founders, service providers, and students building a defined AI project they plan to sell, deploy, or use in their business.",
  },
];

export const universityFAQ = [
  {
    question: "When does the founding cohort launch?",
    answer:
      `The founding cohort kicks off on ${universitySchedule.kickoffDate}. Priority applications are due by ${universitySchedule.priorityApplicationDeadline}, accepted students should lock their seat by ${universitySchedule.paymentDeadline}, and onboarding runs ${universitySchedule.onboardingWeek}.`,
  },
  {
    question: "What is the founding cohort price?",
    answer:
      "The Self-Paced Starter is $297, the 12-Week Fast Track is $1,997, the 24-Week Guided Cohort is $2,997, and VIP Build-With-Me support starts at $5,000 for a defined project.",
  },
  {
    question: "What's the time commitment per week?",
    answer:
      "The fast track is built for 6-10 hours per week. The guided 24-week track is built for 3-5 hours per week, with more room to review and practice.",
  },
  {
    question: "Do I need a computer science background?",
    answer:
      "No. The program is beginner-friendly, but it is still a builder cohort. You should be willing to learn tools, follow demos, complete labs, and build a real project.",
  },
  {
    question: "Will there be live sessions or is it self-paced?",
    answer:
      "The core cohort is live-guided with recordings, labs, and review. A lighter self-paced version can exist separately for students who want lower-cost access.",
  },
  {
    question: "What will I have by the end?",
    answer:
      "You should leave with a working AI capstone, a clearer AI tool stack, repeatable workflows, prompt systems, and a demo you can use for business, career, or client conversations.",
  },
];
