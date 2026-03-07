import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Episode Guide — Frieren: Beyond Journey's End",
  description: "Complete episode guide for Frieren: Beyond Journey's End Season 1. All 28 episodes with summaries, key moments, and arc breakdowns.",
  openGraph: { title: "Episode Guide — Frieren: Beyond Journey's End", description: "All 28 Season 1 episodes with summaries and key moments." },
};

type Episode = { num: number; title: string; titleJp?: string; summary: string; keyMoment: string };
type Arc = { name: string; episodes: Episode[]; accent: string; description: string };

const ARCS: Arc[] = [
  {
    name: "The Journey's Beginning",
    accent: "#b8902a",
    description: "The arc that recontextualizes the entire story. We meet Frieren not at the start of an adventure, but at its end — and then we watch her begin to understand what she missed.",
    episodes: [
      { num: 1, title: "The Hero's Party", titleJp: "勇者一行", summary: "The Hero Party returns victorious to the royal capital after defeating the Demon King. Fifty years later, Frieren reunites with Himmel and the party to watch the meteor shower — a once-in-fifty-years event Himmel promised her long ago. When Himmel dies of old age shortly after, Frieren confronts her grief and her ignorance of the humans she traveled with.", keyMoment: "Himmel's death and Frieren's unexpected tears — the moment the true story begins." },
      { num: 2, title: "Those Who Persist", titleJp: "残されし者たち", summary: "Frieren visits Heiter, now aged and unwell, and meets Fern — the orphaned girl he has been raising. Recognizing Fern's potential and his own failing health, Heiter asks Frieren to take her as an apprentice. Frieren accepts.", keyMoment: "Heiter's quiet request and what it reveals about his faith in Frieren." },
      { num: 3, title: "The Value of a Life", titleJp: "命の価値", summary: "Frieren begins teaching Fern in earnest. We see the early stages of their dynamic — Frieren's eccentric methods, Fern's disciplined dedication, and the first hints of how much she has already internalized from Frieren's model.", keyMoment: "Fern's commitment to mastering efficiency as a form of respect." },
    ],
  },
  {
    name: "Frieren's Journey North",
    accent: "#4aada0",
    description: "Frieren, Fern, and Stark set out north toward Aureole. The road is filled with encounters — old promises, demon threats, towns shaped by the Hero Party's passage — that test and deepen their bonds.",
    episodes: [
      { num: 4, title: "The Mage of the Village of Tombs", titleJp: "墓守の魔法使い", summary: "The party arrives at a village where a mage has spent decades trying to fulfill a promise made to the Hero Party. Frieren recognizes the dedication and the sadness threaded through it.", keyMoment: "Frieren's quiet recognition of a kindred devotion to promises." },
      { num: 5, title: "The Serenity of Still Water", titleJp: "静水の魔法使い", summary: "The party encounters a water mage and navigates a challenge that requires Fern to demonstrate her growing abilities independently. Frieren observes with characteristic detachment that conceals genuine pride.", keyMoment: "Fern holding her own without Frieren's direct intervention." },
      { num: 6, title: "In the Winds of the Beyond", titleJp: "彼方の風の中", summary: "A battle against dungeon-level threats tests Stark's courage and forces him to act despite fear. Fern and Stark's dynamic begins taking its distinctive form.", keyMoment: "Stark's first significant act of courage on this journey — not bravery, but choice." },
      { num: 7, title: "The Noble Demon", titleJp: "高貴なる悪魔", summary: "The party encounters Aura the Guillotine, one of the Demon King's former generals, still active and dangerous. What appears to be a confrontation becomes a masterclass in the gap between apparent and actual power.", keyMoment: "Frieren drops her concealment. Aura has never encountered power at this scale." },
      { num: 8, title: "The Ruler of the Highlands", titleJp: "高原の支配者", summary: "Following the encounter with Aura, the party deals with the consequences — practical and emotional. The episode deepens our understanding of how demons think and why Frieren's approach to them differs from most humans.", keyMoment: "Frieren's explanation of demonic psychology and why she doesn't mourn them." },
      { num: 9, title: "The Day We Waved Goodbye", titleJp: "お別れの日", summary: "A quieter, reflective episode. Frieren encounters a remnant of the Hero Party's past — a person or place shaped by Himmel's passage — and sits with what was and what she missed.", keyMoment: "A memory of Himmel that illuminates his relationship with Frieren through implication rather than statement." },
      { num: 10, title: "The Long Goodbye", titleJp: "長い別れ", summary: "The party navigates a separation — temporary but emotionally significant. Each character is tested by the absence of the others, revealing how interdependent they have become without fully acknowledging it.", keyMoment: "Stark's admission that he is not as self-sufficient as he pretends." },
    ],
  },
  {
    name: "The Northern Magic Association Exam",
    accent: "#7a6faa",
    description: "To enter Aureole, Frieren needs a first-class mage certification from the Northern Magic Association. The exam draws the most talented young mages in the region — and proves far more dangerous than anyone anticipated.",
    episodes: [
      { num: 11, title: "The First Test", titleJp: "一次試験", summary: "Frieren, Fern, and the other candidates arrive at the exam site. The first test is announced: survive for three days in a forest filled with traps and other candidates, and reach the goal. Frieren's presence immediately changes the atmosphere — candidates recognize they are in the presence of something different.", keyMoment: "The first meeting between Fern and Ubel — mutual assessment between two exceptional mages." },
      { num: 12, title: "Examining the Examiner", titleJp: "試験官を試す", summary: "The exam proctor Sense reveals more about the structure of the test. Candidates begin forming alliances — some strategic, some genuine. Land and Ubel's partnership begins.", keyMoment: "Ubel's demonstration of her conceptual cutting magic — the first time we understand what makes her unique." },
      { num: 13, title: "Lawine and Kanne", titleJp: "ラヴィーネとカンネ", summary: "The pairing of ice mage Lawine and water mage Kanne is explored — their complementary abilities, their competitive relationship, and the specific challenge they face during the exam.", keyMoment: "The tactical combination of their magic against an opponent who should have been beyond them." },
      { num: 14, title: "The Second Test", titleJp: "二次試験", summary: "Candidates who passed the first test advance to the second: face the exam proctor Sense in one-on-one combat and pierce her barrier. The test is not designed to be passed easily.", keyMoment: "Ubel's barrier penetration — and Sense's reaction to it." },
      { num: 15, title: "To the Northlands", titleJp: "北の大地へ", summary: "The exam concludes. Results are announced. The successful candidates receive their first-class certifications. The weight of what lies ahead — the road to Aureole — becomes real.", keyMoment: "Fern's certification — remarkable given her age, and meaningful given the cost of earning it." },
      { num: 16, title: "Frieren's Resolve", titleJp: "フリーレンの決意", summary: "With certification obtained, the journey north resumes. Frieren reflects on the exam — on the candidates she met, on the gap between their lifespans and her own, and on what awaits at the end of the road.", keyMoment: "Frieren's quiet internal commitment: not just to reach Aureole, but to actually be present when she does." },
    ],
  },
  {
    name: "The Road to Aureole",
    accent: "#35877b",
    description: "The final stretch north. Old enemies, old promises, and the approaching end of a journey that has been, in ways neither Frieren nor her companions fully understand yet, the most important decade of their lives.",
    episodes: [
      { num: 17, title: "The Reunification of the Northern Plateau", titleJp: "北部高原の再統合", summary: "Political tensions in the north become relevant to the party's passage. Frieren navigates human complications with her characteristic mix of detachment and precision.", keyMoment: "Frieren's matter-of-fact resolution of a situation humans have been agonizing over." },
      { num: 18, title: "The Dungeon of Sorrows", titleJp: "悲しみのダンジョン", summary: "A dungeon encounter with layered traps and demonic presence tests all three party members. Stark's growth as a warrior is measurable and real.", keyMoment: "Stark comparing himself to his younger self — and finding the distance is greater than he knew." },
      { num: 19, title: "The Demon City", titleJp: "魔族の都市", summary: "The party passes through a city with demonic history. Frieren provides context that reframes what they are seeing — the long view that only a thousand-year lifespan enables.", keyMoment: "Fern asking Frieren what the city looked like during the war. Frieren's answer is not what anyone expects." },
      { num: 20, title: "Lügner and Linie", titleJp: "リュグナーとリニエ", summary: "The party encounters two demons — Lügner, a mage who deceives detection magic, and Linie, who specializes in physical combat. The encounter separates the party and forces each member into solo combat.", keyMoment: "Fern holding her ground alone against Linie — demonstrating everything her training has built." },
      { num: 21, title: "The Specter of the War", titleJp: "戦争の亡霊", summary: "The aftermath of the demon encounter, and a deeper excavation of what the war against the Demon King actually looked like from the inside. Frieren's role in it was larger than most people realize.", keyMoment: "Frieren describing her own actions during the war — quietly, without drama, which makes it more affecting." },
      { num: 22, title: "The Forts of Weise", titleJp: "ワイズの砦", summary: "The party reaches a fortified waypoint on the road north. The encounter here reshapes their understanding of what still waits between them and Aureole.", keyMoment: "The first clear sight of what lies ahead — and what it will cost." },
      { num: 23, title: "The Knights of Dunwas", titleJp: "ドゥンヴァスの騎士たち", summary: "A political complication involving a knightly order tied to the region's history. Frieren's knowledge of the area's past makes her an unexpected expert on current tensions.", keyMoment: "Stark's spontaneous, unglamorous act of protection for someone he has just met." },
      { num: 24, title: "The Final Gate", titleJp: "最後の門", summary: "The last obstacle before Aureole resolves. Each party member faces something specifically chosen for them — the final exam is not the Magic Association's. It is the road itself.", keyMoment: "All three party members clearing their final obstacles — each in a way that reflects who they have become." },
      { num: 25, title: "The Land of Souls", titleJp: "魂の地", summary: "Aureole. The series reaches its destination. Frieren stands at the place the entire journey was leading to — and what she finds there is not what she expected, and exactly what she needed.", keyMoment: "Frieren's reunion with Himmel's spirit. The series' emotional culmination." },
      { num: 26, title: "Frieren at Journey's End", titleJp: "フリーレン、旅の終わり", summary: "The aftermath of Aureole. The journey has ended — and something in Frieren has changed in a way she could not have predicted at the beginning. She does not leave unchanged.", keyMoment: "Frieren looking at Fern and Stark and understanding, perhaps for the first time, what the word companionship means from the inside." },
      { num: 27, title: "The Next Journey", titleJp: "次の旅へ", summary: "The party begins the long journey back south, changed by what they have seen. New plans are made. New promises are exchanged. Frieren is already thinking about the next collection of useless spells.", keyMoment: "A small, unimportant spell. A large, quiet happiness." },
      { num: 28, title: "An Eternity of Farewells", titleJp: "永遠の別れ", summary: "The season finale. Time moves — the way it always does, for Frieren, both too slow and too fast. We see the full shape of what has been built: a friendship that will end before Frieren is old.", keyMoment: "The final scene. Frieren, alone with time, and not entirely lonely." },
    ],
  },
];

export default function EpisodesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "TVSeries", name: "Frieren: Beyond Journey's End", numberOfEpisodes: 28, numberOfSeasons: 1, url: "https://frieren-site-theta.vercel.app/episodes" }) }} />
      <div style={{ background: "#f8f4ef", minHeight: "100vh", fontFamily: "var(--font-lato, sans-serif)" }}>

        <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(248,244,239,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 13, letterSpacing: "0.3em", color: "#1e2030", textDecoration: "none" }}>FRIEREN</Link>
          <div style={{ display: "flex", gap: 28 }}>
            {[["Characters", "/characters"], ["Magic", "/magic"], ["Episodes", "/episodes"], ["Lore", "/lore"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: href === "/episodes" ? "#4aada0" : "#7a7590", textDecoration: "none", fontWeight: 600 }}>{label}</Link>
            ))}
          </div>
        </nav>

        <div style={{ borderBottom: "3px solid #4aada0", padding: "60px 32px 48px", background: "linear-gradient(135deg, #4aada008 0%, transparent 60%)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#4aada0", marginBottom: 12, fontWeight: 700 }}>Season 1 · 28 Episodes</p>
            <h1 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1e2030", marginBottom: 16 }}>Episode Guide</h1>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#7a7590", maxWidth: 600 }}>All 28 episodes of Season 1, organized by arc with summaries and key moments.</p>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px 80px" }}>
          {ARCS.map((arc) => (
            <section key={arc.name} style={{ marginBottom: 72 }}>
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: "1.5rem", color: "#1e2030", marginBottom: 8 }}>{arc.name}</h2>
                <div style={{ width: 40, height: 2, background: arc.accent, marginBottom: 16 }} />
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "#7a7590" }}>{arc.description}</p>
              </div>
              {arc.episodes.map((ep) => (
                <div key={ep.num} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 24, padding: "24px 0", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                  <div style={{ flexShrink: 0 }}>
                    <span style={{ display: "block", fontFamily: "var(--font-cinzel, serif)", fontWeight: 900, fontSize: 22, color: arc.accent, lineHeight: 1 }}>{ep.num}</span>
                    <span style={{ fontSize: 10, color: "#7a7590", letterSpacing: "0.1em" }}>EP</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-cinzel, serif)", fontWeight: 700, fontSize: 16, color: "#1e2030", marginBottom: 4 }}>{ep.title}</h3>
                    {ep.titleJp && <p style={{ fontSize: 12, color: arc.accent, marginBottom: 10 }}>{ep.titleJp}</p>}
                    <p style={{ fontSize: 15, lineHeight: 1.8, color: "#3a3d52", marginBottom: 10 }}>{ep.summary}</p>
                    <p style={{ fontSize: 13, color: "#7a7590", fontStyle: "italic", borderLeft: `2px solid ${arc.accent}60`, paddingLeft: 12 }}>
                      <strong style={{ fontStyle: "normal", color: "#7a7590" }}>Key moment: </strong>{ep.keyMoment}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
