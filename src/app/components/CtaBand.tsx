import { site, telHref } from "@/lib/site";
import { Button } from "./ui";
import { LuPhone, LuArrowRight, LuClock } from "./icons";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Got a plumbing or heating problem?",
  subtitle = "Pick up the phone — Anthony answers day or night and aims to be with you the same day.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-mesh">
      <div className="container-x relative py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white ring-1 ring-white/15">
              <LuClock className="h-4 w-4 text-flame" /> {site.hours}
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-sky/80">{subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={telHref} variant="flame" external className="w-full sm:w-auto">
                <LuPhone className="h-4 w-4" /> Call {site.phoneDisplay}
              </Button>
              <Button href="/contact" variant="white" className="w-full sm:w-auto">
                Request a callback <LuArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}