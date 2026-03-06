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

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <HeroSection />
      <FrierenSpotlight />
      <CharacterCarousel />
      <CharacterSpotlight {...FERN} />
      <CharacterSpotlight {...STARK} />
      <CharacterSpotlight {...HIMMEL} />
      <CharactersSection />
      <MagicSection />
      <ArcsTimeline />
      <QuotesSection />
      <Footer />
    </>
  );
}
