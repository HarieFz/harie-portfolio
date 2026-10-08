import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Asterisk } from "lucide-react";

import { projects, type Project } from "@/data/projects";

interface ProjectItemProps {
  project: Project;
  index: number;
}

type PreviewType = "mobile" | "desktop" | "invitation";

interface ProjectLayout {
  type: PreviewType;
  background: string;
}

const projectLayouts: ProjectLayout[] = [
  {
    type: "invitation",
    background: "bg-[#DDD3C9]",
  },
  {
    type: "mobile",
    background: "bg-[#E0E3D8]",
  },
  {
    type: "mobile",
    background: "bg-[#DCE2DD]",
  },
  {
    type: "desktop",
    background: "bg-[#D9DCD3]",
  },
  {
    type: "desktop",
    background: "bg-[#DDD9D3]",
  },
  {
    type: "desktop",
    background: "bg-[#D8DCD9]",
  },
];

function ProjectItem({ project, index }: Readonly<ProjectItemProps>) {
  const layout = projectLayouts[index] ?? projectLayouts[0];

  const isMobile = layout.type === "mobile";
  const isInvitation = layout.type === "invitation";

  return (
    <article className="group min-w-0">
      <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`} className="block">
        {/* Project Frame */}
        <div
          className={`relative flex aspect-5/6 items-center justify-center overflow-hidden rounded-2xl ${layout.background}`}
        >
          {/* Decorative Label */}
          <span className="font-manrope absolute top-5 left-5 z-10 text-[10px] uppercase tracking-[0.16em] text-[#535B43]/70 sm:top-6 sm:left-6">
            Harie / Selected Works
          </span>

          {/* Project Screenshot */}
          <div
            className={`relative z-10 overflow-hidden rounded-md shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-transform duration-700 ease-out group-hover:-translate-y-2 ${
              isMobile ? "aspect-9/16 w-[54%]" : isInvitation ? "aspect-3/4 w-[65%]" : "aspect-16/10 w-[88%]"
            }`}
          >
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 40vw, 80vw"
              className="object-cover object-top"
            />
          </div>

          {/* Decorative Bottom Label */}
          <span className="font-manrope absolute bottom-5 right-5 text-[10px] uppercase tracking-[0.14em] text-[#535B43]/60 sm:bottom-6 sm:right-6">
            Project {String(index + 1).padStart(2, "0")}
          </span>

          {/* Hover Arrow */}
          <div className="absolute top-5 right-5 z-20 flex size-9 items-center justify-center rounded-full border border-[#535B43]/20 bg-[#F6F2E9] text-[#222819] transition-transform duration-300 group-hover:rotate-45 sm:top-6 sm:right-6">
            <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
          </div>
        </div>

        {/* Project Information */}
        <div className="mt-5 border-t border-[#222819]/15 pt-4">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="font-manrope text-[10px] uppercase tracking-[0.14em] text-[#535B43]">{project.category}</p>

            <span className="font-manrope shrink-0 text-[10px] text-[#535B43]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="font-display text-[clamp(2rem,3vw,3.5rem)] leading-[1.05] tracking-[-0.045em]">
            {project.title}
          </h3>

          <p className="font-manrope mt-3 text-xs text-[#222819]/60">{project.year}</p>
        </div>
      </Link>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-[#E9E5DC] px-6 py-20 text-[#222819] sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-400">
        {/* Section Header */}
        <div className="mb-14 flex items-center justify-between border-b border-[#222819]/15 pb-5 lg:mb-20">
          <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-[#535B43]">04 / Selected Works</p>

          <Asterisk size={24} strokeWidth={1.2} aria-hidden="true" />
        </div>

        {/* Heading */}
        <div className="mb-16 max-w-5xl lg:mb-24">
          <h2
            id="projects-title"
            className="font-display text-[clamp(3.5rem,7vw,8rem)] leading-[0.95] tracking-[-0.055em]"
          >
            A selection of
            <br />
            <span className="italic text-[#737B58]">things I&apos;ve built.</span>
          </h2>

          <p className="font-manrope mt-8 max-w-md text-sm leading-7 text-[#222819]/70 sm:text-base">
            A collection of selected projects spanning digital products, financial technology, developer tools, and
            enterprise platforms.
          </p>
        </div>

        {/* Asymmetric Project Grid */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 items-start gap-x-12 gap-y-16 sm:grid-cols-2 sm:gap-y-24 lg:gap-x-20 lg:gap-y-32">
            {projects.map((project, index) => (
              <div key={project.id} className={index % 2 === 1 ? "sm:translate-y-12 lg:translate-y-20" : ""}>
                <ProjectItem project={project} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Section Footer */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#222819]/15 pt-5 sm:mt-40 lg:mt-52">
          <p className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#535B43]">
            A Collection of Selected Projects
          </p>

          <div className="flex items-center gap-4">
            <span className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#535B43]">2024 — Present</span>

            <ArrowDownRight size={20} strokeWidth={1.2} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
