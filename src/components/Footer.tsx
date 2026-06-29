import Link from "next/link";
import { nav, services, site, telHref, fullAddress } from "@/lib/site";
import { Logo } from "./Logo";
import { LuPhone, LuMapPin, LuClock, LuMail, LuArrowUpRight, LuBadgeCheck } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-mesh text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:pr-6">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sky/80">
            {site.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {site.credentials.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15"
              >
                <LuBadgeCheck className="h-3.5 w-3.5 text-flame" /> {c}
              </span>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-sky/70">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/85 transition-colors hover:text-flame"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-sky/70">
            Services
          </h4>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href="/services"
                  className="text-sm text-white/85 transition-colors hover:text-flame"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-sky/70">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li>
              <a href={telHref} className="flex items-start gap-3 text-white/90 hover:text-flame">
                <LuPhone className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 text-white/90 hover:text-flame">
                <LuMail className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/90">
              <LuMapPin className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
              {fullAddress}
            </li>
            <li className="flex items-start gap-3 text-white/90">
              <LuClock className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
              {site.hours}
            </li>
          </ul>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/15"
          >
            View on Google Maps <LuArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Serving Lucan &amp; Dublin West · Eircode {site.address.eircode}
          </p>
        </div>
      </div>
    </footer>
  );
}
