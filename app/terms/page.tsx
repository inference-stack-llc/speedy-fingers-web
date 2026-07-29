import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing use of the Speedy Fingers ASL fingerspelling recognition game and website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of use"
      summary="These terms cover your use of the Speedy Fingers app, website, and related services."
      updated="July 28, 2026"
    >
      <section>
        <h2>Agreement</h2>
        <p>
          By downloading, accessing, or using Speedy Fingers, you agree to these
          Terms of Use. If you do not agree, do not use the app or website.
          Your App Store download may also be subject to Apple’s applicable
          terms and licensed application end user license agreement.
        </p>
      </section>

      <section>
        <h2>Purpose of the app</h2>
        <p>
          Speedy Fingers is a visual ASL fingerspelling recognition game. It is
          intended for practice and entertainment and is not a complete ASL
          course, certification program, accessibility service, or substitute
          for instruction from qualified and Deaf-led learning resources.
        </p>
      </section>

      <section>
        <h2>License and acceptable use</h2>
        <p>
          We grant you a limited, personal, non-exclusive, non-transferable,
          revocable license to use the app on Apple devices you own or control,
          subject to these terms and applicable App Store rules.
        </p>
        <p>
          You may not copy, resell, redistribute, reverse engineer, interfere
          with, exploit, or use the app or its content in a way that violates
          law or another person’s rights, except where applicable law expressly
          permits it.
        </p>
      </section>

      <section>
        <h2>Free and future paid releases</h2>
        <p>
          Version 1 is planned as a free release. Future versions, expansions,
          or features may require payment. Any paid digital content for the iOS
          app will be offered and processed only through Apple’s App Store and
          will be subject to the price, refund, family sharing, and purchase
          terms shown there.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          Speedy Fingers, its branding, game design, software, text, graphics,
          and other original content are owned by us or used with permission
          and are protected by applicable intellectual property laws. ASL
          itself is a language and is not claimed as our property.
        </p>
      </section>

      <section>
        <h2>Availability and updates</h2>
        <p>
          We may update, improve, suspend, or discontinue part of the app when
          reasonably necessary. Device compatibility and features may change
          over time. We do not promise that every feature will always be
          available on every device or operating-system version.
        </p>
      </section>

      <section>
        <h2>Disclaimer</h2>
        <p>
          To the fullest extent permitted by law, the app and website are
          provided “as is” and “as available,” without warranties of
          uninterrupted operation, error-free performance, or a particular
          learning outcome.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, we will not be liable for
          indirect, incidental, special, consequential, or punitive damages
          arising from your use of or inability to use Speedy Fingers. Some
          jurisdictions do not allow certain limitations, so parts of this
          section may not apply to you.
        </p>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p>
          We may update these terms as the app grows. Material changes will be
          reflected here with a revised date. Questions can be sent to{" "}
          <a href="mailto:support@speedyfingers.app">
            support@speedyfingers.app
          </a>
          .
        </p>
      </section>
    </LegalShell>
  );
}
