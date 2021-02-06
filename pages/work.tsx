import Link from "next/link";
import { motion } from "framer-motion";

import { ProjectProps } from "./work/[id]";
import { variants, page, btn } from "../utils/framerMotion";

type ProjectsProps = {
  projects: ProjectProps[];
};

export default function Work({ projects }: ProjectsProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={page.exit}
      className="max-w-screen-xl min-h-full flex flex-col justify-center text-white px-4 md:px-8 py-8 md:pb-12 mx-auto"
    >
      <motion.ul
        variants={variants.staggerFast}
        className="sm:flex justify-center flex-wrap sm:-mx-2 lg:-mx-4 xl:-mx-8 xl:mx-auto"
      >
        {projects.map((project, i) => (
          <motion.li
            variants={variants.springInUp}
            whileHover={btn}
            whileTap={btn}
            key={i}
            className="sm:w-1/2 md:w-1/3 px-2 lg:px-4 xl:px-8 mb-12"
          >
            <Link href={`/work/${project.slug}`}>
              <div className="cursor-pointer">
                <div className="bg-white rounded-md overflow-hidden shadow-sw relative pt-3/4">
                  <img className="w-full h-full absolute inset-0 object-cover" src={project.img} alt="" />
                </div>
                <h2 className="text-lg lg:text-xl text-white py-1 lg:py-2">{project.title}</h2>
              </div>
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
