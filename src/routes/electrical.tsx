import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, ServiceBlock, CtaBand, Process } from "@/components/site/Sections";
import electrical from "@/assets/electrical.jpg";

const T = "Electrician in Athlone — Fault Finding, DB Boards & Installations | SN Electrical";
const D = "Electrical fault finding, DB board maintenance, lights and plugs, and new electrical installations in Athlone and surrounding areas.";

export const Route = createFileRoute("/electrical")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/electrical" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Electrical services" title="Electrical work you can rely on." text="Fault finding, DB board maintenance and new installations for homes and businesses in Athlone and surrounding areas." />
      <ServiceBlock k="electrical" img={electrical} intro="What we do." link={false} />
      <Process />
      <CtaBand />
    </SiteLayout>
  ),
});
