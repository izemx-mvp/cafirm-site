import { createFileRoute } from "@tanstack/react-router";
import { AppointmentPage, SiteLayout } from "@/components/cafirm-site";
import { z } from "zod";

export const Route = createFileRoute("/prendre-rendez-vous")({
  validateSearch: z.object({ service: z.string().optional() }),
  component: AppointmentRoute,
  head: () => ({
    meta: [
      { title: "Prendre rendez-vous — CAFIRM Casablanca" },
      { name: "description", content: "Planifiez un premier échange avec CAFIRM au cabinet, par téléphone ou en visioconférence." },
      { property: "og:title", content: "Prendre rendez-vous — CAFIRM" },
      { property: "og:description", content: "Choisissez un besoin, un mode de rendez-vous et vos disponibilités." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/prendre-rendez-vous" },
    ],
    links: [{ rel: "canonical", href: "/prendre-rendez-vous" }],
  }),
});

function AppointmentRoute() {
  const { service } = Route.useSearch();
  return <SiteLayout><AppointmentPage service={service} /></SiteLayout>;
}