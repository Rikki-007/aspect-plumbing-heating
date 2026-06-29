import Link from "next/link";
import { services } from "@/lib/site";
import { ServiceIcon, LuArrowRight } from "./icons";
import { StaggerGroup, StaggerItem } from "./Reveal";

export function ServiceCards({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => (
        <StaggerItem key={s.slug}>
          <Link
            href="/services"
            className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-card"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-blue-700 transition-colors group-hover:bg-flame group-hover:text-white">
              <ServiceIcon name={s.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slatey">{s.blurb}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-blue-700">
              Learn more
              <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
