import Link from "next/link";
import { PROJECTS } from "../content"
import { ProjectCard } from "../components/ProjectCard";

export const FILTERS = ["all", "ongoing", "completed"];

export function ProjectsPage({ filter }) {
  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.status === filter);
  return (
    <div style={{ paddingBottom: 80 }}>
      <div style={{ padding: "60px 0 44px", borderBottom: "1px solid var(--border)" }}>
        <div className="cw">
          <span className="label">Work</span>
          <div className="divider-line" />
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, marginBottom: 14 }}>Projects</h1>
          <p style={{ color: "var(--muted)", maxWidth: 480, fontSize: "0.92rem", lineHeight: 1.65, marginBottom: 28 }}>
            Things I&apos;ve built — distributed systems, AI tools, and cryptographic plumbing. Click any project to read the full story.
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {FILTERS.map(f => (
              <Link
                key={f}
                href={f === "all" ? "/projects" : `/projects?status=${f}`}
                replace
                scroll={false}
                className={`ftab${filter === f ? " active" : ""}`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="cw" style={{ paddingTop: 40 }}>
        <div className="pgrid">
          {filtered.map((p, i) => (
            <div key={p.id} className={`fade-up d${Math.min(i, 4)}`}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}