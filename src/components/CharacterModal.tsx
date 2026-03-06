"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CharData {
  name: string;
  nameJp: string;
  role: string;
  quote: string;
  image: string;
  accentColor: string;
  stats: { label: string; value: string }[];
  traits: string[];
  bio: string[];
}

interface Props {
  char: CharData | null;
  onClose: () => void;
}

export default function CharacterModal({ char, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = char ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [char]);

  return (
    <AnimatePresence>
      {char && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(30,32,48,0.6)",
            backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "24px 16px",
            overflowY: "auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: "linear-gradient(160deg, #f8f4ef 0%, #f2ece4 100%)",
              borderRadius: 24,
              maxWidth: 1000, width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
              boxShadow: "0 32px 80px rgba(30,32,48,0.25)",
            }}
          >
            {/* Close button */}
            <button onClick={onClose} style={{
              position: "sticky", top: 16, left: "100%",
              display: "block",
              marginLeft: "auto", marginRight: 20,
              width: 36, height: 36, borderRadius: "50%",
              border: "1px solid rgba(200,192,208,0.5)",
              background: "rgba(248,244,239,0.9)",
              backdropFilter: "blur(8px)",
              color: "#3a3d52", fontSize: 16, cursor: "pointer",
              zIndex: 10,
            }}>✕</button>

            {/* Content — same 3-col layout as FrierenSpotlight */}
            <div style={{ padding: "0 48px 60px", overflow: "hidden" }}>
              {/* Label */}
              <div style={{ textAlign: "center", marginBottom: 52, marginTop: 8 }}>
                <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: char.accentColor, margin: 0 }}>
                  {char.role}
                </p>
                <div style={{ margin: "10px auto 0", width: 40, height: 1, background: `linear-gradient(90deg, transparent, ${char.accentColor}60, transparent)` }} />
              </div>

              <div className="spotlight-grid" style={{
                display: "grid", gridTemplateColumns: "1fr auto 1fr",
                gap: "40px 56px", alignItems: "center",
              }}>
                {/* LEFT — name + stats */}
                <div className="spotlight-left" style={{ display: "flex", flexDirection: "column", gap: 28, paddingRight: 16 }}>
                  <div>
                    <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "clamp(2.5rem, 4vw, 4rem)", color: "#1e2030", letterSpacing: "-0.02em", lineHeight: 1, margin: 0 }}>
                      {char.name.toUpperCase()}
                    </h2>
                    <p style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 11, letterSpacing: "0.35em", color: char.accentColor, marginTop: 8 }}>{char.nameJp}</p>
                  </div>
                  <div style={{ borderLeft: `2px solid ${char.accentColor}66`, paddingLeft: 18 }}>
                    <p style={{ fontFamily: "var(--font-cinzel, serif)", fontSize: "clamp(0.85rem, 1.3vw, 1rem)", color: "#3a3d52", fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
                      &ldquo;{char.quote}&rdquo;
                    </p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {char.stats.map(s => (
                      <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(30,32,48,0.08)", paddingBottom: 10 }}>
                        <span style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#9990a8" }}>{s.label}</span>
                        <span style={{ fontFamily: "var(--font-cinzel, serif)", fontSize: 13, fontWeight: 700, color: "#1e2030" }}>{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CENTER — image */}
                <div className="spotlight-center" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 260, height: 340, background: `radial-gradient(ellipse, ${char.accentColor}22 0%, transparent 70%)`, pointerEvents: "none" }} />
                  <Image src={char.image} alt={char.name} width={300} height={420} priority
                    style={{ objectFit: "contain", filter: `drop-shadow(0 16px 48px ${char.accentColor}33)`, position: "relative", zIndex: 1 }} />
                </div>

                {/* RIGHT — bio + traits */}
                <div className="spotlight-right" style={{ display: "flex", flexDirection: "column", gap: 22, paddingLeft: 16 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {char.bio.map((p, i) => (
                      <p key={i} style={{ fontFamily: "var(--font-lato, sans-serif)", fontSize: 13, color: "rgba(58,61,82,0.75)", lineHeight: 1.8, margin: 0 }}>{p}</p>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {char.traits.map(t => (
                      <span key={t} style={{
                        fontFamily: "var(--font-lato, sans-serif)", fontSize: 11,
                        padding: "4px 12px", borderRadius: 100,
                        background: `${char.accentColor}10`, border: `1px solid ${char.accentColor}33`,
                        color: char.accentColor, letterSpacing: "0.02em",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
