export default function Footer() {
  const links = [
    { label: "Frieren", href: "#frieren" },
    { label: "Fern",    href: "#fern" },
    { label: "Stark",   href: "#stark" },
    { label: "Himmel",  href: "#himmel" },
    { label: "Characters", href: "#characters" },
    { label: "Magic",   href: "#magic" },
    { label: "Arcs",    href: "#arcs" },
    { label: "Quotes",  href: "#quotes" },
  ];

  return (
    <footer style={{ background: "#1e2030", position: "relative", overflow: "hidden" }}>
      {/* Top fade */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(74,173,160,0.2), transparent)" }} />

      {/* Background rune */}
      <div style={{
        position: "absolute", bottom: "-10%", left: "50%", transform: "translateX(-50%)",
        fontSize: "clamp(200px, 30vw, 400px)",
        fontFamily: "serif", color: "rgba(74,173,160,0.03)",
        userSelect: "none", pointerEvents: "none", lineHeight: 1,
      }}>フリーレン</div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 60px", position: "relative" }}>
        {/* Top row */}
        <div className="footer-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 60, flexWrap: "wrap", gap: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#fff", letterSpacing: "0.2em", marginBottom: 12 }}>
              FRIEREN
            </div>
            <div style={{ height: 1, width: 40, background: "linear-gradient(90deg, rgba(74,173,160,0.5), transparent)", marginBottom: 16 }} />
            <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, maxWidth: 240, fontStyle: "italic" }}>
              &ldquo;An elven mage. A thousand years. A journey that never truly ends.&rdquo;
            </p>
          </div>

          {/* Nav links */}
          <div className="footer-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 48px" }}>
            {links.map(l => (
              <a key={l.label} href={l.href} style={{
                fontFamily: "var(--font-lato, sans-serif)",
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)", textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = "#4aada0"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}
              >{l.label}</a>
            ))}
          </div>
        </div>

        {/* Bottom divider + legal */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 28 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
            Frieren: Beyond Journey&apos;s End &copy; Kanehito Yamada &amp; Tsukasa Abe / Shogakukan
          </p>
          <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, color: "rgba(255,255,255,0.15)" }}>
            Fan site &mdash; no official affiliation
          </p>
        </div>
      </div>
    </footer>
  );
}
