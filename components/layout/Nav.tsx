"use client";

import { useState, useEffect, startTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";
import { SiteLogo } from "@/components/brand/SiteLogo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { analytics } from "@/lib/analytics";

/* Canonical focus ring — reuse everywhere in this file */
const focusRing = "focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3 rounded-sm";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color-mix(in_oklab,var(--color-bg-base)_92%,transparent)] backdrop-blur-md border-b border-(--color-border)"
          : "bg-transparent"
      }`}
    >
      <div className="container-site">
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="flex items-center justify-between h-16 md:h-20"
        >
          {/* Logo mark */}
          <SiteLogo
            priority
            className={`${focusRing} opacity-100 hover:opacity-100 transition-opacity duration-250`}
            onClick={() => analytics.navClick("Logo", "/")}
          />

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-250 ${focusRing} ${
                      isActive
                        ? "text-(--color-accent)"
                        : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
                    }`}
                    onClick={() => analytics.navClick(link.label, link.href)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop theme + CTA */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <Button
              label="Contact"
              href="/contact"
              variant="primary"
              size="sm"
              trackingLabel="nav_cta"
            />
          </div>

          {/* Mobile theme + menu */}
          <div className="flex md:hidden items-center gap-1.5 shrink-0">
            <ThemeToggle />
            <button
              className={`flex flex-col justify-center items-center w-10 h-10 gap-1.5 ${focusRing}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
            <span
              className={`block w-5 h-0.5 bg-(--color-text-primary) transition-all duration-200 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-(--color-text-primary) transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-(--color-text-primary) transition-all duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={`md:hidden fixed inset-0 top-16 bg-(--color-bg-base) z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="container-site flex flex-col gap-2 pt-8">
          <ul role="list" className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center py-3 text-xl font-medium border-b border-(--color-border) transition-colors duration-250 ${
                      isActive
                        ? "text-(--color-accent)"
                        : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
                    }`}
                    onClick={() => analytics.navClick(link.label, link.href)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="pt-6">
            <Button
              label="Contact"
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              trackingLabel="mobile_nav_cta"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
