import { useState } from "react";
import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import LogoMark from "@/components/LogoMark";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brand } from "@/lib/siteData";

const navItems = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Products", "/products"],
  ["Applications", "/applications"],
  ["Our Legacy", "/our-legacy"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
] as const;

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917]" data-testid="site-shell">
      <div className="bg-[#183A2B] px-4 py-2 text-center text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#F4EFE6]" data-testid="top-slogan">Pioneer in Wood Industry <span className="mx-2 text-[#C68B59]">•</span> Trusted since 1974</div>
      <header className="sticky top-0 z-40 border-b border-[#E0D7C6]/80 bg-[#FBF9F5]/95 backdrop-blur-md" data-testid="site-header">
        <div className="mx-auto flex h-[4.8rem] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Kharbanda Saw Dust Store home" data-testid="header-home-link"><LogoMark /></Link>
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation" data-testid="desktop-navigation">
            {navItems.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`} data-testid={`nav-link-${label.toLowerCase().replaceAll(" ", "-")}`}>{label}</NavLink>)}
          </nav>
          <div className="hidden items-center gap-3 xl:flex">
            <a href={`tel:${brand.phones[0].replaceAll(" ", "")}`} className="hidden items-center gap-2 text-xs font-bold text-[#57534E] 2xl:flex" data-testid="header-phone-link"><Phone className="size-3.5 text-[#2D6A4F]" aria-hidden="true" /> {brand.phones[0]}</a>
            <Link to="/contact" className="rounded-full bg-[#183A2B] px-4 py-2.5 text-xs font-bold text-white hover:-translate-y-0.5 hover:bg-[#2D6A4F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183A2B]" data-testid="header-quote-button">Request a Bulk Quote</Link>
          </div>
          <button type="button" className="flex size-11 items-center justify-center border border-[#E0D7C6] xl:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} data-testid="mobile-menu-toggle">
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-[#E0D7C6] bg-[#FBF9F5] px-5 py-4 xl:hidden" aria-label="Mobile navigation" data-testid="mobile-navigation">
          {navItems.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setMenuOpen(false)} className={({ isActive }) => `block border-b border-[#E0D7C6]/70 py-3 text-sm font-semibold ${isActive ? "text-[#2D6A4F]" : "text-[#1C1917]"}`} data-testid={`mobile-nav-link-${label.toLowerCase().replaceAll(" ", "-")}`}>{label}</NavLink>)}
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="mt-4 block rounded-full bg-[#183A2B] px-4 py-3 text-center text-sm font-bold text-white" data-testid="mobile-quote-button">Request a Bulk Quote</Link>
        </nav>}
      </header>
      <main>{children}</main>
      <footer className="bg-[#183A2B] text-[#F4EFE6]" data-testid="site-footer">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] lg:px-8">
          <div>
            <LogoMark />
            <p className="mt-5 max-w-xs text-sm leading-6 text-[#F4EFE6]/70" data-testid="footer-intro">{brand.tagline}. A family-owned wood dust processing and B2B supply business serving India since 1974.</p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#C68B59]" data-testid="footer-trust">Two Generations. One Commitment.</p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C68B59]" data-testid="footer-links-heading">Explore</h2>
            <div className="mt-5 grid gap-3 text-sm text-[#F4EFE6]/75">{navItems.slice(1).map(([label, path]) => <Link key={path} to={path} className="hover:text-white" data-testid={`footer-link-${label.toLowerCase().replaceAll(" ", "-")}`}>{label}</Link>)}</div>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C68B59]" data-testid="footer-locations-heading">Our locations</h2>
            <div className="mt-5 space-y-5 text-sm leading-6 text-[#F4EFE6]/75">
              <p data-testid="footer-office-address"><strong className="block text-white">Delhi Office</strong>{brand.office}</p>
              <p data-testid="footer-factory-address"><strong className="block text-white">Yamuna Nagar Factory</strong>{brand.factory}</p>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C68B59]" data-testid="footer-contact-heading">Talk to our team</h2>
            <div className="mt-5 grid gap-3 text-sm text-[#F4EFE6]/75">
              {brand.phones.map((phone) => <a key={phone} href={`tel:${phone.replaceAll(" ", "")}`} className="hover:text-white" data-testid={`footer-phone-${phone.replaceAll("+91 ", "")}`}>{phone}</a>)}
              <a href={`mailto:${brand.email}`} className="break-all hover:text-white" data-testid="footer-email">{brand.email}</a>
              <WhatsAppButton label="WhatsApp Us" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-[#F4EFE6]/50" data-testid="footer-copyright">© {new Date().getFullYear()} Kharbanda Saw Dust Store. All rights reserved.</div>
      </footer>
      <WhatsAppButton floating />
    </div>
  );
}