"use client";

import { useEffect, useRef } from "react";
import { analytics } from "@/lib/analytics";

interface FunnelViewTrackerProps {
  section: string;
  page: string;
  className?: string;
}

export function FunnelViewTracker({
  section,
  page,
  className = "h-px w-px opacity-0",
}: FunnelViewTrackerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || tracked.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || tracked.current) return;
        tracked.current = true;
        analytics.sectionView(section, page);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -35% 0px", threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [page, section]);

  return <span ref={ref} aria-hidden="true" className={className} />;
}
