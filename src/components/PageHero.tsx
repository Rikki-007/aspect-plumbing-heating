import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { LuChevronRight } from "./icons";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-mesh">
      <div className="container-x relative py-14 sm:py-20">
        <Reveal>
          <nav className="flex items-center gap-1.5 text-sm text-sky/70">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <LuChevronRight className="h-4 w-4" />
            <span className="text-white">{crumb}</span>
          </nav>
        </Reveal>
        <Reveal delay={0.05}>
          {eyebrow && (
            <span className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.16em] text-flame">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sky/80">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
