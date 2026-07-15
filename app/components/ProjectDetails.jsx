"use client";
/* ═══════════════════════════════════════════
PROJECT DETAIL OVERLAY
═══════════════════════════════════════════ */
import Image from "next/image";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import Carousel from "./Crousel";
import { useEffect } from "react";
export function ProjectDetail({ project: p, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="overlay">
      <div className="overlay-bar">
        <button className="btn btn-ghost btn-sm" onClick={onClose}>
          <ArrowLeft size={13} /> Back
        </button>
        <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--muted)" }}>{p.title}</span>
        <div style={{ flex: 1 }} />
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

      {/* HERO BANNER */}
      <div style={{ background: p.gradient, padding: "60px 40px 48px", position: "relative" }}>
        <div style={{ fontSize: "4rem", marginBottom: 16 }}>{p.icon}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10, flexWrap: "wrap" }}>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 700, color: "#fff" }}>{p.title}</h1>
          {p.status === "ongoing" && <div className="badge-ongoing"><span className="pulse" /> Ongoing</div>}
        </div>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", fontStyle: "italic", marginBottom: 18 }}>{p.subtitle}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {p.tags.map(t => (
            <span key={t} style={{
              background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.22)",
              padding: "3px 10px", borderRadius: 20, fontFamily: "var(--mono)",
              fontSize: "0.67rem", color: "rgba(255,255,255,0.88)",
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="cw-sm" style={{ paddingTop: 52, paddingBottom: 80 }}>

        {/* Overview */}
        <section>
          <span className="label">Overview</span>
          <div className="divider-line" />
          {p.fullDescription.split("\n\n").map((para, i) => (
            <p key={i} style={{ color: "var(--text2)", lineHeight: 1.82, fontSize: "0.94rem", marginBottom: 16 }}>{para}</p>
          ))}
        </section>

        {/* Technical */}
        <section className="det-section">
          <span className="label">Technical deep-dive</span>
          <div className="divider-line" />
          {p.technical.map((t, i) => <div key={i} className="list-arrow">{t}</div>)}
        </section>

        {/* System Design */}
        {p.systemDesign && (
          <section className="det-section">
            <span className="label">System architecture</span>
            <div className="divider-line" />

            <div
              style={{
                marginBottom: 8,
                fontSize: "0.75rem",
                color: "var(--muted)",
                fontFamily: "var(--mono)",
              }}
            >
              // architecture diagram
            </div>

            <div className="terminal">
              <Image
                src={p.systemDesign}
                alt={`${p.title} architecture`}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </section>
        )}

        {/* Data Flow */}
        {(p.dataFlow?.length || p.dataFlowDiagram) && (
          <section className="det-section">
            <span className="label">Data flow</span>
            <div className="divider-line" />

            {p.dataFlowDiagram && (
              <>
                <div
                  style={{
                    marginBottom: 8,
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                    fontFamily: "var(--mono)",
                  }}
                >
                  // data flow diagram
                </div>

                <div
                  className="terminal"
                  style={{ marginBottom: p.dataFlow?.length ? 24 : 0 }}
                >
                  <Image
                    src={p.dataFlowDiagram}
                    alt={`${p.title} data flow`}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </>
            )}

            {p.dataFlow?.length && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {p.dataFlow.map((step, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                      padding: "14px 18px",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--r)",
                      background: "var(--surface)",
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: ".8rem",
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </div>

                    <div
                      style={{
                        color: "var(--text2)",
                        lineHeight: 1.7,
                      }}
                    >
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Database */}
        {(p.database || p.databaseDiagram) && (
          <section className="det-section">
            <span className="label">Database design</span>
            <div className="divider-line" />

            {p.databaseDiagram && (
              <>
                <div
                  style={{
                    marginBottom: 8,
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                    fontFamily: "var(--mono)",
                  }}
                >
                  // database diagram
                </div>

                <div
                  className="terminal"
                  style={{ marginBottom: p.database ? 24 : 0 }}
                >
                  <Image
                    src={p.databaseDiagram}
                    alt={`${p.title} database`}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </>
            )}

            {p.database && (
              <div className="goals-grid">
                {p.database.postgres && (
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.07em",
                        color: "#4ade80",
                        textTransform: "uppercase",
                        marginBottom: 14,
                      }}
                    >
                      PostgreSQL
                    </div>

                    {p.database.postgres.map((item, i) => (
                      <div key={i} className="list-arrow">
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {p.database.mongo && (
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.07em",
                        color: "#22c55e",
                        textTransform: "uppercase",
                        marginBottom: 14,
                      }}
                    >
                      MongoDB
                    </div>

                    {p.database.mongo.map((item, i) => (
                      <div key={i} className="list-arrow">
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {p.database.mysql && (
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.07em",
                        color: "#60a5fa",
                        textTransform: "uppercase",
                        marginBottom: 14,
                      }}
                    >
                      MySQL
                    </div>

                    {p.database.mysql.map((item, i) => (
                      <div key={i} className="list-arrow">
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* Demo */}
        {p.demo && (
          <section className="det-section">
            <span className="label">Demo & screenshots</span>
            <div className="divider-line" />

            {p.demo?.screenshots?.length > 0 && (
              <div style={{ marginBottom: 12 }}>
                <Carousel
                  images={p.demo.screenshots}
                  title={p.title}
                />
              </div>
            )}

            {p.demo?.video && (
              p.demo?.video.map((vid, i) =>(
              <video
                key={i}
                controls
                preload="metadata"
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  borderRadius: "var(--r)",
                  border: "1px solid var(--border)",
                  display: "block",
                  marginBottom: "30px"
                }}
              >
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              ))
            )}
          </section>
        )}

        {/* Goals & Achievements */}
        <section className="det-section">
          <span className="label">Goals & achievements</span>
          <div className="divider-line" />
          <div className="goals-grid">
            <div>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.07em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 14 }}>
                Goals
              </div>
              {p.goals.map((g, i) => <div key={i} className="list-arrow">{g}</div>)}
            </div>
            <div>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.07em", color: "var(--green)", textTransform: "uppercase", marginBottom: 14, display: "flex", alignItems: "center", gap: 5 }}>
                <CheckCircle2 size={12} /> Achieved
              </div>
              {p.achievements.map((a, i) => <div key={i} className="list-arrow">{a}</div>)}
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="det-section">
          <span className="label">Key learnings</span>
          <div className="divider-line" />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {p.learnings.map((l, i) => (
              <div key={i} style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderLeft: "3px solid var(--accent)", borderRadius: "0 var(--rs) var(--rs) 0",
                padding: "14px 18px", fontSize: "0.91rem", color: "var(--text2)",
                lineHeight: 1.65, fontFamily: "var(--serif)", fontStyle: "italic",
              }}>{l}</div>
            ))}
          </div>
        </section>

        {/* Future Work */}
        <section className="det-section">
          <span className="label">What's next</span>
          <div className="divider-line" />
          {p.futureWork.map((f, i) => <div key={i} className="list-arrow">{f}</div>)}
        </section>

        {/* Bottom links */}
        {(p.github || p.live) && (
        <div
          style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: "1px solid var(--border)",
            display: "flex",
            gap: 10,
          }}
        >
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <LuGithub size={13} /> GitHub
            </a>
          )}

          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <ExternalLink size={13} /> Open Live Demo
            </a>
          )}
        </div>
      )}
      </div>
    </div>
  );
}

