"use client";

import { useSearchParams } from "next/navigation";
import { ProjectsPage, FILTERS } from "../../pages/Projects";

export function FilteredProjects() {
  const status = useSearchParams().get("status");
  return <ProjectsPage filter={FILTERS.includes(status) ? status : "all"} />;
}
