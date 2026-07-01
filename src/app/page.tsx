import { site, telHref, trustBadges } from "@/lib/site";
import { Button, SectionHeading, CheckItem } from "@/components/ui";
import { ServiceCards } from "@/components/ServiceCards";
import { Reviews, RatingBadge, ReviewsCta } from "@/components/Reviews";
import { MediaTile } from "@/components/MediaTile";
import { CtaBand } from "@/components/CtaBand";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import {
  LuPhone,
  LuArrowRight,
  LuClock,
  LuShieldCheck,
  LuMapPin,
  LuBadgeCheck,
  LuCircleCheckBig,
} from "@/components/icons";

const steps = [
  {
    n: "01",
    title: "Call or message",
    text: "Tell us what's going on. We answer 24/7 and give honest advice straight away.",
  },
  {
    n: "02",
    title: "We come to you",
    text: "Often the same day across Lucan & Dublin West. We diagnose the real problem fast.",
  },
  {
    n: "03",
    title: "Fixed & explained",
    text: "Tidy, lasting repair at a fair, agreed price — with a clear explanation of what we did.",
  },
];

const whyUs = [
  "One trusted tradesman — Anthony — on every job, start to finish",
  "Upfront, fair pricing with no call-out surprises",
  "Years of experience fixing problems other plumbers couldn't",
  "Clean, respectful work — we leave your home tidy",
  "Fully contactable, day or night, all week",
];

export default function HomePage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden bg-hero">
        <div className="container-x relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white ring-1 ring-white/15">
                <LuClock className="h-4 w-4 text-flame" /> 24/7 Emergency Plumber · Lucan, Dublin
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                Plumbing & heating, <span className="text-gradient-flame">done right</span> the first time.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-sky/85">
                Aspect Plumbing &amp; Heating is your local, family-run plumber in Lucan —
                trusted for fast emergency callouts, boiler repairs and honest, fair-priced work.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={telHref} variant="flame" external className="text-base">
                  <LuPhone className="h-5 w-5" /> Call {site.phoneDisplay}
                </Button>
                <Button href="/services" variant="white" className="text-base">
                  View services <LuArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <RatingBadge light />
                <span className="inline-flex items-center gap-2 text-sm text-sky/80">
                  <LuMapPin className="h-4 w-4 text-flame" /> Serving Lucan &amp; Dublin West
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-5 flex flex-wrap gap-2">
                {site.credentials.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15"
                  >
                    <LuBadgeCheck className="h-3.5 w-3.5 text-flame" /> {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Hero side card */}
          <Reveal delay={0.15} className="lg:self-center">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-2 backdrop-blur-sm">
              <MediaTile label="Boiler & heating work" icon="fire" aspect="aspect-[4/3]" />
              <div className="grid grid-cols-3 gap-2 p-2">
                {[
                  { icon: LuShieldCheck, label: "Insured" },
                  { icon: LuBadgeCheck, label: "RGI Gas" },
                  { icon: LuClock, label: "24/7" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5 rounded-xl bg-white/10 py-3 text-white"
                  >
                    <Icon className="h-5 w-5 text-flame" />
                    <span className="text-xs font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TRUST STRIP ---------- */}
      <section className="border-b border-line bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
          {trustBadges.map((b) => (
            <div key={b.label} className="text-center">
              <p className="text-2xl font-extrabold text-navy sm:text-3xl">{b.stat}</p>
              <p className="mt-1 text-sm text-slatey">{b.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="bg-mist py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              center
              eyebrow="What we do"
              title="Complete plumbing & heating services"
              intro="From a dripping tap to a full boiler replacement — one reliable tradesman for every job around the home."
            />
          </Reveal>
          <div className="mt-12">
            <ServiceCards />
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="navy">
              See all services <LuArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- WHY US ---------- */}
      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <MediaTile
              label="Anthony on the job"
              icon="drop"
              aspect="aspect-[4/3]"
              className="shadow-card"
            />
          </Reveal>
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Why Aspect"
                title="The plumber Lucan keeps recommending"
                intro="No call centres, no rotating subcontractors. You deal with Anthony directly — the same experienced tradesman from your first call to the finished job."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {whyUs.map((w) => (
                  <CheckItem key={w}>{w}</CheckItem>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={telHref} variant="flame" external>
                  <LuPhone className="h-4 w-4" /> Call now
                </Button>
                <Button href="/about" variant="ghost">
                  About Anthony <LuArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="bg-navy-mesh py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              center
              light
              eyebrow="Simple & stress-free"
              title="How it works"
              intro="Getting your problem sorted is as easy as picking up the phone."
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <span className="text-4xl font-extrabold text-flame/80">{s.n}</span>
                  <h3 className="mt-3 text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sky/75">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ---------- REVIEWS ---------- */}
      <section className="bg-mist py-20">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Real customers"
                title="Trusted by homeowners across Dublin"
                intro="Don't just take our word for it — here's what people in Lucan and beyond say about working with Anthony."
              />
              <div className="shrink-0">
                <RatingBadge />
              </div>
            </div>
          </Reveal>
          <div className="mt-12">
            <Reviews limit={3} />
          </div>
          <Reveal>
            <div className="mt-8">
              <ReviewsCta />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- SERVICE AREA ---------- */}
      <section className="bg-white py-16">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl border border-line bg-mist p-8 sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-navy">
                    <LuMapPin className="h-5 w-5 text-flame" /> Areas we cover
                  </h3>
                  <p className="mt-2 max-w-lg text-sm text-slatey">
                    Based in Lucan and covering Dublin West and north Kildare. Not sure if you&apos;re in range? Just give us a call.
                  </p>
                </div>
                <Button href={telHref} variant="flame" external>
                  <LuPhone className="h-4 w-4" /> {site.phoneDisplay}
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {site.serviceArea.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-navy"
                  >
                    <LuCircleCheckBig className="h-3.5 w-3.5 text-blue" /> {area}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
