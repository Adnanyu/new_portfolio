"use client";

import { useRouter } from "next/navigation";
import { PROJECTS } from "../../../content";
import { ProjectDetail } from "../../../components/ProjectDetails";
import { navState } from "../../../navState";

export function ProjectView({ id }) {
  const router = useRouter();
  const project = PROJECTS.find((p) => p.id === id);

  // go back to the list if we came from it (keeps filter + scroll);
  // on a shared link or refresh there is no list behind us, so open it
  const close = () => {
    if (navState.fromProjectList) {
      navState.fromProjectList = false;
      router.back();
    } else {
      router.push("/projects");
    }
  };

  return <ProjectDetail project={project} onClose={close} />;
}
