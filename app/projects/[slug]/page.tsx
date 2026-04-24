import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getWorkPost, getWorkSlugs, getRelatedWork, toWorkPostSummary } from "@/lib/work";
import { buildWorkMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CTABlock } from "@/components/sections/CTABlock";
import { WorkPostHero } from "@/components/sections/WorkPostHero";
import { WorkPostRelated } from "@/components/sections/WorkPostRelated";
import { portfolioDeliveryNote } from "@/data/samplePortfolio";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getWorkPost(slug);
  if (!post) return {};
  return buildWorkMetadata({
    title: post.title,
    description: post.summary,
    slug: post.slug,
    image: post.ogImage,
  });
}

export default async function ProjectPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getWorkPost(slug);
  if (!post) notFound();

  const related = getRelatedWork(slug, 3).map(toWorkPostSummary);

  return (
    <div className="inner-page">
      <Section>
        <Container size="lg">
          <WorkPostHero
            title={post.title}
            summary={post.summary}
            tags={post.tags}
            client={post.client}
            industry={post.industry}
            year={post.year}
            readingTime={post.readingTime}
            metrics={post.metrics}
            outcomesBrief={post.outcomesBrief}
            contextAnchors={post.contextAnchors}
          />
        </Container>
      </Section>

      <Section className="!pt-0">
        <Container size="md">
          <p className="text-xs text-(--color-text-muted) leading-relaxed border-l-2 border-(--color-accent) pl-4 mb-8 max-w-2xl">
            {portfolioDeliveryNote}
          </p>
          <article className="prose-monarc" aria-label={`Project summary: ${post.title}`}>
            <MDXRemote source={post.content} />
          </article>
        </Container>
      </Section>

      {post.services.length > 0 && (
        <Section className="!pt-0">
          <Container size="md">
            <div className="p-6 rounded-2xl bg-(--color-bg-surface) border border-(--color-border)">
              <p className="text-xs text-(--color-text-muted) uppercase tracking-widest mb-3 font-semibold">
                Services involved
              </p>
              <div className="flex flex-wrap gap-2">
                {post.services.map((service) => (
                  <Badge key={service} label={service} variant="default" />
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {related.length > 0 && (
        <Section className="!pt-0 bg-(--color-bg-surface) border-y border-(--color-border)">
          <Container size="lg">
            <WorkPostRelated posts={related} />
          </Container>
        </Section>
      )}

      <CTABlock
        eyebrow="Like what you see?"
        title="Bring a constraint; leave with a sequenced plan."
        description="Monarc Made scopes availability, intake, and what a first slice looks like—straight answers before code."
        primaryLabel="Contact Monarc Made"
        primaryHref="/contact"
        secondaryLabel="All projects"
        secondaryHref="/projects"
        trackingPrefix="case_study_cta"
      />
    </div>
  );
}
