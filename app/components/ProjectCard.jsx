"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ExternalLink} from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { navState } from "../navState";

// muted looping clip that only plays while the card is on screen
function CardPreview({ preview, title }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    // respect reduced-motion: leave the poster frame up instead of playing
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // phone recordings sit on the gradient like a screen; web recordings fill the card
  const style = preview.portrait
    ? { height: "88%", width: "auto", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,.35)" }
    : { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" };

  return (
    <video
      ref={ref}
      src={preview.video}
      poster={preview.poster}
      aria-label={`${title} preview`}
      muted
      loop
      playsInline
      preload="none"
      style={style}
    />
  );
}

export function ProjectCard({ project: p }) {
  const router = useRouter();
  const href = `/projects/${p.id}`;

  const open = () => {
    navState.fromProjectList = true;
    router.push(href);
  };

  return (
    <div
      className="card"
      style={{ cursor: "pointer" }}
      role="link"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => { if (e.key === "Enter") open(); }}
      onMouseEnter={() => router.prefetch(href)}
    >
      <div style={{
        height: 190, background: p.gradient, overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative",
      }}>
        {p.preview ? (
          <CardPreview preview={p.preview} title={p.title} />
        ) : (
          <span style={{ fontSize: "3.8rem", filter: "drop-shadow(0 4px 16px rgba(0,0,0,.35))" }}>{p.icon}</span>
        )}
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
       {/* stop link clicks from also opening the detail overlay */}
       <div style={{ display: "flex", gap: 8 }} onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
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