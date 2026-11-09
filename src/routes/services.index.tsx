import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage, SiteLayout } from "@/components/cafirm-site";

export const Route = createFileRoute("/services/")({
  component: () => <SiteLayout><ServicesPage /></SiteLayout>,
  head: () => ({
    meta: [
      { title: "Services comptables et fiscaux — CAFIRM" },
      { name: "description", content: "Comptabilité, fiscalité, création d’entreprise et conseil administratif pour les entreprises au Maroc." },
      { property: "og:title", content: "Nos services — CAFIRM" },
      { property: "og:description", content: "Un accompagnement comptable et fiscal défini selon vos besoins." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});