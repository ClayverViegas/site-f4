type Props = {
  variant?: "full" | "mark";
  className?: string;
};

// The client's PNG has ~37% transparent padding on the top/bottom and ~17% on
// each side, so even a "big" square img renders a tiny visual mark. We put it
// inside a rectangle that matches the visible bounding box and shift the image
// so the padding is cropped out. Measured bbox in the 1563×1563 PNG: 1023×418
// at (247, 582), aspect 2.45:1.
export function Logo({ variant = "full", className = "" }: Props) {
  const src =
    variant === "full"
      ? "/images/logo-f4-completa.png"
      : "/images/logo-f4-simbolo.png";
  const alt =
    variant === "full" ? "F4 Consultoria e Treinamentos" : "F4";

  if (variant === "mark") {
    return (
      <img
        src={src}
        alt={alt}
        draggable={false}
        className={`h-14 w-14 object-contain select-none ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative shrink-0 overflow-hidden h-12 sm:h-14 md:h-16 ${className}`}
      style={{ aspectRatio: "2.45 / 1" }}
    >
      <img
        src={src}
        alt=""
        aria-hidden
        draggable={false}
        className="absolute max-w-none select-none"
        style={{
          height: "374%",
          width: "auto",
          left: "-24.2%",
          top: "-139.2%",
          aspectRatio: "1 / 1",
        }}
      />
    </div>
  );
}
