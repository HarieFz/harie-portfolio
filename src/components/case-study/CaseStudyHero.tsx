import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import CaseStudyEntrance from "@/components/ui/CaseStudyEntrance";
import type { CaseStudyType } from "@/data/projects";

interface CaseStudyHeroProps {
  title: string;
  category: string;
  description: string;
  year: string;
  role: string;
  image: string;
  liveUrl?: string;
  caseStudyType?: CaseStudyType;
}

export default function CaseStudyHero({
  title,
  category,
  description,
  year,
  role,
  image,
  liveUrl,
  caseStudyType = "visual",
}: Readonly<CaseStudyHeroProps>) {
  const isTechnical = caseStudyType === "technical";

  return (
    <CaseStudyEntrance>
      <section className="overflow-hidden bg-[#F6F2E9] px-6 pb-20 pt-36 sm:px-10 lg:px-14 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-350">
          {/* Header */}
          <div
            data-case-header
            className="mb-12 flex items-center justify-between border-b border-black/15 pb-5 lg:mb-16"
          >
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">Selected Work / Case Study</p>

            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-black/50">{year}</span>
          </div>

          {/* Project Information */}
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
            <div>
              <p data-case-category className="font-body mb-6 text-[10px] uppercase tracking-[0.2em] text-olive">
                {category}
              </p>

              <h1
                data-case-title
                className="font-display max-w-5xl text-[clamp(3.5rem,7.5vw,8rem)] leading-[0.9] tracking-[-0.055em] text-charcoal"
              >
                {title}
                <span className="text-olive">.</span>
              </h1>
            </div>

            <div className="lg:pb-2">
              <p data-case-description className="font-body max-w-md text-sm leading-7 text-black/65">
                {description}
              </p>
            </div>
          </div>

          {/* Metadata & Live Website */}
          <div className="mt-12 flex flex-col gap-8 border-t border-black/15 pt-6 sm:flex-row sm:items-end sm:justify-between lg:mt-16">
            <div className="grid grid-cols-2 gap-6 sm:flex sm:gap-20">
              <div data-case-meta>
                <p className="font-body mb-2 text-[10px] uppercase tracking-[0.18em] text-black/45">Role</p>
                <p className="font-body text-xs text-charcoal">{role}</p>
              </div>

              <div data-case-meta>
                <p className="font-body mb-2 text-[10px] uppercase tracking-[0.18em] text-black/45">Year</p>
                <p className="font-body text-xs text-charcoal">{year}</p>
              </div>
            </div>

            {liveUrl && (
              <div data-case-meta>
                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${title} live website (opens in a new tab)`}
                  className="group inline-flex items-center gap-5 border-b border-charcoal/40 pb-2 transition-colors duration-300 hover:border-olive"
                >
                  <span className="font-body text-xs font-medium text-charcoal transition-colors duration-300 group-hover:text-olive">
                    Visit Live Website
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-charcoal transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-olive"
                  />
                </Link>
              </div>
            )}
          </div>

          {/* Project Visual */}
          {isTechnical ? (
            <div
              data-case-visual
              className="relative mt-14 flex min-h-72 flex-col justify-between overflow-hidden rounded-sm bg-[#97AB83] p-8 text-cream sm:min-h-96 sm:p-12 lg:mt-20 lg:min-h-112 lg:p-16"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/70">Harie / Selected Work</p>

                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/70">{year}</p>
              </div>

              <div className="py-12">
                <p className="font-body mb-5 text-[10px] uppercase tracking-[0.25em] text-white/70">
                  Internal Platform / Frontend Development
                </p>

                <h2 className="font-display max-w-5xl text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.055em]">
                  {title}
                  <span className="text-[#B9C3A7]">.</span>
                </h2>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5">
                <p className="font-body text-[10px] uppercase tracking-[0.18em] text-white/70">Technical Case Study</p>

                <p className="font-body text-[10px] uppercase tracking-[0.18em] text-white/70">Project Overview</p>
              </div>
            </div>
          ) : (
            <div
              data-case-visual
              className="relative mt-14 overflow-hidden rounded-sm bg-[#D8DCD3] px-6 py-12 sm:px-10 sm:py-16 lg:mt-20 lg:px-16 lg:py-20"
            >
              <div className="relative mx-auto aspect-4/3 w-full max-w-225 overflow-hidden rounded-sm">
                <Image
                  src={image}
                  alt={`${title} project preview`}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 900px"
                  className="object-contain"
                />
              </div>

              <div className="pointer-events-none absolute left-5 top-5 hidden sm:block lg:left-8 lg:top-8">
                <p className="font-body text-[10px] uppercase tracking-[0.18em] text-charcoal/50">
                  Harie / Selected Work
                </p>
              </div>

              <div className="pointer-events-none absolute bottom-5 right-5 hidden sm:block lg:bottom-8 lg:right-8">
                <p className="font-body text-[10px] uppercase tracking-[0.18em] text-charcoal/50">Digital Experience</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </CaseStudyEntrance>
  );
}
