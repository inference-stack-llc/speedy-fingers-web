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
            <a href="/#game">The game</a>
            <a href="/#how-it-works">How it works</a>
            <a href="/#screens">Screens</a>
          </div>

          <div>
            <h2>Support</h2>
            <a href="/support">Help center</a>
            <a href="mailto:support@speedyfingers.org">Contact</a>
          </div>

          <div>
            <h2>Legal</h2>
            <a href="/privacy">Privacy policy</a>
            <a href="/terms">Terms of use</a>
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
