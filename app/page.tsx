import type { Metadata } from "next";
import { AppStoreBadge } from "@/components/app-store-badge";
import { PhoneShot } from "@/components/phone-shot";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "ASL Fingerspelling Game for iPhone",
  description:
    "Learn the ASL alphabet, practice names and words, and challenge your fingerspelling recognition with fast rounds, streaks, and progressive levels.",
  alternates: { canonical: "/" },
};

const features = [
  {
    icon: "↯",
    title: "Learn A–Z",
    copy: "Explore the complete ASL fingerspelling alphabet in Hand Lab, one clear handshape at a time.",
  },
  {
    icon: "⌁",
    title: "Spell what matters",
    copy: "Practice your name and familiar words at a pace that helps every letter stick.",
  },
  {
    icon: "✋",
    title: "Challenge your skills",
    copy: "Already sign? Push your speed, accuracy, and streak across levels that get tougher as you improve.",
  },
  {
    icon: "◎",
    title: "Play your way",
    copy: "Choose your pace, session length, sound, feedback, and motion for a game that feels right.",
  },
];

const screens = [
  {
    src: "/screen-home.webp",
    label: "Home",
    alt: "Speedy Fingers home screen with score, accuracy, streak, practice, and Hand Lab.",
  },
  {
    src: "/screen-journey.webp",
    label: "Journey",
    alt: "Speedy Fingers journey screen with a progressive path of ASL word levels.",
  },
  {
    src: "/screen-hand-lab.webp",
    label: "Hand Lab",
    alt: "Speedy Fingers Hand Lab showing the ASL fingerspelling handshape for B.",
  },
  {
    src: "/screen-recognition-round.webp",
    label: "Recognition round",
    alt: "Speedy Fingers gameplay screen asking the player to recognize a fingerspelled word.",
  },
  {
    src: "/screen-settings.webp",
    label: "Settings",
    alt: "Speedy Fingers settings for playback, feedback, motion, and contrast.",
  },
  {
    src: "/screen-splash.webp",
    label: "Launch",
    alt: "Speedy Fingers launch screen with the game logo and nebula artwork.",
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
      "A fast, fun ASL fingerspelling game for learning the alphabet, practicing words, and challenging recognition skills.",
    featureList: [
      "Complete ASL fingerspelling alphabet in Hand Lab",
      "Name and word fingerspelling practice",
      "Progressive recognition challenges",
      "Adjustable pace, feedback, and accessibility settings",
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
                An ASL fingerspelling game for every skill level
              </p>
              <h1>
                <span className="hero-line">Learn the letters.</span>
                <span className="hero-line">Catch the word.</span>
                <em className="hero-line">Beat your best.</em>
              </h1>
              <p className="hero-lede">
                Whether you’re learning ASL or already sign, Speedy Fingers
                turns fingerspelling into a fast, replayable challenge.
                Practice names and words, sharpen recognition, and chase your
                next high score.
              </p>

              <div className="hero-actions">
                <AppStoreBadge />
                <a className="secondary-button" href="#how-it-works">
                  <span className="play-dot" aria-hidden="true">
                    ▶
                  </span>
                  See how to play
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
                width="3040"
                height="3300"
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
              <p className="eyebrow">An essential ASL skill</p>
              <h2>Improve your ability to read fingerspelling.</h2>
              <p>
                Fingerspelling is everywhere in ASL—and one of the hardest
                skills to read at speed. Short rounds make practice feel like
                play.
              </p>
            </div>

            <div className="steps-grid">
              <article className="step-card reveal">
                <span className="step-number">01</span>
                <div className="step-symbol" aria-hidden="true">
                  ◉
                </div>
                <h3>Learn the alphabet</h3>
                <p>
                  Study every A–Z handshape in Hand Lab, then play the full
                  sequence until the letters feel familiar.
                </p>
              </article>
              <article className="step-card reveal">
                <span className="step-number">02</span>
                <div className="step-symbol" aria-hidden="true">
                  ◫
                </div>
                <h3>Read the word</h3>
                <p>
                  Watch a name or word fingerspelled at your pace, then choose
                  what you saw.
                </p>
              </article>
              <article className="step-card reveal">
                <span className="step-number">03</span>
                <div className="step-symbol" aria-hidden="true">
                  ↯
                </div>
                <h3>Challenge yourself</h3>
                <p>
                  Build accuracy, chase streaks, and unlock tougher levels as
                  your recognition gets faster.
                </p>
              </article>
            </div>

            <p className="course-note reveal">
              Speedy Fingers focuses on ASL fingerspelling—not the full
              language. Pair it with broader ASL learning and Deaf-led
              instruction.
            </p>
          </div>
        </section>

        <section id="screens" className="section screens-section">
          <div className="site-shell">
            <div className="section-heading section-heading--split reveal">
              <div>
                <p className="eyebrow">Play. Practice. Progress.</p>
                <h2>A fun way to improve your sign language skills.</h2>
              </div>
              <p>
                Learn the alphabet, spell your name, read words at speed, and
                keep leveling up.
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
              <p className="eyebrow">For first letters and fast hands</p>
              <h2>Start where you are. Level up.</h2>
              <p>
                Use Hand Lab to learn the full ASL alphabet, practice names and
                words at your pace, then test your recognition in worlds that
                get faster as you do.
              </p>
              <ul>
                <li>
                  <span>✓</span>
                  Complete A–Z alphabet in Hand Lab
                </li>
                <li>
                  <span>✓</span>
                  Practice your name and everyday words
                </li>
                <li>
                  <span>✓</span>
                  Adjustable speed, sound, and feedback
                </li>
                <li>
                  <span>✓</span>
                  Levels, streaks, scores, and progress
                </li>
              </ul>
            </div>

            <div className="growth-visual">
              <img
                className="growth-product-image"
                src="/speedyfingers-practice-showcase.webp"
                alt="Speedy Fingers Hand Lab and custom practice setup screens on two iPhones."
                width="2048"
                height="2732"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="site-shell faq-grid">
            <div className="section-heading reveal">
              <p className="eyebrow">Good to know</p>
              <h2>Before the first round.</h2>
              <p>
                Built for learners, signers, and anyone who wants a fun way to
                spend more time with ASL.
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
                  No. Speedy Fingers focuses on the ASL alphabet and
                  fingerspelling recognition. It complements broader ASL study,
                  community practice, and Deaf-led learning.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="launch-section">
          <div className="site-shell launch-card reveal">
            <div>
              <p className="eyebrow">Coming soon to iPhone</p>
              <h2>Ready to spell faster?</h2>
              <p>
                Learn the alphabet. Read the word. Chase the streak—and have
                fun with ASL.
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
