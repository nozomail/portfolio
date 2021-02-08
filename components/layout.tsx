import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import Header from "../components/header";
import Planets from "../components/planets";
import Star from "../components/star";
import { createStars } from "../utils/createStars";
import { layout } from "../utils/framerMotion";

type LayoutProps = {
  children: React.ReactNode;
  pageTitle?: string;
};

const siteName = "NOZOMI MAIL";

export default function Layout({ children, pageTitle }: LayoutProps) {
  const title = pageTitle ? `${pageTitle} | ${siteName}` : siteName;
  const [isLoaded, setIsLoaded] = useState(false);
  const [height, setHeight] = useState<number>(0);
  const [stars, setStars] = useState([]);
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
      setStars(createStars());
    });

    setHeight(window.innerHeight);
    setStars(createStars());

    if (!isLoaded) {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current.scroll({ top: 0 });
      }, 500);
    }
  }, [children]);

  useEffect(() => {
    if (isLoaded) {
      controls.start(layout.animate);
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <></>;
  }

  return (
    <motion.div
      initial={layout.initial}
      animate={controls}
      className="flex flex-col bg-gradient-to-r from-indigo-900 to-fuchsia-900 overflow-hidden"
      style={{ height: `${height}px` }}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;400;600;700&family=Philosopher:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
      </Head>

      <Header />

      <div
        className={`transition-opacity duration-1000 ${
          router.pathname === "/" ? "opacity-100 delay-0" : "opacity-20 delay-1500"
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
        <div ref={scrollRef} className="absolute inset-0 z-20 overflow-y-auto overflow-x-hidden scroll-content">
          {children}
        </div>
      </main>
    </motion.div>
  );
}
