export function getRandom(max, min, scale) {
  const multiplier = Math.pow(10, scale);
  return Math.floor(Math.random() * (max * multiplier - min * multiplier) + min * multiplier) / multiplier;
}
