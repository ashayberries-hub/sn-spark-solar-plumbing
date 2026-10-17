import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, WhatsAppIcon } from "@/components/site/Layout";
import { ServiceBlock, WhyUs, Process } from "@/components/site/Sections";
import { ContactSection } from "@/components/site/ContactForm";
import { waHref } from "@/lib/site";
import inverters from "@/assets/inverters.jpg.asset.json";
import solarRoof from "@/assets/solar-roof.jpg.asset.json";
import electrical from "@/assets/electrical.jpg";
import plumbing from "@/assets/plumbing.jpg";

const TITLE = "Electrician, Plumber & Solar Installer in Athlone | SN Electrical and Plumbing";
const DESC = "Electrical installations, DB board maintenance, solar and backup power, geysers and plumbing repairs in Athlone and surrounding areas. Request a free quote.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="eyebrow fade-up">Electrical · Plumbing · Solar — Athlone</p>
            <h1 className="fade-up mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Reliable Electrical <span className="text-gold">&</span> Plumbing Solutions.
            </h1>
            <p className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              From electrical installations and solar backup systems to dependable plumbing services, SN Electrical and Plumbing provides practical solutions for your home or business.
            </p>
            <div className="fade-up mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="bg-navy px-7 py-4 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep">Get a Free Quote</Link>
              <a href={waHref()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-navy px-7 py-4 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-navy-foreground">
                <WhatsAppIcon /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="relative">
            <img src={inverters.url} alt="Solar inverter and battery backup installation by SN Electrical and Plumbing" className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]" />
            <div className="absolute -bottom-6 -left-6 hidden w-56 bg-navy p-6 text-navy-foreground md:block">
              <p className="eyebrow">Recent work</p>
              <p className="mt-2 text-sm leading-relaxed">Dual inverter solar backup installation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-navy-line px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          {[["Electrical", "/electrical"], ["Solar & Backup", "/solar"], ["Plumbing", "/plumbing"]].map(([t, to]) => (
            <Link key={t} to={to as "/solar"} className="group flex items-center justify-between py-6 sm:px-8 sm:first:pl-0">
              <span className="font-bold tracking-wide">{t}</span>
              <span className="text-gold transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </section>

      <div id="services" className="mx-auto max-w-7xl px-5 pt-20 lg:px-8 lg:pt-28">
        <p className="eyebrow">Our services</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">Three trades, one dependable team.</h2>
      </div>
      <ServiceBlock k="electrical" img={electrical} intro="Safe, tidy electrical work for homes and businesses." />
      <ServiceBlock k="solar" img={solarRoof.url} intro="Keep the power on with solar and backup systems." reverse tone="muted" />
      <ServiceBlock k="plumbing" img={plumbing} intro="Dependable plumbing, from geysers to new installations." />
      <WhyUs />
      <Process />
      <ContactSection />
    </SiteLayout>
  );
}
