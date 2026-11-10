import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Star8 } from "./Star8";
import { ZelligeGrid } from "./ZelligeGrid";

/** Visuel du hero : documents comptables flottants, sans photo stock. */
export function DocumentCards() {
  const reduce = useReducedMotion();

  const float = (duration: number, delta = 8) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -delta, 0] },
          transition: { duration, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[460px]" aria-hidden="true">
      <ZelligeGrid className="absolute inset-0 h-full w-full" opacity={0.1} />

      {/* Bilan / reporting */}
      <motion.div
        {...float(7)}
        className="absolute left-0 top-10 w-[62%] rounded-md border border-line bg-white p-5 shadow-[0_24px_60px_-28px_rgba(14,42,71,0.35)]"
      >
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Bilan annuel</p>
          <Star8 className="h-3.5 w-3.5 text-gold" />
        </div>
        <p className="mt-1 font-display text-xl font-semibold text-navy">Exercice 2026</p>
        <div className="mt-4 flex h-24 items-end gap-2">
          {[38, 52, 44, 66, 58, 82, 96].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-navy/10" style={{ height: `${h}%` }}>
              <div className="h-1.5 w-full rounded-sm bg-gold" />
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-1.5 w-4/5 rounded bg-line" />
          <div className="h-1.5 w-3/5 rounded bg-line" />
        </div>
      </motion.div>

      {/* Déclaration TVA */}
      <motion.div
        {...float(8.5, 10)}
        className="absolute right-0 top-0 w-[52%] rounded-md border border-line bg-white p-5 shadow-[0_24px_60px_-28px_rgba(14,42,71,0.35)]"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy">
            <Check className="h-3.5 w-3.5 text-gold" strokeWidth={3} />
          </span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">TVA — Télédéclarée</p>
        </div>
        <div className="mt-4 space-y-2.5">
          {["Octobre", "Septembre", "Août"].map((m) => (
            <div key={m} className="flex items-center justify-between border-b border-line pb-2 text-xs">
              <span className="text-muted">{m}</span>
              <span className="font-medium text-navy">Déposée ✓</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Paie / CNSS */}
      <motion.div
        {...float(6, 7)}
        className="absolute bottom-6 right-6 w-[58%] rounded-md border border-line bg-white p-5 shadow-[0_24px_60px_-28px_rgba(14,42,71,0.35)]"
      >
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Paie & CNSS</p>
          <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold text-gold">À jour</span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-1.5 w-full rounded bg-line" />
          <div className="h-1.5 w-5/6 rounded bg-line" />
          <div className="h-1.5 w-2/3 rounded bg-line" />
        </div>
        <p className="mt-4 font-display text-lg font-semibold text-navy">
          24 bulletins <span className="text-gold">·</span> 0 retard
        </p>
      </motion.div>

      {/* Pastille chiffre */}
      <motion.div
        {...float(9, 6)}
        className="absolute bottom-0 left-6 flex items-center gap-3 rounded-md border border-gold/40 bg-navy px-4 py-3 shadow-[0_24px_50px_-24px_rgba(14,42,71,0.6)]"
      >
        <Star8 className="h-5 w-5 text-gold" filled />
        <div>
          <p className="font-display text-xl font-semibold leading-none text-white">98 %</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/60">clients fidèles</p>
        </div>
      </motion.div>
    </div>
  );
}
