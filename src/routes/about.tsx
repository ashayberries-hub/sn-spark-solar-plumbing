import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, WhyUs, CtaBand } from "@/components/site/Sections";
import backup from "@/assets/backup.jpg.asset.json";

const T = "About SN Electrical and Plumbing — Athlone, South Africa";
const D = "SN Electrical and Plumbing provides practical electrical, plumbing and solar solutions for homes and businesses in Athlone and surrounding areas.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="About us" title="Practical solutions for homes and businesses." text="SN Electrical and Plumbing is based at 6 St Mauri Street, Athlone, serving customers across the surrounding areas." />
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-28">
          <img src={backup.url} alt="Backup power installation" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p className="eyebrow">Who we are</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">One team for electrical, plumbing and solar.</h2>
            <p>We handle the essential systems that keep a property running — power, water and backup energy. Having these trades under one roof means fewer contractors to coordinate and a single point of contact for your project.</p>
            <p>Whether it's tracing a fault, replacing a geyser or installing a backup power system, we focus on doing the job properly, communicating clearly and leaving your property neat.</p>
          </div>
        </div>
      </section>
      <WhyUs />
      <CtaBand />
    </SiteLayout>
  ),
});
