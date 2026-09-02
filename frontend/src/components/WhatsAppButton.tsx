import { MessageCircle } from "lucide-react";
import { defaultWhatsappMessage, whatsappUrl } from "@/lib/siteData";

type WhatsAppButtonProps = { floating?: boolean; label?: string };

export default function WhatsAppButton({ floating = false, label = "WhatsApp Us" }: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl(defaultWhatsappMessage())}
      target="_blank"
      rel="noopener noreferrer"
      className={floating ? "whatsapp-float" : "inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-[#082714] shadow-lg shadow-[#25D366]/20 hover:-translate-y-0.5 hover:bg-[#1EBE57] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"}
      data-testid={floating ? "floating-whatsapp-button" : "whatsapp-button"}
      aria-label={`${label} on WhatsApp`}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {!floating && label}
      {floating && <span className="sr-only">{label}</span>}
    </a>
  );
}