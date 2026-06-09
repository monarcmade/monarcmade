import type { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "University", href: "/university" },
  { label: "About", href: "/about" },
];

export const footerLinks: { group: string; links: NavLink[] }[] = [
  {
    group: "Site",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "University", href: "/university" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    group: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/lcantu", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/in/lcantu", external: true },
      { label: "Twitter / X", href: "https://twitter.com/lcantu", external: true },
    ],
  },
  {
    group: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];
