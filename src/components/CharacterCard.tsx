"use client";
import Link from "next/link";

type Props = {
  slug: string;
  nameJp: string;
  name: string;
  role: string;
  bio: string;
  accentColor: string;
};

export default function CharacterCard({ slug, nameJp, name, role, bio, accentColor }: Props) {
  return (
    <Link href={`/characters/${slug}`} style={{ textDecoration: "none", display: "block", padding: "24px", background: "#f0ebe3", borderTop: `3px solid ${accentColor}`, transition: "background 0.2s" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#fff"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#f0ebe3"; }}>
      <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: accentColor, marginBottom: 4, fontWeight: 700 }}>{nameJp}</p>
      <h3 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 16, color: "#1e2030", marginBottom: 6 }}>{name}</h3>
      <p style={{ fontSize: 12, color: "#7a7590", marginBottom: 12 }}>{role}</p>
      <p style={{ fontSize: 13, lineHeight: 1.7, color: "#3a3d52" }}>{bio.slice(0, 120)}...</p>
      <p style={{ marginTop: 14, fontSize: 11, color: accentColor, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Read →</p>
    </Link>
  );
}
