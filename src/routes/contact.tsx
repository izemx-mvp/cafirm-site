import { createFileRoute } from "@tanstack/react-router";
import { ContactPage, SiteLayout } from "@/components/cafirm-site";

export const Route = createFileRoute("/contact")({
  component: () => <SiteLayout><ContactPage /></SiteLayout>,
  head: () => ({
    meta: [
      { title: "Contact CAFIRM — Cabinet comptable à Casablanca" },
      { name: "description", content: "Contactez CAFIRM à Casablanca pour votre comptabilité, votre fiscalité ou un projet d’entreprise." },
      { property: "og:title", content: "Contacter CAFIRM" },
      { property: "og:description", content: "Échangez avec notre cabinet comptable et fiscal à Casablanca." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});