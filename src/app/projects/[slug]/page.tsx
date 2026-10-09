import { Suspense } from "react";
import { notFound } from "next/navigation";

import CaseStudyNavbar from "@/components/case-study/CaseStudyNavbar";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import ProjectOverview from "@/components/case-study/ProjectOverview";
import ProjectProcess from "@/components/case-study/ProjectProcess";
import ProjectHighlights from "@/components/case-study/ProjectHighlights";
import ProjectShowcase from "@/components/case-study/ProjectShowcase";
import ProjectReflection from "@/components/case-study/ProjectReflection";
import NextProject from "@/components/case-study/NextProject";

import { projects } from "@/data/projects";
import { caseStudies } from "@/data/caseStudies";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

async function CaseStudyContent({ params }: Readonly<CaseStudyPageProps>) {
  const { slug } = await params;

  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];

  const caseStudy = caseStudies[slug as keyof typeof caseStudies];

  // Automatically select the next project.
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <>
      <CaseStudyHero
        title={project.title}
        category={project.category}
        description={project.description}
        year={project.year}
        role="Frontend Development"
        image={project.image}
        display={project.display}
      />

      {caseStudy?.overview && <ProjectOverview {...caseStudy.overview} />}

      {caseStudy?.process && <ProjectProcess {...caseStudy.process} />}

      {caseStudy?.highlights && <ProjectHighlights {...caseStudy.highlights} display={project.display} />}

      {caseStudy?.showcase && <ProjectShowcase {...caseStudy.showcase} display={project.display} />}

      {caseStudy?.reflection && <ProjectReflection {...caseStudy.reflection} />}

      <NextProject project={nextProject} number={nextIndex + 1} />
    </>
  );
}

export default function CaseStudyPage({ params }: Readonly<CaseStudyPageProps>) {
  return (
    <>
      <CaseStudyNavbar />

      <main>
        <Suspense fallback={<output className="block min-h-screen bg-[#F6F2E9]" aria-label="Loading case study" />}>
          <CaseStudyContent params={params} />
        </Suspense>
      </main>
    </>
  );
}
