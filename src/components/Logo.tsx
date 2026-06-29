import { site } from "@/lib/site";

/**
 * Brand mark recreated as clean vector art from Anthony's business-card logo:
 * red flames (heating / gas) above a blue water drop (plumbing), with the
 * ASPECT wordmark. Scales crisply at any size — no photo glare or background.
 * To use the exact original instead, drop the file in /public and swap the
 * <svg> below for <Image src="/logo.png" .../>.
 */
export function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 52 56" className="h-10 w-10 shrink-0" aria-hidden>
        <defs>
          <linearGradient id="flameA" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0%" stopColor="#ff6a3d" />
            <stop offset="45%" stopColor="#e02718" />
            <stop offset="100%" stopColor="#a01410" />
          </linearGradient>
          <linearGradient id="flameB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff8a5c" />
            <stop offset="100%" stopColor="#e63322" />
          </linearGradient>
          <linearGradient id="dropA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3f97e0" />
            <stop offset="100%" stopColor="#0d4f8f" />
          </linearGradient>
        </defs>

        {/* outer flame */}
        <path
          d="M27 2c2.6 6.1 8.2 9 7.4 16.4-.3 2.8 1.8 3.4 2.7 1 .6-1.6 1.9-2.8 2.7-1.5 3.4 5.7 1.8 15.7-5.8 19.2-8.6 4-19.7-1.4-19.6-11 .1-5.3 4.1-7.3 4.4-12.5 2.9 2.4 5 1.1 4.5-3-.6-4.6.4-6.9 1.7-8.6z"
          fill="url(#flameA)"
        />
        {/* inner flame highlight */}
        <path
          d="M26 13c2 4.4 5.4 6.5 4.5 11.6-.6 3.4-5.3 4.3-7.6 1.4-2.1-2.6-.8-5.6.4-8.1.9-2 1.6-3.6 2.7-4.9z"
          fill="url(#flameB)"
          opacity="0.85"
        />
        {/* water drop */}
        <path
          d="M26 31.5c4.6 5.6 8 9.1 8 13.6a8 8 0 0 1-16 0c0-4.5 3.4-8 8-13.6z"
          fill="url(#dropA)"
        />
        <path
          d="M22.4 41.2c.5-1.6 1.7-3 3.1-3.8"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.55"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.15rem] font-extrabold tracking-tight ${
            light ? "text-white" : "text-navy"
          }`}
        >
          ASPECT
        </span>
        <span
          className={`text-[0.6rem] font-semibold uppercase tracking-[0.2em] ${
            light ? "text-sky/80" : "text-slatey"
          }`}
        >
          Plumbing &amp; Heating
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}
