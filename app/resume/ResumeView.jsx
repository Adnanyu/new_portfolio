"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, Link2, Check } from "lucide-react";
import { Styles } from "../styles";
import { ME } from "../content";
import { useTheme } from "../useTheme";

// served with Content-Disposition: attachment (see next.config.ts)
const DOWNLOAD_URL = "/resume/download";

export function ResumeView() {
  const [copied, setCopied] = useState(false);

  useTheme();

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — nothing to do
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Styles />
      <div className="overlay-bar" style={{ position: "sticky", top: 0, flexWrap: "wrap", gap: 8 }}>
        <Link href="/" className="btn btn-ghost btn-sm">
          <ArrowLeft size={13} /> Portfolio
        </Link>
        <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--muted)" }}>
          {ME.name} · Resume
        </span>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button className="btn btn-ghost btn-sm" onClick={copyLink}>
            {copied ? <Check size={13} /> : <Link2 size={13} />} {copied ? "Copied" : "Copy link"}
          </button>
          <a href={ME.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
            <ExternalLink size={12} /> Open PDF
          </a>
          <a href={DOWNLOAD_URL} download="Adnan_Yusuf_Resume.pdf" className="btn btn-dark btn-sm">
            <Download size={12} /> Download
          </a>
        </div>
      </div>

      <div className="cw" style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, width: "100%", paddingTop: 24, paddingBottom: 40 }}>
        <iframe
          src={ME.resume}
          title={`${ME.name} resume`}
          style={{
            flex: 1,
            width: "100%",
            minHeight: "80vh",
            border: "1px solid var(--border)",
            borderRadius: "var(--r)",
            background: "var(--surface)",
          }}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href={DOWNLOAD_URL} download="Adnan_Yusuf_Resume.pdf" className="btn btn-dark" style={{ fontSize: "0.88rem", padding: "11px 26px" }}>
            <Download size={14} /> Download resume
          </a>
        </div>
      </div>
    </div>
  );
}
