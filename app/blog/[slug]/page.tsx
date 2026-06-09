import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogRelated } from "@/components/blog/BlogRelated";
import { CTABlock } from "@/components/sections/CTABlock";
import { Badge } from "@/components/ui/Badge";
import { Container, Section } from "@/components/ui/Container";
import { getBlogPost, getBlogSlugs, getRelatedBlogPosts, formatBlogDate } from "@/lib/blog";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.summary,
    image: post.ogImage,
    canonical: `${siteConfig.url}/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedBlogPosts(slug, 3);

  return (
    <div className="inner-page">
      <Section>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18rem] gap-8 lg:gap-12 items-start">
            <div className="flex flex-col gap-6 min-w-0">
              <nav aria-label="Breadcrumb" className="text-sm text-(--color-text-muted)">
                <Link href="/blog" className="hover:text-(--color-accent) transition-colors">
                  Blog
                </Link>
                <span aria-hidden="true"> / </span>
                <span>{post.category}</span>
              </nav>
              <div className="flex flex-wrap gap-2">
                <Badge label={post.category} variant="accent" />
                {post.tags.map((tag) => (
                  <Badge key={tag} label={tag} variant="muted" />
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-[2.85rem] font-bold tracking-[-0.025em] leading-[1.08] text-(--color-text-primary) text-balance max-w-4xl">
                {post.title}
              </h1>
              <p className="text-base md:text-lg text-(--color-text-secondary) leading-relaxed max-w-2xl text-pretty">
                {post.summary}
              </p>
            </div>

            <aside className="rounded-xl border border-(--color-border) bg-(--color-bg-surface) overflow-hidden lg:sticky lg:top-28">
              <div className="px-5 py-4 border-b border-(--color-border)">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-(--color-text-muted) m-0">Guide brief</p>
              </div>
              <dl className="grid grid-cols-1 divide-y divide-(--color-border)">
                <div className="px-5 py-4">
                  <dt className="text-[10px] text-(--color-text-muted) uppercase tracking-wide">Published</dt>
                  <dd className="text-sm font-medium text-(--color-text-primary) mt-1">{formatBlogDate(post.date)}</dd>
                </div>
                <div className="px-5 py-4">
                  <dt className="text-[10px] text-(--color-text-muted) uppercase tracking-wide">Read time</dt>
                  <dd className="text-sm font-medium text-(--color-text-primary) mt-1">{post.readingTime}</dd>
                </div>
                <div className="px-5 py-4">
                  <dt className="text-[10px] text-(--color-text-muted) uppercase tracking-wide">Best for</dt>
                  <dd className="text-sm text-(--color-text-secondary) leading-relaxed mt-1">{post.audience}</dd>
                </div>
                <div className="px-5 py-4">
                  <dt className="text-[10px] text-(--color-text-muted) uppercase tracking-wide">Paid next step</dt>
                  <dd className="text-sm text-(--color-text-secondary) leading-relaxed mt-1">{post.offer}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="!pt-0">
        <Container size="md">
          <article className="prose-monarc" aria-label={`Blog post: ${post.title}`}>
            <MDXRemote source={post.content} />
          </article>
        </Container>
      </Section>

      <Section className="!pt-0">
        <Container size="md">
          <div className="rounded-xl border border-[color-mix(in_oklab,var(--color-accent)_35%,var(--color-border))] bg-(--color-bg-surface) p-6 md:p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-(--color-accent) m-0">Use this commercially</p>
            <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-primary) mt-3 mb-3">Turn this into a scoped first slice.</h2>
            <p className="text-sm md:text-base text-(--color-text-secondary) leading-relaxed m-0">
              Send Monarc Made the current stack, the constraint, and what has to move. The first reply can map whether this is an audit, migration, build, or advisory engagement.
            </p>
            <a
              href="/contact"
              className="inline-flex mt-5 rounded-lg bg-(--color-accent) px-5 py-2.5 text-sm font-semibold text-(--color-text-inverse) hover:bg-(--color-accent-dim) transition-colors focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3"
            >
              Start the brief
            </a>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section className="!pt-0 bg-(--color-bg-surface) border-y border-(--color-border)">
          <Container>
            <BlogRelated posts={related} />
          </Container>
        </Section>
      )}

      <CTABlock
        eyebrow="Need this handled?"
        title="Bring the problem, not a polished spec."
        description="Monarc Made can turn the diagnosis into a scoped audit, migration, build, or handoff plan."
        primaryLabel="Contact Monarc Made"
        primaryHref="/contact"
        secondaryLabel="All guides"
        secondaryHref="/blog"
        trackingPrefix="blog_post_cta"
      />
    </div>
  );
}
