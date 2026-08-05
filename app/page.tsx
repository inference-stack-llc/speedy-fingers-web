import type { Metadata } from "next";
import { AppStoreBadge } from "@/components/app-store-badge";
import { PhoneShot } from "@/components/phone-shot";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "ASL Fingerspelling Recognition Game for iPhone",
  description:
    "Build visual ASL fingerspelling recognition through fast rounds, a progressive journey, and focused A–Z practice. Speedy Fingers is coming soon to iPhone.",
  alternates: { canonical: "/" },
};

const features = [
  {
    icon: "↯",
    title: "Fast recognition",
    copy: "Quick, focused rounds train you to spot familiar fingerspelled words without overthinking.",
  },
  {
    icon: "⌁",
    title: "A real journey",
    copy: "Progress through worlds and levels that increase pace, length, and challenge as you improve.",
  },
  {
    icon: "✋",
    title: "Hand Lab",
    copy: "Study vetted A–Z handshapes at your own pace before putting recognition into motion.",
  },
  {
    icon: "◎",
    title: "Made to adapt",
    copy: "Tune playback, feedback, contrast, and decorative motion for a more comfortable session.",
  },
];

const screens = [
  {
    src: "/screen-home.png",
    label: "Home",
    alt: "Speedy Fingers home screen with score, accuracy, streak, practice, and Hand Lab.",
  },
  {
    src: "/screen-journey.png",
    label: "Journey",
    alt: "Speedy Fingers journey screen with a progressive path of ASL word levels.",
  },
  {
    src: "/screen-hand-lab.png",
    label: "Hand Lab",
    alt: "Speedy Fingers Hand Lab showing the ASL fingerspelling handshape for A.",
  },
  {
    src: "/screen-game.png",
    label: "Recognition round",
    alt: "Speedy Fingers gameplay screen asking the player to recognize a fingerspelled word.",
  },
  {
    src: "/screen-settings.png",
    label: "Settings",
    alt: "Speedy Fingers settings for playback, feedback, motion, and contrast.",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Speedy Fingers",
    applicationCategory: "GameApplication",
    applicationSubCategory: "EducationalGame",
    operatingSystem: "iOS",
    description:
      "A fast, focused ASL fingerspelling recognition game for iPhone.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
    featureList: [
      "ASL fingerspelling recognition rounds",
      "Progressive journey mode",
      "A–Z Hand Lab",
      "Adjustable playback and accessibility settings",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />

      <main>
        <section id="game" className="hero">
          <div className="hero-orb hero-orb--one" aria-hidden="true" />
          <div className="hero-orb hero-orb--two" aria-hidden="true" />

          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span />
                A new ASL recognition game for iPhone
              </p>
              <h1>
                <span className="hero-line">Train your eyes.</span>
                <span className="hero-line">Catch the sign.</span>
                <em className="hero-line">Build the streak.</em>
              </h1>
              <p className="hero-lede">
                Speedy Fingers turns ASL fingerspelling recognition into a
                fast, focused game—learn the handshapes, read short words, and
                sharpen visual fluency one round at a time.
              </p>

              <div className="hero-actions">
                <AppStoreBadge />
                <a className="secondary-button" href="#how-it-works">
                  <span className="play-dot" aria-hidden="true">
                    ▶
                  </span>
                  See how it plays
                </a>
              </div>

              <p className="hero-note">
                <span aria-hidden="true">✦</span>
                Version 1 will be free to download.
              </p>
            </div>

            <div className="hero-phones" aria-label="Speedy Fingers app preview">
              <div className="phone-glow" aria-hidden="true" />
              <img
                className="hero-product-image"
                src="/speedyfingers-homepage-hero.webp"
                alt="Three Speedy Fingers screens showing the home dashboard, a recognition round, and Journey mode on iPhone."
                width="1938"
                height="1628"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="feature-band" aria-labelledby="features-title">
          <div className="site-shell">
            <h2 id="features-title" className="sr-only">
              Speedy Fingers features
            </h2>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card reveal" key={feature.title}>
                  <span className="feature-icon" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="site-shell">
            <div className="section-heading reveal">
              <p className="eyebrow">Built around recognition</p>
              <h2>Read the rhythm.</h2>
              <p>
                Short sessions turn a simple loop into useful visual practice.
              </p>
            </div>

            <div className="steps-grid">
              <article className="step-card reveal">
                <span className="step-number">01</span>
                <div className="step-symbol" aria-hidden="true">
                  ◉
                </div>
                <h3>Watch the signs</h3>
                <p>
                  A hand spells a short word. Focus on the shapes, transitions,
                  and timing.
                </p>
              </article>
              <article className="step-card reveal">
                <span className="step-number">02</span>
                <div className="step-symbol" aria-hidden="true">
                  ◫
                </div>
                <h3>Read the word</h3>
                <p>
                  Choose the word that matches what you saw, with replay support
                  when the level allows it.
                </p>
              </article>
              <article className="step-card reveal">
                <span className="step-number">03</span>
                <div className="step-symbol" aria-hidden="true">
                  ↯
                </div>
                <h3>Build your streak</h3>
                <p>
                  Keep your accuracy up, complete the level, and open the next
                  step in your journey.
                </p>
              </article>
            </div>

            <p className="course-note reveal">
              Speedy Fingers is a visual fingerspelling recognition game—not a
              complete ASL course.
            </p>
          </div>
        </section>

        <section id="screens" className="section screens-section">
          <div className="site-shell">
            <div className="section-heading section-heading--split reveal">
              <div>
                <p className="eyebrow">Inside the game</p>
                <h2>Practice has a pulse.</h2>
              </div>
              <p>
                A clear, focused interface keeps every tap close to the thing
                that matters: reading the next sign.
              </p>
            </div>

            <div className="screen-rail" aria-label="Speedy Fingers screens">
              {screens.map((screen) => (
                <figure className="screen-card reveal" key={screen.label}>
                  <PhoneShot src={screen.src} alt={screen.alt} />
                  <figcaption>{screen.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell growth-card reveal">
            <div className="growth-copy">
              <p className="eyebrow">Start steady. Get fast.</p>
              <h2>Practice that grows with you.</h2>
              <p>
                Begin with generous timing, learn every handshape in Hand Lab,
                then move through new worlds as your recognition becomes more
                automatic.
              </p>
              <ul>
                <li>
                  <span>✓</span>
                  Vetted A–Z fingerspelling artwork
                </li>
                <li>
                  <span>✓</span>
                  Category-based word training
                </li>
                <li>
                  <span>✓</span>
                  Adjustable pace, feedback, and visuals
                </li>
                <li>
                  <span>✓</span>
                  Focused levels with clear progress
                </li>
              </ul>
            </div>

            <div className="growth-visual">
              <PhoneShot
                src="/screen-level.png"
                alt="Speedy Fingers First Signs level details."
              />
              <div className="level-pulse" aria-hidden="true">
                <small>LEVEL</small>
                <strong>01</strong>
                <span>FIRST SIGNS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="site-shell faq-grid">
            <div className="section-heading reveal">
              <p className="eyebrow">Good to know</p>
              <h2>Before the first round.</h2>
              <p>
                Version 1 is built as a focused, free starting point—with room
                for future worlds and features.
              </p>
              <a className="text-link" href="/support">
                Visit support <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="faq-list reveal">
              <details>
                <summary>When will Speedy Fingers be available?</summary>
                <p>
                  The game is preparing for its first App Store release. This
                  page will link directly to the listing as soon as it is live.
                </p>
              </details>
              <details>
                <summary>Will version 1 cost anything?</summary>
                <p>
                  No. Version 1 will be free. Any future paid versions or
                  features will be offered only through the App Store.
                </p>
              </details>
              <details>
                <summary>Is this a complete ASL course?</summary>
                <p>
                  No. Speedy Fingers focuses specifically on visual recognition
                  of ASL fingerspelling. It works best as one tool alongside
                  broader ASL learning and Deaf-led resources.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="launch-section">
          <div className="site-shell launch-card reveal">
            <div>
              <p className="eyebrow">Launching on iPhone</p>
              <h2>Ready when your eyes are.</h2>
              <p>
                Learn the shapes. Catch the word. Chase a faster, cleaner
                streak.
              </p>
            </div>
            <AppStoreBadge />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
