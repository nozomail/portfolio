import Head from "next/head";
import { motion } from "framer-motion";

import { variants, page } from "../utils/framerMotion";

type AboutProps = {
  img: string;
  text: string;
  tools: {
    category: string;
    names: string[];
  }[];
};

export default function About({ img, text, tools }: AboutProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={page.exit}
      className="max-w-screen-xl min-h-full flex flex-col justify-center text-white px-4 md:px-8 py-8 md:pb-12 mx-auto"
    >
      <Head>
        <title>About | Nozomi Mail</title>
      </Head>
      <motion.section variants={variants.stagger} className="max-w-screen-sm mx-auto">
        <motion.h1
          variants={variants.aboutImg}
          className="w-32 h-32 bg-white border-4 border-white rounded-full mx-auto shadow-sw overflow-hidden"
        >
          <img src={img} alt="Nozomi Mail" />
        </motion.h1>
        <motion.div
          variants={variants.fadeInUp}
          className="mt-8 desc"
          dangerouslySetInnerHTML={{ __html: text }}
        ></motion.div>
      </motion.section>
      <section>
        <motion.h2 variants={variants.aboutHeading} className="font-display text-2xl text-shadow-sw text-center mt-20">
          Skills and Tools
        </motion.h2>
        <motion.div variants={variants.staggerAboutTools} className="sm:flex flex-wrap -mx-2">
          {tools.map((tool, i) => (
            <div key={i} className="sm:w-1/2 md:w-1/3 lg:w-1/4 mt-8 px-2">
              <motion.div variants={variants.springInUp} className="sm:h-full border border-white rounded-md">
                <h3 className="bg-white bg-opacity-30 py-1 px-4 text-center">{tool.category}</h3>
                <ul className="list list-disc list-inside flex flex-wrap py-2">
                  {tool.names.map((name, j) => (
                    <li key={j} className="py-1 px-4">
                      {name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/about/`);
  const data = await res.json();
  const { img, text, tools } = data[0];

  return {
    props: {
      img,
      text,
      tools,
    },
  };
}
