"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, telHref } from "@/lib/site";
import { Logo } from "./Logo";
import { LuPhone, LuMenu, LuX } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-soft backdrop-blur"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="container-x flex h-[68px] items-center justify-between">
        <Link href="/" aria-label="Aspect Plumbing & Heating — home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-sky text-blue-700"
                    : "text-navy hover:bg-mist"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="hidden items-center gap-2 rounded-full bg-flame px-4 py-2.5 text-sm font-bold text-white shadow-soft transition-transform hover:scale-[1.03] hover:bg-flame-600 sm:inline-flex"
          >
            <LuPhone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-navy hover:bg-mist md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <nav className="container-x flex flex-col py-3">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-4 py-3 text-base font-semibold ${
                    active ? "bg-sky text-blue-700" : "text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={telHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-flame px-4 py-3 text-base font-bold text-white"
            >
              <LuPhone className="h-5 w-5" />
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
