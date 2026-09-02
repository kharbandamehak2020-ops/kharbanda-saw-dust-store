import { TreePine } from "lucide-react";

type LogoMarkProps = { compact?: boolean };

export default function LogoMark({ compact = false }: LogoMarkProps) {
  return (
    <span className={`flex items-center gap-2 ${compact ? "" : "gap-3"}`} data-testid="brand-logo">
      <span className="relative flex size-10 items-center justify-center rounded-full border border-[#C68B59] bg-[#F4EFE6] text-[#3D2314] shadow-sm" aria-hidden="true">
        <TreePine className="absolute -left-1 bottom-1 size-5 text-[#2D6A4F]" strokeWidth={2.5} />
        <span className="font-heading text-2xl font-black italic leading-none">K</span>
        <span className="absolute right-1 top-1 size-2 rounded-full border border-[#6B4226]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-current" data-testid="brand-name">Kharbanda</span>
        {!compact && <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-current/60" data-testid="brand-category">Saw Dust Store</span>}
      </span>
    </span>
  );
}