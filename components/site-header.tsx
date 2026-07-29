import { AppStoreBadge } from "./app-store-badge";
import { Brand } from "./brand";

const navigation = [
  { href: "/#game", label: "The game" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#screens", label: "Screens" },
  { href: "/support", label: "Support" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-badge">
          <AppStoreBadge compact />
        </div>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <AppStoreBadge compact />
          </nav>
        </details>
      </div>
    </header>
  );
}
