import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, SiteLayout } from "@/components/cafirm-site";

export const Route = createFileRoute("/mentions-legales")({
  component: () => <SiteLayout><LegalPage /></SiteLayout>,
  head: () => ({
    meta: [
      { title: "Mentions légales — CAFIRM" },
      { name: "description", content: "Informations légales relatives au site et au cabinet CAFIRM, établi à Casablanca." },
      { property: "og:title", content: "Mentions légales — CAFIRM" },
      { property: "og:description", content: "Informations sur l’éditeur du site CAFIRM." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
});