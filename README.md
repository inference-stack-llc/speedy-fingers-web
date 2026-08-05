# Speedy Fingers Web

Marketing, support, privacy, and terms website for Speedy Fingers, an ASL
fingerspelling game for iPhone.

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## App Store launch

The current App Store CTAs intentionally say "Coming soon to the App Store"
and are not links. This keeps the pre-launch site accurate while Apple reviews
the app and its supporting website.

After the App Store listing is live, replace the pre-launch badge in
`components/app-store-badge.tsx` with Apple's official Download on the App Store
badge and link it to the public product-page URL from App Store Connect.

## Validation

```bash
npm run build
npm run lint
node --test tests/rendered-html.test.mjs
```

The default build uses native Next.js output for Vercel. The original vinext
workflow remains available through the `dev:sites`, `build:sites`, and
`start:sites` scripts.
