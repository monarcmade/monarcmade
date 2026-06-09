/* ============================================================
   ANALYTICS — Monarc Made
   Tracking hook structure. Wire up your provider here
   (Plausible, Fathom, PostHog, GA4) and every call site
   is already in place.
   ============================================================ */

import type { TrackingEvent, TrackingPayload } from "@/types";

/* Replace this with your analytics provider's track call */
function sendEvent(payload: TrackingPayload): void {
  if (process.env.NODE_ENV !== "production") {
    console.log("[analytics]", payload);
    return;
  }
  /* Example: Plausible
  window.plausible?.(payload.event, { props: payload });
  */
  /* Example: PostHog
  window.posthog?.capture(payload.event, payload);
  */
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

  serviceClick: (label: string) =>
    track("service_click", { label }),

  navClick: (label: string, href: string) =>
    track("nav_click", { label, href }),

  externalLink: (label: string, href: string) =>
    track("external_link", { label, href }),
};
