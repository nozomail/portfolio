import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { getRandom } from "../utils/random";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.addEventListener("resize", setStars);

    return setStars();
  }, []);

  return <Component {...pageProps} />;
}

function setStars() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const starLength = Math.floor((windowWidth * windowHeight) / 1000);

  const existingContainer = document.getElementById("stars");
  if (existingContainer !== null) {
    document.getElementById("__next").removeChild(existingContainer);
  }

  const newContainer = document.createElement("div");
  newContainer.id = "stars";
  document.getElementById("__next").appendChild(newContainer);

  for (let i = 0; i < starLength; i++) {
    const size = getRandom(1, 4, 0);
    if (i % 5 !== 0 && size >= 3) continue;
    const star = document.createElement("span");
    const x = getRandom(0, 1, 2) * windowWidth;
    const y = getRandom(0, 1, 2) * windowHeight;
    const duration = getRandom(5, 20, 0);
    const delay = getRandom(0, 5, 2);
    star.classList.add("g_star");
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;
    if (i % 4 === 0 || size >= 4) star.style.animation = "none";
    newContainer.appendChild(star);
  }

  return () => {
    document.getElementById("__next").removeChild(newContainer);
  };
}
