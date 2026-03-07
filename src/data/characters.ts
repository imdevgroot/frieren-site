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

export const EXTENDED_CHARACTERS = [
  {
    slug: "serie",
    name: "Serie",
    nameJp: "ゼーリエ",
    role: "Supreme Mage · Greatest Living Mage",
    accentColor: "#8a70c0",
    metaDescription: "Serie is the greatest living mage and one of the most powerful elves alive. She grants wishes to any mage who can copy her spells — none have succeeded.",
    bio: [
      "Serie is the supreme mage of the Continental Magic Association and, by most accounts, the most powerful mage alive. An ancient elf like Frieren, she has spent centuries accumulating knowledge and refining her craft beyond what most mages can comprehend.",
      "Her policy is simple and devastating: any mage who can successfully copy one of her spells will receive a single wish granted. In living memory, no one has succeeded. This is not a formality — it is a genuine invitation she has no expectation of ever needing to honor.",
      "Serie's attitude toward most mages is a calibrated indifference that borders on contempt. She recognizes effort and talent intellectually but does not invest in either. There is only one mage she regards as a peer: Frieren. This recognition, coming from Serie, carries extraordinary weight.",
    ],
    abilities: [
      { name: "Spell Copying", description: "Serie's spells cannot be replicated by any mage currently alive. The specifics of her arsenal are never fully enumerated — which is itself a statement." },
      { name: "Wish Granting", description: "The nature and mechanism of Serie's wish-granting ability is left undefined. That she can do it is treated as fact." },
    ],
    relationships: [
      { name: "Frieren", description: "The only mage Serie considers her equal. She acknowledges this without warmth, which from Serie constitutes profound respect." },
      { name: "Flamme", description: "Flamme was Serie's apprentice — which means the greatest mage of Flamme's era was trained by Serie. The chain of lineage matters." },
    ],
    quotes: [
      "\"You are the first mage in a very long time who has made me feel anything resembling interest.\"",
      "\"A wish for any mage who can copy my magic. The offer stands. It has always stood.\"",
    ],
    keyMoments: [
      { title: "The Wish Offer", description: "Serie introduces herself to exam candidates by explaining the standing offer — and making clear, without saying so, that she does not expect to be taken up on it." },
      { title: "Acknowledging Frieren", description: "Serie's quiet recognition of Frieren's scale — a scene that recontextualizes how extraordinary Frieren actually is." },
    ],
  },
  {
    slug: "denken",
    name: "Denken",
    nameJp: "デンケン",
    role: "First-Class Mage · Northern Magic Association",
    accentColor: "#6070a0",
    metaDescription: "Denken is an elderly first-class mage with decades of experience and formidable combat ability. He participates in the First-Class Mage Exam alongside Frieren.",
    bio: [
      "Denken is one of the Northern Magic Association's sitting first-class mages — an elderly man with decades of accumulated experience and a combat record that most younger mages cannot match. He is an exam participant in the same cohort as Frieren, which initially seems absurd until his abilities become apparent.",
      "His specialty is life magic — an area of practice that directly counteracts the decay of the body, granting him a physical capability well beyond what his age would suggest. He moves like a man in his prime because, in the ways that matter for combat, he is.",
      "Denken has a mentor's bearing — deliberate, measured, and possessed of the specific patience that only comes from having been in enough dangerous situations to know which ones require urgency. He is formidable, knowledgeable, and one of the few exam participants who immediately understands what Frieren's presence means for everyone else's chances.",
    ],
    abilities: [
      { name: "Life Magic", description: "Denken's signature discipline. Life magic applied internally maintains physical peak condition despite age — extending combat capability indefinitely as long as the caster's mana holds." },
      { name: "High-Level Offensive Magic", description: "Decades of first-class practice have given Denken an extensive and powerful offensive repertoire. His combat output rivals mages decades his junior." },
    ],
    relationships: [
      { name: "Frieren", description: "One of the few participants who sized Frieren up immediately and correctly. His respect for her is genuine and unperformed." },
      { name: "His Apprentices", description: "Denken participates in the exam with apprentices who fight alongside him. The loyalty between them reflects well on how he has conducted himself as a mentor." },
    ],
    quotes: [
      "\"Power and wisdom together make a mage. Power alone makes a liability.\"",
      "\"At my age, you learn to recognize the things you cannot fight. She is one of those things.\"",
    ],
    keyMoments: [
      { title: "Exam Combat Performance", description: "Denken's performance in the survival test reveals that his age is no handicap — he is fully first-class caliber in every respect." },
      { title: "Reading Frieren", description: "Denken is among the first to recognize that Frieren's mana signature is concealing something of an entirely different order of magnitude." },
    ],
  },
  {
    slug: "sein",
    name: "Sein",
    nameJp: "ザイン",
    role: "Wandering Priest · Temporary Companion",
    accentColor: "#6a8a70",
    metaDescription: "Sein is a wandering priest who joins Frieren's party temporarily. His healing magic and reluctant heroism make him a memorable companion.",
    bio: [
      "Sein is a priest who grew up in a small town and never particularly intended to become an adventurer. He has healing magic, a natural talent for reading people, and a persistent wish to find a childhood friend who left town years ago — which is ultimately what puts him on the road.",
      "He joins Frieren, Fern, and Stark for a portion of their journey north and proves a useful companion: his healing covers a gap in the party's capabilities, his interpersonal insight frequently catches things the others miss, and his ordinary human perspective offers a useful counterweight to Frieren's thousand-year frame of reference.",
      "Sein is not a hero by temperament. He is sociable, occasionally lazy, and entirely capable of choosing the comfortable option over the courageous one. What makes him interesting is that he keeps choosing the harder thing anyway — not from some deep moral conviction but from a specific stubbornness he would rather attribute to bad luck.",
    ],
    abilities: [
      { name: "Healing Magic", description: "Sein's primary magical discipline. His healing is strong enough to address serious wounds and fills a capability gap the party genuinely needed covered." },
      { name: "Interpersonal Reading", description: "Not a magical ability but a real skill. Sein reads people — their motivations, their unspoken feelings, their self-deceptions — with an accuracy that repeatedly proves useful." },
    ],
    relationships: [
      { name: "Frieren", description: "He treats Frieren as a person rather than a legend, which she quietly appreciates." },
      { name: "Stark", description: "A natural camaraderie — two people who would rather admit fear than perform courage." },
      { name: "Fern", description: "A friendship conducted entirely in mutual exasperation that is clearly genuine." },
    ],
    quotes: [
      "\"There is someone I need to find. I keep telling myself that is the only reason I am still walking.\"",
      "\"I am not brave. I just have poor timing for changing my mind.\"",
    ],
    keyMoments: [
      { title: "Joining the Party", description: "Sein's entry into the story is accidental and immediately effective. He slides into the group dynamic as if he was always supposed to be there." },
      { title: "Departing to Find His Friend", description: "When Sein eventually splits off to resume his original search, the farewell is understated and earned." },
    ],
  },
  {
    slug: "aura",
    name: "Aura the Guillotine",
    nameJp: "断頭台のアウラ",
    role: "Demon · Former General of the Demon King",
    accentColor: "#b04040",
    metaDescription: "Aura the Guillotine was one of the Demon King's most powerful generals. Her blood manipulation magic and absolute dominance made her a feared opponent — until she met Frieren.",
    bio: [
      "Aura the Guillotine was one of the Demon King's generals — an ancient demon who held a significant swath of territory even after the Demon King's defeat. Her ability to control targets through their blood gave her a dominance over opponents that most could not overcome, and she had centuries of experience using it.",
      "Her encounter with Frieren is one of the series' most important demonstrations of the gap between apparent and actual power. Aura initiates her blood dominance technique against Frieren — a technique that has never failed her — and encounters something she has no framework for: a mana output so vastly larger than her own that the technique cannot physically execute.",
      "Aura is not characterized as a monster. She is intelligent, strategic, and has maintained power for centuries through real capability. Her defeat is not a comeuppance. It is simply the encounter between an extraordinary being and one that is, by a significant margin, more extraordinary.",
    ],
    abilities: [
      { name: "Blood Manipulation — Scales of Obedience", description: "Aura's signature ability. By establishing dominance of mana, she gains control over a target's blood. The technique has never failed against any opponent she has faced — until Frieren." },
      { name: "Army Command", description: "Aura maintained a substantial force of undead and demon soldiers in the post-war period, demonstrating organizational capacity beyond raw magical power." },
    ],
    relationships: [
      { name: "Frieren", description: "The mage who ended her centuries of dominance — not through superior technique but through a scale of power Aura had never encountered and could not have prepared for." },
    ],
    quotes: [
      "\"In all my centuries, I have never encountered a mana signature I could not dominate. Until now.\"",
    ],
    keyMoments: [
      { title: "The Failed Dominance", description: "The moment Aura attempts to activate Scales of Obedience against Frieren — and it simply does not work. The scene is the series' clearest demonstration of Frieren's actual power." },
    ],
  },
  {
    slug: "land",
    name: "Land",
    nameJp: "ラント",
    role: "First-Class Mage Candidate · Ubel's Exam Partner",
    accentColor: "#5a8a6a",
    metaDescription: "Land is a cautious, strategically-minded mage candidate who partners with Ubel during the First-Class Mage Exam. His temperament and her instincts make an unlikely but effective team.",
    bio: [
      "Land is a mage candidate who participates in the Northern Magic Association's first-class exam alongside Frieren, Fern, and the other candidates. He is cautious by nature, precise in his magical application, and deeply uncomfortable with Ubel — which does not stop him from partnering with her when the exam's structure makes it advantageous.",
      "The partnership between Land and Ubel is one of the exam arc's most interesting dynamics. They are opposite types: Land plans; Ubel acts. Land worries; Ubel decides. The friction is constant and the results are, despite everything, excellent.",
      "Land's magic is not flamboyant. It is careful, multi-layered, and built for sustained effectiveness over dramatic single strikes. He is not the most powerful mage in his cohort, but he may be among the most thoughtful — a quality the exam rewards more than most candidates expect.",
    ],
    abilities: [
      { name: "Layered Defensive Magic", description: "Land's specialty is constructing defensive arrangements that account for multiple attack vectors simultaneously. The preparation takes time; the results are difficult to circumvent." },
      { name: "Tactical Casting", description: "Land applies magic in sequences designed to create specific outcomes rather than simply maximizing immediate output — a strategic approach that consistently surprises opponents." },
    ],
    relationships: [
      { name: "Ubel", description: "His exam partner and ongoing source of anxiety. Their collaboration works precisely because they supply each other's missing capabilities." },
    ],
    quotes: [
      "\"Working with Ubel requires accepting that some situations will be resolved in ways I would never have approved in advance.\"",
      "\"I prepare for outcomes. She creates them. Somehow the results are acceptable.\"",
    ],
    keyMoments: [
      { title: "Agreeing to Partner with Ubel", description: "Land's decision to team with Ubel despite every reasonable reservation about her temperament — a choice that proves correct." },
      { title: "Combined Exam Performance", description: "The moments where Land's preparation and Ubel's instincts lock together cleanly and produce outcomes neither could have achieved alone." },
    ],
  },
  {
    slug: "lawine",
    name: "Lawine",
    nameJp: "ラヴィーネ",
    role: "First-Class Mage Candidate · Ice Mage",
    accentColor: "#6090b0",
    metaDescription: "Lawine is an ice mage and first-class mage candidate whose elemental magic pairs powerfully with her partner Kanne's water abilities.",
    bio: [
      "Lawine is an ice magic specialist who participates in the first-class mage exam. Her magical output is substantial, her precision is high, and her partnership with Kanne — whose water magic is the complementary half of her ice discipline — is the tactical core of their exam strategy.",
      "She is competitive and somewhat prideful, which creates friction with Kanne despite their genuine effectiveness as a pair. The tension between them is not a weakness in their partnership so much as evidence that both of them care enough about the outcome to argue about how to reach it.",
    ],
    abilities: [
      { name: "Ice Magic", description: "Lawine's primary discipline. High output, broad coverage, and naturally complementary with water magic — allowing combinations with Kanne that neither could execute alone." },
    ],
    relationships: [
      { name: "Kanne", description: "Her partner and frequent target of mild exasperation. The complementary nature of their magic makes them more effective together than their friction would suggest." },
      { name: "Fern", description: "A mutual recognition between two serious young mages." },
    ],
    quotes: [
      "\"Ice stops what water cannot hold. We have different jobs.\"",
    ],
    keyMoments: [
      { title: "Elemental Combination Attack", description: "Lawine and Kanne execute a combined technique that exploits the complementary nature of ice and water magic — a moment that demonstrates the value of their partnership over individual output." },
    ],
  },
  {
    slug: "kanne",
    name: "Kanne",
    nameJp: "カンネ",
    role: "First-Class Mage Candidate · Water Mage",
    accentColor: "#4080a0",
    metaDescription: "Kanne is a water mage and first-class mage candidate who partners with Lawine during the exam. Her fluid magic and their tactical combination make them a formidable pair.",
    bio: [
      "Kanne is a water magic specialist and Lawine's exam partner. Where Lawine freezes and locks down, Kanne moves and shapes — their abilities are naturally complementary in ways that make their combined output significantly greater than either alone.",
      "She is somewhat more measured than Lawine, which occasionally creates the impression that she is the patient one. The reality is more complicated: she has strong opinions about execution that she expresses through pointed disagreement with Lawine's approach. The arguments are genuine; the partnership is too.",
    ],
    abilities: [
      { name: "Water Magic", description: "Kanne's primary discipline. Fluid, adaptive, and capable of both offensive and utility applications. Most effective in combination with Lawine's ice techniques." },
    ],
    relationships: [
      { name: "Lawine", description: "Her partner and the person she argues with most consistently. The arguments are evidence of care; the results are evidence of genuine compatibility." },
    ],
    quotes: [
      "\"Water finds the path. Ice holds it. We are more effective than you think.\"",
    ],
    keyMoments: [
      { title: "The Combination Technique", description: "Kanne and Lawine's signature paired attack — a demonstration of what deliberate elemental synergy can achieve against opponents who cannot counter both simultaneously." },
    ],
  },
];

export function getCharacter(slug: string): Character | undefined {
  return CHARACTERS.find((c) => c.slug === slug);
}

export function getExtendedCharacter(slug: string) {
  return EXTENDED_CHARACTERS.find((c) => c.slug === slug);
}
