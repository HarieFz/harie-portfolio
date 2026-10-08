import Image from "next/image";

interface ProjectMockupProps {
  name: string;
  image: string;
  type?: "browser" | "phone";
  priority?: boolean;
  className?: string;
}

export default function ProjectMockup({
  name,
  image,
  type = "browser",
  priority = false,
  className = "",
}: Readonly<ProjectMockupProps>) {
  if (type === "phone") {
    return (
      <div
        className={`rounded-[1.6rem] border-[5px] border-[#171914] bg-[#171914] p-0.5 shadow-[0_24px_55px_-12px_rgba(0,0,0,0.5)] ${className}`}
      >
        <div className="relative aspect-9/19.5 overflow-hidden rounded-[1.15rem] bg-white">
          <Image
            src={image}
            alt={`${name} mobile application`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 35vw, 16vw"
            className="object-cover object-top"
          />

          <div className="absolute left-1/2 top-1.5 h-2 w-14 -translate-x-1/2 rounded-full bg-[#171914]" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-xl border border-[#D8D3C7] bg-[#F5F2EA] shadow-[0_24px_65px_-18px_rgba(0,0,0,0.45),0_8px_24px_-8px_rgba(0,0,0,0.2)] ${className}`}
    >
      <div className="flex h-7 items-center justify-between border-b border-black/10 px-3">
        <div className="flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-[#D78B7E]" />
          <span className="size-1.5 rounded-full bg-[#D9BA77]" />
          <span className="size-1.5 rounded-full bg-[#8FA58A]" />
        </div>

        <span className="font-body text-[10px] text-black/40">{name}</span>

        <div className="w-5" />
      </div>

      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={image}
          alt={`${name} website screenshot`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 80vw, 60vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
