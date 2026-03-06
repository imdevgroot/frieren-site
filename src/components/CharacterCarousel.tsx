"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

const CHARACTERS = [
  {
    name: "Frieren",
    nameJp: "フリーレン",
    role: "Elven Mage",
    quote: "Humans live such short lives — but they burn so brightly.",
    image: "/frieren-official.webp",
    accentColor: "#4aada0",
    traits: ["Spell Collector", "1000+ Years", "Zoltraak Master", "Disciple of Flamme"],
    href: "#frieren",
  },
  {
    name: "Fern",
    nameJp: "フェルン",
    role: "Mage Apprentice",
    quote: "I will become stronger. Not just for others — but for myself.",
    image: "/fern-official.webp",
    accentColor: "#7a6faa",
    traits: ["Rapid Caster", "Heiter's Ward", "First-Class Candidate"],
    href: "#fern",
  },
  {
    name: "Stark",
    nameJp: "シュタルク",
    role: "Warrior",
    quote: "I move before I get too scared to move at all.",
    image: "/stark-official.webp",
    accentColor: "#c05c3a",
    traits: ["Eisen's Protege", "Overwhelming Power", "Cowardly but Brave"],
    href: "#stark",
  },
  {
    name: "Himmel",
    nameJp: "ヒンメル",
    role: "The Hero",
    quote: "Even if you forget me someday, I still want you to know — I am glad I got to meet you.",
    image: "/himmel-official.webp",
    accentColor: "#b8902a",
    traits: ["Demon King Slayer", "Leader", "Eternal Legacy"],
    href: "#himmel",
  },
];

export default function CharacterCarousel() {
  const [active, setActive] = useState(0);
  const [prev,   setPrev]   = useState<number | null>(null);
  const [dir,    setDir]    = useState<1 | -1>(1);
  const [anim,   setAnim]   = useState(false);
  const touchStart = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    const n = (next + CHARACTERS.length) % CHARACTERS.length;
    setDir(n > active || (active === CHARACTERS.length - 1 && n === 0) ? 1 : -1);
    setPrev(active);
    setActive(n);
    setAnim(true);
  }, [active]);

  useEffect(() => {
    if (!anim) return;
    const t = setTimeout(() => { setAnim(false); setPrev(null); }, 600);
    return () => clearTimeout(t);
  }, [anim]);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => go(active + 1), 7000);
    return () => clearInterval(t);
  }, [active, go]);

  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
    touchStart.current = null;
  };

  const char = CHARACTERS[active];

  return (
    <section style={{
      padding: "80px 24px 100px",
      background: "linear-gradient(180deg, #f8f4ef 0%, #f2ece4 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(200,192,208,0.4), transparent)" }} />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#4aada0", margin: "0 0 14px" }}>
          The Party
        </p>
        <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1e2030", margin: "0 0 14px", letterSpacing: "-0.02em" }}>
          Meet the Characters
        </h2>
        <div style={{ margin: "0 auto", width: 40, height: 1, background: "linear-gradient(90deg, transparent, rgba(184,144,42,0.4), transparent)" }} />
      </div>

      {/* Carousel */}
      <div
        style={{ maxWidth: 1000, margin: "0 auto", position: "relative" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Card */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0 80px",
          alignItems: "center",
          minHeight: 480,
        }} className="carousel-grid">

          {/* Image side */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", position: "relative" }}>
            {/* Glow */}
            <div style={{
              position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
              width: 280, height: 320,
              background: `radial-gradient(ellipse, ${char.accentColor}20 0%, transparent 70%)`,
              pointerEvents: "none", transition: "background 0.6s ease",
            }} />
            <div style={{
              opacity: anim ? 0 : 1,
              transform: anim ? `translateX(${dir * -30}px)` : "translateX(0)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}>
              <Image
                src={char.image}
                alt={char.name}
                width={300}
                height={420}
                priority
                style={{ objectFit: "contain", filter: `drop-shadow(0 16px 48px ${char.accentColor}30)`, position: "relative", zIndex: 1 }}
              />
            </div>
          </div>

          {/* Info side */}
          <div style={{
            display: "flex", flexDirection: "column", gap: 24,
            opacity: anim ? 0 : 1,
            transform: anim ? `translateX(${dir * 30}px)` : "translateX(0)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}>
            {/* Name */}
            <div>
              <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: char.accentColor, margin: "0 0 6px" }}>
                {char.role}
              </p>
              <h3 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#1e2030", margin: 0, letterSpacing: "-0.02em", lineHeight: 1 }}>
                {char.name.toUpperCase()}
              </h3>
              <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.3em", color: `${char.accentColor}90`, marginTop: 6 }}>
                {char.nameJp}
              </p>
            </div>

            {/* Quote */}
            <div style={{ borderLeft: `2px solid ${char.accentColor}55`, paddingLeft: 18 }}>
              <p style={{ fontFamily: "var(--font-cinzel, serif)", fontSize: "clamp(0.85rem, 1.4vw, 1rem)", color: "#3a3d52", fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
                &ldquo;{char.quote}&rdquo;
              </p>
            </div>

            {/* Traits */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {char.traits.map(t => (
                <span key={t} style={{
                  fontFamily: "var(--font-lato, sans-serif)", fontSize: 10,
                  padding: "4px 12px", borderRadius: 100,
                  background: `${char.accentColor}10`, border: `1px solid ${char.accentColor}33`,
                  color: char.accentColor, letterSpacing: "0.02em",
                }}>{t}</span>
              ))}
            </div>

            {/* Full profile link */}
            <a href={char.href} style={{
              alignSelf: "flex-start",
              fontFamily: "var(--font-lato, sans-serif)", fontSize: 10,
              letterSpacing: "0.22em", textTransform: "uppercase",
              padding: "10px 24px", borderRadius: 100,
              border: `1px solid ${char.accentColor}`,
              color: char.accentColor, textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = char.accentColor; el.style.color = "#fff"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = char.accentColor; }}
            >Full Profile ↓</a>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginTop: 52 }}>
          <button onClick={() => go(active - 1)} style={{
            width: 38, height: 38, borderRadius: "50%",
            border: "1px solid rgba(74,173,160,0.3)", background: "transparent",
            color: "#4aada0", fontSize: 18, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.3s",
          }}
          onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#4aada0"; el.style.color = "#fff"; }}
          onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#4aada0"; }}
          >‹</button>

          {/* Dot indicators */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {CHARACTERS.map((c, i) => (
              <button key={i} onClick={() => go(i)} style={{
                width: i === active ? 28 : 8, height: 8,
                borderRadius: 100, border: "none", cursor: "pointer",
                background: i === active ? char.accentColor : "rgba(74,173,160,0.2)",
                transition: "all 0.4s ease",
              }} />
            ))}
          </div>

          <button onClick={() => go(active + 1)} style={{
            width: 38, height: 38, borderRadius: "50%",
            border: "1px solid rgba(74,173,160,0.3)", background: "transparent",
            color: "#4aada0", fontSize: 18, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.3s",
          }}
          onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#4aada0"; el.style.color = "#fff"; }}
          onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#4aada0"; }}
          >›</button>
        </div>

        {/* Character name tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 28 }}>
          {CHARACTERS.map((c, i) => (
            <button key={i} onClick={() => go(i)} style={{
              fontFamily: "var(--font-cinzel, serif)", fontWeight: 700,
              fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
              background: "none", border: "none", cursor: "pointer",
              color: i === active ? c.accentColor : "rgba(58,61,82,0.3)",
              transition: "color 0.4s",
              paddingBottom: 4,
              borderBottom: i === active ? `1px solid ${c.accentColor}` : "1px solid transparent",
            }}>{c.name}</button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .carousel-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
