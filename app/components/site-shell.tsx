import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  ["Start here", "/beginner-guide/"],
  ["Progression", "/progression/"],
  ["Codes", "/codes/"],
  ["FAQ", "/faq/"],
] as const;

export function Arrow({ down = false }: { down?: boolean }) {
  return <span aria-hidden="true">{down ? "↓" : "→"}</span>;
}

export function SiteHeader({ current = "home" }: { current?: string }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Jump Crunchy Field Guide home">
          <span className="brand-token">+1</span>
          <span className="brand-name">
            JUMP CRUNCHY
            <small>FIELD GUIDE</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <Link
              href={href}
              key={href}
              aria-current={current === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="header-guide" href="/beginner-guide/">
          Open beginner guide <Arrow />
        </Link>
      </header>
      <nav className="mobile-nav" aria-label="Guide pages">
        <Link href="/beginner-guide/">Start</Link>
        <Link href="/progression/">Progress</Link>
        <Link href="/codes/">Codes</Link>
        <Link href="/faq/">FAQ</Link>
        <Link href="/sources/">Sources</Link>
      </nav>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="brand-token">+1</span>
        <div>
          <strong>JUMP CRUNCHY</strong>
          <small>INDEPENDENT FIELD GUIDE</small>
        </div>
      </div>
      <div className="footer-route" aria-label="Gameplay route">
        <span>MOVE</span><i>→</i><span>TEST</span><i>→</i><span>CRUNCH</span><i>→</i><span>FINISH</span>
      </div>
      <div className="footer-links">
        <Link href="/sources/">Sources &amp; fact policy</Link>
        <Link href="/faq/">FAQ</Link>
      </div>
      <p>
        Independent fan guide. Not affiliated with Roblox or Sky High Sims. Roblox and
        its marks belong to their respective owners.
      </p>
    </footer>
  );
}

export function SiteShell({
  children,
  current,
  sticky = true,
}: {
  children: ReactNode;
  current?: string;
  sticky?: boolean;
}) {
  return (
    <>
      <SiteHeader current={current} />
      <main id="main-content">{children}</main>
      <SiteFooter />
      {sticky && (
        <Link className="mobile-sticky" href="/beginner-guide/">
          Open beginner guide <Arrow />
        </Link>
      )}
    </>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  trail,
}: {
  eyebrow: string;
  title: string;
  description: string;
  trail: string;
}) {
  return (
    <header className="page-intro">
      <div className="crumbs">
        <Link href="/">Field guide</Link><span aria-hidden="true">/</span><b>{trail}</b>
      </div>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-lede">{description}</p>
    </header>
  );
}

export function NextGuide({
  eyebrow,
  title,
  copy,
  href,
  link,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  href: string;
  link: string;
}) {
  return (
    <aside className="next-guide">
      <div><p>{eyebrow}</p><h2>{title}</h2><span>{copy}</span></div>
      <Link href={href}>{link} <Arrow /></Link>
    </aside>
  );
}
