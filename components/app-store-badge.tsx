type AppStoreBadgeProps = {
  compact?: boolean;
};

export function AppStoreBadge({ compact = false }: AppStoreBadgeProps) {
  return (
    <span
      className={`app-store-badge ${compact ? "app-store-badge--compact" : ""}`}
      role="status"
      aria-label="Speedy Fingers is coming soon to the App Store"
    >
      <span className="apple-glyph" aria-hidden="true">
        ●
      </span>
      <span>
        <small>Coming soon to the</small>
        <strong>App Store</strong>
      </span>
    </span>
  );
}
