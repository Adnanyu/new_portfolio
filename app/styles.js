/* ═══════════════════════════════════════════
   GLOBAL STYLES
═══════════════════════════════════════════ */

export function Styles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }

      :root {
        --bg: #FAF8F4;
        --surface: #F3EDE3;
        --surface2: #EAE2D6;
        --border: #DDD4C4;
        --text: #1C1917;
        --text2: #44403C;
        --muted: #78716C;
        --accent: #C2410C;
        --accent2: #EA580C;
        --accent-bg: #FEF3ED;
        --green: #15803D;
        --green-bg: #F0FDF4;
        --amber: #92400E;
        --amber-bg: #FFFBEB;
        --amber-border: rgba(217,119,6,0.3);
        --serif: 'Cormorant Garamond', Georgia, serif;
        --sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
        --mono: 'JetBrains Mono', 'Courier New', monospace;
        --r: 12px;
        --rs: 8px;
        --shadow: 0 1px 3px rgba(28,25,23,.05), 0 4px 16px rgba(28,25,23,.07);
        --shadow-md: 0 4px 12px rgba(28,25,23,.09), 0 16px 40px rgba(28,25,23,.09);
        --tr: 0.2s ease;
      }

      [data-theme="dark"] {
        --bg: #141210;
        --surface: #1E1B18;
        --surface2: #2A2620;
        --border: #38342E;
        --text: #F5F0E8;
        --text2: #C8BFB4;
        --muted: #8B8178;
        --accent: #FB923C;
        --accent2: #F97316;
        --accent-bg: #1C1007;
        --green: #4ADE80;
        --green-bg: #052E16;
        --amber: #FCD34D;
        --amber-bg: #1C1505;
        --amber-border: rgba(252,211,77,0.2);
        --shadow: 0 1px 3px rgba(0,0,0,.25), 0 4px 16px rgba(0,0,0,.25);
        --shadow-md: 0 4px 12px rgba(0,0,0,.35), 0 16px 40px rgba(0,0,0,.35);
      }

      body {
        font-family: var(--sans);
        background: var(--bg);
        color: var(--text);
        transition: background 0.35s ease, color 0.35s ease;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      ::selection { background: var(--accent); color: #fff; }
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
      a { color: inherit; text-decoration: none; }

      /* NAV */
      .nav {
        position: fixed; top: 0; left: 0; right: 0; z-index: 50;
        height: 64px; display: flex; align-items: center;
        padding: 0 40px;
        background: rgba(250,248,244,0.88);
        backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
        border-bottom: 1px solid var(--border);
        transition: background 0.35s;
      }
      [data-theme="dark"] .nav { background: rgba(20,18,16,0.88); }
      .nav-logo {
        font-family: var(--serif); font-style: italic;
        font-size: 1.2rem; font-weight: 600; cursor: pointer;
        color: var(--text); margin-right: auto; letter-spacing: 0.01em;
        transition: color var(--tr);
      }
      .nav-logo:hover { color: var(--accent); }
      .nav-links { display: flex; gap: 28px; align-items: center; list-style: none; }
      .nav-btn {
        background: none; border: none;
        font-family: var(--sans); font-size: 0.82rem; font-weight: 500;
        color: var(--muted); cursor: pointer; letter-spacing: 0.02em;
        padding: 6px 0; position: relative; transition: color var(--tr);
        display: flex; align-items: center; gap: 5px;
      }
      .nav-btn:hover { color: var(--text); }
      .nav-btn.active { color: var(--text); }
      .nav-btn.active::after {
        content: ''; position: absolute; bottom: 0; left: 0; right: 0;
        height: 1.5px; background: var(--accent); border-radius: 1px;
      }
      .theme-btn {
        background: var(--surface); border: 1px solid var(--border);
        border-radius: var(--rs); padding: 7px 10px; cursor: pointer;
        margin-left: 20px; color: var(--muted);
        transition: all var(--tr); display: flex; align-items: center;
      }
      .theme-btn:hover { background: var(--surface2); color: var(--text); }

      /* BUTTONS */
      .btn {
        display: inline-flex; align-items: center; gap: 6px;
        padding: 9px 18px; border-radius: var(--rs);
        font-family: var(--sans); font-size: 0.8rem; font-weight: 600;
        cursor: pointer; transition: all 0.15s ease; border: none;
        text-decoration: none; white-space: nowrap; line-height: 1;
      }
      .btn-dark { background: var(--text); color: var(--bg); }
      .btn-dark:hover { opacity: 0.82; }
      .btn-ghost {
        background: transparent; color: var(--text2);
        border: 1.5px solid var(--border);
      }
      .btn-ghost:hover { background: var(--surface); border-color: var(--muted); color: var(--text); }
      .btn-sm { padding: 6px 13px; font-size: 0.75rem; }

      /* TAGS & BADGES */
      .tag {
        display: inline-flex; align-items: center;
        padding: 3px 10px; background: var(--surface2);
        border: 1px solid var(--border); border-radius: 20px;
        font-family: var(--mono); font-size: 0.67rem;
        color: var(--text2); white-space: nowrap;
      }
      .badge-ongoing {
        display: inline-flex; align-items: center; gap: 5px;
        padding: 3px 10px; border-radius: 20px;
        background: var(--amber-bg); border: 1px solid var(--amber-border);
        font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em;
        text-transform: uppercase; color: var(--amber);
      }
      .pulse {
        width: 6px; height: 6px; border-radius: 50%;
        background: currentColor; display: inline-block;
        animation: pulseAnim 2s ease-in-out infinite;
      }
      @keyframes pulseAnim {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(0.75); }
      }

      /* CARDS */
      .card {
        background: var(--surface); border: 1px solid var(--border);
        border-radius: var(--r); overflow: hidden;
        transition: transform 0.22s ease, box-shadow 0.22s ease;
      }
      .card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }

      /* OVERLAY */
      .overlay {
        position: fixed; inset: 0; z-index: 200;
        background: var(--bg); overflow-y: auto;
        animation: overlayIn 0.32s cubic-bezier(0.25,0.46,0.45,0.94) both;
      }
      @keyframes overlayIn {
        from { opacity: 0; transform: translateX(28px); }
        to { opacity: 1; transform: translateX(0); }
      }
      .overlay-bar {
        position: sticky; top: 0; z-index: 10;
        background: rgba(250,248,244,0.9); backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border);
        display: flex; align-items: center; gap: 12px;
        padding: 14px 40px;
        transition: background 0.35s;
      }
      [data-theme="dark"] .overlay-bar { background: rgba(20,18,16,0.9); }

      /* TERMINAL */
      .terminal {
        background: #0D1117; border-radius: var(--rs);
        padding: 20px 24px; overflow-x: auto;
        font-family: var(--mono); font-size: 0.7rem;
        line-height: 1.85; color: #b0c4de;
        border: 1px solid #21262d;
      }

      /* TYPOGRAPHY HELPERS */
      .label {
        font-family: var(--mono); font-size: 0.62rem; font-weight: 500;
        letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent);
        display: block;
      }
      .divider-line {
        width: 36px; height: 2px; background: var(--accent);
        border-radius: 1px; margin: 10px 0 22px;
      }

      /* ANIMATIONS */
      .fade-up { animation: fadeUp 0.5s ease both; }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(18px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .d0 { animation-delay: 0ms; }
      .d1 { animation-delay: 70ms; }
      .d2 { animation-delay: 140ms; }
      .d3 { animation-delay: 210ms; }
      .d4 { animation-delay: 280ms; }

      /* SECTION */
      .det-section { border-top: 1px solid var(--border); padding-top: 32px; margin-top: 32px; }
      .list-arrow {
        display: flex; gap: 10px; align-items: flex-start;
        color: var(--text2); font-size: 0.88rem; line-height: 1.65; margin-bottom: 10px;
      }
      .list-arrow::before {
        content: '→'; color: var(--accent); font-size: 0.78rem;
        flex-shrink: 0; margin-top: 3px;
      }

      /* JOURNAL */
      .j-card {
        background: var(--surface); border: 1px solid var(--border);
        border-radius: var(--r); padding: 28px; cursor: pointer;
        transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s;
        position: relative; overflow: hidden;
      }
      .j-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); border-color: var(--accent); }
      .j-card::before {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0;
        width: 3px; background: var(--accent);
        transform: scaleY(0); transition: transform 0.22s ease;
        transform-origin: bottom;
      }
      .j-card:hover::before { transform: scaleY(1); }
      .j-body {
        font-family: var(--serif); font-size: 1.05rem;
        line-height: 1.9; color: var(--text2);
      }
      .j-body p { margin-bottom: 1.4rem; }
      .j-body p:last-child { margin-bottom: 0; }

      /* FILTER */
      .ftab {
        background: none; border: 1.5px solid var(--border);
        border-radius: 20px; padding: 6px 16px;
        font-family: var(--sans); font-size: 0.77rem; font-weight: 500;
        color: var(--muted); cursor: pointer; transition: all var(--tr);
      }
      .ftab:hover { color: var(--text); border-color: var(--muted); }
      .ftab.active { background: var(--text); color: var(--bg); border-color: var(--text); }

      /* SKILL GROUP */
      .skill-group {
        background: var(--surface); border: 1px solid var(--border);
        border-radius: var(--rs); padding: 16px;
      }

      /* CONTAINERS */
      .cw { max-width: 1100px; margin: 0 auto; padding: 0 40px; }
      .cw-sm { max-width: 760px; margin: 0 auto; padding: 0 40px; }
      .pgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
      .sgrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
      .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
      .goals-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
      .demo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

      /* Mobile Styles */
      @media (max-width: 768px) {
        .nav {
          padding: 0 20px;
        }

        .cw,
        .cw-sm {
          padding: 0 20px;
        }

        .overlay-bar {
          padding: 12px 20px;
        }
        .sgrid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 20px; 
          }

        .about-grid,
        .goals-grid,
        .demo-grid,
        .pgrid {
          grid-template-columns: 1fr;
          gap: 40px; /* Only for about-grid; others may not need gap */
        }

        /* Hide desktop nav on mobile */
        .desktop-nav {
          display: none !important; /* Added !important to ensure override */
        }

        /* Show burger button on mobile */
        .burger-btn {
          display: flex !important;
          align-items: center;
          justify-content: center;
        }

        /* Mobile menu */
        .mobile-menu {
          display: flex !important;
          position: absolute;
          top: 64px;
          left: 0;
          right: 0;
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          z-index: 60;
          flex-direction: column;
        }
      }

      /* Desktop styles */
      .desktop-nav {
        display: flex;
      }

      .burger-btn {
        display: none;
        background: transparent;
        border: none;
        color: var(--text);
        cursor: pointer;
        padding: 6px;
      }

      /* Ensure mobile menu is hidden by default on desktop */
      .mobile-menu {
        display: none;
      }

      /* Mobile nav button inside mobile menu */
      .mobile-nav-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 14px 18px;
        background: transparent;
        border: none;
        border-bottom: 1px solid var(--border);
        color: var(--text);
        font-family: var(--sans);
        font-size: 0.9rem;
        cursor: pointer;
        transition: background 0.2s ease;
      }

      .mobile-nav-btn:hover {
        background: var(--surface);
      }

      .mobile-nav-btn.active {
        color: var(--accent);
      }
    `}</style>
  );
}