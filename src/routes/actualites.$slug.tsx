import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, SiteLayout } from "@/components/cafirm-site";
import { findPost } from "@/data/posts";

export const Route = createFileRoute("/actualites/$slug")({
  component: ArticleRoute,
  head: ({ params }) => {
    const post = findPost(params.slug);
    const title = post ? `${post.title} — CAFIRM` : "Article indisponible — CAFIRM";
    const description = post?.excerpt ?? "Consultez les actualités et conseils de CAFIRM.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/actualites/${params.slug}` },
        ...(!post ? [{ name: "robots", content: "noindex,follow" }] : []),
      ],
      links: [{ rel: "canonical", href: `/actualites/${params.slug}` }],
      scripts: post ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          articleSection: post.category,
          author: { "@type": "Organization", name: "CAFIRM" },
          publisher: { "@type": "Organization", name: "CAFIRM" },
        }),
      }] : [],
    };
  },
});

function ArticleRoute() {
  const { slug } = Route.useParams();
  return <SiteLayout><ArticlePage slug={slug} /></SiteLayout>;
}