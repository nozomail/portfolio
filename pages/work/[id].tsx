import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { variants, page, glowBtn, glowText } from "../../utils/framerMotion";

export type ProjectProps = {
  slug: string;
  title: string;
  type: string;
  roles: string[];
  tools: string[];
  img: string;
  body: string;
  url: string | null;
  repo: string | null;
  prev: string;
  next: string;
};

export default function Project({ title, type, roles, tools, img, body, url, repo, prev, next }: ProjectProps) {
  const router = useRouter();
  const [isSwitching, setIsSwitching] = useState(false);

  function handleNav(path: string) {
    router.push(path);
    setIsSwitching(true);
    setTimeout(() => {
      setIsSwitching(false);
    }, 1000);
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="max-w-screen-xl min-h-full flex flex-col justify-center text-white px-4 md:px-8 py-8 md:pb-12 mx-auto"
    >
      <Head>
        <title>{title} | Nozomi Mail</title>
      </Head>
      <AnimatePresence>
        {isSwitching ? (
          <motion.div key="1" exit={{ opacity: 0 }}></motion.div>
        ) : (
          <motion.div key="2" initial="initial" animate="animate" exit={{ opacity: 0, transition: { delay: 0.5 } }}>
            <div className="md:flex">
              <motion.div variants={variants.staggerFast} exit={page.exit} className="md:w-1/2">
                <motion.h1 variants={variants.fadeInUp}>
                  <h1 className="font-display text-3xl lg:text-5xl text-shadow-sw lg:text-shadow-lw">{title}</h1>
                  <div className="text-sm lg:text-base lg:px-1">{type} Project</div>
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
                  <ul className="mt-1 lg:mt-2">
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
                  className="md:hidden w-full pt-3/4 mt-8 rounded-xl relative overflow-hidden"
                >
                  <img src={img} alt={title} className="w-full h-full rounded-xl absolute inset-0 object-cover" />
                </motion.div>
                <motion.div variants={variants.fadeInUp}>
                  <div dangerouslySetInnerHTML={{ __html: body }} className="mt-8 lg:text-xl desc"></div>
                  <div className="">
                    {repo && (
                      <a href={repo} target="_blank">
                        <motion.button
                          whileHover={glowBtn}
                          whileTap={glowBtn}
                          type="button"
                          className="w-24 border border-white rounded-full py-2 px-4 mt-6 mr-4"
                        >
                          Github
                        </motion.button>
                      </a>
                    )}
                    {url && (
                      <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                        <motion.button
                          whileHover={glowBtn}
                          whileTap={glowBtn}
                          type="button"
                          className="w-24 border border-white rounded-full py-2 mt-6 px-4"
                        >
                          Site
                        </motion.button>
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                variants={variants.projectImg}
                exit={variants.projectImg.exit}
                className="hidden md:flex flex-col justify-center w-1/2  ml-8 lg:ml-12"
              >
                <div className="w-full pt-3/4 rounded-lg relative overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full rounded-lg absolute inset-0 object-cover" />
                </div>
              </motion.div>
            </div>
            <div className="flex justify-between mt-8">
              <motion.button
                variants={variants.projectNav}
                whileHover={glowText}
                whileTap={glowText}
                type="button"
                className="lg:text-lg border-b border-white bg-arrowL bg-left bg-sm bg-no-repeat pl-1 pl-5"
                onClick={() => handleNav(`/work/${prev}`)}
              >
                Previous
              </motion.button>
              <motion.button
                variants={variants.projectNav}
                whileHover={glowText}
                whileTap={glowText}
                type="button"
                className="lg:text-lg border-b border-white bg-arrowR bg-right bg-sm bg-no-repeat pl-1 pr-5"
                onClick={() => handleNav(`/work/${next}`)}
              >
                Next
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
  const thisProject = await fetch(`${process.env.API_URL}/projects/${params.id}`);
  const thisData = await thisProject.json();
  const allProjects = await fetch(`${process.env.API_URL}/projects/`);
  const allData = await allProjects.json();
  const thisProjectIndex = allData.findIndex((data) => data._id === thisData[0]._id);

  const { title, type, roles, tools, img, body, url, repo } = thisData[0];
  const prev = allData[thisProjectIndex - 1] ? allData[thisProjectIndex - 1].slug : allData[allData.length - 1].slug;
  const next = allData[thisProjectIndex + 1] ? allData[thisProjectIndex + 1].slug : allData[0].slug;

  return {
    props: {
      title,
      type,
      roles,
      tools,
      img,
      body,
      url,
      repo,
      prev,
      next,
    },
  };
}
