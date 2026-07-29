import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Speedy Fingers handles device data, game progress, diagnostics, and future App Store purchases.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy policy"
      summary="Speedy Fingers is designed to keep the first version simple, local, and respectful of your privacy."
      updated="July 28, 2026"
    >
      <section>
        <h2>Overview</h2>
        <p>
          This Privacy Policy explains how Speedy Fingers (“we,” “us,” or “the
          app”) handles information when you use the Speedy Fingers iOS app or
          visit this website.
        </p>
      </section>

      <section>
        <h2>Information the app handles</h2>
        <p>
          Speedy Fingers version 1 does not require an account. Game progress,
          scores, settings, accessibility preferences, and similar gameplay
          information are designed to be stored locally on your device.
        </p>
        <p>
          The app does not ask for your name, address, contacts, precise
          location, photos, microphone, or camera to provide its core gameplay.
        </p>
      </section>

      <section>
        <h2>Diagnostics and App Store information</h2>
        <p>
          Apple may process download, device, purchase, crash, and diagnostic
          information under your Apple settings and Apple’s own privacy terms.
          We may receive aggregated or de-identified reports from Apple to help
          us understand performance and fix problems.
        </p>
        <p>
          If paid versions or features are offered in the future, purchases
          will be processed only through Apple’s App Store. We do not receive
          or store your full payment card details.
        </p>
      </section>

      <section>
        <h2>Website data</h2>
        <p>
          This marketing website does not currently provide user accounts,
          advertising profiles, or a newsletter signup. Our hosting provider
          may process routine technical logs—such as IP address, browser type,
          requested page, and timestamps—to deliver the site, prevent abuse,
          and maintain security.
        </p>
      </section>

      <section>
        <h2>Children’s privacy</h2>
        <p>
          Speedy Fingers does not knowingly collect personal information
          directly from children. Version 1 does not create user profiles or
          require personal information for gameplay. If you believe a child
          has provided personal information to us, contact us so we can review
          the situation.
        </p>
      </section>

      <section>
        <h2>Data retention and control</h2>
        <p>
          Locally stored game data generally remains on your device until the
          app or its data is removed. Controls available through iOS, your
          Apple account, and your device settings may also affect diagnostics
          and App Store information.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          Future features may change the information the app needs. If they do,
          we will update this policy and its “Last updated” date before or when
          those changes become effective.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href="mailto:support@speedyfingers.app">
            support@speedyfingers.app
          </a>
          .
        </p>
      </section>
    </LegalShell>
  );
}
