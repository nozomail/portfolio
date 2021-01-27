export function getRandom(max: number, min: number, scale: number): number {
  const multiplier = Math.pow(10, scale);
  return Math.floor(Math.random() * (max * multiplier - min * multiplier) + min * multiplier) / multiplier;
}
