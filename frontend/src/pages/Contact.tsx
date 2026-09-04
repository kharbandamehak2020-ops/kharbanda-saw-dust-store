import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, CheckCircle2, Factory, Mail, MapPin, Phone } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Seo from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
import { brand, products, whatsappUrl } from "@/lib/siteData";

type Enquiry = {
  name: string;
  company: string;
  phone: string;
  location: string;
  quantity: string;
  application: string;
  message: string;
};

const emptyEnquiry: Enquiry = {
  name: "",
  company: "",
  phone: "",
  location: "",
  quantity: "",
  application: "",
  message: "",
};

export default function Contact() {
  const [params] = useSearchParams();
  const selectedProduct = products.find((product) => product.id === params.get("product"));
  const [form, setForm] = useState<Enquiry>({
    ...emptyEnquiry,
    message: selectedProduct ? `I am interested in ${selectedProduct.name}.` : "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hello Kharbanda Saw Dust Store, I would like to request a quote.\n\nName: ${form.name}\nCompany: ${form.company}\nPhone / WhatsApp: ${form.phone}\nLocation: ${form.location}\nRequired quantity: ${form.quantity}\nIntended application: ${form.application}\nMessage: ${form.message}`;
    setSubmitted(true);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Seo title="Contact Kharbanda Saw Dust Store | Request a Quote" description="Request a quote for sawdust, wood powder, wood shavings or wooden flakes. Contact Kharbanda Saw Dust Store by phone, email or WhatsApp from Delhi and Yamuna Nagar." />
      <section className="page-hero" data-testid="contact-hero">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="section-eyebrow text-white" data-testid="contact-eyebrow">Start a conversation</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold tracking-[-0.06em] text-white sm:text-6xl" data-testid="contact-heading">Contact us &amp; request an industrial quote.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70" data-testid="contact-description">Looking for sawdust, wood powder, wood shavings or wooden flakes? Tell us what you need and we will open a WhatsApp enquiry with the details.</p>
        </div>
      </section>

      <section className="section-shell" data-testid="contact-form-section">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="Request a quote" title="Let's discuss your requirement." body="The form prepares a WhatsApp message for the Kharbanda team. No email is sent automatically from this website." />
            <form onSubmit={submitEnquiry} className="mt-9 grid gap-5 sm:grid-cols-2" data-testid="enquiry-form">
              <div><label htmlFor="name" className="form-label" data-testid="label-name">Name</label><input id="name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="form-input" placeholder="Your name" data-testid="enquiry-name-input" /></div>
              <div><label htmlFor="company" className="form-label" data-testid="label-company">Company</label><input id="company" required value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} className="form-input" placeholder="Company name" data-testid="enquiry-company-input" /></div>
              <div><label htmlFor="phone" className="form-label" data-testid="label-phone">Phone / WhatsApp</label><input id="phone" type="tel" required value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className="form-input" placeholder="+91 ..." data-testid="enquiry-phone-input" /></div>
              <div><label htmlFor="location" className="form-label" data-testid="label-location">Location</label><input id="location" required value={form.location} onChange={(event) => setForm({ ...form, location: event.target.value })} className="form-input" placeholder="City / state" data-testid="enquiry-location-input" /></div>
              <div><label htmlFor="quantity" className="form-label" data-testid="label-quantity">Required quantity</label><input id="quantity" required value={form.quantity} onChange={(event) => setForm({ ...form, quantity: event.target.value })} className="form-input" placeholder="Tell us the expected quantity" data-testid="enquiry-quantity-input" /></div>
              <div><label htmlFor="application" className="form-label" data-testid="label-application">Intended application</label><input id="application" required value={form.application} onChange={(event) => setForm({ ...form, application: event.target.value })} className="form-input" placeholder="Briquettes, WPCS, flooring..." data-testid="enquiry-application-input" /></div>
              <div className="sm:col-span-2"><label htmlFor="message" className="form-label" data-testid="label-message">Message</label><textarea id="message" rows={5} required value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="form-input resize-y" placeholder="Tell us about the material you need" data-testid="enquiry-message-input" /></div>
              <div className="sm:col-span-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#183A2B] px-6 py-3.5 text-sm font-bold text-white hover:-translate-y-0.5 hover:bg-[#2D6A4F]" data-testid="enquiry-submit-button">Submit Enquiry <ArrowRight className="size-4" aria-hidden="true" /></button>
                <p className="text-xs leading-5 text-[#57534E]" data-testid="enquiry-form-note">You will be taken to WhatsApp with your enquiry details.</p>
              </div>
              {submitted && <div className="sm:col-span-2 flex items-start gap-3 border border-[#B7D9C6] bg-[#E8F0EC] p-4 text-sm text-[#183A2B]" role="status" data-testid="enquiry-success-message"><CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" /><span>Enquiry prepared. WhatsApp should open in a new tab with your details ready to send.</span></div>}
            </form>
          </div>

          <aside className="lg:pl-8" data-testid="contact-details-panel">
            <div className="border border-[#E0D7C6] bg-[#F4EFE6] p-7">
              <p className="section-eyebrow" data-testid="contact-details-eyebrow">Direct contact</p>
              <h2 className="mt-3 font-heading text-2xl font-bold" data-testid="contact-details-heading">Speak with the team directly.</h2>
              <div className="mt-7 grid gap-5">
                <div className="flex items-start gap-3"><Phone className="mt-1 size-4 text-[#2D6A4F]" aria-hidden="true" /><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#57534E]" data-testid="contact-phone-label">Phone</p>{brand.phones.map((phone) => <a key={phone} href={`tel:${phone.replaceAll(" ", "")}`} className="mt-1 block text-sm font-semibold text-[#183A2B]" data-testid={`contact-phone-${phone.replaceAll("+91 ", "")}`}>{phone}</a>)}</div></div>
                <div className="flex items-start gap-3"><Mail className="mt-1 size-4 text-[#2D6A4F]" aria-hidden="true" /><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#57534E]" data-testid="contact-email-label">Email</p><a href={`mailto:${brand.email}`} className="mt-1 block break-all text-sm font-semibold text-[#183A2B]" data-testid="contact-email">{brand.email}</a></div></div>
                <div className="flex items-start gap-3"><MapPin className="mt-1 size-4 text-[#2D6A4F]" aria-hidden="true" /><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#57534E]" data-testid="contact-office-label">Delhi Office</p><p className="mt-1 text-sm leading-6 text-[#57534E]" data-testid="contact-office-address">{brand.office}</p></div></div>
                <div className="flex items-start gap-3"><Factory className="mt-1 size-4 text-[#2D6A4F]" aria-hidden="true" /><div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#57534E]" data-testid="contact-factory-label">Yamuna Nagar Factory</p><p className="mt-1 text-sm leading-6 text-[#57534E]" data-testid="contact-factory-address">{brand.factory}</p></div></div>
              </div>
              <a href={whatsappUrl("Hello Kharbanda Saw Dust Store, I would like to enquire about an order.")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-[#082714]" data-testid="contact-whatsapp-button">WhatsApp an enquiry <ArrowRight className="size-4" aria-hidden="true" /></a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-shell border-y border-[#E0D7C6] bg-[#F4EFE6]" data-testid="contact-maps-section">
        <SectionHeading eyebrow="Visit or get directions" title="Our office and factory locations." body="Select either vibrant map or use the direct location link below it. The business addresses remain shown as crawlable text." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden border border-[#E0D7C6] bg-white" data-testid="delhi-map-card">
            <iframe title="Map showing Kharbanda Saw Dust Store in Sawan Park, Ashok Vihar" src="https://www.google.com/maps?q=Kharbanda%20Saw%20Dust%20Store%2C%20Sawan%20Park%2C%20Ashok%20Vihar%2C%20Delhi&output=embed" loading="lazy" allowFullScreen className="h-64 w-full border-0" data-testid="delhi-map-iframe" />
            <div className="flex items-center justify-between gap-4 p-5"><p className="text-sm font-bold" data-testid="delhi-map-address">Delhi Office · K-11, Sawan Park, Ashok Vihar - Phase 3, Delhi - 110052, Near Picnic Hut</p><a href="https://www.google.com/maps/search/?api=1&query=Kharbanda%20Saw%20Dust%20Store%2C%20Sawan%20Park%2C%20Ashok%20Vihar%2C%20Delhi" target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full bg-[#183A2B] px-4 py-2 text-xs font-bold text-white" data-testid="delhi-map-directions">Open pinned location</a></div>
          </div>
          <div className="overflow-hidden border border-[#E0D7C6] bg-white" data-testid="yamuna-map-card">
            <iframe title="Map showing Satnam Industries in Industrial Area, Yamuna Nagar" src="https://www.google.com/maps?q=Satnam%20Industries%2C%20Industrial%20Area%2C%20Yamuna%20Nagar%2C%20Haryana&output=embed" loading="lazy" allowFullScreen className="h-64 w-full border-0" data-testid="yamuna-map-iframe" />
            <div className="flex items-center justify-between gap-4 p-5"><p className="text-sm font-bold" data-testid="yamuna-map-address">Yamuna Nagar Factory · Plot No. 42, Industrial Estate Phase-II, Yamuna Nagar - 135001 (Haryana)</p><a href="https://www.google.com/maps/search/?api=1&query=Satnam%20Industries%2C%20Industrial%20Area%2C%20Yamuna%20Nagar%2C%20Haryana" target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full bg-[#183A2B] px-4 py-2 text-xs font-bold text-white" data-testid="yamuna-map-directions">Open pinned location</a></div>
          </div>
        </div>
      </section>
    </>
  );
}