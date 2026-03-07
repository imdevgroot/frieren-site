import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lore & World — Frieren: Beyond Journey's End",
  description: "Deep-dive lore articles for Frieren: Beyond Journey's End. How magic works, the Demon War explained, the First-Class Mage Exam, and Frieren's true power.",
  openGraph: { title: "Lore & World — Frieren Fan Site", description: "Deep-dive lore articles covering the magic system, demon war, and hidden depths of the series." },
};

const articles = [
  {
    id: "magic-system",
    title: "How Magic Works in Frieren",
    accent: "#4aada0",
    lead: "Magic in this world is fundamentally about mana — and the difference between using it and understanding it.",
    body: [
      "Every living being produces mana — a form of internal magical energy. Humans, demons, and spirits all generate it, though in vastly different quantities and qualities. The quality of a mage's mana is as individual as a fingerprint: experienced practitioners can identify specific mages by sensing the character of their output alone.",
      "The foundational skill that separates serious mages from novices is detection magic. Before a mage can defend, attack, or support, they must be able to read their environment — sensing hidden enemies, identifying trap-markers, recognizing the approach of a threat before it arrives. Frieren spent years drilling this into Fern before allowing her to focus on offensive techniques.",
      "Mana concealment is the counterpart to detection — and significantly harder. To conceal one's mana signature requires conscious control of output at every moment, even while casting. Most mages cannot suppress their signature at all. Frieren's near-perfect concealment is one of her most remarkable achievements, separate entirely from her raw power.",
      "Barriers are the primary defensive form. A mage shapes their mana into a layered protective field that absorbs incoming magical attacks. Quality scales with both the volume of mana invested and the precision of its structure. Frieren can maintain multiple overlapping barrier layers simultaneously — a feat of both power and control.",
      "The most counterintuitive lesson Frieren teaches is about efficiency. Fern's defining trait as a mage is not raw strength but exceptional mana economy: she wastes almost nothing on unnecessary movement in her spells. This means she can sustain combat far longer than mages with equivalent raw output. As Frieren explains it: a shallow well filled efficiently outlasts a deeper well used carelessly.",
      "The magic system's most fascinating element is how personal it is. Ubel's cutting magic works not because she found a stronger force than barriers, but because she conceptualized destruction differently — imagining cutting rather than striking. Magic appears to be responsive to the mage's internal model of what they are doing. This implies the upper limit on magical ability is not mana volume but imagination.",
    ],
  },
  {
    id: "demon-war",
    title: "The Demon War Explained",
    accent: "#c05c3a",
    lead: "The war against the Demon King lasted a generation. Its effects shaped the world Frieren now travels through — and the magic it produced changed human civilization forever.",
    body: [
      "Demons in Frieren are not monsters driven by instinct — they are intelligent, long-lived beings who experience the world as fundamentally adversarial to humans. Their relationship to human life is not cruel in the way a human understands cruelty: it is simply indifference dressed in strategy. They use human language and concepts as tools for manipulation rather than communication.",
      "The Demon King unified these beings into a coordinated force that made systematic war on human civilization for generations before the Hero Party's successful campaign. The scale of the conflict reshaped the political map — the empty ruins and abandoned fortifications that Frieren's party passes through are the war's most visible legacy.",
      "The key strategic victory that enabled humans to survive long enough to mount a challenge was Flamme's development of mana concealment. By teaching human mages to hide their signatures, Flamme denied demons the ability to hunt mages before they could act. This single technique changed the military balance over decades.",
      "Zoltraak was originally a demon-exclusive spell — a high-tier offensive technique that humans had no counter to. Frieren's analysis and deconstruction of the spell, and her subsequent distribution of its structure and countermeasures to human mages, was one of the war's critical turning points. A spell that once reliably defeated human defenders became manageable, even standard.",
      "The Hero Party's final campaign to the Demon King's castle was not a triumphant march. It was a sustained assault through increasingly dangerous demon territory, costing years and near-misses that the series only shows in fragments. Himmel's charisma, Heiter's support, Eisen's strength, and Frieren's magic were individually necessary — and collectively barely sufficient.",
      "The aftermath of the war is in some ways the series' true subject. Frieren travels through a world remade by a conflict she helped conclude — and encounters the human cost of a war she was present for but never fully processed. The ruins she passes, the gratitude she receives in towns that barely remember what they were saved from: all of it is the war's long shadow.",
    ],
  },
  {
    id: "mage-exam",
    title: "The First-Class Mage Exam",
    accent: "#7a6faa",
    lead: "The Northern Magic Association's first-class certification is not just an achievement — it is a requirement for accessing Aureole. Understanding the exam means understanding what the story demands of its characters.",
    body: [
      "The Northern Magic Association governs magical practice in the northern regions and maintains the certification system that distinguishes mages by class. First-class certification represents the top tier of recognized ability — a distinction that only a small number of active mages hold at any time.",
      "The exam itself is not standardized. It changes based on the judgment of the exam committee, which designates a proctor whose job is to evaluate candidates against a standard that cannot be gamed by memorizing rules. The design philosophy is explicitly to test genuine ability rather than exam-specific preparation.",
      "The exam Frieren and Fern participate in begins with a survival test: reach the designated endpoint in three days, through a forest filled with traps and other candidates who may obstruct your path. The test evaluates resourcefulness, magical control under pressure, and judgment — knowing when to fight, when to evade, and when to cooperate.",
      "The second test is direct combat against the proctor, Sense. Candidates must pierce her barrier — a task that sounds simple and proves nearly impossible for most participants. Sense's barrier is calibrated to the upper edge of what she judges first-class capability to be. Candidates who cannot breach it are not first-class mages, by her assessment, regardless of their other accomplishments.",
      "The exam's most revealing aspect is how it distinguishes the candidates from each other. Lawine and Kanne succeed through complementary elemental synergy. Ubel succeeds through conceptual originality. Fern succeeds through efficiency and precision that belies her age. Each success is distinctly personal — which is the point.",
      "First-class certification matters to the story because entry to Aureole requires it. The reason is practical: the magic of Aureole, the Land of Souls, operates at a level that non-certified mages cannot safely navigate. The certification is not a bureaucratic gatekeeping mechanism — it is a genuine capability threshold for what lies ahead.",
    ],
  },
  {
    id: "frieren-power",
    title: "Frieren's True Power",
    accent: "#b8902a",
    lead: "Frieren has spent a thousand years hiding what she is actually capable of. Why — and what does it mean when she finally stops?",
    body: [
      "The single most important thing to understand about Frieren's power is that almost no one in the series has seen it. She maintains near-perfect mana concealment at all times, presenting as an ordinary or even mediocre mage to anyone who isn't actively looking for the suppression itself. This is not deception so much as habit — a caution she developed so deeply it became reflex.",
      "Her master Flamme, who was herself considered the greatest mage of her era, identified in the young Frieren something she had never encountered: a mana volume so large that concealing it represented a more impressive technical feat than most mages' entire output. Flamme's advice was to keep hiding. The world was not ready for what Frieren was.",
      "The scale of the gap between Frieren's apparent and actual power becomes clear in the confrontation with Aura the Guillotine. Aura's ability works by dominance — overwhelming a target's mana with one's own. She initiates this against Frieren and encounters, for the first time in her long existence, a mana signature so large that it simply cannot be dominated. The technique does not fail against Frieren — it becomes physically impossible to execute.",
      "During the First-Class Mage Exam, Frieren participates as an applicant rather than as what she actually is. Candidates who can read mana with any sensitivity register something anomalous almost immediately. Ubel, in particular, identifies that Frieren is concealing something of an order of magnitude she has not previously encountered. Her reaction — a rare, unguarded moment of something close to awe — is one of the exam arc's most telling details.",
      "What makes Frieren's power interesting is that it does not resolve the series' central questions. She could, presumably, eliminate most threats she encounters without difficulty. She does not, partly from caution and partly because power was never the point. The journey north is not about surviving danger — Frieren has survived a thousand years. It is about finally paying attention to the people beside her while she still can.",
      "Serie is described as the greatest mage alive — and she regards Frieren as an equal. This is a statement that lands differently once you understand what Serie represents: a mage whose abilities have been unquestioned for centuries, who grants wishes to any mage who can copy one of her spells (none have succeeded). Serie's recognition of Frieren is not generosity. It is assessment.",
    ],
  },
];

export default function LorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", name: "Lore — Frieren: Beyond Journey's End", url: "https://frieren-site-theta.vercel.app/lore" }) }} />
      <div style={{ background: "#f8f4ef", minHeight: "100vh", fontFamily: "var(--font-lato, sans-serif)" }}>

        <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(248,244,239,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 13, letterSpacing: "0.3em", color: "#1e2030", textDecoration: "none" }}>FRIEREN</Link>
          <div style={{ display: "flex", gap: 28 }}>
            {[["Characters", "/characters"], ["Magic", "/magic"], ["Episodes", "/episodes"], ["Lore", "/lore"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: href === "/lore" ? "#4aada0" : "#7a7590", textDecoration: "none", fontWeight: 600 }}>{label}</Link>
            ))}
          </div>
        </nav>

        <div style={{ borderBottom: "3px solid #4aada0", padding: "60px 32px 48px", background: "linear-gradient(135deg, #4aada008 0%, transparent 60%)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#4aada0", marginBottom: 12, fontWeight: 700 }}>World Building</p>
            <h1 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1e2030", marginBottom: 16 }}>Lore</h1>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#7a7590", maxWidth: 600 }}>Deep-dive articles on the magic system, the Demon War, the First-Class Mage Exam, and the question at the heart of the series: what is Frieren actually capable of?</p>
          </div>
        </div>

        {/* Article index */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 32px 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 64 }}>
          {articles.map((a) => (
            <a key={a.id} href={`#${a.id}`} style={{ padding: "20px 24px", border: `1px solid ${a.accent}30`, borderRadius: 4, textDecoration: "none", borderLeft: `3px solid ${a.accent}` }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#1e2030", marginBottom: 6, fontFamily: "var(--font-cinzel, serif)" }}>{a.title}</p>
              <p style={{ fontSize: 12, color: "#7a7590", lineHeight: 1.5 }}>{a.lead.slice(0, 80)}...</p>
            </a>
          ))}
        </div>

        {/* Articles */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px 80px" }}>
          {articles.map((article) => (
            <article key={article.id} id={article.id} style={{ marginBottom: 80, paddingTop: 24, scrollMarginTop: 80 }}>
              <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#1e2030", marginBottom: 8 }}>{article.title}</h2>
              <div style={{ width: 40, height: 2, background: article.accent, marginBottom: 20 }} />
              <p style={{ fontSize: 17, lineHeight: 1.8, color: article.accent, marginBottom: 28, fontStyle: "italic" }}>{article.lead}</p>
              {article.body.map((para, i) => (
                <p key={i} style={{ fontSize: 16, lineHeight: 1.9, color: "#3a3d52", marginBottom: 22 }}>{para}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
