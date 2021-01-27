export type StarProps = {
  size: Number;
  x: Number;
  y: Number;
  duration: Number;
  delay: Number;
  stay: boolean;
};

export default function Star({ size, y, x, duration, delay, stay }: StarProps) {
  return (
    <span
      className={`block rounded-full fixed z-10 bg-pink-200 ${stay ? "animate-none" : "animate-star opacity-0"}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${y}px`,
        left: `${x}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    ></span>
  );
}
