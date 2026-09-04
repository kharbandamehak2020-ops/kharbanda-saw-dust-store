type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="section-eyebrow" data-testid={`section-eyebrow-${slug}`}>{eyebrow}</p>}
      <h2 className={`${eyebrow ? "mt-3" : ""} font-heading text-3xl font-bold tracking-[-0.04em] text-[#1C1917] sm:text-4xl`} data-testid={`section-title-${slug}`}>{title}</h2>
      {body && <p className="mt-4 text-base leading-7 text-[#57534E]" data-testid={`section-description-${slug}`}>{body}</p>}
    </div>
  );
}