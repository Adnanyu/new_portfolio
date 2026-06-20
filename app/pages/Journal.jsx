import { JOURNAL } from '../content'

export function JournalPage({ onSelect }) {
  return (
    <div style={{ paddingBottom: 80 }}>
      <div style={{ padding: "60px 0 44px", borderBottom: "1px solid var(--border)" }}>
        <div className="cw-sm">
          <span className="label">Personal</span>
          <div className="divider-line" />
          <h1 style={{
            fontFamily: "var(--serif)", fontWeight: 600,
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            letterSpacing: "-0.02em", lineHeight: 1.06, marginBottom: 14,
          }}>
            The Lab<br /><em style={{ color: "var(--accent)" }}>Journal</em>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.68, maxWidth: 440 }}>
            Not everything worth thinking about is a systems problem. Climbing walls, strange books, and the occasional philosophical detour.
          </p>
        </div>
      </div>

      <div className="cw-sm" style={{ paddingTop: 40 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {JOURNAL.map((entry, i) => (
            <div key={entry.id} className={`j-card fade-up d${Math.min(i, 4)}`} onClick={() => onSelect(entry)}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
                <span style={{ fontSize: "1.75rem", lineHeight: 1, marginTop: 2 }}>{entry.moodEmoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--muted)", marginBottom: 4, letterSpacing: "0.05em" }}>{entry.date}</div>
                  <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.32rem", fontWeight: 600, lineHeight: 1.2 }}>{entry.title}</h2>
                </div>
                <span style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: 4 }}>→</span>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "0.87rem", lineHeight: 1.65, marginBottom: 14, fontFamily: "var(--serif)", fontStyle: "italic" }}>
                {entry.excerpt}
              </p>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {entry.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}