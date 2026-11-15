const rad = (deg: number) => (deg * Math.PI) / 180;
const fmt = (n: number) => Number(n.toFixed(2));

/**
 * Points of a khatam: the eight-pointed star made by two overlapping squares.
 * `R` is the distance from the centre to a tip.
 */
export function khatam(cx: number, cy: number, R: number, rotation = 0): string {
  const inner = (R * Math.cos(rad(45))) / Math.cos(rad(22.5));
  const points: string[] = [];
  for (let k = 0; k < 16; k++) {
    const angle = rad(rotation - 90 + k * 22.5);
    const radius = k % 2 === 0 ? R : inner;
    points.push(`${fmt(cx + radius * Math.cos(angle))},${fmt(cy + radius * Math.sin(angle))}`);
  }
  return points.join(' ');
}

/** Points of a regular polygon with `sides` corners, `R` from centre to corner. */
export function polygon(cx: number, cy: number, R: number, sides: number, rotation = 0): string {
  const points: string[] = [];
  for (let k = 0; k < sides; k++) {
    const angle = rad(rotation - 90 + (k * 360) / sides);
    points.push(`${fmt(cx + R * Math.cos(angle))},${fmt(cy + R * Math.sin(angle))}`);
  }
  return points.join(' ');
}

/** A star with `tips` points, alternating between the outer and inner radius. */
export function star(cx: number, cy: number, outer: number, inner: number, tips: number, rotation = 0): string {
  const points: string[] = [];
  for (let k = 0; k < tips * 2; k++) {
    const angle = rad(rotation - 90 + (k * 180) / tips);
    const radius = k % 2 === 0 ? outer : inner;
    points.push(`${fmt(cx + radius * Math.cos(angle))},${fmt(cy + radius * Math.sin(angle))}`);
  }
  return points.join(' ');
}
