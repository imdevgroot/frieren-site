"use client";
import { useEffect, useRef } from "react";

const ARCS = [
  {
    num: "01", title: "The Journey Begins", sub: "Reunion Arc", period: "Year 0", color: "#4aada0",
    desc: "After 10 years, Frieren reunites with her old party to witness the Era Meteor Shower. Himmel's passing opens her eyes to the value of human connections she barely noticed.",
    beat: "Frieren begins to understand the meaning of grief.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 22, height: 22 }}>
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 4v4M20 32v4M4 20h4M32 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="2.5" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
  },
  {
    num: "02", title: "Northern Lands", sub: "Fern & Stark Arc", period: "Year 1–2", color: "#b8902a",
    desc: "Frieren takes on Fern as her apprentice and journeys north. Stark joins as warrior. The trio retraces Frieren's ancient path and discovers what it means to travel together.",
    beat: "The new party is formed. Their bonds begin to grow.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 22, height: 22 }}>
        <path d="M20 8L34 20L20 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 20h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03", title: "First-Class Mage Exam", sub: "Examination Arc", period: "Year 2–3", color: "#a09ab8",
    desc: "Frieren and Fern enter the grueling First-Class Mage Exam. Powerful opponents and deadly traps push them to their limits. Fern emerges as a recognized mage in her own right.",
    beat: "Fern earns her rank. Frieren's true power is quietly revealed.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 22, height: 22 }}>
        <path d="M20 5L23.5 16.5H35.5L26 23.5L29.5 35L20 28L10.5 35L14 23.5L4.5 16.5H16.5L20 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M20 5L23.5 16.5H35.5L26 23.5L29.5 35L20 28L10.5 35L14 23.5L4.5 16.5H16.5L20 5Z" fill="currentColor" opacity="0.08"/>
      </svg>
    ),
  },
  {
    num: "04", title: "Aureole", sub: "The Land of Souls", period: "Year 3+", color: "#35877b",
    desc: "The party pushes toward Aureole — the land where the dead rest. Frieren seeks one last conversation with Himmel, the hero who changed her. A thousand-year journey nears its end.",
    beat: "Everything leads here. The elven mage finally looks back.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 22, height: 22 }}>
        <path d="M20 8a12 12 0 1 0 0 24A12 12 0 0 0 20 8Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 14v6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="1.5" fill="currentColor"/>
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

export default function ArcsTimeline() {
  const headerRef = useReveal();

  return (
    <section id="arcs" style={{
      padding: "120px 24px",
      background: "linear-gradient(180deg, #f8f4ef 0%, #f2ece4 100%)",
      position: "relative",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(200,192,208,0.4), transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ textAlign: "center", marginBottom: 80 }}>
          <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#4aada0", margin: "0 0 16px" }}>
            The Road North
          </p>
          <h2 style={{
            fontFamily: "var(--font-cinzel, serif)", fontWeight: 900,
            fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1e2030",
            margin: "0 0 16px", letterSpacing: "-0.02em",
          }}>Story Arcs</h2>
          <div style={{ margin: "0 auto 20px", width: 40, height: 1, background: "linear-gradient(90deg, transparent, rgba(184,144,42,0.4), transparent)" }} />
          <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 14, color: "#7a7590", maxWidth: 420, margin: "0 auto", lineHeight: 1.8 }}>
            Every step north is a step deeper into memory, loss, and the quiet courage to keep going.
          </p>
        </div>

        {/* Arc rows — editorial, like Magic section */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {ARCS.map((arc, i) => {
            const ref = useReveal();
            return (
              <div key={arc.title} ref={ref} className="reveal editorial-row" style={{
                transitionDelay: `${i * 100}ms`,
                display: "grid",
                gridTemplateColumns: "220px 1fr 1fr",
                gap: 40,
                alignItems: "start",
                padding: "52px 0",
                borderBottom: i < ARCS.length - 1 ? "1px solid rgba(30,32,48,0.07)" : "none",
              }}>
                {/* Number + Icon + Title */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ color: arc.color, flexShrink: 0 }}>{arc.icon}</div>
                  <div>
                    <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(58,61,82,0.4)", margin: "0 0 4px" }}>Arc {arc.num} · {arc.period}</p>
                    <h3 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 700, fontSize: 15, color: arc.color, margin: 0 }}>{arc.title}</h3>
                    <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.2em", color: "rgba(58,61,82,0.4)", margin: "2px 0 0", textTransform: "uppercase" }}>{arc.sub}</p>
                  </div>
                </div>
                {/* Description */}
                <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 14, color: "rgba(58,61,82,0.75)", lineHeight: 1.8, margin: 0 }}>
                  {arc.desc}
                </p>
                {/* Beat / emotional note */}
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 2, height: "100%", minHeight: 40, borderRadius: 2, background: arc.color, opacity: 0.4, flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 13, color: arc.color, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
                    {arc.beat}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .arc-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
