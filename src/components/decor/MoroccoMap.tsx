import { motion, useReducedMotion } from "framer-motion";
import { starPath } from "@/lib/star";

/** Carte du Maroc stylisée en filets dorés, avec Casablanca mise en valeur. */
export function MoroccoMap({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const outline =
    "M196 22 L230 34 L268 46 L300 52 L322 62 L330 88 L324 112 L302 148 L272 182 L248 214 L232 252 L214 280 L196 302 L182 322 L160 352 L138 396 L112 444 L98 466 L24 466 L26 434 L32 396 L40 360 L52 328 L64 300 L82 276 L92 248 L96 220 L104 192 L118 168 L136 148 L152 128 L160 104 L172 76 L182 48 Z";

  const cities = [
    { name: "Tanger", x: 196, y: 30, main: false },
    { name: "Rabat", x: 162, y: 100, main: false },
    { name: "Casablanca", x: 142, y: 124, main: true },
    { name: "Marrakech", x: 148, y: 196, main: false },
    { name: "Agadir", x: 100, y: 244, main: false },
    { name: "Dakhla", x: 46, y: 420, main: false },
  ];

  return (
    <svg viewBox="0 0 360 490" className={className} aria-hidden="true" focusable="false" fill="none">
      <motion.path
        d={outline}
        stroke="#B8925A"
        strokeWidth="1.5"
        strokeLinejoin="round"
        initial={reduce ? undefined : { pathLength: 0 }}
        whileInView={reduce ? undefined : { pathLength: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
      />
      <path d={starPath(290, 390, 46)} stroke="#B8925A" strokeWidth="0.8" opacity="0.4" />
      {cities.map((c) => (
        <g key={c.name}>
          {c.main ? (
            <>
              <path d={starPath(c.x, c.y, 9)} fill="#B8925A" />
              <circle cx={c.x} cy={c.y} r="16" stroke="#B8925A" strokeWidth="0.8" opacity="0.6">
                <animate attributeName="r" values="12;20;12" dur="3.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3.2s" repeatCount="indefinite" />
              </circle>
              <text x={c.x + 22} y={c.y + 4} fill="#F8F6F1" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="500">
                {c.name}
              </text>
            </>
          ) : (
            <>
              <circle cx={c.x} cy={c.y} r="3" fill="#F8F6F1" opacity="0.8" />
              <text x={c.x + 9} y={c.y + 4} fill="#F8F6F1" fontSize="10" fontFamily="Inter, sans-serif" opacity="0.65">
                {c.name}
              </text>
            </>
          )}
        </g>
      ))}
    </svg>
  );
}
