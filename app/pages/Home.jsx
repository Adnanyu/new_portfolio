"use client";
import { MapPin, Mail,ChevronRight,  } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { ME, EXPERIENCE } from "../content"
import { LuLinkedin } from "react-icons/lu";

export function HomePage({ setPage }) {
  return (
    <div style={{ paddingBottom: 80 }}>
      {/* HERO */}
      <section style={{ padding: "88px 0 72px", borderBottom: "1px solid var(--border)" }}>
        <div className="cw">
          <span className="label fade-up d0">Portfolio · {new Date().getFullYear()}</span>
          <h1 className="fade-up d1" style={{
            fontFamily: "var(--serif)", fontWeight: 600, lineHeight: 1.04,
            letterSpacing: "-0.02em", fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            marginTop: 14, marginBottom: 22,
          }}>
            Hello, I'm<br />
            <em style={{ color: "var(--accent)" }}>{ME.name}</em>
          </h1>
          <p className="fade-up d2" style={{ fontSize: "1.05rem", color: "var(--muted)", maxWidth: 500, lineHeight: 1.65, marginBottom: 36 }}>
            {ME.tagline}
          </p>
          <div className="fade-up d3" style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <a href={`mailto:${ME.email}`} className="btn btn-dark">
              <Mail size={13} /> Get in touch
            </a>
            <a href={ME.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <LuGithub size={13} /> GitHub
            </a>
            <a href={ME.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <LuLinkedin  size={13} /> LinkedIn
            </a>
          </div>
          <div className="fade-up d4" style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 28, color: "var(--muted)", fontSize: "0.82rem" }}>
            <MapPin size={13} />
            {ME.location}
          </div>
        </div>
      </section>

      {/* ABOUT + EDUCATION */}
      <section style={{ padding: "60px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="cw">
          <div className="about-grid">
            <div>
              <span className="label">About me</span>
              <div className="divider-line" />
              {ME.bio.split("\n\n").map((p, i) => (
                <p key={i} style={{ color: "var(--text2)", lineHeight: 1.8, marginBottom: 16, fontSize: "0.93rem" }}>{p}</p>
              ))}
            </div>
            <div>
              <span className="label">Education</span>
              <div className="divider-line" />
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {ME.education.map((e, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--accent)", marginTop: 6, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: 2 }}>{e.degree}</div>
                      <div style={{ color: "var(--muted)", fontSize: "0.84rem", marginBottom: 8 }}>{e.school}</div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        <span className="tag">{e.period}</span>
                        <span className="tag">{e.note}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
  style={{
    padding: "60px 0",
    borderBottom: "1px solid var(--border)",
  }}
>
  <div className="cw">
    <span className="label">Experience</span>

    <div className="divider-line" />

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      {EXPERIENCE.map((exp, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "var(--accent)",
              marginTop: 6,
              flexShrink: 0,
            }}
          />

          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 12,
                flexWrap: "wrap",
                marginBottom: 4,
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    marginBottom: 2,
                  }}
                >
                  {exp.title}
                </div>

                <div
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.84rem",
                  }}
                >
                  {exp.company} · {exp.location}
                </div>
              </div>

              <span className="tag">{exp.period}</span>
            </div>

            <ul
              style={{
                margin: "14px 0 0",
                paddingLeft: 18,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                color: "var(--muted)",
                fontSize: "0.92rem",
                lineHeight: 1.7,
              }}
            >
              {exp.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* SKILLS */}
      <section style={{ padding: "60px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="cw">
          <span className="label">Skills & tooling</span>
          <div className="divider-line" />
          <div className="sgrid">
            {ME.skills.map((g) => (
              <div key={g.cat} className="skill-group">
                <div style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--muted)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>{g.cat}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {g.items.map(item => <span key={item} className="tag">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 0" }}>
        <div className="cw" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, marginBottom: 12 }}>
            Want to see what I've built?
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: 28, fontSize: "0.92rem" }}>
            Projects ranging from distributed systems to AI-powered tools — each one a story about a problem worth solving.
          </p>
          <button onClick={() => setPage("projects")} className="btn btn-dark" style={{ fontSize: "0.88rem", padding: "11px 26px" }}>
            View projects <ChevronRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}