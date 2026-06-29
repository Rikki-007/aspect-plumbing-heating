import { reviews, site } from "@/lib/site";
import { Stars } from "./ui";
import { LuQuote } from "./icons";
import { StaggerGroup, StaggerItem } from "./Reveal";

export function Reviews({ limit }: { limit?: number }) {
  const list = limit ? reviews.slice(0, limit) : reviews;
  return (
    <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {list.map((r, i) => (
        <StaggerItem key={i} className="h-full">
          <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-soft">
            <LuQuote className="h-7 w-7 text-flame/30" />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink">
              {r.text}
            </blockquote>
            <figcaption className="mt-5 flex items-center justify-between border-t border-line pt-4">
              <div>
                <p className="text-sm font-bold text-navy">{r.name}</p>
                <p className="text-xs text-slatey">
                  {r.role ? `${r.role} · ` : ""}
                  {r.when}
                </p>
              </div>
              <Stars value={r.stars} />
            </figcaption>
          </figure>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

export function RatingBadge({ light = false }: { light?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3">
      <Stars value={Math.round(site.rating.score)} />
      <span className={`text-sm font-semibold ${light ? "text-white" : "text-navy"}`}>
        {site.rating.score} on Google
        <span className={light ? "text-sky/70" : "text-slatey"}>
          {" "}
          · {site.rating.count} reviews
        </span>
      </span>
    </div>
  );
}
