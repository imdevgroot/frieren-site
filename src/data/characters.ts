export type Character = {
  slug: string;
  name: string;
  nameJp: string;
  role: string;
  accentColor: string;
  image: string;
  metaDescription: string;
  bio: string[];
  abilities: { name: string; nameJp?: string; description: string }[];
  relationships: { name: string; description: string }[];
  quotes: string[];
  keyMoments: { title: string; description: string }[];
};

export const CHARACTERS: Character[] = [
  {
    slug: "frieren",
    name: "Frieren",
    nameJp: "フリーレン",
    role: "Elven Mage · Member of the Hero Party",
    accentColor: "#4aada0",
    image: "/frieren-official.webp",
    metaDescription: "Frieren is an elven mage who journeyed with the Hero Party to defeat the Demon King. Explore her magic, lore, abilities, and character breakdown.",
    bio: [
      "Frieren is an ancient elven mage who spent over a thousand years honing her magical abilities before joining the Hero Party led by Himmel the Hero. Though the journey to defeat the Demon King lasted only ten years — a blink of an eye for an elf — it became the defining chapter of her long life.",
      "After Himmel's death from old age, Frieren confronts a painful truth: she never truly understood the humans she traveled with. She spent decades mastering spells but little time appreciating the people beside her. Determined to understand human emotion and connection before it is too late, she sets out on a new journey northward to Aureole, the Land of Souls, seeking one last meeting with Himmel's spirit.",
      "Beneath her emotionally detached exterior lies extraordinary magical power. Frieren is widely considered one of the greatest mages alive — possibly the greatest — though she habitually conceals the true scale of her ability. She is meticulous, patient, and deeply sentimental in ways she struggles to express, collecting small spells of no practical use simply because they brought joy to someone she cared about.",
      "Her journey north with Fern and Stark is as much an internal reckoning as it is an adventure. Through new companions and old memories, Frieren slowly learns what she missed — the irreplaceable weight of fleeting human time.",
    ],
    abilities: [
      { name: "Zoltraak", nameJp: "ゾルトラーク", description: "Originally a high-tier offensive spell exclusive to demons. Frieren mastered it and helped spread countermeasures, making it a standard human spell. Her version surpasses the original in power and precision." },
      { name: "Particle Manipulation", description: "Frieren can control magical particles at a microscopic level, allowing her to penetrate even the most advanced anti-magic barriers. This ability is considered beyond the reach of virtually all other mages." },
      { name: "Mana Concealment", description: "Frieren maintains near-perfect suppression of her enormous mana output, making her appear to weaker mages as an ordinary or even weak practitioner. This is itself a feat that most cannot achieve." },
      { name: "Barrier Magic", description: "Frieren can erect powerful defensive barriers capable of blocking demon-grade attacks. She can maintain multiple overlapping barriers simultaneously." },
      { name: "Imitation Magic", description: "After observing a spell, Frieren can replicate it with high fidelity — a skill that took her centuries to develop but gives her an enormous repertoire." },
      { name: "Unnamed Flower Spells", description: "A collection of small, joyful spells Frieren gathered over her lifetime — making flowers bloom out of season, changing their color, creating gentle lights. Practically useless but deeply cherished." },
    ],
    relationships: [
      { name: "Himmel", description: "The hero whose death became the turning point of her life. Frieren regrets not knowing him better and carries his memory as both grief and motivation." },
      { name: "Fern", description: "Frieren's apprentice and the closest thing she has to family. Their relationship mirrors Frieren's own bond with her master Flamme — understated but profound." },
      { name: "Stark", description: "A warrior whose straightforward, emotional nature Frieren finds both confusing and quietly endearing." },
      { name: "Flamme", description: "Frieren's original master, who taught her magic and the importance of understanding humans. Flamme's advice echoes throughout Frieren's journey." },
      { name: "Serie", description: "The greatest mage in the world, and Frieren's complicated equal. Serie regards Frieren as the only mage truly worthy of standing beside her." },
    ],
    quotes: [
      "\"I spent so little time with him, yet his memory weighs on me more than any spell I've ever learned.\"",
      "\"I'm just a little bit interested in humans. That's all.\"",
      "\"Magic is about the accumulation of small moments. I've been collecting them for over a thousand years.\"",
      "\"I want to know more. About Himmel. About the people I traveled with. About what I missed.\"",
    ],
    keyMoments: [
      { title: "Witnessing the Meteor Shower", description: "Fifty years after the Demon King's defeat, Frieren reunites with the Hero Party to watch the meteor shower — a promise Himmel made for her. It is one of the last times she sees Himmel alive." },
      { title: "Himmel's Funeral", description: "Confronted with Himmel's death, Frieren weeps — surprising herself. She realizes she does not understand humans, and never did. Her new journey begins here." },
      { title: "The First-Class Mage Exam", description: "Frieren participates in the Northern Magic Association's exam to obtain a first-class mage certification, which is required to enter Aureole. She effortlessly dismantles the exam's expectations." },
      { title: "Confronting Aura the Guillotine", description: "Frieren reveals a fraction of her true power against the demon Aura, demonstrating why she is feared even among demons." },
    ],
  },
  {
    slug: "fern",
    name: "Fern",
    nameJp: "フェルン",
    role: "Human Mage · Frieren's Apprentice",
    accentColor: "#7a6faa",
    image: "/fern-official.webp",
    metaDescription: "Fern is Frieren's apprentice and one of the most gifted young mages alive. Learn about her abilities, backstory, and role in the journey north.",
    bio: [
      "Fern was orphaned by the aftermath of the war against the Demon King's forces. As a child, she was taken in and raised by Heiter — one of the original Hero Party members — who recognized her magical potential and arranged for Frieren to take her as an apprentice before his death.",
      "Under Frieren's tutelage, Fern developed at a staggering pace. Where most mages spend years mastering basic spellcasting efficiency, Fern achieved near-perfect magical economy by early adulthood. She wastes almost no mana on unnecessary movement, making her spells among the most efficient cast by any living mage.",
      "Despite her composed, sometimes stern exterior, Fern has a deeply caring nature — particularly toward Frieren, whom she tends to in the way a daughter might care for an eccentric parent. She is quietly perceptive, noting emotional undercurrents that others miss, and protective of those she has chosen to journey with.",
      "Her rivalry with Stark is a recurring source of warmth in the series. Though she would rarely admit it, Stark's unwavering sincerity has a significant effect on her.",
    ],
    abilities: [
      { name: "Zoltraak", nameJp: "ゾルトラーク", description: "Fern's primary offensive spell. Her casting speed and efficiency with Zoltraak has been described as the fastest and most refined among human mages of her generation." },
      { name: "Rapid-Fire Casting", description: "Fern can fire multiple high-speed offensive spells in rapid succession with minimal delay between shots — a technique that overwhelms opponents with sustained magical pressure." },
      { name: "Magical Efficiency", description: "Fern's defining trait as a mage. Her mana consumption per spell is exceptionally low, allowing her to sustain combat for far longer than mages of equivalent raw power." },
      { name: "Barrier Magic", description: "Fern has learned barrier construction from Frieren, capable of erecting solid defensive layers under pressure." },
      { name: "Detection Magic", description: "Fern can sense and read mana signatures in her environment — a skill Frieren drilled into her from early training." },
    ],
    relationships: [
      { name: "Frieren", description: "Master and the closest thing Fern has to family. Fern is deeply devoted to Frieren while also being utterly exasperated by her eccentricities." },
      { name: "Heiter", description: "The priest who raised Fern after the war. His gentle faith and sacrifice shaped her character more than she lets on." },
      { name: "Stark", description: "A complicated dynamic that sits somewhere between rivalry, mutual respect, and something neither of them has named yet." },
    ],
    quotes: [
      "\"Frieren-sama, you have been asleep for three days. I have already repackaged all the herbs.\"",
      "\"My master has been collecting spells for over a thousand years. I intend to learn every one of them.\"",
      "\"Being efficient is not the same as being cold. I simply do not waste what others gave me.\"",
    ],
    keyMoments: [
      { title: "Passing the First-Class Mage Exam", description: "Fern earns her first-class mage certification — a remarkable achievement for someone her age — demonstrating just how far her training has taken her." },
      { title: "Protecting Frieren from Lügner and Linie", description: "During their encounter with the demons Lügner and Linie, Fern holds her own in solo combat against a demon designed to counter human mages." },
      { title: "Reunion with Heiter's Memory", description: "Scenes of Fern's childhood with Heiter reveal the emotional foundation beneath her composed surface." },
    ],
  },
  {
    slug: "stark",
    name: "Stark",
    nameJp: "シュタルク",
    role: "Human Warrior · Eisen's Apprentice",
    accentColor: "#c05c3a",
    image: "/stark-official.webp",
    metaDescription: "Stark is a powerful young warrior trained by Eisen of the Hero Party. Discover his combat abilities, cowardly heart, and growth throughout the journey.",
    bio: [
      "Stark was raised in a village that was destroyed by a dragon during his childhood. Found by Eisen — the dwarf warrior of the Hero Party — he was taken in and trained for years in remote mountains. Despite his enormous combat ability, Stark carries a persistent self-doubt that leads him to frequently describe himself as a coward.",
      "The contradiction at the heart of Stark is this: he is, by most objective measures, one of the most powerful warriors alive, yet he charges into danger not because he feels brave but because he cannot bear to watch others be harmed. His courage is not the absence of fear — it is action in spite of it.",
      "Stark is emotionally open in a way that is rare among his companions, frequently expressing fear, admiration, and affection that others keep locked away. This earnestness makes him both the emotional anchor of the group and, frequently, the target of Fern's exasperated lectures.",
      "His growth throughout the journey north is one of the series' most satisfying arcs — a young man learning that strength is not the same as certainty, and that being afraid does not mean being unable.",
    ],
    abilities: [
      { name: "Superhuman Strength", description: "Stark possesses physical strength that vastly exceeds ordinary humans — enough to cleave through magically reinforced structures and trade blows with demon-grade opponents." },
      { name: "Explosive Slash", description: "A technique where Stark compresses enormous force into a single strike, releasing it at the moment of impact for devastating area effect. His version of this technique has been noted even by Eisen as exceptional." },
      { name: "Killing Intent", description: "Stark can project an overwhelming killing intent that immobilizes or disorients opponents. It has been compared in effect to the aura of a veteran Demon King's general." },
      { name: "Eisen-style Combat", description: "Trained directly by the Hero Party's dwarf warrior, Stark's combat fundamentals are built on Eisen's teachings — emphasizing overwhelming force, reading opponents, and protecting allies." },
    ],
    relationships: [
      { name: "Eisen", description: "His master and father figure. Stark measures himself against Eisen's legacy and is slowly learning he no longer needs to." },
      { name: "Fern", description: "His complicated traveling companion. Their bickering is the series' best running dynamic — and clearly something more." },
      { name: "Frieren", description: "Stark respects Frieren deeply despite finding her impossible to read. He instinctively trusts her judgment in dangerous situations." },
    ],
    quotes: [
      "\"I'm a coward. I've always been a coward. But I can't just watch.\"",
      "\"Eisen-san never told me I was ready. He just stopped correcting me.\"",
      "\"I don't understand magic. But I understand that Fern works harder than anyone I have ever met.\"",
    ],
    keyMoments: [
      { title: "Defeating the Dragon", description: "Stark faces and defeats a dragon — a feat that solidifies his standing as an exceptional warrior. His childhood fear of dragons makes the victory deeply personal." },
      { title: "Killing Intent Against the Undead Army", description: "Stark unleashes his killing intent in a decisive moment, demonstrating that his power has grown beyond what even he realized." },
      { title: "Reunion with Eisen", description: "A meeting that lets both teacher and student finally measure the distance traveled." },
    ],
  },
  {
    slug: "himmel",
    name: "Himmel",
    nameJp: "ヒンメル",
    role: "Human Hero · Leader of the Hero Party",
    accentColor: "#b8902a",
    image: "/himmel-official.webp",
    metaDescription: "Himmel the Hero led the party that defeated the Demon King. Though dead before the story begins, his memory and values drive everything that follows.",
    bio: [
      "Himmel the Hero is the most important person in a story he does not live to appear in. He led the party that defeated the Demon King fifty years before the series begins, and died of old age having lived a full human life. Yet his presence permeates every episode — through Frieren's grief, through statues in every town, through the way the world was quietly shaped by who he was.",
      "Himmel was defined by a specific kind of goodness: not the grand heroism of battle, but the patient, deliberate kindness of someone who knew that how you treat people in ordinary moments is what they will actually remember. He gave money to those in need, helped strangers without hesitation, and insisted on making promises he knew he might not be alive to keep.",
      "He loved Frieren. He never said so directly — he understood that she would outlive his declaration by centuries, and perhaps felt that burdening her with it would be unkind. But he arranged the meteor shower promise, made sure she would have something to return for, and left her a world full of his statues so she would never feel entirely alone.",
      "The tragedy of Himmel is the tragedy of time — a man who burned brightly in the ten years he had, fully aware that the elf beside him would barely notice those years passing. And yet she noticed more than she realized.",
    ],
    abilities: [
      { name: "Master Swordsmanship", description: "Himmel was considered the greatest swordsman of his era — the blade that could reach what magic could not." },
      { name: "Heroic Charisma", description: "Himmel possessed an extraordinary ability to inspire loyalty, courage, and trust in those around him. The Hero Party followed him not from obligation but from genuine belief." },
      { name: "Tactical Leadership", description: "Across a decade of war against the Demon King's forces, Himmel led his party through impossible odds — coordinating Frieren's magic, Heiter's support, and Eisen's strength into a coherent fighting force." },
    ],
    relationships: [
      { name: "Frieren", description: "The person Himmel understood most fully and was understood by least. He accepted this with grace." },
      { name: "Heiter", description: "His closest friend among the party — the priest who shared his faith in human goodness." },
      { name: "Eisen", description: "His stalwart companion. Their partnership was built on years of battle and the specific trust that only shared danger creates." },
    ],
    quotes: [
      "\"Of course. I'm a hero after all.\"",
      "\"I want you to think of me when you see this sky, even fifty years from now.\"",
      "\"Being a hero doesn't mean being the strongest. It means being the one who doesn't give up.\"",
    ],
    keyMoments: [
      { title: "The Meteor Shower Promise", description: "Himmel promises to show Frieren a once-in-fifty-years meteor shower — a gesture that ensures she will return and reunite with the party one last time before his death." },
      { title: "Defeat of the Demon King", description: "The culmination of a decade-long journey. Himmel's sword struck the final blow, but the victory belonged to the whole party." },
      { title: "His Funeral", description: "Himmel dies peacefully of old age. Frieren weeps — surprising herself — and the series truly begins." },
    ],
  },
  {
    slug: "heiter",
    name: "Heiter",
    nameJp: "ハイター",
    role: "Human Priest · Member of the Hero Party",
    accentColor: "#35877b",
    image: "/heiter-official.webp",
    metaDescription: "Heiter was the priest of the Hero Party and Fern's adoptive father. Discover his role in the defeat of the Demon King and his lasting legacy.",
    bio: [
      "Heiter served as the priest and support mage of Himmel's Hero Party, providing healing, barrier magic, and spiritual guidance throughout the decade-long campaign against the Demon King. Gentle in manner but sharply perceptive, Heiter was the quiet moral core of the party — the one who remembered that people had lives worth returning to.",
      "After the defeat of the Demon King, Heiter settled into a life of quiet service. In his later years he discovered Fern — a child orphaned by the war — and raised her with patience and genuine love. Knowing his health was failing, he arranged for Frieren to take Fern as an apprentice, ensuring she would have a future beyond his death.",
      "Heiter's relationship with Frieren is one of the series' most touching secondary threads. He understood her better than she understood herself, and his gentle humor and honesty cut through her detachment in ways no one else managed. He asked her to take care of Fern not as a duty, but as a request between old friends.",
      "He died peacefully, having lived a full and meaningful life — a smaller story than Himmel's, and no less complete.",
    ],
    abilities: [
      { name: "Healing Magic", description: "Heiter's primary specialty. His healing spells were considered among the finest of his era, capable of treating wounds that most clerics could not address." },
      { name: "Barrier Magic", description: "Heiter maintained protective barriers for the Hero Party throughout their campaign, shielding his companions from demon attacks." },
      { name: "Detection and Divination", description: "Priestly magic allowed Heiter to sense undead, demonic presences, and magical traps — invaluable during the war." },
    ],
    relationships: [
      { name: "Himmel", description: "His closest companion and the hero he believed in most completely." },
      { name: "Fern", description: "His adopted daughter. His greatest legacy and the decision he was most proud of." },
      { name: "Frieren", description: "An old friend whose emotional walls he never stopped gently testing." },
    ],
    quotes: [
      "\"I know you do not fully understand humans, Frieren. But I think you understand them better than you admit.\"",
      "\"She has potential. More than that — she has the will to use it. Please, take care of her.\"",
      "\"A priest's job is not to have faith for others. It is to make space for their own.\"",
    ],
    keyMoments: [
      { title: "Taking in Fern", description: "Heiter finds Fern as a child and chooses to raise her — an act of love that sets the entire story in motion." },
      { title: "Asking Frieren to Train Fern", description: "Knowing he is dying, Heiter asks Frieren to take Fern as her apprentice. The request is simple; the trust behind it is enormous." },
      { title: "His Death", description: "Heiter dies quietly, surrounded by people he cared for, his affairs in order. Fern holds her composure until she can't." },
    ],
  },
  {
    slug: "eisen",
    name: "Eisen",
    nameJp: "アイゼン",
    role: "Dwarf Warrior · Member of the Hero Party",
    accentColor: "#7a6055",
    image: "/eisen-official.webp",
    metaDescription: "Eisen is the dwarf warrior of the Hero Party and Stark's master. A man of few words and immense strength, his legacy lives through his apprentice.",
    bio: [
      "Eisen is the dwarf warrior who served alongside Himmel, Heiter, and Frieren in the defeat of the Demon King. As a dwarf, his lifespan exceeds a human's but falls short of an elf's — he has watched Himmel and Heiter age and die, and now occupies a solitary middle ground between Frieren's ancient perspective and the short lives of the humans around him.",
      "After the war, Eisen retreated to remote mountains where he trained Stark — a boy he found traumatized by the destruction of his village. Eisen's teaching style was largely non-verbal: he expected his students to absorb lessons through repetition and observation rather than explanation. Whether this was wisdom or stubbornness is left deliberately unclear.",
      "Eisen is a man of few words and enormous presence. In the company of the Hero Party he was the silent counterweight to Himmel's charisma and Heiter's warmth — reliable, immovable, and deeply loyal in a way that required no declaration.",
      "By the time of the current story, Eisen's body has aged beyond its peak fighting ability. He recognizes this without complaint. His legacy is not in his own continued strength but in Stark, who has already surpassed him in raw ability and is only beginning to understand what that means.",
    ],
    abilities: [
      { name: "Superhuman Dwarven Strength", description: "Dwarves possess naturally greater physical strength than humans. Eisen's decades of combat training elevated this further — his strikes during the war against the Demon King's forces were described as landslide-level." },
      { name: "Eisen-style Combat", description: "A fighting style built on overwhelming force, endurance, and protecting allies. Passed directly to Stark." },
      { name: "Monster Slaying", description: "Eisen built a reputation as one of the most effective monster hunters of his era — a skill set distinct from war combat that he refined over centuries." },
    ],
    relationships: [
      { name: "Stark", description: "His apprentice and the person who will carry his style forward. Eisen sees in Stark what he once was and something more." },
      { name: "Himmel", description: "His closest companion in arms. The absence of Himmel — and Heiter — is something Eisen carries quietly." },
      { name: "Frieren", description: "Two long-lived beings who share a particular kind of understanding — the weight of outlasting people you cared about." },
    ],
    quotes: [
      "\"I didn't teach you everything I know. I taught you everything you were ready to learn.\"",
      "\"Strength isn't something you possess. It's something you demonstrate, one choice at a time.\"",
      "\"The boy grew up. That was always the plan.\"",
    ],
    keyMoments: [
      { title: "Finding Stark", description: "Eisen discovers a traumatized child in the ruins of a village destroyed by a dragon and chooses to give him a path forward." },
      { title: "Reunion with Frieren's Party", description: "Eisen meets Frieren, Fern, and Stark again — a moment that lets him measure how far his apprentice has come." },
      { title: "Acknowledging Stark's Growth", description: "The moment Eisen stops correcting Stark is, in its own quiet way, the greatest praise he is capable of offering." },
    ],
  },
  {
    slug: "ubel",
    name: "Ubel",
    nameJp: "ユーベル",
    role: "First-Class Mage Candidate · Gifted Combat Mage",
    accentColor: "#a06080",
    image: "/ubel-official.webp",
    metaDescription: "Ubel is a prodigiously gifted combat mage with a uniquely dangerous magical ability. Learn about her powers, personality, and role in the First-Class Mage Exam.",
    bio: [
      "Ubel is one of the most naturally gifted mages of her generation — and one of the most unsettling. She possesses a magical ability that cuts through nearly any defense, not through superior raw power, but through a fundamental difference in how she conceptualizes destruction. Where other mages imagine spells as forces to be aimed, Ubel imagines cutting the thing apart. The result is magic that severs what most spells cannot.",
      "She participated in the Northern Magic Association's First-Class Mage Examination alongside Fern, Lawine, Kanne, Land, and others — a selection of the most talented young mages in the region. Among a cohort of exceptional candidates, Ubel stands out not just for ability but for temperament: she approaches combat with a directness that borders on frightening.",
      "Ubel has almost certainly killed people outside of sanctioned combat, though she maintains plausible deniability with practiced ease. She is not malicious in the way demons are — she simply operates with a self-directedness that places her outside conventional moral frameworks. She does what she judges necessary, and she judges by her own standards.",
      "Despite this, she is capable of genuine camaraderie. Her partnership with Land during the exam revealed a capacity for trust and cooperation that she extends selectively but sincerely when extended.",
    ],
    abilities: [
      { name: "Concept-based Cutting Magic", description: "Ubel's signature and most feared ability. She can cut through magical barriers, physical materials, and defensive constructs by imagining them as things to be severed — bypassing the need to overpower defenses with raw mana output." },
      { name: "Imitation Magic", description: "Ubel demonstrated exceptional ability to replicate spells she has observed. Her imitation speed and accuracy rank among the best in her generation." },
      { name: "Combat Instinct", description: "Beyond specific techniques, Ubel possesses extraordinary combat intuition — she reads opponents quickly and adapts with unsettling efficiency." },
    ],
    relationships: [
      { name: "Land", description: "Her exam partner. An unlikely but effective pairing. Land's caution balances Ubel's directness in ways neither entirely expected." },
      { name: "Fern", description: "A mutual recognition between two exceptionally skilled mages. Fern is wary of Ubel. Ubel finds Fern interesting." },
      { name: "Frieren", description: "Ubel immediately clocked Frieren's true power during the exam and expressed something close to reverence — one of the few reactions she could not entirely suppress." },
    ],
    quotes: [
      "\"I just imagine that it's already cut. Everything else follows.\"",
      "\"You think too much about how spells are supposed to work. I think about results.\"",
      "\"She's hiding something enormous. I could feel it the moment I looked at her.\"",
    ],
    keyMoments: [
      { title: "Cutting Through Sense's Barrier", description: "During the exam, Ubel's cutting magic penetrates a defensive barrier that should have been impenetrable — demonstrating the fundamental uniqueness of her ability." },
      { title: "Partnering with Land", description: "Despite her independent nature, Ubel forms a genuine partnership with Land that proves decisive in the exam's most dangerous moments." },
      { title: "Observing Frieren's Power", description: "The moment Ubel recognizes the scale of what Frieren is concealing — one of the exam's most quietly striking scenes." },
    ],
  },
];

export function getCharacter(slug: string): Character | undefined {
  return CHARACTERS.find((c) => c.slug === slug);
}
