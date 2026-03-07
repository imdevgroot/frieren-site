import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CHARACTERS, EXTENDED_CHARACTERS, getCharacter, getExtendedCharacter } from "@/data/characters";
import type { Metadata } from "next";

const ALL_SLUGS = [
  ...CHARACTERS.map((c) => c.slug),
  ...EXTENDED_CHARACTERS.map((c) => c.slug),
];

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const char = getCharacter(slug) ?? getExtendedCharacter(slug);
  if (!char) return {};
  return {
    title: `${char.name} — Frieren: Beyond Journey's End`,
    description: char.metaDescription,
    openGraph: {
      title: `${char.name} (${char.nameJp}) — Frieren Fan Site`,
      description: char.metaDescription,
    },
  };
}

const NAV_LINKS = [["Characters", "/characters"], ["Magic", "/magic"], ["Episodes", "/episodes"], ["Lore", "/lore"]];

export default async function CharacterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const char = getCharacter(slug) ?? getExtendedCharacter(slug);
  if (!char) notFound();

  const hasImage = "image" in char && !!char.image;
  const accent = char.accentColor;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: char.name,
    alternateName: char.nameJp,
    description: char.metaDescription,
    url: `https://frieren-site-v2.vercel.app/characters/${char.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: "#f8f4ef", minHeight: "100vh", fontFamily: "var(--font-lato, sans-serif)" }}>

        {/* Nav */}
        <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(248,244,239,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <Link href="/" style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 13, letterSpacing: "0.3em", color: "#1e2030", textDecoration: "none" }}>FRIEREN</Link>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {NAV_LINKS.map(([label, href]) => (
              <Link key={href} href={href} style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#7a7590", textDecoration: "none", fontWeight: 600 }}>{label}</Link>
            ))}
          </div>
        </nav>

        {/* Hero */}
        <div style={{ borderBottom: `3px solid ${accent}`, background: `linear-gradient(135deg, ${accent}08 0%, transparent 60%)`, padding: "60px 32px 48px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: hasImage ? "1fr auto 1fr" : "1fr 1fr", gap: 40, alignItems: "center" }}>
              {/* Left — name */}
              <div>
                <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: accent, marginBottom: 12, fontWeight: 700 }}>Character Profile</p>
                <h1 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "clamp(2rem, 6vw, 4rem)", color: "#1e2030", lineHeight: 1.1, marginBottom: 12 }}>{char.name}</h1>
                <p style={{ fontFamily: "var(--font-cinzel, serif)", fontSize: "clamp(0.9rem, 2vw, 1.2rem)", color: accent, marginBottom: 16, opacity: 0.8 }}>{char.nameJp}</p>
                <p style={{ fontSize: 14, color: "#7a7590", letterSpacing: "0.1em" }}>{char.role}</p>
              </div>

              {/* Center — image if available */}
              {hasImage && (
                <div style={{ position: "relative", width: 240, height: 340, flexShrink: 0 }}>
                  <Image src={(char as { image: string }).image} alt={char.name} fill sizes="240px"
                    style={{ objectFit: "contain", objectPosition: "bottom center", filter: `drop-shadow(0 12px 32px ${accent}33)` }} priority />
                </div>
              )}

              {/* Right — quick info */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7a7590", marginBottom: 4 }}>Abilities</p>
                  <p style={{ fontSize: 14, color: "#1e2030", fontWeight: 600 }}>{char.abilities.length} documented</p>
                </div>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 16 }}>
                  <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7a7590", marginBottom: 4 }}>Relationships</p>
                  <p style={{ fontSize: 14, color: "#1e2030", fontWeight: 600 }}>{char.relationships.length} characters</p>
                </div>
                <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 16 }}>
                  <Link href="/characters" style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, fontWeight: 700, textDecoration: "none" }}>← All Characters</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px 80px" }}>

          {/* Bio */}
          <section style={{ marginBottom: 64 }}>
            <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.6rem", color: "#1e2030", marginBottom: 8 }}>Biography</h2>
            <div style={{ width: 40, height: 2, background: accent, marginBottom: 32 }} />
            {char.bio.map((para, i) => (
              <p key={i} style={{ fontSize: 16, lineHeight: 1.85, color: "#3a3d52", marginBottom: 20 }}>{para}</p>
            ))}
          </section>

          {/* Abilities */}
          <section style={{ marginBottom: 64 }}>
            <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.6rem", color: "#1e2030", marginBottom: 8 }}>Abilities</h2>
            <div style={{ width: 40, height: 2, background: accent, marginBottom: 32 }} />
            {char.abilities.map((ab, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, padding: "20px 0", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 700, fontSize: 15, color: "#1e2030", marginBottom: 4 }}>{ab.name}</p>
                  {"nameJp" in ab && ab.nameJp ? <p style={{ fontSize: 12, color: accent }}>{String(ab.nameJp)}</p> : null}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#3a3d52" }}>{ab.description}</p>
              </div>
            ))}
          </section>

          {/* Relationships */}
          <section style={{ marginBottom: 64 }}>
            <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.6rem", color: "#1e2030", marginBottom: 8 }}>Relationships</h2>
            <div style={{ width: 40, height: 2, background: accent, marginBottom: 32 }} />
            {char.relationships.map((rel, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 24, padding: "16px 0", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                <p style={{ fontWeight: 700, fontSize: 15, color: "#1e2030" }}>{rel.name}</p>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: "#3a3d52" }}>{rel.description}</p>
              </div>
            ))}
          </section>

          {/* Key Moments */}
          {"keyMoments" in char && char.keyMoments.length > 0 && (
            <section style={{ marginBottom: 64 }}>
              <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.6rem", color: "#1e2030", marginBottom: 8 }}>Key Moments</h2>
              <div style={{ width: 40, height: 2, background: accent, marginBottom: 32 }} />
              {char.keyMoments.map((km, i) => (
                <div key={i} style={{ display: "flex", gap: 24, padding: "20px 0", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                  <div style={{ flexShrink: 0, width: 8, height: 8, borderRadius: "50%", background: accent, marginTop: 7 }} />
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 15, color: "#1e2030", marginBottom: 6 }}>{km.title}</p>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: "#3a3d52" }}>{km.description}</p>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Quotes */}
          {"quotes" in char && (char as { quotes: string[] }).quotes.length > 0 && (
            <section style={{ marginBottom: 64 }}>
              <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.6rem", color: "#1e2030", marginBottom: 8 }}>Notable Quotes</h2>
              <div style={{ width: 40, height: 2, background: accent, marginBottom: 32 }} />
              {(char as { quotes: string[] }).quotes.map((q, i) => (
                <blockquote key={i} style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 24, margin: "0 0 24px 0" }}>
                  <p style={{ fontFamily: "var(--font-cinzel, serif)", fontSize: 16, lineHeight: 1.8, color: "#1e2030", fontStyle: "italic" }}>{q}</p>
                </blockquote>
              ))}
            </section>
          )}

          {/* Browse all */}
          <section>
            <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.4rem", color: "#1e2030", marginBottom: 8 }}>More Characters</h2>
            <div style={{ width: 40, height: 2, background: accent, marginBottom: 28 }} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[...CHARACTERS, ...EXTENDED_CHARACTERS].filter((c) => c.slug !== char.slug).map((c) => (
                <Link key={c.slug} href={`/characters/${c.slug}`} style={{ padding: "8px 18px", border: `1px solid ${c.accentColor}40`, borderRadius: 40, fontSize: 12, fontWeight: 600, color: c.accentColor, textDecoration: "none" }}>
                  {c.name}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
