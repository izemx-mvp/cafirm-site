/** Géométrie de l'étoile marocaine à 8 branches (motif signature du logo). */

/** Sommets d'une étoile à 8 branches (16 points), centrée en (cx, cy), rayon R. */
export function starVertices(cx: number, cy: number, R: number): [number, number][] {
  const inner = R * 0.7654; // rayon des sommets intérieurs (intersection des deux carrés)
  const pts: [number, number][] = [];
  for (let i = 0; i < 16; i++) {
    const angle = (i * 22.5 * Math.PI) / 180;
    const r = i % 2 === 0 ? R : inner;
    pts.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
  }
  return pts;
}

export function starPoints(cx: number, cy: number, R: number): string {
  return starVertices(cx, cy, R)
    .map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`)
    .join(" ");
}

export function starPath(cx: number, cy: number, R: number): string {
  const pts = starVertices(cx, cy, R);
  return (
    pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`).join(" ") + " Z"
  );
}
