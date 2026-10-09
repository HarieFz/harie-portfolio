import Image from "next/image";

interface CaseStudyHeroProps {
  title: string;
  category: string;
  description: string;
  year: string;
  role: string;
  image: string;
  display?: "desktop" | "mobile";
}

export default function CaseStudyHero({
  title,
  category,
  description,
  year,
  role,
  image,
  display = "desktop",
}: Readonly<CaseStudyHeroProps>) {
  const isMobile = display === "mobile";

  return (
    <section className="overflow-hidden bg-[#F6F2E9] px-6 pb-20 pt-36 sm:px-10 lg:px-14 lg:pb-28 lg:pt-44">
      <div className="mx-auto max-w-350">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between border-b border-black/15 pb-5 lg:mb-16">
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#596044]">Selected Work / Case Study</p>

          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-black/50">{year}</span>
        </div>

        {/* Project Information */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
          <div>
            <p className="font-body mb-6 text-[10px] uppercase tracking-[0.2em] text-[#596044]">{category}</p>

            <h1 className="font-display max-w-5xl text-[clamp(3.5rem,7.5vw,8rem)] leading-[0.9] tracking-[-0.055em] text-[#252820]">
              {title}
              <span className="text-[#596044]">.</span>
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="font-body max-w-md text-sm leading-7 text-black/65">{description}</p>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-black/15 pt-6 sm:flex sm:gap-20 lg:mt-16">
          <div>
            <p className="font-body mb-2 text-[10px] uppercase tracking-[0.18em] text-black/45">Role</p>
            <p className="font-body text-xs text-[#252820]">{role}</p>
          </div>

          <div>
            <p className="font-body mb-2 text-[10px] uppercase tracking-[0.18em] text-black/45">Year</p>
            <p className="font-body text-xs text-[#252820]">{year}</p>
          </div>
        </div>

        {/* Project Visual */}
        <div
          className={`relative mt-14 overflow-hidden rounded-sm lg:mt-20 ${
            isMobile ? "bg-[#D8DCD3] px-8 py-14 sm:px-16 sm:py-20 lg:py-24" : "bg-[#D8DCD3] p-6 sm:p-10 lg:p-16"
          }`}
        >
          {isMobile ? (
            <div className="relative mx-auto w-full max-w-65 sm:max-w-75 lg:max-w-85">
              {/* Smartphone Frame */}
              <div className="relative overflow-hidden rounded-[2.5rem] border-[7px] border-[#252820] bg-[#252820] shadow-[0_30px_70px_rgba(0,0,0,0.18)] sm:rounded-[3rem] sm:border-[9px]">
                <div className="relative aspect-9/19 overflow-hidden rounded-[2rem] bg-white sm:rounded-[2.4rem]">
                  <Image
                    src={image}
                    alt={`${title} mobile application preview`}
                    fill
                    priority
                    sizes="(max-width: 640px) 260px, 340px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-sm">
              <Image
                src={image}
                alt={`${title} project preview`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1400px"
                className="object-contain"
              />
            </div>
          )}

          {/* Decorative Labels */}
          <div className="pointer-events-none absolute left-5 top-5 hidden sm:block lg:left-8 lg:top-8">
            <p className="font-body text-[10px] uppercase tracking-[0.18em] text-[#252820]/50">Harie / Selected Work</p>
          </div>

          <div className="pointer-events-none absolute bottom-5 right-5 hidden sm:block lg:bottom-8 lg:right-8">
            <p className="font-body text-[10px] uppercase tracking-[0.18em] text-[#252820]/50">
              {isMobile ? "Mobile Experience" : "Digital Experience"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
