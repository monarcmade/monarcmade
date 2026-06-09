/* ============================================================
   MONARC MADE — Global Types
   Central type definitions for all content models.
   ============================================================ */

/* --- Work / Case Studies --- */

export interface WorkMetric {
  label: string;
  value: string;
  description?: string;
}

export interface WorkFrontmatter {
  title: string;
  slug: string;
  summary: string;
  client: string;
  industry: string;
  year: number;
  tags: string[];
  services: string[];
  metrics: WorkMetric[];
  featured: boolean;
  published: boolean;
  coverImage?: string;
  ogImage?: string;
  readingTime?: string;
  /** Optional: related production context (e.g. program or adjacent system). */
  contextAnchors?: string;
  /** Qualitative outcome lines when numeric metrics are not used. */
  outcomesBrief?: string[];
}

export interface WorkPost extends WorkFrontmatter {
  content: string;
}

/** Case list / cards — omit MDX body so client bundles stay small. */
export type WorkPostSummary = Omit<WorkPost, "content">;

/* --- Blog / Resources --- */

export interface BlogFrontmatter {
  title: string;
  slug: string;
  summary: string;
  category: string;
  date: string;
  tags: string[];
  audience: string;
  offer: string;
  featured?: boolean;
  published?: boolean;
  ogImage?: string;
}

export interface BlogPost extends BlogFrontmatter {
  readingTime: string;
  content: string;
}

export type BlogPostSummary = Omit<BlogPost, "content">;

/* --- Services --- */

export interface ServiceFeature {
  text: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;           /* Lucide icon name or emoji */
  category: ServiceCategory;
  cta?: string;
  highlighted?: boolean;
}

/** Strategic service pillars — full catalog in `data/services.ts`. */
export type ServiceCategory =
  | "surfaces"
  | "delivery"
  | "cloud"
  | "modernize"
  | "intelligence"
  | "agents";

/* --- Navigation --- */

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

/* --- Site Config --- */

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
  email: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  og: {
    title: string;
    description: string;
    image: string;
  };
}

/* --- Testimonials (future-ready) --- */

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  featured?: boolean;
}

/* --- Trust Signals --- */

export interface TrustStat {
  label: string;
  value: string;
  description?: string;
}

/* --- CTA --- */

export type CTAVariant = "primary" | "secondary" | "ghost";

export interface CTAConfig {
  label: string;
  href: string;
  variant: CTAVariant;
  external?: boolean;
  trackingId?: string;   /* analytics event identifier */
}

/* --- Analytics event types (readiness) --- */

export type TrackingEvent =
  | "cta_click"
  | "project_view"
  | "contact_submit"
  | "university_apply"
  | "service_click"
  | "nav_click"
  | "external_link";

export interface TrackingPayload {
  event: TrackingEvent;
  label?: string;
  href?: string;
  slug?: string;
}
