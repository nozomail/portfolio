import Link from "next/link";
import { motion } from "framer-motion";

import { ProjectProps } from "./work/[id]";

type ProjectsProps = {
  projects: ProjectProps[];
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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Work({ projects }: ProjectsProps) {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <motion.ul variants={stagger} className="sm:flex justify-center flex-wrap sm:-mx-2 lg:-mx-4 xl:-mx-8 xl:mx-auto">
        {projects.map((project, i) => (
          <motion.li variants={fadeInUp} key={i} className="sm:w-1/2 md:w-1/3 px-2 lg:px-4 xl:px-8 mb-12">
            <Link href={`/work/${project.slug}`}>
              <a>
                <div className="bg-white rounded-md overflow-hidden shadow-sw relative pt-3/4">
                  <img className="w-full h-full absolute inset-0 object-cover" src={project.img} alt="" />
                </div>
                <h2 className="text-lg lg:text-xl text-white py-1 lg:py-2">{project.title}</h2>
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/projects/`);
  const data = await res.json();

  return {
    props: {
      projects: data,
    },
  };
}
