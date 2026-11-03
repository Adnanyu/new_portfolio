import { notFound } from "next/navigation";
import { PROJECTS } from "../../../content";
import { ProjectView } from "./ProjectView";

// only the projects in content.js exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} · Adnan Yusuf`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  if (!PROJECTS.some((p) => p.id === id)) notFound();
  return <ProjectView id={id} />;
}
