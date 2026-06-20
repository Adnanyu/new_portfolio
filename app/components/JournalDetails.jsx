/* ═══════════════════════════════════════════
   JOURNAL DETAIL OVERLAY
═══════════════════════════════════════════ */
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
export function JournalDetail({ entry, onClose }) {
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
        <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--muted)", marginLeft: 8 }}>
          {entry.date}
        </span>
      </div>

      <div className="cw-sm" style={{ paddingTop: 60, paddingBottom: 80 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 10 }}>
          <span style={{ fontSize: "2.8rem", lineHeight: 1 }}>{entry.moodEmoji}</span>
          <div>
            <span className="label" style={{ marginBottom: 6 }}>{entry.date}</span>
            <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 600, lineHeight: 1.1 }}>
              {entry.title}
            </h1>
          </div>
        </div>

        <div style={{ paddingLeft: "calc(2.8rem + 16px)", marginBottom: 44 }}>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {entry.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 44 }}>
          <div className="j-body">
            {entry.content.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}