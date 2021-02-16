import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

import { variants, page, glowBtn } from "../utils/framerMotion";

export default function FourOhFour() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={page.exit}
      className="max-w-screen-xl min-h-full flex flex-col justify-center text-white px-4 md:px-8 py-8 md:pb-12 mx-auto"
    >
      <Head>
        <title>Page Not Found | Nozomi Mail</title>
      </Head>

      <motion.div variants={variants.stagger} className="text-center">
        <motion.h1
          variants={variants.springInUp}
          className="font-display text-2xl sm:text-3xl md:text-4xl text-shadow-sw text-center"
        >
          404 - Page Not Found
        </motion.h1>
        <motion.button
          variants={variants.springInUp}
          whileHover={glowBtn}
          whileTap={glowBtn}
          className="text-white border border-white rounded-full py-2 px-4 mt-8"
        >
          <Link href="/">Go back Home</Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
