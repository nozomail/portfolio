import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Header from "../components/header";
import Planets from "../components/planets";
import Star, { StarProps } from "../components/star";
import { getRandom } from "../utils/random";

type LayoutProps = {
  children: React.ReactNode;
  pageTitle?: string;
};

const siteName = "Nozomi's Portfolio";

export default function Layout({ children, pageTitle }: LayoutProps) {
  const title = pageTitle ? `${pageTitle} | ${siteName}` : siteName;
  const [height, setHeight] = useState<number>(0);
  const [stars, setStars] = useState([]);
  const router = useRouter();

  function createStars() {
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
    setStars(newStars);
  }

  useEffect(() => {
    setHeight(window.innerHeight);
    createStars();

    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
      createStars();
    });
  }, []);

  return (
    <div
      className="flex flex-col bg-gradient-to-r from-indigo-900 to-fuchsia-900 overflow-hidden"
      style={{ height: `${height}px` }}
    >
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <div
        className={`transition-opacity duration-1000 ${
          router.pathname === "/" ? "opacity-100  delay-0" : "opacity-20  delay-1500"
        }`}
      >
        <div id="planets">
          <Planets />
        </div>

        <div id="stars">
          {stars.map((star, i) => (
            <Star {...star} key={i} />
          ))}
        </div>
      </div>

      <main className="flex-grow relative">
        <div className="absolute inset-0 z-20 overflow-y-auto overflow-x-hidden">{children}</div>
      </main>
    </div>
  );
}
