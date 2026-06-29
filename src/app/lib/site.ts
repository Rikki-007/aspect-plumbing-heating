/**
 * Aspect Plumbing & Heating — central site content.
 * Edit everything here: phone, address, services, reviews, etc.
 */

export const site = {
  name: "Aspect Plumbing & Heating",
  shortName: "Aspect",
  owner: "Anthony",
  tagline: "Lucan's trusted plumber & registered gas installer",
  description:
    "Fully insured, RGI-registered plumbing and heating service in Lucan, Co. Dublin. 24-hour emergency callouts, gas boilers installed, serviced & repaired, leaks, bathrooms and heating — done right, at a fair price.",

  credentials: ["Fully Insured", "Registered Gas Installer (RGI)"],

  phoneDisplay: "087 121 2570",
  phoneIntl: "+353871212570",
  email: "info@aspectplumbing.ie", // TODO: replace with the real email
  formspreeId: "YOUR_FORM_ID", // create a free form at https://formspree.io

  address: {
    line1: "1 Foxborough Lane",
    area: "Balgaddy, Lucan",
    county: "Co. Dublin",
    eircode: "K78 V299",
    country: "Ireland",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Aspect+Plumbing+and+Heating+Lucan",
  mapsEmbedQuery: "1+Foxborough+Lane,+Balgaddy,+Lucan,+Co.+Dublin",

  hours: "Open 24 hours — 7 days a week",
  emergency: true,

  serviceArea: [
    "Lucan", "Clondalkin", "Palmerstown", "Adamstown",
    "Leixlip", "Celbridge", "Newcastle", "Dublin West",
  ],

  rating: { score: 4.2, count: 15 },

  social: { facebook: "", instagram: "" },
} as const;

export type Service = {
  slug: string;
  title: string;
  icon: string;
  blurb: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "emergency",
    title: "24/7 Emergency Plumbing",
    icon: "siren",
    blurb:
      "Burst pipe, no heat or hot water, or a leak you can't stop? We answer the phone around the clock and aim to be with you the same day.",
    points: ["Burst & leaking pipes", "No heat / no hot water", "Same-day response", "Day, night & weekends"],
  },
  {
    slug: "boilers",
    title: "Gas Boilers — Install, Service & Repair",
    icon: "fire",
    blurb:
      "As a Registered Gas Installer (RGI), Anthony installs, services and repairs gas boilers for all major brands — keeping your heating safe, efficient and reliable.",
    points: ["RGI-registered gas work", "Annual boiler service", "New boiler installation", "All major brands"],
  },
  {
    slug: "heating",
    title: "Central Heating",
    icon: "radiator",
    blurb:
      "Radiators, thermostats, power-flushing and full heating system upgrades to get every room warm and cut your energy bills.",
    points: ["Radiator repairs & swaps", "Power flushing", "Smart thermostats", "System upgrades"],
  },
  {
    slug: "leaks",
    title: "Leaks & Pipe Repairs",
    icon: "drop",
    blurb:
      "Fast leak detection and lasting repairs — from dripping taps and toilets to hidden pipe leaks behind walls and floors.",
    points: ["Leak detection", "Tap & toilet repairs", "Pipe replacement", "Damp & water damage"],
  },
  {
    slug: "cylinders",
    title: "Hot Water Cylinders",
    icon: "tank",
    blurb:
      "Repairs, replacements and upgrades for hot water cylinders and tanks — including modern, high-efficiency units.",
    points: ["Cylinder replacement", "Immersion repairs", "Pressure issues", "Tank upgrades"],
  },
  {
    slug: "bathrooms",
    title: "Bathrooms & Installs",
    icon: "shower",
    blurb:
      "Showers, sinks, toilets and full bathroom plumbing fitted cleanly and correctly, with no mess left behind.",
    points: ["Shower & bath fitting", "Toilet & sink installs", "Outside taps", "General plumbing"],
  },
];

export type Review = {
  name: string;
  role?: string;
  stars: number;
  when: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Scabby Burns", role: "Local Guide", stars: 5, when: "a year ago",
    text: "Anto was an absolute pleasure to deal with. I had a very tricky plumbing problem which 2 previous plumbers were unable to fix — not only did he identify what was wrong, he then fixed it on the very same day for a very reasonable price.",
  },
  {
    name: "Sudhitha Reddy", stars: 5, when: "2 years ago",
    text: "Anthony was very professional and excellent quality of work. His experience made the work look easy and it was fixed in quick time. His response was very quick and I'd recommend him to my family and friends.",
  },
  {
    name: "Ronan Merrick", role: "Local Guide", stars: 5, when: "a year ago",
    text: "Sound lad. Helped me fix my broken toilet that I made even worse trying to fix myself, and did a great job. Fair price too.",
  },
  {
    name: "Alex Rankin", stars: 5, when: "3 years ago",
    text: "Came out the same day as I called, was very friendly and professional, and fixed the leak in no time. Was great value, and I would highly recommend them.",
  },
  {
    name: "Maurice O'Connell", role: "Local Guide", stars: 5, when: "2 years ago",
    text: "Friendly guy. Job done efficiently and for a fair price. Explained what was wrong and gave advice. Would happily use again.",
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const trustBadges = [
  { stat: "24/7", label: "Emergency callouts" },
  { stat: "Same day", label: "Response in Lucan" },
  { stat: "15+ yrs", label: "On-the-tools experience" },
  { stat: "4.2★", label: "Rated on Google" },
];

export const telHref = `tel:${site.phoneIntl}`;
export const fullAddress = `${site.address.line1}, ${site.address.area}, ${site.address.county}, ${site.address.eircode}`;