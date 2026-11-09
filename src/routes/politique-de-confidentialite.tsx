import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, SiteLayout } from "@/components/cafirm-site";

export const Route = createFileRoute("/politique-de-confidentialite")({
  component: () => <SiteLayout><LegalPage privacy /></SiteLayout>,
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — CAFIRM" },
      { name: "description", content: "Consultez les informations de confidentialité applicables aux demandes envoyées à CAFIRM." },
      { property: "og:title", content: "Politique de confidentialité — CAFIRM" },
      { property: "og:description", content: "La politique de confidentialité du site CAFIRM." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/politique-de-confidentialite" },
    ],
    links: [{ rel: "canonical", href: "/politique-de-confidentialite" }],
  }),
});