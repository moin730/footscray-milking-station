/** Milk-bottle mark, taken from the shop sign. */
export function MilkBottle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 64" className={className} aria-hidden="true" fill="currentColor">
      <rect x="9" y="0" width="14" height="5" rx="1.5" />
      <path d="M10 7h12v6c0 3 8 8 8 15v30a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V28c0-7 8-12 8-15V7Z" />
    </svg>
  );
}

/** Text wordmark: the cafe has no logo file, so the full name is the logo. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-logo text-[2rem] font-black italic leading-none tracking-[0.01em] sm:text-[2.3rem] ${className}`}
      title="Footscray Milking Station"
    >
      FMS
    </span>
  );
}

/** Rotating circular stamp, like the badge in the reference layout. */
export function Stamp({
  text = "FRESH MILK · PADRE COFFEE · SINCE 2012 · ",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <span
      className={`relative grid aspect-square place-items-center rounded-full bg-green text-cream ring-2 ring-cream ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="spin absolute inset-0 h-full w-full">
        <defs>
          <path id="stamp-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current text-[9.4px] font-semibold uppercase tracking-[0.18em]">
          <textPath href="#stamp-circle">{text}</textPath>
        </text>
      </svg>
      <MilkBottle className="h-[34%] w-auto text-lime" />
    </span>
  );
}

export function Marquee({ items, className = "" }: { items: readonly string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="px-5">{item}</span>
          <MilkBottle className="h-3.5 w-auto opacity-70" />
        </li>
      ))}
    </ul>
  );
  return (
    <div
      className={`overflow-hidden py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] ${className}`}
    >
      <div className="marquee flex w-max">
        {row(false)}
        {row(true)}
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="m10 1.5 2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6-4.5-4.2 6.1-.7Z" />
        </svg>
      ))}
    </span>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-4 w-4 ${className}`} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 ${className}`} aria-hidden="true" fill="currentColor">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
    </svg>
  );
}
