import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import { Seo, accountingServiceJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { waHref } from "@/lib/wa";
import { inputCls, labelCls, FieldError } from "@/components/ui/form";

const schema = z.object({
  name: z.string().min(2, "Veuillez indiquer votre nom."),
  email: z.string().email("Veuillez saisir une adresse e-mail valide."),
  subject: z.string().min(1, "Veuillez choisir un sujet."),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères."),
});

type ContactForm = z.infer<typeof schema>;

const subjects = [
  "Tenue comptable",
  "Fiscalité & déclarations",
  "Création d'entreprise",
  "Conseil & assistance administrative",
  "Investir au Maroc",
  "Autre demande",
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(schema) });

  const onSubmit = (data: ContactForm) => {
    setSent(true);
    const msg = `Bonjour CAFIRM, je suis ${data.name}.\nSujet : ${data.subject}\n${data.message}\nE-mail : ${data.email}`;
    window.setTimeout(() => {
      window.open(waHref(msg), "_blank", "noopener,noreferrer");
    }, 1400);
  };

  const cards = [
    {
      icon: Phone,
      title: "Téléphone",
      lines: [site.phoneDisplay, `WhatsApp : ${site.whatsappDisplay}`],
      href: `tel:${site.phone}`,
      cta: "Appeler le cabinet",
    },
    {
      icon: Mail,
      title: "E-mail",
      lines: [site.email, "Réponse sous 24h ouvrées"],
      href: `mailto:${site.email}`,
      cta: "Écrire un e-mail",
    },
    {
      icon: MapPin,
      title: "Adresse",
      lines: [site.address.street, `${site.address.district}, ${site.address.postalCode} ${site.address.city}`],
      href: "#carte",
      cta: "Voir sur la carte",
    },
    {
      icon: Clock,
      title: "Horaires",
      lines: site.hours.map((h) => `${h.days} : ${h.time}`),
      href: "/prendre-rendez-vous",
      cta: "Prendre rendez-vous",
      internal: true,
    },
  ];

  return (
    <>
      <Seo
        title="Contact — CAFIRM, cabinet comptable et fiscal à Casablanca"
        description="Contactez CAFIRM à Casablanca : téléphone, WhatsApp, e-mail ou formulaire. Cabinet situé quartier Gauthier, ouvert du lundi au vendredi de 9h à 18h."
        path="/contact"
        jsonLd={accountingServiceJsonLd()}
      />

      <PageHero
        label="Contact"
        title={
          <>
            Parlons de votre <span className="text-gold">entreprise</span>
          </>
        }
        intro="Téléphone, WhatsApp, e-mail ou visite au cabinet : choisissez le canal qui vous convient. Toute demande reçoit une réponse sous 24 heures ouvrées."
        image="casablancaCorniche"
        imagePosition="35% 50%"
      />

      {/* Cartes contact */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="h-full">
              <div className="card-lift flex h-full flex-col rounded-md border border-line bg-ivory p-7">
                <c.icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <h2 className="mt-4 font-display text-xl font-semibold text-navy">{c.title}</h2>
                <div className="mt-2 flex-1 space-y-1">
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm text-muted">
                      {l}
                    </p>
                  ))}
                </div>
                <a
                  href={c.href}
                  className="link-underline mt-5 inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy"
                >
                  {c.cta} <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Formulaire + carte */}
      <section className="border-t border-line bg-ivory py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-navy">Envoyez-nous un message</h2>
            <p className="mt-3 text-sm text-muted">
              À la validation, votre message s'ouvre dans WhatsApp, pré-rédigé et prêt à être envoyé — aucune donnée
              n'est stockée sur ce site.
            </p>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 flex flex-col items-center rounded-md border border-line bg-white p-12 text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-gold"
                >
                  <Check className="h-8 w-8 text-white" strokeWidth={3} />
                </motion.span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy">Message prêt à l'envoi</h3>
                <p className="mt-3 max-w-sm text-sm text-muted">
                  WhatsApp s'ouvre avec votre message. S'il ne s'est pas ouvert, cliquez ci-dessous.
                </p>
                <Button
                  href={waHref("Bonjour CAFIRM, je viens de remplir le formulaire de contact de votre site.")}
                  external
                  variant="gold"
                  className="mt-6"
                >
                  Ouvrir WhatsApp
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="ct-name" className={labelCls}>Nom complet *</label>
                  <input id="ct-name" type="text" autoComplete="name" className={inputCls(!!errors.name)} {...register("name")} />
                  <FieldError error={errors.name?.message} />
                </div>
                <div>
                  <label htmlFor="ct-email" className={labelCls}>E-mail *</label>
                  <input id="ct-email" type="email" autoComplete="email" className={inputCls(!!errors.email)} {...register("email")} />
                  <FieldError error={errors.email?.message} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="ct-subject" className={labelCls}>Sujet *</label>
                  <select id="ct-subject" defaultValue="" className={inputCls(!!errors.subject)} {...register("subject")}>
                    <option value="" disabled>Sélectionnez un sujet…</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <FieldError error={errors.subject?.message} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="ct-message" className={labelCls}>Message *</label>
                  <textarea id="ct-message" rows={5} className={inputCls(!!errors.message)} {...register("message")} />
                  <FieldError error={errors.message?.message} />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit">
                    Envoyer le message <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.15}>
            <div id="carte" className="h-full min-h-[380px] overflow-hidden rounded-md border border-line">
              <iframe
                title="Plan d'accès au cabinet CAFIRM, Casablanca"
                src={site.mapEmbedUrl}
                className="h-full w-full"
                style={{ border: 0, minHeight: 380 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
