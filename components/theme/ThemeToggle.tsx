"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3 rounded-md";

function IconSun({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function IconMoon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20.5 13.09A7.5 7.5 0 0 1 10.91 3.5 6.5 6.5 0 1 0 20.5 13.09Z" />
    </svg>
  );
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  if (!mounted) {
    return (
      <span
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-(--color-border) bg-(--color-bg-surface)/60 ${className}`}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-(--color-border) bg-(--color-bg-surface)/80 text-(--color-text-secondary) hover:text-(--color-accent) hover:border-(--color-border-bright) transition-colors duration-200 ${focusRing} ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <IconSun className="shrink-0" /> : <IconMoon className="shrink-0" />}
    </button>
  );
}
