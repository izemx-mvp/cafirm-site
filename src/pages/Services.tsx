import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { Seo } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Star8 } from "@/components/decor/Star8";
import { starPath } from "@/lib/star";

/** Visuel abstrait par service : grand numéro serif + étoile + filets. */
function ServiceVisual({ number }: { number: string }) {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md border border-line bg-navy">
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d={starPath(330, 60, 90)} stroke="#B8925A" strokeWidth="1" fill="none" opacity="0.4" />
        <path d={starPath(70, 250, 60)} stroke="#F8F6F1" strokeWidth="0.8" fill="none" opacity="0.2" />
        <line x1="40" y1="80" x2="150" y2="80" stroke="#B8925A" strokeWidth="1" opacity="0.5" />
        <line x1="250" y1="230" x2="360" y2="230" stroke="#B8925A" strokeWidth="1" opacity="0.5" />
      </svg>
      <span className="relative font-display text-[7rem] font-semibold leading-none text-white/90">
        {number}
        <Star8 className="absolute -right-7 top-3 h-6 w-6 text-gold" filled />
      </span>
    </div>
  );
}

export function Services() {
  return (
    <>
      <Seo
        title="Nos services — Comptabilité, fiscalité, création d'entreprise | CAFIRM"
        description="Tenue comptable, fiscalité et déclarations, création d'entreprise, conseil et assistance administrative : les quatre métiers de CAFIRM au service des entreprises marocaines."
        path="/services"
      />

      <PageHero
        label="Nos services"
        title={
          <>
            Quatre métiers, un seul objectif : <span className="text-gold">votre sérénité</span>
          </>
        }
        intro="Chaque service peut être souscrit seul ou combiné en accompagnement global. Dans tous les cas : un interlocuteur dédié, des engagements écrits et des échéances tenues."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-site space-y-20 lg:space-y-28">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ServiceVisual number={s.number} />
                <div>
                  <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                    <Star8 className="h-3 w-3" />
                    {s.number} — Service
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                    {s.name}
                  </h2>
                  <p className="mt-3 font-display text-lg italic text-gold">{s.tagline}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{s.excerpt}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {s.checklist.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={3} aria-hidden="true" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      to={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 rounded-[2px] bg-navy px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-steel"
                    >
                      Voir le détail <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                    <Link
                      to={`/prendre-rendez-vous?service=${s.slug}`}
                      className="link-underline inline-flex items-center self-center text-[12px] font-semibold uppercase tracking-[0.16em] text-navy"
                    >
                      Prendre rendez-vous
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
