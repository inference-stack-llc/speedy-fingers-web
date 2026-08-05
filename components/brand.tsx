import Link from "next/link";

type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <Link
      className={`brand-lockup ${compact ? "brand-lockup--compact" : ""}`}
      href="/"
      aria-label="Speedy Fingers home"
    >
      <img
        className="brand-logo"
        src="/speedyfingers-logo.png"
        width="2173"
        height="724"
        alt="Speedy Fingers"
      />
    </Link>
  );
}
