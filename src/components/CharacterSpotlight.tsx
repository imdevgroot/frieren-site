"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SpotlightProps {
  malId: number;
  name: string;
  nameJp: string;
  role: string;
  quote: string;
  stats: { label: string; value: string }[];
  traits: string[];
  bio: string[];
  accentColor: string;
  id?: string;
  localImage?: string;
}

export default function CharacterSpotlight({
  malId, name, nameJp, role, quote, stats, traits, bio,
  accentColor, id, localImage,
}: SpotlightProps) {
  const [apiImg, setApiImg] = useState<string>("");

  useEffect(() => {
    if (localImage) return;
    fetch(`https://api.jikan.moe/v4/characters/${malId}/full`)
      .then(r => r.json())
      .then(d => {
        const url = d?.data?.images?.jpg?.image_url ?? d?.data?.images?.webp?.image_url ?? "";
        setApiImg(url);
      })
      .catch(() => {});
  }, [malId, localImage]);

  const imgSrc = localImage ?? apiImg;
  const accent = accentColor;

  return (
    <section id={id} style={{
      position: "relative",
      padding: "120px 24px 140px",
      background: "linear-gradient(180deg, #f5f0ea 0%, #f8f4ef 50%, #f2ece4 100%)",
      overflow: "hidden",
    }}>
      {/* Top divider */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(200,192,208,0.4), transparent)" }} />

      {/* Decorative background rune */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        fontSize: "clamp(140px, 18vw, 240px)",
        fontFamily: "serif", color: `${accent}06`,
        userSelect: "none", pointerEvents: "none", lineHeight: 1,
        letterSpacing: "0.1em",
      }}>{nameJp}</div>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: accent, margin: 0 }}>
            {role}
          </p>
          <div style={{ margin: "10px auto 0", width: 40, height: 1, background: `linear-gradient(90deg, transparent, ${accent}60, transparent)` }} />
        </motion.div>

        {/* 3-col layout: stats | image | bio — exact same structure as FrierenSpotlight */}
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
            <div>
              <h2 style={{
                fontFamily: "var(--font-cinzel, serif)", fontWeight: 900,
                fontSize: "clamp(3rem, 5vw, 5rem)", color: "#1e2030",
                letterSpacing: "-0.02em", lineHeight: 1, margin: 0,
              }}>{name.toUpperCase()}</h2>
              <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 11, letterSpacing: "0.35em", color: accent, marginTop: 8 }}>
                {nameJp}
              </p>
            </div>

            {/* Quote */}
            <div style={{ borderLeft: `2px solid ${accent}66`, paddingLeft: 20 }}>
              <p style={{
                fontFamily: "var(--font-cinzel, serif)",
                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                color: "#3a3d52", fontStyle: "italic", lineHeight: 1.7, margin: 0,
              }}>
                &ldquo;{quote}&rdquo;
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {stats.map(s => (
                <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(30,32,48,0.08)", paddingBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#9990a8" }}>{s.label}</span>
                  <span style={{ fontFamily: "var(--font-cinzel, serif)", fontSize: 13, fontWeight: 700, color: "#1e2030" }}>{s.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CENTER — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut" }}
            className="spotlight-center"
            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <div style={{
              position: "absolute", bottom: "0%", left: "50%", transform: "translateX(-50%)",
              width: 300, height: 400,
              background: `radial-gradient(ellipse, ${accent}22 0%, transparent 70%)`,
              pointerEvents: "none",
            }} />
            {localImage ? (
              <Image
                src={localImage}
                alt={name}
                width={340}
                height={480}
                priority
                style={{
                  objectFit: "contain",
                  filter: `drop-shadow(0 20px 60px ${accent}33)`,
                  position: "relative",
                  zIndex: 1,
                }}
              />
            ) : apiImg ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={apiImg}
                alt={name}
                style={{
                  width: 340, objectFit: "contain",
                  filter: `drop-shadow(0 20px 60px ${accent}33)`,
                  position: "relative", zIndex: 1,
                }}
              />
            ) : (
              <div style={{ width: 340, height: 480, display: "flex", alignItems: "center", justifyContent: "center", background: "#f0ebe3" }}>
                <span style={{ fontFamily: "var(--font-cinzel, serif)", fontSize: 80, fontWeight: 900, color: "#c8c0d0" }}>{name[0]}</span>
              </div>
            )}
          </motion.div>

          {/* RIGHT — bio + traits + buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="spotlight-right"
            style={{ display: "flex", flexDirection: "column", gap: 28, paddingLeft: 24 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {bio.map((p, i) => (
                <p key={i} style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 14, color: "rgba(58,61,82,0.75)", lineHeight: 1.8, margin: 0 }}>{p}</p>
              ))}
            </div>

            {/* Traits */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {traits.map(t => (
                <span key={t} style={{
                  fontFamily: "var(--font-lato, sans-serif)", fontSize: 11,
                  padding: "4px 12px", borderRadius: 100,
                  background: `${accent}10`, border: `1px solid ${accent}33`,
                  color: accent, letterSpacing: "0.02em",
                }}>{t}</span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#characters" style={{
                fontFamily: "var(--font-lato, sans-serif)",
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                padding: "12px 28px", border: `1px solid ${accent}`,
                color: accent, textDecoration: "none",
                transition: "all 0.3s", borderRadius: 100,
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = accent; el.style.color = "#fff"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = accent; }}
              >Full Cast</a>
              <a href="#arcs" style={{
                fontFamily: "var(--font-lato, sans-serif)",
                fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                padding: "12px 28px", border: "1px solid #b8902a",
                color: "#b8902a", textDecoration: "none",
                transition: "all 0.3s", borderRadius: 100,
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#b8902a"; el.style.color = "#fff"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#b8902a"; }}
              >Story Arcs</a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #${id ?? "char"}-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
