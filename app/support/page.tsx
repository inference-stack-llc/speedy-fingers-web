import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Speedy Fingers gameplay, Hand Lab, fingerspelling practice, accessibility, and future App Store purchases.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <LegalShell
      eyebrow="Help center"
      title="Speedy Fingers support"
      summary="Quick answers about playing, practicing ASL fingerspelling, accessibility, and the first release."
      updated="July 28, 2026"
    >
      <section>
        <h2>Contact support</h2>
        <p>
          For help, bug reports, accessibility feedback, or questions about the
          upcoming release, email{" "}
          <a href="mailto:support@speedyfingers.org">
            support@speedyfingers.org
          </a>
          . Please include your iPhone model, iOS version, and a short
          description of what happened when that information is relevant.
        </p>
      </section>

      <section>
        <h2>Common questions</h2>

        <h3>When can I download the game?</h3>
        <p>
          Speedy Fingers is preparing for its first App Store release. The
          App Store buttons on this site will connect directly to the official
          listing when it becomes available.
        </p>

        <h3>How does a round work?</h3>
        <p>
          Watch a name or word fingerspelled on screen, then choose what you
          recognized. Levels can change timing, word length, rounds, and replay
          allowances. Complete a level’s accuracy goal to continue along the
          journey.
        </p>

        <h3>Where can I study individual letters?</h3>
        <p>
          Open Hand Lab from the app’s navigation. You can review the A–Z
          fingerspelling alphabet one letter at a time and play the full
          sequence at your preferred pace.
        </p>

        <h3>Can I practice my name?</h3>
        <p>
          Yes. Use Practice to work on your name and other familiar words, then
          adjust the pace and session length as your fingerspelling skills grow.
        </p>

        <h3>Can I reduce motion or change feedback?</h3>
        <p>
          Yes. Settings include controls for playback speed, haptics, interface
          sounds, decorative motion, and contrast. Available options may evolve
          as the app is tested and updated.
        </p>

        <h3>Is Speedy Fingers a full ASL course?</h3>
        <p>
          No. The game focuses on the ASL alphabet and fingerspelling
          recognition. It is designed to complement—not replace—broader ASL
          study, community practice, and Deaf-led instruction.
        </p>

        <h3>How will future purchases work?</h3>
        <p>
          Version 1 will be free. If future versions or features are paid, they
          will be offered only through Apple’s App Store. Purchase management
          and refund requests will follow Apple’s applicable process.
        </p>
      </section>

      <section>
        <h2>Privacy and terms</h2>
        <p>
          You can review the Speedy Fingers{" "}
          <a href="/privacy">Privacy Policy</a> and{" "}
          <a href="/terms">Terms of Use</a> at any time.
        </p>
      </section>
    </LegalShell>
  );
}
