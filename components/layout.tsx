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

export default function Layout({ children }: LayoutProps) {
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
        <div
          ref={scrollRef}
          className={`absolute inset-0 z-20 overflow-y-auto overflow-x-hidden scroll-content ${
            router.pathname === "/" ? "pointer-events-none" : ""
          }`}
        >
          {children}
        </div>
      </main>
    </motion.div>
  );
}
