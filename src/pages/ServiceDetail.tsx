import { useParams } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { getService } from "@/data/services";
import { posts } from "@/data/posts";
import { Seo, faqJsonLd } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { Star8 } from "@/components/decor/Star8";
import { PostCard } from "@/components/cards/PostCard";
import { NotFound } from "./NotFound";
import { waHref } from "@/lib/wa";

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <NotFound />;

  const related = service.relatedSlugs
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Seo
        title={`${service.name} — CAFIRM, cabinet comptable à Casablanca`}
        description={service.excerpt}
        path={`/services/${service.slug}`}
        jsonLd={faqJsonLd(service.faq)}
      />

      <PageHero label={`${service.number} — Service`} title={service.name} intro={service.tagline}>
        <Reveal delay={0.15} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to={`/prendre-rendez-vous?service=${service.slug}`}>
            Prendre rendez-vous <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            href={waHref(`Bonjour CAFIRM, je souhaite des informations sur votre service « ${service.name} ».`)}
            external
            variant="outline"
          >
            Poser une question sur WhatsApp
          </Button>
        </Reveal>
      </PageHero>

      {/* Présentation + checklist */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <SectionHeading label="Notre approche" title="Ce que nous prenons en charge" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15px] leading-relaxed text-muted">{service.heroText}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.highlights.map((h) => (
                  <span
                    key={h}
                    className="flex items-center gap-2 rounded-[2px] border border-gold/40 bg-ivory px-3 py-1.5 text-xs font-medium text-navy"
                  >
                    <Star8 className="h-3 w-3 text-gold" /> {h}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <ul className="grid gap-x-8 gap-y-4 rounded-md border border-line bg-ivory p-8 sm:grid-cols-2 lg:p-10">
              {service.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-snug text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy">
                    <Check className="h-3 w-3 text-gold" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Pour qui */}
      <section className="border-y border-line bg-ivory py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading label="Pour qui ?" title="Des réponses adaptées à votre profil" center />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.forWhom.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1} className="h-full">
                <div className="card-lift h-full rounded-md border border-line bg-white p-8">
                  <Star8 className="h-5 w-5 text-gold" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-navy">{f.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading label="Déroulement" title="Comment se passe la mission" />
          <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block" aria-hidden="true" />
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12} className="relative">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-white font-display text-xl font-semibold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-ivory py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
          <SectionHeading
            label="Questions fréquentes"
            title="Vos questions, nos réponses"
            intro="Les questions que nous posent le plus souvent les dirigeants avant de nous confier cette mission."
          />
          <Reveal delay={0.1}>
            <FAQAccordion items={service.faq} />
          </Reveal>
        </div>
      </section>

      {/* Articles liés */}
      {related.length > 0 && (
        <section className="border-t border-line bg-white py-20 lg:py-28">
          <div className="container-site">
            <SectionHeading label="Pour aller plus loin" title="Articles en lien avec ce service" />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {related.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.1} className="h-full">
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
