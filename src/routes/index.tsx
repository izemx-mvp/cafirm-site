import { createFileRoute } from "@tanstack/react-router";
import { HomePage, SiteLayout } from "@/components/cafirm-site";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: HomeRoute,
  head: () => ({
    meta: [
      { title: "CAFIRM — Expertise comptable et conseil à Casablanca" },
      { name: "description", content: "CAFIRM accompagne les dirigeants et investisseurs au Maroc en comptabilité, fiscalité et conseil d’entreprise." },
      { property: "og:title", content: "CAFIRM — Expertise comptable et conseil à Casablanca" },
      { property: "og:description", content: "Un cabinet engagé aux côtés des dirigeants et investisseurs au Maroc." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AccountingService",
        name: "CAFIRM",
        description: "Expertise comptable, fiscale et conseil aux entreprises à Casablanca.",
        telephone: "+212 5 22 36 48 20",
        email: "contact@cafirm.ma",
        address: { "@type": "PostalAddress", streetAddress: "12, boulevard Abdelmoumen, 4e étage", addressLocality: "Casablanca", postalCode: "20360", addressCountry: "MA" },
      }),
    }],
  }),
});

function HomeRoute() {
  return <SiteLayout><HomePage /></SiteLayout>;
}
