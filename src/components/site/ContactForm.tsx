import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, SERVICE_OPTIONS, telHref, mailHref, waHref } from "@/lib/site";
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from "./Layout";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().regex(/^[+\d\s()-]{9,20}$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  service: z.string().min(1, "Please choose a service"),
  location: z.string().trim().min(2, "Please enter your area").max(120),
  description: z.string().trim().min(10, "Please describe the job briefly").max(1500),
});
type Data = z.infer<typeof schema>;

const field = "mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold";

function buildMessage(d: Data) {
  return `Quote request — ${SITE.name}\n\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nService: ${d.service}\nLocation: ${d.location}\n\nJob description:\n${d.description}`;
}

export function ContactSection() {
  const [errors, setErrors] = useState<Partial<Record<keyof Data, string>>>({});
  const [sent, setSent] = useState<Data | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const r = schema.safeParse(raw);
    if (!r.success) {
      const errs: Partial<Record<keyof Data, string>> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as keyof Data] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(r.data);
    window.open(waHref(buildMessage(r.data)), "_blank", "noopener");
  }

  const L = ({ n, label, children }: { n: keyof Data; label: string; children: React.ReactNode }) => (
    <label className="block text-sm font-semibold">
      {label}
      {children}
      {errors[n] && <span className="mt-1 block text-xs font-medium text-destructive">{errors[n]}</span>}
    </label>
  );

  return (
    <section id="contact" className="bg-card">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:px-8 lg:py-28">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Request a free quote.</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Tell us about the job and we'll get back to you. For quicker help, call or WhatsApp us directly.</p>
          <ul className="mt-10 divide-y border-y">
            <li><a href={telHref} className="flex items-center gap-4 py-5 hover:text-gold"><Phone className="h-5 w-5 text-gold" /><span><span className="block text-xs uppercase tracking-wider text-muted-foreground">Call</span><span className="text-lg font-bold">{SITE.phoneDisplay}</span></span></a></li>
            <li><a href={waHref()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-5 hover:text-gold"><WhatsAppIcon className="h-5 w-5 text-gold" /><span><span className="block text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</span><span className="text-lg font-bold">{SITE.phoneDisplay}</span></span></a></li>
            <li><a href={mailHref} className="flex items-center gap-4 py-5 hover:text-gold"><Mail className="h-5 w-5 shrink-0 text-gold" /><span className="min-w-0"><span className="block text-xs uppercase tracking-wider text-muted-foreground">Email</span><span className="block break-all font-bold">{SITE.email}</span></span></a></li>
            <li className="flex items-center gap-4 py-5"><MapPin className="h-5 w-5 shrink-0 text-gold" /><span><span className="block text-xs uppercase tracking-wider text-muted-foreground">Address</span><span className="font-bold">{SITE.address}</span></span></li>
          </ul>
          <div className="mt-8 flex gap-3">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="border p-3 hover:border-gold hover:text-gold"><FacebookIcon /></a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="border p-3 hover:border-gold hover:text-gold"><InstagramIcon /></a>
          </div>
        </div>

        <div className="border bg-background p-6 md:p-10">
          {sent ? (
            <div className="py-10">
              <p className="eyebrow">Thank you</p>
              <h3 className="mt-3 text-2xl font-extrabold">Your enquiry is ready to send.</h3>
              <p className="mt-3 text-muted-foreground">WhatsApp has opened with your details filled in — just press send. Prefer email? Use the button below.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={waHref(buildMessage(sent))} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-whatsapp px-5 py-3 text-sm font-semibold text-navy-foreground"><WhatsAppIcon />Open WhatsApp</a>
                <a href={`${mailHref}?subject=${encodeURIComponent("Quote request: " + sent.service)}&body=${encodeURIComponent(buildMessage(sent))}`} className="inline-flex items-center gap-2 border border-navy px-5 py-3 text-sm font-semibold"><Mail className="h-4 w-4" />Send by email</a>
                <button onClick={() => setSent(null)} className="px-5 py-3 text-sm font-semibold text-muted-foreground underline">New enquiry</button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
              <L n="name" label="Full name"><input name="name" autoComplete="name" className={field} /></L>
              <L n="phone" label="Phone number"><input name="phone" type="tel" autoComplete="tel" className={field} /></L>
              <L n="email" label="Email address"><input name="email" type="email" autoComplete="email" className={field} /></L>
              <L n="service" label="Service required">
                <select name="service" defaultValue="" className={field}>
                  <option value="" disabled>Select a service</option>
                  {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                </select>
              </L>
              <div className="sm:col-span-2"><L n="location" label="Location"><input name="location" placeholder="e.g. Athlone, Cape Town" className={field} /></L></div>
              <div className="sm:col-span-2"><L n="description" label="Description of the job"><textarea name="description" rows={5} className={field} /></L></div>
              <button type="submit" className="bg-navy px-8 py-4 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep sm:col-span-2 sm:justify-self-start">Request a Quote</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
