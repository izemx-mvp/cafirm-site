import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage, SiteLayout } from "@/components/cafirm-site";
import { findService } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceRoute,
  head: ({ params }) => {
    const service = findService(params.slug);
    const title = service ? `${service.title} — CAFIRM` : "Service indisponible — CAFIRM";
    const description = service?.intro ?? "Découvrez les services d’expertise comptable et de conseil de CAFIRM.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/services/${params.slug}` },
        ...(service ? [{ name: "robots", content: "index,follow" }] : [{ name: "robots", content: "noindex,follow" }]),
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: service ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
        }),
      }] : [],
    };
  },
});

function ServiceRoute() {
  const { slug } = Route.useParams();
  return <SiteLayout><ServiceDetailPage slug={slug} /></SiteLayout>;
}