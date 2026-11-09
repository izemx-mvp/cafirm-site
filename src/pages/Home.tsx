import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { sortedPosts } from "@/data/posts";
import { Seo, accountingServiceJsonLd } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star8 } from "@/components/decor/Star8";
import { ZelligeGrid } from "@/components/decor/ZelligeGrid";
import { HeroStars } from "@/components/decor/HeroStars";
import { DocumentCards } from "@/components/decor/DocumentCards";
import { MoroccoMap } from "@/components/decor/MoroccoMap";
import { PostCard } from "@/components/cards/PostCard";

export function Home() {
  return (
    <>
      <Seo
        title="CAFIRM — Cabinet comptable et fiscal à Casablanca"
        description="Cabinet comptable et fiscal à Casablanca depuis 2012 : tenue comptable, fiscalité, création d'entreprise et accompagnement des investisseurs étrangers au Maroc."
        path="/"
        jsonLd={accountingServiceJsonLd()}
      />

      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden bg-ivory">
        <ZelligeGrid className="pointer-events-none absolute inset-0 h-full w-full" opacity={0.06} />
        <HeroStars className="pointer-events-none absolute -right-24 top-0 hidden h-full w-[55%] lg:block" />
        <div className="container-site relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <Reveal>
              <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                <Star8 className="h-3.5 w-3.5" />
                Cabinet comptable & fiscal — Casablanca
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.08] text-navy sm:text-6xl lg:text-[4.2rem]">
                La rigueur comptable au service de votre <span className="text-gold">croissance</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Depuis {site.founded}, CAFIRM accompagne PME, entrepreneurs et investisseurs étrangers au Maroc :
                comptabilité irréprochable, fiscalité maîtrisée et conseil qui éclaire chaque décision.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/prendre-rendez-vous">
                Prendre rendez-vous <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button to="/services" variant="outline">
                Découvrir nos services
              </Button>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="mt-10 border-l-2 border-gold pl-4 text-sm text-muted">
                Fiduciaire indépendante · Interlocuteur dédié · Réponse sous 24h ouvrées
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <DocumentCards />
          </Reveal>
        </div>
      </section>

      {/* ───── Chiffres clés ───── */}
      <section className="border-y border-line bg-white" aria-label="Chiffres clés">
        <div className="container-site grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {site.figures.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.1} className="px-4 py-10 text-center lg:py-14">
              <p className="font-display text-4xl font-semibold text-navy sm:text-5xl">
                <CountUp to={f.value} suffix={f.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">{f.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───── Services ───── */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              label="01 — Nos services"
              title="Quatre métiers, une même exigence"
              intro="De la tenue quotidienne de vos comptes à la structuration de votre implantation au Maroc, chaque mission est portée par un interlocuteur dédié."
            />
            <Reveal delay={0.15}>
              <Link
                to="/services"
                className="link-underline inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy"
              >
                Tous nos services <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link
                  to={`/services/${s.slug}`}
                  className="card-lift group flex h-full flex-col rounded-md border border-line bg-white p-7 lg:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-4xl font-semibold text-line transition-colors duration-300 group-hover:text-gold">
                      {s.number}
                    </span>
                    <Star8 className="h-5 w-5 text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-navy">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.excerpt}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.highlights.map((h) => (
                      <span key={h} className="rounded-[2px] border border-line px-2.5 py-1 text-[11px] font-medium text-muted">
                        {h}
                      </span>
                    ))}
                  </div>
                  <span className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors group-hover:text-gold">
                    Découvrir <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Investir au Maroc ───── */}
      <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
        <ZelligeGrid className="pointer-events-none absolute inset-0 h-full w-full" opacity={0.06} color="#F8F6F1" />
        <div className="container-site relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              label="02 — Investisseurs étrangers"
              title="Vous investissez au Maroc ?"
              intro="Création de société à distance, convertibilité garantie, fiscalité optimisée par les conventions internationales : nous sommes le partenaire local qui sécurise votre implantation, en français comme en anglais."
              dark
            />
            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-3.5">
                {[
                  "Société créée à 100 % à distance, par procuration",
                  "Dossier Office des changes sécurisé dès le premier jour",
                  "Package mensuel : comptabilité, fiscal, social et reporting",
                  "Suivi en visioconférence, en français ou en anglais",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-white/80">
                    <Star8 className="mt-1 h-3.5 w-3.5 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.25} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/investir-au-maroc" variant="gold">
                Investir au Maroc <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button to="/prendre-rendez-vous?service=investir-au-maroc" variant="outline-light">
                Planifier une visio
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="mx-auto w-full max-w-sm lg:max-w-md">
            <MoroccoMap className="h-auto w-full" />
          </Reveal>
        </div>
      </section>

      {/* ───── Méthode ───── */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            label="03 — Notre méthode"
            title="Un cadre éprouvé, du diagnostic au pilotage"
            intro="Chaque mission suit le même chemin : comprendre, organiser, exécuter sans faille, puis transformer vos chiffres en décisions."
            center
          />
          <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block" aria-hidden="true" />
            {site.method.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12} className="relative">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-ivory font-display text-xl font-semibold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Pourquoi CAFIRM ───── */}
      <section className="border-y border-line bg-white py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            label="04 — Pourquoi CAFIRM"
            title="Quatre engagements, tenus depuis 2012"
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {site.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col bg-white p-7 transition-colors duration-300 hover:bg-ivory lg:p-8">
                  <Star8 className="h-6 w-6 text-gold" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Témoignages ───── */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            label="05 — Ils nous font confiance"
            title="La parole à nos clients"
            center
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {site.testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1} className="h-full">
                <figure className="card-lift flex h-full flex-col rounded-md border border-line bg-white p-8">
                  <Quote className="h-7 w-7 text-gold" aria-hidden="true" />
                  <blockquote className="mt-5 flex-1 font-display text-lg italic leading-relaxed text-ink">
                    « {t.quote} »
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-5">
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="mt-0.5 text-xs text-muted">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Derniers articles ───── */}
      <section className="border-t border-line bg-white py-20 lg:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              label="06 — Actualités"
              title="Nos derniers éclairages"
              intro="Fiscalité, création d'entreprise, social : l'actualité marocaine décryptée pour les dirigeants."
            />
            <Reveal delay={0.15}>
              <Link
                to="/actualites"
                className="link-underline inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy"
              >
                Toutes les actualités <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {sortedPosts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1} className="h-full">
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
