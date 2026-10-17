import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, ServiceBlock, CtaBand } from "@/components/site/Sections";
import solarView from "@/assets/solar-view.jpg.asset.json";
import solarRoof from "@/assets/solar-roof.jpg.asset.json";
import inverters from "@/assets/inverters.jpg.asset.json";
import backup from "@/assets/backup.jpg.asset.json";

const T = "Solar & Backup Power Installations in Athlone | SN Electrical and Plumbing";
const D = "Solar installations, inverter and battery backup systems, and electrical or solar geyser installations in Athlone and surrounding areas.";

export const Route = createFileRoute("/solar")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solar" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Solar & backup systems" title="Power that keeps going." text="Solar panels, inverter and battery backup systems, and geyser installations for homes and businesses." />
      <ServiceBlock k="solar" img={solarView.url} intro="What we do." link={false} />
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <p className="eyebrow">Our work</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Recent installations.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[[inverters.url, "Dual inverter and battery backup setup"], [backup.url, "Inverter, batteries and DB integration"], [solarRoof.url, "Roof-mounted solar array"]].map(([src, cap]) => (
              <figure key={src}>
                <img src={src} alt={cap} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                <figcaption className="mt-3 text-sm text-muted-foreground">{cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </SiteLayout>
  ),
});
