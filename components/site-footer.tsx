import Link from "next/link";
import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              A fast, focused ASL fingerspelling recognition game for iPhone.
            </p>
          </div>

          <div>
            <h2>Explore</h2>
            <Link href="/#game">The game</Link>
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/#screens">Screens</Link>
          </div>

          <div>
            <h2>Support</h2>
            <Link href="/support">Help center</Link>
            <a href="mailto:support@speedyfingers.org">Contact</a>
          </div>

          <div>
            <h2>Legal</h2>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of use</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Speedy Fingers. All rights reserved.</span>
          <span>Designed for speed. Built for learning.</span>
        </div>
      </div>
    </footer>
  );
}
