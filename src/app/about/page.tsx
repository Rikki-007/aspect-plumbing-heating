import type { Metadata } from "next";
import { site, telHref } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Button, SectionHeading, CheckItem } from "@/components/ui";
import { MediaTile } from "@/components/MediaTile";
import { Reviews, RatingBadge, ReviewsCta } from "@/components/Reviews";
import { CtaBand } from "@/components/CtaBand";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import {
  LuPhone,
  LuShieldCheck,
  LuBadgeCheck,
  LuClock,
  LuMessageSquare,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Anthony",
  description:
    "Aspect Plumbing & Heating is a local, family-run plumbing service in Lucan, Co. Dublin, run by Anthony — known for honest advice, fair prices and quality workmanship.",
};

const values = [
  {
    icon: LuShieldCheck,
    title: "Trust first",
    text: "One familiar face on every job. The same tradesman you spoke to is the one who turns up and does the work.",
  },
  {
    icon: LuBadgeCheck,
    title: "Fair pricing",
    text: "Clear prices agreed up front. No inflated call-out fees, no padding the bill once we're in the door.",
  },
  {
    icon: LuClock,
    title: "There when it matters",
    text: "Plumbing emergencies don't wait for office hours — so we answer the phone day, night and weekends.",
  },
  {
    icon: LuMessageSquare,
    title: "Straight talk",
    text: "We explain what's wrong in plain English, what your options are, and what we'd do if it were our own home.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Meet your plumber"
        title="Local, reliable and on the tools since day one"
        intro="Aspect Plumbing & Heating is a small, family-run business built on a simple idea: treat every customer's home like your own, charge a fair price, and always do the job properly."
      />

      {/* Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <MediaTile label="Anthony — owner & lead plumber" icon="fire" aspect="aspect-[4/5]" className="shadow-card" />
          </Reveal>
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Our story"
                title="The face behind Aspect"
                intro="Aspect is run hands-on by Anthony, a Lucan-based plumber and heating engineer. After years on the tools, he built his business on word of mouth — and most new customers still come from a neighbour, friend or family member who got looked after."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-sm leading-relaxed text-slatey">
                From burst pipes at midnight to a new boiler or a leaky tap, the approach never changes:
                turn up when you say you will, diagnose the real problem, and fix it cleanly at a price
                that's fair. That&apos;s why people across Lucan and Dublin West keep recommending us.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href={telHref} variant="flame" external>
                  <LuPhone className="h-4 w-4" /> Call {site.phoneDisplay}
                </Button>
                <Button href="/services" variant="ghost">
                  Our services
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              center
              eyebrow="What we stand for"
              title="How we work"
              intro="The small things that turn a one-off repair into a plumber you'll call again."
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-blue-700">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatey">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Promise checklist */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Our promise to you"
                title="What you can always expect"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {[
                  "A clear price agreed before any work starts",
                  "Punctual arrival within the window we give you",
                  "Quality parts and workmanship that lasts",
                  "Your home left clean and tidy",
                  "Friendly, jargon-free advice every time",
                ].map((p) => (
                  <CheckItem key={p}>{p}</CheckItem>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <MediaTile label="Quality workmanship" icon="radiator" aspect="aspect-[4/3]" className="shadow-card" />
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="scroll-mt-24 bg-mist py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Reviews"
                title="What our customers say"
                intro="Genuine reviews from homeowners across Dublin who've had Anthony out to the job."
              />
              <div className="shrink-0">
                <RatingBadge />
              </div>
            </div>
          </Reveal>
          <div className="mt-12">
            <Reviews />
          </div>
          <Reveal>
            <div className="mt-8">
              <ReviewsCta />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
