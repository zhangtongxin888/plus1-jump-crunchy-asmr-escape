export const siteUrl = "https://plus1jumpcrunchyasmrescape.wiki";
export const gameUrl =
  "https://www.roblox.com/games/83264774625004/PETS-1-Jump-Crunchy-ASMR-Escape";
export const reviewedDate = "August 12, 2026";

export const officialSources = [
  {
    title: "Official Roblox experience",
    detail: "Published experience page for Root Place 83264774625004.",
    href: gameUrl,
  },
  {
    title: "Official universe metadata",
    detail: "Universe 10547918402 and its published game description.",
    href: "https://develop.roblox.com/v1/universes/10547918402",
  },
  {
    title: "Official place mapping",
    detail: "Maps Root Place 83264774625004 to Universe 10547918402.",
    href: "https://apis.roblox.com/universes/v1/places/83264774625004/universe",
  },
  {
    title: "Official universe places",
    detail: "The current place list, including the entry named WORLD 2.",
    href: "https://develop.roblox.com/v1/universes/10547918402/places?limit=100&sortOrder=Asc",
  },
] as const;

export const coreLoop = [
  {
    number: "01",
    verb: "MOVE",
    result: "+1 Jump per step",
    detail: "Movement is the confirmed way to build your Jump stat.",
    tone: "cyan",
    strategy: false,
  },
  {
    number: "02",
    verb: "TEST",
    result: "Check your reach",
    detail: "Try the next visible obstacle once, then respond to the result.",
    tone: "yellow",
    strategy: true,
  },
  {
    number: "03",
    verb: "CRUNCH",
    result: "Extra rewards",
    detail: "Use the squish-and-crunch ASMR interactions on your route.",
    tone: "coral",
    strategy: false,
  },
  {
    number: "04",
    verb: "FINISH",
    result: "Earn Wins",
    detail: "Reach the finish when you can clear the route reliably.",
    tone: "lime",
    strategy: false,
  },
] as const;

export const faqItems = [
  {
    question: "Does every jump give +1 Jump?",
    answer:
      "No. The official description for this experience says every step gives +1 Jump. Keep moving to build the stat; do not confuse it with similarly named games that reward jumping.",
  },
  {
    question: "What should I do first?",
    answer:
      "Move near the starting route and watch your Jump stat rise. Then test the next visible obstacle once. This is the safest way to learn how much reach your current stat gives you.",
  },
  {
    question: "What do the crunchy ASMR interactions do?",
    answer:
      "The official listing says squishing and crunching the satisfying ASMR content gives extra rewards. It does not publish a fixed reward formula, so use the values shown in the live game.",
  },
  {
    question: "How do I get Wins?",
    answer:
      "Reach the finish. That is the confirmed method in the official description. Exact values and later uses can change, so check the current in-game labels.",
  },
  {
    question: "Is there a WORLD 2?",
    answer:
      "Yes. The official universe place list contains an entry named WORLD 2. Its unlock requirement is not published in the sources we checked, so this guide does not invent one.",
  },
  {
    question: "How do pets work?",
    answer:
      "The published experience title currently carries a [PETS] update label, but the official sources we checked do not explain pet stats, eggs, rarity, or costs. Follow the live in-game labels rather than an unverified chart.",
  },
  {
    question: "Are there any working codes?",
    answer:
      "We did not find a code that could be verified through the official sources reviewed on August 12, 2026. That does not prove the game has no code system; it means this guide will not publish copied or unverified strings.",
  },
  {
    question: "Is this an official Sky High Sims or Roblox site?",
    answer:
      "No. This is an independent fan guide. Official records are linked on the Sources page so you can check the evidence directly.",
  },
] as const;

export const guideLinks = [
  {
    href: "/beginner-guide/",
    label: "Beginner guide",
    title: "Run the start route",
    detail: "Move, test, crunch, and finish without guessing at hidden numbers.",
    number: "01",
  },
  {
    href: "/progression/",
    label: "Progression",
    title: "Fix the real blocker",
    detail: "Use the result of your last attempt to choose the next action.",
    number: "02",
  },
  {
    href: "/codes/",
    label: "Codes status",
    title: "Skip fake code lists",
    detail: "See what is confirmed, what is not, and how to check safely.",
    number: "03",
  },
  {
    href: "/faq/",
    label: "FAQ",
    title: "Get the short answer",
    detail: "Straight answers about steps, Wins, WORLD 2, pets, and more.",
    number: "04",
  },
] as const;
