import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://plus1jumpcrunchyasmrescape.wiki/";
const searchUrl = "https://apis.roblox.com/search-api/omni-search?searchQuery=%2B1%20Jump%20Crunchy%20ASMR%20Escape&sessionId=website-search";

export const metadata: Metadata = {
  title: "+1 Jump Crunchy ASMR Escape Beginner Guide",
  description:
    "A verified 3-minute beginner route for +1 Jump Crunchy ASMR Escape, with the core loop, progression choices, common mistakes, and FAQ.",
  alternates: { canonical: siteUrl },
};

const quickStart = [
  {
    time: "0:00–0:45",
    eyebrow: "BUILD YOUR BASE",
    title: "Walk before you climb",
    copy: "Move around the safe starting space. The official description says every step gives +1 Jump, so walking is your first reliable source of height.",
    cue: "Stay low. Keep moving.",
  },
  {
    time: "0:45–1:30",
    eyebrow: "LEARN YOUR LIMIT",
    title: "Test one obstacle",
    copy: "Try the next height once. If the landing is uncertain, return to movement instead of repeating the same miss.",
    cue: "One clean test is enough.",
  },
  {
    time: "1:30–2:15",
    eyebrow: "BANK THE EXTRAS",
    title: "Use crunchy interactions",
    copy: "Squish and crunch the marked ASMR content you meet. The official listing confirms these interactions give extra rewards.",
    cue: "Do not sprint past rewards.",
  },
  {
    time: "2:15–3:00",
    eyebrow: "CLOSE THE LOOP",
    title: "Push for the finish",
    copy: "When the route feels comfortable, stop overtraining and climb. Reaching the finish awards Wins for your next round of progression.",
    cue: "Comfortable jump? Go now.",
  },
] as const;

const loop = [
  { step: "01", verb: "STEP", result: "+1 Jump", copy: "Move to raise your Jump stat.", color: "sky" },
  { step: "02", verb: "CRUNCH", result: "Extra rewards", copy: "Use satisfying ASMR interactions.", color: "coral" },
  { step: "03", verb: "GROW", result: "Higher reach", copy: "Train and compare the upgrades shown in-game.", color: "lime" },
  { step: "04", verb: "FINISH", result: "Earn Wins", copy: "Clear the route, then begin a stronger cycle.", color: "yellow" },
] as const;

const mistakes = [
  ["Grinding without testing", "Training forever hides your real bottleneck. Test one height after a short movement block."],
  ["Retrying the same miss", "If the same obstacle stops you twice, step away and build more Jump before the next attempt."],
  ["Skipping crunchy rewards", "ASMR interactions give extra rewards. Check the route instead of treating every object as decoration."],
  ["Following an old number chart", "Zones, trampolines, rewards, and upgrades can change. Use the live game screen for current values."],
] as const;

const faqs = [
  ["Does jumping give +1 Jump?", "For this specific Sky High Sims experience, the official description says every step gives +1 Jump. Move or walk to build it; do not confuse this game with a similarly named experience that rewards each jump."],
  ["What do crunchy ASMR interactions do?", "The official listing says squishing and crunching the satisfying ASMR content gives extra rewards. It does not publish a fixed reward formula."],
  ["How do I earn Wins?", "Reach the finish. That is the only Wins method stated in the official description."],
  ["What should I improve first?", "Solve the thing currently stopping your route: build more Jump when a height is out of reach, or compare the upgrades currently shown in-game. This is strategy guidance, not a fixed upgrade ranking."],
  ["Are there more areas?", "The official description mentions more zones, trampolines, and ASMR in updates. Official place data also lists a place named WORLD 2, but its entry conditions are not confirmed."],
  ["Do I need a paid trampoline or pass?", "No paid item is required by this guide. Paid items exist, but their prices and effects may change and are not used as the basis of the beginner route."],
] as const;

const sourceLinks = [
  ["Official Roblox search record", "Published title, creator, identifiers and description", searchUrl],
  ["Official universe metadata", "Universe 10547918402 and the published gameplay description", "https://develop.roblox.com/v1/universes/10547918402"],
  ["Official place mapping", "Root Place 83264774625004 → Universe 10547918402", "https://apis.roblox.com/universes/v1/places/83264774625004/universe"],
  ["Official universe places", "Current place list, including the entry named WORLD 2", "https://develop.roblox.com/v1/universes/10547918402/places?limit=100&sortOrder=Asc"],
] as const;

function Arrow({ down = false }: { down?: boolean }) {
  return <span aria-hidden="true">{down ? "↓" : "→"}</span>;
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "+1 Jump Crunchy ASMR Escape Wiki",
        url: siteUrl,
        description: "An independent, source-checked beginner guide to +1 Jump Crunchy ASMR Escape.",
      },
      {
        "@type": "Article",
        headline: "+1 Jump Crunchy ASMR Escape Beginner Guide",
        description: "A verified first-run route, progression guide, mistakes checklist, and FAQ.",
        mainEntityOfPage: siteUrl,
        datePublished: "2026-08-12",
        dateModified: "2026-08-12",
        image: `${siteUrl}og.png`,
        author: { "@type": "Organization", name: "Jump Crunchy Field Guide" },
        about: {
          "@type": "VideoGame",
          name: "+1 Jump Crunchy ASMR Escape",
          gamePlatform: "Roblox",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#quick-start">Skip to the beginner route</a>

      <header className="site-header">
        <Link className="brand" href="/" aria-label="Jump Crunchy beginner guide home">
          <span className="brand-mark">+1</span>
          <span className="brand-copy">JUMP CRUNCHY<small>BEGINNER FIELD GUIDE</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#quick-start">3-minute route</a>
          <a href="#gameplay-loop">Core loop</a>
          <a href="#progression">Get unstuck</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href="#quick-start">Start step 1 <Arrow down /></a>
      </header>

      <nav className="mobile-nav" aria-label="Guide chapters">
        <a href="#quick-start">Start</a>
        <a href="#gameplay-loop">Loop</a>
        <a href="#progression">Progress</a>
        <a href="#mistakes">Mistakes</a>
        <a href="#faq">FAQ</a>
      </nav>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="verified-pill"><span>✓</span> Verified for the Sky High Sims game</p>
            <p className="game-name">+1 JUMP CRUNCHY ASMR ESCAPE</p>
            <h1 id="hero-title">Your first useful run<br /><em>in three minutes.</em></h1>
            <p className="hero-lede">Walk to build Jump, test one height, collect the crunchy extras, then finish when the route feels reliable.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#step-one">Start step 1: build Jump <Arrow down /></a>
              <a className="button button-secondary" href="#progression">Why can’t I climb? <Arrow /></a>
            </div>
            <div className="first-cues" aria-label="First three actions">
              <div><span>1</span><b>Keep moving</b><small>Every step gives +1 Jump</small></div>
              <div><span>2</span><b>Test once</b><small>Learn the next height</small></div>
              <div><span>3</span><b>Reset early</b><small>Two misses means train more</small></div>
            </div>
          </div>

          <div className="starter-board" id="step-one">
            <div className="board-topline"><span>STEP 01 / START HERE</span><b>0:00–0:45</b></div>
            <div className="board-image">
              <Image
                src="/images/official-game-landscape.png"
                alt="Official artwork for the Sky High Sims experience showing a colorful rising platform route"
                width={768}
                height={429}
                priority
              />
              <span className="image-source">OFFICIAL ARTWORK</span>
            </div>
            <div className="board-instruction">
              <span className="instruction-number">01</span>
              <div><p>YOUR FIRST ACTION</p><h2>Walk in the safe area.</h2><span>Do not rush the tower. Build Jump while you learn the space.</span></div>
            </div>
            <div className="mini-loop" aria-label="Core gameplay loop summary">
              <span>STEP</span><i>→</i><span>CRUNCH</span><i>→</i><span>GROW</span><i>→</i><span>FINISH</span>
            </div>
          </div>
        </section>

        <section className="quick-start route-section" id="quick-start" aria-labelledby="quick-title">
          <header className="section-heading">
            <div className="section-chip">ROUTE 01</div>
            <div><p className="kicker">QUICK START</p><h2 id="quick-title">The first three minutes, step by step</h2><p>Follow this sequence once. It teaches the verified loop without relying on prices, codes, or changing reward numbers.</p></div>
          </header>
          <ol className="timeline">
            {quickStart.map((item, index) => (
              <li key={item.time} className={`timeline-${index + 1}`}>
                <div className="time"><span>0{index + 1}</span><b>{item.time}</b></div>
                <div className="timeline-copy"><p>{item.eyebrow}</p><h3>{item.title}</h3><span>{item.copy}</span></div>
                <div className="route-cue">{item.cue}</div>
              </li>
            ))}
          </ol>
          <aside className="next-step-card"><span>READY FOR THE SYSTEM?</span><p>You now know what to do. Next, see why each action feeds the next one.</p><a href="#gameplay-loop">Continue to the full loop <Arrow /></a></aside>
        </section>

        <section className="loop-section" id="gameplay-loop" aria-labelledby="loop-title">
          <header className="section-heading inverse">
            <div className="section-chip pale">ROUTE 02</div>
            <div><p className="kicker">CORE GAMEPLAY LOOP</p><h2 id="loop-title">Four actions. One upward cycle.</h2><p>These actions are grounded in the official experience description. “Grow” summarizes training and the available upgrades without assuming a specific currency or item.</p></div>
          </header>
          <div className="loop-grid">
            {loop.map((item, index) => (
              <article className={`loop-card ${item.color}`} key={item.verb}>
                <span className="loop-step">{item.step}</span><p>{item.verb}</p><h3>{item.result}</h3><span>{item.copy}</span>{index < loop.length - 1 && <i aria-hidden="true">→</i>}
              </article>
            ))}
          </div>
          <div className="loop-restart"><span>↺</span><p><b>Finish is not the end.</b> Wins and growth send you back into a stronger next attempt.</p></div>
          <a className="section-link inverse-link" href="#progression">Next: diagnose your blocker <Arrow /></a>
        </section>

        <section className="progression route-section" id="progression" aria-labelledby="progression-title">
          <header className="section-heading">
            <div className="section-chip">ROUTE 03</div>
            <div><p className="kicker">GET UNSTUCK</p><h2 id="progression-title">What stopped your climb?</h2><p>Pick the situation that matches your latest attempt. These are conservative strategy choices, not claims about fixed upgrade names.</p></div>
          </header>
          <div className="diagnosis-grid">
            <article className="diagnosis-card height-card"><span>A</span><p>THE NEXT PLATFORM IS OUT OF REACH</p><h3>Build more Jump</h3><ol><li>Return to safe movement.</li><li>Accumulate more step-based Jump.</li><li>Test the same height once.</li></ol><b>DO THIS NOW → KEEP MOVING</b></article>
            <article className="diagnosis-card reward-card"><span>B</span><p>YOU ARE PASSING REWARD OBJECTS</p><h3>Crunch before climbing</h3><ol><li>Scan the route for ASMR interactions.</li><li>Collect the extra rewards they provide.</li><li>Compare the upgrades visible in-game.</li></ol><b>DO THIS NOW → CHECK THE ROUTE</b></article>
            <article className="diagnosis-card finish-card"><span>C</span><p>THE ROUTE ALREADY FEELS COMFORTABLE</p><h3>Stop training. Finish.</h3><ol><li>Commit to the climb.</li><li>Reach the finish for Wins.</li><li>Start the next growth cycle.</li></ol><b>DO THIS NOW → PUSH UPWARD</b></article>
          </div>
          <aside className="truth-note"><span>THE SAFE RULE</span><strong>Train → test once → respond to the result.</strong><p>No static cost chart can stay reliable through updates. Treat the current game screen as the source for prices and values.</p></aside>
          <a className="section-link" href="#mistakes">Next: remove the four common mistakes <Arrow /></a>
        </section>

        <section className="mistakes route-section" id="mistakes" aria-labelledby="mistakes-title">
          <header className="section-heading compact-heading">
            <div className="section-chip coral-chip">ROUTE 04</div>
            <div><p className="kicker">COMMON MISTAKES</p><h2 id="mistakes-title">Protect the next attempt</h2></div>
          </header>
          <div className="mistake-grid">
            {mistakes.map(([title, copy], index) => (
              <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
          <a className="reset-link" href="#quick-start"><span>↺</span><div><b>Try the clean route again</b><small>Return to the three-minute plan with one mistake removed.</small></div><Arrow /></a>
        </section>

        <section className="faq" id="faq" aria-labelledby="faq-title">
          <header className="faq-heading"><div className="section-chip pale">ROUTE 05</div><p className="kicker">FAQ</p><h2 id="faq-title">Answers without rumors</h2><p>Each answer stays inside the official evidence. When a live value can change, this guide says so.</p><a href="#sources">Review every source <Arrow /></a></header>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}><summary><span>0{index + 1}</span>{question}<i>+</i></summary><p>{answer}</p></details>
            ))}
          </div>
        </section>

        <section className="sources route-section" id="sources" aria-labelledby="sources-title">
          <header className="section-heading compact-heading">
            <div className="section-chip">SOURCE DESK</div>
            <div><p className="kicker">VERIFICATION</p><h2 id="sources-title">What we checked</h2><p>Target identity: Sky High Sims · Root Place ID 83264774625004 · Universe ID 10547918402.</p></div>
          </header>
          <div className="source-list">
            {sourceLinks.map(([title, copy, href], index) => <a href={href} target="_blank" rel="noreferrer" key={title}><b>0{index + 1}</b><span><strong>{title}</strong><small>{copy}</small></span><Arrow /></a>)}
          </div>
          <p className="source-note">Independent fan guide. Last fact review: Aug 12, 2026. Live in-game values may change after an update.</p>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark">+1</span><div><b>JUMP CRUNCHY</b><small>BEGINNER FIELD GUIDE</small></div></div>
        <div className="footer-route"><span>STEP</span><i>→</i><span>CRUNCH</span><i>→</i><span>GROW</span><i>→</i><span>FINISH</span></div>
        <p>This guide is not affiliated with Roblox or Sky High Sims. Roblox and its marks belong to their respective owners.</p>
      </footer>

      <a className="mobile-sticky" href="#quick-start">Continue the beginner route <Arrow /></a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}
