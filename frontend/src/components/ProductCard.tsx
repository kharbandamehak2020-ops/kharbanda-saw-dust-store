import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import type { products } from "@/lib/siteData";

type Product = (typeof products)[number];

type ProductCardProps = {
  product: Product;
  layout?: "card" | "row";
  reversed?: boolean;
  position?: number;
};

export default function ProductCard({ product, layout = "card", reversed = false, position }: ProductCardProps) {
  const isRow = layout === "row";
  return (
    <article id={product.id} className={`depth-surface group overflow-hidden border border-[#E0D7C6] bg-white ${isRow ? "grid lg:grid-cols-2" : ""}`} data-testid={`product-card-${product.id}`}>
      <div className={`relative overflow-hidden bg-[#F4EFE6] ${isRow ? `min-h-72 lg:min-h-[27rem] ${reversed ? "lg:order-2" : ""}` : "aspect-[1.3/1]"}`}>
        <img src={product.image} alt={product.alt} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" data-testid={`product-image-${product.id}`} />
        <span className="absolute left-4 top-4 bg-[#FBF9F5]/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#183A2B]" data-testid={`product-eyebrow-${product.id}`}>{product.eyebrow}</span>
      </div>
      <div className={`${isRow ? `flex flex-col justify-center p-8 sm:p-10 lg:p-14 ${reversed ? "lg:order-1" : ""}` : "p-6 sm:p-7"}`}>
        {isRow && position && <span className="font-heading text-sm font-bold tracking-[0.16em] text-[#C68B59]" data-testid={`product-position-${product.id}`}>0{position}</span>}
        <h3 className={`font-heading font-bold tracking-[-0.03em] text-[#1C1917] ${isRow ? "mt-4 text-3xl sm:text-4xl" : "text-2xl"}`} data-testid={`product-name-${product.id}`}>{product.name}</h3>
        <p className={`${isRow ? "mt-5 max-w-xl text-base leading-7" : "mt-3 text-sm leading-6"} text-[#57534E]`} data-testid={`product-description-${product.id}`}>{product.description}</p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label={`Typical applications for ${product.name}`}>
          {product.uses.map((use) => <span key={use} className="inline-flex items-center gap-1.5 border border-[#E0D7C6] px-2.5 py-1 text-xs font-medium text-[#3D2314]" data-testid={`product-use-${product.id}-${use.toLowerCase().replaceAll(" ", "-")}`}><Check className="size-3 text-[#2D6A4F]" aria-hidden="true" />{use}</span>)}
        </div>
        <Link to={`/contact?product=${product.id}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#183A2B] underline decoration-[#C68B59] decoration-2 underline-offset-4 hover:gap-3" data-testid={`product-quote-link-${product.id}`}>Request a quote <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
      </div>
    </article>
  );
}