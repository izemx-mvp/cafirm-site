import { createFileRoute } from "@tanstack/react-router";
import { InvestPage, SiteLayout } from "@/components/cafirm-site";

export const Route = createFileRoute("/investir-au-maroc")({
  component: () => <SiteLayout><InvestPage /></SiteLayout>,
  head: () => ({
    meta: [
      { title: "Investir au Maroc — Accompagnement local | CAFIRM" },
      { name: "description", content: "Préparez votre implantation au Maroc avec l’accompagnement comptable, fiscal et administratif de CAFIRM." },
      { property: "og:title", content: "Investir au Maroc — CAFIRM" },
      { property: "og:description", content: "Un interlocuteur local pour structurer et suivre votre implantation au Maroc." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/investir-au-maroc" },
    ],
    links: [{ rel: "canonical", href: "/investir-au-maroc" }],
  }),
});