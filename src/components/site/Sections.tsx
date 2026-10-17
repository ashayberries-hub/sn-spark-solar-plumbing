import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { SERVICES, telHref, waHref, SITE } from "@/lib/site";
import { WhatsAppIcon } from "./Layout";

type Key = keyof typeof SERVICES;

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1 className="fade-up mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">{title}</h1>
        <p className="fade-up mt-6 max-w-2xl text-lg leading-relaxed text-navy-muted">{text}</p>
      </div>
    </section>
  );
}

export function ServiceBlock({
  k, img, intro, reverse = false, tone = "light", link = true,
}: { k: Key; img: string; intro: string; reverse?: boolean; tone?: "light" | "muted"; link?: boolean }) {
  const s = SERVICES[k];
  return (
    <section className={tone === "muted" ? "bg-card" : "bg-background"}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-28">
        <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
          <img src={img} alt={s.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div className={`absolute -bottom-4 h-24 w-24 border-b-2 border-gold ${reverse ? "-left-4 border-l-2" : "-right-4 border-r-2"}`} />
        </div>
        <div>
          <p className="eyebrow">{s.title}</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">{intro}</h2>
          <ul className="mt-10 divide-y border-y">
            {s.items.map(([name, desc]) => (
              <li key={name} className="grid gap-1 py-5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-8">
                <span className="font-bold">{name}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{desc}</span>
              </li>
            ))}
          </ul>
          {link && (
            <Link to={`/${k}` as "/electrical"} className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-navy">
              Learn more <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

const WHY = [
  ["Professional workmanship", "Installations completed neatly and correctly, with care for your property."],
  ["Practical solutions", "Straightforward advice and options that suit your home, business and budget."],
  ["Attention to detail", "From wiring runs to sealed fittings, the small things are done properly."],
  ["Reliable service", "Clear communication, honest quotes and turning up when we say we will."],
];

export function WhyUs() {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Why choose us</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Work done properly, the first time.</h2>
          </div>
          <div className="grid gap-px bg-navy-line sm:grid-cols-2">
            {WHY.map(([t, d], i) => (
              <div key={t} className="bg-navy p-8">
                <span className="text-sm font-bold text-gold">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  ["Get in Touch", "Call, WhatsApp or send an enquiry through our form."],
  ["Discuss Your Requirements", "We talk through the job and assess what's needed."],
  ["Receive a Quote", "You get a clear quote before any work begins."],
  ["Get the Job Done", "We complete the work neatly and to standard."],
];

export function Process() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow">Our process</p>
        <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight md:text-4xl">Four simple steps from enquiry to completion.</h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="border-t-2 border-navy pt-6">
              <span className="text-4xl font-extrabold text-gold">{i + 1}</span>
              <h3 className="mt-4 font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="border-t bg-gold-soft">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Need an electrician or plumber in Athlone?</h2>
          <p className="mt-2 text-muted-foreground">Speak to us directly on {SITE.phoneDisplay} or request a free quote.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="bg-navy px-6 py-4 text-sm font-semibold text-navy-foreground hover:bg-navy-deep">Get a Free Quote</Link>
          <a href={telHref} className="inline-flex items-center gap-2 border border-navy px-6 py-4 text-sm font-semibold text-navy hover:bg-navy hover:text-navy-foreground"><Phone className="h-4 w-4" />Call Now</a>
          <a href={waHref()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-navy px-6 py-4 text-sm font-semibold text-navy hover:bg-navy hover:text-navy-foreground"><WhatsAppIcon />WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
