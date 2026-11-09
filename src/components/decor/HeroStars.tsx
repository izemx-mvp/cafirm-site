import { motion, useReducedMotion } from "framer-motion";
import { starPath } from "@/lib/star";

/**
 * Constellation d'étoiles à 8 branches qui se dessinent au chargement du hero
 * (animation pathLength, désactivée si prefers-reduced-motion).
 */
export function HeroStars({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const stars = [
    { cx: 150, cy: 130, r: 90, w: 1.2 },
    { cx: 420, cy: 360, r: 46, w: 1 },
    { cx: 600, cy: 90, r: 60, w: 1 },
    { cx: 720, cy: 300, r: 110, w: 1.4 },
    { cx: 320, cy: 60, r: 26, w: 0.8 },
  ];
  const links = [
    "M240 130 L374 360",
    "M466 360 L540 90",
    "M660 90 L688 230",
  ];

  const draw = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1.6, delay, ease: "easeInOut" as const },
        };

  return (
    <svg viewBox="0 0 860 460" className={className} aria-hidden="true" focusable="false" fill="none">
      {stars.map((s, i) => (
        <motion.path
          key={i}
          d={starPath(s.cx, s.cy, s.r)}
          stroke="#B8925A"
          strokeWidth={s.w}
          {...draw(0.15 * i)}
        />
      ))}
      {links.map((d, i) => (
        <motion.path key={d} d={d} stroke="#B8925A" strokeWidth="0.7" strokeDasharray="4 6" {...draw(0.8 + 0.2 * i)} />
      ))}
    </svg>
  );
}
