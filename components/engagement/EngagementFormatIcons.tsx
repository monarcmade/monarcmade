/** Icons for the four engagement formats (Project → Sustain). */

export const engagementFormatIcons = [
  <svg key="p" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
    <path d="M4 7h16v10H4z" strokeLinejoin="round" />
    <path d="M8 11h8M8 14h5" strokeLinecap="round" />
  </svg>,
  <svg key="e" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <path d="M9 9h6v6H9z" opacity="0.55" />
  </svg>,
  <svg key="a" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
    <circle cx="12" cy="12" r="7" />
    <path d="M12 5v3M12 16v3M5 12h3M16 12h3" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>,
  <svg key="s" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
    <path d="M5 12h4l2-6 3 12 2-6h3" strokeLinejoin="round" strokeLinecap="round" />
  </svg>,
] as const;
