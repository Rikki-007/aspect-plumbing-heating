import type { Metadata } from "next";
import { services, telHref, site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Button, CheckItem } from "@/components/ui";
import { ServiceIcon, LuPhone, LuArrowRight } from "@/components/icons";
import { CtaBand } from "@/components/CtaBand";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Plumbing & Heating Services",
  description:
    "Emergency plumbing, boiler repair & servicing, central heating, leak detection, hot water cylinders and bathroom installs in Lucan and across Dublin West.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What we do"
        title="Plumbing & heating services for your home"
        intro="Whatever's gone wrong — or whatever you'd like upgraded — Anthony handles it personally, with honest advice and a fair, agreed price before any work begins."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <StaggerGroup className="grid gap-6">
            {services.map((s, i) => (
              <StaggerItem key={s.slug}>
                <article
                  id={s.slug}
                  className="grid gap-6 rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10"
                >
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sky text-blue-700">
                      <ServiceIcon name={s.icon} className="h-8 w-8" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slatey/60">
                      0{i + 1}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-navy">{s.title}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slatey">
                      {s.blurb}
                    </p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {s.points.map((p) => (
                        <CheckItem key={p}>{p}</CheckItem>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:text-right">
                    <Button href={telHref} variant="flame" external className="w-full lg:w-auto">
                      <LuPhone className="h-4 w-4" /> Call now
                    </Button>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Pricing note */}
          <Reveal>
            <div className="mt-12 rounded-3xl bg-mist p-8 sm:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <h3 className="text-xl font-bold text-navy">Honest, upfront pricing</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatey">
                    Every job is different, so we give you a clear, fair price before we start —
                    no hidden call-out fees and no surprises on the bill. Most repairs are sorted
                    in a single visit. Call {site.phoneDisplay} for a quick, no-obligation quote.
                  </p>
                </div>
                <Button href="/contact" variant="navy" className="shrink-0">
                  Request a quote <LuArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Not sure what you need? Just ask." subtitle="Describe the problem and Anthony will tell you honestly what's involved and what it'll cost." />
    </>
  );
}
