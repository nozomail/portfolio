import { motion } from "framer-motion";

type AboutProps = {
  img: string;
  text: string;
  tools: {
    category: string;
    names: string[];
  }[];
};

const fadeIn = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
};

const stagger1 = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const stagger2 = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1.25,
    },
  },
};

export default function About({ img, text, tools }: AboutProps) {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <motion.section variants={stagger1} className="max-w-screen-sm mx-auto">
        <motion.h1 variants={fadeIn} className="w-32 rounded-full mx-auto shadow-sw">
          <img src={img} alt="Nozomi Mail" className="w-32 ring-4 rounded-full ring-white" />
        </motion.h1>
        <motion.p variants={fadeIn} className="mt-8" dangerouslySetInnerHTML={{ __html: text }}></motion.p>
      </motion.section>
      <section>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.8 } }}
          className="font-display text-2xl text-shadow-sw text-center mt-20"
        >
          Skills and Tools
        </motion.h2>
        <motion.div variants={stagger2} className="sm:flex flex-wrap -mx-2">
          {tools.map((tool, i) => (
            <div key={i} className="sm:w-1/2 md:w-1/3 lg:w-1/4 mt-8 px-2">
              <motion.div variants={fadeInUp} className="sm:h-full border border-white rounded-md">
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
