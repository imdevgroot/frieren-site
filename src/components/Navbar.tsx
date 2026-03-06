"use client";
import { useState, useEffect } from "react";

const LINKS = [
  { label: "Characters", href: "#characters" },
  { label: "Magic",      href: "#magic"      },
  { label: "Arcs",       href: "#arcs"       },
  { label: "Quotes",     href: "#quotes"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const bg: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    transition: "background 0.4s, box-shadow 0.4s",
    background: scrolled ? "rgba(248,244,239,0.95)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(200,192,208,0.3)" : "none",
    boxShadow: scrolled ? "0 1px 12px rgba(30,32,48,0.06)" : "none",
  };

  return (
    <nav style={bg}>
      {/* Desktop */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 48px", maxWidth: 1200, margin: "0 auto" }}
        className="desktop-nav">
        {/* Logo */}
        <a href="#" style={{ display: "flex", flexDirection: "column", gap: 3, textDecoration: "none", minHeight: 28 }}>
          <span className="shimmer-text" style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 15, letterSpacing: "0.35em", lineHeight: 1 }}>
            FRIEREN
          </span>
          <span style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 8, letterSpacing: "0.3em", color: "rgba(74,173,160,0.6)", lineHeight: 1 }}>
            葬送のフリーレン
          </span>
        </a>
        {/* Nav links */}
        <div style={{ display: "flex", gap: 40 }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "var(--font-lato, sans-serif)", fontSize: 11,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#7a7590", textDecoration: "none", transition: "color 0.3s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#4aada0"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#7a7590"; }}
            >{l.label}</a>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px" }}
        className="mobile-nav">
        <a href="#" style={{ display: "flex", flexDirection: "column", gap: 3, textDecoration: "none", minHeight: 28 }}>
          <span className="shimmer-text" style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 13, letterSpacing: "0.3em", lineHeight: 1 }}>FRIEREN</span>
          <span style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 7, letterSpacing: "0.25em", color: "rgba(74,173,160,0.6)", lineHeight: 1 }}>葬送のフリーレン</span>
        </a>
        <button onClick={() => setOpen(!open)}
          style={{ fontSize: 24, background: "none", border: "none", color: "#1e2030", cursor: "pointer", lineHeight: 1 }}>
          {open ? "✕" : "≡"}
        </button>
      </div>
      {open && (
        <div className="mobile-nav" style={{ background: "rgba(248,244,239,0.98)", borderTop: "1px solid rgba(200,192,208,0.3)", padding: "20px 24px 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 24px" }}>
            {LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                fontFamily: "var(--font-lato, sans-serif)", fontSize: 11,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#7a7590", textDecoration: "none",
              }}>{l.label}</a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .desktop-nav { display: flex !important; } .mobile-nav { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } .mobile-nav { display: flex !important; } }
      `}</style>
    </nav>
  );
}
