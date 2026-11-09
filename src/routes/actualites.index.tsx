import { createFileRoute } from "@tanstack/react-router";
import { NewsPage, SiteLayout } from "@/components/cafirm-site";

export const Route = createFileRoute("/actualites/")({
  component: () => <SiteLayout><NewsPage /></SiteLayout>,
  head: () => ({
    meta: [
      { title: "Actualités et conseils — Journal CAFIRM" },
      { name: "description", content: "Analyses pratiques sur la fiscalité, la comptabilité, la création d’entreprise et l’investissement au Maroc." },
      { property: "og:title", content: "Actualités — CAFIRM" },
      { property: "og:description", content: "Des repères utiles pour les décisions des entreprises au Maroc." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/actualites" },
    ],
    links: [{ rel: "canonical", href: "/actualites" }],
  }),
});