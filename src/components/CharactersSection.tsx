"use client";
import { useEffect, useRef, useState } from "react";

const CHARACTERS = [
  { malId: 188701, name: "Frieren",  role: "Elven Mage",         quote: "I just didn't understand humans at the time.", traits: ["Zoltraak Master","1000+ Years","Spell Collector"] },
  { malId: 188702, name: "Fern",     role: "Mage Apprentice",     quote: "I will become stronger, for myself.",           traits: ["First-Class Candidate","Rapid Caster","Heiter's Ward"] },
  { malId: 188703, name: "Stark",    role: "Warrior",             quote: "I move before I get too scared.",              traits: ["Eisen's Protege","Overwhelming Power","Cowardly but Brave"] },
  { malId: 132878, name: "Himmel",   role: "The Hero",            quote: "Even if you forget me, I'm glad I met you.",   traits: ["Demon King Slayer","Leader","Eternal Legacy"] },
  { malId: 188704, name: "Heiter",   role: "Priest",              quote: "Fern will become a wonderful mage.",           traits: ["Holy Magic","Fern's Guardian","Aging Grace"] },
  { malId: 188705, name: "Eisen",    role: "Dwarf Warrior",       quote: "Strength protects what matters.",              traits: ["Dwarf Elder","Iron Constitution","Stark's Mentor"] },
  { malId: 188706, name: "Sein",     role: "Wandering Priest",    quote: "There's someone I need to find.",              traits: ["Wanderer","Healing Magic","Reluctant Hero"] },
  { malId: 188707, name: "Denken",   role: "First-Class Mage",    quote: "Power AND wisdom make a mage.",               traits: ["First-Class","Veterans' Guild","Life Magic"] },
  { malId: 188708, name: "Ubel",     role: "Mage Candidate",      quote: "I just do what comes naturally.",             traits: ["Instinct-Type","Imagination Magic","Unpredictable"] },
];

const ACCENT_COLORS: Record<string, string> = {
  Frieren: "#4aada0", Fern: "#7a6faa", Stark: "#c05c3a", Himmel: "#b8902a",
  Heiter: "#35877b", Eisen: "#7a6055", Sein: "#6a8a70", Denken: "#6070a0", Ubel: "#a06080",
};

// Local images override API for specific characters
const LOCAL_IMAGES: Record<string, string> = {
  Frieren: "/frieren-official.webp",
  Fern:    "/fern-official.webp",
  Stark:   "/stark-official.webp",
  Himmel:  "/himmel-official.webp",
  Heiter:  "/heiter-official.webp",
  Ubel:    "/ubel-official.webp",
};

interface CharData { name: string; role: string; quote: string; traits: string[]; image: string; }

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.05 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

function CharRow({ char, i }: { char: CharData; i: number }) {
  const ref = useReveal();
  const accent = ACCENT_COLORS[char.name] ?? "#4aada0";
  return (
    <div ref={ref} className="reveal char-row" style={{
      transitionDelay: `${i * 80}ms`,
      display: "grid",
      gridTemplateColumns: "56px 200px 1fr auto",
      gap: 32,
      alignItems: "center",
      padding: "28px 0",
      borderBottom: i < CHARACTERS.length - 1 ? "1px solid rgba(30,32,48,0.07)" : "none",
    }}>
      {/* Avatar */}
      <div style={{
        width: 56, height: 56, borderRadius: "50%", overflow: "hidden", flexShrink: 0,
        border: `2px solid ${accent}33`,
        background: "#f0ebe3",
        position: "relative",
      }}>
        {char.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={char.image} alt={char.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 22, color: "#c8c0d0" }}>{char.name[0]}</span>
          </div>
        )}
      </div>
      {/* Name + role */}
      <div>
        <h3 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 700, fontSize: 16, color: "#1e2030", margin: 0 }}>{char.name}</h3>
        <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: accent, marginTop: 4 }}>{char.role}</p>
      </div>
      {/* Quote */}
      <p className="char-row-quote" style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 13, color: "rgba(58,61,82,0.7)", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
        &ldquo;{char.quote}&rdquo;
      </p>
      {/* Traits */}
      <div className="char-row-traits" style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end", maxWidth: 260 }}>
        {char.traits.map(t => (
          <span key={t} style={{
            fontFamily: "var(--font-lato, sans-serif)", fontSize: 10,
            padding: "3px 10px", borderRadius: 100,
            border: `1px solid ${accent}33`, color: accent,
            background: `${accent}08`, letterSpacing: "0.02em",
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function CharactersSection() {
  const [chars, setChars] = useState<CharData[]>([]);
  const [loading, setLoading] = useState(true);
  const headerRef = useReveal();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res  = await fetch("https://api.jikan.moe/v4/anime/52991/characters");
        const json = await res.json();
        const api  = json.data as Array<{ character: { mal_id: number; name: string; images: { jpg: { image_url: string } } } }>;
        const result = CHARACTERS.map(c => {
          if (LOCAL_IMAGES[c.name]) return { ...c, image: LOCAL_IMAGES[c.name] };
          const found = api.find(d =>
            d.character.mal_id === c.malId ||
            d.character.name.toLowerCase().includes(c.name.toLowerCase())
          );
          return { ...c, image: found?.character.images.jpg.image_url ?? "" };
        });
        if (!cancelled) { setChars(result); setLoading(false); }
      } catch {
        if (!cancelled) { setChars(CHARACTERS.map(c => ({ ...c, image: "" }))); setLoading(false); }
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <section id="characters" style={{
      padding: "120px 24px",
      background: "linear-gradient(180deg, #f0ebe3 0%, #f8f4ef 100%)",
      position: "relative",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(200,192,208,0.4), transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ textAlign: "center", marginBottom: 80 }}>
          <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#4aada0", margin: "0 0 16px" }}>
            The Fellowship
          </p>
          <h2 style={{
            fontFamily: "var(--font-cinzel, serif)", fontWeight: 900,
            fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1e2030",
            margin: "0 0 16px", letterSpacing: "-0.02em",
          }}>Characters</h2>
          <div style={{ margin: "0 auto", width: 40, height: 1, background: "linear-gradient(90deg, transparent, rgba(184,144,42,0.4), transparent)" }} />
          <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 14, color: "#7a7590", maxWidth: 420, margin: "20px auto 0", lineHeight: 1.8 }}>
            Companions bound not by destiny, but by the small moments they chose to share.
          </p>
        </div>

        {/* Character rows */}
        <div>
          {loading
            ? CHARACTERS.map((c, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "56px 200px 1fr auto",
                  gap: 32, padding: "28px 0",
                  borderBottom: i < CHARACTERS.length - 1 ? "1px solid rgba(30,32,48,0.07)" : "none",
                  opacity: 0.4,
                }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#e8e4de" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ height: 14, width: 80, background: "#e0dbd4", borderRadius: 4 }} />
                    <div style={{ height: 10, width: 60, background: "#e8e4de", borderRadius: 4 }} />
                  </div>
                  <div style={{ height: 13, width: "80%", background: "#e8e4de", borderRadius: 4 }} />
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ height: 22, width: 60, background: "#e8e4de", borderRadius: 100 }} />
                    <div style={{ height: 22, width: 60, background: "#e8e4de", borderRadius: 100 }} />
                  </div>
                </div>
              ))
            : chars.map((char, i) => <CharRow key={char.name} char={char} i={i} />)
          }
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .char-row { grid-template-columns: 56px 1fr !important; }
        }
      `}</style>
    </section>
  );
}
