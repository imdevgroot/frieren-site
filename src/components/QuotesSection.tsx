"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const QUOTES = [
  { text: "I wasn't able to understand the feelings of a person whose life was ending so much faster than mine.", author: "Frieren" },
  { text: "Even if you forget me someday, I still want you to know. I'm glad I got to meet you.", author: "Himmel the Hero" },
  { text: "Magic is the art of the imagination. The more vividly you can picture your spell, the stronger it becomes.", author: "Flamme" },
  { text: "I will become stronger. Not just for others, but for myself.", author: "Fern" },
  { text: "She really does cherish all the small, useless things.", author: "Heiter, on Frieren" },
  { text: "I'm not brave. I just move before I get too scared to move at all.", author: "Stark" },
  { text: "Even the smallest spell, cast with true intent, can be the most powerful magic of all.", author: "Frieren" },
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

export default function QuotesSection() {
  const [idx,    setIdx]    = useState(0);
  const [fading, setFading] = useState(false);
  const headerRef = useReveal();
  const bodyRef   = useReveal();

  const go = useCallback((next: number) => {
    setFading(true);
    setTimeout(() => { setIdx((next + QUOTES.length) % QUOTES.length); setFading(false); }, 350);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(idx + 1), 6500);
    return () => clearInterval(t);
  }, [idx, go]);

  const q = QUOTES[idx];

  return (
    <section id="quotes" style={{
      padding: "120px 24px",
      background: "linear-gradient(180deg, #f2ece4 0%, #f8f4ef 100%)",
      position: "relative",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(200,192,208,0.4), transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section header — full width like magic section */}
        <div ref={headerRef} className="reveal" style={{ textAlign: "center", marginBottom: 80 }}>
          <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#4aada0", margin: "0 0 16px" }}>
            Words of the Journey
          </p>
          <h2 style={{
            fontFamily: "var(--font-cinzel, serif)", fontWeight: 900,
            fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1e2030",
            margin: "0 0 16px", letterSpacing: "-0.02em",
          }}>Quotes</h2>
          <div style={{ margin: "0 auto 20px", width: 40, height: 1, background: "linear-gradient(90deg, transparent, rgba(184,144,42,0.4), transparent)" }} />
          <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 14, color: "#7a7590", maxWidth: 420, margin: "0 auto", lineHeight: 1.8 }}>
            Brief lives leave the longest echoes.
          </p>
        </div>

        {/* Quote display — editorial, no box */}
        <div ref={bodyRef} className="reveal" style={{ transitionDelay: "200ms", textAlign: "center" }}>
          {/* Large decorative quote mark */}
          <div style={{
            fontFamily: "var(--font-cinzel, serif)", fontSize: "clamp(80px, 12vw, 140px)",
            color: "rgba(74,173,160,0.07)", lineHeight: 0.8,
            marginBottom: 32, userSelect: "none",
          }}>&ldquo;</div>

          <div style={{
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(10px)" : "translateY(0)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            maxWidth: 680, margin: "0 auto",
          }}>
            <p style={{
              fontFamily: "var(--font-cinzel, serif)",
              fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
              color: "#1e2030", lineHeight: 1.75, fontStyle: "italic",
              margin: "0 0 40px",
            }}>
              {q.text}
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 56 }}>
              <div style={{ height: 1, width: 48, background: "linear-gradient(to right, transparent, rgba(184,144,42,0.5))" }} />
              <span style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#b8902a" }}>
                {q.author}
              </span>
              <div style={{ height: 1, width: 48, background: "linear-gradient(to left, transparent, rgba(184,144,42,0.5))" }} />
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24 }}>
            <button onClick={() => go(idx - 1)} style={{
              width: 36, height: 36, borderRadius: "50%",
              border: "1px solid rgba(74,173,160,0.3)",
              background: "transparent", color: "#4aada0",
              fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#4aada0"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#4aada0"; }}
            >‹</button>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {QUOTES.map((_, i) => (
                <button key={i} onClick={() => go(i)} style={{
                  borderRadius: "100px",
                  height: 5, border: "none", cursor: "pointer",
                  transition: "all 0.4s",
                  width: i === idx ? 24 : 5,
                  background: i === idx ? "#4aada0" : "rgba(74,173,160,0.2)",
                }} />
              ))}
            </div>

            <button onClick={() => go(idx + 1)} style={{
              width: 36, height: 36, borderRadius: "50%",
              border: "1px solid rgba(74,173,160,0.3)",
              background: "transparent", color: "#4aada0",
              fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#4aada0"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#4aada0"; }}
            >›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
