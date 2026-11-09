import { Star8 } from "@/components/decor/Star8";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  label: string;
  title: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
};

/** En-tête de section : libellé numéroté + filet, titre serif, chapeau. */
export function SectionHeading({ label, title, intro, dark = false, center = false }: SectionHeadingProps) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold ${
          center ? "justify-center" : ""
        }`}
      >
        <Star8 className="h-3 w-3 shrink-0" />
        {label}
        {!center && <span className="hidden h-px w-14 bg-gold/50 sm:block" aria-hidden="true" />}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-5 text-[15px] leading-relaxed sm:text-base ${dark ? "text-white/70" : "text-muted"}`}>{intro}</p>}
    </Reveal>
  );
}
