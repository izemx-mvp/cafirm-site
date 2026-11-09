import { useId } from "react";
import type { Category } from "@/data/posts";
import { starPath, starPoints } from "@/lib/star";

/**
 * Couvertures abstraites générées en SVG, une composition par catégorie
 * (pas de photos stock) : navy, filets ivoire et accents dorés.
 */
export function ArticleCover({ category, className }: { category: Category; className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

  return (
    <svg
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Illustration abstraite de l'article"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`cov-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E2A47" />
          <stop offset="1" stopColor="#1C3B5A" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill={`url(#cov-${uid})`} />
      <path d={starPath(700, 70, 110)} stroke="#B8925A" strokeWidth="1" fill="none" opacity="0.35" />
      <path d={starPath(90, 390, 60)} stroke="#F8F6F1" strokeWidth="0.8" fill="none" opacity="0.18" />

      {category === "fiscalite" && (
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={180 + i * 85}
              y={330 - i * 42}
              width="38"
              height={60 + i * 42}
              fill="none"
              stroke="#F8F6F1"
              strokeWidth="1.2"
              opacity="0.8"
            />
          ))}
          <path d="M170 320 L600 110" stroke="#B8925A" strokeWidth="2" />
          <polygon points={starPoints(612, 104, 14)} fill="#B8925A" />
          <text x="170" y="100" fill="#F8F6F1" opacity="0.25" fontSize="64" fontFamily="Cormorant Garamond, serif">
            %
          </text>
        </g>
      )}

      {category === "comptabilite" && (
        <g>
          <rect x="250" y="90" width="300" height="280" fill="none" stroke="#F8F6F1" strokeWidth="1.2" opacity="0.85" />
          <rect x="268" y="72" width="300" height="280" fill="none" stroke="#B8925A" strokeWidth="1" opacity="0.6" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={i} x1="280" y1={140 + i * 36} x2="520" y2={140 + i * 36} stroke="#F8F6F1" strokeWidth="1" opacity="0.5" />
          ))}
          <line x1="440" y1="110" x2="440" y2="350" stroke="#B8925A" strokeWidth="1" opacity="0.7" />
          <polygon points={starPoints(250, 90, 12)} fill="#B8925A" />
        </g>
      )}

      {category === "creation" && (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={210 + i * 100}
              y={320 - i * 62}
              width="78"
              height="20"
              fill="none"
              stroke="#F8F6F1"
              strokeWidth="1.2"
              opacity="0.85"
            />
          ))}
          <path d="M230 300 C 320 260 420 200 540 128" stroke="#B8925A" strokeWidth="1.6" fill="none" strokeDasharray="6 7" />
          <polygon points={starPoints(556, 118, 16)} fill="#B8925A" />
          <circle cx="230" cy="300" r="5" fill="#F8F6F1" />
        </g>
      )}

      {category === "investir" && (
        <g>
          <path
            d="M430 90 L470 104 L478 140 L458 186 L436 224 L420 268 L398 310 L376 352 L320 352 L326 300 L342 256 L356 216 L368 176 L384 136 Z"
            stroke="#F8F6F1"
            strokeWidth="1.3"
            fill="none"
            opacity="0.85"
          />
          <polygon points={starPoints(392, 170, 10)} fill="#B8925A" />
          <path d="M392 170 C 500 120 560 150 620 220" stroke="#B8925A" strokeWidth="1.2" fill="none" strokeDasharray="5 6" />
          <path d="M392 170 C 300 100 240 110 180 160" stroke="#B8925A" strokeWidth="1.2" fill="none" strokeDasharray="5 6" />
          <circle cx="620" cy="220" r="4" fill="#B8925A" />
          <circle cx="180" cy="160" r="4" fill="#B8925A" />
        </g>
      )}

      {category === "social" && (
        <g>
          {[
            { x: 400, y: 150, r: 34 },
            { x: 280, y: 280, r: 26 },
            { x: 520, y: 280, r: 26 },
            { x: 400, y: 330, r: 22 },
          ].map((c, i) => (
            <circle key={i} cx={c.x} cy={c.y} r={c.r} fill="none" stroke="#F8F6F1" strokeWidth="1.2" opacity="0.85" />
          ))}
          <line x1="400" y1="184" x2="292" y2="258" stroke="#B8925A" strokeWidth="1" />
          <line x1="400" y1="184" x2="508" y2="258" stroke="#B8925A" strokeWidth="1" />
          <line x1="302" y1="296" x2="382" y2="322" stroke="#B8925A" strokeWidth="1" />
          <line x1="498" y1="296" x2="418" y2="322" stroke="#B8925A" strokeWidth="1" />
          <polygon points={starPoints(400, 150, 12)} fill="#B8925A" />
        </g>
      )}
    </svg>
  );
}
