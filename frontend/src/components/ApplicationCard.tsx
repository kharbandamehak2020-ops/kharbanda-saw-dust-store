import type { applications } from "@/lib/siteData";

type Application = (typeof applications)[number];

export default function ApplicationCard({ application }: { application: Application }) {
  return (
    <article className="depth-surface group flex min-h-[18rem] flex-col overflow-hidden border border-[#E0D7C6] bg-white" data-testid={`application-card-${application.id}`}>
      <div className="relative h-40 overflow-hidden bg-[#F4EFE6]">
        <img src={application.image} alt={`${application.name} industrial application`} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" data-testid={`application-image-${application.id}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#183A2B]/65 to-transparent" />
        <p className="absolute bottom-4 left-5 right-4 font-heading text-lg font-bold leading-tight text-white" data-testid={`application-name-${application.id}`}>{application.name}</p>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-6 text-[#57534E]" data-testid={`application-description-${application.id}`}>{application.description}</p>
      </div>
    </article>
  );
}