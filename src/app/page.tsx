"use client";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FrierenSpotlight from "@/components/FrierenSpotlight";
import CharacterCarousel from "@/components/CharacterCarousel";
import CharacterSpotlight from "@/components/CharacterSpotlight";
import CharactersSection from "@/components/CharactersSection";
import MagicSection from "@/components/MagicSection";
import ArcsTimeline from "@/components/ArcsTimeline";
import QuotesSection from "@/components/QuotesSection";
import Footer from "@/components/Footer";

const FERN = {
  malId: 188702,
  localImage: "/fern-official.webp",
  name: "Fern",
  nameJp: "フェルン",
  role: "Mage Apprentice",
  id: "fern",
  quote: "I will become stronger. Not just for others — but for myself.",
  stats: [
    { label: "Species", value: "Human" },
    { label: "Class", value: "Mage" },
    { label: "Rank", value: "First-Class Candidate" },
    { label: "Mentor", value: "Heiter → Frieren" },
  ],
  traits: ["Exceptional Talent", "Zoltraak Master", "Rapid Caster", "Heiter's Ward", "Thousand-Shot Proficiency"],
  bio: [
    "Fern is an orphan taken in by the aging priest Heiter, who recognized her extraordinary mana capacity and arranged for Frieren to train her. What followed was years of relentless, quiet refinement.",
    "She has a no-nonsense exterior that borders on cold — but beneath it lies deep care for Frieren and Stark, expressed in small, wordless ways: packed meals, subtle warnings, a steadying hand.",
    "Her spellcasting speed is terrifying. In examinations and battle alike, she fires hundreds of Zoltraak shots with precision that even veteran first-class mages acknowledge as something rare.",
  ],
  accentColor: "#7a6faa",
  flip: false,
};

const STARK = {
  malId: 188703,
  localImage: "/stark-official.webp",
  name: "Stark",
  nameJp: "シュタルク",
  role: "Warrior",
  id: "stark",
  quote: "I move before I get too scared to move at all.",
  stats: [
    { label: "Species", value: "Human" },
    { label: "Class", value: "Warrior" },
    { label: "Mentor", value: "Eisen the Eisenfresser" },
    { label: "Specialty", value: "Combat Instinct" },
  ],
  traits: ["Eisen's Protege", "Cowardly But Fearless", "Overwhelming Power", "Aura Detection", "Reliable Shield"],
  bio: [
    "Stark is the apprentice of Eisen, one of the heroes who fought alongside Frieren. Despite his immense combat ability — enough to fell giants single-handedly — he privately considers himself a coward.",
    "His honesty is disarming. He admits fear openly, yet charges in anyway. That contradiction defines him: a warrior who knows terror and acts regardless, which by any measure is what courage actually is.",
    "He develops a quietly sincere bond with Fern, expressed through their endless bickering and his clumsy but genuine attempts to be useful. His presence is the warm center of the trio's dynamic.",
  ],
  accentColor: "#c05c3a",
  flip: true,
};

const HIMMEL = {
  malId: 132878,
  localImage: "/himmel-official.webp",
  name: "Himmel",
  nameJp: "ヒンメル",
  role: "The Hero",
  id: "himmel",
  quote: "Even if you forget me someday, I still want you to know — I am glad I got to meet you.",
  stats: [
    { label: "Species", value: "Human" },
    { label: "Class", value: "Hero" },
    { label: "Status", value: "Deceased" },
    { label: "Legacy", value: "Eternal" },
  ],
  traits: ["Leader of Heroes", "Demon King Slayer", "Frieren's Catalyst", "Statue Builder", "Beautiful Soul"],
  bio: [
    "Himmel the Hero led the legendary party that defeated the Demon King. He was charismatic, idealistic, and insufferably vain about his own appearance — but underneath all of that was a man of genuine, boundless heart.",
    "His death at the beginning of the story is the catalyst for everything. Frieren, who barely registered their decade together, is shattered by grief she didn't know she was capable of. That grief becomes her reason to journey, to understand, to grow.",
    "He appears throughout the story in flashbacks — laughing, posturing, gently teasing Frieren. Each memory reveals more of who he was: someone who chose kindness deliberately, who built statues not for glory but so strangers would have something to look at.",
  ],
  accentColor: "#b8902a",
  flip: false,
};

function ExploreHub() {
  const hubs = [
    { title: "Characters", desc: "Full profiles for every major character — abilities, lore, relationships, and key moments.", href: "/characters", accent: "#4aada0", icon: "✦" },
    { title: "Magic & Spells", desc: "Every documented spell and technique, organized by type with battle context and user notes.", href: "/magic", accent: "#7a6faa", icon: "◈" },
    { title: "Episode Guide", desc: "All 28 Season 1 episodes with summaries and key moments, grouped by arc.", href: "/episodes", accent: "#b8902a", icon: "◉" },
    { title: "Lore", desc: "Deep-dive articles on the magic system, the Demon War, the mage exam, and Frieren's true power.", href: "/lore", accent: "#c05c3a", icon: "❧" },
  ];

  return (
    <section style={{ padding: "80px 24px 100px", background: "#f0ebe3" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.5em", textTransform: "uppercase", color: "#4aada0", marginBottom: 14, fontWeight: 700 }}>Explore</p>
          <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#1e2030", margin: 0 }}>The World of Frieren</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2 }}>
          {hubs.map((h) => (
            <a key={h.href} href={h.href} style={{ display: "block", padding: "36px 32px", background: "#f8f4ef", textDecoration: "none", borderTop: `3px solid ${h.accent}`, transition: "background 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#f8f4ef"; }}>
              <span style={{ fontSize: 24, display: "block", marginBottom: 16, color: h.accent }}>{h.icon}</span>
              <h3 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 16, color: "#1e2030", marginBottom: 10 }}>{h.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "#7a7590", marginBottom: 20 }}>{h.desc}</p>
              <span style={{ fontSize: 11, color: h.accent, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Explore →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <HeroSection />
      <FrierenSpotlight />
      <CharacterCarousel />
      <CharactersSection />
      <ExploreHub />
      <MagicSection />
      <ArcsTimeline />
      <QuotesSection />
      <Footer />
    </>
  );
}
