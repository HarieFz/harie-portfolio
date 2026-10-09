import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface NextProjectProps {
  project: {
    slug: string;
    title: string;
    category: string;
    year: string;
  };
  number: number;
}

export default function NextProject({ project, number }: Readonly<NextProjectProps>) {
  return (
    <section
      aria-labelledby="next-project-title"
      className="relative overflow-hidden bg-olive-dark px-6 pb-8 pt-16 text-[#F6F2E9] sm:px-10 lg:px-14 lg:pb-10 lg:pt-20"
    >
      <div className="mx-auto max-w-350">
        {/* Section Header */}
        <div className="mb-10 flex items-center justify-between border-b border-white/20 pb-5 lg:mb-14">
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/75">06 / Up Next</p>

          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-white/75">
            Project {String(number).padStart(2, "0")}
          </span>
        </div>

        {/* Next Project Link */}
        <Link href={`/projects/${project.slug}`} aria-labelledby="next-project-title" className="group block">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="min-w-0">
              <p className="font-body mb-5 text-[10px] uppercase tracking-[0.18em] text-[#B5BDA0]">
                Continue Exploring
              </p>

              <h2
                id="next-project-title"
                className="font-display max-w-6xl text-[clamp(2.75rem,6vw,6.5rem)] leading-[0.95] tracking-[-0.055em] transition-colors duration-300 group-hover:text-[#B5BDA0]"
              >
                {project.title}
                <span className="text-[#B5BDA0]">.</span>
              </h2>
            </div>

            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#B5BDA0] group-hover:bg-[#B5BDA0] group-hover:text-olive-dark lg:size-16">
              <ArrowUpRight size={23} strokeWidth={1.3} aria-hidden="true" />
            </span>
          </div>

          {/* Project Metadata */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-6 lg:mt-12">
            <p className="font-body text-xs text-white/75">{project.category}</p>

            <span className="font-body text-xs text-white/75">{project.year}</span>
          </div>
        </Link>

        {/* Bottom Navigation */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 lg:mt-10">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-3 font-body text-xs text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={17}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            All Projects
          </Link>

          <Link
            href="/"
            className="font-display text-3xl font-semibold tracking-[-0.06em] text-[#F6F2E9]"
            aria-label="Harie — Home"
          >
            Harie<span className="text-[#B5BDA0]">.</span>
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-6 lg:mt-10">
          <p className="font-body text-[10px] uppercase tracking-[0.14em] text-white/70">
            © 2026 Harie. All Rights Reserved.
          </p>

          <p className="font-body text-[10px] uppercase tracking-[0.14em] text-white/70">Made with Intention</p>
        </div>
      </div>
    </section>
  );
}
