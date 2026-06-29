import Link from "next/link";
import type { ReactNode } from "react";
import { LuStar, LuArrowRight, LuCheck } from "./icons";

export function Stars({ value = 5, className = "" }: { value?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <LuStar key={i} className={`h-4 w-4 ${i < value ? "fill-amber-400 text-amber-400" : "text-line"}`} />
      ))}
    </span>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full bg-sky px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-700 ${className}`}>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow, title, intro, center = false, light = false,
}: {
  eyebrow?: string; title: ReactNode; intro?: ReactNode; center?: boolean; light?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`mt-4 text-3xl font-extrabold leading-tight sm:text-4xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-sky/80" : "text-slatey"}`}>{intro}</p>
      )}
    </div>
  );
}

type ButtonProps = {
  href: string; children: ReactNode;
  variant?: "flame" | "navy" | "white" | "ghost";
  external?: boolean; className?: string;
};

export function Button({ href, children, variant = "flame", external = false, className = "" }: ButtonProps) {
  const styles: Record<string, string> = {
    flame: "bg-flame text-white hover:bg-flame-600 shadow-soft",
    navy: "bg-navy text-white hover:bg-navy-700 shadow-soft",
    white: "bg-white text-navy hover:bg-mist shadow-soft",
    ghost: "bg-transparent text-navy ring-1 ring-line hover:bg-mist",
  };
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200 hover:scale-[1.02] ${styles[variant]} ${className}`;

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  }
  return <Link href={href} className={cls}>{children}</Link>;
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slatey">
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky text-blue-700">
        <LuCheck className="h-3.5 w-3.5" />
      </span>
      <span>{children}</span>
    </li>
  );
}

export { LuArrowRight };