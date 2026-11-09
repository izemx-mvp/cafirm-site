import { starPoints } from "@/lib/star";

type Star8Props = {
  className?: string;
  filled?: boolean;
  strokeWidth?: number;
};

/** Étoile marocaine à 8 branches — accent signature de la marque. */
export function Star8({ className, filled = false, strokeWidth = 1.4 }: Star8Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <polygon
        points={starPoints(12, 12, 10)}
        fill={filled ? "currentColor" : "none"}
        stroke={filled ? "none" : "currentColor"}
        strokeWidth={strokeWidth}
        strokeLinejoin="miter"
      />
    </svg>
  );
}
