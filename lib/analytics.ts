/* ============================================================
   ANALYTICS — Monarc Made
   Tracking hook structure. Wire up your provider here
   (Plausible, Fathom, PostHog, GA4) and every call site
   is already in place.
   ============================================================ */

import type { TrackingEvent, TrackingPayload } from "@/types";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function sendEvent(payload: TrackingPayload): void {
  if (process.env.NODE_ENV !== "production") {
    console.log("[analytics]", payload);
    return;
  }

  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", payload.event, {
    event_category: "site_engagement",
    event_label: payload.label ?? payload.section ?? payload.slug ?? payload.href,
    label: payload.label,
    href: payload.href,
    slug: payload.slug,
    section: payload.section,
    page: payload.page,
  });
}

export function track(event: TrackingEvent, data?: Omit<TrackingPayload, "event">): void {
  sendEvent({ event, ...data });
}

/* Convenience helpers — call these from components */

export const analytics = {
  ctaClick: (label: string, href: string) =>
    track("cta_click", { label, href }),

  projectView: (slug: string) =>
    track("project_view", { slug }),

  contactSubmit: () =>
    track("contact_submit"),

  universityApply: () =>
    track("university_apply"),

  universityApplyStart: () =>
    track("university_apply_start", { label: "founding_cohort_application" }),

  contactFormStart: () =>
    track("contact_form_start", { label: "contact_form" }),

  sectionView: (section: string, page: string) =>
    track("section_view", { section, page }),

  thankYouView: (page: string) =>
    track("thank_you_view", { page }),

  serviceClick: (label: string) =>
    track("service_click", { label }),

  navClick: (label: string, href: string) =>
    track("nav_click", { label, href }),

  externalLink: (label: string, href: string) =>
    track("external_link", { label, href }),
};
