import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { Seo, accountingServiceJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Star8 } from "@/components/decor/Star8";
import { Monogram } from "@/components/decor/Monogram";
import { ZelligeGrid } from "@/components/decor/ZelligeGrid";
import { Photo } from "@/components/ui/Photo";

const differentiators = [
  {
    title: "Un interlocuteur unique et stable",
    text: "Votre dossier est porté par la même personne d'une année sur l'autre. Pas de standard anonyme : un conseiller qui connaît votre histoire, vos chiffres et vos projets.",
  },
  {
    title: "Des délais tenus, contractuellement",
    text: "Chaque mission s'accompagne d'engagements écrits : date de remise du reporting, échéances déclaratives, délais de réponse. Nous nous mesurons à ce que nous promettons.",
  },
  {
    title: "Une double culture PME et international",
    text: "Nous parlons aussi bien au commerçant de Derb Omar qu'au fonds d'investissement européen. Cette double exposition nourrit la qualité de nos conseils des deux côtés.",
  },
  {
    title: "La technologie au service du métier",
    text: "Dépôt numérique des pièces, télédéclarations systématiques, tableaux de bord en ligne : nous investissons dans les outils pour consacrer notre temps à l'analyse, pas à la saisie.",
  },
  {
    title: "Une veille réglementaire active",
    text: "Chaque loi de finances, chaque circulaire importante donne lieu à une note d'impact envoyée à nos clients concernés. Vous apprenez les changements par nous, pas par la presse.",
  },
  {
    title: "Une déontologie sans compromis",
    text: "Secret professionnel strict, indépendance de jugement et refus de tout montage hasardeux : notre signature engage le cabinet, elle se mérite dossier après dossier.",
  },
];

export function Cabinet() {
  return (
    <>
      <Seo
        title="Le cabinet — CAFIRM, cabinet comptable et fiscal à Casablanca"
        description="Fondé en 2012 à Casablanca, CAFIRM est un cabinet comptable et fiscal indépendant : 350+ entreprises accompagnées, une équipe dédiée aux PME et aux investisseurs étrangers."
        path="/le-cabinet"
        jsonLd={accountingServiceJsonLd()}
      />

      <PageHero
        label="Le cabinet"
        title={
          <>
            Un cabinet indépendant, engagé aux côtés des <span className="text-gold">dirigeants</span>
          </>
        }
        intro="CAFIRM est né d'une conviction simple : une PME marocaine mérite la même qualité d'expertise qu'un grand groupe — avec la proximité et la réactivité en plus."
        image="bureauCabinet"
      />

      {/* Histoire */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              label="Notre histoire"
              title="De 2012 à aujourd'hui, une croissance par la confiance"
            />
            <Reveal delay={0.1} className="relative mt-10">
              <div className="absolute -bottom-3 -left-3 h-full w-full rounded-md border border-gold/50" aria-hidden="true" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-navy">
                <Photo
                  name="zelligeFontaine"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="space-y-5 text-[15px] leading-relaxed text-muted">
            <p>
              CAFIRM a été fondé en {site.founded} à Casablanca par {site.manager.name}, expert-comptable formé à
              l'ISCAE et passé par huit années d'audit en cabinet international. Le constat de départ : trop
              d'entreprises marocaines subissent leur comptabilité au lieu de s'en servir, et trop d'investisseurs
              étrangers renoncent au Maroc faute d'un partenaire local fiable.
            </p>
            <p>
              Quatorze ans plus tard, le cabinet accompagne plus de 350 entreprises — commerces, industries, sociétés
              de services, professions libérales — et a piloté l'implantation de plus de 40 investisseurs étrangers,
              d'Europe, du Moyen-Orient et d'Afrique. Cette croissance s'est construite sans publicité : par la
              recommandation de clients dont 98 % nous renouvellent leur confiance chaque année.
            </p>
            <p>
              Notre organisation reste volontairement à taille humaine : des pôles spécialisés (tenue, fiscal, social,
              juridique), un responsable de dossier unique par client, et une règle absolue — toute question reçoit une
              réponse sous 24 heures ouvrées.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mot du dirigeant */}
      <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
        <ZelligeGrid className="pointer-events-none absolute inset-0 h-full w-full" opacity={0.05} color="#F8F6F1" />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-[0.8fr_1.4fr]">
          <Reveal className="mx-auto w-full max-w-[280px]">
            <Monogram initials={site.manager.initials} className="w-full rounded-md border border-gold/30" />
            <p className="mt-5 text-center font-display text-xl font-semibold">{site.manager.name}</p>
            <p className="mt-1 text-center text-xs uppercase tracking-[0.18em] text-gold">{site.manager.title}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              <Star8 className="h-3.5 w-3.5" />
              Le mot du fondateur
            </p>
            <blockquote className="mt-6 space-y-5 font-display text-xl italic leading-relaxed text-white/90 sm:text-2xl">
              <p>
                « Un bilan juste, une déclaration déposée à l'heure, un conseil donné au bon moment : notre métier est
                fait de choses simples, exécutées sans faille, des années durant. C'est cette constance qui crée la
                confiance — et la confiance est le seul actif qui compte vraiment dans une relation de conseil. »
              </p>
              <p>
                « À chaque dirigeant qui nous confie ses chiffres, nous devons la même chose : la vérité sur sa
                situation, l'anticipation de ses échéances et un avis honnête, même quand il dérange. »
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading label="Nos valeurs" title="Ce qui ne se négocie pas" center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {site.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="h-full">
                <div className="card-lift flex h-full flex-col rounded-md border border-line bg-white p-7">
                  <Star8 className="h-6 w-6 text-gold" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Différenciateurs */}
      <section className="border-t border-line bg-white py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            label="Ce qui nous distingue"
            title="Six raisons de nous confier vos chiffres"
          />
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 0.08} className="flex gap-5">
                <span className="font-display text-3xl font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div className="border-l border-line pl-5">
                  <h3 className="font-display text-xl font-semibold text-navy">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-14 flex justify-center">
            <Button to="/prendre-rendez-vous">
              Rencontrer le cabinet <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
