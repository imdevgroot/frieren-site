"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import CharacterModal from "./CharacterModal";

const CHARACTERS = [
  {
    name: "Fern",
    nameJp: "フェルン",
    role: "Mage Apprentice",
    quote: "I will become stronger. Not just for others — but for myself.",
    image: "/fern-official.webp",
    accentColor: "#7a6faa",
    traits: ["Rapid Caster", "Heiter's Ward", "First-Class Candidate", "Thousand-Shot Proficiency"],
    stats: [
      { label: "Species", value: "Human" },
      { label: "Class",   value: "Mage" },
      { label: "Rank",    value: "First-Class Candidate" },
      { label: "Mentor",  value: "Heiter → Frieren" },
    ],
    bio: [
      "Fern is an orphan taken in by the aging priest Heiter, who recognized her extraordinary mana capacity and arranged for Frieren to train her. What followed was years of relentless, quiet refinement.",
      "She has a no-nonsense exterior that borders on cold — but beneath it lies deep care for Frieren and Stark, expressed in small, wordless ways: packed meals, subtle warnings, a steadying hand.",
      "Her spellcasting speed is terrifying. In examinations and battle alike, she fires hundreds of Zoltraak shots with precision that even veteran first-class mages acknowledge as something rare.",
    ],
  },
  {
    name: "Stark",
    nameJp: "シュタルク",
    role: "Warrior",
    quote: "I move before I get too scared to move at all.",
    image: "/stark-official.webp",
    accentColor: "#c05c3a",
    traits: ["Eisen's Protege", "Overwhelming Power", "Cowardly but Brave", "Reliable Shield"],
    stats: [
      { label: "Species",   value: "Human" },
      { label: "Class",     value: "Warrior" },
      { label: "Mentor",    value: "Eisen the Eisenfresser" },
      { label: "Specialty", value: "Combat Instinct" },
    ],
    bio: [
      "Stark is the apprentice of Eisen, one of the heroes who fought alongside Frieren. Despite his immense combat ability — enough to fell giants single-handedly — he privately considers himself a coward.",
      "His honesty is disarming. He admits fear openly, yet charges in anyway. That contradiction defines him: a warrior who knows terror and acts regardless, which by any measure is what courage actually is.",
      "He develops a quietly sincere bond with Fern, expressed through their endless bickering and his clumsy but genuine attempts to be useful. His presence is the warm center of the trio's dynamic.",
    ],
  },
  {
    name: "Himmel",
    nameJp: "ヒンメル",
    role: "The Hero",
    quote: "Even if you forget me someday, I still want you to know — I am glad I got to meet you.",
    image: "/himmel-official.webp",
    accentColor: "#b8902a",
    traits: ["Demon King Slayer", "Leader of Heroes", "Frieren's Catalyst", "Eternal Legacy"],
    stats: [
      { label: "Species", value: "Human" },
      { label: "Class",   value: "Hero" },
      { label: "Status",  value: "Deceased" },
      { label: "Legacy",  value: "Eternal" },
    ],
    bio: [
      "Himmel the Hero led the legendary party that defeated the Demon King. He was charismatic, idealistic, and insufferably vain about his own appearance — but underneath all of that was a man of genuine, boundless heart.",
      "His death at the beginning of the story is the catalyst for everything. Frieren, who barely registered their decade together, is shattered by grief she didn't know she was capable of. That grief becomes her reason to journey.",
      "He appears throughout the story in flashbacks — laughing, posturing, gently teasing Frieren. Each memory reveals more of who he was: someone who chose kindness deliberately, who built statues not for glory but so strangers would have something to look at.",
    ],
  },
];

export default function CharacterCarousel() {
  const [active,     setActive]     = useState(0);
  const [modalChar,  setModalChar]  = useState<typeof CHARACTERS[0] | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const nextRef   = useRef<number | null>(null);
  const touchStart = useRef<number | null>(null);
  const autoTimer  = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((rawNext: number) => {
    if (transitioning) return;
    const next = ((rawNext % CHARACTERS.length) + CHARACTERS.length) % CHARACTERS.length;
    if (next === active) return;
    setTransitioning(true);
    nextRef.current = next;
    // After fade-out completes, swap active
    setTimeout(() => {
      setActive(next);
      setTransitioning(false);
    }, 380);
  }, [active, transitioning]);

  const resetAuto = useCallback(() => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    // Don't auto-advance while modal is open
    if (modalChar) return;
    autoTimer.current = setInterval(() => go(active + 1), 7000);
  }, [active, go, modalChar]);

  useEffect(() => {
    // Pause auto-advance while modal is open
    if (modalChar) {
      if (autoTimer.current) clearInterval(autoTimer.current);
      return;
    }
    autoTimer.current = setInterval(() => go(active + 1), 7000);
    return () => { if (autoTimer.current) clearInterval(autoTimer.current); };
  }, [active, go, modalChar]);

  const handleGo = useCallback((n: number) => {
    resetAuto();
    go(n);
  }, [go, resetAuto]);

  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 44) handleGo(active + (dx < 0 ? 1 : -1));
    touchStart.current = null;
  };

  const char = CHARACTERS[active];

  return (
    <>
      <CharacterModal char={modalChar} onClose={() => setModalChar(null)} />

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
        <div style={{ maxWidth: 980, margin: "0 auto" }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>

          {/* Card — transitions purely via opacity on parent, no layout shift */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "0 80px", alignItems: "center", minHeight: 460,
            opacity: transitioning ? 0 : 1,
            transition: "opacity 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
          }} className="carousel-grid">

            {/* Image */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", position: "relative" }}>
              <div style={{
                position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
                width: 280, height: 320,
                background: `radial-gradient(ellipse, ${char.accentColor}1a 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />
              <Image src={char.image} alt={char.name} width={300} height={420} priority
                style={{ objectFit: "contain", filter: `drop-shadow(0 16px 48px ${char.accentColor}2a)`, position: "relative", zIndex: 1 }} />
            </div>

            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div>
                <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: char.accentColor, margin: "0 0 6px" }}>{char.role}</p>
                <h3 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "#1e2030", margin: 0, letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {char.name.toUpperCase()}
                </h3>
                <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.3em", color: `${char.accentColor}80`, marginTop: 6 }}>{char.nameJp}</p>
              </div>

              <div style={{ borderLeft: `2px solid ${char.accentColor}55`, paddingLeft: 18 }}>
                <p style={{ fontFamily: "var(--font-cinzel, serif)", fontSize: "clamp(0.85rem, 1.4vw, 1rem)", color: "#3a3d52", fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
                  &ldquo;{char.quote}&rdquo;
                </p>
              </div>

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

              <button
                onClick={() => setModalChar(char)}
                style={{
                  alignSelf: "flex-start",
                  fontFamily: "var(--font-lato, sans-serif)", fontSize: 10,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  padding: "11px 26px", borderRadius: 100,
                  border: `1px solid ${char.accentColor}`,
                  color: char.accentColor, background: "transparent",
                  cursor: "pointer", transition: "all 0.3s",
                }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.background = char.accentColor; el.style.color = "#fff"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = char.accentColor; }}
              >Full Profile</button>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginTop: 48 }}>
            <button onClick={() => handleGo(active - 1)} style={{
              width: 38, height: 38, borderRadius: "50%",
              border: "1px solid rgba(74,173,160,0.3)", background: "transparent",
              color: "#4aada0", fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#4aada0"; el.style.color = "#fff"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#4aada0"; }}>‹</button>

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              {CHARACTERS.map((c, i) => (
                <button key={i} onClick={() => handleGo(i)} style={{
                  height: 8, borderRadius: 100, border: "none", cursor: "pointer",
                  width: i === active ? 28 : 8,
                  background: i === active ? char.accentColor : "rgba(74,173,160,0.2)",
                  transition: "all 0.4s ease",
                }} />
              ))}
            </div>

            <button onClick={() => handleGo(active + 1)} style={{
              width: 38, height: 38, borderRadius: "50%",
              border: "1px solid rgba(74,173,160,0.3)", background: "transparent",
              color: "#4aada0", fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#4aada0"; el.style.color = "#fff"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#4aada0"; }}>›</button>
          </div>

          {/* Name tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 24 }}>
            {CHARACTERS.map((c, i) => (
              <button key={i} onClick={() => handleGo(i)} style={{
                fontFamily: "var(--font-cinzel, serif)", fontWeight: 700,
                fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                background: "none", border: "none", cursor: "pointer",
                paddingBottom: 4,
                color: i === active ? c.accentColor : "rgba(58,61,82,0.3)",
                borderBottom: i === active ? `1px solid ${c.accentColor}` : "1px solid transparent",
                transition: "color 0.35s, border-color 0.35s",
              }}>{c.name}</button>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 700px) {
            .carousel-grid { grid-template-columns: 1fr !important; gap: 32px 0 !important; }
          }
        `}</style>
      </section>
    </>
  );
}
