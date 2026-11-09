import { createFileRoute } from "@tanstack/react-router";
import { CabinetPage, SiteLayout } from "@/components/cafirm-site";

export const Route = createFileRoute("/le-cabinet")({
  component: () => <SiteLayout><CabinetPage /></SiteLayout>,
  head: () => ({
    meta: [
      { title: "Le cabinet CAFIRM — Expertise et conseil à Casablanca" },
      { name: "description", content: "Découvrez CAFIRM, son approche et son accompagnement des entreprises depuis Casablanca." },
      { property: "og:title", content: "Le cabinet CAFIRM" },
      { property: "og:description", content: "Un cabinet engagé aux côtés des dirigeants et investisseurs au Maroc." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/le-cabinet" },
    ],
    links: [{ rel: "canonical", href: "/le-cabinet" }],
  }),
});