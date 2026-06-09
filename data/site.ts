import type { SiteConfig } from "@/types";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://192.168.1.68:3002";

export const siteConfig: SiteConfig = {
  name: "Monarc Made",
  tagline: "AI systems, web development & cloud platforms",
  description:
    "Monarc Made is Luis Cantu's senior-led practice: AI systems, agents, and OpenClaw-style automation, plus modern web development in Next.js and TypeScript, Shopify and web platforms, AWS · Azure · GCP, CI/CD and migrations—scoped in writing and shipped with runbooks.",
  url: siteUrl,
  author: "Luis Cantu",
  email: "newtechcantu@gmail.com",
  social: {
    github: "https://github.com/lcantu",
    linkedin: "https://linkedin.com/in/lcantu",
    twitter: "https://twitter.com/lcantu",
  },
  og: {
    title:
      "Monarc Made — AI systems, web development & cloud (AWS, Azure, GCP)",
    description:
      "Independent AI systems and web development—agents, eval gates, and handoffs your team can operate, plus Next.js, TypeScript, multi-cloud platforms, and modernization.",
    image: "/og/default.png",
  },
};

/** Footer — lead blurb under the logo (tagline lives in `siteConfig.tagline` for meta). */
export const footerIntro =
  "AI systems, web, and multi-cloud—shipped fast, handed off cleanly, so your team can run, extend, and defend them after launch.";

/** Short line for the footer rail (contact + async). */
export const footerLocationNote =
  "U.S.-based · minimal meetings · communication designed for progress, not overhead";
