import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2, Check, Monitor, Phone } from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/config/site";
import { Seo } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Star8 } from "@/components/decor/Star8";
import { ZelligeGrid } from "@/components/decor/ZelligeGrid";
import { waHref } from "@/lib/wa";
import { inputCls, labelCls, FieldError } from "@/components/ui/form";

const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.name, hint: s.menuHint })),
  {
    value: "investir-au-maroc",
    label: "Investir au Maroc",
    hint: "Implantation et création à distance pour investisseurs étrangers",
  },
  { value: "autre", label: "Autre demande", hint: "Toute autre question comptable, fiscale ou de gestion" },
];

const slots = ["09h00 — 10h00", "10h00 — 11h00", "11h00 — 12h00", "14h00 — 15h00", "15h00 — 16h00", "16h00 — 17h00", "17h00 — 18h00"];

const modes = [
  { value: "cabinet", label: "Au cabinet", hint: "Casablanca — Gauthier", icon: Building2 },
  { value: "visio", label: "En visioconférence", hint: "Google Meet ou Teams", icon: Monitor },
  { value: "telephone", label: "Par téléphone", hint: "Nous vous appelons", icon: Phone },
] as const;

const todayIso = new Date().toISOString().slice(0, 10);

const schema = z.object({
  service: z.string().min(1, "Veuillez choisir l'objet du rendez-vous."),
  besoin: z.string().optional(),
  mode: z.enum(["cabinet", "visio", "telephone"], {
    errorMap: () => ({ message: "Veuillez choisir un mode de rendez-vous." }),
  }),
  date: z
    .string()
    .min(1, "Veuillez choisir une date.")
    .refine((d) => d >= todayIso, "Veuillez choisir une date à venir."),
  creneau: z.string().min(1, "Veuillez choisir un créneau."),
  name: z.string().min(2, "Veuillez indiquer votre nom complet."),
  company: z.string().optional(),
  email: z.string().email("Veuillez saisir une adresse e-mail valide."),
  phone: z.string().min(6, "Veuillez indiquer un numéro de téléphone."),
  consent: z.boolean().refine((v) => v, "Veuillez accepter l'utilisation de vos données pour être recontacté."),
});

type FormData = z.infer<typeof schema>;

const stepFields: (keyof FormData)[][] = [
  ["service"],
  ["mode", "date", "creneau"],
  ["name", "email", "phone", "consent"],
];

const stepTitles = ["Votre besoin", "Vos disponibilités", "Vos coordonnées"];

export function RendezVous() {
  const [params] = useSearchParams();
  const preselected = params.get("service") ?? "";
  const validPreselection = serviceOptions.some((o) => o.value === preselected) ? preselected : "";

  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: validPreselection, besoin: "", consent: false },
    mode: "onTouched",
  });

  const service = watch("service");
  const mode = watch("mode");
  const creneau = watch("creneau");

  const next = async () => {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => s + 1);
  };

  const buildMessage = (d: FormData) => {
    const serviceLabel = serviceOptions.find((o) => o.value === d.service)?.label ?? d.service;
    const modeLabel = modes.find((m) => m.value === d.mode)?.label ?? d.mode;
    return (
      `Bonjour CAFIRM, je souhaite prendre rendez-vous.\n` +
      `• Objet : ${serviceLabel}\n` +
      (d.besoin?.trim() ? `• Précision : ${d.besoin.trim()}\n` : "") +
      `• Mode : ${modeLabel}\n` +
      `• Date souhaitée : ${new Date(d.date + "T00:00:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}\n` +
      `• Créneau : ${d.creneau}\n` +
      `• Nom : ${d.name}${d.company?.trim() ? ` (${d.company.trim()})` : ""}\n` +
      `• Contact : ${d.email} / ${d.phone}`
    );
  };

  const onSubmit = (data: FormData) => {
    setDone(true);
    window.setTimeout(() => {
      window.open(waHref(buildMessage(data)), "_blank", "noopener,noreferrer");
    }, 1600);
  };

  return (
    <>
      <Seo
        title="Prendre rendez-vous — CAFIRM, cabinet comptable à Casablanca"
        description="Réservez un rendez-vous avec CAFIRM : au cabinet à Casablanca, en visioconférence ou par téléphone. Premier échange gratuit et sans engagement."
        path="/prendre-rendez-vous"
      />

      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-ivory py-14 lg:py-20">
        <ZelligeGrid className="pointer-events-none absolute inset-0 h-full w-full" opacity={0.05} />
        <div className="container-site relative max-w-3xl">
          <div className="text-center">
            <p className="flex items-center justify-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              <Star8 className="h-3.5 w-3.5" />
              Rendez-vous
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
              Réservons votre premier échange
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-muted">
              Trois étapes, deux minutes. Premier rendez-vous gratuit et sans engagement — au cabinet, en visio ou par
              téléphone.
            </p>
          </div>

          {!done && (
            <ol className="mx-auto mt-10 flex max-w-md items-center" aria-label="Progression">
              {stepTitles.map((t, i) => (
                <li key={t} className={`flex items-center ${i < 2 ? "flex-1" : ""}`}>
                  <span className="flex flex-col items-center gap-2">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full border font-display text-sm font-semibold transition-colors duration-300 ${
                        i < step
                          ? "border-gold bg-gold text-white"
                          : i === step
                            ? "border-navy bg-navy text-white"
                            : "border-line bg-white text-muted"
                      }`}
                      aria-current={i === step ? "step" : undefined}
                    >
                      {i < step ? <Check className="h-4 w-4" strokeWidth={3} /> : i + 1}
                    </span>
                    <span className={`hidden text-[10px] font-semibold uppercase tracking-[0.14em] sm:block ${i === step ? "text-navy" : "text-muted"}`}>
                      {t}
                    </span>
                  </span>
                  {i < 2 && <span className={`mx-2 mb-6 h-px flex-1 sm:mb-0 ${i < step ? "bg-gold" : "bg-line"}`} aria-hidden="true" />}
                </li>
              ))}
            </ol>
          )}

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-10">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-md border border-line bg-white p-10 text-center lg:p-14"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold"
                  >
                    <Check className="h-10 w-10 text-white" strokeWidth={3} />
                  </motion.span>
                  <h2 className="mt-7 font-display text-3xl font-semibold text-navy">Demande enregistrée !</h2>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
                    WhatsApp s'ouvre avec le récapitulatif de votre demande, prêt à nous être envoyé. Nous confirmons
                    chaque rendez-vous sous 24h ouvrées.
                  </p>
                  <div className="mx-auto mt-8 max-w-sm rounded-md border border-line bg-ivory p-5 text-left text-sm text-ink">
                    <p className="font-semibold text-navy">Récapitulatif</p>
                    <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-muted">{buildMessage(getValues())}</p>
                  </div>
                  <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button href={waHref(buildMessage(getValues()))} external variant="gold">
                      Confirmer sur WhatsApp
                    </Button>
                    <Button to="/" variant="outline">
                      Retour à l'accueil
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-md border border-line bg-white p-7 lg:p-10"
                >
                  {step === 0 && (
                    <fieldset>
                      <legend className="font-display text-2xl font-semibold text-navy">
                        Quel est l'objet de votre rendez-vous ?
                      </legend>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {serviceOptions.map((o) => (
                          <label
                            key={o.value}
                            className={`flex cursor-pointer items-start gap-3 rounded-md border p-4 transition-all duration-200 ${
                              service === o.value ? "border-gold bg-ivory shadow-sm" : "border-line hover:border-gold/50"
                            }`}
                          >
                            <input
                              type="radio"
                              value={o.value}
                              {...register("service")}
                              className="mt-1 h-4 w-4 accent-[#B8925A]"
                            />
                            <span>
                              <span className="block text-sm font-semibold text-navy">{o.label}</span>
                              <span className="mt-0.5 block text-xs leading-snug text-muted">{o.hint}</span>
                            </span>
                          </label>
                        ))}
                      </div>
                      <FieldError error={errors.service?.message} />
                      <div className="mt-6">
                        <label htmlFor="rdv-besoin" className={labelCls}>
                          Précisez votre besoin (facultatif)
                        </label>
                        <textarea
                          id="rdv-besoin"
                          rows={3}
                          placeholder="Contexte, questions, échéances…"
                          className={inputCls(false)}
                          {...register("besoin")}
                        />
                      </div>
                    </fieldset>
                  )}

                  {step === 1 && (
                    <fieldset>
                      <legend className="font-display text-2xl font-semibold text-navy">Vos disponibilités</legend>
                      <p className={`${labelCls} mt-6`}>Mode de rendez-vous *</p>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {modes.map((m) => (
                          <label
                            key={m.value}
                            className={`flex cursor-pointer flex-col items-center gap-2 rounded-md border p-5 text-center transition-all duration-200 ${
                              mode === m.value ? "border-gold bg-ivory shadow-sm" : "border-line hover:border-gold/50"
                            }`}
                          >
                            <input type="radio" value={m.value} {...register("mode")} className="sr-only" />
                            <m.icon className={`h-6 w-6 ${mode === m.value ? "text-gold" : "text-muted"}`} aria-hidden="true" />
                            <span className="text-sm font-semibold text-navy">{m.label}</span>
                            <span className="text-xs text-muted">{m.hint}</span>
                          </label>
                        ))}
                      </div>
                      <FieldError error={errors.mode?.message} />

                      <div className="mt-6">
                        <label htmlFor="rdv-date" className={labelCls}>
                          Date souhaitée *
                        </label>
                        <input id="rdv-date" type="date" min={todayIso} className={inputCls(!!errors.date)} {...register("date")} />
                        <FieldError error={errors.date?.message} />
                      </div>

                      <p className={`${labelCls} mt-6`}>Créneau horaire *</p>
                      <div className="flex flex-wrap gap-2">
                        {slots.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setValue("creneau", s, { shouldValidate: true })}
                            aria-pressed={creneau === s}
                            className={`rounded-[2px] border px-3.5 py-2 text-xs font-medium transition-all duration-200 ${
                              creneau === s ? "border-navy bg-navy text-white" : "border-line text-muted hover:border-gold hover:text-gold"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                      <input type="hidden" {...register("creneau")} />
                      <FieldError error={errors.creneau?.message} />
                    </fieldset>
                  )}

                  {step === 2 && (
                    <fieldset>
                      <legend className="font-display text-2xl font-semibold text-navy">Vos coordonnées</legend>
                      <div className="mt-6 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="rdv-name" className={labelCls}>Nom complet *</label>
                          <input id="rdv-name" type="text" autoComplete="name" className={inputCls(!!errors.name)} {...register("name")} />
                          <FieldError error={errors.name?.message} />
                        </div>
                        <div>
                          <label htmlFor="rdv-company" className={labelCls}>Société (facultatif)</label>
                          <input id="rdv-company" type="text" autoComplete="organization" className={inputCls(false)} {...register("company")} />
                        </div>
                        <div>
                          <label htmlFor="rdv-email" className={labelCls}>E-mail *</label>
                          <input id="rdv-email" type="email" autoComplete="email" className={inputCls(!!errors.email)} {...register("email")} />
                          <FieldError error={errors.email?.message} />
                        </div>
                        <div>
                          <label htmlFor="rdv-phone" className={labelCls}>Téléphone *</label>
                          <input id="rdv-phone" type="tel" autoComplete="tel" className={inputCls(!!errors.phone)} {...register("phone")} />
                          <FieldError error={errors.phone?.message} />
                        </div>
                      </div>
                      <label className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-muted">
                        <input type="checkbox" {...register("consent")} className="mt-0.5 h-4 w-4 accent-[#B8925A]" />
                        <span>
                          J'accepte que mes informations soient utilisées pour être recontacté(e) par CAFIRM dans le
                          cadre de ma demande. Aucune donnée n'est transmise à des tiers.
                        </span>
                      </label>
                      <FieldError error={errors.consent?.message} />
                    </fieldset>
                  )}

                  <div className="mt-9 flex items-center justify-between border-t border-line pt-6">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s - 1)}
                        className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-navy"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Précédent
                      </button>
                    ) : (
                      <span />
                    )}
                    {step < 2 ? (
                      <Button variant="primary" onClick={next}>
                        Continuer <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    ) : (
                      <Button type="submit" variant="gold">
                        Confirmer ma demande <Check className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {!done && (
            <p className="mt-6 text-center text-xs text-muted">
              Besoin d'une réponse immédiate ? Appelez-nous au{" "}
              <a href={`tel:${site.phone}`} className="font-medium text-navy underline-offset-2 hover:underline">
                {site.phoneDisplay}
              </a>
            </p>
          )}
        </div>
      </section>
    </>
  );
}
