import { useId } from "react";
import { starPoints } from "@/lib/star";

type ZelligeGridProps = {
  className?: string;
  color?: string;
  opacity?: number;
};

/**
 * Trame zellige très légère : grille de fines étoiles à 8 branches reliées
 * par des filets, utilisée en fond de hero, de sections et du footer.
 */
export function ZelligeGrid({ className, color = "#B8925A", opacity = 0.07 }: ZelligeGridProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const tile = 112;
  const c = tile / 2;
  const R = 26;

  return (
    <svg className={className} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={`zellige-${id}`} width={tile} height={tile} patternUnits="userSpaceOnUse">
          <g stroke={color} strokeWidth="1" fill="none">
            <polygon points={starPoints(c, c, R)} />
            <line x1={c + R} y1={c} x2={tile} y2={c} />
            <line x1={0} y1={c} x2={c - R} y2={c} />
            <line x1={c} y1={c + R} x2={c} y2={tile} />
            <line x1={c} y1={0} x2={c} y2={c - R} />
            <circle cx={0} cy={0} r={3} />
            <circle cx={tile} cy={0} r={3} />
            <circle cx={0} cy={tile} r={3} />
            <circle cx={tile} cy={tile} r={3} />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#zellige-${id})`} opacity={opacity} />
    </svg>
  );
}
