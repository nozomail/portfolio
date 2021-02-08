import { StarProps } from "../components/star";

function getRandom(max: number, min: number, scale: number): number {
  const multiplier = Math.pow(10, scale);
  return Math.floor(Math.random() * (max * multiplier - min * multiplier) + min * multiplier) / multiplier;
}

export function createStars() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const starLength = Math.floor((windowWidth * windowHeight) / 500);
  let newStars = [];
  for (let i = 0; i < starLength; i++) {
    let star = {} as StarProps;
    star.size = getRandom(1, 6, 0);
    if (i % 2 !== 0 && star.size >= 4) continue;
    if (i % 3 !== 0 && star.size >= 3) continue;
    const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    star.x = getRandom(0, 1, 2) * windowWidth;
    star.y = getRandom(0, 1, 2) * windowHeight;
    star.duration = getRandom(3, 20, 2);
    star.delay = getRandom(0, 20, 2) * plusOrMinus;
    star.stay = i % 4 === 0;
    newStars.push(star);
  }

  return newStars;
}
