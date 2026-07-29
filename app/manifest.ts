import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Speedy Fingers",
    short_name: "Speedy Fingers",
    description:
      "A fast, focused ASL fingerspelling recognition game for iPhone.",
    start_url: "/",
    display: "standalone",
    background_color: "#020814",
    theme_color: "#020814",
    icons: [
      {
        src: "/speedyfingers-bg.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
