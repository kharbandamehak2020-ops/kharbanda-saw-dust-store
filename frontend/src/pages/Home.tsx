import { ArrowRight, Check, MapPin, Phone, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import ApplicationCard from "@/components/ApplicationCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { applications, brand, defaultWhatsappMessage, faqs, gallery, productImages, products, whatsappUrl } from "@/lib/siteData";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: brand.name, slogan: brand.tagline, foundingDate: "1974", email: brand.email, telephone: brand.phones },
    { "@type": "LocalBusiness", name: `${brand.name} - Delhi Office`, telephone: brand.phones[0], address: { "@type": "PostalAddress", streetAddress: "K-11, Sawan Park, Ashok Vihar, Phase-3", addressLocality: "Delhi", postalCode: "110052", addressCountry: "IN" } },
    { "@type": "LocalBusiness", name: `${brand.name} - Yamuna Nagar Factory`, telephone: brand.phones[2], address: { "@type": "PostalAddress", streetAddress: "Plot No. 42, Industrial Estate Phase-II", addressLocality: "Yamuna Nagar", addressRegion: "Haryana", postalCode: "135001", addressCountry: "IN" } },
    { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ],
};

export default function Home() {
  return (
    <>
      <Seo title="Kharbanda Saw Dust Store | Pioneer in Wood Industry Since 1974" description="B2B wood dust processing, manufacturing and bulk supply from Delhi and Yamuna Nagar. Explore sawdust, wood powder, shavings and wooden flakes trusted since 1974." schema={organizationSchema} />
      <section className="hero-section relative overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${productImages.hero})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-[#10271d]/80" aria-hidden="true" />
        <div className="grain-overlay absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-32">
          <div className="max-w-2xl text-white">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#D7A16F]" data-testid="hero-kicker"><span className="h-px w-10 bg-[#D7A16F]" />{brand.kicker}</p>
            <h1 className="font-heading text-5xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-7xl" data-testid="hero-heading">Where wood finds <span className="text-[#D7A16F]">purpose.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/78 sm:text-xl" data-testid="hero-description">Wood dust processing, manufacturing &amp; bulk supply since 1974. Reliable material conversations for manufacturers, procurement teams and industrial buyers across India.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-testid="hero-actions">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D7A16F] px-6 py-3.5 text-sm font-bold text-[#2C190D] shadow-lg shadow-black/15 hover:-translate-y-0.5 hover:bg-[#E5B686]" data-testid="hero-quote-button">Request a Bulk Quote <ArrowRight className="size-4" aria-hidden="true" /></Link>
              <WhatsAppButton label="WhatsApp Us" />
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/60" data-testid="hero-proof-points"><span data-testid="hero-proof-established">Established 1974</span><span data-testid="hero-proof-nationwide">Nationwide B2B supply</span><span data-testid="hero-proof-species">Different wood species</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:ml-auto" data-testid="hero-brand-image-panel">
            <div className="absolute -inset-4 border border-[#D7A16F]/35" aria-hidden="true" />
            <div className="relative overflow-hidden bg-[#FBF9F5] p-3 shadow-2xl shadow-black/30">
              <img src={productImages.providedBrand} alt="Kharbanda Saw Dust Store branded product sack showing the wood product range" className="aspect-[0.8/1] w-full object-cover" data-testid="hero-brand-image" />
              <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between bg-[#183A2B]/95 px-4 py-3 text-white"><span className="text-xs font-bold uppercase tracking-[0.12em]" data-testid="hero-image-caption">The Kharbanda range</span><span className="text-[#D7A16F]" data-testid="hero-image-year">ESTD. 1974</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E0D7C6] bg-[#F4EFE6]" data-testid="trust-strip">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#E0D7C6] sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
          {["Trusted Since 1974", "Second-Generation Business", "Nationwide B2B Supply", "Multiple Wood Species", "Bulk Material Supply", "Application-Focused"].map((item, index) => <div key={item} className="flex min-h-24 items-center px-4 py-5 text-center text-xs font-bold uppercase leading-5 tracking-[0.12em] text-[#3D2314] sm:px-6" data-testid={`trust-item-${index}`}>{item}</div>)}
        </div>
      </section>

      <section className="section-shell" data-testid="home-intro-section">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 h-36 w-36 border-r border-b border-[#C68B59]" aria-hidden="true" />
            <img src={productImages.logs} alt="Timber logs ready for responsible wood processing" loading="lazy" className="relative aspect-[0.9/1] w-full object-cover" data-testid="intro-image" />
            <div className="absolute -bottom-5 left-5 bg-[#183A2B] px-5 py-4 text-white shadow-xl" data-testid="intro-stat"><span className="block font-heading text-3xl font-bold">50+</span><span className="text-xs uppercase tracking-[0.16em] text-white/65">years of trust</span></div>
          </div>
          <div>
            <SectionHeading eyebrow="A dependable material partner" title="A wood-processing business built around useful supply." body="Kharbanda Saw Dust Store works with wood dust, wood powder, wood shavings and wooden flakes for B2B buyers. From our Delhi office and Yamuna Nagar factory, we focus on practical conversations around wood species, quality, application and quantity." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Quality you can trust", "Reliable suppliers nationwide", "Committed to service & satisfaction", "All types of wood species & qualities"].map((item) => <div key={item} className="flex items-start gap-3 border-t border-[#E0D7C6] pt-4 text-sm font-semibold text-[#3D2314]" data-testid={`intro-value-${item.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}><Check className="mt-0.5 size-4 shrink-0 text-[#2D6A4F]" aria-hidden="true" />{item}</div>)}
            </div>
            <Link to="/about-us" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#183A2B] underline decoration-[#C68B59] decoration-2 underline-offset-4 hover:gap-3" data-testid="intro-about-link">Read about our business <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-[#E0D7C6] bg-white" data-testid="home-products-section">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="What we supply" title="Wood materials for serious buyers." body="Available across different wood species and qualities, subject to requirement. Specifications can be discussed according to application and buyer needs." /><Link to="/products" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#183A2B] underline decoration-[#C68B59] decoration-2 underline-offset-4" data-testid="home-products-link">View all products <ArrowRight className="size-4" aria-hidden="true" /></Link></div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>

      <section className="section-shell" data-testid="home-applications-section">
        <SectionHeading eyebrow="Where it finds purpose" title="Material conversations across industries." body="Tell us about your process and we can discuss the relevant product, wood species and quality. Suitability depends on material specifications and application requirements." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{applications.slice(0, 6).map((application) => <ApplicationCard key={application.id} application={application} />)}</div>
        <Link to="/applications" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#183A2B] underline decoration-[#C68B59] decoration-2 underline-offset-4" data-testid="home-applications-link">Explore industries we serve <ArrowRight className="size-4" aria-hidden="true" /></Link>
      </section>

      <section className="section-shell bg-[#183A2B] text-white" data-testid="home-legacy-section">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div><p className="section-eyebrow text-[#D7A16F]" data-testid="legacy-eyebrow">Our inspiration</p><h2 className="mt-3 max-w-2xl font-heading text-4xl font-bold tracking-[-0.05em] sm:text-5xl" data-testid="legacy-heading">Two generations.<br /><span className="text-[#D7A16F]">One commitment.</span></h2><p className="mt-5 max-w-xl text-base leading-7 text-white/70" data-testid="legacy-copy">Started by Mr. Radha Kishan Kharbanda in 1974, the business is now handled by his son, Mr. Ashok Kumar Kharbanda. The family story continues through material knowledge, long-term relationships and service to B2B customers.</p><Link to="/our-legacy" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D7A16F]/50 px-5 py-3 text-sm font-bold text-[#F4EFE6] hover:bg-white/10" data-testid="legacy-link">Explore our legacy <ArrowRight className="size-4" aria-hidden="true" /></Link></div>
          <div className="grid grid-cols-2 gap-4"><div className="border border-white/15 p-5" data-testid="legacy-founder-card"><span className="text-4xl font-heading font-bold text-[#D7A16F]">1974</span><p className="mt-4 text-sm leading-6 text-white/70">Founded by<br /><strong className="text-white">Mr. Radha Kishan Kharbanda</strong></p></div><div className="mt-10 border border-white/15 bg-white/5 p-5" data-testid="legacy-current-card"><Sparkles className="size-5 text-[#D7A16F]" aria-hidden="true" /><p className="mt-4 text-sm leading-6 text-white/70">Today, handled by<br /><strong className="text-white">Mr. Ashok Kumar Kharbanda</strong></p></div></div>
        </div>
      </section>

      <section className="section-shell" data-testid="home-gallery-section">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="In the field" title="A closer look at our materials." body="The branded product sack is shown prominently; the remaining supplied photographs are kept together in this gallery alongside contextual industry imagery." /><Link to="/about-us#gallery" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#183A2B] underline decoration-[#C68B59] decoration-2 underline-offset-4" data-testid="home-gallery-link">View gallery <ArrowRight className="size-4" aria-hidden="true" /></Link></div>
        <div className="mt-10 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] sm:grid-cols-4"><div className="col-span-2 row-span-2 overflow-hidden"><img src={gallery[0].image} alt={gallery[0].alt} loading="lazy" className="size-full object-cover" data-testid="home-gallery-brand-image" /></div>{gallery.slice(1, 5).map((item, index) => <div key={item.label} className={`${index === 2 ? "col-span-2" : ""} overflow-hidden bg-[#F4EFE6]`}><img src={item.image} alt={item.alt} loading="lazy" className="size-full object-cover transition duration-500 hover:scale-105" data-testid={`home-gallery-image-${index}`} /></div>)}</div>
      </section>

      <section className="section-shell border-y border-[#E0D7C6] bg-[#F4EFE6]" data-testid="home-faq-section">
        <SectionHeading eyebrow="Useful answers" title="Questions buyers often ask." body="If your application is not listed, reach out with your process and quantity. We are happy to start with a practical conversation." />
        <div className="mt-10 grid gap-4 md:grid-cols-2">{faqs.slice(0, 4).map((faq) => <details key={faq.question} className="group border border-[#E0D7C6] bg-[#FBF9F5] p-5" data-testid={`faq-${faq.question.toLowerCase().slice(0, 20).replaceAll(" ", "-")}`}><summary className="cursor-pointer list-none pr-6 text-sm font-bold text-[#1C1917] marker:hidden" data-testid="faq-question">{faq.question}<span className="float-right text-[#2D6A4F] transition group-open:rotate-45" aria-hidden="true">+</span></summary><p className="pt-4 text-sm leading-6 text-[#57534E]" data-testid="faq-answer">{faq.answer}</p></details>)}</div>
      </section>

      <section className="section-shell" data-testid="home-locations-section">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"><SectionHeading eyebrow="Find us in Delhi & Haryana" title="Two locations. Nationwide reach." body="Important business information is always available as text so buyers and search engines can find us easily." /><div className="flex flex-wrap gap-3 lg:justify-end"><a href={whatsappUrl(defaultWhatsappMessage())} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-[#082714]" data-testid="home-location-whatsapp">WhatsApp our team</a><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#183A2B] px-5 py-3 text-sm font-bold text-white" data-testid="home-location-contact">Contact & directions <ArrowRight className="size-4" aria-hidden="true" /></Link></div></div>
        <div className="mt-10 grid gap-6 md:grid-cols-2"><div className="border border-[#E0D7C6] bg-white p-6" data-testid="home-office-location"><MapPin className="size-5 text-[#2D6A4F]" aria-hidden="true" /><h3 className="mt-5 font-heading text-xl font-bold" data-testid="home-office-heading">Delhi Office</h3><p className="mt-2 text-sm leading-6 text-[#57534E]" data-testid="home-office-address">{brand.office}</p><a href="https://www.google.com/maps/search/?api=1&query=K-11%20Sawan%20Park%20Ashok%20Vihar%20Delhi%20110052" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#183A2B]" data-testid="home-office-directions">Get directions <ArrowRight className="size-4" aria-hidden="true" /></a></div><div className="border border-[#E0D7C6] bg-white p-6" data-testid="home-factory-location"><Truck className="size-5 text-[#2D6A4F]" aria-hidden="true" /><h3 className="mt-5 font-heading text-xl font-bold" data-testid="home-factory-heading">Yamuna Nagar Factory</h3><p className="mt-2 text-sm leading-6 text-[#57534E]" data-testid="home-factory-address">{brand.factory}</p><a href="https://www.google.com/maps/search/?api=1&query=Plot%20No.%2042%20Industrial%20Estate%20Phase-II%20Yamuna%20Nagar%20Haryana%20135001" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#183A2B]" data-testid="home-factory-directions">Get directions <ArrowRight className="size-4" aria-hidden="true" /></a></div></div>
      </section>

      <section className="cta-band" data-testid="home-cta-section"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8"><div><ShieldCheck className="size-7 text-[#D7A16F]" aria-hidden="true" /><h2 className="mt-5 max-w-xl font-heading text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl" data-testid="home-cta-heading">Have a material requirement to discuss?</h2><p className="mt-3 text-sm leading-6 text-white/65" data-testid="home-cta-copy">Share your product, quantity, location and intended application with our team.</p></div><Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#D7A16F] px-6 py-3.5 text-sm font-bold text-[#2C190D] hover:bg-[#E5B686]" data-testid="home-cta-button">Talk to our team <ArrowRight className="size-4" aria-hidden="true" /></Link></div></section>
      <a href={`tel:${brand.phones[0].replaceAll(" ", "")}`} className="sr-only" data-testid="home-phone-link"><Phone aria-hidden="true" /> Call</a>
    </>
  );
}