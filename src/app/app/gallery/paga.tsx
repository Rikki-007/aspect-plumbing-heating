import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MediaTile } from "@/components/MediaTile";
import { CtaBand } from "@/components/CtaBand";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Work — Gallery",
  description:
    "A look at recent plumbing and heating work by Aspect Plumbing & Heating in Lucan and Dublin — boiler installs, bathrooms, heating systems and more.",
};

const gallery = [
  { label: "Boiler installation", icon: "fire", span: "lg:col-span-2 lg:row-span-2", aspect: "aspect-square lg:aspect-auto lg:h-full" },
  { label: "Combi boiler service", icon: "fire", span: "", aspect: "aspect-[4/3]" },
  { label: "Radiator & heating", icon: "radiator", span: "", aspect: "aspect-[4/3]" },
  { label: "Hot water cylinder", icon: "tank", span: "", aspect: "aspect-[4/3]" },
  { label: "Bathroom plumbing", icon: "shower", span: "", aspect: "aspect-[4/3]" },
  { label: "Leak repair", icon: "drop", span: "lg:col-span-2", aspect: "aspect-[16/9] lg:aspect-[21/9]" },
  { label: "Pipework & fittings", icon: "drop", span: "", aspect: "aspect-[4/3]" },
  { label: "Emergency callout", icon: "siren", span: "", aspect: "aspect-[4/3]" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero crumb="Gallery" eyebrow="Our work"
        title="Recent jobs around Lucan & Dublin"
        intro="A snapshot of the plumbing and heating work we do every week. Tidy installs, proper repairs and happy homeowners." />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <StaggerGroup className="grid auto-rows-auto grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <StaggerItem key={i} className={g.span}>
                <MediaTile label={g.label} icon={g.icon} aspect={g.aspect} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal>
            <p className="mx-auto mt-10 max-w-xl text-center text-sm text-slatey">
              These are placeholders — once you send through photos of real jobs, vans and
              finished work, they&apos;ll appear here automatically.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Want work like this done at your place?" />
    </>
  );
}