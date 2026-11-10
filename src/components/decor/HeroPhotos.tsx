import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Photo } from "@/components/ui/Photo";
import { Star8 } from "./Star8";

/**
 * Visuel du hero de l'accueil : photo principale en arche (motif « bab »),
 * vignette zellige et deux éléments flottants (déclaration TVA, fidélité client).
 */
export function HeroPhotos() {
  const reduce = useReducedMotion();

  const float = (duration: number, delta = 8) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -delta, 0] },
          transition: { duration, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <div className="relative mx-auto w-full max-w-[460px] pb-12">
      {/* Arche principale */}
      <div className="relative ml-auto w-[80%]">
        <div className="arch absolute inset-0 translate-x-3 translate-y-3 border border-gold/60" aria-hidden="true" />
        <div className="arch relative aspect-[4/5] overflow-hidden bg-navy shadow-[0_40px_80px_-40px_rgba(14,42,71,0.6)]">
          <Photo
            name="reunionConseil"
            priority
            sizes="(min-width: 1024px) 370px, 80vw"
            position="45% 50%"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy/50 via-transparent to-transparent" aria-hidden="true" />
        </div>
      </div>

      {/* Vignette zellige */}
      <div className="absolute bottom-0 left-0 w-[38%] overflow-hidden rounded-md border-[5px] border-ivory bg-navy shadow-[0_24px_50px_-24px_rgba(14,42,71,0.55)]">
        <Photo name="zelligeFontaine" sizes="180px" position="50% 55%" className="aspect-square w-full object-cover" />
      </div>

      {/* Document flottant : déclaration TVA */}
      <motion.div
        {...float(8, 9)}
        aria-hidden="true"
        className="absolute left-0 top-[12%] w-[50%] rounded-md border border-line bg-white p-4 shadow-[0_24px_60px_-28px_rgba(14,42,71,0.45)]"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy">
            <Check className="h-3 w-3 text-gold" strokeWidth={3} />
          </span>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted sm:text-[10px]">TVA — Télédéclarée</p>
        </div>
        <div className="mt-3 space-y-2">
          {["Octobre", "Septembre"].map((m) => (
            <div key={m} className="flex items-center justify-between border-b border-line pb-1.5 text-[11px] sm:text-xs">
              <span className="text-muted">{m}</span>
              <span className="font-medium text-navy">Déposée ✓</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pastille fidélité */}
      <motion.div
        {...float(9, 6)}
        aria-hidden="true"
        className="absolute bottom-[16%] right-0 flex items-center gap-3 rounded-md border border-gold/40 bg-navy px-4 py-3 shadow-[0_24px_50px_-24px_rgba(14,42,71,0.6)]"
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
