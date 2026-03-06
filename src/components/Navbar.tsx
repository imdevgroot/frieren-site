"use client";
import { useState, useEffect } from "react";

const ALL_LINKS = [
  { label: "Fern",       href: "#fern"       },
  { label: "Stark",      href: "#stark"      },
  { label: "Himmel",     href: "#himmel"     },
  { label: "Characters", href: "#characters" },
  { label: "Magic",      href: "#magic"      },
  { label: "Arcs",       href: "#arcs"       },
  { label: "Quotes",     href: "#quotes"     },
];

const LEFT  = ALL_LINKS.slice(0, 3);
const RIGHT = ALL_LINKS.slice(3);

function NavLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  return (
    <a href={href} onClick={onClick}
      style={{
        fontFamily: "var(--font-lato, sans-serif)",
        fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
        color: "#7a7590", textDecoration: "none", whiteSpace: "nowrap",
        transition: "color 0.3s",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#4aada0"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#7a7590"; }}
    >{label}</a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBg: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    transition: "background 0.4s, box-shadow 0.4s",
    background: scrolled ? "rgba(248,244,239,0.95)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(200,192,208,0.3)" : "none",
    boxShadow: scrolled ? "0 1px 12px rgba(30,32,48,0.06)" : "none",
  };

  return (
    <nav style={navBg}>

      {/* ── DESKTOP only (md+) ── */}
      <div style={{
        display: "none",
        position: "relative",
        padding: "22px 48px",
        alignItems: "center",
      }} className="desktop-nav">
        {/* Left links */}
        <div style={{ display: "flex", gap: 36 }}>
          {LEFT.map(l => <NavLink key={l.href} {...l} />)}
        </div>
        {/* Logo — pixel-perfect center */}
        <a href="#" style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
          textDecoration: "none",
        }}>
          <span className="shimmer-text" style={{
            fontFamily: "var(--font-cinzel, serif)", fontWeight: 900,
            fontSize: 15, letterSpacing: "0.35em", lineHeight: 1,
          }}>FRIEREN</span>
          <span style={{
            fontFamily: "var(--font-lato, sans-serif)", fontSize: 8,
            letterSpacing: "0.3em", color: "rgba(74,173,160,0.6)", lineHeight: 1,
          }}>葬送のフリーレン</span>
        </a>
        {/* Right links */}
        <div style={{ display: "flex", gap: 36, marginLeft: "auto" }}>
          {RIGHT.map(l => <NavLink key={l.href} {...l} />)}
        </div>
      </div>

      {/* ── MOBILE only (<md) ── */}
      <div className="mobile-nav" style={{ display: "none", alignItems: "center", justifyContent: "space-between", padding: "18px 28px" }}>
        <a href="#" style={{ display: "flex", flexDirection: "column", gap: 3, textDecoration: "none" }}>
          <span className="shimmer-text" style={{
            fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 13, letterSpacing: "0.3em", lineHeight: 1,
          }}>FRIEREN</span>
          <span style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 7, letterSpacing: "0.25em", color: "rgba(74,173,160,0.6)", lineHeight: 1 }}>
            葬送のフリーレン
          </span>
        </a>
        <button onClick={() => setOpen(!open)}
          style={{ fontSize: 24, background: "none", border: "none", color: "#1e2030", cursor: "pointer", lineHeight: 1 }}>
          {open ? "✕" : "≡"}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div className="mobile-nav" style={{
          background: "rgba(248,244,239,0.98)",
          borderTop: "1px solid rgba(200,192,208,0.3)",
          padding: "20px 28px 28px",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 24px" }}>
            {ALL_LINKS.map(l => <NavLink key={l.href} {...l} onClick={() => setOpen(false)} />)}
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav  { display: none   !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none   !important; }
          .mobile-nav  { display: flex   !important; }
        }
      `}</style>
    </nav>
  );
}
