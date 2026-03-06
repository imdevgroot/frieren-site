"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Particles({ count }: { count: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const sz = Math.random() * 3 + 1;
      const cols = ["rgba(74,173,160,0.6)", "rgba(200,192,208,0.7)", "rgba(184,144,42,0.5)"];
      const col = cols[Math.floor(Math.random() * cols.length)];
      p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;bottom:-10px;
        background:${col};animation-duration:${Math.random()*14+8}s;animation-delay:${Math.random()*10}s;`;
      c.appendChild(p);
    }
    return () => { while (c.firstChild) c.removeChild(c.firstChild); };
  }, [count]);
  return <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // On mobile: no parallax (y stays 0), no fade-out on scroll
  const y    = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "25%"]);
  const opac = useTransform(scrollYProgress, [0, 0.6], isMobile ? [1, 1] : [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f4ef] via-[#f3ede4] to-[#ede7dd]" />

      {/* Radials */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(74,173,160,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_30%_at_65%_35%,rgba(184,144,42,0.06),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_30%_65%,rgba(200,192,208,0.1),transparent)]" />

      {/* Spinning rings — hidden on mobile to avoid stutter */}
      {!isMobile && (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-[#4aada0]/10 animate-spin-slow pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] rounded-full border border-[#c8c0d0]/12 animate-spin-slow-r pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-[#b8902a]/8 animate-spin-slow pointer-events-none" />
        </>
      )}

      {/* Fewer particles on mobile */}
      <Particles count={isMobile ? 12 : 45} />

      {/* Content — no parallax transform on mobile */}
      <motion.div style={{ y, opacity: opac }} className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, letterSpacing: "1.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="font-lato text-[10px] text-[#4aada0] tracking-[0.4em] uppercase mb-8"
        >
          Sousou no Frieren &nbsp;·&nbsp; 葬送のフリーレン
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, ...(isMobile ? {} : { y: 40, filter: "blur(12px)" }) }}
          animate={{ opacity: 1, ...(isMobile ? {} : { y: 0, filter: "blur(0px)" }) }}
          transition={{ duration: isMobile ? 0.8 : 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-cinzel font-black shimmer-text leading-none mb-6"
          style={{ fontSize: "clamp(4rem, 13vw, 9rem)", letterSpacing: "0.35em" }}
        >
          FRIEREN
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 1.0 }}
          className="mx-auto mb-5 h-px w-36 bg-gradient-to-r from-transparent via-[#b8902a]/50 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-cinzel text-[#3a3d52] tracking-[0.1em] mb-4"
          style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)" }}
        >
          Beyond Journey&apos;s End
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-lato text-[#7a7590] italic tracking-wide text-sm"
        >
          An elven mage. A thousand years. A journey that never truly ends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          style={{ marginTop: "5rem" }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <a href="#frieren" style={{
              fontFamily: "var(--font-lato, sans-serif)",
              fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              padding: "14px 36px", borderRadius: 100,
              background: "#4aada0", color: "#fff",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(74,173,160,0.35)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#35877b"; el.style.boxShadow = "0 6px 28px rgba(74,173,160,0.5)"; el.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = "#4aada0"; el.style.boxShadow = "0 4px 20px rgba(74,173,160,0.35)"; el.style.transform = "translateY(0)"; }}
          >
            Discover Frieren
          </a>
          <a href="#arcs" style={{
              fontFamily: "var(--font-lato, sans-serif)",
              fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              padding: "14px 36px", borderRadius: 100,
              background: "transparent", color: "#b8902a",
              textDecoration: "none",
              border: "1px solid rgba(184,144,42,0.5)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#b8902a"; el.style.color = "#fff"; el.style.borderColor = "#b8902a"; el.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#b8902a"; el.style.borderColor = "rgba(184,144,42,0.5)"; el.style.transform = "translateY(0)"; }}
          >
            The Journey
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-lato text-[9px] tracking-[0.4em] text-[#4aada0]/60 uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-9 bg-gradient-to-b from-[#4aada0] to-transparent"
        />
      </motion.div>
    </section>
  );
}
