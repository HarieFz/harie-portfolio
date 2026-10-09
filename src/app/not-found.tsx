import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh flex-col overflow-hidden bg-cream text-olive-dark">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-7 sm:px-10 lg:px-16">
        <Link href="/" className="font-display text-3xl tracking-[-0.06em] text-olive-dark">
          Harie<span className="text-olive">.</span>
        </Link>

        <span className="font-manrope text-[10px] uppercase tracking-[0.2em] text-olive">Error / 404</span>
      </header>

      {/* Content */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <p className="font-manrope mb-7 text-[10px] font-medium uppercase tracking-[0.3em] text-olive">
          You've wandered off
        </p>

        <h1 className="font-display text-[clamp(9rem,27vw,25rem)] leading-[0.7] tracking-[-0.09em]">
          404<span className="text-olive">.</span>
        </h1>

        <div className="relative z-10 mt-10 sm:mt-14">
          <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] italic leading-none tracking-tighter">
            Lost in the details.
          </h2>

          <p className="font-manrope mx-auto mt-6 max-w-md text-sm leading-7 text-olive/80">
            The page you're looking for doesn't exist, or has found a new home.
          </p>

          <Link
            href="/"
            className="group mt-10 inline-flex items-center gap-8 rounded-full bg-olive-dark px-7 py-4 font-manrope text-xs font-medium text-cream transition-colors duration-300 hover:bg-olive"
          >
            Back to Homepage
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between gap-4 px-6 py-7 sm:px-10 lg:px-16">
        <span className="font-manrope text-[10px] uppercase tracking-[0.16em] text-olive">Designed with intention</span>

        <span className="font-manrope text-[10px] uppercase tracking-[0.16em] text-olive">© Harie</span>
      </footer>
    </main>
  );
}
