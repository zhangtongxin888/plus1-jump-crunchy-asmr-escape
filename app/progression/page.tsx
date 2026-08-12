import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, NextGuide, PageIntro, SiteShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "+1 Jump Crunchy ASMR Escape Progression Guide",
  description:
    "Get unstuck in +1 Jump Crunchy ASMR Escape with a result-based progression route for Jump, crunchy rewards, upgrades, Wins, pets, and WORLD 2.",
  alternates: { canonical: "/progression/" },
};

const blockers = [
  {
    id: "out-of-reach",
    code: "A",
    symptom: "THE NEXT HEIGHT IS OUT OF REACH",
    title: "Build more Jump",
    steps: ["Return to movement.", "Watch the Jump stat increase.", "Test the same visible obstacle once."],
    note: "Movement giving +1 Jump per step is confirmed. The exact amount needed for a platform is not published.",
    action: "DO NOW → KEEP MOVING",
  },
  {
    id: "missed-rewards",
    code: "B",
    symptom: "YOU PASSED CRUNCHY OBJECTS",
    title: "Collect before climbing",
    steps: ["Scan the route for ASMR interactions.", "Use the squish-and-crunch content.", "Read the reward shown by the current game."],
    note: "Extra rewards are confirmed. A fixed amount or drop table is not.",
    action: "DO NOW → CHECK THE ROUTE",
  },
  {
    id: "upgrade-choice",
    code: "C",
    symptom: "YOU HAVE OPTIONS BUT NO CLEAR CHOICE",
    title: "Solve the last failure",
    steps: ["Name the obstacle that stopped you.", "Compare only the upgrades visible now.", "Choose the option that addresses that blocker."],
    note: "Training and upgrades are confirmed parts of the game. This guide does not invent a universal ranking.",
    action: "DO NOW → READ THE LIVE VALUES",
  },
  {
    id: "ready-to-finish",
    code: "D",
    symptom: "THE ROUTE ALREADY FEELS RELIABLE",
    title: "Stop training and finish",
    steps: ["Commit to the climb.", "Reach the finish for Wins.", "Review the live options before the next cycle."],
    note: "The finish awarding Wins is confirmed. How you spend them can change with updates.",
    action: "DO NOW → PUSH UPWARD",
  },
] as const;

export default function ProgressionPage() {
  return (
    <SiteShell current="/progression/">
      <div className="content-wrap">
        <PageIntro
          eyebrow="ROUTE DIAGNOSIS / 02"
          trail="Progression"
          title="Let the last run choose the next move"
          description="Progress faster by responding to evidence from the route. Pick the card that matches what actually stopped you."
        />

        <section className="blocker-grid" aria-label="Progression blockers">
          {blockers.map((item) => (
            <article id={item.id} className="blocker-card" key={item.id}>
              <span className="blocker-code">{item.code}</span><p>{item.symptom}</p><h2>{item.title}</h2>
              <ol>{item.steps.map((step) => <li key={step}>{step}</li>)}</ol>
              <aside><b>WHY THIS IS SAFE</b><span>{item.note}</span></aside>
              <strong>{item.action}</strong>
            </article>
          ))}
        </section>

        <section className="unknowns-section" aria-labelledby="unknowns-title">
          <header><p className="eyebrow">UPDATE-SENSITIVE AREAS</p><h2 id="unknowns-title">What we will not pretend to know</h2><p>The current title includes a [PETS] update label and the official place list contains WORLD 2. The sources checked do not publish their detailed mechanics.</p></header>
          <div>
            <article><span>01</span><h3>Pets</h3><p>Use the current in-game labels for effects, eggs, rarity, and costs. We have not found an official public table to verify.</p></article>
            <article><span>02</span><h3>WORLD 2</h3><p>The place exists in the official universe list. Its unlock requirement is not confirmed, so no gate number is stated here.</p></article>
            <article><span>03</span><h3>Upgrades</h3><p>The game advertises training and upgrades, but names, prices, and balance can change. Compare what is visible in your server.</p></article>
          </div>
        </section>

        <aside className="route-rule">
          <span>THE REPEATABLE RULE</span><strong>Move → test once → respond to the result.</strong>
          <p>A live observation beats an old number chart.</p>
          <Link href="/beginner-guide/">Review the full start route <Arrow /></Link>
        </aside>

        <NextGuide
          eyebrow="NEXT FIELD GUIDE"
          title="Check code claims before you waste a run."
          copy="See the current verification status and learn which claims this guide refuses to copy."
          href="/codes/"
          link="Open codes status"
        />
      </div>
    </SiteShell>
  );
}
