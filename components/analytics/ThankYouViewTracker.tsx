"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/analytics";

export function ThankYouViewTracker({ page }: { page: string }) {
  useEffect(() => {
    analytics.thankYouView(page);
  }, [page]);

  return null;
}
