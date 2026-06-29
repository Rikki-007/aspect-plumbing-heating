"use client";

import { useEffect, useState } from "react";
import { site, telHref } from "@/lib/site";
import { LuPhone } from "./icons";

/** Always-visible call button on mobile; appears after slight scroll on desktop. */
export function FloatingCall() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={telHref}
      aria-label={`Call ${site.name} on ${site.phoneDisplay}`}
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-flame px-5 py-3.5 font-bold text-white shadow-lift transition-all duration-300 hover:bg-flame-600 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0 md:opacity-0"
      }`}
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
      </span>
      <LuPhone className="h-5 w-5" />
      <span className="hidden sm:inline">Call now</span>
    </a>
  );
}
