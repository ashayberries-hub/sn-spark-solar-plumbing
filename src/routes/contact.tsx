import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/Sections";
import { ContactSection } from "@/components/site/ContactForm";

const T = "Contact SN Electrical and Plumbing — Free Quotes in Athlone";
const D = "Call 068 219 4245, WhatsApp or send an enquiry for electrical, plumbing and solar services in Athlone and surrounding areas.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Get in touch" title="Let's talk about your job." text="Send an enquiry, call or WhatsApp us for a free, no-obligation quote." />
      <ContactSection />
    </SiteLayout>
  ),
});
