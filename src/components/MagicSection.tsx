"use client";
import { useEffect, useRef } from "react";

const MAGICS = [
  {
    name: "Ancient Magic",
    color: "#4aada0",
    desc: "Spells from a forgotten age, recovered across Frieren's thousand-year journey. Small, mundane, yet priceless — a flower field that never wilts, light that never fades.",
    spells: ["Eternal Bloom", "Soul Resting Grounds", "Memory Weave"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 22, height: 22 }}>
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 4v4M20 32v4M4 20h4M32 20h4M7.5 7.5l2.8 2.8M29.7 29.7l2.8 2.8M7.5 32.5l2.8-2.8M29.7 10.3l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="2.5" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: "Combat Spells",
    color: "#35877b",
    desc: "High-destruction magic forged for battle. The pinnacle is Zoltraak — once feared as demon magic, now a standard combat technique taught to every modern mage.",
    spells: ["Zoltraak", "Flamme's Strike", "Aura of Domination", "Mana Blade"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 22, height: 22 }}>
        <path d="M20 6L34 20L20 34L6 20L20 6Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 12L28 20L20 28L12 20L20 12Z" fill="currentColor" opacity="0.15"/>
        <path d="M20 17L23 20L20 23L17 20Z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "Utility Magic",
    color: "#b8902a",
    desc: "Practical everyday spells woven into daily life. Frieren cherishes these most — warmth on cold nights, eternal starlight, safe slumber for weary travellers.",
    spells: ["Eternal Candle", "Safe Slumber", "Warmth Aura", "Guiding Star"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 22, height: 22 }}>
        <path d="M20 8a12 12 0 1 0 0 24A12 12 0 0 0 20 8Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 14v6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Lost Magic",
    color: "#a09ab8",
    desc: "Magic so ancient that no living mage can replicate it. These spells exist only in crumbling tomes and in the fading memories of beings who once witnessed their casting.",
    spells: ["Soul Imitation", "Absolute Binding", "Phantom Realm", "Eternal Stasis"],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 22, height: 22 }}>
        <path d="M20 5L23.5 16.5H35.5L26 23.5L29.5 35L20 28L10.5 35L14 23.5L4.5 16.5H16.5L20 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M20 5L23.5 16.5H35.5L26 23.5L29.5 35L20 28L10.5 35L14 23.5L4.5 16.5H16.5L20 5Z" fill="currentColor" opacity="0.08"/>
      </svg>
    ),
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.05 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

export default function MagicSection() {
  return (
    <section id="magic" style={{
      padding: "120px 24px",
      background: "linear-gradient(180deg, #f2ece4 0%, #f8f4ef 100%)",
      position: "relative",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(200,192,208,0.4), transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section header — centered */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#4aada0", margin: "0 0 16px" }}>
            The Arcane Arts
          </p>
          <h2 style={{
            fontFamily: "var(--font-cinzel, serif)", fontWeight: 900,
            fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1e2030",
            margin: "0 0 16px", letterSpacing: "-0.02em",
          }}>Magic System</h2>
          <div style={{ margin: "0 auto 20px", width: 40, height: 1, background: "linear-gradient(90deg, transparent, rgba(184,144,42,0.4), transparent)" }} />
          <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 14, color: "#7a7590", maxWidth: 420, margin: "0 auto", lineHeight: 1.8 }}>
            Magic is shaped by imagination. The more vividly a mage pictures their spell, the more powerful it becomes.
          </p>
        </div>

        {/* 4 magic types — editorial horizontal cards, no boxes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {MAGICS.map((m, i) => {
            const ref = useReveal();
            return (
              <div key={m.name} ref={ref} className="reveal editorial-row" style={{
                transitionDelay: `${i * 100}ms`,
                display: "grid",
                gridTemplateColumns: "200px 1fr 1fr",
                gap: 40,
                alignItems: "start",
                padding: "48px 0",
                borderBottom: i < MAGICS.length - 1 ? "1px solid rgba(30,32,48,0.07)" : "none",
              }}>
                {/* Name + icon */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ color: m.color, flexShrink: 0 }}>{m.icon}</div>
                  <h3 style={{
                    fontFamily: "var(--font-cinzel, serif)", fontWeight: 700,
                    fontSize: 15, color: m.color, margin: 0,
                  }}>{m.name}</h3>
                </div>
                {/* Description */}
                <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 14, color: "rgba(58,61,82,0.75)", lineHeight: 1.8, margin: 0 }}>
                  {m.desc}
                </p>
                {/* Spells */}
                <div className="editorial-row-spells" style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
                  {m.spells.map(s => (
                    <span key={s} style={{
                      fontFamily: "var(--font-lato, sans-serif)",
                      fontSize: 11, padding: "4px 14px", borderRadius: 100,
                      border: `1px solid ${m.color}40`,
                      color: m.color, letterSpacing: "0.02em",
                      background: `${m.color}08`,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .magic-row { grid-template-columns: 1fr !important; gap: 16px !important; }
          .magic-spells { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
