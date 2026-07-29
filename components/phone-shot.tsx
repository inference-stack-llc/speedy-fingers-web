type PhoneShotProps = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

export function PhoneShot({
  src,
  alt,
  className = "",
  eager = false,
}: PhoneShotProps) {
  return (
    <div className={`phone-shot ${className}`}>
      {/* Source captures include the simulator surround; this crop isolates the device. */}
      <img
        src={src}
        alt={alt}
        width="1250"
        height="2394"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
      />
    </div>
  );
}
