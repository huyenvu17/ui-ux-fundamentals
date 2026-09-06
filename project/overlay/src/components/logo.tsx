export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="11.5"
        width="17"
        height="17"
        rx="5"
        stroke="var(--color-accent)"
        strokeWidth="2.5"
      />
      <rect x="11.5" y="3.5" width="17" height="17" rx="5" fill="var(--color-accent-strong)" />
    </svg>
  );
}
