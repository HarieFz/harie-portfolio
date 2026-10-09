import { ArrowUpLeft } from "lucide-react";
import TransitionLink from "../ui/TransitionLink";

export default function CaseStudyNavbar() {
  return (
    <header className="relative z-20 bg-[#F6F2E9]">
      <nav
        aria-label="Case study navigation"
        className="mx-auto flex h-20 w-full max-w-350 items-center justify-between px-6 md:px-10 lg:px-14"
      >
        <TransitionLink
          href="/"
          aria-label="Harie — Home"
          className="font-display text-3xl font-semibold tracking-[-0.06em] text-olive-dark"
        >
          Harie<span className="text-[#737B58]">.</span>
        </TransitionLink>

        <TransitionLink
          href="/#projects"
          className="group inline-flex items-center gap-3 font-body text-xs font-medium text-olive-dark transition-colors hover:text-[#737B58]"
        >
          <ArrowUpLeft
            size={17}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />

          <span>Back to Projects</span>
        </TransitionLink>
      </nav>
    </header>
  );
}
