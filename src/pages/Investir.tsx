import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowRight, Check, Globe2, Video } from "lucide-react";
import { Seo, faqJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { Star8 } from "@/components/decor/Star8";
import { ZelligeGrid } from "@/components/decor/ZelligeGrid";
import { MoroccoMap } from "@/components/decor/MoroccoMap";
import { waHref } from "@/lib/wa";
import { inputCls, labelCls, errorCls, FieldError } from "@/components/ui/form";

const whyMorocco = [
  {
    title: "Hub entre l'Europe et l'Afrique",
    text: "À 14 km de l'Europe, porte d'entrée du marché africain : position logistique unique, renforcée par Tanger Med et un réseau d'accords de libre-échange parmi les plus denses du continent.",
  },
  {
    title: "Convertibilité garantie",
    text: "L'Office des changes garantit aux investissements financés en devises le libre rapatriement des dividendes et du produit de cession, sans limitation de montant.",
  },
  {
    title: "Plus de 50 conventions fiscales",
    text: "Un réseau étendu de conventions de non double imposition (France, Espagne, Belgique, Émirats, Canada…) qui sécurise et optimise les flux transfrontaliers.",
  },
  {
    title: "Coûts compétitifs, talents disponibles",
    text: "Coûts d'exploitation parmi les plus compétitifs de la région, main-d'œuvre qualifiée et francophone, dispositifs d'incitation actifs de la charte de l'investissement.",
  },
];

const offer = [
  {
    title: "Choix de la forme juridique",
    text: "SARL, SARL AU, SAS ou succursale : analyse de votre projet et recommandation structurée, fiscalité comparée à l'appui.",
  },
  {
    title: "Création de société à distance",
    text: "Certificat négatif, statuts, immatriculation, ICE : procédure complète pilotée par procuration, sans déplacement obligatoire.",
  },
  {
    title: "Domiciliation & siège social",
    text: "Adresse juridique à Casablanca via nos partenaires agréés, gestion du courrier et transfert ultérieur si besoin.",
  },
  {
    title: "Comptabilité & fiscalité",
    text: "Tenue aux normes marocaines, déclarations IS et TVA, reporting mensuel au format de votre maison mère, en français ou en anglais.",
  },
  {
    title: "Déclarations sociales",
    text: "Affiliation CNSS, paie de vos équipes locales, déclarations Damancom et veille sur les obligations employeur.",
  },
  {
    title: "Assistance administrative",
    text: "Comptes bancaires, Office des changes, visas d'affaires, relations avec les administrations : un point d'entrée unique.",
  },
];

const steps = [
  { title: "Visio découverte", text: "45 minutes pour cadrer votre projet : activité, structure, calendrier, budget. Gratuit et sans engagement." },
  { title: "Feuille de route", text: "Document écrit : forme juridique recommandée, étapes, documents à fournir, délais et honoraires détaillés." },
  { title: "Constitution à distance", text: "Procurations, certificat négatif, statuts, immatriculation : nous exécutons, vous recevez un point d'étape à chaque jalon." },
  { title: "Compte bancaire & capital", text: "Introduction auprès de banques partenaires, dépôt du capital et dossier Office des changes correctement documenté." },
  { title: "Exploitation sereine", text: "Package mensuel comptable, fiscal et social : votre société tourne, vous pilotez à distance en toute visibilité." },
];

const faq = [
  {
    q: "Puis-je détenir 100 % du capital de ma société marocaine ?",
    a: "Oui. Dans la quasi-totalité des secteurs, une société marocaine peut être intégralement détenue par des associés étrangers, personnes physiques ou morales, sans associé local obligatoire. Nous vérifions les rares exceptions sectorielles avant toute démarche.",
  },
  {
    q: "Dois-je me déplacer au Maroc pour créer la société ?",
    a: "Non. La création s'effectue par procuration légalisée (et apostillée selon votre pays de résidence). Seule l'ouverture du compte bancaire peut, selon l'établissement, nécessiter une présence ; nous orientons nos clients vers les banques aux procédures les plus souples.",
  },
  {
    q: "Comment rapatrier mes dividendes vers mon pays ?",
    a: "Le régime de convertibilité de l'Office des changes garantit le libre transfert des dividendes et du produit de cession pour tout investissement financé en devises et correctement déclaré à l'origine. Nous constituons ce dossier dès la création — c'est la clé d'un rapatriement fluide.",
  },
  {
    q: "Quels sont les délais réalistes de bout en bout ?",
    a: "Comptez 2 à 3 semaines pour une société immatriculée (procurations comprises), puis 1 à 4 semaines pour le compte bancaire selon la banque et l'actionnariat. Un projet bien préparé est opérationnel en un mois environ.",
  },
  {
    q: "En quelle langue travaillez-vous ?",
    a: "En français et en anglais : échanges, feuilles de route, reporting mensuel et documents de synthèse. Les actes officiels marocains restent établis en langue officielle avec, si besoin, traduction assermentée.",
  },
];

const investSchema = z.object({
  name: z.string().min(2, "Veuillez indiquer votre nom complet."),
  country: z.string().min(2, "Veuillez indiquer votre pays de résidence."),
  email: z.string().email("Veuillez saisir une adresse e-mail valide."),
  phone: z.string().min(6, "Veuillez indiquer un numéro joignable (WhatsApp de préférence)."),
  project: z.enum(["creation", "filiale", "immobilier", "reprise", "autre"], {
    errorMap: () => ({ message: "Veuillez sélectionner le type de projet." }),
  }),
  message: z.string().min(10, "Décrivez votre projet en quelques mots (10 caractères minimum)."),
});

type InvestForm = z.infer<typeof investSchema>;

const projectLabels: Record<InvestForm["project"], string> = {
  creation: "Création d'une nouvelle société",
  filiale: "Implantation d'une filiale",
  immobilier: "Investissement immobilier",
  reprise: "Reprise / acquisition d'une société",
  autre: "Autre projet",
};

export function Investir() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvestForm>({ resolver: zodResolver(investSchema) });

  const onSubmit = (data: InvestForm) => {
    setSent(true);
    const msg =
      `Bonjour CAFIRM, je suis ${data.name} (${data.country}).\n` +
      `Projet : ${projectLabels[data.project]}.\n` +
      `${data.message}\n` +
      `Contact : ${data.email} / ${data.phone}`;
    window.setTimeout(() => {
      window.open(waHref(msg), "_blank", "noopener,noreferrer");
    }, 1400);
  };

  return (
    <>
      <Seo
        title="Investir au Maroc — Création de société pour investisseurs étrangers | CAFIRM"
        description="Créez votre société au Maroc à distance : forme juridique, immatriculation, domiciliation, comptabilité, fiscalité et Office des changes. Accompagnement bilingue français-anglais."
        path="/investir-au-maroc"
        jsonLd={faqJsonLd(faq)}
      />

      <PageHero
        label="Investisseurs étrangers"
        title={
          <>
            Votre implantation au Maroc, <span className="text-gold">sécurisée de bout en bout</span>
          </>
        }
        intro="De la première visioconférence à votre première liasse fiscale : un partenaire local unique qui structure, crée et gère votre société marocaine — pendant que vous restez concentré sur votre marché."
        image="mosqueeHassanII"
        imagePosition="50% 60%"
      >
        <Reveal delay={0.15} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/prendre-rendez-vous?service=investir-au-maroc">
            Planifier une visio découverte <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="#formulaire-investisseur" variant="outline">
            Décrire mon projet
          </Button>
        </Reveal>
      </PageHero>

      {/* Pourquoi le Maroc */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <SectionHeading
              label="01 — Pourquoi le Maroc"
              title="Une destination d'investissement devenue évidente"
            />
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {whyMorocco.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.08}>
                  <Star8 className="h-5 w-5 text-gold" />
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{w.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2} className="mx-auto hidden w-full max-w-xs rounded-md bg-navy p-8 lg:block">
            <MoroccoMap className="h-auto w-full" />
          </Reveal>
        </div>
      </section>

      {/* Notre offre */}
      <section className="border-y border-line bg-ivory py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading
            label="02 — Notre offre dédiée"
            title="Tout ce qu'il faut pour s'implanter, en un seul endroit"
            intro="Six briques combinables selon votre projet — de la simple création à la gestion complète de votre filiale marocaine."
            center
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offer.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.07} className="h-full">
                <div className="card-lift h-full rounded-md border border-line bg-white p-7">
                  <span className="font-display text-2xl font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-site">
          <SectionHeading label="03 — Le parcours" title="Cinq étapes, un pilotage unique" />
          <ol className="mt-14 space-y-0">
            {steps.map((s, i) => (
              <Reveal key={s.title}>
                <li className="relative flex gap-6 pb-10 last:pb-0 sm:gap-10">
                  {i < steps.length - 1 && (
                    <span className="absolute left-7 top-14 h-[calc(100%-3.5rem)] w-px bg-line" aria-hidden="true" />
                  )}
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold bg-white font-display text-xl font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-2.5">
                    <h3 className="font-display text-xl font-semibold text-navy sm:text-2xl">{s.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Accompagnement à distance */}
      <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-24">
        <ZelligeGrid className="pointer-events-none absolute inset-0 h-full w-full" opacity={0.05} color="#F8F6F1" />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            label="04 — À distance, vraiment"
            title="Un accompagnement pensé pour les fuseaux horaires et les agendas chargés"
            intro="Visioconférences planifiées selon votre fuseau, documents partagés sur un espace sécurisé, points d'étape écrits après chaque jalon : vous savez toujours où en est votre dossier."
            dark
          />
          <Reveal delay={0.15} className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Video, title: "Visio & e-mail", text: "Rendez-vous en visioconférence et réponses écrites sous 24h ouvrées." },
              { icon: Globe2, title: "Français / English", text: "Échanges et reporting dans votre langue de travail." },
            ].map((c) => (
              <div key={c.title} className="rounded-md border border-white/15 bg-white/5 p-6">
                <c.icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-1.5 text-sm text-white/65">{c.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
          <SectionHeading label="05 — Questions fréquentes" title="Avant de vous lancer" />
          <Reveal delay={0.1}>
            <FAQAccordion items={faq} />
          </Reveal>
        </div>
      </section>

      {/* Formulaire investisseur */}
      <section id="formulaire-investisseur" className="border-t border-line bg-white py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.3fr]">
          <SectionHeading
            label="06 — Parlons de votre projet"
            title="Décrivez votre projet, nous revenons vers vous sous 24h"
            intro="Ce formulaire n'envoie rien à un serveur : à la validation, votre demande s'ouvre dans WhatsApp, pré-rédigée, prête à nous être envoyée."
          />
          <Reveal delay={0.1}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-md border border-line bg-ivory p-12 text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-gold"
                >
                  <Check className="h-8 w-8 text-white" strokeWidth={3} />
                </motion.span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy">Votre demande est prête</h3>
                <p className="mt-3 max-w-sm text-sm text-muted">
                  WhatsApp s'ouvre avec votre message pré-rédigé. S'il ne s'est pas ouvert automatiquement, cliquez
                  ci-dessous.
                </p>
                <Button href={waHref("Bonjour CAFIRM, je viens de remplir le formulaire investisseur sur votre site.")} external variant="gold" className="mt-6">
                  Ouvrir WhatsApp
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 rounded-md border border-line bg-ivory p-7 sm:grid-cols-2 lg:p-9">
                <div>
                  <label htmlFor="inv-name" className={labelCls}>Nom complet *</label>
                  <input id="inv-name" type="text" autoComplete="name" className={inputCls(!!errors.name)} {...register("name")} />
                  <FieldError error={errors.name?.message} />
                </div>
                <div>
                  <label htmlFor="inv-country" className={labelCls}>Pays de résidence *</label>
                  <input id="inv-country" type="text" autoComplete="country-name" className={inputCls(!!errors.country)} {...register("country")} />
                  <FieldError error={errors.country?.message} />
                </div>
                <div>
                  <label htmlFor="inv-email" className={labelCls}>E-mail *</label>
                  <input id="inv-email" type="email" autoComplete="email" className={inputCls(!!errors.email)} {...register("email")} />
                  <FieldError error={errors.email?.message} />
                </div>
                <div>
                  <label htmlFor="inv-phone" className={labelCls}>Téléphone / WhatsApp *</label>
                  <input id="inv-phone" type="tel" autoComplete="tel" className={inputCls(!!errors.phone)} {...register("phone")} />
                  <FieldError error={errors.phone?.message} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="inv-project" className={labelCls}>Type de projet *</label>
                  <select id="inv-project" className={inputCls(!!errors.project)} defaultValue="" {...register("project")}>
                    <option value="" disabled>Sélectionnez…</option>
                    {Object.entries(projectLabels).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                  <FieldError error={errors.project?.message} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="inv-message" className={labelCls}>Votre projet en quelques mots *</label>
                  <textarea id="inv-message" rows={4} className={inputCls(!!errors.message)} placeholder="Secteur d'activité, calendrier envisagé, questions principales…" {...register("message")} />
                  <FieldError error={errors.message?.message} />
                </div>
                <p className={`sm:col-span-2 ${errorCls} !text-muted`}>
                  * Champs obligatoires. Vos données ne sont utilisées que pour vous répondre — voir notre politique de confidentialité.
                </p>
                <div className="sm:col-span-2">
                  <Button type="submit" variant="gold" className="w-full sm:w-auto">
                    Envoyer ma demande <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
