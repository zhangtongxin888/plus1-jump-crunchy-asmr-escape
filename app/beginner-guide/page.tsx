import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, NextGuide, PageIntro, SiteShell } from "../components/site-shell";
import { coreLoop } from "../lib/content";

export const metadata: Metadata = {
  title: "+1 Jump Crunchy ASMR Escape Beginner Guide",
  description:
    "A complete first-run route for +1 Jump Crunchy ASMR Escape: build Jump, test your reach, use crunchy rewards, upgrade carefully, and earn Wins.",
  alternates: { canonical: "/beginner-guide/" },
};

const route = [
  {
    id: "move",
    number: "01",
    label: "BUILD YOUR BASE",
    title: "Move and watch Jump rise",
    copy: "Walk along the visible starting route. The official game description says every step gives +1 Jump, so movement is the first confirmed way to increase your reach.",
    action: "Keep moving until you can see the stat changing.",
    fact: "CONFIRMED GAME FACT",
  },
  {
    id: "test",
    number: "02",
    label: "LEARN YOUR REACH",
    title: "Test the next obstacle once",
    copy: "Try the next visible height. A single attempt tells you whether your current Jump is enough; repeating the same miss gives you no new information.",
    action: "Missed it? Return to movement before the next test.",
    fact: "FIELD GUIDE STRATEGY",
  },
  {
    id: "crunch",
    number: "03",
    label: "COLLECT THE EXTRAS",
    title: "Use crunchy interactions",
    copy: "Squish and crunch the ASMR content you find on the route. The official listing confirms these interactions give extra rewards, but it does not publish a fixed formula.",
    action: "Use the current in-game labels for exact reward values.",
    fact: "CONFIRMED GAME FACT",
  },
  {
    id: "upgrade",
    number: "04",
    label: "SPEND WITH A PURPOSE",
    title: "Compare what the game shows",
    copy: "The official description confirms training and upgrades are part of progression. Names, prices, and effects may change, so choose from the live options based on what blocked your last attempt.",
    action: "Do not follow an old static price chart.",
    fact: "FACT + FIELD GUIDE STRATEGY",
  },
  {
    id: "finish",
    number: "05",
    label: "CLOSE THE LOOP",
    title: "Climb when the route is reliable",
    copy: "Once the obstacle that stopped you feels reachable, commit to the route. Reaching the finish is the confirmed way to earn Wins.",
    action: "Finish, review the current game screen, then begin the next run.",
    fact: "CONFIRMED GAME FACT",
  },
] as const;

const mistakes = [
  ["Assuming jumping gives +1", "This experience says every step gives +1 Jump. Move rather than bouncing in place."],
  ["Training without testing", "Short tests reveal whether you need more Jump. Endless movement hides the real threshold."],
  ["Repeating the same miss", "A second identical attempt rarely changes the result. Build more reach first."],
  ["Running past ASMR rewards", "Crunchy interactions are part of the confirmed loop, not background decoration."],
  ["Trusting old cost charts", "Prices, effects, pets, and zones can change. Read the live game interface."],
  ["Inventing a WORLD 2 gate", "WORLD 2 is confirmed as a place, but its unlock requirement is not published in our sources."],
] as const;

export default function BeginnerGuidePage() {
  return (
    <SiteShell current="/beginner-guide/">
      <div className="content-wrap">
        <PageIntro
          eyebrow="START ROUTE / 01"
          trail="Beginner guide"
          title="Your first complete run"
          description="Follow the route in order once. It teaches the confirmed game loop while clearly labeling the strategy choices that come from this field guide."
        />

        <aside className="start-banner">
          <span>DO THIS FIRST</span><strong>Move before you attempt the tower.</strong>
          <p>Every step gives +1 Jump according to the official description.</p>
          <a href="#move">Start step 1 <Arrow down /></a>
        </aside>

        <nav className="route-index" aria-label="Beginner route steps">
          {route.map((item) => <a href={`#${item.id}`} key={item.id}><b>{item.number}</b><span>{item.title}</span></a>)}
        </nav>

        <section className="route-walkthrough" aria-label="Complete beginner route">
          {route.map((item, index) => (
            <article id={item.id} className={`route-step route-step-${index + 1}`} key={item.id}>
              <div className="step-rail"><span>{item.number}</span><i aria-hidden="true" /></div>
              <div className="step-body">
                <div className="step-meta"><p>{item.label}</p><b>{item.fact}</b></div>
                <h2>{item.title}</h2><p>{item.copy}</p>
                <aside><span>YOUR NEXT ACTION</span><strong>{item.action}</strong></aside>
              </div>
            </article>
          ))}
        </section>

        <section className="loop-recap" aria-labelledby="recap-title">
          <header><p className="eyebrow">MEMORY CHECK</p><h2 id="recap-title">The route in four verbs</h2></header>
          <div>
            {coreLoop.map((item) => <article key={item.verb} className={item.tone}><span>{item.number}</span><b>{item.verb}</b><small>{item.result}</small></article>)}
          </div>
        </section>

        <section className="mistake-section" aria-labelledby="mistake-title">
          <header className="section-heading">
            <span className="route-tag dark-tag">CHECKLIST</span>
            <div><p className="eyebrow">COMMON MISTAKES</p><h2 id="mistake-title">Remove one problem from the next run</h2></div>
          </header>
          <div className="mistake-list">
            {mistakes.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
          <Link className="reset-route" href="/beginner-guide/#move"><span>↺</span><div><b>Run the route again</b><small>Keep the order, remove one mistake, and compare the result.</small></div><Arrow /></Link>
        </section>

        <NextGuide
          eyebrow="NEXT FIELD GUIDE"
          title="Still stuck? Diagnose the blocker."
          copy="Use the result of your latest attempt to decide whether to move, collect, compare, or finish."
          href="/progression/"
          link="Open progression guide"
        />
      </div>
    </SiteShell>
  );
}
