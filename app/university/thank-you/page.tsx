import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = buildMetadata({
  title: "Application Received",
  description:
    "Your Monarc University founding cohort application was received. Review the next steps and keep learning while applications are reviewed.",
  canonical: `${siteConfig.url}/university/thank-you`,
});

const nextSteps = [
  {
    title: "Application review",
    detail: "Your answers are reviewed for goal, readiness, track fit, and the kind of AI project you want to build.",
  },
  {
    title: "Follow-up",
    detail: "Strong fits will get next-step details about dates, pricing, cohort format, and whether a quick call makes sense.",
  },
  {
    title: "Keep learning",
    detail: "Start with the AI from zero roadmap so the founding cohort feels familiar before doors open.",
  },
];

const resources = [
  {
    title: "How I’d learn AI from zero in 2026",
    detail: "The clean beginner roadmap behind Monarc University.",
    href: "/blog/how-id-learn-ai-from-zero-in-2026",
    label: "Read the roadmap",
  },
  {
    title: "See the cohort structure",
    detail: "Review the 12-week and 24-week paths, capstone ideas, and offer tiers.",
    href: "/university#curriculum",
    label: "View curriculum",
  },
];

export default function UniversityThankYouPage() {
  return (
    <div className="inner-page">
      <Section>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-start">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-(--color-accent)">
                Application received
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-(--color-text-primary) leading-tight text-balance">
                You&apos;re on the founding cohort list.
              </h1>
              <p className="text-lg text-(--color-text-secondary) leading-relaxed text-pretty">
                Thanks for applying to Monarc University. Your application is in Airtable now, and the next step is reviewing fit around your goal, timeline, and the AI project you want to build.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  label="Read the AI from zero roadmap"
                  href="/blog/how-id-learn-ai-from-zero-in-2026"
                  variant="primary"
                  size="lg"
                  trackingLabel="university_thank_you_blog"
                />
                <Button
                  label="Back to University"
                  href="/university"
                  variant="secondary"
                  size="lg"
                  trackingLabel="university_thank_you_back"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-(--color-bg-surface) border border-(--color-border)">
              <figure className="relative min-h-56 border-b border-(--color-border)">
                <Image
                  src={siteImages.contentStudio.src}
                  alt={siteImages.contentStudio.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="object-cover"
                />
              </figure>
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-(--color-text-primary)">What happens next</h2>
                <div className="mt-6 flex flex-col divide-y divide-(--color-border)">
                  {nextSteps.map((step, index) => (
                    <div key={step.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--color-accent-subtle) text-xs font-bold text-(--color-accent)">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-base font-bold text-(--color-text-primary)">{step.title}</h3>
                        <p className="text-sm text-(--color-text-secondary) leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-(--color-bg-surface) border-y border-(--color-border)">
        <Container size="lg">
          <div className="flex flex-col gap-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-(--color-accent)">
                While you wait
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-(--color-text-primary) text-balance">
                Keep moving through the roadmap.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((resource) => (
                <article
                  key={resource.title}
                  className="flex flex-col gap-4 rounded-2xl bg-(--color-bg-base) border border-(--color-border) p-6"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-(--color-text-primary)">{resource.title}</h3>
                    <p className="text-sm text-(--color-text-secondary) leading-relaxed">{resource.detail}</p>
                  </div>
                  <Button
                    label={resource.label}
                    href={resource.href}
                    variant="secondary"
                    size="sm"
                    className="self-start"
                    trackingLabel={`university_thank_you_${resource.label.toLowerCase().replaceAll(" ", "_")}`}
                  />
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
