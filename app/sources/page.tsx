import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, PageIntro, SiteShell } from "../components/site-shell";
import { officialSources, reviewedDate } from "../lib/content";

export const metadata: Metadata = {
  title: "Sources & Fact Policy",
  description:
    "Official Roblox sources, target identifiers, review date, and fact policy for the +1 Jump Crunchy ASMR Escape independent field guide.",
  alternates: { canonical: "/sources/" },
};

export default function SourcesPage() {
  return (
    <SiteShell sticky={false}>
      <div className="content-wrap">
        <PageIntro
          eyebrow="SOURCE DESK / 05"
          trail="Sources"
          title="Trace every core claim"
          description={`Last content review: ${reviewedDate}. This page records the exact game identity and the official endpoints used to check the guide.`}
        />

        <section className="identity-card" aria-labelledby="identity-title">
          <div><p className="eyebrow">TARGET IDENTITY</p><h2 id="identity-title">Sky High Sims experience</h2></div>
          <dl>
            <div><dt>Root Place ID</dt><dd>83264774625004</dd></div>
            <div><dt>Universe ID</dt><dd>10547918402</dd></div>
            <div><dt>Creator</dt><dd>Sky High Sims</dd></div>
            <div><dt>Review date</dt><dd>{reviewedDate}</dd></div>
          </dl>
        </section>

        <section className="source-section" aria-labelledby="source-title">
          <header><p className="eyebrow">OFFICIAL RECORDS</p><h2 id="source-title">What we checked</h2></header>
          <div className="source-list">
            {officialSources.map((source, index) => (
              <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>
                <b>0{index + 1}</b><span><strong>{source.title}</strong><small>{source.detail}</small></span><Arrow />
              </a>
            ))}
          </div>
        </section>

        <section className="fact-boundary" aria-labelledby="boundary-title">
          <header><p className="eyebrow">EDITORIAL BOUNDARY</p><h2 id="boundary-title">Fact, strategy, or unknown?</h2></header>
          <div>
            <article className="confirmed"><span>CONFIRMED</span><h3>Published game facts</h3><ul><li>Every step gives +1 Jump.</li><li>ASMR interactions give extra rewards.</li><li>Training and upgrades are part of progression.</li><li>The finish awards Wins.</li><li>The universe place list includes WORLD 2.</li></ul></article>
            <article className="strategy"><span>STRATEGY</span><h3>Our conservative advice</h3><ul><li>Test one obstacle after a movement block.</li><li>Respond to the result instead of repeating a miss.</li><li>Choose upgrades based on the visible blocker.</li><li>Commit to the finish when the route feels reliable.</li></ul></article>
            <article className="unknown"><span>NOT CONFIRMED</span><h3>Claims we do not publish</h3><ul><li>Fixed WORLD 2 unlock requirements.</li><li>Pet stats, egg costs, or rarity tables.</li><li>Static reward formulas or upgrade rankings.</li><li>Copied code strings without an official source.</li></ul></article>
          </div>
        </section>

        <aside className="route-rule source-return"><span>READY TO PLAY?</span><strong>Start with the route, not a rumor.</strong><p>The beginner guide turns the confirmed loop into clear next actions.</p><Link href="/beginner-guide/">Open beginner guide <Arrow /></Link></aside>
      </div>
    </SiteShell>
  );
}
