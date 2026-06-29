import { ServiceIcon } from "./icons";

/**
 * Branded placeholder tile. Looks intentional now and tells you exactly which
 * photo to drop in later. To use a real photo, replace the component at the
 * call site with:
 *   <Image src="/images/your-photo.jpg" alt="..." fill className="object-cover" />
 */
export function MediaTile({
  label,
  icon = "fire",
  className = "",
  aspect = "aspect-[4/3]",
}: {
  label: string;
  icon?: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-navy-mesh ${aspect} ${className}`}
    >
      {/* subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-110">
          <ServiceIcon name={icon} className="h-7 w-7 text-flame" />
        </span>
        <span className="text-sm font-semibold text-white/90">{label}</span>
        <span className="text-[0.65rem] uppercase tracking-widest text-sky/50">
          Photo placeholder
        </span>
      </div>
    </div>
  );
}
