import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, ServiceBlock, CtaBand, Process } from "@/components/site/Sections";
import plumbing from "@/assets/plumbing.jpg";

const T = "Plumber in Athlone — Geysers, Leaks, Showers & Toilets | SN Electrical and Plumbing";
const D = "Geyser installation, pipe leak repairs, shower and toilet installation, and new plumbing installations in Athlone and surrounding areas.";

export const Route = createFileRoute("/plumbing")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/plumbing" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Plumbing services" title="Dependable plumbing for your property." text="Geysers, leak repairs, showers, toilets and new plumbing installations — done neatly and properly." />
      <ServiceBlock k="plumbing" img={plumbing} intro="What we do." link={false} />
      <Process />
      <CtaBand />
    </SiteLayout>
  ),
});
