import Link from "next/link";

type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <Link
      className="brand-lockup group"
      href="/"
      aria-label="Speedy Fingers home"
    >
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand-copy">
        <strong>SPEEDY</strong>
        {!compact && <em>FINGERS</em>}
      </span>
    </Link>
  );
}
