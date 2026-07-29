import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type LegalShellProps = {
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  children: ReactNode;
};

export function LegalShell({
  eyebrow,
  title,
  summary,
  updated,
  children,
}: LegalShellProps) {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <header className="site-shell legal-hero">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-summary">{summary}</p>
          <p className="legal-updated">Last updated {updated}</p>
        </header>
        <article className="site-shell legal-content">{children}</article>
      </main>
      <SiteFooter />
    </>
  );
}
