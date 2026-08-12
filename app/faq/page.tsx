import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, PageIntro, SiteShell } from "../components/site-shell";
import { faqItems, siteUrl } from "../lib/content";

export const metadata: Metadata = {
  title: "+1 Jump Crunchy ASMR Escape FAQ",
  description:
    "Verified answers to common +1 Jump Crunchy ASMR Escape questions about steps, Jump, crunchy rewards, Wins, WORLD 2, pets, and codes.",
  alternates: { canonical: "/faq/" },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${siteUrl}/faq/`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <SiteShell current="/faq/">
      <div className="content-wrap">
        <PageIntro
          eyebrow="ANSWER DESK / 04"
          trail="FAQ"
          title="Short answers, clear evidence limits"
          description="Open the question that matches your next decision. When a mechanic or live value is not confirmed, the answer says so."
        />

        <section className="full-faq" aria-label="Frequently asked questions">
          {faqItems.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span><b>{item.question}</b><i>+</i></summary>
              <div><p>{item.answer}</p>{index < 4 && <Link href={index === 3 ? "/progression/" : "/beginner-guide/"}>See the related guide <Arrow /></Link>}</div>
            </details>
          ))}
        </section>

        <aside className="next-guide">
          <div><p>VERIFY THE GUIDE</p><h2>See the records behind the answers.</h2><span>Review target identifiers, official endpoints, and the line between confirmed facts and strategy.</span></div>
          <Link href="/sources/">Open sources <Arrow /></Link>
        </aside>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
    </SiteShell>
  );
}
