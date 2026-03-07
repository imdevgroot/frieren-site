import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CHARACTERS, EXTENDED_CHARACTERS } from "@/data/characters";
import CharacterCard from "@/components/CharacterCard";

export const metadata: Metadata = {
  title: "Characters — Frieren: Beyond Journey's End",
  description: "Complete character guide for Frieren: Beyond Journey's End. Profiles for Frieren, Fern, Stark, Himmel, Flamme, Serie, Aura, and many more.",
};

const GROUPS = [
  {
    title: "Main Cast",
    accent: "#4aada0",
    chars: CHARACTERS,
    showImage: true,
  },
  {
    title: "Allies & Companions",
    accent: "#7a6faa",
    chars: EXTENDED_CHARACTERS.filter((c) =>
      ["flamme", "serie", "sein", "denken", "sense", "granat"].includes(c.slug)
    ),
    showImage: false,
  },
  {
    title: "Antagonists",
    accent: "#c05c3a",
    chars: EXTENDED_CHARACTERS.filter((c) =>
      ["aura", "lugner", "linie"].includes(c.slug)
    ),
    showImage: false,
  },
  {
    title: "Exam Candidates",
    accent: "#b8902a",
    chars: EXTENDED_CHARACTERS.filter((c) =>
      ["wirbel", "land", "lawine", "kanne"].includes(c.slug)
    ),
    showImage: false,
  },
];

const NAV_LINKS = [["Characters", "/characters"], ["Magic", "/magic"], ["Episodes", "/episodes"], ["Lore", "/lore"]];

export default function CharactersIndexPage() {
  return (
    <div style={{ background: "#f8f4ef", minHeight: "100vh", fontFamily: "var(--font-lato, sans-serif)" }}>
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(248,244,239,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <Link href="/" style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 13, letterSpacing: "0.3em", color: "#1e2030", textDecoration: "none" }}>FRIEREN</Link>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {NAV_LINKS.map(([label, href]) => (
            <Link key={href} href={href} style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: href === "/characters" ? "#4aada0" : "#7a7590", textDecoration: "none", fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </nav>

      <div style={{ borderBottom: "3px solid #4aada0", padding: "60px 32px 48px", background: "linear-gradient(135deg, #4aada008 0%, transparent 60%)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#4aada0", marginBottom: 12, fontWeight: 700 }}>
            {CHARACTERS.length + EXTENDED_CHARACTERS.length} Profiles
          </p>
          <h1 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1e2030", marginBottom: 16 }}>Characters</h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#7a7590", maxWidth: 600 }}>
            Detailed profiles for every major character — abilities, lore, relationships, key moments, and quotes.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px 80px" }}>
        {GROUPS.map((group) => (
          <section key={group.title} style={{ marginBottom: 72 }}>
            <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.2rem", color: "#1e2030", marginBottom: 8 }}>{group.title}</h2>
            <div style={{ width: 32, height: 2, background: group.accent, marginBottom: 32 }} />

            {group.showImage
              ? group.chars.map((char) => (
                  <Link key={char.slug} href={`/characters/${char.slug}`} style={{ textDecoration: "none", display: "block" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 32, padding: "28px 0", borderBottom: "1px solid rgba(0,0,0,0.07)", alignItems: "center" }}>
                      <div style={{ position: "relative", width: 120, height: 160, flexShrink: 0 }}>
                        {"image" in char && char.image ? (
                          <Image src={char.image as string} alt={char.name} fill sizes="120px"
                            style={{ objectFit: "contain", objectPosition: "bottom center", filter: `drop-shadow(0 6px 16px ${char.accentColor}33)` }} />
                        ) : (
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 32, color: char.accentColor + "60" }}>{char.name[0]}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: char.accentColor, marginBottom: 4, fontWeight: 700 }}>{char.nameJp}</p>
                        <h3 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.4rem", color: "#1e2030", marginBottom: 4 }}>{char.name}</h3>
                        <p style={{ fontSize: 12, color: "#7a7590", marginBottom: 12, letterSpacing: "0.05em" }}>{char.role}</p>
                        <p style={{ fontSize: 15, lineHeight: 1.75, color: "#3a3d52" }}>{char.bio[0].slice(0, 180)}...</p>
                        <p style={{ marginTop: 14, fontSize: 11, color: char.accentColor, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Full Profile →</p>
                      </div>
                    </div>
                  </Link>
                ))
              : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 2 }}>
                  {group.chars.map((char) => (
                    <CharacterCard key={char.slug} slug={char.slug} nameJp={char.nameJp} name={char.name} role={char.role} bio={char.bio[0]} accentColor={char.accentColor} />
                  ))}
                </div>
              )
            }
          </section>
        ))}
      </div>
    </div>
  );
}
