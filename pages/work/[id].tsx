import { motion } from "framer-motion";

import { variants, page } from "../../utils/framerMotion";

export type ProjectProps = {
  slug: string;
  title: string;
  roles: string[];
  tools: string[];
  img: string;
  body: string;
};

export default function Project({ title, roles, tools, img, body }: ProjectProps) {
  return (
    <motion.article
      initial="initial"
      animate="animate"
      exit={page.exit}
      className="max-w-screen-xl min-h-full flex flex-col justify-center text-white px-4 md:px-8 py-8 md:pb-12 mx-auto"
    >
      <div className="md:flex">
        <motion.div variants={variants.staggerFast} className="md:w-1/2">
          <motion.h1
            variants={variants.fadeInUp}
            className="font-display text-3xl lg:text-5xl text-shadow-sw lg:text-shadow-lw"
          >
            {title}
          </motion.h1>
          <motion.div variants={variants.fadeInUp}>
            <ul className="mt-4 lg:mt-8">
              {roles.map((role, i) => (
                <li
                  key={i}
                  className="inline-block text-sm lg:text-base border border-white rounded px-2 lg:px-3 mr-1 lg:mr-2 mb-1 lg:mb-2"
                >
                  {role}
                </li>
              ))}
            </ul>
            <ul className="mt-2 lg:mt-4">
              {tools.map((tool, i) => (
                <li
                  key={i}
                  className="inline-block text-sm lg:text-base bg-white bg-opacity-30 rounded px-2 lg:px-3 mr-1 lg:mr-2 mb-1 lg:mb-2"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={variants.fadeInUp}
            className="md:hidden w-full pt-3/4 mt-8 bg-white rounded-md shadow-sw relative overflow-hidden"
          >
            <img src={img} alt={title} className="w-full h-full absolute inset-0 object-cover" />
          </motion.div>
          <motion.div
            variants={variants.fadeInUp}
            className="mt-8 lg:text-xl project-desc"
            dangerouslySetInnerHTML={{ __html: body }}
          ></motion.div>
        </motion.div>
        <motion.div
          variants={variants.projectImg}
          className="hidden md:flex flex-col justify-center w-1/2  ml-8 lg:ml-12"
        >
          <div className="w-full pt-3/4 bg-white rounded-md shadow-sw relative overflow-hidden">
            <img src={img} alt={title} className="w-full h-full absolute inset-0 object-cover" />
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/projects/`);
  const projects = await res.json();
  const paths = projects.map((project) => {
    return {
      params: {
        id: project.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.API_URL}/projects/${params.id}`);
  const data = await res.json();

  const { title, roles, tools, img, body } = data[0];

  return {
    props: {
      title,
      roles,
      tools,
      img,
      body,
    },
  };
}
