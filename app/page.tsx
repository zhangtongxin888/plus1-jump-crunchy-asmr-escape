import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, SiteShell } from "./components/site-shell";
import { coreLoop, faqItems, guideLinks, siteUrl } from "./lib/content";

export const metadata: Metadata = {
  title: "+1 Jump Crunchy ASMR Escape Wiki & Beginner Guide",
  description:
    "Start +1 Jump Crunchy ASMR Escape with a source-checked beginner route, progression help, common mistakes, codes status, and FAQ.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "+1 Jump Crunchy ASMR Escape Wiki",
        url: siteUrl,
        description:
          "An independent, source-checked field guide for +1 Jump Crunchy ASMR Escape.",
      },
      {
        "@type": "VideoGame",
        name: "+1 Jump Crunchy ASMR Escape",
        gamePlatform: "Roblox",
        url: "https://www.roblox.com/games/83264774625004/PETS-1-Jump-Crunchy-ASMR-Escape",
      },
    ],
  };

  return (
    <SiteShell>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="proof-chip"><span>✓</span> Source-checked for the Sky High Sims experience</p>
          <p className="eyebrow">+1 JUMP CRUNCHY ASMR ESCAPE</p>
          <h1 id="home-title">Move first.<br /><em>Climb smart.</em></h1>
          <p className="hero-lede">
            New here? Your next move is simple: walk to build Jump, test the next
            obstacle once, collect crunchy rewards, then push for the finish.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/beginner-guide/">
              Open the beginner guide <Arrow />
            </Link>
            <Link className="button button-secondary" href="/progression/">
              I am stuck on a jump <Arrow />
            </Link>
          </div>
          <div className="first-moves" aria-label="Your first three moves">
            <div><b>01</b><span><strong>Keep moving</strong><small>Each step builds +1 Jump.</small></span></div>
            <div><b>02</b><span><strong>Test once</strong><small>Check the next visible height.</small></span></div>
            <div><b>03</b><span><strong>Use the result</strong><small>Train more or commit upward.</small></span></div>
          </div>
        </div>

        <div className="tower-board" aria-label="Beginner route board">
          <div className="board-label"><span>START ROUTE / 01</span><b>BEGIN HERE</b></div>
          <div className="tower-art">
            <Image
              src="/images/official-game-landscape.png"
              alt="Official +1 Jump Crunchy ASMR Escape artwork showing a colorful tower route"
              width={768}
              height={429}
              priority
            />
            <span>OFFICIAL GAME ART</span>
          </div>
          <div className="now-card">
            <span className="now-number">+1</span>
            <div><p>DO THIS NOW</p><h2>Walk before you climb.</h2><span>Movement builds the Jump stat confirmed by the official description.</span></div>
          </div>
          <div className="board-route" aria-label="Core route">
            <span>MOVE</span><i>→</i><span>TEST</span><i>→</i><span>CRUNCH</span><i>→</i><span>FINISH</span>
          </div>
        </div>
      </section>

      <section className="loop-section" aria-labelledby="loop-title">
        <header className="section-heading light-heading">
          <span className="route-tag">ROUTE MAP</span>
          <div><p className="eyebrow">THE CORE LOOP</p><h2 id="loop-title">Four actions keep the run moving</h2><p>Confirmed game facts are separated from our strategy advice, so you always know what is evidence and what is a recommendation.</p></div>
        </header>
        <div className="loop-grid">
          {coreLoop.map((item, index) => (
            <article className={`loop-card ${item.tone}`} key={item.number}>
              <span className="loop-number">{item.number}</span>
              {item.strategy && <small className="strategy-chip">FIELD GUIDE TIP</small>}
              <p>{item.verb}</p><h3>{item.result}</h3><span>{item.detail}</span>
              {index < coreLoop.length - 1 && <i aria-hidden="true">→</i>}
            </article>
          ))}
        </div>
        <Link className="section-arrow light-link" href="/beginner-guide/">
          See the complete beginner route <Arrow />
        </Link>
      </section>

      <section className="guide-hub" aria-labelledby="guides-title">
        <header className="section-heading">
          <span className="route-tag dark-tag">KEEP CLIMBING</span>
          <div><p className="eyebrow">GUIDE HUB</p><h2 id="guides-title">Choose the page that solves your next problem</h2><p>Every guide continues from a real point in the loop instead of sending you back to a generic home page.</p></div>
        </header>
        <div className="guide-grid">
          {guideLinks.map((guide) => (
            <Link href={guide.href} className="guide-card" key={guide.href}>
              <span className="guide-number">{guide.number}</span><p>{guide.label}</p>
              <h3>{guide.title}</h3><span>{guide.detail}</span><b>OPEN GUIDE <Arrow /></b>
            </Link>
          ))}
        </div>
      </section>

      <section className="decision-section" aria-labelledby="decision-title">
        <header><p className="eyebrow">QUICK DIAGNOSIS</p><h2 id="decision-title">What happened on your last attempt?</h2></header>
        <div className="decision-grid">
          <article><span>A</span><p>NEXT HEIGHT IS OUT OF REACH</p><h3>Return to movement</h3><b>Build more Jump, then test again once.</b><Link href="/progression/#out-of-reach">Fix this blocker <Arrow /></Link></article>
          <article><span>B</span><p>YOU PASSED CRUNCHY OBJECTS</p><h3>Check the route</h3><b>Those interactions are confirmed to give extra rewards.</b><Link href="/beginner-guide/#crunch">Use crunchy rewards <Arrow /></Link></article>
          <article><span>C</span><p>THE ROUTE FEELS RELIABLE</p><h3>Commit upward</h3><b>Reach the finish to earn Wins.</b><Link href="/progression/#ready-to-finish">Finish the cycle <Arrow /></Link></article>
        </div>
      </section>

      <section className="home-faq" aria-labelledby="faq-title">
        <div className="faq-callout">
          <span className="route-tag pale-tag">FAST ANSWERS</span>
          <p className="eyebrow">NO RUMORS</p><h2 id="faq-title">The questions new players ask first</h2>
          <p>Live values can change. These answers stay inside what the official records support.</p>
          <Link href="/faq/">Read every FAQ <Arrow /></Link>
        </div>
        <div className="faq-list">
          {faqItems.slice(0, 4).map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>0{index + 1}</span>{item.question}<i>+</i></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="evidence-strip">
        <div><p className="eyebrow">FACT POLICY</p><h2>Useful without pretending.</h2></div>
        <p>Root Place <b>83264774625004</b> · Universe <b>10547918402</b> · Creator <b>Sky High Sims</b></p>
        <Link href="/sources/">Review sources <Arrow /></Link>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </SiteShell>
  );
}
