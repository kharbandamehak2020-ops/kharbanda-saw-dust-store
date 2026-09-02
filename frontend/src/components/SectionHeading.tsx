type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="section-eyebrow" data-testid="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.04em] text-[#1C1917] sm:text-4xl" data-testid="section-title">{title}</h2>
      {body && <p className="mt-4 text-base leading-7 text-[#57534E]" data-testid="section-description">{body}</p>}
    </div>
  );
}