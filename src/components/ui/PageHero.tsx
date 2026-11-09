import type { ReactNode } from "react";
import { Star8 } from "@/components/decor/Star8";
import { ZelligeGrid } from "@/components/decor/ZelligeGrid";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  label: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
};

/** Hero commun des pages intérieures : label étoilé, titre serif, chapeau. */
export function PageHero({ label, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ivory">
      <ZelligeGrid className="pointer-events-none absolute inset-0 h-full w-full" opacity={0.05} />
      <div className="container-site relative py-16 lg:py-24">
        <Reveal className="max-w-3xl">
          <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            <Star8 className="h-3.5 w-3.5" />
            {label}
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-navy sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {intro && <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
