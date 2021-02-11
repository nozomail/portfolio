import { motion } from "framer-motion";

import { planet1, planet2 } from "../utils/framerMotion";

export default function Planets() {
  return (
    <>
      <motion.div
        whileHover={planet1}
        whileTap={planet1}
        className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-rose-600 to-white absolute top-1/7 left-1/10 landscape:left-2 sm z-10"
      ></motion.div>
      <motion.div
        whileHover={planet2}
        whileTap={planet2}
        className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-tr from-rose-600 to-white absolute bottom-1/4 md:bottom-1/5 right-1/20 z-10"
      ></motion.div>
      <motion.div
        whileHover={planet1}
        whileTap={planet1}
        className="hidden md:block w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-gradient-to-tr from-orange-500 to-white absolute bottom-1/10 right-1/5 z-10"
      ></motion.div>
      <motion.div
        whileHover={planet1}
        whileTap={planet1}
        className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-tr from-pink-500 to-white absolute portrait:bottom-1/20 -bottom-5 md:-bottom-12 left-1/5 z-10"
      ></motion.div>
      <motion.div
        whileHover={planet2}
        whileTap={planet2}
        className="w-6 h-6 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-tr from-orange-700 md:from-emerald-700 to-white absolute bottom-1/4 left-1/20 z-10"
      ></motion.div>
      <motion.div
        whileHover={planet2}
        whileTap={planet2}
        className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-emerald-700 to-white absolute top-1/10 right-1/3 z-10"
      ></motion.div>
    </>
  );
}
