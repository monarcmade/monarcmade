import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { StudentHubLogin } from "@/components/sections/StudentHubLogin";
import { StudentHubLogout } from "@/components/sections/StudentHubLogout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { universityModules, universitySchedule, universityTimeline } from "@/data/university";
import { siteConfig } from "@/data/site";
import { studentHubCookieName, getStudentHubToken, verifyStudentHubToken } from "@/lib/studentHubAuth";
import { buildMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  title: "Student Hub",
  description: "Private Monarc University student hub for cohort materials, live session links, and onboarding details.",
  canonical: `${siteConfig.url}/university/student-hub`,
  noIndex: true,
});

const hubLinks = [
  {
    title: "Live session link",
    label: "Add Zoom or Meet link",
    detail: "Paste the recurring session link here once live session logistics are locked.",
  },
  {
    title: "Calendar invite",
    label: "Add calendar link",
    detail: "Use this for the recurring Fast Track and Guided Cohort session blocks.",
  },
  {
    title: "Resource folder",
    label: "Add Drive or Notion link",
    detail: "Store templates, lab files, replays, and student downloads in one place.",
  },
];

const weekOne = [
  "Welcome packet and cohort expectations",
  "AI foundations overview",
  "Model basics: tokens, context, hallucinations, and tool selection",
  "First lab: turn one real workflow into an AI-assisted process",
];

export default async function StudentHubPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(studentHubCookieName)?.value;
  const configured = Boolean(getStudentHubToken());
  const hasAccess = verifyStudentHubToken(accessToken);

  if (!hasAccess) {
    return (
      <div className="inner-page">
        <Section>
          <Container size="lg">
            <StudentHubLogin configured={configured} />
          </Container>
        </Section>
      </div>
    );
  }

  return (
    <div className="inner-page">
      <Section>
        <Container size="lg">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-(--color-accent)">
                  Monarc University
                </p>
                <h1 className="mt-3 text-4xl font-bold leading-tight text-(--color-text-primary) md:text-5xl">
                  Student hub
                </h1>
                <p className="mt-4 text-base leading-relaxed text-(--color-text-secondary) md:text-lg">
                  Your home base for cohort dates, live session links, Week 1 materials, resources, and support. This v1 hub keeps the founding cohort simple while payments and student access mature.
                </p>
              </div>
              <StudentHubLogout />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {universityTimeline.map((item) => (
                <article key={item.label} className="rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-(--color-accent)">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-(--color-text-primary)">{item.date}</p>
                  <p className="mt-2 text-xs leading-relaxed text-(--color-text-secondary)">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="!pt-0">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <article className="rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 md:p-7">
              <div className="flex flex-col gap-3">
                <Badge label="Next session" variant="accent" />
                <h2 className="text-2xl font-bold text-(--color-text-primary)">Kickoff starts {universitySchedule.kickoffDate}.</h2>
                <p className="text-sm leading-relaxed text-(--color-text-secondary)">
                  Add the recurring live session link and calendar invite here once session logistics are final. Until then, this page works as the private onboarding hub you can send after payment.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3">
                {hubLinks.map((link) => (
                  <div key={link.title} className="rounded-xl border border-(--color-border) bg-(--color-bg-base) p-4">
                    <p className="text-sm font-bold text-(--color-text-primary)">{link.title}</p>
                    <p className="mt-1 text-sm font-semibold text-(--color-accent)">{link.label}</p>
                    <p className="mt-2 text-xs leading-relaxed text-(--color-text-secondary)">{link.detail}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 md:p-7">
              <Badge label="Week 1" variant="accent" />
              <h2 className="mt-3 text-2xl font-bold text-(--color-text-primary)">Start with AI foundations.</h2>
              <p className="mt-3 text-sm leading-relaxed text-(--color-text-secondary)">
                Week 1 keeps the first cohort grounded: what AI is doing, where it fails, and how to scope the first workflow before jumping into tools.
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {weekOne.map((item) => (
                  <li key={item} className="rounded-xl border border-(--color-border) bg-(--color-bg-base) px-4 py-3 text-sm text-(--color-text-secondary)">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      <Section className="!pt-0">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {universityModules.map((mod) => (
              <article key={mod.number} className="rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-5">
                <p className="font-mono text-2xl font-bold text-(--color-accent) opacity-70">{mod.number}</p>
                <h3 className="mt-3 text-lg font-bold text-(--color-text-primary)">{mod.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-(--color-text-muted)">{mod.duration}</p>
                <p className="mt-3 text-sm leading-relaxed text-(--color-text-secondary)">{mod.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="!pt-0">
        <Container size="md">
          <div className="rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 text-center md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-(--color-accent)">Need help?</p>
            <h2 className="mt-3 text-2xl font-bold text-(--color-text-primary)">Use one support path.</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-(--color-text-secondary)">
              Until the community space is finalized, send questions through the Monarc Made contact page and include "Monarc University" in the message.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button label="Contact support" href="/contact" trackingLabel="student_hub_contact" />
              <Link
                href="/blog/how-id-learn-ai-from-zero-in-2026"
                className="inline-flex items-center justify-center rounded-lg border border-(--color-border-bright) px-6 py-3 text-sm font-semibold text-(--color-text-primary) transition-colors duration-250 hover:border-(--color-accent) hover:text-(--color-accent) focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3"
              >
                Review the roadmap
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
