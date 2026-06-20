import { ExternalLink} from "lucide-react";
import { LuGithub } from "react-icons/lu";
export function ProjectCard({ project: p, onSelect }) {

  return (
    <div className="card" style={{ cursor: "pointer" }} onClick={() => onSelect(p)}>
      <div style={{
        height: 190, background: p.gradient,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative",
      }}>
        <span style={{ fontSize: "3.8rem", filter: "drop-shadow(0 4px 16px rgba(0,0,0,.35))" }}>{p.icon}</span>
        {p.status === "ongoing" && (
          <div className="badge-ongoing" style={{ position: "absolute", top: 12, right: 12 }}>
            <span className="pulse" /> Ongoing
          </div>
        )}
      </div>
      <div style={{ padding: "22px" }}>
        <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.45rem", fontWeight: 600, marginBottom: 3 }}>{p.title}</h3>
        <p style={{ color: "var(--muted)", fontSize: "0.8rem", fontStyle: "italic", marginBottom: 12 }}>{p.subtitle}</p>
        <p style={{ color: "var(--text2)", fontSize: "0.84rem", lineHeight: 1.65, marginBottom: 16 }}>{p.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 18 }}>
          {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
       <div style={{ display: "flex", gap: 8 }}>
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            <LuGithub size={13} /> GitHub
          </a>
        )}

        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm"
          >
            <ExternalLink size={12} /> Live Demo
          </a>
        )}
      </div>
      </div>
    </div>
  );
}