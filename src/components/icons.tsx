import {
  LuSiren,
  LuFlame,
  LuThermometer,
  LuDroplets,
  LuContainer,
  LuShowerHead,
  LuWrench,
} from "react-icons/lu";
import type { IconType } from "react-icons";

const serviceIconMap: Record<string, IconType> = {
  siren: LuSiren,
  fire: LuFlame,
  radiator: LuThermometer,
  drop: LuDroplets,
  tank: LuContainer,
  shower: LuShowerHead,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = serviceIconMap[name] ?? LuWrench;
  return <Icon className={className} aria-hidden />;
}

export {
  LuSiren,
  LuFlame,
  LuThermometer,
  LuDroplets,
  LuContainer,
  LuShowerHead,
  LuWrench,
};

export {
  LuPhone,
  LuMapPin,
  LuClock,
  LuMail,
  LuStar,
  LuMenu,
  LuX,
  LuCheck,
  LuShieldCheck,
  LuArrowRight,
  LuArrowUpRight,
  LuFacebook,
  LuInstagram,
  LuQuote,
  LuChevronRight,
  LuBadgeCheck,
  LuMessageSquare,
  LuCircleCheckBig,
} from "react-icons/lu";
