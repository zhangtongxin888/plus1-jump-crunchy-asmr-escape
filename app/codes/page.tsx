import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, NextGuide, PageIntro, SiteShell } from "../components/site-shell";
import { reviewedDate } from "../lib/content";

export const metadata: Metadata = {
  title: "+1 Jump Crunchy ASMR Escape Codes",
  description:
    "Current verification status for +1 Jump Crunchy ASMR Escape codes, with a safe checklist for avoiding copied, expired, or invented code claims.",
  alternates: { canonical: "/codes/" },
};

export default function CodesPage() {
  return (
    <SiteShell current="/codes/">
      <div className="content-wrap">
        <PageIntro
          eyebrow="VERIFICATION DESK / 03"
          trail="Codes"
          title="No verified active codes to publish"
          description={`As of ${reviewedDate}, we did not find an active code that could be confirmed through the official sources we reviewed. We would rather show an empty verified list than copy a fake one.`}
        />

        <section className="code-status" aria-labelledby="status-title">
          <div className="status-stamp"><span>0</span><small>VERIFIED ACTIVE CODES</small></div>
          <div><p className="eyebrow">CURRENT STATUS</p><h2 id="status-title">Unverified is not the same as impossible</h2><p>This status does not prove the experience has no code system. It only means we could not trace a working string to a reliable official source on the review date.</p></div>
        </section>

        <section className="code-policy" aria-labelledby="policy-title">
          <header><p className="eyebrow">BEFORE YOU REDEEM</p><h2 id="policy-title">Three checks protect your time</h2></header>
          <div>
            <article><span>01</span><h3>Find the source</h3><p>A code list should point to an official experience page, creator announcement, or clearly attributable update—not another copied list.</p></article>
            <article><span>02</span><h3>Check the date</h3><p>Even a real string can expire. Look for a publication date and compare it with the current update.</p></article>
            <article><span>03</span><h3>Never share credentials</h3><p>A legitimate Roblox code does not require your password, browser data, download, or off-platform sign-in.</p></article>
          </div>
        </section>

        <aside className="update-note">
          <span>WHAT CHANGES THIS PAGE?</span>
          <p>We will add a code only when the string, reward claim, and source can be checked. Expired items will be labeled rather than silently presented as active.</p>
          <Link href="/sources/">Read the source policy <Arrow /></Link>
        </aside>

        <NextGuide
          eyebrow="NEXT FIELD GUIDE"
          title="Need a quick fact check?"
          copy="Read concise answers about steps, crunchy rewards, Wins, WORLD 2, pets, and this site."
          href="/faq/"
          link="Open the FAQ"
        />
      </div>
    </SiteShell>
  );
}
