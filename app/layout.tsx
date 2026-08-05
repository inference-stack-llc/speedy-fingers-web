import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#020814",
};

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host =
    headerStore.get("x-forwarded-host") ??
    headerStore.get("host") ??
    "speedyfingers.org";
  const protocol =
    headerStore.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Speedy Fingers — The ASL Fingerspelling Game",
      template: "%s | Speedy Fingers",
    },
    description:
      "Learn the ASL alphabet, practice names and words, and challenge your fingerspelling skills through fast rounds and progressive levels.",
    applicationName: "Speedy Fingers",
    keywords: [
      "ASL fingerspelling",
      "ASL game",
      "sign language app",
      "fingerspelling practice",
      "ASL recognition",
      "iPhone learning game",
    ],
    authors: [{ name: "Speedy Fingers" }],
    creator: "Speedy Fingers",
    publisher: "Speedy Fingers",
    formatDetection: {
      address: false,
      email: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Speedy Fingers",
      title: "Speedy Fingers — The ASL Fingerspelling Game",
      description:
        "Learn the letters. Catch the word. Beat your best. A fast, fun ASL fingerspelling game for every skill level.",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "Speedy Fingers ASL fingerspelling game shown beside the Speedy Fingers logo.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Speedy Fingers — The ASL Fingerspelling Game",
      description:
        "Learn the ASL alphabet, practice words, and challenge your fingerspelling skills. Coming soon to iPhone.",
      images: [`${origin}/og.png`],
    },
    icons: {
      icon: "/speedyfingers-bg.svg",
      shortcut: "/speedyfingers-bg.svg",
    },
    appleWebApp: {
      capable: true,
      title: "Speedy Fingers",
      statusBarStyle: "black-translucent",
    },
    category: "education",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
