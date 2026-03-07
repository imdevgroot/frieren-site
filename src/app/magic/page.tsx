import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Magic & Spells — Frieren: Beyond Journey's End",
  description: "A complete guide to the magic system in Frieren: Beyond Journey's End. Every spell, technique, and magical concept explained — from Zoltraak to Serie's ancient arts.",
  openGraph: {
    title: "Magic & Spells Database — Frieren Fan Site",
    description: "Every spell and magical technique in Frieren: Beyond Journey's End, explained in depth.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Magic & Spells in Frieren: Beyond Journey's End",
  description: "A comprehensive guide to every spell, technique, and magical concept in Frieren.",
  url: "https://frieren-site-theta.vercel.app/magic",
};

type Spell = { name: string; nameJp?: string; users: string[]; description: string; notes?: string };

const OFFENSIVE: Spell[] = [
  { name: "Zoltraak", nameJp: "ゾルトラーク", users: ["Frieren", "Fern", "Demons"], description: "The most iconic spell in the series. Originally a high-tier demon-exclusive offensive spell, Zoltraak fires a powerful magical bolt capable of penetrating most standard defensive barriers. Frieren deciphered and countered it, eventually teaching countermeasures that became standard for human mages.", notes: "Fern's Zoltraak is noted as the fastest and most mana-efficient cast among human mages of her generation." },
  { name: "Rapid-Fire Zoltraak", users: ["Fern"], description: "Fern's signature combat style: chaining Zoltraak bolts in rapid succession with minimal recovery time between shots. The technique exploits her exceptional magical efficiency to sustain overwhelming pressure.", notes: "Few mages can maintain this casting speed without exhausting their mana reserves." },
  { name: "Explosive Slash (Magic-Enhanced)", users: ["Stark"], description: "While not a traditional spell, Stark channels force into sword strikes the way mages channel mana — compressing immense physical power and releasing it at impact for explosive area effect." },
  { name: "Jilwer", nameJp: "ジルヴァー", users: ["Frieren"], description: "A high-speed magical projectile spell. Less powerful than Zoltraak at full charge but faster to cast, making it useful for rapid exchanges." },
  { name: "Concept Cutting", users: ["Ubel"], description: "Ubel's unique ability: she imagines her target as something to be cut rather than struck with force. This conceptual shift allows her magic to sever barriers and defenses that raw power cannot overcome.", notes: "Considered one of the most theoretically unique magical abilities in the series." },
  { name: "Lügner's Deceptive Magic", nameJp: "リュグナー", users: ["Lügner"], description: "A demon mage whose magic specializes in generating false mana signatures and misleading detection magic. Designed specifically to counter human mage strategies." },
  { name: "Aura's Blood Manipulation", users: ["Aura the Guillotine"], description: "Aura controls targets through their blood — a demonic ability that bypasses conventional magical defenses by working on the physical level rather than the magical one.", notes: "Frieren neutralized this by overwhelming Aura with the scale of her own magic." },
];

const DEFENSIVE: Spell[] = [
  { name: "Standard Barrier Magic", users: ["Frieren", "Fern", "Heiter"], description: "The foundation of magical defense. A mage shapes their mana into a barrier layer that absorbs incoming magical attacks. Quality scales with the caster's output and control." },
  { name: "Frieren's Layered Barriers", users: ["Frieren"], description: "Frieren can maintain multiple overlapping barrier layers simultaneously — a feat that requires enormous mana and fine control that most mages cannot sustain." },
  { name: "Sense's Barrier", users: ["Sense"], description: "The exam proctor Sense's defensive barriers were designed to be penetrable only by mages of exceptional ability. They serve as the definitive test of the exam participants' offensive capability.", notes: "Ubel's conceptual cutting magic was one of the few techniques that breached it cleanly." },
  { name: "Anti-Magic Barrier", users: ["Frieren", "Serie"], description: "A specialized barrier that negates magical effects rather than simply absorbing them. Far more difficult to construct than standard barriers; mastery signals genuine expertise." },
  { name: "Heiter's Priestly Wards", users: ["Heiter"], description: "Defensive barriers with a spiritual foundation — effective against undead and demonic presences as well as conventional magical attacks." },
];

const UTILITY: Spell[] = [
  { name: "Mana Concealment", users: ["Frieren"], description: "Frieren maintains near-perfect suppression of her mana output, making her appear to be an ordinary or even weak mage to detection spells. This is itself a technically demanding skill almost no mage can achieve at Frieren's level.", notes: "Most mages cannot suppress their mana signature at all — the ability to do so suggests conscious control of output at every moment." },
  { name: "Mana Detection", users: ["Frieren", "Fern", "Most mages"], description: "The ability to sense and interpret mana signatures in the surrounding area. Skilled practitioners can distinguish individual mages by their unique mana quality, detect hidden enemies, and read the emotional state of a mage through the character of their mana." },
  { name: "Flower Spells", users: ["Frieren"], description: "A collection of small spells Frieren has gathered over a thousand years — causing flowers to bloom out of season, changing their color, making them glow softly at night. Practically useless; deeply cherished.", notes: "Frieren collected these specifically because they brought happiness to someone. She considers them among her most important spells." },
  { name: "Flamme's Mana Concealment Technique", users: ["Flamme", "Frieren"], description: "Frieren's master Flamme developed the foundational mana concealment method that allowed humans to hide their magical ability from demons for generations — a strategic deception that proved critical in the long war." },
  { name: "Healing Magic", users: ["Heiter", "Fern (basic)"], description: "The domain of priests and support mages. Heiter's healing was considered exceptional — capable of addressing wounds that standard healing spells could not resolve." },
  { name: "Detection and Divination", users: ["Heiter", "Support mages"], description: "Priestly magic that allows the caster to sense undead presences, demonic auras, magical traps, and curses. Invaluable during the war." },
  { name: "Imitation Magic", users: ["Frieren", "Ubel"], description: "The ability to observe and replicate a spell — reconstructing its structure from what can be seen and sensed during a single casting. Frieren has spent centuries perfecting this, giving her an enormous and varied repertoire.", notes: "Ubel showed exceptional natural imitation ability during the First-Class Mage Exam." },
];

const ANCIENT: Spell[] = [
  { name: "Serie's Unnamed Arts", users: ["Serie"], description: "The greatest living mage's abilities are largely left undefined — which is itself a statement about their scale. Serie is implied to be capable of things no other living mage could attempt.", notes: "Serie grants one wish to any mage who can copy one of her spells. No one has succeeded in living memory." },
  { name: "Aureole's Magic (Restricted)", users: ["Unknown ancient mages"], description: "The magic of Aureole, the Land of Souls at the end of the world, is referenced but never fully described. It is the reason Frieren's journey north requires a first-class mage certification — the magic there requires capabilities that cannot be faked." },
  { name: "Flamme's True Power", users: ["Flamme"], description: "Frieren's master was one of the greatest mages of her era. The full scope of Flamme's abilities is revealed slowly throughout the series — she was responsible for strategic decisions that shaped the entire war." },
  { name: "Killing Intent", users: ["Stark", "Veterans"], description: "Not a spell but a projection of pure, concentrated murderous intent. Powerful enough to immobilize those with weaker resolve. Stark's version has been compared to the aura of a Demon King general." },
];

function SpellBlock({ spell }: { spell: Spell }) {
  return (
    <div style={{ padding: "24px 0", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
        <h3 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 700, fontSize: 17, color: "#1e2030", margin: 0 }}>{spell.name}</h3>
        {spell.nameJp && <span style={{ fontSize: 13, color: "#4aada0" }}>{spell.nameJp}</span>}
        <span style={{ marginLeft: "auto", fontSize: 11, color: "#7a7590", letterSpacing: "0.1em" }}>
          {spell.users.join(" · ")}
        </span>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "#3a3d52", marginBottom: spell.notes ? 10 : 0 }}>{spell.description}</p>
      {spell.notes && (
        <p style={{ fontSize: 13, color: "#7a7590", fontStyle: "italic", borderLeft: "2px solid #4aada040", paddingLeft: 14 }}>{spell.notes}</p>
      )}
    </div>
  );
}

export default function MagicPage() {
  const sections = [
    { title: "Offensive Magic", accent: "#c05c3a", spells: OFFENSIVE },
    { title: "Defensive Magic", accent: "#4aada0", spells: DEFENSIVE },
    { title: "Utility & Support", accent: "#7a6faa", spells: UTILITY },
    { title: "Ancient & Rare Arts", accent: "#b8902a", spells: ANCIENT },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ background: "#f8f4ef", minHeight: "100vh", fontFamily: "var(--font-lato, sans-serif)" }}>

        {/* Nav */}
        <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(248,244,239,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 13, letterSpacing: "0.3em", color: "#1e2030", textDecoration: "none" }}>FRIEREN</Link>
          <div style={{ display: "flex", gap: 28 }}>
            {[["Characters", "/characters"], ["Magic", "/magic"], ["Episodes", "/episodes"], ["Lore", "/lore"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: href === "/magic" ? "#4aada0" : "#7a7590", textDecoration: "none", fontWeight: 600 }}>{label}</Link>
            ))}
          </div>
        </nav>

        {/* Header */}
        <div style={{ borderBottom: "3px solid #4aada0", padding: "60px 32px 48px", background: "linear-gradient(135deg, #4aada008 0%, transparent 60%)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#4aada0", marginBottom: 12, fontWeight: 700 }}>Reference</p>
            <h1 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1e2030", marginBottom: 16 }}>Magic & Spells</h1>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#7a7590", maxWidth: 640 }}>
              A complete reference to the magic system in Frieren: Beyond Journey&apos;s End — every documented spell, technique, and magical concept, organized by type and annotated with battle context.
            </p>
          </div>
        </div>

        {/* Intro */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 32px 0" }}>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "#3a3d52", marginBottom: 20 }}>
            Magic in Frieren operates on a foundation of mana — the internal energy that all living beings produce, though in vastly different quantities. Skilled mages distinguish themselves not just by the volume of mana they possess, but by the precision and efficiency with which they shape it. Frieren herself has noted that raw power matters far less than most people assume.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "#3a3d52", marginBottom: 48 }}>
            Detection magic — the ability to read mana signatures — is fundamental to high-level combat. Concealing one&apos;s mana, reading the enemy&apos;s intent through their output, and constructing barriers that resist penetration are all as important as raw offensive capability. The war against the Demon King shaped much of what humans now know about advanced magic.
          </p>
        </div>

        {/* Sections */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px 80px" }}>
          {sections.map((sec) => (
            <section key={sec.title} style={{ marginBottom: 64 }}>
              <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.5rem", color: "#1e2030", marginBottom: 8 }}>{sec.title}</h2>
              <div style={{ width: 40, height: 2, background: sec.accent, marginBottom: 28 }} />
              {sec.spells.map((s, i) => <SpellBlock key={i} spell={s} />)}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
