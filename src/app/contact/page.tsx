import type { Metadata } from "next";
import { site, telHref, fullAddress } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import {
  LuPhone,
  LuMail,
  LuMapPin,
  LuClock,
  LuArrowUpRight,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aspect Plumbing & Heating in Lucan, Co. Dublin. Call 087 121 2570 for 24/7 emergency plumbing, or send us a message.",
};

const contactItems = [
  {
    icon: LuPhone,
    label: "Phone",
    value: site.phoneDisplay,
    href: telHref,
    note: "Day, night & weekends",
  },
  {
    icon: LuMail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "We reply as soon as we can",
  },
  {
    icon: LuMapPin,
    label: "Address",
    value: fullAddress,
    href: site.mapsUrl,
    note: "Based in Lucan, Co. Dublin",
  },
  {
    icon: LuClock,
    label: "Hours",
    value: site.hours,
    note: "Emergency callouts anytime",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Let's get your plumbing sorted"
        intro="Call for anything urgent, or send a message and Anthony will get right back to you. No call-out surprises — just honest help."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact details */}
          <div>
            <Reveal>
              <a
                href={telHref}
                className="flex items-center justify-between gap-4 rounded-2xl bg-navy-mesh p-6 text-white shadow-card transition-transform hover:scale-[1.01]"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky/70">
                    Fastest way to reach us
                  </p>
                  <p className="mt-1 text-2xl font-extrabold">{site.phoneDisplay}</p>
                  <p className="mt-1 text-sm text-sky/80">Tap to call — 24/7</p>
                </div>
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-flame">
                  <LuPhone className="h-6 w-6" />
                </span>
              </a>
            </Reveal>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Inner = (
                  <div className="h-full rounded-2xl border border-line bg-white p-5 shadow-soft">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky text-blue-700">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slatey/70">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-bold text-navy">{item.value}</p>
                    <p className="mt-1 text-xs text-slatey">{item.note}</p>
                  </div>
                );
                return (
                  <Reveal key={item.label} delay={0.05}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block h-full transition-transform hover:-translate-y-0.5"
                      >
                        {Inner}
                      </a>
                    ) : (
                      Inner
                    )}
                  </Reveal>
                );
              })}
            </div>

            {/* Map */}
            <Reveal delay={0.1}>
              <div className="mt-6 overflow-hidden rounded-2xl border border-line shadow-soft">
                <iframe
                  title="Map to Aspect Plumbing & Heating"
                  src={`https://www.google.com/maps?q=${site.mapsEmbedQuery}&output=embed`}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-white py-3 text-sm font-semibold text-blue-700 hover:bg-mist"
                >
                  Open in Google Maps <LuArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-2xl font-bold text-navy">Send a message</h2>
              <p className="mt-2 text-sm text-slatey">
                Fill in a few details and we&apos;ll come back to you with honest advice and a fair price.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
