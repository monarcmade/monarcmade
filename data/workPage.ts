import { selectedClientContextsInline } from "@/data/selectedClients";

/** Work index — list comes from `content/work/*.mdx`. */

export const workPageIntro = {
  eyebrow: "Representative work",
  title: "Real systems, real constraints.",
  description: `Each entry names the client and describes what shipped: stack, scope, and qualitative outcomes—no fabricated percentages. Additional production contexts on the record include ${selectedClientContextsInline}.`,
} as const;
