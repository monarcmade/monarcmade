import { Container, Section } from "@/components/ui/Container";
import type { LegalPageContent } from "@/data/legal";

export function LegalPage({ content }: { content: LegalPageContent }) {
  return (
    <div className="inner-page">
      <Section>
        <Container size="md">
          <article className="flex flex-col gap-10">
            <header className="flex flex-col gap-4 border-b border-(--color-border) pb-8">
              <p className="m-0 text-xs font-semibold uppercase tracking-widest text-(--color-accent)">
                {content.eyebrow}
              </p>
              <h1 className="m-0 text-4xl font-bold leading-tight text-(--color-text-primary) text-balance md:text-5xl">
                {content.title}
              </h1>
              <p className="m-0 max-w-2xl text-base leading-relaxed text-(--color-text-secondary) text-pretty md:text-lg">
                {content.description}
              </p>
              <p className="m-0 text-xs font-medium uppercase tracking-wide text-(--color-text-muted)">
                Last updated: {content.lastUpdated}
              </p>
            </header>

            <div className="flex flex-col gap-8">
              {content.sections.map((section) => (
                <section key={section.title} className="flex flex-col gap-3">
                  <h2 className="m-0 text-xl font-bold text-(--color-text-primary)">
                    {section.title}
                  </h2>
                  {section.body ? (
                    <p className="m-0 text-sm leading-relaxed text-(--color-text-secondary) md:text-base">
                      {section.body}
                    </p>
                  ) : null}
                  {section.items ? (
                    <ul className="m-0 flex list-none flex-col gap-2 p-0">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="border-l border-(--color-border-bright) pl-4 text-sm leading-relaxed text-(--color-text-secondary) md:text-base"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <footer className="rounded-xl border border-(--color-border) bg-(--color-bg-surface) p-5">
              <p className="m-0 text-sm leading-relaxed text-(--color-text-secondary)">
                These pages are provided for general business clarity and are not a substitute for legal advice.
                Have a qualified attorney review them before relying on them for paid course, consulting, or
                high-volume commercial activity.
              </p>
            </footer>
          </article>
        </Container>
      </Section>
    </div>
  );
}
