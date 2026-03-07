import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CHARACTERS, EXTENDED_CHARACTERS } from "@/data/characters";

export const metadata: Metadata = {
  title: "Characters — Frieren: Beyond Journey's End",
  description: "Complete character guide for Frieren: Beyond Journey's End. Detailed profiles for Frieren, Fern, Stark, Himmel, Heiter, Eisen, Ubel, and more.",
};

export default function CharactersIndexPage() {
  return (
    <div style={{ background: "#f8f4ef", minHeight: "100vh", fontFamily: "var(--font-lato, sans-serif)" }}>
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(248,244,239,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 13, letterSpacing: "0.3em", color: "#1e2030", textDecoration: "none" }}>FRIEREN</Link>
        <div style={{ display: "flex", gap: 28 }}>
          {[["Characters", "/characters"], ["Magic", "/magic"], ["Episodes", "/episodes"], ["Lore", "/lore"]].map(([label, href]) => (
            <Link key={href} href={href} style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: href === "/characters" ? "#4aada0" : "#7a7590", textDecoration: "none", fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </nav>

      <div style={{ borderBottom: "3px solid #4aada0", padding: "60px 32px 48px", background: "linear-gradient(135deg, #4aada008 0%, transparent 60%)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#4aada0", marginBottom: 12, fontWeight: 700 }}>Full Profiles</p>
          <h1 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1e2030", marginBottom: 16 }}>Characters</h1>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#7a7590", maxWidth: 600 }}>Detailed profiles for every major character — abilities, lore, relationships, key moments, and notable quotes.</p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px 40px" }}>
        <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.2rem", color: "#1e2030", marginBottom: 8 }}>Main Cast</h2>
        <div style={{ width: 32, height: 2, background: "#4aada0", marginBottom: 32 }} />
        {CHARACTERS.map((char) => (
          <Link key={char.slug} href={`/characters/${char.slug}`} style={{ textDecoration: "none" }}>
            <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 32, padding: "32px 0", borderBottom: "1px solid rgba(0,0,0,0.07)", alignItems: "center", cursor: "pointer" }}>
              <div style={{ position: "relative", width: 120, height: 160 }}>
                <Image src={char.image} alt={char.name} fill sizes="120px" style={{ objectFit: "contain", objectPosition: "bottom center", filter: `drop-shadow(0 8px 20px ${char.accentColor}33)` }} />
              </div>
              <div>
                <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: char.accentColor, marginBottom: 6, fontWeight: 700 }}>{char.nameJp}</p>
                <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.6rem", color: "#1e2030", marginBottom: 6 }}>{char.name}</h2>
                <p style={{ fontSize: 13, color: "#7a7590", marginBottom: 14, letterSpacing: "0.05em" }}>{char.role}</p>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#3a3d52" }}>{char.bio[0].slice(0, 180)}...</p>
                <p style={{ marginTop: 16, fontSize: 12, color: char.accentColor, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Read profile →</p>
              </div>
            </div>
          </Link>
        ))}

        <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.2rem", color: "#1e2030", marginTop: 64, marginBottom: 8 }}>Supporting Cast</h2>
        <div style={{ width: 32, height: 2, background: "#7a6faa", marginBottom: 32 }} />
        {EXTENDED_CHARACTERS.map((char) => (
          <Link key={char.slug} href={`/characters/${char.slug}`} style={{ textDecoration: "none" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, padding: "24px 0", borderBottom: "1px solid rgba(0,0,0,0.07)", cursor: "pointer" }}>
              <div>
                <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: char.accentColor, marginBottom: 4, fontWeight: 700 }}>{char.nameJp}</p>
                <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.2rem", color: "#1e2030", marginBottom: 4 }}>{char.name}</h2>
                <p style={{ fontSize: 12, color: "#7a7590", marginBottom: 10, letterSpacing: "0.05em" }}>{char.role}</p>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "#3a3d52" }}>{char.bio[0].slice(0, 160)}...</p>
                <p style={{ marginTop: 12, fontSize: 11, color: char.accentColor, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Read profile →</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
