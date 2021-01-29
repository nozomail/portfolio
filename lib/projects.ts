import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export type ProjectProps = {
  id: string;
  order: number;
  title: string;
  roles: string[];
  tools: string[];
  img: string;
  body: string;
};

const projectsDir = path.join(process.cwd(), "projects");

export function getAllProjectsData() {
  const fileNames = fs.readdirSync(projectsDir);
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(projectsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    } as ProjectProps;
  });

  return allProjectsData.sort((a, b) => (a.order < b.order ? 1 : -1));
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDir);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getProjectData(id: string) {
  const fullPath = path.join(projectsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const body = processedContent.toString();

  return {
    id,
    body,
    ...matterResult.data,
  } as ProjectProps;
}
