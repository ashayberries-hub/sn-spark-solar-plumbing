import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { SITE, telHref, mailHref, waHref } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/electrical", label: "Electrical" },
  { to: "/plumbing", label: "Plumbing" },
  { to: "/solar", label: "Solar" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex flex-col leading-none">
      <span className={`text-[15px] font-extrabold tracking-[0.14em] ${light ? "text-navy-foreground" : "text-navy"}`}>
        SN ELECTRICAL <span className="text-gold">&</span> PLUMBING
      </span>
    </Link>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V14h2.7v8h3.1z" />
    </svg>
  );
}
export function InstagramIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
export function WhatsAppIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4.9 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep sm:inline-block">
            Get a Quote
          </Link>
          <button onClick={() => setOpen(!open)} className="p-2 text-navy lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t bg-background px-5 pb-6 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b py-4 text-base font-medium text-navy">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-5 block bg-navy py-4 text-center font-semibold text-navy-foreground">
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-muted">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed">Electrical, plumbing and solar services for homes and businesses in Athlone and surrounding areas.</p>
          <div className="mt-6 flex gap-3">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="border border-navy-line p-2.5 text-navy-foreground transition-colors hover:border-gold hover:text-gold"><FacebookIcon /></a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="border border-navy-line p-2.5 text-navy-foreground transition-colors hover:border-gold hover:text-gold"><InstagramIcon /></a>
          </div>
        </div>
        <div>
          <h4 className="eyebrow">Services</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/electrical" className="hover:text-navy-foreground">Electrical</Link></li>
            <li><Link to="/solar" className="hover:text-navy-foreground">Solar & Backup</Link></li>
            <li><Link to="/plumbing" className="hover:text-navy-foreground">Plumbing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={telHref} className="flex items-center gap-2 hover:text-navy-foreground"><Phone className="h-4 w-4" />{SITE.phoneDisplay}</a></li>
            <li><a href={waHref()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-navy-foreground"><WhatsAppIcon />WhatsApp</a></li>
            <li><a href={mailHref} className="flex items-center gap-2 break-all hover:text-navy-foreground"><Mail className="h-4 w-4 shrink-0" />{SITE.email}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow">Address</h4>
          <p className="mt-5 flex gap-2 text-sm"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />{SITE.address}</p>
        </div>
      </div>
      <div className="border-t border-navy-line">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs lg:px-8">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <a
        href={waHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-whatsapp p-3.5 text-navy-foreground shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
