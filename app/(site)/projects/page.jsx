import { Suspense } from "react";
import { ProjectsPage } from "../../pages/Projects";
import { FilteredProjects } from "./FilteredProjects";

export const metadata = {
  title: "Projects",
  description: "Things I've built — distributed systems, AI tools, mobile and full-stack apps.",
};

export default function Page() {
  // the filter lives in ?status=, which is only known in the browser,
  // so prerender the unfiltered list and swap in the filtered one on load
  return (
    <Suspense fallback={<ProjectsPage filter="all" />}>
      <FilteredProjects />
    </Suspense>
  );
}
