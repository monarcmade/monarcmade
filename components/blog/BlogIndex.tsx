import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTABlock } from "@/components/sections/CTABlock";
import { formatBlogDate } from "@/lib/blog";
import type { BlogPostSummary } from "@/types";

export function BlogIndex({ posts }: { posts: BlogPostSummary[] }) {
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = posts.filter((post) => post.slug !== featured?.slug);

  return (
    <>
      <Section>
        <Container>
          <div className="flex flex-col gap-8 md:gap-10">
            <SectionHeader
              eyebrow="Resources"
              title="Field notes for teams with real delivery pressure."
              description="Practical writing on production AI, web performance, cloud cleanup, migrations, and the handoffs that keep systems usable after launch."
            />

            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18rem] gap-7 rounded-xl border border-[color-mix(in_oklab,var(--color-accent)_30%,var(--color-border))] bg-(--color-bg-surface) p-6 md:p-8 hover:border-(--color-accent) hover:shadow-[0_0_36px_var(--color-accent-glow)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap gap-2">
                    <Badge label={featured.category} variant="accent" />
                    {featured.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} label={tag} variant="muted" />
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-(--color-text-muted) m-0">
                      Featured guide
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] leading-tight text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors">
                      {featured.title}
                    </h1>
                    <p className="text-base md:text-lg text-(--color-text-secondary) leading-relaxed max-w-2xl">
                      {featured.summary}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-6 rounded-lg border border-(--color-border) bg-(--color-bg-base) p-5">
                  <div className="flex flex-col gap-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-(--color-text-muted) m-0">Best for</p>
                    <p className="text-sm text-(--color-text-secondary) leading-relaxed m-0">{featured.audience}</p>
                  </div>
                  <div className="flex flex-col gap-1 text-xs text-(--color-text-muted)">
                    <span>{formatBlogDate(featured.date)}</span>
                    <span>{featured.readingTime}</span>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </Container>
      </Section>

      <Section rhythm="tight" className="border-y border-(--color-border) bg-(--color-bg-surface)">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {["Diagnose the pain", "Pick the first slice", "Scope paid work"].map((step) => (
              <div key={step} className="rounded-lg border border-(--color-border) bg-(--color-bg-base) p-5">
                <p className="text-sm font-semibold text-(--color-text-primary) m-0">{step}</p>
                <p className="text-xs text-(--color-text-muted) leading-relaxed mt-2 mb-0">
                  Each article should help a buyer decide whether the next move is audit, build, migration, or advisory.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 list-none m-0 p-0">
            {rest.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col gap-5 rounded-xl border border-(--color-border) bg-(--color-bg-surface) p-5 md:p-6 hover:border-(--color-border-bright) hover:shadow-[0_0_28px_var(--color-accent-glow)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3"
                >
                  <div className="flex flex-wrap gap-2">
                    <Badge label={post.category} variant="accent" />
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} label={tag} variant="muted" />
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl font-bold text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm md:text-base text-(--color-text-secondary) leading-relaxed">{post.summary}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-3 text-xs text-(--color-text-muted)">
                    <span>{formatBlogDate(post.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTABlock
        eyebrow="Turn notes into a plan"
        title="Found the problem you are living with?"
        description="Send the current stack, the business constraint, and what has to improve. Monarc Made will help turn the messy middle into a scoped first slice."
        primaryLabel="Scope a project"
        primaryHref="/contact"
        secondaryLabel="See services"
        secondaryHref="/services"
        trackingPrefix="blog_index_cta"
      />
    </>
  );
}
