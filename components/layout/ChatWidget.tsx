"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { chatWidgetCopy } from "@/data/chatWidget";
import { analytics } from "@/lib/analytics";

export function ChatWidget() {
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => launcherRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      const root = panelRef.current;
      const primary = root?.querySelector<HTMLElement>(`a[href="${chatWidgetCopy.primaryHref}"]`);
      primary?.focus();
    }, reduceMotion ? 0 : 80);
    return () => window.clearTimeout(t);
  }, [open, reduceMotion]);

  const toggle = () => {
    setOpen((v) => {
      const next = !v;
      if (next) analytics.ctaClick("chat_widget_open", "/contact");
      return next;
    });
  };

  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`[${siteConfig.name}] Project inquiry`)}`;

  return (
    <div
      className="fixed z-[60] flex flex-col items-end gap-2 pointer-events-none"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
        right: "max(1.25rem, env(safe-area-inset-right, 0px))",
      }}
    >
      <AnimatePresence>
        {open ? (
          <motion.div
            key="panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto w-[min(calc(100vw-2.5rem),20rem)] rounded-2xl border border-[color-mix(in_oklab,var(--color-accent)_28%,var(--color-border))] bg-[color-mix(in_oklab,var(--color-bg-surface)_96%,transparent)] shadow-[0_20px_56px_rgba(0,0,0,0.45),0_0_0_1px_rgba(0,200,255,0.08),0_0_40px_var(--color-accent-glow)] backdrop-blur-md overflow-hidden"
          >
            <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-3 border-b border-(--color-border)">
              <h2 id={titleId} className="m-0 text-sm font-bold text-(--color-text-primary) leading-snug pr-2">
                {chatWidgetCopy.title}
              </h2>
              <button
                type="button"
                onClick={close}
                className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-(--color-text-muted) hover:text-(--color-text-primary) hover:bg-(--color-bg-elevated) hover:border-(--color-border) transition-colors focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-2"
                aria-label={chatWidgetCopy.launcherCloseAria}
              >
                <IconClose className="h-4 w-4" />
              </button>
            </div>
            <p className="m-0 px-4 py-3 text-xs text-(--color-text-secondary) leading-relaxed">
              {chatWidgetCopy.body}
            </p>
            <div className="flex flex-col gap-2 px-4 pb-4">
              <Link
                href={chatWidgetCopy.primaryHref}
                onClick={() => {
                  analytics.ctaClick("chat_widget_contact", chatWidgetCopy.primaryHref);
                  close();
                }}
                className="inline-flex items-center justify-center rounded-xl bg-(--color-accent) text-(--color-text-inverse) text-sm font-semibold px-4 py-2.5 shadow-[0_0_20px_var(--color-accent-glow)] hover:bg-(--color-accent-dim) transition-colors focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-2"
              >
                {chatWidgetCopy.primaryCta}
              </Link>
              <a
                href={mailto}
                onClick={() => analytics.externalLink("chat_widget_email", mailto)}
                className="inline-flex items-center justify-center rounded-xl border border-(--color-border-bright) text-sm font-medium text-(--color-text-primary) px-4 py-2 hover:border-(--color-accent) hover:text-(--color-accent) transition-colors focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-2"
              >
                {chatWidgetCopy.emailCta}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        ref={launcherRef}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? chatWidgetCopy.launcherCloseAria : chatWidgetCopy.launcherLabel}
        className={`pointer-events-auto inline-flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_24px_var(--color-accent-glow)] border border-[color-mix(in_oklab,var(--color-accent)_35%,var(--color-border))] bg-(--color-bg-surface) text-sm font-semibold text-(--color-text-primary) hover:border-(--color-accent) hover:text-(--color-accent) transition-[color,box-shadow,border-color,width] duration-200 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3 ${
          open ? "h-12 w-12 rounded-full shrink-0" : "gap-2 rounded-full px-4 py-2.5"
        }`}
      >
        {open ? (
          <IconClose className="h-5 w-5 shrink-0" />
        ) : (
          <>
            <IconChat className="h-4 w-4 shrink-0 text-(--color-accent)" />
            <span>{chatWidgetCopy.launcherLabel}</span>
          </>
        )}
      </button>
    </div>
  );
}

function IconChat({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}
