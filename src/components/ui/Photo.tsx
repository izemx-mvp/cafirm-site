import type { CSSProperties } from "react";
import { photos, type PhotoKey } from "@/data/photos";

type PhotoProps = {
  name: PhotoKey;
  /** Largeur d'affichage pour le choix de la déclinaison (attribut `sizes`). */
  sizes?: string;
  className?: string;
  /** Point focal du recadrage `object-cover` (ex. "50% 30%"). */
  position?: string;
  /** Photo au-dessus de la ligne de flottaison : chargement immédiat. */
  priority?: boolean;
  /** Photo purement décorative : alt vide, ignorée des lecteurs d'écran. */
  decorative?: boolean;
};

/** Photo responsive (WebP, srcset) issue du registre `src/data/photos.ts`. */
export function Photo({ name, sizes = "100vw", className, position, priority = false, decorative = false }: PhotoProps) {
  const p = photos[name];
  const url = (w: number) => `/images/photos/${p.file}-${w}.webp`;
  const style: CSSProperties | undefined = position ? { objectPosition: position } : undefined;

  return (
    <img
      src={url(p.widths[p.widths.length - 1])}
      srcSet={p.widths.map((w) => `${url(w)} ${w}w`).join(", ")}
      sizes={sizes}
      width={p.width}
      height={p.height}
      alt={decorative ? "" : p.alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      className={className}
      style={style}
    />
  );
}
