import { reviews, site } from "@/lib/site";
import { Stars, Button } from "./ui";
import { LuQuote, LuStar, LuArrowUpRight } from "./icons";
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

export function ReviewsCta() {
  return (
    <div className="rounded-3xl border border-line bg-white p-8 text-center shadow-soft sm:p-10">
      <div className="flex justify-center">
        <Stars value={5} />
      </div>
      <h3 className="mt-4 text-2xl font-bold text-navy">Happy with our work?</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slatey">
        Leave us a review on Google — it takes a minute and helps other homeowners
        find a plumber they can trust. All our reviews come straight from Google.
      </p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Button href={site.reviewUrl} variant="flame" external>
          <LuStar className="h-4 w-4" /> Write a Google review
        </Button>
        <Button href={site.mapsUrl} variant="ghost" external>
          Read all reviews on Google <LuArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
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
