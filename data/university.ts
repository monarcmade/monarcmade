export const universityHero = {
  eyebrow: "Monarc Made University",
  title: "Learn AI from first principles — and build things that matter.",
  description:
    "A structured curriculum that takes you from zero to production-ready AI engineering. No fluff, no hype — just the systems thinking, tools, and hands-on reps that close the gap between 'I've heard of it' and 'I shipped it.'",
};

export const universityWhy = {
  eyebrow: "Why this exists",
  title: "Most AI content teaches you to copy. This teaches you to build.",
  description:
    "There's no shortage of tutorials that show you how to paste an API key and get a chatbot running. That's not enough. This curriculum is built around the mental models, architecture decisions, and real-world constraints you'll face when AI moves from experiment to production.",
};

export const universityModules = [
  {
    number: "01",
    title: "Foundations of AI & LLMs",
    duration: "2 weeks",
    description:
      "How large language models actually work — tokenization, embeddings, attention, and inference. Enough theory to debug what breaks in practice.",
    topics: ["Transformers & attention", "Tokens & context windows", "Model families & tradeoffs", "Prompting fundamentals"],
  },
  {
    number: "02",
    title: "Prompt Engineering & Chain Design",
    duration: "2 weeks",
    description:
      "Systematic approaches to writing prompts that hold up under variation. Few-shot, chain-of-thought, tool use, and structured outputs.",
    topics: ["Few-shot & zero-shot", "Chain-of-thought reasoning", "Structured JSON outputs", "Eval-driven iteration"],
  },
  {
    number: "03",
    title: "Building with APIs",
    duration: "3 weeks",
    description:
      "Integrating Claude, OpenAI, and open-source models into real applications — auth, rate limits, streaming, cost control, and error handling.",
    topics: ["Anthropic & OpenAI SDKs", "Streaming responses", "Cost & token management", "Caching strategies"],
  },
  {
    number: "04",
    title: "RAG & Knowledge Systems",
    duration: "3 weeks",
    description:
      "Retrieval-augmented generation from scratch — embeddings, vector databases, chunking strategies, and hybrid search.",
    topics: ["Embeddings & similarity", "Vector DBs (Pinecone, pgvector)", "Chunking & retrieval", "Re-ranking & context assembly"],
  },
  {
    number: "05",
    title: "AI Agents & Tool Use",
    duration: "3 weeks",
    description:
      "Designing agents that can reason across steps, call external tools, and recover from errors without going off the rails.",
    topics: ["Tool calling & function use", "Agent loops & state", "Claude Agent SDK", "Multi-agent orchestration"],
  },
  {
    number: "06",
    title: "Production & Deployment",
    duration: "3 weeks",
    description:
      "Taking AI features from notebook to shipped — observability, evals, latency optimization, and responsible deployment.",
    topics: ["Evals & regression testing", "Observability & logging", "Latency & throughput", "Safety & guardrails"],
  },
];

export const universityWhoFor = [
  {
    title: "Developers new to AI",
    description:
      "You can ship software but haven't worked with LLMs. This gets you to production-ready faster than any bootcamp.",
  },
  {
    title: "Engineers moving into AI roles",
    description:
      "You know the backend. This fills in the model mechanics, tooling, and evaluation practices the job actually requires.",
  },
  {
    title: "Founders building AI products",
    description:
      "Enough depth to make sound architectural decisions — and to hold your engineering team accountable to real quality bars.",
  },
  {
    title: "Technical career switchers",
    description:
      "Coming from data, design, or product? This gives you the engineering foundation to contribute to AI teams immediately.",
  },
];

export const universityFeatures = [
  { icon: "🎯", label: "Project-based learning", detail: "Every module ends with a real build, not a quiz." },
  { icon: "🔁", label: "Iterative curriculum", detail: "Updated as the field moves — not frozen at a release date." },
  { icon: "💬", label: "Community access", detail: "Private cohort where you can share work and get feedback." },
  { icon: "📋", label: "Written SOW & clear expectations", detail: "You'll know exactly what you're getting before you enroll." },
];

export const universityFAQ = [
  {
    question: "When does the curriculum launch?",
    answer:
      "The first cohort is being finalized now. Join the waitlist and you'll be the first to know the date, price, and what's included.",
  },
  {
    question: "What's the time commitment per week?",
    answer:
      "Designed for 6–10 hours per week. Heavy enough to build real understanding, light enough to complete alongside a full-time role.",
  },
  {
    question: "Do I need a computer science background?",
    answer:
      "No. You need comfort writing code — Python or JavaScript — and curiosity about how things work. The curriculum builds the rest.",
  },
  {
    question: "Will there be live sessions or is it self-paced?",
    answer:
      "A hybrid: async lessons you move through on your schedule, plus optional live office hours for questions and reviews.",
  },
  {
    question: "What if I already know some AI basics?",
    answer:
      "Modules are scoped so you can start where you are. If you have solid foundations, you can accelerate through the early material and go deep on agents and production deployment.",
  },
];
