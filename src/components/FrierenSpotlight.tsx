"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const STATS = [
  { label: "Species", value: "Elf" },
  { label: "Age",     value: "1,000+ Years" },
  { label: "Class",   value: "Mage" },
  { label: "Rank",    value: "First-Class (Unofficial)" },
];

const TRAITS = ["Spell Collector", "Zoltraak Master", "Disciple of Flamme", "Party of Heroes", "Ancient Magic Scholar"];

export default function FrierenSpotlight() {
  return (
    <section id="frieren" style={{
      position: "relative",
      padding: "120px 24px 140px",
      background: "linear-gradient(180deg, #f5f0ea 0%, #f8f4ef 50%, #f2ece4 100%)",
      overflow: "hidden",
    }}>
      {/* Decorative background runes */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        fontSize: "clamp(140px, 18vw, 240px)",
        fontFamily: "serif", color: "rgba(74,173,160,0.04)",
        userSelect: "none", pointerEvents: "none", lineHeight: 1,
        letterSpacing: "0.1em",
      }}>フリーレン</div>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#4aada0", margin: 0 }}>
            The Protagonist
          </p>
          <div style={{ margin: "10px auto 0", width: 40, height: 1, background: "linear-gradient(90deg, transparent, #b8902a60, transparent)" }} />
        </motion.div>

        {/* Hero layout: image center-stage, info flanking */}
        <div className="spotlight-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: "48px 64px",
          alignItems: "center",
        }}>

          {/* LEFT — name + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="spotlight-left"
          style={{ display: "flex", flexDirection: "column", gap: 36, paddingRight: 24 }}
          >
            {/* Big name */}
            <div>
              <h2 style={{
                fontFamily: "var(--font-cinzel, serif)",
                fontWeight: 900,
                fontSize: "clamp(3rem, 5vw, 5rem)",
                color: "#1e2030",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                margin: 0,
              }}>FRIEREN</h2>
              <p style={{
                fontFamily: "var(--font-lato, sans-serif)",
                fontSize: 11, letterSpacing: "0.35em",
                color: "#4aada0", marginTop: 8,
              }}>葬送のフリーレン</p>
            </div>

            {/* Quote */}
            <div style={{ borderLeft: "2px solid rgba(184,144,42,0.4)", paddingLeft: 20 }}>
              <p style={{
                fontFamily: "var(--font-cinzel, serif)",
                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                color: "#3a3d52",
                fontStyle: "italic",
                lineHeight: 1.7,
                margin: 0,
              }}>
                &ldquo;Humans live such short lives —<br/>but they burn so brightly.&rdquo;
              </p>
            </div>

            {/* Stats — minimal, no boxes */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {STATS.map(s => (
                <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(30,32,48,0.08)", paddingBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#9990a8" }}>{s.label}</span>
                  <span style={{ fontFamily: "var(--font-cinzel, serif)", fontSize: 13, fontWeight: 700, color: "#1e2030" }}>{s.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CENTER — official image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut" }}
            className="spotlight-center"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {/* Glow behind image */}
            <div style={{
              position: "absolute", bottom: "0%", left: "50%", transform: "translateX(-50%)",
              width: 300, height: 400,
              background: "radial-gradient(ellipse, rgba(74,173,160,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <Image
              src="/frieren-official.webp"
              alt="Frieren"
              width={340}
              height={480}
              priority
              style={{
                objectFit: "contain",
                filter: "drop-shadow(0 20px 60px rgba(74,173,160,0.2))",
                position: "relative",
                zIndex: 1,
              }}
            />
          </motion.div>

          {/* RIGHT — bio + traits + buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="spotlight-right"
            style={{ display: "flex", flexDirection: "column", gap: 28, paddingLeft: 24 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 14, color: "rgba(58,61,82,0.75)", lineHeight: 1.8, margin: 0 }}>
                Frieren is an elven mage who journeyed with a legendary party to defeat the Demon King over a decade ago. While her companions aged and passed away, she barely changed — a reminder of the vast difference between elf and human lifespans.
              </p>
              <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 14, color: "rgba(58,61,82,0.75)", lineHeight: 1.8, margin: 0 }}>
                The death of Himmel awakened something in her — a quiet grief for time she didn&apos;t fully value, and a resolve to understand the people around her better. Now she journeys north to Aureole, seeking one last conversation with the hero who changed her.
              </p>
              <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 14, color: "rgba(58,61,82,0.75)", lineHeight: 1.8, margin: 0 }}>
                Calm, absent-minded, endlessly devoted to collecting rare &ldquo;useless&rdquo; spells — she is one of the most powerful mages alive, though she rarely reveals it. Her strength lies not in power, but in a thousand years of accumulated wisdom.
              </p>
            </div>

            {/* Traits */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {TRAITS.map(t => (
                <span key={t} style={{
                  fontFamily: "var(--font-lato, sans-serif)",
                  fontSize: 11, padding: "4px 12px", borderRadius: 100,
                  background: "rgba(74,173,160,0.07)",
                  border: "1px solid rgba(74,173,160,0.2)",
                  color: "#35877b", letterSpacing: "0.02em",
                }}>{t}</span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#characters" style={{
                fontFamily: "var(--font-lato, sans-serif)",
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                padding: "12px 28px", border: "1px solid #4aada0",
                color: "#4aada0", textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = "#4aada0"; (e.target as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "#4aada0"; }}
              >Full Cast</a>
              <a href="#arcs" style={{
                fontFamily: "var(--font-lato, sans-serif)",
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                padding: "12px 28px", border: "1px solid #b8902a",
                color: "#b8902a", textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background = "#b8902a"; (e.target as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "#b8902a"; }}
              >Story Arcs</a>
            </div>
          </motion.div>
        </div>

        {/* Mobile stack — hidden on desktop via media query approach */}
        <style>{`
          @media (max-width: 900px) {
            .frieren-grid { grid-template-columns: 1fr !important; }
            .frieren-grid > * { padding: 0 !important; }
            .frieren-left { order: 2; }
            .frieren-center { order: 1; }
            .frieren-right { order: 3; }
          }
        `}</style>
      </div>
    </section>
  );
}
