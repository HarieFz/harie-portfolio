import { CAREER_JOURNEY } from "@/constants";

export default function Experience() {
  return (
    <section className="relative z-30 max-w-7xl mx-auto w-full text-white mb-24 lg:mb-0">
      <div className="hidden lg:flex mx-auto w-full max-w-6xl">
        <div className="hidden w-1/2 md:block">
          <div className="sticky top-0 flex h-dvh items-center justify-center">
            <div className="border-l-4 border-white p-3">
              <h1 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
                Career <br /> Journey
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          {CAREER_JOURNEY.map((item) => (
            <div key={item.id} className="flex min-h-screen flex-col justify-center gap-4">
              <div className="space-y-1 ">
                <h2 className="text-2xl font-medium md:text-3xl">{item.title}</h2>
                <p className="text-lg text-white">{item.subtitle}</p>
                <p className="text-base text-white">{item.date}</p>
              </div>

              <p className="whitespace-pre-line text-base leading-relaxed text-white md:text-lg">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden px-8">
        <p className="max-w-5xl text-4xl text-center font-medium leading-[1.05] tracking-tight md:text-6xl mb-8">
          Career Journey
        </p>

        <div className="flex flex-col gap-12">
          {CAREER_JOURNEY.map((item) => (
            <div key={item.id} className="flex flex-col justify-center gap-4">
              <div className="space-y-1 ">
                <h2 className="text-2xl font-medium md:text-3xl">{item.title}</h2>
                <p className="text-lg text-white">{item.subtitle}</p>
                <p className="text-base text-white">{item.date}</p>
              </div>

              <p className="whitespace-pre-line text-base leading-relaxed text-white md:text-lg">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
