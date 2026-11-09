import { starPath } from "@/lib/star";

/** Portrait illustré du dirigeant : monogramme élégant, sans photo stock. */
export function Monogram({ initials, className }: { initials: string; className?: string }) {
  return (
    <svg viewBox="0 0 240 280" className={className} role="img" aria-label={`Monogramme ${initials}`}>
      <rect width="240" height="280" fill="#0E2A47" />
      <path d={starPath(120, 118, 150)} stroke="#B8925A" strokeWidth="0.8" fill="none" opacity="0.25" />
      <path d={starPath(120, 118, 96)} stroke="#B8925A" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="120" cy="118" r="62" fill="#1C3B5A" stroke="#B8925A" strokeWidth="1.2" />
      <text
        x="120"
        y="140"
        textAnchor="middle"
        fill="#F8F6F1"
        fontSize="56"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontWeight="600"
        letterSpacing="2"
      >
        {initials}
      </text>
      <line x1="84" y1="222" x2="156" y2="222" stroke="#B8925A" strokeWidth="1" />
      <path d={starPath(120, 222, 7)} fill="#B8925A" />
    </svg>
  );
}
