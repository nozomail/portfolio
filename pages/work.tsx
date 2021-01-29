import Link from "next/link";
import Layout from "../components/layout";

import { getAllProjectsData, ProjectProps } from "../lib/projects";

export default function Work({ projects }) {
  return (
    <Layout pageTitle="Work">
      <ul className="sm:flex justify-center flex-wrap sm:-mx-2 lg:-mx-4 xl:-mx-8 xl:mx-auto">
        {projects.map((project: ProjectProps) => (
          <li key={project.id} className="sm:w-1/2 md:w-1/3 px-2 lg:px-4 xl:px-8 mb-12">
            <Link href={`/work/${project.id}`}>
              <a>
                <div className="bg-white rounded-md overflow-hidden shadow-sw relative pt-3/4">
                  <img className="w-full h-full absolute inset-0 object-cover" src={project.img} alt="" />
                </div>
                <h2 className="text-lg lg:text-xl text-white py-1 lg:py-2">{project.title}</h2>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getAllProjectsData();

  return {
    props: {
      projects: data,
    },
  };
}
