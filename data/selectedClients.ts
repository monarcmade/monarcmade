/**
 * On-the-record experience contexts — factual, non-promotional copy.
 * AbbVie / Avanade: program or consulting environments only; wording avoids implying Monarc Made
 * was the sole contracting party to those enterprises unless you later make that explicit.
 * Homepage “Recent clients” band; names-only string reused in About / work index blurbs.
 */

export interface SelectedClientEntry {
  id: string;
  /** Display name */
  name: string;
  /** What the organization or project is — system / sector. One line. */
  system: string;
  /** Contribution scope — one line, no inflation. */
  work: string;
  /** Optional mark under `public/` — e.g. `/brand/clients/realtruck.svg` */
  logoSrc?: string;
  /** `dark` = dark chip behind the mark (e.g. white-on-black logos). */
  logoPad?: "light" | "dark";
  /** Optional Tailwind classes for the logo `<img>` (aspect / legibility per asset). */
  logoImgClass?: string;
}

export const selectedClientEntries: readonly SelectedClientEntry[] = [
  {
    id: "realtruck",
    name: "RealTruck",
    system: "Aftermarket automotive e-commerce.",
    work: "Frontend systems and product configurator features within a larger engineering team.",
    logoSrc: "/brand/clients/realtruck.svg",
    logoPad: "dark",
    logoImgClass: "max-h-7 sm:max-h-8 w-auto max-w-full object-contain object-center",
  },
  {
    id: "abbvie",
    name: "AbbVie",
    system: "Pharma enterprise environment—program-managed delivery with internal teams and partners.",
    work: "Frontend and systems-facing engineering on those program tracks.",
    logoSrc: "/brand/clients/abbvie.svg",
    logoImgClass: "max-h-6 sm:max-h-7 w-auto max-w-[min(100%,15rem)] object-contain object-center",
  },
  {
    id: "avanade",
    name: "Avanade",
    system: "Microsoft-focused consulting; enterprise programs and staffed delivery models.",
    work: "Frontend and systems work on workstreams run under Avanade program leadership and team structures.",
    logoSrc: "/brand/clients/avanade.svg",
    logoImgClass: "max-h-8 sm:max-h-9 w-auto max-w-full object-contain object-center",
  },
  {
    id: "institute-of-data",
    name: "Institute of Data",
    system: "Professional education and data-skills programs.",
    work: "Web surfaces and tooling supporting program delivery and learner-facing experiences.",
    logoSrc: "/brand/clients/institute-of-data.png",
    logoPad: "dark",
    logoImgClass: "max-h-8 sm:max-h-9 w-auto max-w-full object-contain object-center",
  },
] as const;

/** Display names only — for inline mentions elsewhere on the site. */
export const selectedClientContextsInline = selectedClientEntries.map((e) => e.name).join(" · ");
