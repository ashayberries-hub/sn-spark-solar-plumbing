// Edit business details here — every page reads from this file.
export const SITE = {
  name: "SN Electrical and Plumbing",
  phoneDisplay: "068 219 4245",
  phoneIntl: "27682194245",
  email: "snelectricalandplumbing@gmail.com",
  address: "6 St Mauri Street, Athlone, South Africa",
  // Replace with the official profile URLs when available
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
};

export const telHref = `tel:+${SITE.phoneIntl}`;
export const mailHref = `mailto:${SITE.email}`;
export const waHref = (msg = "Hi SN Electrical and Plumbing, I'd like to enquire about a job.") =>
  `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(msg)}`;

export const SERVICES = {
  electrical: {
    title: "Electrical Services",
    items: [
      ["Electrical fault finding", "Systematic tracing of trips, outages and faulty circuits to find the root cause."],
      ["DB board maintenance", "Inspection, repair and upkeep of distribution boards to keep circuits safe."],
      ["Lights and plugs installation", "Neat, properly wired installation of new lights, switches and plug points."],
      ["New electrical installations", "Wiring for new builds, extensions and renovations, planned around your needs."],
    ],
  },
  solar: {
    title: "Solar & Backup Systems",
    items: [
      ["Solar installations", "Roof-mounted panels and inverter setups installed cleanly and securely."],
      ["Backup power systems", "Inverter and battery systems to keep essentials running during outages."],
      ["Electrical and solar geyser installations", "Geyser installs connected to mains or solar for efficient hot water."],
    ],
  },
  plumbing: {
    title: "Plumbing Services",
    items: [
      ["Geyser installation", "Supply-side and replacement geyser installations, fitted correctly."],
      ["Pipe leak repairs", "Locating and repairing leaking pipes before they cause further damage."],
      ["Shower installation", "Installation of showers with properly sealed fittings and drainage."],
      ["Toilet installation", "Fitting and replacing toilets with secure, leak-free connections."],
      ["New plumbing installations", "Plumbing for new builds, bathrooms and kitchens, done properly."],
    ],
  },
} as const;

export const SERVICE_OPTIONS = [
  ...SERVICES.electrical.items.map((i) => i[0]),
  ...SERVICES.solar.items.map((i) => i[0]),
  ...SERVICES.plumbing.items.map((i) => i[0]),
  "Other / not sure",
];
