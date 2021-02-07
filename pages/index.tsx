import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { variants, home, rocket } from "../utils/framerMotion";

export default function Home() {
  const [isSmall, setIsSmall] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();

  function checkWidth() {
    if (window.innerWidth < 640) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    checkWidth();
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      controls.start(rocket().animate);
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <></>;
  }

  return (
    <motion.div initial="initial" animate="animate" exit={home.exit}>
      <div className="flex flex-col justify-center items-end text-white absolute inset-y-0 left-1/2 portrait:bottom-1/4 portrait:transform portrait:-translate-x-1/2 landscape:left-1/7 sm:left-1/7 2xl:left-1/7 z-20 pointer-events-none">
        <motion.h1
          variants={variants.staggerHomeHeading}
          className="font-display text-7xl md:text-8xl lg:text-9xl 2xl:text-10xl font-bold tracking-wider text-shadow-lw text-right mb-2 lg:mb-4"
        >
          <motion.span variants={variants.springInUp} className="block">
            Nozomi
          </motion.span>
          <motion.span variants={variants.springInUp} className="block">
            Mail
          </motion.span>
        </motion.h1>
        <motion.div
          variants={variants.homeSubHeading}
          className="lg:font-light text-lg md:text-2xl lg:text-3xl 2xl:text-4xl text-right text-shadow-sw lg:text-shadow-ss tracking-widest pr-2"
        >
          Front-End Developer
        </motion.div>
      </div>

      {isLoaded && (
        <motion.div
          initial={rocket(isSmall).initial}
          animate={controls}
          exit={rocket(isSmall).exit}
          className="home-rocket"
        >
          <div></div>
        </motion.div>
      )}
    </motion.div>
  );
}
