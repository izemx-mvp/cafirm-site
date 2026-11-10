import type { ReactNode } from "react";
import type { PhotoKey } from "@/data/photos";
import { Star8 } from "@/components/decor/Star8";
import { ZelligeGrid } from "@/components/decor/ZelligeGrid";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  label: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
  /** Photo affichée à droite du titre (sous le texte sur mobile). */
  image?: PhotoKey;
  /** Point focal du recadrage de la photo (ex. "50% 30%"). */
  imagePosition?: string;
};

/** Hero commun des pages intérieures : label étoilé, titre serif, chapeau, photo optionnelle. */
export function PageHero({ label, title, intro, children, image, imagePosition }: PageHeroProps) {
  const text = (
    <>
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
    </>
  );

  return (
    <section className="relative overflow-hidden border-b border-line bg-ivory">
      <ZelligeGrid className="pointer-events-none absolute inset-0 h-full w-full" opacity={0.05} />
      {image ? (
        <div className="container-site relative grid items-center gap-12 py-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-24">
          <div>{text}</div>
          <Reveal delay={0.2} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-md border border-gold/50" aria-hidden="true" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line bg-navy shadow-[0_30px_60px_-30px_rgba(14,42,71,0.45)]">
              <Photo
                name={image}
                priority
                sizes="(min-width: 1024px) 520px, (min-width: 640px) 576px, 100vw"
                position={imagePosition}
                className="h-full w-full object-cover"
              />
            </div>
            <Star8 className="absolute -left-2.5 -top-2.5 h-6 w-6 text-gold" filled />
          </Reveal>
        </div>
      ) : (
        <div className="container-site relative py-16 lg:py-24">{text}</div>
      )}
    </section>
  );
}
