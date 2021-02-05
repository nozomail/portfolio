import styles from "../styles/home.module.scss";
import Layout from "../components/layout";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const controls = useAnimation();
  const [isSmall, setIsSmall] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  function checkWidth() {
    if (window.innerWidth < 640) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  }

  useEffect(() => {
    setIsLoaded(true);
    window.addEventListener("resize", checkWidth);
    checkWidth();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      controls.start({
        x: 0,
        y: 0,
        transition: {
          duration: 3,
          ease: [0.5, 0, 0, 1],
        },
      });
    }
  }, [isLoaded]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{
        opacity: 0,
        transition: {
          delay: 2,
        },
      }}
    >
      <div className="flex flex-col justify-center items-end text-white absolute inset-y-0 left-1/2 portrait:bottom-1/4 portrait:transform portrait:-translate-x-1/2 landscape:left-1/7 sm:left-1/7 2xl:left-1/7 z-20 pointer-events-none">
        <h1 className="font-display text-7xl md:text-8xl lg:text-9xl 2xl:text-10xl font-bold tracking-wider text-shadow-lw text-right mb-2 lg:mb-4">
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            className="block"
          >
            Nozomi
          </motion.span>
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1, delay: 0.25 }}
            className="block"
          >
            Mail
          </motion.span>
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:font-light text-lg md:text-2xl lg:text-3xl 2xl:text-4xl text-right text-shadow-sw lg:text-shadow-ss tracking-widest pr-2"
        >
          Front-End Developer
        </motion.div>
      </div>

      {isLoaded && (
        <motion.div
          initial={{ x: isSmall ? "100%" : "200%", y: isSmall ? "150%" : "-100%" }}
          animate={controls}
          exit={{
            x: "-60vw",
            y: isSmall ? "-60vh" : "60vh",
            scale: 8,
            transition: {
              duration: 2,
              ease: [0.7, 0, 0.84, 0],
            },
          }}
          className={styles.rocket}
        >
          <div></div>
        </motion.div>
      )}
    </motion.div>
  );
}
